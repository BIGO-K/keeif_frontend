import { useBackend } from '$/composables/useBackend';

export function useRaffle() {
    /**
     * 래플 리스트 조회
     * @returns
     */
	async function getList() {
		const { raffle_list } = await useBackend().command<{
            raffle_list: Raffle[]
        }>('v1/exhibit/raffles');

		return raffle_list;
	}

    /**
     * 종료 래플 페이지네이터 조회
     * 1년 이내 종료된 래플을 최근 종료일순으로 정렬하여 조회
     * @param page
     * @param pageSize
     * @returns
     */
	async function getEndedList(page: number = 1, pageSize: number = 12) {
		const { paginator } = await useBackend().command<{
            paginator: Paginator<Raffle>
        }>('v1/exhibit/raffles/ended-list', {
        	params: {
        		page,
        		page_size: pageSize,
        	},
        });

		return paginator;
	}

    /**
     * 래플 당첨자 목록 조회
     * @param raffleId
     * @returns
     */
	async function getWinners(raffleId: number) {
		const { winner_list } = await useBackend().command<{
            winner_list: Winner[]
        }>(`v1/exhibit/raffles/${raffleId}/winner-list`);

		return winner_list;
	}

    /**
     * 래플 응모
     * @param raffleId
     */
	async function entry(raffleId: number) {
		await useBackend().command(`v1/exhibit/raffles/${raffleId}/apply`);
	}

    /**
     * 래플 응모에 필요한 유저정보 조회
     * 래플응모 불가능한 경우 에러 반환
     * @param raffleId
     * @returns
     */
	async function prepareEntry(raffleId: number) {
		const { entry_info } = await useBackend().command<{
            entry_info: EntryInfo
        }>(`v1/exhibit/raffles/${raffleId}/entry-info`);

		return entry_info;
	}

    /**
     * 래플 응모결과 조회
     * @param raffleId
     * @returns
     */
	async function getWinningResult(raffleId: number) {
		const { is_entry, is_winner } = await useBackend().command<{
            is_entry: boolean
            is_winner: boolean
        }>(`v1/exhibit/raffles/${raffleId}/winner-result`);

		return {
			is_entry,
			is_winner,
		};
	}

    /**
     * 래플 상세 조회 (상품상세)
     * @param id
     * @returns
     */
	async function getDetail(id: number) {
		const raffle = await useBackend().command<Omit<RaffleDetail, 'id'>>(`v1/exhibit/raffles/${id}`);

		return {
			id,
			...raffle,
		};
	}

    /**
     * 래플 상태: 구매가능여부, 당첨여부, 최대구매가능갯수 조회
     * @param raffleId
     * @returns
     */
	async function checkPurchaseable(raffleId: number) {
		const {
			is_winner,
			is_purchasable,
			max_orderable_count,
		} = await useBackend().command<{
            is_winner: boolean
            is_purchasable: boolean
            max_orderable_count: number
        }>(`v1/exhibit/raffles/${raffleId}/applied-raffle-state`);

		return {
			is_winner,
			is_purchasable,
			max_orderable_count,
		};
	}

    /**
     * 래플 응모 내역 리스트 조회
     * @param isEnd
     * @returns
     */
	async function getMyEntryList(isEnd: boolean) {
		const { raffle_list } = await useBackend().command<{
            raffle_list: MyRaffle[]
        }>('v1/my/raffles', {
        	params: {
        		is_end: Number(isEnd),
        	},
        });

		return raffle_list;
	}

	return {
		getList,
		getEndedList,
		getWinners,
		entry,
		prepareEntry,
		getWinningResult,
		getDetail,
		checkPurchaseable,
		getMyEntryList,
	};
}