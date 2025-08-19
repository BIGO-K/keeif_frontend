import { ref } from 'vue';
import { RouteLocation } from 'vue-router';
import { useAuthStore } from '$/stores/useAuthStore';
import { useExpireStore } from '$/stores/useExpireStore';
import thirdPartyConfig from '$/utils/thirdPartyPlatformLabel';
import { useAirbridge } from '$/composables/useAirbridge';
import { useBackend } from '$/composables/useBackend';
import { useChannelTalk } from '$/composables/useChannelTalk';
import { HTTP_STATUS_CODE } from '$/constants/HTTPSTATUSCODE';

type RedirectPath = RouteLocation & {
    href: string;
}

type ThirdPartyGenerateEnterContext = GenerateEnterContext & {
    is_member_registable_with_platform_token: boolean
}

type AuthResult = {
    success: boolean
    error_message: string
    profile?: Omit<ThirdPartyProfile, 'platform' | 'platform_label' | 'token'>
}

export function useThirdPartyAuth(platform: ThirdPartyPlatforms) {
	const { getLabel } = thirdPartyConfig;
	const expireStore = useExpireStore();
	const token = ref<string>('');
	const platformLabel = getLabel(platform);

    /** 컨텍스트 시작 처리 */
	async function generateEnterContext(redirectPathRouter?: RedirectPath) {

		const params = redirectPathRouter
			? { fe_redirect_url: `${location.origin}${redirectPathRouter.href}` }
			: undefined;

		const context = await useBackend().command<ThirdPartyGenerateEnterContext>(`/v1/3rd-party-authentications/${platform}/generate-token`, {
			method: 'post',
			params: params,
		});

		token.value = context.token;

		return context;
	}

    /** 컨텍스트 토큰으로 인증결과 조회 */
	async function getAuthResultByToken(): Promise<ThirdPartyProfile> {
		const processFinished = await checkThirdPartyTokenGenerateStatus(platform, token.value);

		if (!processFinished) {
			throw new Error(`${platformLabel} 로그인을 취소 하셨습니다.`);
		}

		const result = await useBackend().command<AuthResult>(
			`/v1/3rd-party-authentications/${platform}/${token.value}/result`,
			{
				method: 'post',
			},
		);

		if (!result.success) {
			throw new Error(result.error_message);
		}

		if (!result.profile) {
			throw new Error(result.error_message);
		}

		return {
			...result.profile,
			token: token.value,
			platform,
			platform_label: platformLabel,
		};
	}

    /** 이메일로 중복회원 조회 */
	async function getDuplicatesByEmail(email: string) {
		const { duplicate_users } = await useBackend().command<{
            duplicate_users: ThirdPartyDuplicateInfo[]
        }>('v1/3rd-party-authentications/duplicates-by-email', {
        	method: 'post',
        	data: {
        		email: email,
        	},
        });

        // 중복회원 존재하는 경우 마스킹정보 저장
		if (duplicate_users.length > 0) {
			expireStore.set(`duplicate-social-users`, duplicate_users);
		}

		return duplicate_users;
	}

    /**
	 * 서드파티 토큰 발급 완료 여부
	 * @param platform
	 * @param token
    */
	async function checkThirdPartyTokenGenerateStatus(
		platform: ThirdPartyPlatforms,
		token: string,
	): Promise<boolean> {
		return new Promise(async (resolve, reject) => {
			try {
				const { is_process_finished } = await useBackend().command<{ is_process_finished: boolean}>(
					`v1/3rd-party-authentications/${platform}/${token}/check-state`,
					{
						method: 'post',
					},
				);
				resolve(is_process_finished);
			}
			catch (e) {
				reject(e);
			}
		});
	}

    /** 컨텍스트 토큰으로 소셜 회원가입 요청 */
	async function registWithToken(socialUser: ThirdPartyProfile) {
		await useBackend().command(
			`v1/3rd-party-authentications/${platform}/${token.value}/regist-member-by-authentication-profile`,
			{
				method: 'post',
			},
		);

		useAirbridge().singUp('kakao', {
			loginId: socialUser.email,
			email: socialUser.email,
		});

		useChannelTalk().signIn('kakao');

        // const registEvents = await registRepository.socialUserRegistWithToken(platform, accessToken.value);
        // registerStore.completeRegister(registEvents);
        // return registEvents;
	}

	async function getProfile(accessToken: string, platform: string): Promise<ThirdPartyProfile> {
		const profile = await useBackend().command<{
			birthdate: string;
			email: string;
			gender: string;
			name: string;
			phone_number: string;
		}>('/v1/auth/profile-by-3rd-party-authentication', {
			method: 'post',
			data: {
				platform_type: platform,
				access_token: accessToken,
			},
		});

		return {
			...profile,
			token: accessToken,
			platform: platform,
			platform_label: platformLabel,
			is_registered_user: false,
		};
	}

	async function nativeCallbackNaverLogin(accessToken: string): Promise<{
		isLoginComplete: boolean,
		result?: LoginResult
		profile?: ThirdPartyProfile
	}> {
		const authStore = useAuthStore();

		try {
			const loginResult = await authStore.loginByThirdParty('naver', accessToken);

			return {
				isLoginComplete: true,
				result: loginResult,
			};
		}
		catch (error) {
			if (error.response?.status === HTTP_STATUS_CODE.UNAUTHORIZED) {
				const profile = await getProfile(accessToken, 'naver');

				return {
					isLoginComplete: false,
					profile: profile,
				};
			}
			else {
				throw ({
					message: '네이버 로그인에 실패 하였습니다.',
				});
			}
		}

	}

	function setAccessToken(storeToken: string) {
		if (!storeToken) {
			throw {
				message: '토큰이 없습니다.',
			};
		}

		token.value = storeToken;
	}

	return {
		generateEnterContext,
		getAuthResultByToken,
		getDuplicatesByEmail,
		platformLabel,
		registWithToken,
		nativeCallbackNaverLogin,
		setAccessToken,
	};
}2;