import monsDate from '$/utils/date';
import { useBackend } from '$/composables/useBackend';

export const useHotKeyword = () => {
	return {
		async getContext(): Promise<HotKeywordContext> {
			const { indexed_at, hot_search_words } = await useBackend().command<{
                indexed_at: string|null
                hot_search_words: HotKeywordRecord[]
            }>('v1/search-engine/hot-searches');

			return {
				indexedAt: indexed_at ? monsDate(indexed_at).toDate() : monsDate().toDate(),
				hotKeywordRecords: hot_search_words.map(w => ({
					rank: w.rank,
					previous_rank: w.previous_rank,
					keyword: w.keyword,
					change_type: w.change_type,
					change_rank: w.change_rank,
				}))
			};
		},
	};
};