import { useBackend } from '$/composables/useBackend';

// 문의 관련 컴포저블
export function useInquiry() {
	const defaultPageSize = 20;

    /**
     * 1:1 문의 리스트 조회
     * @param page
     * @param pageSize
     * @returns
    */
	async function getQnaPaginator(page: number = 1, pageSize: number = defaultPageSize) {
		const { paginator } = await useBackend().command<{
            paginator: Paginator<Qna>
		}>('v1/my/qna', {
			params: {
				page,
				page_size: pageSize,
			},
		});

		return paginator;
	}

    /**
     * 1:1 문의 유형 조회
     * @returns
    */
	async function getQnaTypes() {
		const { qna_types } = await useBackend().command<{
            qna_types: QnaType[]
        }>('v1/cs/qna/categories');

		return qna_types;
	}

    /**
     * 1:1 문의 가능 주문 조회
     * @returns
    */
	async function getQnaOrders() {
		const { orders } = await useBackend().command<{
            orders: QnaOrder[]
        }>('v1/cs/qna/orders');

		return orders;
	}

    /**
     * 1:1 문의 등록
     * @param form
    */
	async function storeQna(form: QnaStoreForm) {
		await useBackend().command('v1/cs/qna', {
			method: 'post',
			data: form,
		});
	}

    /**
     * 1:1 문의 상세 조회
     * @param id
     * @returns
    */
	async function getQnaDetail(id: number) {
		const { qna } = await useBackend().command<{
            qna: QnaDetail
        }>(`v1/cs/qna/${id}/edit`);

		return qna;
	}

    /**
     * 1:1 문의 수정
     * @param id
     * @param form
    */
	async function updateQna(id: number, form: QnaUpdateForm) {
		await useBackend().command(`v1/cs/qna/${id}/edit`, {
			method: 'post',
			data: form,
		});
	}

    /**
     * 1:1 문의 삭제
     * @param id
    */
	async function destroyQna(id: number) {
		await useBackend().command(`v1/cs/qna/${id}/destroy`, {
			method: 'post',
		});
	}


    /**
     * 판매자문의 리스트 조회
     * @param page
     * @param pageSize
     * @returns
    */
	async function getSellerQnaPaginator(page: number, pageSize: number = defaultPageSize) {
		const { paginator } = await useBackend().command<{
            paginator: Paginator<SellerQna>
        }>('v1/my/seller-qna', {
        	params: {
        		page: page,
        		page_size: pageSize,
        	},
        });

		return paginator;
	}

    /**
     * 판매자문의 유형 조회
     * @param onlyGoodsQnaType 상품문의유형만 조회 여부
    */
	async function getSellerQnaTypes(onlyGoodsQnaType: boolean = false) {
		const { seller_qna_types } = await useBackend().command<{
            seller_qna_types: SellerQnaType[]
        }>('v1/cs/seller-qna/categories', {
        	params: {
        		is_goods_qna: onlyGoodsQnaType,
        	},
        });

		return seller_qna_types;
	}

    /**
     * 판매자문의 가능 주문상품 리스트 조회 (동일 주문,셀러 기준)
     * @param orderId
     * @param sellerId
     * @returns
    */
	async function getSellerQnaOrderItems(orderId: string, sellerId: number) {
		const { order_items } = await useBackend().command<{
			order_items: QnaOrderItem[]
		}>('v1/cs/seller-qna/order-items', {
			params: {
				order_id: orderId,
				seller_id: sellerId,
			},
		});

		return order_items;
	}

    /**
     * 판매자문의 작성
     * @param form
    */
	async function storeSellerQna(form: SellerQnaStoreForm) {
		await useBackend().command('v1/cs/seller-qna', {
			method: 'post',
			data: form,
		});
	}

    /**
     * 판매자문의 상세 조회
     * @param id
     * @returns
    */
	async function getSellerQnaDetail(id: number) {
		const { seller_qna } = await useBackend().command<{
            seller_qna: SellerQnaDetail
        }>(`v1/cs/seller-qna/${id}/edit`);

		return seller_qna;
	}

    /**
     * 판매자 문의 수정
     * @param id
     * @param form
    */
	async function updateSellerQna(id: number, form: SellerQnaUpdateForm) {
		await useBackend().command(`v1/cs/seller-qna/${id}/edit`, {
			method: 'post',
			data: form,
		});
	}

    /**
     * 판매자 문의 삭제
     * @param id
    */
	async function destroySellerQna(id: number) {
		await useBackend().command(`v1/cs/seller-qna/${id}/destroy`, {
			method: 'post',
		});
	}

    /**
     * 상품문의 페이지네이터 조회
     * @param goodsId
     * @param page
     * @param pageSize
     * @param onlyAnswered
     * @returns
    */
	async function getGoodsQnaPaginator(
		goodsId: number,
		page: number,
		pageSize: number = defaultPageSize,
		onlyAnswered: boolean = false,
	) {
		const { paginator } = await useBackend().command<{
            paginator: Paginator<GoodsQna>
        }>(`v1/goods/${goodsId}/qna`, {
        	params: {
        		page: page,
        		page_size: pageSize,
        		only_answered: onlyAnswered,
        	},
        });

		return paginator;
	}

    /**
     * 상품 문의 작성용 데이터 조회
     * @param goodsId
     * @returns
    */
	async function getGoodsQnaCreateInfo(goodsId: number) {
		return await useBackend().command<GoodsQnaCreateInfo>(`v1/goods/${goodsId}/qna/information`);
	}

    /**
     * 상품 문의 작성
     * @param goodsId
     * @param form
    */
	async function storeGoodsQna(goodsId: number, form: GoodsQnaStoreForm) {
		await useBackend().command(`v1/goods/${goodsId}/qna`, {
			method: 'post',
			data: form,
		});
	}

    /**
     * 상품문의 상세 조회
     * @param goodsId
     * @param qnaId
     * @returns
    */
	async function getGoodsQnaDetail(goodsId: number, qnaId: number) {
		return await useBackend().command<GoodsQnaDetail>(`v1/goods/${goodsId}/qna/${qnaId}/edit`);
	}

    /**
     * 상품 문의 수정
     * @param goodsId
     * @param form
    */
	async function updateGoodsQna(goodsId: number, qnaId: number, form: GoodsQnaUpdateForm) {
		await useBackend().command(`v1/goods/${goodsId}/qna/${qnaId}/edit`, {
			method: 'post',
			data: form,
		});
	}

    /**
     * 상품 문의 삭제
     * @param goodsId
     * @param qnaId
    */
	async function destroyGoodsQna(goodsId: number, qnaId: number) {
		await useBackend().command(`v1/goods/${goodsId}/qna/${qnaId}/destroy`, {
			method: 'post',
		});
	}

	return {
		getQnaPaginator,
		getQnaTypes,
		getQnaOrders,
		getQnaDetail,
		storeQna,
		updateQna,
		destroyQna,
		getSellerQnaPaginator,
		getSellerQnaTypes,
		getSellerQnaOrderItems,
		getSellerQnaDetail,
		storeSellerQna,
		updateSellerQna,
		destroySellerQna,
		getGoodsQnaPaginator,
		getGoodsQnaCreateInfo,
		storeGoodsQna,
		getGoodsQnaDetail,
		updateGoodsQna,
		destroyGoodsQna,
	};
}