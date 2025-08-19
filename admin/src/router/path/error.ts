const routes = [
	{
		path: '/error',
		meta: {
			layout: 'L=error',
			isShowHeader: false,
			isShowFooter: false,
			isShowLnb: false,
		},
		children: [
			{
				path: '',
				name: 'Error',
				component: () => import('@/pages/common/error/Error.vue'),
			},
			{
				path: '404',
				name: 'Error404',
				component: () => import('@/pages/common/error/Error404.vue'),
			},
			{
				path: '403',
				name: 'Error403',
				component: () => import('@/pages/common/error/Error403.vue'),
			},
			{
				path: '500',
				name: 'Error500',
				component: () => import('@/pages/common/error/Error500.vue'),
			},
			{
				path: 'service',
				name: 'ErrorService',
				component: () => import('@/pages/common/error/ErrorService.vue'),
			},
			{
				path: 'traffic',
				name: 'ErrorTraffic',
				component: () => import('@/pages/common/error/ErrorTraffic.vue'),
			},
			{
				path: 'ie',
				name: 'ErrorIe',
				component: () => import('@/pages/common/error/ErrorIe.vue'),
			},
		],
	},
];

export default routes;