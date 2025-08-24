import { computed } from 'vue';
import { useAffiliateStore } from '$/stores/useAffiliateStore';
import { useUserAgentStore } from '$/stores/useUserAgentStore';
import isMobile from '$/utils/isMobile';

export function useUserAgent() {
	const isAppUser = isMobile('app');
	const isAndroidApp = isMobile('app_android');
	const isIosApp = isMobile('app_ios');
	const isMobileUser = isMobile('android') || isMobile('ios');
	const isAndroidUser = isMobile('android');
	const isIosUser = isMobile('ios');

	const agentStore = useUserAgentStore();
	const isAppFirstUser = computed(() => {
		return isAppUser && isMobile('app_first') ? !agentStore.hasUserAccessApp : false;
	});

	const currentAppVersion = computed<string>(() => {
		const match = navigator.userAgent.match(/app_version_name:([0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3})/i);

		return match !== null && match[1] ? `V${match[1]}` : 'V1.0.0';
	});


	const affiliate = useAffiliateStore();
	const affiliateCode = computed(() => affiliate.currentCode);
	const isInappBrowser = computed<boolean>(() => new RegExp('FBAN|FBAV|Instagram', 'i').test(navigator.userAgent) || new RegExp('facebook|Instagram', 'i').test(affiliateCode.value));

	return {
		isAppFirstUser,
		isAppUser,
		isAndroidApp,
		isIosApp,
		isMobileUser,
		isAndroidUser,
		isIosUser,
		currentAppVersion,
		isInappBrowser,
	};
}