import { createApp } from 'vue';
import pinia from '$/stores';
import MMLink from '@/component/MMLink.vue';
import App from '@/App.vue';
import router from '@/router';

const app = createApp(App)
	.use(pinia);

(async () => {

	// TODO 공통 fetch 및 import 통합
	// await useConfigStore().fetchAPI();
	// await useCategoryStore().fetchAPI();

	app.use(router)
		.component('mm-link', MMLink)
		.mount('#app');

})();

const isMobile = (_type?: string): boolean => {

	const typeMap: MobileMap = {
		iphone: 'iphone',
		ipad: 'ipad',
		ipod: 'ipod',
		get ios() { return `${[this.iphone, this.ipad, this.ipod].join('|')}`; },
		android: 'android',
		blackberry: 'blackberry|bb10|playbook',
		window: 'iemobile|windows phone|windows mobile',
		opera: 'opera mini',
		// 앱에 userAgent 코드 추가 필요
		app_kitkat: 'app_kitkat',
		app_first: 'app_first', // 앱 최초실행
		app_ios: 'app_ios',
		app_android: 'app_android',
		get app() { return `${[this.app_ios, this.app_android].join('|')}`; },
	};
	const targetType = (_type == null) ? `${[typeMap.ios, typeMap.android, typeMap.blackberry, typeMap.window, typeMap.opera].join(' | ')}|webos|bada|zunewp7|nokia` : (_type in typeMap) ? typeMap[_type as keyof MobileMap] : _type;

	return new RegExp(targetType, 'i').test(navigator.userAgent);

};

document.documentElement.classList.add(`T=${isMobile() ? 'mobile' : 'pc'}`);

console.log(' 기업가치를 높이는 IT기술 \n Solution developed by 엠몬스타(https://www.mmonstar.co.kr)\n' + '%c M.MONSTAR!', 'font-weight: bold; font-size: 16px; color: rgba(0, 139, 148, 1); text-shadow: 1px 1px 0 rgba(201, 255, 154, 1) , 2px 2px 1px rgba(19, 169, 132, 1)');