const routes = [
	{
		path: '/order',
		redirect: { name: 'ProOrderManage' },
		children: [
			{
				path: 'detail',
				meta: {
					isPopup: true,
				},
				children: [
					{
						path: 'discount',
						name: 'OrderDetailDiscount',
						component: () => import('@/pages/common/order/popup/OrderDetailDiscount.vue'),
					},
					{
						path: 'address',
						name: 'OrderDetailAddress',
						component: () => import('@/pages/common/order/popup/OrderDetailAddress.vue'),
					},
					{
						path: 'counsel-register',
						name: 'OrderDetailCounselRegister',
						component: () => import('@/pages/common/order/popup/OrderDetailCounselRegister.vue'),
					},
					{
						path: 'counsel-modify',
						name: 'OrderDetailCounselModify',
						component: () => import('@/pages/common/order/popup/OrderDetailCounselModify.vue'),
					},
					{
						path: 'sms',
						name: 'OrderDetailSms',
						component: () => import('@/pages/common/order/popup/OrderDetailSms.vue'),
					},
					{
						path: 'sms-detail',
						name: 'OrderDetailSmsDetail',
						component: () => import('@/pages/common/order/popup/OrderDetailSmsDetail.vue'),
					},
				],
			},
			{
				path: 'invoice-modify',
				name: 'OrderInvoiceModify',
				meta: {
					isPopup: true,
				},
				component: () => import('@/pages/common/order/popup/OrderInvoiceModify.vue'),
			},
			{
				path: 'privacy',
				name: 'OrderPrivacy',
				component: () => import('@/pages/common/order/OrderPrivacy.vue'),
			},
			{
				path: 'ship',
				children: [
					{
						path: 'delay',
						name: 'OrderShipDelay',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/order/popup/OrderShipDelay.vue'),
					},
					{
						path: 'cancel',
						name: 'OrderShipCancel',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/order/popup/OrderShipCancel.vue'),
					},
					{
						path: 'return',
						name: 'OrderShipReturn',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/order/popup/OrderShipReturn.vue'),
					},
					{
						path: 'exchange',
						name: 'OrderShipExchange',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/order/popup/OrderShipExchange.vue'),
					},
					{
						path: 'invoice',
						name: 'OrderShipInvoice',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/order/popup/OrderShipInvoice.vue'),
					},
					{
						path: 'code',
						name: 'OrderShipCode',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/order/popup/OrderShipCode.vue'),
					},
				],
			},
			{
				path: 'cancel',
				children: [
					{
						path: 'reject',
						name: 'OrderCancelReject',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/order/popup/OrderCancelReject.vue'),
					},
				],
			},
			{
				path: 'return',
				children: [
					{
						path: 'hold',
						name: 'OrderReturnHold',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/order/popup/OrderReturnHold.vue'),
					},
				],
			},
			{
				path: 'exchange',
				children: [
					{
						path: 'hold',
						name: 'OrderExchangeHold',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/order/popup/OrderExchangeHold.vue'),
					},
					{
						path: 'switch',
						name: 'OrderExchangeSwitch',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/order/popup/OrderExchangeSwitch.vue'),
					},
				],
			},
			{
				path: 'refund',
				children: [
					{
						path: 'complete',
						name: 'OrderRefundComplete',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/order/popup/OrderRefundComplete.vue'),
					},
					{
						path: 'detail',
						name: 'OrderRefundDetail',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/order/popup/OrderRefundDetail.vue'),
					},
				],
			},
			{
				path: 'penalty',
				redirect: { name: 'OrderPenaltyReceipt' },
				children: [
					{
						path: 'delay',
						children: [
							{
								path: 'rate',
								name: 'OrderPenaltyDelayRate',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/order/popup/OrderPenaltyDelayRate.vue'),
							},
						],
					},
					{
						path: 'invoice',
						children: [
							{
								path: 'reject',
								name: 'OrderPenaltyInvoiceReject',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/order/popup/OrderPenaltyInvoiceReject.vue'),
							},
							{
								path: 'complain',
								name: 'OrderPenaltyInvoiceComplain',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/order/popup/OrderPenaltyInvoiceComplain.vue'),
							},
						],
					},
				],
			},
		],
	},
	{
		path: '/pro/order',
		meta: {
			version: 'pro',
		},
		redirect: { name: 'ProOrderManage' },
		children: [
			{
				path: 'detail',
				meta: {
					isPopup: true,
				},
				children: [
					{
						path: '',
						name: 'ProOrderDetail',
						component: () => import('@/pages/pro/order/popup/OrderDetail.vue'),
					},
					{
						path: 'api',
						name: 'ProOrderDetailApi',
						component: () => import('@/pages/pro/order/popup/OrderDetailApi.vue'),
					},
				],
			},
			{
				path: 'manage',
				children: [
					{
						path: '',
						name: 'ProOrderManage',
						component: () => import('@/pages/pro/order/OrderManage.vue'),
					},
					{
						path: 'api',
						name: 'ProOrderManageApi',
						component: () => import('@/pages/pro/order/OrderManageApi.vue'),
					},
				],
			},
			{
				path: 'ship',
				children: [
					{
						path: '',
						name: 'ProOrderShip',
						component: () => import('@/pages/pro/order/OrderShip.vue'),
					},
					{
						path: 'api',
						name: 'ProOrderShipApi',
						component: () => import('@/pages/pro/order/OrderShipApi.vue'),
					},
					{
						path: 'timedeal',
						name: 'ProOrderShipTimedeal',
						component: () => import('@/pages/pro/order/OrderShipTimedeal.vue'),
					},
					{
						path: 'raffle',
						name: 'ProOrderShipRaffle',
						component: () => import('@/pages/pro/order/OrderShipRaffle.vue'),
					},
					{
						path: 'funding',
						name: 'ProOrderShipFunding',
						component: () => import('@/pages/pro/order/OrderShipFunding.vue'),
					},
				],
			},
			{
				path: 'cancel',
				children: [
					{
						path: '',
						name: 'ProOrderCancel',
						component: () => import('@/pages/pro/order/OrderCancel.vue'),
					},
					{
						path: 'api',
						name: 'ProOrderCancelApi',
						component: () => import('@/pages/pro/order/OrderCancelApi.vue'),
					},
					{
						path: 'timedeal',
						name: 'ProOrderCancelTimedeal',
						component: () => import('@/pages/pro/order/OrderCancelTimedeal.vue'),
					},
					{
						path: 'raffle',
						name: 'ProOrderCancelRaffle',
						component: () => import('@/pages/pro/order/OrderCancelRaffle.vue'),
					},
					{
						path: 'funding',
						name: 'ProOrderCancelFunding',
						component: () => import('@/pages/pro/order/OrderCancelFunding.vue'),
					},
				],
			},
			{
				path: 'return',
				children: [
					{
						path: '',
						name: 'ProOrderReturn',
						component: () => import('@/pages/pro/order/OrderReturn.vue'),
					},
					{
						path: 'api',
						name: 'ProOrderReturnApi',
						component: () => import('@/pages/pro/order/OrderReturnApi.vue'),
					},
					{
						path: 'timedeal',
						name: 'ProOrderReturnTimedeal',
						component: () => import('@/pages/pro/order/OrderReturnTimedeal.vue'),
					},
					{
						path: 'raffle',
						name: 'ProOrderReturnRaffle',
						component: () => import('@/pages/pro/order/OrderReturnRaffle.vue'),
					},
					{
						path: 'funding',
						name: 'ProOrderReturnFunding',
						component: () => import('@/pages/pro/order/OrderReturnFunding.vue'),
					},
				],
			},
			{
				path: 'exchange',
				children: [
					{
						path: '',
						name: 'ProOrderExchange',
						component: () => import('@/pages/pro/order/OrderExchange.vue'),
					},
					{
						path: 'api',
						name: 'ProOrderExchangeApi',
						component: () => import('@/pages/pro/order/OrderExchangeApi.vue'),
					},
					{
						path: 'timedeal',
						name: 'ProOrderExchangeTimedeal',
						component: () => import('@/pages/pro/order/OrderExchangeTimedeal.vue'),
					},
					{
						path: 'raffle',
						name: 'ProOrderExchangeRaffle',
						component: () => import('@/pages/pro/order/OrderExchangeRaffle.vue'),
					},
					{
						path: 'funding',
						name: 'ProOrderExchangeFunding',
						component: () => import('@/pages/pro/order/OrderExchangeFunding.vue'),
					},
				],
			},
			{
				path: 'refund',
				children: [
					{
						path: '',
						name: 'ProOrderRefund',
						component: () => import('@/pages/pro/order/OrderRefund.vue'),
					},
					{
						path: 'api',
						name: 'ProOrderRefundApi',
						component: () => import('@/pages/pro/order/OrderRefundApi.vue'),
					},
				],
			},
			{
				path: 'penalty',
				redirect: { name: 'ProOrderPenaltyReceipt' },
				children: [
					{
						path: 'receipt',
						children: [
							{
								path: '',
								name: 'ProOrderPenaltyReceipt',
								component: () => import('@/pages/pro/order/OrderPenaltyReceipt.vue'),
							},
							{
								path: 'api',
								name: 'ProOrderPenaltyReceiptApi',
								component: () => import('@/pages/pro/order/OrderPenaltyReceiptApi.vue'),
							},
							{
								path: 'timedeal',
								name: 'ProOrderPenaltyReceiptTimedeal',
								component: () => import('@/pages/pro/order/OrderPenaltyReceiptTimedeal.vue'),
							},
							{
								path: 'raffle',
								name: 'ProOrderPenaltyReceiptRaffle',
								component: () => import('@/pages/pro/order/OrderPenaltyReceiptRaffle.vue'),
							},
							{
								path: 'funding',
								name: 'ProOrderPenaltyReceiptFunding',
								component: () => import('@/pages/pro/order/OrderPenaltyReceiptFunding.vue'),
							},
						],
					},
					{
						path: 'delay',
						children: [
							{
								path: '',
								name: 'ProOrderPenaltyDelay',
								component: () => import('@/pages/pro/order/OrderPenaltyDelay.vue'),
							},
							{
								path: 'api',
								name: 'ProOrderPenaltyDelayApi',
								component: () => import('@/pages/pro/order/OrderPenaltyDelayApi.vue'),
							},
							{
								path: 'timedeal',
								name: 'ProOrderPenaltyDelayTimedeal',
								component: () => import('@/pages/pro/order/OrderPenaltyDelayTimedeal.vue'),
							},
							{
								path: 'raffle',
								name: 'ProOrderPenaltyDelayRaffle',
								component: () => import('@/pages/pro/order/OrderPenaltyDelayRaffle.vue'),
							},
							{
								path: 'funding',
								name: 'ProOrderPenaltyDelayFunding',
								component: () => import('@/pages/pro/order/OrderPenaltyDelayFunding.vue'),
							},
						],
					},
					{
						path: 'soldout',
						children: [
							{
								path: '',
								name: 'ProOrderPenaltySoldout',
								component: () => import('@/pages/pro/order/OrderPenaltySoldout.vue'),
							},
							{
								path: 'api',
								name: 'ProOrderPenaltySoldoutApi',
								component: () => import('@/pages/pro/order/OrderPenaltySoldoutApi.vue'),
							},
							{
								path: 'timedeal',
								name: 'ProOrderPenaltySoldoutTimedeal',
								component: () => import('@/pages/pro/order/OrderPenaltySoldoutTimedeal.vue'),
							},
							{
								path: 'raffle',
								name: 'ProOrderPenaltySoldoutRaffle',
								component: () => import('@/pages/pro/order/OrderPenaltySoldoutRaffle.vue'),
							},
							{
								path: 'funding',
								name: 'ProOrderPenaltySoldoutFunding',
								component: () => import('@/pages/pro/order/OrderPenaltySoldoutFunding.vue'),
							},
						],
					},
					{
						path: 'invoice',
						children: [
							{
								path: '',
								name: 'ProOrderPenaltyInvoice',
								component: () => import('@/pages/pro/order/OrderPenaltyInvoice.vue'),
							},
							{
								path: 'api',
								name: 'ProOrderPenaltyInvoiceApi',
								component: () => import('@/pages/pro/order/OrderPenaltyInvoiceApi.vue'),
							},
							{
								path: 'timedeal',
								name: 'ProOrderPenaltyInvoiceTimedeal',
								component: () => import('@/pages/pro/order/OrderPenaltyInvoiceTimedeal.vue'),
							},
							{
								path: 'raffle',
								name: 'ProOrderPenaltyInvoiceRaffle',
								component: () => import('@/pages/pro/order/OrderPenaltyInvoiceRaffle.vue'),
							},
							{
								path: 'funding',
								name: 'ProOrderPenaltyInvoiceFunding',
								component: () => import('@/pages/pro/order/OrderPenaltyInvoiceFunding.vue'),
							},
						],
					},
					{
						path: 'return',
						children: [
							{
								path: '',
								name: 'ProOrderPenaltyReturn',
								component: () => import('@/pages/pro/order/OrderPenaltyReturn.vue'),
							},
							{
								path: 'api',
								name: 'ProOrderPenaltyReturnApi',
								component: () => import('@/pages/pro/order/OrderPenaltyReturnApi.vue'),
							},
							{
								path: 'timedeal',
								name: 'ProOrderPenaltyReturnTimedeal',
								component: () => import('@/pages/pro/order/OrderPenaltyReturnTimedeal.vue'),
							},
							{
								path: 'raffle',
								name: 'ProOrderPenaltyReturnRaffle',
								component: () => import('@/pages/pro/order/OrderPenaltyReturnRaffle.vue'),
							},
							{
								path: 'funding',
								name: 'ProOrderPenaltyReturnFunding',
								component: () => import('@/pages/pro/order/OrderPenaltyReturnFunding.vue'),
							},
						],
					},
					{
						path: 'exchange',
						children: [
							{
								path: '',
								name: 'ProOrderPenaltyExchange',
								component: () => import('@/pages/pro/order/OrderPenaltyExchange.vue'),
							},
							{
								path: 'api',
								name: 'ProOrderPenaltyExchangeApi',
								component: () => import('@/pages/pro/order/OrderPenaltyExchangeApi.vue'),
							},
							{
								path: 'timedeal',
								name: 'ProOrderPenaltyExchangeTimedeal',
								component: () => import('@/pages/pro/order/OrderPenaltyExchangeTimedeal.vue'),
							},
							{
								path: 'raffle',
								name: 'ProOrderPenaltyExchangeRaffle',
								component: () => import('@/pages/pro/order/OrderPenaltyExchangeRaffle.vue'),
							},
							{
								path: 'funding',
								name: 'ProOrderPenaltyExchangeFunding',
								component: () => import('@/pages/pro/order/OrderPenaltyExchangeFunding.vue'),
							},
						],
					},
				],
			},
		],
	},
];

export default routes;