const routes = [
	{
		path: '/promotion',
		redirect: { name: 'PromoCouponFirst' },
		children: [
			{
				path: 'coupon-first',
				children: [
					{
						path: '',
						name: 'PromoCouponFirst',
						component: () => import('@/pages/common/promotion/PromoCouponFirst.vue'),
					},
					{
						path: 'register',
						name: 'PromoCouponFirstRegister',
						component: () => import('@/pages/common/promotion/PromoCouponFirstRegister.vue'),
					},
					{
						path: 'modify',
						name: 'PromoCouponFirstModify',
						component: () => import('@/pages/common/promotion/PromoCouponFirstModify.vue'),
					},
					{
						path: 'detail',
						name: 'PromoCouponFirstDetail',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/promotion/popup/PromoCouponFirstDetail.vue'),
					},
				],
			},
			{
				path: 'coupon',
				children: [
					{
						path: 'history',
						name: 'PromoCouponHistory',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/promotion/popup/PromoCouponHistory.vue'),
					},
					{
						path: 'download',
						children: [
							{
								path: '',
								name: 'PromoCouponDown',
								component: () => import('@/pages/common/promotion/PromoCouponDown.vue'),
							},
							{
								path: 'register',
								name: 'PromoCouponDownRegister',
								component: () => import('@/pages/common/promotion/PromoCouponDownRegister.vue'),
							},
							{
								path: 'modify',
								name: 'PromoCouponDownModify',
								component: () => import('@/pages/common/promotion/PromoCouponDownModify.vue'),
							},
							{
								path: 'modify-none',
								name: 'PromoCouponDownModifyNone',
								component: () => import('@/pages/common/promotion/PromoCouponDownModifyNone.vue'),
							},
							{
								path: 'detail',
								name: 'PromoCouponDownDetail',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/promotion/popup/PromoCouponDownDetail.vue'),
							},
							{
								path: 'timedeal',
								children: [
									{
										path: '',
										name: 'PromoCouponDownTimedeal',
										component: () => import('@/pages/common/promotion/PromoCouponDownTimedeal.vue'),
									},
									{
										path: 'register',
										name: 'PromoCouponDownTimedealRegister',
										component: () => import('@/pages/common/promotion/PromoCouponDownTimedealRegister.vue'),
									},
									{
										path: 'modify',
										name: 'PromoCouponDownTimedealModify',
										component: () => import('@/pages/common/promotion/PromoCouponDownTimedealModify.vue'),
									},
									{
										path: 'modify-none',
										name: 'PromoCouponDownTimedealModifyNone',
										component: () => import('@/pages/common/promotion/PromoCouponDownTimedealModifyNone.vue'),
									},
								],
							},
							{
								path: 'coopbuy',
								children: [
									{
										path: '',
										name: 'PromoCouponDownCoopbuy',
										component: () => import('@/pages/common/promotion/PromoCouponDownCoopbuy.vue'),
									},
									{
										path: 'register',
										name: 'PromoCouponDownCoopbuyRegister',
										component: () => import('@/pages/common/promotion/PromoCouponDownCoopbuyRegister.vue'),
									},
									{
										path: 'modify',
										name: 'PromoCouponDownCoopbuyModify',
										component: () => import('@/pages/common/promotion/PromoCouponDownCoopbuyModify.vue'),
									},
									{
										path: 'modify-none',
										name: 'PromoCouponDownCoopbuyModifyNone',
										component: () => import('@/pages/common/promotion/PromoCouponDownCoopbuyModifyNone.vue'),
									},
								],
							},
						],
					},
					{
						path: 'naver',
						children: [
							{
								path: '',
								name: 'PromoCouponNaver',
								component: () => import('@/pages/common/promotion/PromoCouponNaver.vue'),
							},
							{
								path: 'register',
								name: 'PromoCouponNaverRegister',
								component: () => import('@/pages/common/promotion/PromoCouponNaverRegister.vue'),
							},
							{
								path: 'modify',
								name: 'PromoCouponNaverModify',
								component: () => import('@/pages/common/promotion/PromoCouponNaverModify.vue'),
							},
							{
								path: 'modify-none',
								name: 'PromoCouponNaverModifyNone',
								component: () => import('@/pages/common/promotion/PromoCouponNaverModifyNone.vue'),
							},
							{
								path: 'detail',
								name: 'PromoCouponNaverDetail',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/promotion/popup/PromoCouponNaverDetail.vue'),
							},
						],
					},
					{
						path: 'daum',
						children: [
							{
								path: '',
								name: 'PromoCouponDaum',
								component: () => import('@/pages/common/promotion/PromoCouponDaum.vue'),
							},
							{
								path: 'register',
								name: 'PromoCouponDaumRegister',
								component: () => import('@/pages/common/promotion/PromoCouponDaumRegister.vue'),
							},
							{
								path: 'modify',
								name: 'PromoCouponDaumModify',
								component: () => import('@/pages/common/promotion/PromoCouponDaumModify.vue'),
							},
							{
								path: 'modify-none',
								name: 'PromoCouponDaumModifyNone',
								component: () => import('@/pages/common/promotion/PromoCouponDaumModifyNone.vue'),
							},
							{
								path: 'detail',
								name: 'PromoCouponDaumDetail',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/promotion/popup/PromoCouponDaumDetail.vue'),
							},
						],
					},
					{
						path: 'paper',
						children: [
							{
								path: '',
								name: 'PromoCouponPaper',
								component: () => import('@/pages/common/promotion/PromoCouponPaper.vue'),
							},
							{
								path: 'register',
								name: 'PromoCouponPaperRegister',
								component: () => import('@/pages/common/promotion/PromoCouponPaperRegister.vue'),
							},
							{
								path: 'modify',
								name: 'PromoCouponPaperModify',
								component: () => import('@/pages/common/promotion/PromoCouponPaperModify.vue'),
							},
							{
								path: 'modify-none',
								name: 'PromoCouponPaperModifyNone',
								component: () => import('@/pages/common/promotion/PromoCouponPaperModifyNone.vue'),
							},
							{
								path: 'certify',
								name: 'PromoCouponPaperCertify',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/promotion/popup/PromoCouponPaperCertify.vue'),
							},
							{
								path: 'detail',
								name: 'PromoCouponPaperDetail',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/promotion/popup/PromoCouponPaperDetail.vue'),
							},
							{
								path: 'history',
								name: 'PromoCouponPaperHistory',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/promotion/popup/PromoCouponPaperHistory.vue'),
							},
						],
					},
					{
						path: 'auto',
						children: [
							{
								path: '',
								name: 'PromoCouponAuto',
								component: () => import('@/pages/common/promotion/PromoCouponAuto.vue'),
							},
							{
								path: 'register',
								name: 'PromoCouponAutoRegister',
								component: () => import('@/pages/common/promotion/PromoCouponAutoRegister.vue'),
							},
							{
								path: 'modify',
								name: 'PromoCouponAutoModify',
								component: () => import('@/pages/common/promotion/PromoCouponAutoModify.vue'),
							},
							{
								path: 'modify-none',
								name: 'PromoCouponAutoModifyNone',
								component: () => import('@/pages/common/promotion/PromoCouponAutoModifyNone.vue'),
							},
							{
								path: 'detail',
								name: 'PromoCouponAutoDetail',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/promotion/popup/PromoCouponAutoDetail.vue'),
							},
							{
								path: 'history',
								name: 'PromoCouponAutoHistory',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/promotion/popup/PromoCouponAutoHistory.vue'),
							},
						],
					},
					{
						path: 'auto-set',
						name: 'PromoCouponAutoset',
						component: () => import('@/pages/common/promotion/PromoCouponAutoset.vue'),
					},
					{
						path: 'self',
						children: [
							{
								path: '',
								name: 'PromoCouponSelf',
								component: () => import('@/pages/common/promotion/PromoCouponSelf.vue'),
							},
							{
								path: 'search',
								name: 'PromoCouponSelfSearch',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/promotion/popup/PromoCouponSelfSearch.vue'),
							},
						],
					},
				],
			},
			{
				path: 'charge',
				children: [
					{
						path: 'coupon-first',
						name: 'PromoChargeCouponFirst',
						component: () => import('@/pages/common/promotion/PromoChargeCouponFirst.vue'),
					},
					{
						path: 'coupon-download',
						name: 'PromoChargeCouponDown',
						component: () => import('@/pages/common/promotion/PromoChargeCouponDown.vue'),
					},
				],
			},
			{
				path: 'discount',
				children: [
					{
						path: 'night',
						children: [
							{
								path: '',
								name: 'PromoDiscountNight',
								component: () => import('@/pages/common/promotion/PromoDiscountNight.vue'),
							},
							{
								path: 'register',
								name: 'PromoDiscountNightRegister',
								component: () => import('@/pages/common/promotion/PromoDiscountNightRegister.vue'),
							},
							{
								path: 'modify',
								name: 'PromoDiscountNightModify',
								component: () => import('@/pages/common/promotion/PromoDiscountNightModify.vue'),
							},
							{
								path: 'detail',
								name: 'PromoDiscountNightDetail',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/promotion/popup/PromoDiscountNightDetail.vue'),
							},
						],
					},
					{
						path: 'now',
						children: [
							{
								path: '',
								name: 'PromoDiscountNow',
								component: () => import('@/pages/common/promotion/PromoDiscountNow.vue'),
							},
							{
								path: 'register',
								name: 'PromoDiscountNowRegister',
								component: () => import('@/pages/common/promotion/PromoDiscountNowRegister.vue'),
							},
							{
								path: 'modify',
								name: 'PromoDiscountNowModify',
								component: () => import('@/pages/common/promotion/PromoDiscountNowModify.vue'),
							},
							{
								path: 'detail',
								name: 'PromoDiscountNowDetail',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/promotion/popup/PromoDiscountNowDetail.vue'),
							},
						],
					},
				],
			},
			{
				path: 'except',
				children: [
					{
						path: 'prod',
						meta: {
							isPopup: true,
						},
						children: [
							{
								path: 'search',
								name: 'PromoExceptProdSearch',
								component: () => import('@/pages/common/promotion/popup/PromoExceptProdSearch.vue'),
							},
							{
								path: 'modify',
								name: 'PromoExceptProdModify',
								component: () => import('@/pages/common/promotion/popup/PromoExceptProdModify.vue'),
							},
						],
					},
					{
						path: 'seller',
						meta: {
							isPopup: true,
						},
						children: [
							{
								path: 'search',
								name: 'PromoExceptSellerSearch',
								component: () => import('@/pages/common/promotion/popup/PromoExceptSellerSearch.vue'),
							},
							{
								path: 'modify',
								name: 'PromoExceptSellerModify',
								component: () => import('@/pages/common/promotion/popup/PromoExceptSellerModify.vue'),
							},
						],
					},
					{
						path: 'discount',
						children: [
							{
								path: 'prod',
								name: 'PromoExceptDiscountProd',
								component: () => import('@/pages/common/promotion/PromoExceptDiscountProd.vue'),
							},
							{
								path: 'seller',
								name: 'PromoExceptDiscountSeller',
								component: () => import('@/pages/common/promotion/PromoExceptDiscountSeller.vue'),
							},
						],
					},
					{
						path: 'exposure',
						children: [
							{
								path: 'prod',
								name: 'PromoExceptExposureProd',
								component: () => import('@/pages/common/promotion/PromoExceptExposureProd.vue'),
							},
							{
								path: 'seller',
								name: 'PromoExceptExposureSeller',
								component: () => import('@/pages/common/promotion/PromoExceptExposureSeller.vue'),
							},
						],
					},
					{
						path: 'affiliate',
						children: [
							{
								path: 'api/prod',
								name: 'PromoExceptAffiliateApiProd',
								component: () => import('@/pages/common/promotion/PromoExceptAffiliateApiProd.vue'),
							},
							{
								path: 'api/seller',
								name: 'PromoExceptAffiliateApiSeller',
								component: () => import('@/pages/common/promotion/PromoExceptAffiliateApiSeller.vue'),
							},
						],
					},
				],
			},
			{
				path: 'Affiliate',
				children: [
					{
						path: 'api',
						children: [
							{
								path: '',
								name: 'PromoAffiliateApi',
								component: () => import('@/pages/common/promotion/PromoAffiliateApi.vue'),
							},
							{
								path: 'list',
								name: 'PromoAffiliateApiList',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/promotion/popup/PromoAffiliateApiList.vue'),
							},
							{
								path: 'modify',
								name: 'PromoAffiliateApiModify',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/promotion/popup/PromoAffiliateApiModify.vue'),
							},
							{
								path: 'search',
								name: 'PromoAffiliateApiSearch',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/promotion/popup/PromoAffiliateApiSearch.vue'),
							},
						],
					},
				],
			},
		],
	},
];

export default routes;