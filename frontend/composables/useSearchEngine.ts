import { useWishedStore } from '$/stores/useWishedStore';
import { useBackend } from '$/composables/useBackend';

export function useSearchEngine() {
	const { check } = useWishedStore();
	async function getAutoComplete(keyword: string): Promise<AutoCompleteKeyword> {
		const { auto_completed } = await useBackend().command<{ auto_completed: AutoCompleteKeyword}>(
			'v1/search-engine/auto-complete', {
				params: {
					keyword: keyword,
				},
			});

		return auto_completed;
	}

	return {
		getAutoComplete,
		fetchList: async (paramsForCommand: GoodsFilterParamForCommand): Promise<SearchedResult> => {
			try {
				const searchResult = await useBackend().command<SearchedResult>(`/v1/search-engine/search`,
            	{
            		params: {
						 ...paramsForCommand,
            		},
            	},
				);

				const goodsIds = searchResult.paginator.data.flatMap(goods => goods.id);
				check(goodsIds);

				return searchResult;
			}
			catch (e) {
				console.log(e);
			}

		},
	};
}