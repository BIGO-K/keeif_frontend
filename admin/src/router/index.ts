import { createRouter, createWebHistory } from 'vue-router';
import base from './path/base';
import calc from './path/calc';
import cs from './path/cs';
import display from './path/display';
import error from './path/error';
import mall from './path/mall';
import members from './path/member';
import order from './path/order';
import popup from './path/popup';
import product from './path/product';
import promotion from './path/promotion';
import seller from './path/seller';
import stats from './path/stats';
import affiliate from '@/router/path/affiliate';

const routes: RouterRecordRaw[] = [
	...base,
	...popup,
	...error,
	...mall,
	...members,
	...seller,
	...product,
	...promotion,
	...order,
	...display,
	...cs,
	...calc,
	...stats,
	...affiliate,
];

const router = createRouter({
	history: createWebHistory(import.meta.env.MM_BASE_PATH ?? ''),
	routes,
});

export default router;