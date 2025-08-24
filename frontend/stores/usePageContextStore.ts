import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';
import ApplicationError from '$/errors/ApplicationError';


export const usePageContextStore = defineStore('page-context', () => {
	const applicationError = ref<ApplicationError|null>(null);
	const router = useRouter();

	function clearError() {
		applicationError.value = null;
	}

	function clearErrorWithHistoryBack() {
		const beforePath = window.history.state.back || '/';
		router.replace(beforePath).then(() => {
			applicationError.value = null;
		});

		// router.go(-1);
		// setTimeout(() => {
		// 	applicationError.value = null;
		// }, 300);
	}

	return {
		applicationError,
		clearError,
		clearErrorWithHistoryBack,
	};
}, {
	persist: false,
});