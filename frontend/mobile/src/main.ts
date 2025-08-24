import { createApp } from 'vue';
import { useAuthStore } from '$/stores/useAuthStore';
import { useSetupConfigStore } from '$/stores/useSetupConfigStore';
import { useUserAgentStore } from '$/stores/useUserAgentStore';
import mons from '$/utils/mons';
import { useAirbridge } from '$/composables/useAirbridge';
import { useCart } from '$/composables/useCart';
import { useNativeApp } from '$/composables/useNativeApp';
import { useUserAgent } from '$/composables/useUserAgent';
import pinia from '$/stores';
import Lazyload from '@/component/Lazyload.vue';
import MMLink from '@/component/MMLink.vue';
import FormText from '@/component/form/FormText.vue';
import App from '@/App.vue';
import router from '@/router';

const app = createApp(App);

app
	.use(router)
	.use(pinia)
	.component('MmLink', MMLink)
	.component('lazyload', Lazyload)
	.component('FormText', FormText);

appCustomCratedHook();

declare global {
	interface Window {
		Kakao: any,
		Android: { [key: string]: any }
	}
}

// array.at 대응용 IOS <= 15.3
if (![].at) {
	Array.prototype.at = function(findIndex) {
		if (findIndex === -1) {
			return this.slice(findIndex)[0];
		}

		return this.slice(findIndex, findIndex + 1)[0];
	};
}


async function appCustomCratedHook() {
	const authStore = useAuthStore();
	const { getCount } = useCart();
	const { isAppUser, isMobileUser } = useUserAgent();
	useAirbridge().init();
	const userAgentStore = useUserAgentStore();
	try {
		await Promise.all([
			useSetupConfigStore().init(),
			authStore.generateUserUuid(),
		]);
		if (isAppUser) {
			const { storeFirebaseMessagingToken } = useNativeApp();
			window['storeFirebaseMessagingToken'] = storeFirebaseMessagingToken; // 네이티브 앱 함수 호출
			window.bom = mons().bom;
		}
		getCount();
	}
	catch (e) {
		console.error(e);
	}
	finally {
		document.documentElement.classList.add(`T=${isMobileUser ? 'mobile' : 'pc'}`);
		app.mount('#app');
		const isBeforeVersion = await userAgentStore.isBeforeVersion();
		if (isBeforeVersion) {
			location.reload();
		}
	}
}

console.log(' 기업가치를 높이는 IT기술 \n Solution developed by 엠몬스타(https://www.mmonstar.co.kr)\n' + '%c M.MONSTAR!', 'font-weight: bold; font-size: 16px; color: rgba(0, 139, 148, 1); text-shadow: 1px 1px 0 rgba(201, 255, 154, 1) , 2px 2px 1px rgba(19, 169, 132, 1)');
