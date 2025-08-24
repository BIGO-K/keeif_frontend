import { type RouteRecordRaw } from 'vue-router';
import env from '$/utils/env';
import NotFoundError from '$/errors/NotFoundError';

const routes: RouteRecordRaw[] = [
	// 메인
	{
		path: '/',
		name: 'Main',
		component: () => import('@/page/main/Main.vue'),
	},
	{
		name: 'ClaimOffer',
		path: '/print/claim-offer',
		beforeEnter: () => {
			window.location.href = env('MM_CLAIM_OFFER_URL');
		},
	},
	{
		name: 'External',
		path: '/external',
		component: () => import('@/page/bridge/External.vue'),
	},
	{
		name: 'ThirdPartyResultBridge',
		path: '/:platform/:processType/handle-result',
		props: true,
		component: () => import('@/page/bridge/ThirdPartyLoginBridge.vue'),
	},
	{
		name: 'VerificationResultBridge',
		path: '/certification-result',
		component: () => import('@/page/bridge/VerificationResultBridge.vue'),
	},
	// {
	// 	path: '/:pathMatch(.*)*',
	// 	redirect: { name: 'Error404' },
	// },
	// // 오류
	// {
	// 	path: '/error',
	// 	component: () => import('@/page/error/Error.vue'),
	// 	children: [
	// 		// 일반적인 오류
	// 		{
	// 			path: '',
	// 			name: 'Error',
	// 			component: () => import('@/page/error/ErrorNormal.vue'),
	// 		},
	// 		// 403
	// 		{
	// 			path: '403',
	// 			name: 'Error403',
	// 			component: () => import('@/page/error/403/Error403.vue'),
	// 		},
	// 		// 404
	// 		{
	// 			path: '404',
	// 			name: 'Error404',
	// 			component: () => import('@/page/error/404/Error404.vue'),
	// 		},
	// 		// 500
	// 		{
	// 			path: '500',
	// 			name: 'Error500',
	// 			component: () => import('@/page/error/500/Error500.vue'),
	// 		},
	// 		// 서비스점검
	// 		{
	// 			path: 'maintenance',
	// 			name: 'ErrorMaintenance',
	// 			component: () => import('@/page/error/maintenance/ErrorMaintenance.vue'),
	// 		},
	// 		// 트래픽
	// 		{
	// 			path: 'traffic',
	// 			name: 'ErrorTraffic',
	// 			component: () => import('@/page/error/traffic/ErrorTraffic.vue'),
	// 		},
	// 		// 리뉴얼
	// 		{
	// 			path: 'renewal',
	// 			name: 'ErrorRenewal',
	// 			component: () => import('@/page/error/renewal/ErrorRenewal.vue'),
	// 		},
	// 	]
	// },
	// 약관
	{
		path: '/policy/:policyType',
		name: 'Policy',
		meta: {
			transition: 'slide-up',
			pageType: 'popup',
		},
		component: () => import('@/page/policy/Policy.vue'),
	},
	// 페이지 없음
	{
		name: 'NotFound',
		path: '/:path(.*)',
		props: {
			error: new NotFoundError('페이지를 찾을 수 없습니다'),
		},
		component: () => import('@/page/error/TheError.vue'),
	},
];

export default routes;