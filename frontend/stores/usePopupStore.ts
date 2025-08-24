
import { ref } from 'vue';
import { defineStore } from 'pinia';
import monsDate from '$/utils/date';

type PopupContext = {
	key: string
	hide_at: string
}

export const usePopupStore = defineStore('popup', () => {
	const popupContexts = ref<PopupContext[]>([]);

	/**
	 * 팝업 숨김처리 (오늘하루 그만보기)
	 * @param key
	 */
	function hide(key: string) {
		popupContexts.value = popupContexts.value
			.filter(context => context.key !== key)
			.concat([{ key, hide_at: monsDate().format('YYYY-MM-DD 23:59:59') }]);
	}

	/**
	 * 팝업 숨김여부 확인
	 * @param key
	 * @returns
	 */
	function isHide(key: string) {
		const currentPopup = popupContexts.value.find(context => context.key == key);

		if (!currentPopup) {
			return false;
		}
		const isAfterDay = monsDate().isAfter(currentPopup.hide_at, 'date');
		if (isAfterDay) {
			popupContexts.value = popupContexts.value.filter(context => context.key !== key);

			return false;
		}

		return true;
	}

	return {
		popupContexts,
		hide,
		isHide,
	};
}, {
	persist: {
		storage: localStorage,
	},
});