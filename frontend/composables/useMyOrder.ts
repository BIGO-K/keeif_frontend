import monsDate from '$/utils/date';
import { useBackend } from '$/composables/useBackend';

type MonthTab = {
    value: number,
    label: string,
    from: string,
    to: string,
}

export function useMyOrder() {
    /** 검색기간: 월 */
	const currentDate = monsDate();
	const monthTabs: MonthTab[] = [
		{ value: 1, label: '최근 1개월', from: currentDate.subtract(1, 'month').format('YYYY-MM-DD'), to: currentDate.format('YYYY-MM-DD') },
		{ value: 3, label: '최근 3개월', from: currentDate.subtract(3, 'month').format('YYYY-MM-DD'), to: currentDate.format('YYYY-MM-DD') },
		{ value: 6, label: '최근 6개월', from: currentDate.subtract(6, 'month').format('YYYY-MM-DD'), to: currentDate.format('YYYY-MM-DD') },
		{ value: 12, label: '최근 1년', from: currentDate.subtract(12, 'month').format('YYYY-MM-DD'), to: currentDate.format('YYYY-MM-DD') },
	];

    /** 반품/교환 사유 icon 클래스명 상수 */
	const CLAIM_REASON_ICON_CLASS: Record<ClaimReasonIconLabel, ClaimReasonIconClassName> = {
		change_mind: 'change',
		issue_with_goods: 'defects',
		wrong_goods_delivered: 'other',
	};

	const defaultRefundInfo: RefundInfo = {
		total_paid_price: 0,
		refund_price: 0,
		refund_point: 0,
		calculate_details: [],
	};

	const defaultExchangeAdditionalPayments: ExchangeAdditionalPaymentPrice = {
		totalPrice: 0,
		calculateDetails: [
			{
				label: '일반 배송비',
				amount: 0,
			},
			{
				label: '교환 배송비',
				amount: 0,
			},
		],
	};

    /**
     * [정상] 단계 주문상태코드 조회
     * @returns
     */
	async function getNormalStepStates() {
		const { order_status_codes } = await useBackend().command<{
            order_status_codes: OrderState[]
        }>('v1/my/orders/normal-steps/status-codes');

		return order_status_codes;
	}

    /**
     * [정상] 단계 주문 목록 조회
     * @param monthValue
     * @param statusCode
     * @returns
     */
	async function getNormalStepOrders(monthValue: number, statusCode?: Nullable<number>) {
		const targetMonth = monthTabs.find(month => month.value === monthValue) || monthTabs[0];
		const { orders } = await useBackend().command<{
			orders: NormalStepOrder[]
		}>('v1/my/orders/normal-steps', {
			params: {
				status_code: !statusCode ? '' : statusCode,
				start_date: targetMonth.from,
				end_date: targetMonth.to,
			},
			isForce: true,
		});

		return orders;
	}

    /**
     * [정상] 주문상세 조회
     * @param orderId
     * @returns
     */
	async function getDetail(orderId: string) {
		return await useBackend().command<OrderDetail>(`v1/my/orders/${orderId}/sheet`, {
			isForce: true,
		});
	}

    /**
     * [정상] 구매확정처리
     * @param orderItemId
     */
	async function confirmPurchase(orderItemId: number) {
		await useBackend().command('v1/my/orders/normal-process/confirm-purchase', {
			method: 'post',
			data: {
				order_item_id: orderItemId,
			},
		});
	}

    /**
     * [정상] 수취 확인 처리
     * @param orderItemId
     */
	async function confirmReceipt(orderItemId: number) {
		await useBackend().command('v1/my/orders/normal-process/delivered', {
			method: 'post',
			data: {
				order_item_id: orderItemId,
			},
		});
	}


    /**
     * [정상] 배송지 변경 > 내 배송지에 등록된 배송지 ID를 통해 변경
     * @param orderId
     * @param shippingAddressId
     */
	async function updateShippingAddressId(orderId: string, shippingAddressId: number) {
		await useBackend().command('v1/my/orders/normal-process/change-receive-address-id', {
			method: 'post',
			data: {
				order_id: orderId,
				delivery_address_id: shippingAddressId,
			},
		});
	}

    /**
     * [정상] 배송지 변경 > 배송지 주소 정보 입력 통해 변경
     * @param orderId
     * @param shippingAddressId
     */
	async function updateShippingAddress(orderId: string, form: MyShippingAddress) {
		await useBackend().command('v1/my/orders/normal-process/change-receive-address', {
			method: 'post',
			data: {
				order_id: orderId,
				receiver_name: form.name,
				receiver_tel: form.tel,
				zip_code: form.zip_code,
				base_address: form.base_address,
				detail_address: form.detail_address,
			},
		});
	}

    /**
     * [취소] 사유 조회
     * @returns
     */
	async function getCancelReasons() {
		const { cancel_reasons } = await useBackend().command<{
            cancel_reasons: CancelReason[]
        }>('v1/my/orders/cancel-process/reasons');

		return cancel_reasons;
	}

    /**
     * [취소] 단계 주문 목록 조회
     * @param monthValue
     * @returns
     */
	async function getCancelStepOrders(monthValue: number) {
		const targetMonth = monthTabs.find(month => month.value === monthValue) || monthTabs[0];
		const { cancel_orders } = await useBackend().command<{
			cancel_orders: CancelStepOrder[]
		}>('v1/my/orders/cancel-steps', {
			params: {
				start_date: targetMonth.from,
				end_date: targetMonth.to,
			},
		});

		return cancel_orders;
	}

    /**
     * [취소] 주문 상세
     * @param cancelId
     * @returns
     */
	async function getCancelDetail<T extends boolean>(
		cancelId: string,
		isSet: T = false,
	): T extends true ? CancelOrderDetailSet : CancelOrderDetail {

		const { cancel_detail } = await useBackend().command<{
			cancel_detail: CancelOrderDetail
		}>(`v1/my/orders/cancel-steps/${cancelId}`, {
			isForce: true,
		});

		cancel_detail.id = cancelId;
		cancel_detail.refund_info.calculate_details = cancel_detail.refund_info.calculate_details.map(detail => {
			detail.is_subtracted = detail.is_substracted;

			return detail;
		});

		if (isSet) {
			cancel_detail.packs = cancel_detail.packs.map(pack => {
				pack.order_items = orderItemToSet(pack.order_items);

				return pack;
			});
		}

		return cancel_detail;
	}

    /**
     * [취소] 가능 주문 조회
     * @param orderId
     * @returns
     */
	async function getCancelables(orderId: string, orderItemId: number) {
		const { cancelable_order } = await useBackend().command<{
            cancelable_order: CancelableOrder
        }>(`v1/my/orders/normal-steps/${orderId}/cancelables/${orderItemId}`);

		const cancelOrderItemSet: CancelableOrderSet = {
			...cancelable_order,
		};

		cancelOrderItemSet.packs.map(pack => {
			pack.order_items = orderItemToSet(pack.order_items);

			return pack;
		});

		return cancelOrderItemSet;
	}

    /**
     * [취소] 환불금액 정보 조회
     * @param orderId
     * @param orderItemIds
     * @param reasonCode
     * @returns
     */
	async function getCancelRefundInfo(orderId: string, orderItemIds: number[], reasonCode: number) {
		const { refund_info } = await useBackend().command<{
			refund_info: RefundInfo
		}>(`v1/my/orders/normal-steps/${orderId}/predict-refund-context-by-cancel`, {
			method: 'post',
			data: {
				order_item_ids: orderItemIds,
				cancel_reason_code: reasonCode,
			},
		});

		refund_info.calculate_details = refund_info.calculate_details.map(detail => {
			detail.is_subtracted = detail.is_substracted;

			return detail;
		});

		return refund_info;
	}

    /**
     * [취소] 신청
     * @param form
     * @returns
     */
	async function applyCancel(form: CancelForm) {
		const { cancel_ids } = await useBackend().command<{
			cancel_ids: string[]
		}>('v1/my/orders/cancel-process/apply', {
			method: 'post',
			data: form,
		});

		return cancel_ids;
	}

    /**
     * [반품] 사유조회
     * @returns
     */
	async function getReturnReasons() {
		const { return_reasons } = await useBackend().command<{
            return_reasons: Omit<ReturnReason, 'icon_class_name'>[]
        }>('v1/my/orders/return-process/reasons');

		return return_reasons.map(reason => {
			return {
				...reason,
				icon_class_name: CLAIM_REASON_ICON_CLASS[reason.eng_label],
			} as ReturnReason;
		});
	}

    /**
     * [반품] 단계 주문 목록 조회
     * @param monthValue
     * @returns
     */
	async function getReturnStepOrders(monthValue: number) {
		const targetMonth = monthTabs.find(month => month.value === monthValue) || monthTabs[0];
		const { return_orders } = await useBackend().command<{
            return_orders: ReturnStepOrder[]
		}>('v1/my/orders/return-steps', {
			params: {
				start_date: targetMonth.from,
				end_date: targetMonth.to,
			},
			isForce: true,
		});

		return return_orders;
	}

    /**
     * [반품] 상세 조회
     * @param returnId
     * @returns
     */
	async function getReturnDetail<T extends boolean>(
		returnId: string,
		isSet: T = false,
	): T extends true ? ReturnOrderDetailSet : ReturnOrderDetail {
		const { return_detail } = await useBackend().command<{
			return_detail: ReturnOrderDetail
		}>(`v1/my/orders/return-steps/${returnId}`, {
			isForce: true,
		});

		return_detail.id = returnId;
		return_detail.refund_info.calculate_details = return_detail.refund_info.calculate_details.map(detail => {
			detail.is_subtracted = detail.is_substracted;

			return detail;
		});

		return_detail.retrieve_address = return_detail.retrieve_address && return_detail.retrieve_address.base_address
			? return_detail.retrieve_address
			: null;

		if (isSet) {
			return_detail.pack.order_items = orderItemToSet(return_detail.pack.order_items);
		}

		return return_detail;
	}

    /**
     * [반품] 가능 주문 조회
     * @param orderId
     * @param orderItemId
     * @returns
     */
	async function getReturnable(orderId: string, orderItemId: number) {
		const { returnable_order, available_retrieve_methods } = await useBackend().command<{
            returnable_order: ReturnableOrder
            available_retrieve_methods: RetrieveMethods[]
        }>(`v1/my/orders/normal-steps/${orderId}/returnables/${orderItemId}`);


		const returnableOrderSet: ReturnableOrderSet = {
			...returnable_order,
		};

		returnableOrderSet.packs = returnableOrderSet.packs.map(pack => {
			pack.order_items = orderItemToSet(pack.order_items);

			return pack;
		});

		return {
			order: returnableOrderSet,
			availableRetrieveMethods: available_retrieve_methods,
		};
	}

    /**
     * [반품] 환불금액 정보 조회
     * @param orderId
     * @returns
     */
	async function getReturnRefundInfo(orderId: string, form: ReturnRefundPredictForm) {
		const { refund_info } = await useBackend().command<{
			refund_info: RefundInfo
		}>(`v1/my/orders/normal-steps/${orderId}/predict-refund-context-by-return`, {
			method: 'post',
			data: form,
		});

		refund_info.calculate_details = refund_info.calculate_details.map(detail => {
			detail.is_subtracted = detail.is_substracted;

			return detail;
		});

		return refund_info;
	}

    /**
     * [반품] 신청
     * @param form
     * @returns
     */
	async function applyReturn(form: ReturnForm) {
		const { return_ids } = await useBackend().command<{
			return_ids: string[]
		}>('v1/my/orders/return-process/apply', {
			method: 'post',
			data: form,
		});

		return return_ids;
	}

    /**
     * [반품] 철회 신청
     * @param returnId
     * @param returnTargetId
     */
	async function cancelReturn(returnId: string, returnTargetId: number) {
		await useBackend().command('v1/my/orders/return-process/recant', {
			method: 'post',
			data: {
				return_id: returnId,
				return_target_id: returnTargetId,
			},
		});
	}

    /**
     * [반품] 송장정보 수정
     * @param form
     */
	async function updateReturnRetrieveInvoice(form: ReturnRetrieveInvoiceUpdateForm) {
		await useBackend().command('v1/my/orders/return-process/change-retrieve-delivery-invoice', {
			method: 'post',
			data: form,
		});
	}

    /**
     * [교환] 사유조회
     * @returns
     */
	async function getExchangeReason() {
		const { exchange_reasons } = await useBackend().command<{
            exchange_reasons: Omit<ExchangeReason, 'icon_class_name'|'is_same_option_exchangeable'>[]
        }>('v1/my/orders/exchange-process/reasons');

		return exchange_reasons.map(reason => {
			return {
				...reason,
				icon_class_name: CLAIM_REASON_ICON_CLASS[reason.eng_label],
				is_same_option_exchangeable: reason.censure === 'seller',
			} as ExchangeReason;
		});
	}

    /**
     * [교환] 단계 주문 목록 조회
     * @param monthValue
     * @returns
     */
	async function getExchangeStepOrders(monthValue: number) {
		const targetMonth = monthTabs.find(month => month.value === monthValue) || monthTabs[0];
		const { exchange_orders } = await useBackend().command<{
            exchange_orders: ExchangeStepOrder[]
		}>('v1/my/orders/exchange-steps', {
			params: {
				start_date: targetMonth.from,
				end_date: targetMonth.to,
			},
		});

		return exchange_orders;
	}

    /**
     * [교환] 주문 상세
     * @param cancelId
     * @returns
     */
	async function getExchangeDetail(
		exchangeId: string,
		isSet: T = false,
	): T extends true ? ExchangeOrderDetailSet : ExchangeOrderDetail {
		const { exchange_detail } = await useBackend().command<{
			exchange_detail: ExchangeOrderDetail
		}>(`v1/my/orders/exchange-steps/${exchangeId}`, {
			isForce: true,
		});

		exchange_detail.id = exchangeId;

		exchange_detail.retrieve_address = exchange_detail.retrieve_address && exchange_detail.retrieve_address.base_address
			? exchange_detail.retrieve_address
			: null;

		if (isSet) {
			exchange_detail.pack.order_items = orderItemToSet(exchange_detail.pack.order_items);
		}

		return exchange_detail;
	}

    /**
     * [교환] 가능 주문 조회
     * @param orderId
     * @param orderItemId
     */
	async function getExchangeable(orderId: string, orderItemId: number) {
		const { exchangeable_order, available_retrieve_methods } = await useBackend().command<{
            exchangeable_order: ExchangeableOrder
            available_retrieve_methods: RetrieveMethods[]
        }>(`v1/my/orders/normal-steps/${orderId}/exchangeables/${orderItemId}`);

		const exchangeOrderSet: ExchangeableOrderSet = {
			...exchangeable_order,
		};

		exchangeOrderSet.packs = exchangeOrderSet.packs.map(pack => {
			pack.order_items = orderItemToSet(pack.order_items);

			return pack;
		});


		return {
			order: exchangeOrderSet,
			availableRetrieveMethods: available_retrieve_methods,
		};
	}

    /**
     * [교환] 추가결제정보 조회
     * @param orderId
     * @param form
     * @returns
     */
	async function getExchangePaymentInfo(orderId: string, form: ExchangePaymentPredictForm) {
		const { additional_payments } = await useBackend().command<{
            additional_payments: ExchangePaymentInfo
		}>(`v1/my/orders/normal-steps/${orderId}/paying-context-by-exchange`, {
			method: 'post',
			data: form,
		});

		return additional_payments;
	}

    /**
     * [교환] 신청
     * @param form
     */
	async function applyExchange(form: ExchangeForm) {
		const { exchange_id } = await useBackend().command<{
            exchange_id: string
        }>('v1/my/orders/exchange-process/apply', {
        	method: 'post',
        	data: form,
        });

		return exchange_id;
	}

    /**
     * [교환] 추가결제준비: 결제 URL및 토큰 조회
     * @param form
     * @returns
     */
	async function prepareExchangePay(form: ExchangePaymentForm) {
		const { paying_url, payment_token } = await useBackend().command<{
            paying_url: string
            payment_token: string
        }>('v1/my/orders/exchange-process/prepare-for-payment', {
        	method: 'post',
        	data: form,
        });

		return {
			paying_url,
			payment_token,
		};
	}

    /**
     * [교환] 추가결제 결과 조회
     * @param paymentToken
     * @returns
     */
	async function getExchangePayResult(paymentToken: string) {
		const { is_success, error_message } = await useBackend().command<{
            is_success: boolean
            error_message: string
        }>('v1/my/orders/exchange-process/check-payment', {
        	method: 'post',
        	data: {
        		payment_token: paymentToken,
        	},
        });

		return {
			is_success,
			error_message,
		};
	}

    /**
     * [교환] 철회 신청
     * @param exchangeId
     * @param exchangeTargetId
     */
	async function cancelExchange(exchangeId: string, exchangeTargetId: number) {
		await useBackend().command('v1/my/orders/exchange-process/recant', {
			method: 'post',
			data: {
				exchange_id: exchangeId,
				exchange_target_id: exchangeTargetId,
			},
		});
	}

    /**
     * [교환] 교환주문 내 반품전환 가능 주문상품 조회
     * @param exchangeId
     * @returns
     */
	async function getExchangeToReturnable(exchangeId: string) {
		const { switch_returnable_order, chosen_exchange_reason } = await useBackend().command<{
            switch_returnable_order: ExchangeToReturnableOrder
            chosen_exchange_reason: ChosenExchangeReason
        }>(`v1/my/orders/exchange-steps/${exchangeId}/transferables`);

		const toReturnableOrderSet: ExchangeToReturnableOrderSet = {
			...switch_returnable_order,
		};

		toReturnableOrderSet.packs = toReturnableOrderSet.packs.map(pack => {
			pack.order_items = orderItemToSet(pack.order_items);

			return pack;
		});


		return {
			order: toReturnableOrderSet,
			chosenExchangeReason: chosen_exchange_reason,
		};
	}

    /**
     * [교환] 반품전환 환불금액정보 조회
     * @param exchangeId
     * @param exchangeTargetIds
     * @returns
     */
	async function getExchangeToReturnRefundInfo(exchangeId: string, exchangeTargetIds: number[]) {
		const { refund_info } = await useBackend().command<{
			refund_info: RefundInfo
		}>(`v1/my/orders/exchange-steps/${exchangeId}/predict-refund-context-by-transfer-to-return`, {
			method: 'post',
			data: {
				exchange_target_ids: exchangeTargetIds,
			},
		});

		refund_info.calculate_details = refund_info.calculate_details.map(detail => {
			detail.is_subtracted = detail.is_substracted;

			return detail;
		});

		return refund_info;
	}

    /**
     * [교환] 반품전환 신청
     * @param form
     * @returns
     */
	async function applyExchangeToReturn(form: ExchangeToReturnForm) {
		const { return_id } = await useBackend().command<{
			return_id: string
		}>('v1/my/orders/exchange-process/transfer-to-return', {
			method: 'post',
			data: form,
		});

		return return_id;
	}

    /**
     * [교환] 송장정보 수정
     * @param form
     */
	async function updateExchangeRetrieveInvoice(form: ExchangeRetrieveInvoiceUpdateForm) {
		await useBackend().command('v1/my/orders/exchange-process/change-retrieve-delivery-invoice', {
			method: 'post',
			data: form,
		});
	}

    /**
     * 영수증 조회
     * @param orderId
     * @returns
     */
	async function getPaymentReceipt(orderId: string) {
		const { receipt } = await useBackend().command<{
            receipt: Receipts
        }>(`v1/my/orders/${orderId}/payment-receipt`);

		receipt.all.type = 'all';
		receipt.approve.type = 'approve';
		receipt.cancels = receipt.cancels.map(cancel => cancel.type = 'cancel');

		return receipt;
	}

    /**
     * 영수증 이메일로 전송
     * @param orderId
     * @param email
     * @param type
     * @param refundId
     */
	async function sendPaymentReceiptToEmail(
		orderId: string,
		email: string,
		type: 'all'|'approve'|'cancel' = 'all',
		refundId?: string,
	) {
		await useBackend().command(`v1/my/orders/${orderId}/payment-receipt/send-to-mail`, {
			method: 'post',
			data: {
				email,
				type,
				refund_id: refundId,
			},
		});
	}

    /**
     * 송장 유효성 검사
     * @param form
     */
	async function validateInvoice(form: RetrieveInvoiceForm) {
		await useBackend().command('v1/my/orders/validate-delivery-invoice', {
			method: 'post',
			data: form,
		});
	}

	/** 택배사 조회 */
	async function getDeliveryCompanies() {
		const { delivery_companies } = await useBackend().command<{
			delivery_companies: DeliveryCompany[]
		}>('v1/informations/delivery-companies');

		return delivery_companies;
	}

	/**
	 * 환불정보를 통해 환불상세 합계와 최종 환불금액 계산
	 * @param refundInfo
	 * @returns
	 */
	function getRefundCalculations(refundInfo: RefundInfo) {
		/** 환불상세 합산 값 */
		const sumOfCalculateDetail = refundInfo.calculate_details.reduce((accumulator, current) => {
			return accumulator + (current.is_subtracted ? -Number(current.amount) : Number(current.amount));
		}, 0);

		return {
			sumOfDetails: sumOfCalculateDetail,
			totalRefund: refundInfo.refund_price - sumOfCalculateDetail,
		};
	}

	/** 주문상품 묶음처리 */
	function orderItemToSet<T extends ToOrderItemSetMappable>(orderItems: T[]): OrderItemSet<T>[] {
		const orderItemSets: Record<string, OrderItemSet<T>> = {};

		orderItems.forEach(item => {
			const deepClonedOrderItem = JSON.parse(JSON.stringify(item));
			const targetKey = `${item.goods.id}_${item.goods.option_id}_${item.order_status_label || ''}`;

			if (!orderItemSets[targetKey]) {
				const { goods, ...itemProperties } = item;
				orderItemSets[targetKey] = {
					...itemProperties,
					goods: {
						...goods,
						ea: 1,
					},
					total_paid_price: item.paid_price,
					total_point_used: item.point_used,
					items: [],
				};
				orderItemSets[targetKey].items.push(deepClonedOrderItem);
			}
			else {
				orderItemSets[targetKey].items.push(deepClonedOrderItem);
				orderItemSets[targetKey].total_paid_price += item.paid_price;
				orderItemSets[targetKey].total_point_used += item.point_used;
				orderItemSets[targetKey].goods.ea += 1;
			}
		});

		return Object.values(orderItemSets);
	}


	/** 결제수단 조회  */
	async function getPayMethods(): Promise<PayMethod[]> {
		const { pay_methods } = await useBackend().command<{
			pay_methods: PayMethod[]
		}>('v1/orders/utilities/payment-methods');

		return pay_methods;
	}

	return {
		monthTabs,
		defaultRefundInfo,
		defaultExchangeAdditionalPayments,
		getNormalStepStates,
		getNormalStepOrders,
		getDetail,
		confirmPurchase,
		confirmReceipt,
		updateShippingAddressId,
		updateShippingAddress,

		getCancelReasons,
		getCancelStepOrders,
		getCancelDetail,
		getCancelables,
		getCancelRefundInfo,
		applyCancel,

		getReturnReasons,
		getReturnStepOrders,
		getReturnDetail,
		getReturnable,
		getReturnRefundInfo,
		applyReturn,
		cancelReturn,
		updateReturnRetrieveInvoice,

		getExchangeReason,
		getExchangeStepOrders,
		getExchangeDetail,
		getExchangeable,
		getExchangePaymentInfo,
		applyExchange,
		prepareExchangePay,
		getExchangePayResult,
		cancelExchange,
		getExchangeToReturnable,
		getExchangeToReturnRefundInfo,
		applyExchangeToReturn,
		updateExchangeRetrieveInvoice,

		getPaymentReceipt,
		sendPaymentReceiptToEmail,
		validateInvoice,

		getRefundCalculations,
		getDeliveryCompanies,
		getPayMethods,
	};
}