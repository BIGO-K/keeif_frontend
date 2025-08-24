import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/mypage',
		meta: {
			// requiresAuth: true,
		},
		children: [
			// 마이페이지 메인
			{
				path: '',
				name: 'MyMain',
				component: () => import('@/page/mypage/MyMain.vue'),
			},
			// 등급별혜택
			{
				path: 'level',
				name: 'MyLevel',
				component: () => import('@/page/mypage/level/MyLevel.vue'),
			},
			// 주문관리
			{
				path: 'order',
				children: [
					{
						path: '',
						component: () => import('@/page/mypage/order/MyOrder.vue'),
						children: [
							// 주문1
							{
								path: '',
								name: 'MyOrder',
								meta: {
									tab: '주문'
								},
								component: () => import('@/page/mypage/order/MyOrderOrder.vue'),
							},
							// 취소
							{
								path: 'cancel',
								name: 'MyOrderCancel',
								meta: {
									tab: '취소'
								},
								component: () => import('@/page/mypage/order/cancel/MyOrderCancel.vue'),
							},
							// 반품
							{
								path: 'return',
								name: 'MyOrderReturn',
								meta: {
									tab: '반품'
								},
								component: () => import('@/page/mypage/order/return/MyOrderReturn.vue'),
							},
							// 교환
							{
								path: 'exchange',
								name: 'MyOrderExchange',
								meta: {
									tab: '교환'
								},
								component: () => import('@/page/mypage/order/exchange/MyOrderExchange.vue'),
							},
						]
					},
					{
						path: ':id(\\d+)',
						children: [
							// 주문상세
							{
								path: '',
								name: 'MyOrderDetail',
								component: () => import('@/page/mypage/order/detail/MyOrderDetail.vue')
							},
						]
					},
					// 반품전환
					{
						path: 'to-return',
						children: [
							// 반품전환 신청
							{
								path: 'create',
								name: 'MyOrderToReturnCreate',
								component: () => import('@/page/mypage/order/to-return/create/MyOrderToReturnCreate.vue'),
							},
							// 반품전환 신청완료
							{
								path: 'success',
								name: 'MyOrderToReturnSuccess',
								component: () => import('@/page/mypage/order/to-return/success/MyOrderToReturnSuccess.vue'),
							},
						]
					},
					// 취소
					{
						path: 'cancel',
						children: [
							// 취소 신청
							{
								path: 'create',
								name: 'MyOrderCancelCreate',
								component: () => import('@/page/mypage/order/cancel/create/MyOrderCancelCreate.vue'),
							},
							// 취소 신청완료
							{
								path: 'success',
								name: 'MyOrderCancelSuccess',
								component: () => import('@/page/mypage/order/cancel/success/MyOrderCancelSuccess.vue'),
							},
						]
					},
					// 반품
					{
						path: 'return',
						children: [
							// 반품 신청
							{
								path: 'create',
								name: 'MyOrderReturnCreate',
								component: () => import('@/page/mypage/order/return/create/MyOrderReturnCreate.vue'),
							},
							// 반품 신청완료
							{
								path: 'success',
								name: 'MyOrderReturnSuccess',
								component: () => import('@/page/mypage/order/return/success/MyOrderReturnSuccess.vue'),
							},
						]
					},
					// 교환
					{
						path: 'exchange',
						children: [
							// 교환 신청
							{
								path: 'create',
								children: [
									{
										path: '',
										name: 'MyOrderExchangeCreate',
										component: () => import('@/page/mypage/order/exchange/create/MyOrderExchangeCreate.vue'),
									}
								]
							},
							// 교환 신청완료
							{
								path: 'success',
								name: 'MyOrderExchangeSuccess',
								component: () => import('@/page/mypage/order/exchange/success/MyOrderExchangeSuccess.vue'),
							},
						]
					}
				]
			},
			// 혜택관리
			{
				path: 'benefit',
				children: [
					{
						path: '',
						name: 'MyBenefit',
						component: () => import('@/page/mypage/benefit/MyBenefit.vue'),
						redirect: {
							name: 'MyBenefitCoupon',
						},
						children: [
							// 쿠폰
							{
								path: 'coupon',
								name: 'MyBenefitCoupon',
								meta: {
									tab: '보유 쿠폰'
								},
								component: () => import('@/page/mypage/benefit/coupon/MyBenefitCoupon.vue'),
							},
							// 포인트
							{
								path: 'point',
								name: 'MyBenefitPoint',
								meta: {
									tab: '보유 적립금'
								},
								component: () => import('@/page/mypage/benefit/point/MyBenefitPoint.vue'),
							},
						]
					},
				]
			},
			// 마이찜
			{
				path: 'wishlist',
				children: [
					{
						path: '',
						name: 'MyWishlist',
						component: () => import('@/page/mypage/wishlist/MyWishlist.vue'),
						redirect: {
							name: 'MyWishlistProduct',
						},
						children: [
							// 아이템
							{
								path: 'product',
								name: 'MyWishlistProduct',
								meta: {
									tab: '찜한 아이템'
								},
								component: () => import('@/page/mypage/wishlist/product/MyWishlistProduct.vue'),
							},
							// 브랜드
							{
								path: 'brand',
								name: 'MyWishlistBrand',
								meta: {
									tab: '찜한 브랜드'
								},
								component: () => import('@/page/mypage/wishlist/brand/MyWishlistBrand.vue'),
							},
						]
					},
					// 아이템
					{
						path: 'product',
						children: [
							// 아이템 상세
							{
								path: ':id(\\d+)',
								name: 'MyWishlistProductDetail',
								component: () => import('@/page/mypage/wishlist/product/detail/MyWishlistProductDetail.vue'),
							},
						]
					},
				]
			},
			// 리뷰관리
			{
				path: 'review',
				children: [
					{
						path: '',
						name: 'MyReview',
						component: () => import('@/page/mypage/review/MyReview.vue'),
						redirect: {
							name: 'MyReviewPending',
						},
						children: [
							// 작성가능한리뷰
							{
								path: 'pending',
								name: 'MyReviewPending',
								meta: {
									tab: '작성 가능한 리뷰'
								},
								component: () => import('@/page/mypage/review/pending/MyReviewPending.vue'),
							},
							// 작성한리뷰
							{
								path: 'completed',
								name: 'MyReviewCompleted',
								meta: {
									tab: '작성한 리뷰'
								},
								component: () => import('@/page/mypage/review/completed/MyReviewCompleted.vue'),
							},
						]
					}
				]
			},
			// 문의관리
			{
				path: 'inquiry',
				children: [
					{
						path: '',
						name: 'MyInquiry',
						component: () => import('@/page/mypage/inquiry/MyInquiry.vue'),
						redirect: {
							name: 'MyInquirySingle',
						},
						children: [
							// 1:1문의
							{
								path: 'single',
								name: 'MyInquirySingle',
								meta: {
									tab: '1:1 문의'
								},
								component: () => import('@/page/mypage/inquiry/single/MyInquirySingle.vue'),
							},
							// 판매자 문의
							{
								path: 'seller',
								name: 'MyInquirySeller',
								meta: {
									tab: '판매자 문의'
								},
								component: () => import('@/page/mypage/inquiry/seller/MyInquirySeller.vue'),
							},
						],
					},
					// 1:1문의
					{
						path: 'single',
						children: [
							// 1:1문의 작성
							{
								path: 'create',
								name: 'MyInquirySingleCreate',
								component: () => import('@/page/mypage/inquiry/single/create/MyInquirySingleCreate.vue'),
							},
						]
					}
				]
			},
			// 최근본쇼핑정보
			{
				path: 'recently',
				name: 'MyRecently',
				component: () => import('@/page/mypage/recently/MyRecently.vue'),
				redirect: {
					name: 'MyRecentlyProduct',
				},
				children: [
					{
						path: 'product',
						name: 'MyRecentlyProduct',
						meta: {
							tab: '최근 본 상품'
						},
						component: () => import('@/page/mypage/recently/product/MyRecentlyProduct.vue'),
					},
					{
						path: 'promotion',
						name: 'MyRecentlyPromotion',
						meta: {
							tab: '최근 본 기획전'
						},
						component: () => import('@/page/mypage/recently/promotion/MyRecentlyPromotion.vue'),
					}
				]
			},
			// 환불계좌관리
			{
				path: 'refund',
				children: [
					{
						path: '',
						name: 'MyRefund',
						component: () => import('@/page/mypage/refund/MyRefund.vue'),
					}
				]
			},
			// 회원정보수정
			{
				path: 'info-update',
				name: 'MyInfoUpdate',
				component: () => import('@/page/mypage/info/MyInfoUpdate.vue'),
			},
			// 회원탈퇴
			{
				path: 'withdraw',
				name: 'MyWithdraw',
				component: () => import('@/page/mypage/withdraw/MyWithdraw.vue'),
			},
			// 설정
			{
				path: 'setting',
				name: 'MySetting',
				component: () => import('@/page/mypage/setting/MySetting.vue'),
			},
		]
	}
];

export default routes;