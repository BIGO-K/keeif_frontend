/*
import { defineStore } from 'pinia';

export const useConfigStore = defineStore('config', () => {
	const headerType = 'a';
	const footerType = 'a';
	// const rankingType = 'a';

	return {
		HeaderComponent: () => import(`/src/component/app/${headerType}/AppHeader.vue`),
		FooterComponent: () => import(`/src/component/app/${footerType}/AppFooter.vue`),
	};
});
*/

// confit type sample 테스트 용도로 제작

const headerType = 'a';
const footerType = 'a';

export const HeaderComponent = () => import(`/src/component/app/${headerType}/AppHeader.vue`);
export const FooterComponent = () => import(`/src/component/app/${footerType}/AppFooter.vue`);