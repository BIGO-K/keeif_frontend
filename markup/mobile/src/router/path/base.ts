import { type RouteRecordRaw } from 'vue-router';
// import { HeaderComponent } from '$/stores/useConfigStore';

const routes: RouteRecordRaw[] = [
	// 메인
	{
		path: '/',
		name: 'Main',
		component: () => import('@/page/main/Main.vue'),
	},
	// 페이지 없음
	{
		path: '/:pathMatch(.*)*',
		redirect: { name: 'Error404' },
	},
	// 오류
	{
		path: '/error',
		component: () => import('@/page/error/Error.vue'),
		children: [
			// 일반적인 오류
			{
				path: '',
				name: 'Error',
				component: () => import('@/page/error/ErrorNormal.vue'),
			},
			// 403
			{
				path: '403',
				name: 'Error403',
				component: () => import('@/page/error/403/Error403.vue'),
			},
			// 404
			{
				path: '404',
				name: 'Error404',
				component: () => import('@/page/error/404/Error404.vue'),
			},
			// 500
			{
				path: '500',
				name: 'Error500',
				component: () => import('@/page/error/500/Error500.vue'),
			},
			// 서비스점검
			{
				path: 'maintenance',
				name: 'ErrorMaintenance',
				component: () => import('@/page/error/maintenance/ErrorMaintenance.vue'),
			},
			// 트래픽
			{
				path: 'traffic',
				name: 'ErrorTraffic',
				component: () => import('@/page/error/traffic/ErrorTraffic.vue'),
			},
			// 리뉴얼
			{
				path: 'renewal',
				name: 'ErrorRenewal',
				component: () => import('@/page/error/renewal/ErrorRenewal.vue'),
			},
		]
	},
	// 약관
	{
		path: '/policy/:policyType',
		name: 'Policy',
		component: () => import('@/page/policy/Policy.vue'),
	},
	// 개인정보처리방침 -  업체리스트
	{
		path: '/policy/privacy/vendor',
		name: 'PolicyPrivacyVendor',
		component: () => import('@/page/policy/privacy/vendor/PolicyPrivacyVendor.vue'),
	},
];

export default routes;