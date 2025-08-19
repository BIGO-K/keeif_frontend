import { useBackend } from '$/composables/useBackend';

export function useFaq() {

	const defaultPageSize = 10;

    /**
     * FAQ 분류 조회
     * @returns
     */
	async function getTypes() {
		const { faq_types } = await useBackend().command<{
            faq_types: FaqType[]
        }>('v1/cs/faq/types');

		return faq_types;
	}

    /**
     * FAQ 리스트 조회
     * @returns
     */
	async function getAll(typeId: number|null, searchWord: string) {
		const { faqs } = await useBackend().command<{
            faqs: Faq[]
		}>('v1/cs/faq/all', {
			params: {
				type_id: typeId || '',
				search_word: searchWord
			}
		});

		return faqs;
	}

    /**
     * FAQ 페이지네이터 조회
     * @param typeId
     * @param searchWord
     * @param page
     * @param pageSize
     * @returns
     */
	async function getPaginator(
		typeId: number,
		searchWord: string,
		page: number,
		pageSize: number = defaultPageSize
	) {
		const { paginator } = await useBackend().command<{
            paginator: Paginator<Faq>
        }>('v1/cs/faq', {
        	params: {
        		type_id: typeId,
        		search_word: searchWord,
        		page: page,
        		page_size: pageSize,
        	}
        });

		return paginator;
	}

	return {
		getTypes,
		getAll,
		getPaginator,
	};
}