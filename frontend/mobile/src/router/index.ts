import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { usePageContextStore } from '$/stores/usePageContextStore';
import isMobile from '$/utils/isMobile';
import { userGuard } from '@/router/guard/userGuard';
import base from '@/router/path/base';
import cscenter from '@/router/path/cscenter';
import custom from '@/router/path/custom';
import feature from '@/router/path/feature';
import guest from '@/router/path/guest';
import mypage from '@/router/path/mypage';
import order from '@/router/path/order';
import shopping from '@/router/path/shopping';
import user from '@/router/path/user';

declare module 'vue-router' {
    interface RouteMeta {
        // 모든 경로에서 선언해야합니다.
        hideTransition?: boolean
        pageType: 'sub'|'popup'|'main'|'sidebar'
        // 선택값
        from?: RouteLocationNormalized;
        authRequired?: boolean;
        hideToolbar?: boolean;
        transition?: string;
        pushedBack?: boolean;
        historyStatePosition?: number;
		isForward: boolean
    }
}
const isIos = isMobile('ios') || isMobile('app_ios');
const transition = {
	sub: 'slide-right',
	popup: 'slide-up',
	main: '',
	sidebar: 'slide-left',
};

const routes: RouteRecordRaw[] = [
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
	history: createWebHistory('/'),
	routes,
});

router.onError((err) => {
    // mmon.loading.hide();
	const pageContextStore = usePageContextStore();
	// if (err.message.includes('Failed to fetch dynamically imported module')) {
	// 	window.location.reload();

	// 	return;
	// }
	console.error('router:error', err);
	pageContextStore.applicationError = err;
});

router.beforeEach(async (to, from, next) => {
	// const userAgentStore = useUserAgentStore();
	// const isBeforeVersion = await userAgentStore.isBeforeVersion();

	// if (isBeforeVersion) {
	// 	return next({
	// 		force: true,
	// 	});
	// }

	if (!from.meta.pushedBack && window.history.state.position < (from.meta.historyStatePosition || 0) && isIos) {
        // ios 제스쳐 뒤로가기시 트렌지션 적용 x
		to.meta.transition = 'bf-custom';
	}
	else if (
		from.name !== 'Main'
        && (from.meta.pushedBack || (from.meta.historyStatePosition && from.meta.historyStatePosition > window.history.state.position))
	) {
		if (from.meta.pageType === 'sub' || (!from.meta.pageType && to.meta.pageType === 'sub')) {
			to.meta.transition = `${transition.sub}-reverse`;
		}
		else if (from.meta.pageType === 'popup') {
			to.meta.transition = `${transition.popup}-reverse`;
		}
		else if (from.meta.pageType === 'sidebar') {
			to.meta.transition = `${transition.sidebar}-reverse`;
		}
	}
    // 새로고침 || error || 트렌지션값 없는 경우 적용 x
	if (from.name === undefined) {
		to.meta.transition = 'bf-custom';
	}
    // [END] ANIMATION 처리
	/** 회원 검증이 필요한 경우 가드 호출  */
	if (to.meta.authRequired) {
		return userGuard(to, from, next);
	}


	next();
});

router.afterEach((to, from) => {
    // 브라우저 자체 이동시 진출 트랜지션 처리를 위한 값
	to.meta.historyStatePosition = window.history.state.position;
	to.meta.isForward = window.history.state.position > (from.meta.historyStatePosition || 0);
});

export default router;