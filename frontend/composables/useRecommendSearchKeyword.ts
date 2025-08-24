import { useBackend } from '$/composables/useBackend';

export function useRecommendSearchKeyword() {
	/** //FUNC **/
	async function get() {
		const { basic_search_words } = await useBackend().command<{ basic_search_words: RecommendKeyword[]}>('v1/exhibit/recommend-searches');

		return basic_search_words;
	}

	return {
		get,
	};
}