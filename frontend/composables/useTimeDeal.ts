import { useBackend } from '$/composables/useBackend';

export function useTimeDeal() {
    /**
     * [타임딜] 리스트 조회
     */
	async function getList() {
		const { type, banners } = await useBackend().command<{
            type: TimeDealBannerType
            banners: TimeDealBanner
        }>('v1/exhibit/time-attacks');

		return {
			type,
			banners,
		};
	}

    /**
     * [타임딜] 정보 조회
     * @param goodsId
     */
	async function getInformation(goodsId: number) {
		await useBackend().command<{
            time_deal_info: TimeDealInformation
        }>(`v1/goods/${goodsId}/timeattack`);
	}

	return {
		getList,
		getInformation,
	};
}