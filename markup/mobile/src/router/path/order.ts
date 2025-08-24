import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    // 장바구니
	{
		path: '/cart',
		name: 'Cart',
		component: () => import('@/page/cart/Cart.vue'),
	},
    // 주문
	{
		path: '/order',
		children: [
			{
				path: '',
				name: 'Order',
				component: () => import('@/page/order/Order.vue'),
			},
			// 비회원
			{
				path: 'guest',
				name: 'OrderGuest',
				component: () => import('@/page/order/guest/OrderGuest.vue'),
			},
			// 주문결과(완료/실패)
			{
				path: 'result',
				name: 'OrderResult',
				component: () => import('@/page/order/result/OrderResult.vue'),
			},
		]
	}
];

export default routes;