import monsDate from '$/utils/date';
import { useBackend } from '$/composables/useBackend';

export function useRanking() {
    /**
     * 랭킹 산정기간 문자열
     * @param rankRange
     * @param targetDate
     * @returns
     */
	function getRankPeriod(rankRange: RankRange, targetDate: string) {
		if (rankRange === 'W') {
			return monsDate(targetDate).subtract(7, 'd').format('YYYY.MM.DD. 00:00')
                + '~'
                + monsDate(targetDate).format('YYYY.MM.DD. 23:59');
		}
		else if (rankRange === 'M') {
			return monsDate(targetDate).subtract(1, 'M').format('YYYY.MM.DD. 00:00')
                + '~'
                + monsDate(targetDate).format('YYYY.MM.DD. 23:59');
		}
		else {
			return monsDate(targetDate).format('YYYY.MM.DD. 00:00~23:59');
		}
	}

    /**
     * 랭킹 조회 (아이템, 뷰, 찜)
     * @param rankingType
     * @param rankRange
     * @param categoryCode
     * @param listLimit
     * @returns
     */
	async function getRankingItem(
		rankingType: ItemRankingType,
		rankRange: RankRange,
		categoryCode?: string,
		listLimit: number = 200,
	) {
		return await useBackend().command<ItemRanking>(`v1/ranking/goods-${rankingType}`, {
			params: {
				rank_range: rankRange,
				category_code: categoryCode || '',
				list_limit: listLimit,
			},
		});
	}

    /**
     * BRAND 랭킹 조회
     * @param rankRange
     * @param listLimit
     * @returns
     */
	async function getRankingBrand(rankRange: RankRange, listLimit: number = 100) {
		return await useBackend().command<ItemRanking>('v1/ranking/brand', {
			params: {
				rank_range: rankRange,
				list_limit: listLimit,
			},
		});
	}

	return {
		getRankingItem,
		getRankPeriod,
		getRankingBrand,
	};
}