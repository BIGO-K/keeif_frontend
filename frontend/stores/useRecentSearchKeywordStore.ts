import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import uuid from '$/utils/uuid';
type RecentSearchKeyword = {
	uuid: string
    keyword: string,
    recentViewedAt: Date|string
}

export const useRecentSearchKeywordStore = defineStore('recentSearchKeyword', () => {
	const records = ref<RecentSearchKeyword[]>([]);
	const recordsByRecent = computed<RecentSearchKeyword[]>(() => {
		const sorted = [...records.value];

		return sorted.sort((a, b) => new Date(b.recentViewedAt).getTime() - new Date(a.recentViewedAt).getTime());
	});

	/**
     * 최근 검색어 추가
	*/
	async function add(keyword: string) {
        // 추가 처리
		records.value = records.value
			.filter(record => record.keyword !== keyword)
			.concat([
				{ keyword, recentViewedAt: new Date(), uuid: uuid() },
			]);
	}

	async function remove(keyword: string) {
		records.value = records.value.filter(record => record.keyword !== keyword);
	}


	return {
		records,
		remove,
		add,
		recordsByRecent: recordsByRecent,
	};

}, {
	persist: {
		storage: sessionStorage,
	},
});