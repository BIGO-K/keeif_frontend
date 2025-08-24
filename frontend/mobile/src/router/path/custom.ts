import { type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	// 공구상품관
	{
		path: '/coop',
		name: 'Coop',
		meta: {
			pageType: 'sub',
			transition: 'slide-right',
		},
		component: () => import('@/custom/coop/Coop.vue'),
		redirect: {
			name: 'CoopProgress',
		},
		children: [
			{
				path: 'upcoming',
				name: 'CoopUpcoming',
				meta: {
					tab: '진행 예정',
				},
				component: () => import('@/custom/coop/CoopUpcomming.vue'),
			},
			{
				path: 'progress',
				name: 'CoopProgress',
				meta: {
					tab: '진행 중',
				},
				component: () => import('@/custom/coop/CoopProgress.vue'),
			},
			{
				path: 'end',
				name: 'CoopEnd',
				meta: {
					tab: '진행 마감',
				},
				component: () => import('@/custom/coop/CoopEnd.vue'),
			},
		],
	},
	// 미니샵(keeif 추가 페이지)
	{
		path: '/minishop/:url(.*)*',
		meta: {
			pageType: 'sub',
			transition: 'slide-right',
		},
		name: 'MiniShop',
		component: () => import('@/custom/minishop/MiniShop.vue'),
	},
	{
		path: '/influencer/:id(\\d+)',
		meta: {
			pageType: 'sub',
			transition: 'slide-right',
		},
		name: 'InfluencerShop',
		component: () => import('@/custom/minishop/MiniShop.vue'),
		props: (route) => ({ id: Number(route.params.id) }),
	},
	// 마이페이지
	{
		path: '/mypage',
		meta: {
			pageType: 'popup',
			transition: 'slide-up',
			authRequired: true,
		},
		children: [
			// 팔로잉 목록
			{
				path: 'follow',
				name: 'MyFollow',
				component: () => import('@/custom/mypage/follow/MyFollow.vue'),
			},
		],
	},
];

export default routes;