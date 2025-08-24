const routes = [
	{
		path: '/display',
		redirect: { name: 'DisplayKeyword' },
		children: [
			{
				path: 'block',
				children: [
					{
						path: 'banner',
						meta: {
							isPopup: true,
						},
						children: [
							{
								path: '',
								name: 'DisplayBlockBanner',
								component: () => import('@/pages/common/display/popup/DisplayBlockBanner.vue'),
							},
							{
								path: 'webzine',
								name: 'DisplayBlockBannerWebzine',
								component: () => import('@/pages/common/display/popup/DisplayBlockBannerWebzine.vue'),
							},
						],
					},
					{
						path: 'tab',
						name: 'DisplayBlockTab',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/display/popup/DisplayBlockTab.vue'),
					},
					{
						path: 'product',
						name: 'DisplayBlockProd',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/display/popup/DisplayBlockProd.vue'),
					},
					{
						path: 'title',
						name: 'DisplayBlockTitle',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/display/popup/DisplayBlockTitle.vue'),
					},
				],
			},
			{
				path: 'keyword',
				children: [
					{
						path: '',
						name: 'DisplayKeyword',
						component: () => import('@/pages/common/display/DisplayKeyword.vue'),
					},
					{
						path: 'register',
						name: 'DisplayKeywordRegister',
						component: () => import('@/pages/common/display/DisplayKeywordRegister.vue'),
					},
					{
						path: 'modify',
						name: 'DisplayKeywordModify',
						component: () => import('@/pages/common/display/DisplayKeywordModify.vue'),
					},
				],
			},
			{
				path: 'sub',
				redirect: { name: 'DisplaySub1depth' },
				children: [
					{
						path: '1depth',
						children: [
							{
								path: '',
								name: 'DisplaySub1depth',
								component: () => import('@/pages/common/display/DisplaySub1depth.vue'),
							},
							{
								path: 'banner',
								name: 'DisplaySub1depthBanner',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/display/popup/DisplaySub1depthBanner.vue'),
							},
							{
								path: 'best',
								name: 'DisplaySub1depthBest',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/display/popup/DisplaySub1depthBest.vue'),
							},
							{
								path: 'recommend',
								name: 'DisplaySub1depthRecommend',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/display/popup/DisplaySub1depthRecommend.vue'),
							},
							{
								path: 'popular',
								meta: {
									isPopup: true,
								},
								children: [
									{
										path: '',
										name: 'DisplaySub1depthPopular',
										component: () => import('@/pages/common/display/popup/DisplaySub1depthPopular.vue'),
									},
									{
										path: 'brand',
										name: 'DisplaySub1depthPopularBrand',
										component: () => import('@/pages/common/display/popup/DisplaySub1depthPopularBrand.vue'),
									},
								],
							},
						],
					},
					{
						path: 'promotion',
						children: [
							{
								path: 'register',
								name: 'DisplaySubPromoRegister',
								component: () => import('@/pages/common/display/DisplaySubPromoRegister.vue'),
							},
							{
								path: 'modify',
								name: 'DisplaySubPromoModify',
								component: () => import('@/pages/common/display/DisplaySubPromoModify.vue'),
							},
							{
								path: 'reply',
								name: 'DisplaySubPromoReply',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/display/popup/DisplaySubPromoReply.vue'),
							},
							{
								path: 'image',
								meta: {
									isPopup: true,
								},
								children: [
									{
										path: 'register',
										name: 'DisplaySubPromoImageRegister',
										component: () => import('@/pages/common/display/popup/DisplaySubPromoImageRegister.vue'),
									},
									{
										path: 'modify',
										name: 'DisplaySubPromoImageModify',
										component: () => import('@/pages/common/display/popup/DisplaySubPromoImageModify.vue'),
									},
								],
							},
						],
					},
					{
						path: 'event',
						redirect: { name: 'DisplaySubEventGallary' },
						children: [
							{
								path: 'gallary',
								children: [
									{
										path: '',
										name: 'DisplaySubEventGallary',
										component: () => import('@/pages/common/display/DisplaySubEventGallary.vue'),
									},
									{
										path: 'register',
										name: 'DisplaySubEventGallaryRegister',
										component: () => import('@/pages/common/display/DisplaySubEventGallaryRegister.vue'),
									},
									{
										path: 'modify',
										name: 'DisplaySubEventGallaryModify',
										component: () => import('@/pages/common/display/DisplaySubEventGallaryModify.vue'),
									},
								],
							},
							{
								path: 'reviewer',
								children: [
									{
										path: 'register',
										name: 'DisplaySubEventReviewerRegister',
										component: () => import('@/pages/common/display/DisplaySubEventReviewerRegister.vue'),
									},
									{
										path: 'modify',
										name: 'DisplaySubEventReviewerModify',
										component: () => import('@/pages/common/display/DisplaySubEventReviewerModify.vue'),
									},
								],
							},
						],
					},
					{
						path: 'showcase',
						redirect: { name: 'DisplaySubShowcaseWebzine' },
						children: [
							{
								path: 'webzine',
								children: [
									{
										path: '',
										name: 'DisplaySubShowcaseWebzine',
										component: () => import('@/pages/common/display/DisplaySubShowcaseWebzine.vue'),
									},
									{
										path: 'register',
										name: 'DisplaySubShowcaseWebzineRegister',
										component: () => import('@/pages/common/display/DisplaySubShowcaseWebzineRegister.vue'),
									},
									{
										path: 'modify',
										name: 'DisplaySubShowcaseWebzineModify',
										component: () => import('@/pages/common/display/DisplaySubShowcaseWebzineModify.vue'),
									},
								],
							},
						],
					},
					{
						path: 'showcase-category',
						redirect: { name: 'DisplaySubShowcaseCategoryWebzine' },
						children: [
							{
								path: 'webzine',
								children: [
									{
										path: '',
										name: 'DisplaySubShowcaseCategoryWebzine',
										component: () => import('@/pages/common/display/DisplaySubShowcaseCategoryWebzine.vue'),
									},
									{
										path: 'register',
										name: 'DisplaySubShowcaseCategoryWebzineRegister',
										component: () => import('@/pages/common/display/DisplaySubShowcaseCategoryWebzineRegister.vue'),
									},
									{
										path: 'modify',
										name: 'DisplaySubShowcaseCategoryWebzineModify',
										component: () => import('@/pages/common/display/DisplaySubShowcaseCategoryWebzineModify.vue'),
									},
								],
							},
						],
					},
					{
						path: 'raffle',
						children: [
							{
								path: '',
								name: 'DisplaySubRaffle',
								component: () => import('@/pages/common/display/DisplaySubRaffle.vue'),
							},
							{
								path: 'register',
								name: 'DisplaySubRaffleRegister',
								component: () => import('@/pages/common/display/DisplaySubRaffleRegister.vue'),
							},
							{
								path: 'modify',
								name: 'DisplaySubRaffleModify',
								component: () => import('@/pages/common/display/DisplaySubRaffleModify.vue'),
							},
							{
								path: 'period',
								name: 'DisplaySubRafflePeriod',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/display/popup/DisplaySubRafflePeriod.vue'),
							},
							{
								path: 'apply',
								meta: {
									isPopup: true,
								},
								children: [
									{
										path: '',
										name: 'DisplaySubRaffleApply',
										component: () => import('@/pages/common/display/popup/DisplaySubRaffleApply.vue'),
									},
									{
										path: 'member',
										name: 'DisplaySubRaffleApplyMember',
										component: () => import('@/pages/common/display/popup/DisplaySubRaffleApplyMember.vue'),
									},
								],
							},
						],
					},
					{
						path: 'coopbuy',
						children: [
							{
								path: '',
								name: 'DisplaySubCoopbuy',
								component: () => import('@/pages/common/display/DisplaySubCoopbuy.vue'),
							},
							{
								path: 'register',
								name: 'DisplaySubCoopbuyRegister',
								component: () => import('@/pages/common/display/DisplaySubCoopbuyRegister.vue'),
							},
							{
								path: 'modify',
								name: 'DisplaySubCoopbuyModify',
								component: () => import('@/pages/common/display/DisplaySubCoopbuyModify.vue'),
							},
							{
								path: 'apply',
								name: 'DisplaySubCoopbuyApply',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/display/popup/DisplaySubCoopbuyApply.vue'),
							},
						],
					},
					{
						path: 'timedeal',
						children: [
							{
								path: '',
								name: 'DisplaySubTimedeal',
								component: () => import('@/pages/common/display/DisplaySubTimedeal.vue'),
							},
							{
								path: 'register',
								redirect: { name: 'DisplaySubTimedealRegistarTypeA' },
								children: [
									{
										path: 'type-a',
										name: 'DisplaySubTimedealRegistarTypeA',
										component: () => import('@/pages/common/display/DisplaySubTimedealRegistarTypeA.vue'),
									},
									{
										path: 'type-b',
										name: 'DisplaySubTimedealRegistarTypeB',
										component: () => import('@/pages/common/display/DisplaySubTimedealRegistarTypeB.vue'),
									},
									{
										path: 'type-c',
										name: 'DisplaySubTimedealRegistarTypeC',
										component: () => import('@/pages/common/display/DisplaySubTimedealRegistarTypeC.vue'),
									},
								],
							},
							{
								path: 'modify',
								redirect: { name: 'DisplaySubTimedealModifyTypeA' },
								children: [
									{
										path: 'type-a',
										name: 'DisplaySubTimedealModifyTypeA',
										component: () => import('@/pages/common/display/DisplaySubTimedealModifyTypeA.vue'),
									},
									{
										path: 'type-b',
										name: 'DisplaySubTimedealModifyTypeB',
										component: () => import('@/pages/common/display/DisplaySubTimedealModifyTypeB.vue'),
									},
									{
										path: 'type-c',
										name: 'DisplaySubTimedealModifyTypeC',
										component: () => import('@/pages/common/display/DisplaySubTimedealModifyTypeC.vue'),
									},
								],
							},
						],
					},
					{
						path: 'spot',
						children: [
							{
								path: '',
								name: 'DisplaySubSpot',
								component: () => import('@/pages/common/display/DisplaySubSpot.vue'),
							},
							{
								path: 'register',
								name: 'DisplaySubSpotRegister',
								component: () => import('@/pages/common/display/DisplaySubSpotRegister.vue'),
							},
							{
								path: 'modify',
								name: 'DisplaySubSpotModify',
								component: () => import('@/pages/common/display/DisplaySubSpotModify.vue'),
							},
							{
								path: 'template',
								meta: {
									isPopup: true,
								},
								children: [
									{
										path: 'guide',
										name: 'DisplaySubSpotTemplateGuide',
										component: () => import('@/pages/common/display/popup/DisplaySubSpotTemplateGuide.vue'),
									},
									{
										path: 'type-a',
										name: 'DisplaySubSpotTemplateTypeA',
										component: () => import('@/pages/common/display/popup/DisplaySubSpotTemplateTypeA.vue'),
									},
									{
										path: 'type-bc',
										name: 'DisplaySubSpotTemplateTypeBC',
										component: () => import('@/pages/common/display/popup/DisplaySubSpotTemplateTypeBC.vue'),
									},
								],
							},
						],
					},
				],
			},
			{
				path: 'ranking',
				redirect: { name: 'DisplayRankItem' },
				children: [
					{
						path: 'item',
						name: 'DisplayRankItem',
						component: () => import('@/pages/common/display/DisplayRankItem.vue'),
					},
					{
						path: 'brand',
						name: 'DisplayRankBrand',
						component: () => import('@/pages/common/display/DisplayRankBrand.vue'),
					},
					{
						path: 'view',
						name: 'DisplayRankView',
						component: () => import('@/pages/common/display/DisplayRankView.vue'),
					},
					{
						path: 'like',
						name: 'DisplayRankLike',
						component: () => import('@/pages/common/display/DisplayRankLike.vue'),
					},
					{
						path: 'help',
						name: 'DisplayRankHelp',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/display/popup/DisplayRankHelp.vue'),
					},
				],
			},
			{
				path: 'cody',
				children: [
					{
						path: '',
						name: 'DisplayCody',
						component: () => import('@/pages/common/display/DisplayCody.vue'),
					},
					{
						path: 'register',
						name: 'DisplayCodyRegister',
						component: () => import('@/pages/common/display/DisplayCodyRegister.vue'),
					},
					{
						path: 'modify',
						name: 'DisplayCodyModify',
						component: () => import('@/pages/common/display/DisplayCodyModify.vue'),
					},
				],
			},
			{
				path: 'cody-category',
				children: [
					{
						path: '',
						name: 'DisplayCodyCategory',
						component: () => import('@/pages/common/display/DisplayCodyCategory.vue'),
					},
					{
						path: 'register',
						name: 'DisplayCodyCategoryRegister',
						component: () => import('@/pages/common/display/DisplayCodyCategoryRegister.vue'),
					},
					{
						path: 'modify',
						name: 'DisplayCodyCategoryModify',
						component: () => import('@/pages/common/display/DisplayCodyCategoryModify.vue'),
					},
				],
			},
			{
				path: 'product-banner',
				children: [
					{
						path: '',
						name: 'DisplayProdBanner',
						component: () => import('@/pages/common/display/DisplayProdBanner.vue'),
					},
					{
						path: 'register',
						name: 'DisplayProdBannerRegister',
						component: () => import('@/pages/common/display/DisplayProdBannerRegister.vue'),
					},
					{
						path: 'modify',
						name: 'DisplayProdBannerModify',
						component: () => import('@/pages/common/display/DisplayProdBannerModify.vue'),
					},
					{
						path: 'coverage',
						meta: {
							isPopup: true,
						},
						children: [
							{
								path: 'category',
								name: 'DisplayProdBannerCoverageCate',
								component: () => import('@/pages/common/display/popup/DisplayProdBannerCoverageCate.vue'),
							},
							{
								path: 'product',
								name: 'DisplayProdBannerCoverageProd',
								component: () => import('@/pages/common/display/popup/DisplayProdBannerCoverageProd.vue'),
							},
							{
								path: 'brand',
								name: 'DisplayProdBannerCoverageBrand',
								component: () => import('@/pages/common/display/popup/DisplayProdBannerCoverageBrand.vue'),
							},
						],
					},
				],
			},
			{
				path: 'popup',
				children: [
					{
						path: '',
						name: 'DisplayPopup',
						component: () => import('@/pages/common/display/DisplayPopup.vue'),
					},
					{
						path: 'register',
						name: 'DisplayPopupRegister',
						component: () => import('@/pages/common/display/DisplayPopupRegister.vue'),
					},
					{
						path: 'modify',
						name: 'DisplayPopupModify',
						component: () => import('@/pages/common/display/DisplayPopupModify.vue'),
					},
					{
						path: 'preview',
						name: 'DisplayPopupPreview',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/display/popup/DisplayPopupPreview.vue'),
					},
				],
			},
			{
				path: 'intro',
				children: [
					{
						path: '',
						name: 'DisplayIntro',
						component: () => import('@/pages/common/display/DisplayIntro.vue'),
					},
					{
						path: 'register',
						name: 'DisplayIntroRegister',
						component: () => import('@/pages/common/display/DisplayIntroRegister.vue'),
					},
					{
						path: 'modify',
						name: 'DisplayIntroModify',
						component: () => import('@/pages/common/display/DisplayIntroModify.vue'),
					},
				],
			},
			{
				path: 'interest',
				children: [
					{
						path: '',
						name: 'DisplayIterest',
						component: () => import('@/pages/common/display/DisplayIterest.vue'),
					},
					{
						path: 'register',
						name: 'DisplayIterestRegister',
						component: () => import('@/pages/common/display/DisplayIterestRegister.vue'),
					},
					{
						path: 'modify',
						name: 'DisplayIterestModify',
						component: () => import('@/pages/common/display/DisplayIterestModify.vue'),
					},
				],
			},
			{
				path: 'top-banner',
				children: [
					{
						path: '',
						name: 'DisplayTopBanner',
						component: () => import('@/pages/common/display/DisplayTopBanner.vue'),
					},
					{
						path: 'register',
						name: 'DisplayTopBannerRegister',
						component: () => import('@/pages/common/display/DisplayTopBannerRegister.vue'),
					},
					{
						path: 'modify',
						name: 'DisplayTopBannerModify',
						component: () => import('@/pages/common/display/DisplayTopBannerModify.vue'),
					},
				],
			},
			{
				path: 'wing-banner',
				children: [
					{
						path: '',
						name: 'DisplayWingBanner',
						component: () => import('@/pages/common/display/DisplayWingBanner.vue'),
					},
					{
						path: 'register',
						name: 'DisplayWingBannerRegister',
						component: () => import('@/pages/common/display/DisplayWingBannerRegister.vue'),
					},
					{
						path: 'modify',
						name: 'DisplayWingBannerModify',
						component: () => import('@/pages/common/display/DisplayWingBannerModify.vue'),
					},
				],
			},
		],
	},
	{
		path: '/pro/display',
		meta: {
			version: 'pro',
		},
		redirect: { name: 'ProDisplayKeyword' },
		children: [
			{
				path: 'sub',
				redirect: { name: 'ProDisplaySub1depth' },
				children: [
					{
						path: 'promotion',
						children: [
							{
								path: '',
								name: 'ProDisplaySubPromo',
								component: () => import('@/pages/pro/display/DisplaySubPromo.vue'),
							},
						],
					},
				],
			},
		],
	},
];

export default routes;