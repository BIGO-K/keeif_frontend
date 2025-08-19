
import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useBackend } from '$/composables/useBackend';
export const useUserAgentStore = defineStore('user-agent', () => {
	const deviceInfo = ref<{
        uuid: string;
        token: string;
        os: 'A' | 'I'
    }| null>(null);

	const hasUserAccessApp = ref<boolean>(false);
	const currentInstalledVersion = ref<number|null>(null);
    /** FUNC */
	function applyDeviceInfo(device: { uuid: string, token: string, os: 'A'|'I'}) {
		deviceInfo.value = device;
	}

	function setAccessApp() {
		hasUserAccessApp.value = true;
	}
	async function isBeforeVersion() {
		const builderVersion = await useBackend().getVersion<{ version: number }>();

		if (currentInstalledVersion.value === null) {
			currentInstalledVersion.value = builderVersion;

			return false;
		}

		if (builderVersion > currentInstalledVersion.value) {
			currentInstalledVersion.value = builderVersion;

			return true;
		}

		return false;
	}


	return {
		deviceInfo,
		applyDeviceInfo,
		hasUserAccessApp,
		setAccessApp,
		currentInstalledVersion,
		isBeforeVersion,
	};
}, {
	persist: {
		storage: sessionStorage,
	},
});