import { computed } from 'vue';
import { useExpireStore } from '$/stores/useExpireStore';
import monsDate from '$/utils/date';
import { useBackend } from '$/composables/useBackend';

export function useMemberInformation() {
	const tokenKey = 'reverifyToken';

    // 만료 data store
	const expireStore = useExpireStore();

    // 재인증 액세스 토큰
	const accessToken = computed(() => expireStore.get(tokenKey, ''));

	const memberInfo = computed(() => expireStore.get<PersonalInformation>('memberInfo'));

    /**
     * 재인증(재로그인)
     * @param password
     */
	async function reverify(password: string) {
		const { access_token, expire_at } = await useBackend().command<ExpireToken>('v1/my/prepare-for-edit', {
			method: 'post',
			data: { password },
		});

		expireStore.set(tokenKey, access_token, {
			expired_at: monsDate(expire_at).toDate(),
		});
	}


    /**
     * 소셜로그인 재인증(재로그인)
     * @param platform
     * @param thirdPartyAccessToken
     */
	async function reverifyByThirdParty(platform: string, thirdPartyAccessToken: string) {
		const { access_token, expire_at } = await useBackend().command<ExpireToken>('v1/my/prepare-for-edit-by-3rd-party-authentication', {
			method: 'post',
			data: {
				platform_type: platform,
				access_token: thirdPartyAccessToken,
			},
		});

		expireStore.set(tokenKey, access_token, {
			expired_at: monsDate(expire_at).toDate(),
		});
	}

    /**
     * 회원정보 조회
     * @returns
     */
	async function get() {
		if (!accessToken.value) {
			throw new Error('세션이 만료되었습니다.');
		}

		const memberInfo = await useBackend().command<PersonalInformation>('v1/my/me-for-edit', {
			params: {
				access_token: accessToken.value,
			},
		});

		expireStore.set('memberInfo', memberInfo, {
			expired_at: monsDate().add(10, 'minute').toDate(),
		});

		return memberInfo;
	}

    /**
     * 회원정보 수정
     * @returns
     */
	async function update(form: PersonalInformationForm) {
		await useBackend().command('v1/my', {
			method: 'post',
			data: {
				...form,
				access_token: accessToken.value,
			},
		});
	}

    /**
     * 비밀번호 수정
     * @param newPassword
     */
	async function updatePassword(newPassword: string) {
		await useBackend().command('v1/my/change-password', {
			method: 'post',
			data: {
				new_password: newPassword,
				access_token: accessToken.value,
			},
		});
	}

    /**
     * 이메일 중복 확인
     * @param email
     * @returns
     */
	async function checkDuplicateEmail(email: string) {
		const { is_duplicate_exists } = await useBackend().command<{
            is_duplicate_exists: boolean
        }>('v1/my/check-unique-email', {
        	params: {
        		email,
        	},
        });

		return is_duplicate_exists;
	}

    /**
     * 현재 비밀번호 일치 여부 확인
     * @param password
     * @returns
     */
	async function checkCurrentPassword(password: string) {
		const { is_match } = await useBackend().command<{
            is_match: boolean
        }>('v1/my/check-current-password', {
        	method: 'post',
        	data: {
        		current_password: password,
        		access_token: accessToken.value,
        	},
        });

		return is_match;
	}


    /**
     * 회원탈퇴 사유
     * @returns
     */
	async function getWithdrawReasons() {
		const { withdraw_reasons } = await useBackend().command<{
            withdraw_reasons: WithdrawReason[]
        }>('v1/members/withdraw/reasons');

		return withdraw_reasons;
	}

    /**
     * 회원 탈퇴 처리
     * @param reasonCode
     * @param reasonDetail
     */
	async function withdraw(reasonCode: number, reasonDetail: string) {
		await useBackend().command('v1/my/withdraw', {
			method: 'post',
			data: {
				access_token: accessToken.value,
				reason_code: reasonCode,
				reason_detail: reasonDetail,
			},
		});
	}

    /**
     * 계정에 연결된 소셜정보 조회
     * @returns
     */
	async function getConnectedSocials() {
		const { connected_socials, is_usable_connect } = await useBackend().command<{
            connected_socials: string[],
            is_usable_connect: boolean
        }>('v1/my/connected-3rd-party-authentications');

		return {
			isAppleConnected: connected_socials.includes('apple'),
			isNaverConnected: connected_socials.includes('naver'),
			isFacebookConnected: connected_socials.includes('facebook'),
			isKakaoConnected: connected_socials.includes('kakao') || connected_socials.includes('kakao_sync'),
			isPaycoConnected: connected_socials.includes('payco'),
			isUsableConnect: is_usable_connect, // 소셜 연동 가능 여부
		};
	}

	async function connectSocial(platform: ThirdPartyPlatforms, token: string) {
		await useBackend().command(`v1/3rd-party-authentications/${platform}/${token}/connect`, { method: 'post' });
	}

	async function disConnectSocial(platform: ThirdPartyPlatforms) {
		await useBackend().command(`v1/3rd-party-authentications/${platform}/disconnect`, { method: 'post' });
	}

	async function removeToken() {
		expireStore.expire(tokenKey);
	}


	return {
		accessToken,
		memberInfo,
		get,
		update,
		reverify,
		reverifyByThirdParty,
		updatePassword,
		checkDuplicateEmail,
		checkCurrentPassword,
		getWithdrawReasons,
		withdraw,
		getConnectedSocials,
		connectSocial,
		disConnectSocial,
		removeToken,
	};
}