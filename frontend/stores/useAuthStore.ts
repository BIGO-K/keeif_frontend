import { ref } from 'vue';
import { defineStore } from 'pinia';
import SecureLS from 'secure-ls';
import { useExpireStore } from '$/stores/useExpireStore';
import { useRecentViewGoodsStore } from '$/stores/useRecentViewGoodsStore';
import monsDate from '$/utils/date';
import thirdPartyConfig from '$/utils/thirdPartyPlatformLabel';
import { useAirbridge } from '$/composables/useAirbridge';
import { useBackend } from '$/composables/useBackend';
import { useCart } from '$/composables/useCart';
import { useChannelTalk } from '$/composables/useChannelTalk';
import { useNativeApp } from '$/composables/useNativeApp';
import { useUserAgent } from '$/composables/useUserAgent';

type RefreshUserResult = LoginResult;

const secureLs = new SecureLS({ isCompression: true });
/**
 * 유저 관련 스토어
*/
export const useAuthStore = defineStore('auth', () => {
	const userUuid = ref<string|undefined>(undefined);
	const memberToken = ref<MemberToken|null>(null);
	const rememberedId = ref<string>('');
	const member = ref<AuthorizeMember|null>(null);
	const guestToken = ref<string|null>(null);
	const guest = ref<Guest|null>(null);
	const loginFailCount = ref<number>(0);
	const isUpdatedToken = ref<boolean>(false);
	const { isAppUser } = useUserAgent();
    /** 마지막 로그인한 플랫폼 타입 */
	const latestThirdPartyPlatformType = ref<string>('');
    /** 서드파티 프로필 */
	const thirdPartyProfile = ref<ThirdPartyProfile|null>(null);
    /** 본인인증 프로필 */
	const identityVerificationProfile = ref<IdentityProfile|null>(null);
	const expireStore = useExpireStore();
	const cart = useCart();

    /** 쇼핑몰 방문자의 고유값 생성 */
	async function generateUserUuid(): Promise<void> {
		if (userUuid.value) {
			return;
		}
		const { uuid } = await useBackend().command<{ uuid: string }>('v1/generate-uuid');
		userUuid.value = uuid;
	}

	const getLegacyCartPack = async () => {
		return await cart.getCartPacks();
	};
    /**
     * 로그인처리
     * @param form
     * @returns
    */
	async function login(form: LoginForm): Promise<LoginResult> {
		const response = await useBackend().command<LoginResult, LoginForm>('v1/auth/login', {
			method: 'post',
			data: {
				login_id: form.login_id,
				password: form.password,
			},
		});

		const cartPacks = await getLegacyCartPack();

		memberToken.value = {
			token: response.token,
			refresh_token: response.refresh_token,
			expiry_at: response.expiry_at,
		};
		member.value = {
			login_type: 'shop',
			login_id: response.user.login_id,
			name: response.user.name,
			is_verify_age: response.is_verify_age,
			is_certificated: response.is_certificated,
			grade: response.user.grade,
		};

        /** 아이디 저장하기 허용시 처리 */
		rememberedId.value = form.remember ? form.login_id : ``;
        /** 마지막 로그인 정보 초기화  */
		latestThirdPartyPlatformType.value = '';
        /** 회원 쇼핑정보 동기화 처리  */
		await syncShoppingHistory(cartPacks);
        /** 로그인 실패횟수 초기화  */
		loginFailCount.value = 0;

		useChannelTalk().userBoot();

		return response;
	}

	async function loginByThirdParty(platform: ThirdPartyPlatforms, token: string): Promise<LoginResult> {
		const { isUsablePlatform } = thirdPartyConfig;

		const cartPacks = await getLegacyCartPack();

		if (!isUsablePlatform) {
			throw ({
				message: '사용할수 없는 소셜 로그인 입니다.',
			});
		}

        /** 플랫폼 라벨 */
		// const platformLabel = getLabel(platform);

		const result = await useBackend().command<LoginResult>(
			`v1/auth/login-with-3rd-party-authentication`,
			{
				method: 'post',
				data: {
					platform_type: platform,
					access_token: token,
				},
			},
		);

        /** 인증 컨텍스트 설정 */
		memberToken.value = {
			token: result.token,
			refresh_token: result.refresh_token,
			expiry_at: result.expiry_at,
		};

		member.value = {
			login_type: platform,
			login_id: result.user.login_id,
			name: result.user.name,
			is_verify_age: result.is_verify_age,
			is_certificated: result.is_certificated,
			grade: result.user.grade,
		};

        /** 최근 로그인 플랫폼 기억 */
		latestThirdPartyPlatformType.value = platform;
        /** 아이디 저장 초기화 */
		rememberedId.value = '';
        /** 쇼핑정보 동기화 */
		await syncShoppingHistory(cartPacks);
        /** 실패횟수 초기화 */
		loginFailCount.value = 0;

		return result;
	}

    /** 이전 쇼핑 정보 불러오기 */
	async function syncShoppingHistory(cartPacks: CartPack[]) {
		const nativeApp = useNativeApp();
		if (cartPacks.length > 0) {
            /** 기존 장바구니 ITEM */
			const alreadyCartedItems = cart.packs.value.flatMap(pack => pack.items);
			const addToCarts = cartPacks.flatMap(pack => pack.items)
				.map(cartItem => ({
					option_id: cartItem.option_id,
					goods_id: cartItem.goods.id,
					ea: cartItem.ea
                        /** 기존 장바구니에 동일옵션 수량 있으면 빼주기 */
                        - (alreadyCartedItems.find(alreadyCartedItem => alreadyCartedItem.option_id == cartItem.option_id)?.ea || 0),
				}))
                /** 기존 장바구니 동일옵션 수량 빼면서 음수 발생가능 */
				.filter(addToCart => addToCart.ea > 0);

			if (addToCarts.length > 0) {
				cart.add(addToCarts);
			}
		}
		useRecentViewGoodsStore().load();
		if (isAppUser) {
			nativeApp.updateFirebaseMessagingToken();
		}

		cart.getCount();
	}

	async function getAccessToken(): Promise<string|null> {
		if (!member.value) {
			if (guestToken.value) {
				return guestToken.value;
			}

			return null;
		}

		if (!memberToken.value) {
			member.value = null;

			return null;
		}

		const diffTimes = new Date(memberToken.value.expiry_at).getTime() - new Date().getTime();

		if (Math.round((diffTimes / 1000) / 60) < 10 && !isUpdatedToken.value) {
			isUpdatedToken.value = true;
			try {
				const { token, expiry_at } = await useBackend().command<{
					token: string;
					expiry_at: string;
				}>(
					'v1/auth/refresh-token',
					{
						method: 'post',
						data: {
							token: memberToken.value.token,
							refresh_token: memberToken.value.refresh_token,
						},
					},
				);

				memberToken.value.token = token;
				memberToken.value.expiry_at = expiry_at;
			}
			catch (e) {
				console.error(e);
				memberToken.value = null;
				member.value = null;

				return null;
			}
			finally {
				isUpdatedToken.value = false;
			}
		}

		return memberToken.value.token;
	}

    /** 회원 로그아웃 처리 */
	async function logout() {
		useAirbridge().signOut(member.value?.login_type);
		try {
			await useBackend().command('v1/auth/logout', {
				method: 'post',
			});
		}
		catch (error) {
			console.error(error);
		}
        /** user context clear */
		memberToken.value = null;
		member.value = null;
		userUuid.value = null;
        /** 쇼핑정보 초기화 */
		useRecentViewGoodsStore().records = [];
		cart.packs.value = [];
		cart.count.value = 0;


        /** 방문객 구분토큰 갱신 */
		await generateUserUuid();
	}

    /**
     * user context refresh
    */
	async function refresh() {
		const refreshResult = await useBackend().command<RefreshUserResult>('v1/auth/refresh', {
			method: 'post',
		});

		memberToken.value = {
			token: refreshResult.token,
			refresh_token: refreshResult.refresh_token,
			expiry_at: refreshResult.expiry_at,
		};
		member.value = {
			login_type: member.value?.login_type || 'shop',
			login_id: refreshResult.user.login_id,
			name: refreshResult.user.name,
			is_verify_age: refreshResult.is_verify_age,
			is_certificated: refreshResult.is_certificated,
			grade: refreshResult.user.grade,
		};
	}

    /**
     * 비회원 로그인
     * @param guestInfo
     */
	async function guestLogin(guestInfo: Guest) {
		const { token } = await useBackend().command<{
            token: string
        }>('v1/auth/guest-login', { method: 'post', data: guestInfo });

		guestToken.value = token;
		guest.value = guestInfo;
	}

	async function regist(form: RegistForm) {
		const { regist_events } = await useBackend().command<{
			regist_events: RegistEvent[]
		}>('v1/members', {
			method: 'post',
			data: {
				login_id: form.login_id,
				name: form.name,
				password: form.password,
				phone_number: form.phone_number,
				is_receive_sms: form.is_receive_sms,
				is_receive_email: form.is_receive_email,
				gender: form.gender,
				birthdate: form.birth_year * form.birth_month * form.birth_day !== 0
					? monsDate(`${form.birth_year}-${form.birth_month}-${form.birth_day}`).format('YYYY-MM-DD')
					: null,
				identity_token: identityVerificationProfile.value.token,
				policies: form.policies.map((policy) => {
					return {
						id: policy.id,
						code: policy.code,
						is_agree: policy.is_agree,
					};
				}),
			},
		});

		useAirbridge().singUp('shop', {
			loginId: form.login_id,
			phone: form.phone_number,
		});
		useChannelTalk().signIn('shop');
		expireStore.set(`regist_event`, regist_events);
	}

	async function thirdPartyRegist(
		form: RegistByThirdPartyAuthForm,
		profile: ThirdPartyProfile,
	) {
		await useBackend().command('v1/members/by-3rd-party-authentication', {
			method: 'post',
			data: {
				platform: profile.platform,
				email: form.email,
				name: form.name,
				phone_number: form.phone_number,
				is_receive_sms: form.is_receive_sms,
				is_receive_email: form.is_receive_email,
				gender: form.gender,
				birthdate: form.birth_year * form.birth_month * form.birth_day !== 0
					? monsDate(`${form.birth_year}-${form.birth_month}-${form.birth_day}`).format('YYYY-MM-DD')
					: null,
				access_token: profile.token,
				policies: form.policies,
			},
		});

		useAirbridge().singUp(profile.platform, {
			loginId: form.email,
			email: form.email,
			phone: form.phone,
		});
		useAirbridge().singUp(profile.platform);
	}

	async function adultVerification(token: string) {
		await useBackend().command('v1/members/adult-verifications/confirm', {
			method: 'post',
			data: {
				token: token,
			},
		});
	}

	async function passwordChangeWarningConfirm(nowPassword: string, newPassword: string, isAfterMonth?: boolean = false) {
		await useBackend().command('v1/members/password-warnings/confirm', {
			method: 'post',
			data: {
				now_password: nowPassword,
				new_password: newPassword,
				after_month: isAfterMonth,
			},
		});
	}

	return {
		isUpdatedToken,
		thirdPartyProfile,
		latestThirdPartyPlatformType,
		identityVerificationProfile,
		userUuid,
		rememberedId,
		member,
		memberToken,
		guest,
		guestToken,
		loginFailCount,
		generateUserUuid,
		login,
		logout,
		getAccessToken,
		refresh,
		loginByThirdParty,
		guestLogin,
		regist,
		adultVerification,
		thirdPartyRegist,
		passwordChangeWarningConfirm,
	};
}, {
	persist: {
		storage: {
			getItem: (key) => secureLs.get(key),
			setItem: (key, value) => secureLs.set(key, value),
		},
	},
});