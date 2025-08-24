import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    // 장바구니
	{
		path: '/cart',
		name: 'Cart',
		meta: {
			transition: 'slide-right',
			pageType: 'sub'
		},
		component: () => import('@/page/cart/Cart.vue'),
	},
    // 주문
	{
		path: '/order',
		meta: {
			transition: 'slide-up',
			pageType: 'popup'
		},
		children: [
			{
				path: ':id',
				name: 'Order',
				component: () => import('@/page/order/Order.vue'),
			},
			{
				path: 'guest/:id',
				name: 'OrderGuest',
				component: () => import('@/page/order/guest/OrderGuest.vue'),
			},
			// 주문결과
			{
				path: ':id/result',
				name: 'OrderResult',
				component: () => import('@/page/order/result/OrderResult.vue'),
			}
		]
	}
];

export default routes;