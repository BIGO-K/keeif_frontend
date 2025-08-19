import { useBackend } from '$/composables/useBackend';

type ProcessTab = {
	value: ProcessLabel
	label: string
}

export function useSpecialEvent() {
	const processTabs: ProcessTab[] = [
		{ value: 'all', label: '전체' },
		{ value: 'progress', label: '진행중' },
		{ value: 'end', label: '종료' },
	];
    /**
     * [이벤트] paginator 조회
     * @param periodType
     * @param page
     * @param pageSize
     * @returns
     */
	async function getPaginator(
		periodType: ProcessLabel = 'all',
		page: number = 1,
		pageSize: number = 15,
	) {
		const { paginator } = await useBackend().command<{
			paginator: Paginator<SpecialEvent>
		}>('v1/exhibit/special-events', {
			params: {
				period_type: periodType,
				page,
				page_size: pageSize,
			},
		});

		return paginator;
	}

    /**
     * [이벤트] 상세조회
     * @param id
     * @returns
     */
	async function getDetail(id: number) {
		const specialEvent = await useBackend().command<SpecialEventDetail>(`v1/exhibit/special-events/${id}`);

		specialEvent.goods_groups.map(group => group.goods_list = []);

		return specialEvent;
	}

    /**
     * [이벤트] 상품그룹 상품목록 조회
     * @param eventId
     * @param groupId
     * @returns
     */
	async function getGoodsGroup(eventId: number, groupId: number) {
		const { group_goods } = await useBackend().command<{
            group_goods: Goods[]
        }>(`v1/exhibit/special-events/${eventId}/group-goods/${groupId}`);

		return group_goods;
	}

    /**
     * [이벤트] 댓글 페이지네이터 조회
     * @param eventId
     * @param page
     * @param pageSize
     * @returns
     */
	async function getCommentPaginator(
		eventId: number,
		page: number = 1,
		pageSize: number = 15,
	) {
		const { paginator } = await useBackend().command<{
            paginator: Paginator<SpecialEventComment>
        }>(`v1/exhibit/special-events/${eventId}/comments`, {
        	params: {
        		page,
        		page_size: pageSize,
        	},
        });

		return paginator;
	}

    /**
     * [이벤트] 댓글 작성
     * @param eventId
     * @param commentForm
     */
	async function addComment(eventId: number, commentForm: SpecialEventCommentForm) {
		await useBackend().command(`v1/exhibit/special-events/${eventId}/comments`, {
			method: 'post',
			data: commentForm,
		});
	}

    /**
     * [이벤트] 댓글 수정
     * @param eventId
     * @param commentId
     */
	async function updateComment(eventId: number, commentId: number, commentForm: PlanningCommentForm) {
		await useBackend().command(`v1/exhibit/special-events/${eventId}/comments/${commentId}`, {
			method: 'post',
			data: commentForm,
		});
	}

    /**
     * [이벤트] 댓글 삭제
     * @param eventId
     * @param commentId
     */
	async function removeComment(planningId: number, commentId: number) {
		await useBackend().command(`v1/exhibit/special-events/${planningId}/comments/${commentId}/destroy`, {
			method: 'post',
		});
	}

	return {
		processTabs,
		getPaginator,
		getDetail,
		getGoodsGroup,
		getCommentPaginator,
		addComment,
		updateComment,
		removeComment,
	};
}