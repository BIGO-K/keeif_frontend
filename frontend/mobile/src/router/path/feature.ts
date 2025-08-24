import { type RouteRecordRaw } from 'vue-router';

// TODO store에서 사용하는 유료 타입에 따라 링크 삭제

const routes: RouteRecordRaw[] = [
	// 이벤트
	{
		path: '/event',
		children: [
			// {
			// 	path: '',
			// 	name: 'Event',
			// 	component: () => import('@/feature/event/Event.vue'),
			// },
			// 이벤트 상세
			{
				path: ':id(\\d+)',
				name: 'EventDetail',
				component: () => import('@/feature/event/EventDetail.vue'),
				props: (route) => ({ id: Number(route.params.id) }),
			},
		],
	},
	// 체험단
	{
		path: '/experience',
		children: [
			{
				path: '',
				name: 'Experience',
				meta: {
					pageType: 'sub',
					transition: 'slide-right',
				},
				component: () => import('@/feature/experience/Experience.vue'),
			},
			// 체험단 상세
			{
				path: ':id(\\d+)',
				meta: {
					pageType: 'popup',
					transition: 'slide-up',
				},
				name: 'ExperienceDetail',
				component: () => import('@/feature/experience/ExperienceDetail.vue'),
				props: (route) => ({ id: Number(route.params.id) }),
			},
		],
	},
	// 쇼케이스
	{
		path: '/showcase',
		children: [
			{
				path: '',
				name: 'Showcase',
				component: () => import('@/feature/showcase/Showcase.vue'),
			},
			// 쇼케이스 상세
			{
				path: ':id(\\d+)',
				name: 'ShowcaseDetail',
				meta: {
					pageType: 'sub',
					transition: 'slide-right',
				},
				component: () => import('@/feature/showcase/ShowcaseDetail.vue'),
			},
		],
	},
	// 고객센터
	{
		path: '/cscenter',
		children: [
			{
				// 이용안내
				path: 'help',
				children: [
					{
						path: 'pay-kakao',
						name: 'CsHelpPayKakao',
						component: () => import('@/feature/easypay/EasypayCsHelpKakao.vue'),
					},
					{
						path: 'pay-naver',
						name: 'CsHelpPayNaver',
						component: () => import('@/feature/easypay/EasypayCsHelpNaver.vue'),
					},
					{
						path: 'pay-payco',
						name: 'CsHelpPayPayco',
						component: () => import('@/feature/easypay/EasypayCsHelpPayco.vue'),
					},
					{
						path: 'pay-toss',
						name: 'CsHelpPayToss',
						component: () => import('@/feature/easypay/EasypayCsHelpToss.vue'),
					},
				],
			},
		],
	},
];

export default routes;