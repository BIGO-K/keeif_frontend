import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useShareStore = defineStore('share', () => {
	const isShareOpen = ref(false);
	const clickTarget = ref<HTMLElement>();

	return {
		isShareOpen,
		clickTarget,
		open: _e => {
			isShareOpen.value = true;
			clickTarget.value = _e.currentTarget as HTMLElement;
		}
	};
});