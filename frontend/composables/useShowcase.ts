import { useBackend } from '$/composables/useBackend';

export function useShowcase() {
    /**
     * [쇼케이스] 카테고리 리스트
     * @returns
     */
	async function getCategories() {
		const { sort_list } = await useBackend().command<{
            sort_list: ShowcaseCategory[]
        }>('v1/exhibit/showcases/categories');

		return sort_list;
	}

    /**
     * [쇼케이스] 페이지네이터 조회
     * @param categoryId
     * @param page
     * @param pageSize
     */
	async function getPaginator(categoryId: number, page: number = 1, pageSize: number = 12) {
		const { paginator } = await useBackend().command<{
            paginator: Paginator<Showcase>
        }>('v1/exhibit/showcases', {
        	params: {
        		sort_id: categoryId || '',
        		page,
        		page_size: pageSize
        	}
        });

		return paginator;
	}

    /**
     * [쇼케이스] 상세
     * @param id
     * @returns
     */
	async function getDetail(id: number) {
		const { showcase_information } = await useBackend().command<{
            showcase_information: ShowcaseDetail
        }>(`v1/exhibit/showcases/${id}`);

		return showcase_information;
	}

    /**
     * [쇼케이스] 다른 쇼케이스 리스트 조회
     * @desc 각 쇼케이스 카테고리별 가장 최근등록된 쇼케이스 1개씩 조회
     * @param showcaseId
     * @returns
     */
	async function getAnothers(showcaseId: number) {
		const { list_by_sort } = await useBackend().command<{
            list_by_sort: OtherShowcase[]
        }>(`v1/exhibit/showcases/${showcaseId}/others`);

		return list_by_sort;
	}

	return {
		getCategories,
		getPaginator,
		getDetail,
		getAnothers,
	};
}