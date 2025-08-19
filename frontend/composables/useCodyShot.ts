import { useBackend } from '$/composables/useBackend';

export function useCodyShot() {
    /**
     * [코디샷] 카테고리 조회
     * @returns
     */
	async function getCategories() {
		const { cody_shot_categories } = await useBackend().command<{
            cody_shot_categories: {
                id: number
                name: string
            }[]
        }>('v1/exhibit/codishots/categories');

		return cody_shot_categories;
	}

    /**
     * [코디샷] 신규등록 리스트 조회(최대 10개)
     */
	async function getRecents() {
		const { recent_cody_shots } = await useBackend().command<{
            recent_cody_shots: CodyShot[]
        }>('v1/exhibit/codishots/recents');

		return recent_cody_shots;
	}

    /**
     * [코디샷] 페이지네이터 조회
     * @param categoryId
     * @param page
     * @param pageSize
     * @returns
     */
	async function getPaginator(
		categoryId: Nullable<number>,
		page: number = 1,
		pageSize: number = 20,
	) {
		const { paginator } = await useBackend().command<{
            paginator: Paginator<CodyShot>
        }>('v1/exhibit/codishots', {
        	params: {
        		category_id: categoryId || '',
        		page: page,
        		page_size: pageSize,
        	},
        });

		return paginator;
	}

    /**
     * [코디샷] 상세 조회
     * @param id
     * @returns
     */
	async function getDetail(id: number) {
		const { cody_shot } = await useBackend().command<{
            cody_shot: CodyShotDetail
        }>(`v1/exhibit/codishots/${id}`);

		return cody_shot;
	}

	return {
		getCategories,
		getRecents,
		getPaginator,
		getDetail,
	};
}