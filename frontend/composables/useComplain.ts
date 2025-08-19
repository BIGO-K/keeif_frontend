import { useBackend } from '$/composables/useBackend';

export function useComplain() {
    /**
     * [품절취소] 신고가능 주문 조회
     * @param page
     * @param pageSize
     */
	async function getSoldoutCancelReportablePaginator(page: number = 1, pageSize: number = 10) {
		const { paginator } = await useBackend().command<{
            paginator: Paginator<ComplainReportableOrder>
        }>('v1/my/complains/cancel-by-soldout/reportables', {
        	params: {
        		page,
        		page_size: pageSize,
        	},
        });

		return paginator;
	}

    /**
     * [품절취소] 신고 결과 조회
     * @param page
     * @param pageSize
     */
	async function getSoldoutCancelReportPaginator(page: number = 1, pageSize: number = 10) {
		const { paginator } = await useBackend().command<{
            paginator: Paginator<ComplainReportedOrder>
        }>('v1/my/complains/cancel-by-soldout', {
        	params: {
        		page,
        		page_size: pageSize,
        	},
        });

		return paginator;
	}

    /**
     * [품절취소] 신고
     * @param orderItemId
     */
	async function reportSoldoutCancel(orderItemId: number) {
		await useBackend().command('v1/my/complains/cancel-by-soldout/report', {
			method: 'post',
			data: {
				order_item_id: orderItemId,
			},
		});
	}

    /**
     * [배송지연] 신고가능 주문 조회
     * @param page
     * @param pageSize
     */
	async function getDeliveryDelayReportablePaginator(page: number = 1, pageSize: number = 10) {
		const { paginator } = await useBackend().command<{
            paginator: Paginator<ComplainReportableOrder>
        }>('v1/my/complains/release-delay/reportables', {
        	params: {
        		page,
        		page_size: pageSize,
        	},
        });

		return paginator;
	}


    /**
     * [배송지연] 신고 결과 조회
     * @param page
     * @param pageSize
     */
	async function getDeliveryDelayReportPaginator(page: number = 1, pageSize: number = 10) {
		const { paginator } = await useBackend().command<{
            paginator: Paginator<ComplainReportedOrder>
        }>('v1/my/complains/release-delay', {
        	params: {
        		page,
        		page_size: pageSize,
        	},
        });

		return paginator;
	}

    /**
     * [배송지연] 신고
     * @param orderItemId
     */
	async function reportDeliveryDelay(orderItemId: number) {
		await useBackend().command('v1/my/complains/release-delay/report', {
			method: 'post',
			data: {
				order_item_id: orderItemId,
			},
		});
	}

	return {
		getSoldoutCancelReportablePaginator,
		getSoldoutCancelReportPaginator,
		reportSoldoutCancel,
		getDeliveryDelayReportablePaginator,
		getDeliveryDelayReportPaginator,
		reportDeliveryDelay,
	};
}