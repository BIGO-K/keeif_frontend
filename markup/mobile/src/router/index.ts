import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import base from '@/router/path/base';
import cscenter from '@/router/path/cscenter';
import custom from '@/router/path/custom';
import feature from '@/router/path/feature';
import guest from '@/router/path/guest';
import mypage from '@/router/path/mypage';
import order from '@/router/path/order';
import shopping from '@/router/path/shopping';
import user from '@/router/path/user';

const routes: RouteRecordRaw[] = [
	{
		path: '/index',
		name: 'Index',
		component: () => import('@/Index.vue'),
	},
	...base,
	...shopping,
	...cscenter,
	...order,
	...mypage,
	...user,
	...guest,
	...feature,
	...custom,
];
const router = createRouter({
	history: createWebHistory(import.meta.env.MM_BASE_PATH ?? ''),
	routes,
	scrollBehavior(_to, _from, _position) {

		// 히스토리, params/query 이동
		if (_position != null || _to.name === _from.name) return _position;
		// query 이동
		else return (_to.path === _from.path) ? null : { top: 0, left: 0 };

	},
});

router.beforeEach((_to, _from, _next) => {
	// 로그인 필요
	if (_to.matched.some(_record => _record.meta.requiresAuth) && !useUserStore().isLogin) _next({ name: 'Login', query: { redirect: _to.name } });
	else _next();
});

// router.afterEach((_to, _from, _next) => {
// });

export default router;