const routes = [
	{
		path: '/seller',
		redirect: { name: 'SellerNotice' },
		children: [
			{
				path: 'notice',
				children: [
					{
						path: '',
						name: 'SellerNotice',
						component: () => import('@/pages/common/seller/SellerNotice.vue'),
					},
					{
						path: 'detail',
						name: 'SellerNoticeDetail',
						component: () => import('@/pages/common/seller/SellerNoticeDetail.vue'),
					},
					{
						path: 'register',
						name: 'SellerNoticeRegister',
						component: () => import('@/pages/common/seller/SellerNoticeRegister.vue'),
					},
					{
						path: 'modify',
						name: 'SellerNoticeModify',
						component: () => import('@/pages/common/seller/SellerNoticeModify.vue'),
					},
				],
			},
			{
				path: 'popup',
				children: [
					{
						path: '',
						name: 'SellerPopup',
						component: () => import('@/pages/common/seller/SellerPopup.vue'),
					},
					{
						path: 'register',
						name: 'SellerPopupRegister',
						component: () => import('@/pages/common/seller/SellerPopupRegister.vue'),
					},
					{
						path: 'modify',
						name: 'SellerPopupModify',
						component: () => import('@/pages/common/seller/SellerPopupModify.vue'),
					},
					{
						path: 'preview',
						name: 'SellerPopupPreview',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/seller/popup/SellerPopupPreview.vue'),
					},
				],
			},
			{
				path: 'manage',
				redirect: { name: 'SellerManageMiddle' },
				children: [
					{
						path: 'ship-policy',
						name: 'SellerManageShipPolicy',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/seller/popup/SellerManageShipPolicy.vue'),
					},
					{
						path: 'influencer',
						children: [
							{
								path: '',
								name: 'SellerManageInfluencer',
								component: () => import('@/pages/common/seller/SellerManageInfluencer.vue'),
							},
							{
								path: 'register',
								name: 'SellerManageInfluencerRegister',
								component: () => import('@/pages/common/seller/SellerManageInfluencerRegister.vue'),
							},
							{
								path: 'modify',
								name: 'SellerManageInfluencerModify',
								component: () => import('@/pages/common/seller/SellerManageInfluencerModify.vue'),
							},
							{
								path: 'ship',
								children: [
									{
										path: '',
										name: 'SellerManageInfluencersShip',
										component: () => import('@/pages/common/seller/SellerManageInfluencersShip.vue'),
									},
									{
										path: 'register',
										name: 'SellerManageInfluencerShipRegister',
										component: () => import('@/pages/common/seller/SellerManageInfluencerShipRegister.vue'),
									},
									{
										path: 'modify',
										name: 'SellerManageInfluencerShipModify',
										component: () => import('@/pages/common/seller/SellerManageInfluencerShipModify.vue'),
									},
								],
							},
						],
					},
					{
						path: 'offday',
						children: [
							{
								path: '',
								name: 'SellerManageOffday',
								component: () => import('@/pages/common/seller/SellerManageOffday.vue'),
							},
							{
								path: 'register',
								name: 'SellerManageOffdayRegister',
								component: () => import('@/pages/common/seller/SellerManageOffdayRegister.vue'),
							},
						],
					},
					{
						path: 'profile',
						name: 'SellerManageProfile',
						component: () => import('@/pages/common/seller/SellerManageProfile.vue'),
					},
				],
			},
			{
				path: 'brand',
				children: [
					{
						path: '',
						name: 'SellerBrand',
						component: () => import('@/pages/common/seller/SellerBrand.vue'),
					},
					{
						path: 'register',
						name: 'SellerBrandRegister',
						component: () => import('@/pages/common/seller/SellerBrandRegister.vue'),
					},
					{
						path: 'modify',
						name: 'SellerBrandModify',
						component: () => import('@/pages/common/seller/SellerBrandModify.vue'),
					},
					{
						path: 'webzine',
						children: [
							{
								path: 'register',
								name: 'SellerBrandWebzineRegister',
								component: () => import('@/pages/common/seller/SellerBrandWebzineRegister.vue'),
							},
							{
								path: 'modify',
								name: 'SellerBrandWebzineModify',
								component: () => import('@/pages/common/seller/SellerBrandWebzineModify.vue'),
							},
							{
								path: 'search',
								name: 'SellerBrandWebzineSearch',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/seller/popup/SellerBrandWebzineSearch.vue'),
							},
						],
					},
				],
			},
			{
				path: 'brand-category',
				children: [
					{
						path: '',
						name: 'SellerBrandcategory',
						component: () => import('@/pages/common/seller/SellerBrandcategory.vue'),
					},
					{
						path: 'register',
						name: 'SellerBrandcategoryRegister',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/seller/popup/SellerBrandcategoryRegister.vue'),
					},
					{
						path: 'modify',
						name: 'SellerBrandcategoryModify',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/seller/popup/SellerBrandcategoryModify.vue'),
					},
				],
			},
			{
				path: 'overseas',
				name: 'SellerOverseas',
				component: () => import('@/pages/common/seller/SellerOverseas.vue'),
			},
			{
				path: 'custommade',
				name: 'SellerCustommade',
				component: () => import('@/pages/common/seller/SellerCustommade.vue'),
			},
		],
	},
	{
		path: '/pro/seller',
		redirect: { name: 'SellerNotice' },
		meta: {
			version: 'pro',
		},
		children: [
			{
				path: 'manage',
				redirect: { name: 'SellerManageMiddle' },
				children: [
					{
						path: 'sellers',
						children: [
							{
								path: '',
								name: 'ProSellerManageSellers',
								component: () => import('@/pages/pro/seller/SellerManageSellers.vue'),
							},
							{
								path: 'register',
								name: 'ProSellerManageSellersRegister',
								component: () => import('@/pages/pro/seller/SellerManageSellersRegister.vue'),
							},
							{
								path: 'modify',
								name: 'ProSellerManageSellersModify',
								component: () => import('@/pages/pro/seller/SellerManageSellersModify.vue'),
							},
							{
								path: 'api',
								children: [
									{
										path: 'register',
										name: 'ProSellerManageSellersApiRegister',
										component: () => import('@/pages/pro/seller/SellerManageSellersApiRegister.vue'),
									},
									{
										path: 'modify',
										name: 'ProSellerManageSellersApiModify',
										component: () => import('@/pages/pro/seller/SellerManageSellersApiModify.vue'),
									},
								],
							},
							{
								path: 'recommend',
								children: [
									{
										path: 'register',
										name: 'ProSellerManageSellersRecommendRegister',
										component: () => import('@/pages/pro/seller/SellerManageSellersRecommendRegister.vue'),
									},
									{
										path: 'modify',
										name: 'ProSellerManageSellersRecommendModify',
										component: () => import('@/pages/pro/seller/SellerManageSellersRecommendModify.vue'),
									},
								],
							},
							{
								path: 'ship',
								children: [
									{
										path: '',
										name: 'ProSellerManageSellersShip',
										component: () => import('@/pages/pro/seller/SellerManageSellersShip.vue'),
									},
									{
										path: 'register',
										name: 'ProSellerManageSellersShipRegister',
										component: () => import('@/pages/pro/seller/SellerManageSellersShipRegister.vue'),
									},
									{
										path: 'modify',
										name: 'ProSellerManageSellersShipModify',
										component: () => import('@/pages/pro/seller/SellerManageSellersShipModify.vue'),
									},
								],
							},
						],
					},
				],
			},
		],
	},
];

export default routes;