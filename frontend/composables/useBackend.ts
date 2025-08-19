import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';
import { useAffiliateStore } from '$/stores/useAffiliateStore';
import { useAuthStore } from '$/stores/useAuthStore';
import env from '$/utils/env';
import { useUserAgent } from '$/composables/useUserAgent';
import { HTTP_STATUS_CODE } from '$/constants/HTTPSTATUSCODE';


interface CommandOption<D> {
    method?: 'get' | 'post' | 'put' | 'delete'
    params?: Record<string, string|number|boolean>
	isForce?: boolean
    data?: D
    asForm?: boolean
}
window.process = { ...window.process, env: { LOGGER_LEVEL: 'warn' } };

const axiosInstance = axios
	.create({
		adapter: cacheAdapterEnhancer(axios.defaults.adapter, {
			enabledByDefault: false,
		}),
		headers: {
			'user-device-type': 'mobile',
			'affiliate-code': 'MOBILE',
		},
		baseURL: `${env('MM_BACKEND_BASE_URL')}/api/` || 'https://backend.keeif.kr/api/',
	});

/**
 * axios request 인터셉트
 * 인증토큰 헤더 처리
 */
axiosInstance.interceptors.request.use(async (config) => {
	const authStore = useAuthStore();
	const { isMobileUser } = useUserAgent();
	const userToken = await authStore.getAccessToken();
	const affiliateStore = useAffiliateStore();
	if (config.headers && userToken) {
		config.headers.Authorization = `Bearer ${userToken}`;
	}
	config.headers['uid-token'] = authStore.userUuid;
	config.headers['agent-device-type'] = isMobileUser ? 'mobile' : 'pc';
	if (config.headers && affiliateStore.currentCode) {
		config.headers['affiliate-code'] = affiliateStore.currentCode;
	}

	return config;
}, null);

/**
 * axios response 인터셉트
 * 인증오류시 사용자 컨텍스트 초기화
 */
axiosInstance.interceptors.response.use(
	null,
	(error) => {
    // accessToken 값을 가지고 갔는데 AuthenticationException 오류가 나면 로컬 토큰 리셋처리
		if (
			error.config?.headers?.Authorization &&
        error.response?.status == HTTP_STATUS_CODE.UNAUTHORIZED &&
        error.response?.headers &&
        error.response?.headers['cause-exception'] == 'AuthenticationException'
		) {
			const authStore = useAuthStore();
			if (authStore.member) {
				authStore.logout();
			}
		}
	// console.log(error, 'onerror');

		return Promise.reject(error);
	});


export const useBackend = () => {
    /** API 통신 실행 처리  */
	async function command<ResT, D = unknown>(
		path: string,
		options?: CommandOption<D>,
	): Promise<ResT> {
        // JWT 토큰 설정 처리
		if (options?.method === 'post') {
			const executor = options?.asForm ? axiosInstance.postForm : axiosInstance.post;
			const res = await executor(
				path,
				options.data,
				{
					params: options.params,
				},
			);

			return res.data;
		}

		const res = await axiosInstance.get<ResT>(path, {
			params: options?.params,
			cache: true,
			forceUpdate: history.state.forward === null || (options?.isForce || false),
		});

		return res.data;
	}

	async function getVersion(): Promise<{ ver: number}> {
		const res = await command<{ version: number }>(`v1/app/version`);

		return res.version;
	}


	return {
		command,
		getVersion,
	};
};