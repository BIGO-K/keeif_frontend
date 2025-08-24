import { ref, computed } from 'vue';
import { usePopupStore } from '$/stores/usePopupStore';
import { useBackend } from '$/composables/useBackend';

export function useMainBanner() {
	const storeKey = 'MAIN_POPUP';

	const popup = usePopupStore();

	const mainLayerBanners = ref<MainBanner[]>([]);
	const isHideToday = computed(() => popup.isHide(storeKey));

    /** 메인 배너항목 조회 */
	async function all(): Promise<void> {
		const { main_popups } = await useBackend().command<{
            main_popups: MainBanner[]
        }>('v1/exhibit/popups');

		mainLayerBanners.value = main_popups;
	}

	return {
		mainLayerBanners,
		isHideToday,
		all,
		hide: () => popup.hide(storeKey),
	};
}