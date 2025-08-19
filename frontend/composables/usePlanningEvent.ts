import { useBackend } from '$/composables/useBackend';

export function usePlanningEvent() {
    /**
     * [기획전] 상세 조회
     * @param id
     */
	async function getDetail(id: number) {
		const { planning } = await useBackend().command<PlanningEvent>(`v1/exhibit/planning-events/${id}`);
		planning.groups.map(group => group.goods_list = []);

		return 	planning;
	}

    /**
     * [기획전] 상품그룹 상품목록 조회
     * @param planningId
     * @param goodsId
     * @returns
     */
	async function getGoodsGroup(planningId: number, groupId: number) {
		const { planning_group_goods } = await useBackend().command<{
            planning_group_goods: Goods[]
        }>(`v1/exhibit/planning-events/${planningId}/group-goods/${groupId}`);

		return planning_group_goods;
	}

    /**
     * [기획전] 댓글 페이지네이터 조회
     * @param planningId
     * @param page
     * @param pageSize
     * @returns
     */
	async function getCommentPaginator(planningId: number, page: number = 1, pageSize: number = 15) {
		const { paginator } = await useBackend().command<{
            paginator: Paginator<PlanningComment>
        }>(`v1/exhibit/planning-events/${planningId}/comments`, {
        	params: {
        		page: page,
        		page_size: pageSize,
        	},
        });

		return paginator;
	}

    /**
     * [기획전] 댓글 작성
     * @param planningId
     * @param commentForm
     */
	async function addComment(planningId: number, commentForm: PlanningCommentForm) {
		await useBackend().command(`v1/exhibit/planning-events/${planningId}/comments`, {
			method: 'post',
			data: commentForm,
		});
	}

    /**
     * [기획전] 댓글 수정
     * @param planningId
     * @param commentId
     * @param commentForm
     */
	async function updateComment(planningId: number, commentId: number, commentForm: PlanningCommentForm) {
		await useBackend().command(`v1/exhibit/planning-events/${planningId}/comments/${commentId}`, {
			method: 'post',
			data: commentForm,
		});
	}

    /**
     * [기획전] 댓글 삭제
     * @param planningId
     * @param commentId
     */
	async function removeComment(planningId: number, commentId: number) {
		await useBackend().command(`v1/exhibit/planning-events/${planningId}/comments/${commentId}/destroy`, {
			method: 'post',
		});
	}

	/**
     * 최근 본 기획전 추가
     * 최대 30개 기획전 노출되고 30개 초과 시 오래 된 기획전부터 삭제 됨
     * 최근 본 기획전에 노출된 지 2주(14일)가 지났을 시, 기획전 자동 삭제
     * @param  {number} planningId
     * @returns Promise
	*/
	async function addRecentView(planningId: number) {
		await useBackend().command(`v1/shopping/recent-view-planning-events`, {
			method: 'post',
			data: {
				planning_id: planningId,
			},
		});
	}

	return {
		getDetail,
		getGoodsGroup,
		getCommentPaginator,
		addComment,
		updateComment,
		removeComment,
		addRecentView,
	};
}