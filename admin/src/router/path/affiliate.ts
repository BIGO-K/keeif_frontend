const routes = [
	{
		path: '/affiliate',
		redirect: { name: 'AffiliateMappingApi' },
		children: [
			{
				path: 'mapping',
				children: [
					{
						path: 'api',
						children: [
							{
								path: '',
								name: 'AffiliateMappingApi',
								component: () => import('@/pages/common/affiliate/AffiliateMappingApi.vue'),
							},
							{
								path: 'category',
								name: 'AffiliateMappingApiCate',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/affiliate/popup/AffiliateMappingApiCate.vue'),
							},
						],
					},
				],
			},
			{
				path: 'except-link',
				children: [
					{
						path: 'prod',
						children: [
							{
								path: '',
								name: 'AffiliateExceptLinkProd',
								component: () => import('@/pages/common/affiliate/AffiliateExceptLinkProd.vue'),
							},
							{
								path: 'register',
								name: 'AffiliateExceptLinkProdRegister',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/affiliate/popup/AffiliateExceptLinkProdRegister.vue'),
							},
							{
								path: 'modify',
								name: 'AffiliateExceptLinkProdModify',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/affiliate/popup/AffiliateExceptLinkProdModify.vue'),
							},
						],
					},
					{
						path: 'seller',
						children: [
							{
								path: '',
								name: 'AffiliateExceptLinkSeller',
								component: () => import('@/pages/common/affiliate/AffiliateExceptLinkSeller.vue'),
							},
							{
								path: 'register',
								name: 'AffiliateExceptLinkSellerRegister',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/affiliate/popup/AffiliateExceptLinkSellerRegister.vue'),
							},
							{
								path: 'modify',
								name: 'AffiliateExceptLinkSellerModify',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/affiliate/popup/AffiliateExceptLinkSellerModify.vue'),
							},
						],
					},
				],
			},
			{
				path: 'log',
				children: [
					{
						path: 'api',
						children: [
							{
								path: 'prod',
								name: 'AffiliateLogApiProd',
								component: () => import('@/pages/common/affiliate/AffiliateLogApiProd.vue'),
							},
							{
								path: 'order',
								name: 'AffiliateLogApiOrder',
								component: () => import('@/pages/common/affiliate/AffiliateLogApiOrder.vue'),
							},
							{
								path: 'fail',
								name: 'AffiliateLogApiFail',
								component: () => import('@/pages/common/affiliate/AffiliateLogApiFail.vue'),
							},
							{
								path: 'inquiry',
								name: 'AffiliateLogApiInquiry',
								component: () => import('@/pages/common/affiliate/AffiliateLogApiInquiry.vue'),
							},
						],
					},
				],
			},
			{
				path: 'brand',
				children: [
					{
						path: '',
						name: 'AffiliateBrand',
						component: () => import('@/pages/common/affiliate/AffiliateBrand.vue'),
					},
					{
						path: 'set',
						name: 'AffiliateBrandSet',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/affiliate/popup/AffiliateBrandSet.vue'),
					},
				],
			},
		],
	},
	{
		path: '/pro/affiliate',
		meta: {
			version: 'pro',
		},
		children: [
			{
				path: 'link-state',
				name: 'ProAffiliateLinkState',
				component: () => import('@/pages/pro/affiliate/AffiliateLinkState.vue'),
			},
		],
	},
];

export default routes;