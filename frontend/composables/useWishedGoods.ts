import { useAuthStore } from '$/stores/useAuthStore';
import { useBackend } from '$/composables/useBackend';

export function useWishedGoods() {
	const authStore = useAuthStore();

    /**
     * 찜한상품 페이지네이터 조회
     * @param page
     * @param folderId
     * @param pageSize
     * @returns
     */
	async function getPaginator(folderId?: number, page: number = 1, pageSize: number = 50) {
		if (authStore.member === null) {
			return {
				per_page: pageSize,
				current_page: page,
				data: [],
				total: 0,
			};
		}

		const { paginator } = await useBackend().command<{
            paginator: Paginator<WishedGoods>
        }>('v1/my/wish/goods', {
        	params: {
        		page,
        		page_size: pageSize,
        		folder_id: folderId || '',
        	},
        });

		return paginator;
	}

    /**
     * 찜한상품 리스트 조회
     * @param folderId
     */
	async function getAll(folderId: number) {
		if (authStore.member === null) {
			return [];
		}

		const { wish_goods } = await useBackend().command<{
            wish_goods: WishedGoods[]
        }>(`v1/my/wish/goods/folders/${folderId}`, {
        	params: {
        		folder_id: folderId,
        	},
        });

		return wish_goods;
	}

    /**
     * 찜한 상품 폴더 이동
     * @param goodsIds
     * @param folderId
     */
	async function moveToFolder(goodsIds: number[], folderId: number) {
		if (authStore.member === null) {
			return;
		}

		await useBackend().command('v1/my/wish/goods/move-many', {
			method: 'post',
			data: {
				goods_ids: goodsIds,
				folder_id: folderId,
			},
		});
	}

    /**
     * 찜한 상품 폴더 리스트 조회
     * @returns
     */
	async function getFolders() {
		if (authStore.member === null) {
			return [];
		}

		const { wish_goods_folders } = await useBackend().command<{
            wish_goods_folders: GoodsWishFolder[]
        }>('v1/my/wish/goods/folders');

		return wish_goods_folders;
	}

    /**
     * 찜한 상품 폴더 추가
     * @param name
     */
	async function addFolder(name: string) {
		if (authStore.member === null) {
			return;
		}

		await useBackend().command('v1/my/wish/goods/folders', {
			method: 'post',
			data: { name },
		});
	}

    /**
     * 찜한 상품 폴더명 수정
     * @param id
     * @param name
     */
	async function updateFolder(id: number, name: string) {
		if (authStore.member === null) {
			return;
		}

		await useBackend().command(`v1/my/wish/goods/folders/${id}`, {
			method: 'post',
			data: { name },
		});
	}

    /**
     * 찜한 상품 폴더 순서 변경
     * @param sorts
     */
	async function updateFolderSort(sorts: Pick<GoodsWishFolder, 'id'|'order_seq'>[]) {
		if (authStore.member === null) {
			return;
		}

		await useBackend().command('v1/my/wish/goods/folders/sort', {
			method: 'post',
			data: { sorts },
		});
	}

    /**
     * 찜한 상품 폴더 삭제
     * @param id
     */
	async function removeFolder(id: number) {
		if (authStore.member === null) {
			return;
		}

		await useBackend().command(`v1/my/wish/goods/folders/${id}/destroy`, {
			method: 'post',
		});
	}

	return {
		getPaginator,
		getAll,
		moveToFolder,
		getFolders,
		addFolder,
		updateFolder,
		updateFolderSort,
		removeFolder,
	};
}