import { useAuthStore } from '$/stores/useAuthStore';
import { useBackend } from '$/composables/useBackend';

export function useWishedBrand() {
	const authStore = useAuthStore();

    /**
     * 찜한 브랜드 페이지네이터 조회
     * @param page
     * @param pageSize
     * @returns
     */
	async function getPaginator(page: number = 1, pageSize: number = 6) {
		if (authStore.member === null) {
			return {
				per_page: pageSize,
				current_page: page,
				data: [],
				total: 0,
			};
		}

		const { paginator } = await useBackend().command<{
			paginator: Paginator<WishedBrand>
		}>('v1/my/wish/brands', {
			params: {
				page,
				page_size: pageSize,
			},
		});

		return paginator;
	}

    /**
     * 찜한 브랜드 전체 조회
     * @returns
     */
	async function all() {
		if (authStore.member === null) {
			return [];
		}
		const { wish_brands } = await useBackend().command<{
            wish_brands: WishedBrand[]
        }>('v1/my/wish/brands/all');

		return wish_brands;
	}

    /**
     * 찜한 브랜드 추가
     * @param id
     */
	async function add(id: number) {
		if (authStore.member === null) {
			return;
		}

		await useBackend().command('v1/my/wish/brands/wish', {
			method: 'post',
			data: {
				brand_id: id,
			},
		});
	}

    /**
     * 찜한 브랜드 제거
     * @param id
     */
	async function remove(id: number) {
		if (authStore.member === null) {
			return;
		}
		await useBackend().command('v1/my/wish/brands/unwish', {
			method: 'post',
			data: {
				brand_id: id,
			},
		});
	}

    /**
     * 찜 여부 조회
     * @param ids
     * @returns
     */
	async function check(ids: number[]) {
		if (authStore.member === null) {
			return [];
		}

		const { liked_relation_brands } = await useBackend().command<{
            liked_relation_brands: {
                brand_id: number
                liked: boolean
            }[]
		}>('v1/my/wish/brands/check-many', {
			method: 'post',
			data: {
				brand_ids: ids,
			},
		});

		return liked_relation_brands;
	}

	return {
		getPaginator,
		all,
		add,
		remove,
		check,
	};
}