import { useBackend } from '$/composables/useBackend';

export function useWingBanner() {
    /**
     * 윙배너 리스트 조회
     * @returns
     */
	async function getList() {
		const { wing_banners } = await useBackend().command<{
            wing_banners: WingBanner[]
        }>('v1/exhibit/right-wing-banners');

		return wing_banners;
	}

	return {
		getList,
	};
}