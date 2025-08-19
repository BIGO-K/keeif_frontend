import { ref } from 'vue';
import { useWishedStore } from '$/stores/useWishedStore';
import { useBackend } from '$/composables/useBackend';

export async function useBrandShop(brandId: number) {
	/**
	 * 브랜드샵 정보 조회
	 * @param { number } brandId :브랜드 ID
	*/
	const information = ref<BrandShopInformation>();

	async function getShopInfo() {
		information.value = await useBackend().command<BrandShopInformation>(`v1/brand/${brandId}`);
	}

	await getShopInfo();

	const { check } = useWishedStore();

	return {
		getShopInfo,
		information,
		fetchFilterable: async () => {
			const { filters: filterableResource } = await useBackend().command<{
                filters: BrandShopGoodsFilterable
            }>(`v1/brand/${brandId}/filters-of-goods`);

			return filterableResource;
		},

		fetchList: async (paramsForCommand: GoodsFilterParamForCommand) => {
			const { paginator: { data } } = await useBackend().command<{
                paginator: SimplePaginator<Goods>
            }>(`v1/brand/${brandId}/goods`, {
            	params: {
            			...paramsForCommand,
            		},
            	},
            );

			const goodsIds = data.flatMap(goods => goods.id);
			check(goodsIds);

			return data;
		},

		fetchCount: async (paramsForCommand: GoodsFilterParamForCommand) => {
			const { total_count } = await useBackend().command<{
                total_count: number
            }>(
            	`v1/brand/${brandId}/total-count-of-goods`,
            	{
            		params: {
            			...paramsForCommand,
            		},
            	},
            );

			return total_count;
		},
	};
}