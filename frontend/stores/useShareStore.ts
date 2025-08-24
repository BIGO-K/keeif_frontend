import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';

export const useShareStore = defineStore('share', () => {
	const isShareOpen = ref(false);
	const clickTarget = ref<HTMLElement>();
	const shared = reactive({
		title: '',
		content: '',
		imageUrl: '',
		url: '',
	});

	return {
		shared,
		isShareOpen,
		clickTarget,
		open: (
			_e: MouseEvent,
			_title: string,
			_content: string,
			_imageUrl?: string,
			_url?: string,
		) => {
			isShareOpen.value = true;
			clickTarget.value = _e.currentTarget as HTMLElement;

			shared.title = _title;
			shared.content = _content;
			shared.imageUrl = _imageUrl;
			shared.url = _url;
		},
	};
});