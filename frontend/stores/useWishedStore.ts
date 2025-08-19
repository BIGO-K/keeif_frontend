import { computed, ref, unref } from 'vue';
import { defineStore } from 'pinia';
import { useAuthStore } from '$/stores/useAuthStore';
import { unique } from '$/utils/unique';
import { useBackend } from '$/composables/useBackend';

type WishedGoodsForm = {
    goods_id: number;
    folder_id: number;
}

export const useWishedStore = defineStore('wished-items', () => {
	const authStore = useAuthStore();
	const isMember = computed(() => authStore.member);
    /** 찜한 상품 */
	const wishedGoodsIds = ref<number[]>([]);

    /**
     * 찜 여부 조회하여 store에 저장
     * @param goodsIds
     */
	async function check(goodsIds: number[]) {
		if (!isMember.value || goodsIds.length < 1) {
			return;
		}

		const { liked_relation_goods } = await useBackend().command<{
            liked_relation_goods: {
                goods_id: number
                liked: boolean
            }[]
        }>('v1/my/wish/goods/check-many', {
        	method: 'post',
        	data: {
        		goods_ids: goodsIds,
        	},
        });

		const newLikedGoodsIds = liked_relation_goods
			.filter(relation => relation.liked)
			.map(relation => relation.goods_id);

		wishedGoodsIds.value = unique(wishedGoodsIds.value.concat(newLikedGoodsIds));
	}

    /**
     * 찜한 상품 추가
     * @param goodsId
     */
	async function add(goodsId: number) {
		wishedGoodsIds.value = unique(wishedGoodsIds.value.concat(goodsId));
	}

    /**
     * 찜 폴더에 상품 추가
     * @param {WishedGoodsForm} form
     * @returns void
    */
	async function addToFolder(form: WishedGoodsForm) {
		if (authStore.member === null) {
			return;
		}

		await useBackend().command<void, WishedGoodsForm>('v1/my/wish/goods/wish', {
			method: 'post',
			data: {
				goods_id: form.goods_id,
				folder_id: form.folder_id,
			},
		});
		add(form.goods_id);
	}

    /**
     * 찜한 상품 제거
     * @param goodsIds
     * @returns
     */
	async function remove(goodsIds: number[]) {
		if (!isMember.value) {
			return;
		}

		await useBackend().command('v1/my/wish/goods/unwish-many', {
			method: 'post',
			data: {
				goods_ids: goodsIds,
			},
		});

		wishedGoodsIds.value = wishedGoodsIds.value.filter(id => !goodsIds.includes(id));
	}

	/** 찜 여부 확인 */
	function isWishedGoods(goodsToCheck: WishManageableGoods['id']): boolean {
		if (!isMember.value) {
			return false;
		}

		return wishedGoodsIds.value.includes(goodsToCheck);
	}

	return {
		wishedGoodsIds,
		check,
		add,
		addToFolder,
		remove,
		isWishedGoods,
	};

}, {
	persist: false,
});