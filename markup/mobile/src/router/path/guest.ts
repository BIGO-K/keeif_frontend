import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/guest',
		children: [
			// 주문관리
			{
				path: 'order',
				children: [
					{
						path: '',
						component: () => import('@/page/guest/order/GuestOrder.vue'),
						children: [
							// 주문
							{
								path: '',
								name: 'GuestOrder',
								meta: {
									tab: '주문'
								},
								component: () => import('@/page/guest/order/GuestOrderOrder.vue'),
							},
							// 취소
							{
								path: 'cancel',
								name: 'GuestOrderCancel',
								meta: {
									tab: '취소'
								},
								component: () => import('@/page/guest/order/cancel/GuestOrderCancel.vue'),
							},
							// 반품
							{
								path: 'return',
								name: 'GuestOrderReturn',
								meta: {
									tab: '반품'
								},
								component: () => import('@/page/guest/order/return/GuestOrderReturn.vue'),
							},
							// 교환
							{
								path: 'exchange',
								name: 'GuestOrderExchange',
								meta: {
									tab: '교환'
								},
								component: () => import('@/page/guest/order/exchange/GuestOrderExchange.vue'),
							},
						]
					},
					// 주문상세
					{
						path: ':id(\\d+)',
						name: 'GuestOrderDetail',
						component: () => import('@/page/guest/order/detail/GuestOrderDetail.vue')
					},
					// 반품전환
					{
						path: 'to-return',
						children: [
							// 반품전환
							{
								path: 'create',
								name: 'GuestOrderToReturn',
								component: () => import('@/page/guest/order/to-return/GuestOrderToReturn.vue'),
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
								name: 'GuestOrderCancelCreate',
								component: () => import('@/page/guest/order/cancel/create/GuestOrderCancelCreate.vue'),
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
								name: 'GuestOrderReturnCreate',
								component: () => import('@/page/guest/order/return/create/GuestOrderReturnCreate.vue'),
							},
							// 반품 정보 입력
							{
								path: 'input',
								name: 'GuestOrderReturnInput',
								component: () => import('@/page/guest/order/return/input/GuestOrderReturnInput.vue')
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
								name: 'GuestOrderExchangeCreate',
								component: () => import('@/page/guest/order/exchange/create/GuestOrderExchangeCreate.vue'),
							},
						]
					},
				]
			},
			// 설정
			{
				path: 'setting',
				name: 'GuestSetting',
				component: () => import('@/page/guest/setting/GuestSetting.vue'),
			},
		]
	}
];

export default routes;