const routes = [
	{
		path: '/product',
		redirect: { name: 'ProdCategory' },
		children: [
			{
				path: 'option',
				name: 'ProdOption',
				meta: {
					isPopup: true,
				},
				component: () => import('@/pages/common/product/popup/ProdOption.vue'),
			},
			{
				path: 'category-code',
				meta: {
					isPopup: true,
				},
				children: [
					{
						path: '',
						name: 'ProdCategoryCode',
						component: () => import('@/pages/common/product/popup/ProdCategoryCode.vue'),
					},
					{
						path: 'size',
						name: 'ProdCategoryCodeSize',
						component: () => import('@/pages/common/product/popup/ProdCategoryCodeSize.vue'),
					},
				],
			},
			{
				path: 'category',
				children: [
					{
						path: '',
						name: 'ProdCategory',
						component: () => import('@/pages/common/product/ProdCategory.vue'),
					},
					{
						path: 'size',
						name: 'ProdCategorySize',
						component: () => import('@/pages/common/product/ProdCategorySize.vue'),
					},
				],
			},
			{
				path: 'manage',
				children: [
					{
						path: 'api',
						children: [
							{
								path: 'code',
								name: 'ProdManageApiCode',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/product/popup/ProdManageApiCode.vue'),
							},
						],
					},
					{
						path: 'info-check',
						name: 'ProdManageInfoCheck',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/product/popup/ProdManageInfoCheck.vue'),
					},
					{
						path: 'attribute',
						name: 'ProdManageRegisterAttribute',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/product/popup/ProdManageAttribute.vue'),
					},
				],
			},
			{
				path: 'confirm',
				children: [
					{
						path: 'reject-form',
						name: 'ProdConfirmRejectForm',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/product/popup/ProdConfirmRejectForm.vue'),
					},
					{
						path: 'reject-detail',
						name: 'ProdConfirmRejectDetail',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/product/popup/ProdConfirmRejectDetail.vue'),
					},
					{
						path: 'history',
						name: 'ProdConfirmHistory',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/product/popup/ProdConfirmHistory.vue'),
					},
				],
			},
			{
				path: 'set',
				children: [
					{
						path: 'list',
						name: 'ProdSetList',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/product/popup/ProdSetList.vue'),
					},
				],
			},
			{
				path: 'property',
				children: [
					{
						path: '',
						name: 'ProdProperty',
						component: () => import('@/pages/common/product/ProdProperty.vue'),
					},
					{
						path: 'detail',
						name: 'ProdPropertyDetail',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/product/popup/ProdPropertyDetail.vue'),
					},
				],
			},
			{
				path: 'icon',
				children: [
					{
						path: '',
						name: 'ProdIcon',
						component: () => import('@/pages/common/product/ProdIcon.vue'),
					},
					{
						path: 'register',
						name: 'ProdIconRegister',
						component: () => import('@/pages/common/product/ProdIconRegister.vue'),
					},
					{
						path: 'modify',
						name: 'ProdIconModify',
						component: () => import('@/pages/common/product/ProdIconModify.vue'),
					},
					{
						path: 'coverage',
						meta: {
							isPopup: true,
						},
						children: [
							{
								path: 'category',
								name: 'ProdIconCoverageCate',
								component: () => import('@/pages/common/product/popup/ProdIconCoverageCate.vue'),
							},
							{
								path: 'product',
								name: 'ProdIconCoverageProd',
								component: () => import('@/pages/common/product/popup/ProdIconCoverageProd.vue'),
							},
							{
								path: 'brand',
								name: 'ProdIconCoverageBrand',
								component: () => import('@/pages/common/product/popup/ProdIconCoverageBrand.vue'),
							},
						],
					},
				],
			},
			{
				path: 'restock',
				children: [
					{
						path: 'applicant',
						name: 'ProProdRestockApplicant',
						component: () => import('@/pages/common/product/ProdRestockApplicant.vue'),
					},
				],
			},
			{
				path: 'gift',
				children: [
					{
						path: '',
						name: 'ProdGift',
						component: () => import('@/pages/common/product/ProdGift.vue'),
					},
					{
						path: 'register',
						name: 'ProdGiftRegister',
						component: () => import('@/pages/common/product/ProdGiftRegister.vue'),
					},
					{
						path: 'modify',
						name: 'ProdGiftModify',
						component: () => import('@/pages/common/product/ProdGiftModify.vue'),
					},
					{
						path: 'coverage',
						name: 'ProdGiftCoverage',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/product/popup/ProdGiftCoverage.vue'),
					},
				],
			},
			{
				path: 'ban',
				children: [
					{
						path: 'clear',
						children: [
							{
								path: '',
								name: 'ProdBanClear',
								component: () => import('@/pages/common/product/ProdBanClear.vue'),
							},
							{
								path: 'except',
								name: 'ProdBanClearExcept',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/product/popup/ProdBanClearExcept.vue'),
							},
						],
					},
					{
						path: 'manage',
						children: [
							{
								path: '',
								name: 'ProdBanManage',
								component: () => import('@/pages/common/product/ProdBanManage.vue'),
							},
							{
								path: 'register',
								name: 'ProdBanManageRegister',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/product/popup/ProdBanManageRegister.vue'),
							},
						],
					},
				],
			},
			{
				path: 'bundle',
				children: [
					{
						path: 'move',
						name: 'ProdBundleMove',
						component: () => import('@/pages/common/product/ProdBundleMove.vue'),
					},
					{
						path: 'price',
						name: 'ProdBundlePrice',
						component: () => import('@/pages/common/product/ProdBundlePrice.vue'),
					},
					{
						path: 'display',
						name: 'ProdBundleDisplay',
						component: () => import('@/pages/common/product/ProdBundleDisplay.vue'),
					},
					{
						path: 'stock',
						name: 'ProdBundleStock',
						component: () => import('@/pages/common/product/ProdBundleStock.vue'),
					},
				],
			},
			{
				path: 'headline',
				children: [
					{
						path: '',
						name: 'ProdHeadline',
						component: () => import('@/pages/common/product/ProdHeadline.vue'),
					},
					{
						path: 'register',
						name: 'ProdHeadlineRegister',
						component: () => import('@/pages/common/product/ProdHeadlineRegister.vue'),
					},
					{
						path: 'modify',
						name: 'ProdHeadlineModify',
						component: () => import('@/pages/common/product/ProdHeadlineModify.vue'),
					},
				],
			},
			{
				path: 'color',
				name: 'ProdColor',
				component: () => import('@/pages/common/product/ProdColor.vue'),
			},
			{
				path: 'reserve',
				meta: {
					isPopup: true,
				},
				children: [
					{
						path: 'search',
						name: 'ProdReserveSearch',
						component: () => import('@/pages/common/product/popup/ProdReserveSearch.vue'),
					},
					{
						path: 'modify',
						name: 'ProdReserveModify',
						component: () => import('@/pages/common/product/popup/ProdReserveModify.vue'),
					},
				],
			},
		],
	},
	{
		path: '/pro/product',
		meta: {
			version: 'pro',
		},
		redirect: { name: 'ProProdCategory' },
		children: [
			{
				path: 'manage',
				children: [
					{
						path: '',
						name: 'ProProdManage',
						component: () => import('@/pages/pro/product/ProdManage.vue'),
					},
					{
						// 신규 공구관
						path: 'coop',
						children: [
							{
								path: '',
								name: 'ProProdManageCoop',
								component: () => import('@/pages/pro/product/ProdManageCoop.vue'),
							},
							{
								path: 'register',
								name: 'ProdManageCoopRegister',
								component: () => import('@/pages/pro/product/ProdManageCoopRegister.vue'),
							},
							{
								path: 'modify',
								name: 'ProProdManageCoopModify',
								component: () => import('@/pages/pro/product/ProdManageCoopModify.vue'),
							},
							{
								path: 'seller',
								children: [
									{
										path: '',
										name: 'ProdManageCoopSeller',
										component: () => import('@/pages/pro/product/ProdManageCoopSeller.vue'),
									},
									{
										path: 'register',
										name: 'ProdManageCoopSellerRegister',
										component: () => import('@/pages/pro/product/ProdManageCoopSellerRegister.vue'),
									},
									{
										path: 'modify',
										name: 'ProProdManageCoopSellerModify',
										component: () => import('@/pages/pro/product/ProdManageCoopSellerModify.vue'),
									},
								],
							},
							{
								path: 'storage',
								name: 'ProProdManageCoopStorage',
								component: () => import('@/pages/pro/product/ProdManageCoopStorage.vue'),
							},
						],
					},
					{
						path: 'raffle',
						children: [
							{
								path: '',
								name: 'ProProdManageRaffle',
								component: () => import('@/pages/pro/product/ProdManageRaffle.vue'),
							},
							{
								path: 'register',
								name: 'ProProdManageRaffleRegister',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/pro/product/popup/ProdManageRaffleRegister.vue'),
							},
							{
								path: 'modify',
								name: 'ProProdManageRaffleModify',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/pro/product/popup/ProdManageRaffleModify.vue'),
							},
						],
					},
					{
						path: 'funding',
						children: [
							{
								path: '',
								name: 'ProProdManageFunding',
								component: () => import('@/pages/pro/product/ProdManageFunding.vue'),
							},
							{
								path: 'register',
								name: 'ProProdManageFundingRegister',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/pro/product/popup/ProdManageFundingRegister.vue'),
							},
							{
								path: 'modify',
								name: 'ProProdManageFundingModify',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/pro/product/popup/ProdManageFundingModify.vue'),
							},
						],
					},
					{
						path: 'api',
						children: [
							{
								path: '',
								name: 'ProProdManageApi',
								component: () => import('@/pages/pro/product/ProdManageApi.vue'),
							},
						],
					},
					{
						path: 'image',
						children: [
							{
								path: '',
								name: 'ProProdManageImage',
								component: () => import('@/pages/pro/product/ProdManageImage.vue'),
							},
							{
								path: 'register',
								name: 'ProProdManageImageRegister',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/pro/product/popup/ProdManageImageRegister.vue'),
							},
							{
								path: 'modify',
								name: 'ProProdManageImageModify',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/pro/product/popup/ProdManageImageModify.vue'),
							},
						],
					},
					{
						path: 'influencer',
						children: [
							{
								path: '',
								name: 'ProProdManageInfluencer',
								component: () => import('@/pages/pro/product/ProdManageInfluencer.vue'),
							},
						],
					},
					{
						path: 'size',
						children: [
							{
								path: 'register',
								name: 'ProProdManageSizeRegister',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/pro/product/popup/ProdManageSizeRegister.vue'),
							},
							{
								path: 'modify',
								name: 'ProProdManageSizeModify',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/pro/product/popup/ProdManageSizeModify.vue'),
							},
						],
					},
					{
						path: '360view',
						children: [
							{
								path: 'register',
								name: 'ProProdManage360ViewRegister',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/pro/product/popup/ProdManage360ViewRegister.vue'),
							},
							{
								path: 'modify',
								name: 'ProProdManage360ViewModify',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/pro/product/popup/ProdManage360ViewModify.vue'),
							},
						],
					},
					{
						path: 'register',
						meta: {
							isPopup: true,
						},
						children: [
							{
								path: '',
								name: 'ProProdManageRegister',
								component: () => import('@/pages/pro/product/popup/ProdManageRegister.vue'),
							},
						],
					},
					{
						path: 'modify',
						name: 'ProProdManageModify',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/pro/product/popup/ProdManageModify.vue'),
					},
					{
						path: 'set-option',
						children: [
							{
								path: '',
								name: 'ProProdManageSetOption',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/pro/product/popup/ProProdManageSetOption.vue'),
							},
							{
								path: 'register',
								name: 'ProProdManageSetOptionRegister',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/pro/product/popup/ProProdManageSetOptionRegister.vue'),
							},
						],
					},
				],
			},
			{
				path: 'confirm',
				children: [
					{
						path: '',
						name: 'ProProdConfirm',
						component: () => import('@/pages/pro/product/ProdConfirm.vue'),
					},
					{
						path: 'coop',
						name: 'ProProdConfirmCoop',
						component: () => import('@/pages/pro/product/ProdConfirmCoop.vue'),
					},
				],
			},
			{
				path: 'set',
				children: [
					{
						path: '',
						name: 'ProProdSet',
						component: () => import('@/pages/pro/product/ProdSet.vue'),
					},
					{
						path: 'register',
						name: 'ProProdSetRegister',
						component: () => import('@/pages/pro/product/ProdSetRegister.vue'),
					},
					{
						path: 'modify',
						name: 'ProProdSetModify',
						component: () => import('@/pages/pro/product/ProdSetModify.vue'),
					},
				],
			},
			{
				path: 'soldout',
				name: 'ProProdSoldout',
				component: () => import('@/pages/pro/product/ProdSoldout.vue'),
			},
			{
				path: 'restock',
				children: [
					{
						path: '',
						name: 'ProProdRestock',
						component: () => import('@/pages/pro/product/ProdRestock.vue'),
					},
				],
			},
			{
				path: 'reserve',
				children: [
					{
						path: '',
						name: 'ProProdReserve',
						component: () => import('@/pages/pro/product/ProdReserve.vue'),
					},
				],
			},
		],
	},
];

export default routes;