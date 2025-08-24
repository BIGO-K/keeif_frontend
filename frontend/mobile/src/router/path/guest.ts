import { type RouteRecordRaw } from 'vue-router';

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
									tab: '주문',
								},
								component: () => import('@/page/guest/order/GuestOrderOrder.vue'),
							},
							// 취소
							{
								path: 'cancel',
								name: 'GuestOrderCancel',
								meta: {
									tab: '취소',
								},
								component: () => import('@/page/guest/order/cancel/GuestOrderCancel.vue'),
							},
							// 반품
							{
								path: 'return',
								name: 'GuestOrderReturn',
								meta: {
									tab: '반품',
								},
								component: () => import('@/page/guest/order/return/GuestOrderReturn.vue'),
							},
							// 교환
							{
								path: 'exchange',
								name: 'GuestOrderExchange',
								meta: {
									tab: '교환',
								},
								component: () => import('@/page/guest/order/exchange/GuestOrderExchange.vue'),
							},
						],
					},
					{
						path: ':id(\\d+)',
						children: [
							// 주문상세
							{
								path: '',
								name: 'GuestOrderDetail',
								component: () => import('@/page/guest/order/detail/GuestOrderDetail.vue'),
								props: (route) => ({ orderId: route.params.id }),
							},
							// 배송지변경
							{
								path: 'addresschange',
								name: 'GuestOrderDetailAddressChange',
								component: () => import('@/page/guest/order/detail/address-change/GuestOrderDetailAddressChange.vue'),
							},
						],
					},
					// 반품전환
					{
						path: 'to-return/:exchange_id',
						children: [
							// 반품전환
							{
								path: 'create/:exchange_target_id',
								name: 'GuestOrderToReturnCreate',
								component: () => import('@/page/guest/order/to-return/create/GuestOrderToReturnCreate.vue'),
								props: (route) => ({ exchangeId: route.params.exchange_id, exchangeTargetId: Number(route.params.exchange_target_id) }),
							},
							// 반품전환 신청완료
							{
								path: 'success/:return_id',
								name: 'GuestOrderToReturnSuccess',
								component: () => import('@/page/guest/order/to-return/success/GuestOrderToReturnSuccess.vue'),
								props: (route) => ({ exchangeId: route.params.exchange_id, returnId: route.params.return_id }),
							},
						],
					},
					// 취소
					{
						path: 'cancel/:order_id',
						children: [
							// 취소 신청
							{
								path: 'create/:item_id',
								name: 'GuestOrderCancelCreate',
								component: () => import('@/page/guest/order/cancel/create/GuestOrderCancelCreate.vue'),
								props: (route) => ({ orderId: route.params.order_id, orderItemId: Number(route.params.item_id) }),
							},
							// 취소 신청완료
							{
								path: 'success/:cancel_ids(.*)*',
								name: 'GuestOrderCancelSuccess',
								component: () => import('@/page/guest/order/cancel/success/GuestOrderCancelSuccess.vue'),
								props: (route) => ({ orderId: route.params.order_id, cancelIds: route.params.cancel_ids }),
							},
						],
					},
					// 반품
					{
						path: 'return/:order_id',
						children: [
							// 반품 신청
							{
								path: 'create/:item_id',
								name: 'GuestOrderReturnCreate',
								component: () => import('@/page/guest/order/return/create/GuestOrderReturnCreate.vue'),
								props: (route) => ({ orderId: route.params.order_id, orderItemId: Number(route.params.item_id) }),
							},
							// 반품 신청완료
							{
								path: 'success/:return_ids(.*)*',
								name: 'GuestOrderReturnSuccess',
								component: () => import('@/page/guest/order/return/success/GuestOrderReturnSuccess.vue'),
								props: (route) => ({ orderId: route.params.order_id, returnIds: route.params.return_ids }),
							},
						],
					},
					// 교환
					{
						path: 'exchange/:order_id',
						children: [
							// 교환 신청
							{
								path: 'create/:item_id',
								name: 'GuestOrderExchangeCreate',
								component: () => import('@/page/guest/order/exchange/create/GuestOrderExchangeCreate.vue'),
								props: (route) => ({ orderId: route.params.order_id, orderItemId: Number(route.params.item_id) }),
							},
							// 교환 신청완료
							{
								path: 'success/:exchange_id',
								name: 'GuestOrderExchangeSuccess',
								component: () => import('@/page/guest/order/exchange/success/GuestOrderExchangeSuccess.vue'),
								props: (route) => ({ orderId: route.params.order_id, exchangeId: route.params.exchange_id }),
							},
						],
					},
				],
			},
		],
	},
];

export default routes;