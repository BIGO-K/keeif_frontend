import { type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/cscenter',
		meta: {
			pageType: 'sub',
			transition: 'slide-right',
		},
		children: [
			// 고객센터 메인
			{
				path: '',
				name: 'CsMain',
				component: () => import('@/page/cscenter/CsMain.vue'),
			},
			// 1:1고객상담 => MyInquirySingleCreate
			// 이용안내
			{
				path: 'help',
				meta: {
					pageType: 'popup',
					transition: 'slide-up',
				},
				children: [
					// 주문/반품 배송조회
					{
						path: 'tracking',
						name: 'CsHelpTracking',
						component: () => import('@/page/cscenter/help/tracking/CsHelpTracking.vue'),
						redirect: {
							name: 'CsHelpTrackingOrder',
						},
						children: [
							// 주문 배송조회
							{
								path: 'order',
								name: 'CsHelpTrackingOrder',
								meta: {
									tab: '주문 배송조회',
								},
								component: () => import('@/page/cscenter/help/tracking/order/CsHelpTrackingOrder.vue'),
							},
							// 반품 배송조회
							{
								path: 'return',
								name: 'CsHelpTrackingReturn',
								meta: {
									tab: '반품 배송조회',
								},
								component: () => import('@/page/cscenter/help/tracking/return/CsHelpTrackingReturn.vue'),
							},
						],
					},
					// 반품/환불 안내
					{
						path: 'return',
						name: 'CsHelpReturn',
						component: () => import('@/page/cscenter/help/return/CsHelpReturn.vue'),
					},
					// 회원등급 및 혜택
					{
						path: 'level',
						name: 'CsHelpLevel',
						component: () => import('@/page/cscenter/help/level/CsHelpLevel.vue'),
					},
					// 쿠폰/적립금
					{
						path: 'benefit',
						name: 'CsHelpBenefit',
						component: () => import('@/page/cscenter/help/benefit/CsHelpBenefit.vue'),
						redirect: {
							name: 'CsHelpBenefitCoupon',
						},
						children: [
							// 쿠폰 안내
							{
								path: 'coupon',
								name: 'CsHelpBenefitCoupon',
								meta: {
									tab: '쿠폰 안내',
								},
								component: () => import('@/page/cscenter/help/benefit/coupon/CsHelpBenefitCoupon.vue'),
							},
							// 적립금 안내
							{
								path: 'point',
								name: 'CsHelpBenefitPoint',
								meta: {
									tab: '적립금 안내',
								},
								component: () => import('@/page/cscenter/help/benefit/point/CsHelpBenefitPoint.vue'),
							},
						],
					},
				],
			},
			// 자주하는질문
			{
				path: 'faq',
				name: 'CsFaq',
				meta: {
					pageType: 'sub',
					transition: 'slide-right',
				},
				component: () => import('@/page/cscenter/faq/CsFaq.vue'),
				props: (route) => ({ faqTypeId: route.query.type ? Number(route.query.type) : null }),
			},
			// 공지사항
			{
				path: 'notice',
				name: 'CsNotice',
				meta: {
					pageType: 'sub',
					transition: 'slide-right',
				},
				component: () => import('@/page/cscenter/notice/CsNotice.vue'),
			},
		],
	},
];

export default routes;