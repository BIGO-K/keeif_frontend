import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { useAuthStore } from '$/stores/useAuthStore';
import monsDate from '$/utils/date';
import { useBackend } from '$/composables/useBackend';

type RecentViewGoods = Pick<Goods, 'id' | 'name' | 'thumbnail_url' | 'base_discounted_price' | 'sale_rate'> & Required<Pick<Goods, 'is_soldout' | 'brand_name'>>
type RecentViewGoodsRecord = {
    goods: RecentViewGoods
    recentViewedAt: Date|string
}

export const useRecentViewGoodsStore = defineStore('recentViewGoods', () => {
	const authStore = useAuthStore();
	const records = ref<RecentViewGoodsRecord[]>([]);

	const recordsByRecent = computed(() => {
		const sorted = [...records.value];
		sorted.sort((a, b) => new Date(b.recentViewedAt).getTime() - new Date(a.recentViewedAt).getTime());

		return sorted;
	});

    /**
     * 최근본 상품 로드
    */
	async function load() {
		if (!authStore.member) {
			return [];
		}

		const { recent_view_goods } = await useBackend().command<{
            recent_view_goods: RecentViewGoods[]
        }>('v1/shopping/recent-view-goods', {
        	params: {
        		limit: 50,
        		from_date: monsDate().subtract(2, 'weeks').format('YYYY-MM-DD'),
        		to_date: monsDate().format('YYYY-MM-DD'),
        	},
        });

		records.value = records.value
			.filter(record => !recent_view_goods.some(recentViewGoods => recentViewGoods.id !== record.goods.id))
			.concat(
				recent_view_goods.map(recentViewGoods => ({
					goods: recentViewGoods,
					recentViewedAt: new Date(),
				})),
			);

		return recent_view_goods;
	}

    /**
     * 최근 본 상품 추가
     * @param {RecentViewGoods} goods
     */
	async function add(goods: RecentViewGoods) {
		if (authStore.member) {
              /** 회원은 db처리 */
			await useBackend().command('v1/shopping/recent-view-goods', {
				method: 'post',
				data: {
					goods_ids: [goods.id],
				},
			});
		}
        // 추가 처리
		records.value = records.value
			.filter(record => record.goods.id !== goods.id)
			.concat([
				{ goods, recentViewedAt: new Date() },
			]);
	}

	return {
		records,
		recordsByRecent,
		load,
		add,
	};

}, {
	persist: {
		storage: localStorage,
	},
});