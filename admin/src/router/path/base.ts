const routes = [
	{
		path: '',
		redirect: { name: 'Index' },
	},
	{
		path: '/index',
		name: 'Index',
		meta: {
			isShowHeader: false,
			isShowFooter: false,
		},
		component: () => import('@/pages/Index.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'DefaultError',
		meta: {
			layout: 'L=error',
			isShowHeader: false,
			isShowFooter: false,
			isShowLnb: false,
		},
		component: () => import('@/pages/common/error/Error.vue'),
	},
	{
		path: '/template',
		name: 'Template',
		meta: {
			isTemplate: true,
			isShowFooter: false,
		},
		component: () => import('@/components/template/Template.vue'),
	},
	{
		path: '/main',
		name: 'Main',
		meta: {
			layout: 'L=main',
			isShowLnb: false,
		},
		component: () => import('@/pages/common/Main.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		meta: {
			layout: 'L=login',
			isShowHeader: false,
			isShowFooter: false,
			isShowLnb: false,
		},
		component: () => import('@/pages/common/login/Login.vue'),
	},
	{
		path: '/Login-master',
		name: 'LoginMaster',
		meta: {
			layout: 'L=login',
			isShowHeader: false,
			isShowFooter: false,
			isShowLnb: false,
		},
		component: () => import('@/pages/common/login/LoginMaster.vue'),
	},
];

export default routes;