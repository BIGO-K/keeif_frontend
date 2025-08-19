/** 주문상태 */
type OrderState = TypeCodeLabel & {
	need_review_guide: boolean
}

/** 주문내역 */
type MyOrder<OrderItemType> = {
    order_id: string
    ordered_at: string
    packs: OrderSellerPack<OrderItemType>[]
}

/** 취소/반품/교환 가능 주문 */
type ClaimableOrder<OrderItemType> = {
    /** 주문번호 */
    order_id: string
    /** 주문일시 */
    ordered_at: string
    /** 포장단위 */
    packs: OrderPack<OrderItemType>[]
    /** 결제수단 라벨 */
    payment_method_label: string
    /** 요청시 환불계좌 필수 여부 */
    require_refund_account: boolean
    /** 배송지 정보 */
    shipping_address: MyShippingAddress
}

/** 주문 상세 */
type OrderDetail = {
    /** 취소주문 ID 리스트 */
    cancel_ids: string[]
    /** 반품주문 ID 리스트 */
    return_ids: string[]
    /** 교환주문 ID 리스트 */
    exchange_ids: string[]
    order: {
        order_id: string
		ordered_at: string
        /** 원주문번호: 교환 후 신규 생성된 주문일 경우 존재 */
        original_order_id: Nullable<string>
        /** 주문자정보 */
        orderer_info: {
            name: string
            tel: string
            email: string
            /** 개인통관고유부호 */
            personal_clearance_code: Nullable<string>
        }
        /** 배송지정보 */
        shipping_address: MyShippingAddress
		/** 새벽배송지 정보 */
		// dawn_delivery_info: Nullable<{
		// 	entrance_type_label: string
		// 	description: string
		// }>
        /** 배송지 변경 가능 여부 */
        shipping_address_changeable: boolean
        /** 영수증 조회 가능 여부 */
        receipt_viewable: boolean
        /** 결제정보 */
        payment_info: {
            /** 결제수단명 */
            label: string
            /** 구매 적립금 */
            buy_point: number
            /** 카드결제 정보 */
            card: Nullable<CardPayment>
            /** 무통장/에스크로 결제 정보 */
            bank_account: Nullable<{
                /** 계좌번호 */
                account_number: string
                /** 은행명 */
                bank_name: string
                /** 입금기한 */
                input_expire_at: string
            }>
            /** 휴대폰 결제 정보 */
            mobile: Nullable<{
                approved_at: string
            }>
            /** 제외 될 구매 적립금 */
            except_buy_point: number
        };
        /** 결제금액 상세정보 */
        payment_summary: {
            /** 총 상품금액 */
            total_goods_price: number
            /** 총 배송비 */
            total_shipping_price: number
            /** 할인내역 */
            discounts: {
                /** 회원할인 */
                member: number
                /** 심야할인 */
                night_sale: number
                /** 즉시할인 */
                immediately_sale: number
            }
            /** 사용한 쿠폰 할인 금액 */
            used_coupon_amount: number
            /** 사용 적립금 금액 */
            used_points: number
            /** 최종 결제금액 */
            total_price: number
        }
        /** 사은품 리스트 */
        giveaways: {
            id: number
            name: string
            /** 지급조건 */
            condition_label: string
            image_url: string;
        }[]
        packs: OrderSellerPack<OrderItem>[]
    }
}

/** 주문 포장 단위 */
type OrderPack<OrderItemType> = {
    /** 배송비 */
    paid_shipping_price: number
    /** 배송정책 ID */
    shipping_rule_id: number
    /** 주문상품 */
    order_items: OrderItemType[]
}

/** 주문 포장 단위(셀러) */
type OrderSellerPack<OrderItemType extends NormalStepOrderItem|CancelStepOrderItem> = {
    /** 배송비 */
    paid_shipping_price: number
    /** 배송정책 ID */
    shipping_rule_id: number
    /** 셀러 */
    sellers: {
        id: number
        name: string
        tel: string
        /** 주문상품 */
        order_items: OrderItemType[]
    }[]
	/** [custom] 새벽배송 상품 여부 */
	is_dawn_delivery?: boolean
}

/** 주문상품 */
type OrderItem = {
    id: number
    /** 주문상태라벨 */
    order_status_label: string
    /** 환불상태라벨 */
    refund_status_label: Nullable<string>

    /** 취소주문번호 */
    cancel_id: string
    /** 반품주문번호 */
    return_id: string
    /** 반품 레코드 고유번호: 반품 주문 내 주문상품 식별값 */
    return_target_id: number
    /** 교환주문번호 */
    exchange_id: string
    /** 교환 레코드 고유번호: 교환 주문 내 주문상품 식별값 */
    exchange_target_id: number
    /** 교환된 옵션명 */
    exchanged_option_name: string

    /** 실결제가 */
    paid_price: number
    /** 주문상품에 분배된 적립금 */
    point_used: number
    /** 구매확정시 적립할 금액 */
    earnable_point: number

    /** 배송조회 가능 여부 */
    delivery_trackable: boolean
    /** 배송조회 url */
    delivery_tracking_url: Nullable<string>
    /** 구매확정 가능 여부 */
    purchase_confirmable: boolean
    /** 수취 확인 가능 여부 */
    receipt_confirmable: boolean
    /** 리뷰 작성 가능 여부 */
    review_writable: boolean

    /** 주문취소 가능여부 */
    cancelable: boolean
    /** 반품신청 가능 여부 */
    returnable: boolean
    /** 주문교환가능여부 */
    exchangeable: boolean
    /** 교환철회 가능 여부 */
    exchange_cancelable: boolean
    /** 반품철회 가능 여부 */
    return_cancelable: boolean
    /** 반송조회 가능 여부 */
    return_delivery_trackable: boolean
    /** 반송조회 url */
    return_delivery_tracking_url: string
    /** [교환주문] 반품전환 가능 여부 */
    to_return_switchable: string
    /** 상품 */
    goods: Pick<
		Goods,
		'id'|
		'name'|
		'brand_name'|
		'thumbnail_url'
	> & {
		option_id: number
		option_name: string
	}
}

/** [주문상품 묶음] 동일 배송상태,상품,옵션 기준 묶음 */
type OrderItemSet<T> = Required<(T & {
	goods: OrderItem['goods'] & {
		ea: number
	}
	total_paid_price: number
	total_point_used: number
	items: T[]
})>

/** [정상] 주문 내역 */
type NormalStepOrder = MyOrder<NormalStepOrderItem>

/** [정상] 주문상품 */
type NormalStepOrderItem = Pick<
    OrderItem,
    'id'|
    'order_status_label'|
    'paid_price'|
    'earnable_point'|
    'point_used'|
    'delivery_trackable'|
    'delivery_tracking_url'|
    'purchase_confirmable'|
    'receipt_confirmable'|
    'review_writable'|
    'cancelable'|
    'returnable'|
    'exchangeable'|
    'goods'|
	'is_dawn_delivery'
>

/** [취소] 주문내역 */
type CancelStepOrder = MyOrder<CancelStepOrderItem>

/** [취소] 사유 */
type CancelReason = TypeCodeLabel & {
    require_detail: boolean
}

/** [취소] 주문상품 */
type CancelStepOrderItem = Pick<
    OrderItem,
    'id'|
    'order_status_label'|
    'paid_price'|
    'point_used'|
    'refund_status_label'|
    'goods'
>

/** [취소] 주문 상세 */
type BaseCancelOrderDetail<CancelOrderItem> = {
    /** 취소주문번호 */
    id: string
    /** 입금전 취소 여부 */
    is_cancel_before_paid: boolean
    /** 취소신청 단계 주문상품 포함 여부*/
    is_contain_apply_status: boolean
    /** 취소신청시 작성한 사유 */
    reason: {
        label: string
        detail: Nullable<string>
    }
    /** 환불계좌 */
    refund_account: Nullable<RefundAccount>
    /** 환불정보 */
    refund_info: RefundInfo
    /** 포장단위 */
    packs: OrderPack<CancelOrderItem>[]
}

/** [취소] 주문 상세 */
type CancelOrderDetail = BaseCancelOrderDetail<CancelDetailOrderItem>

/** [취소] 주문 상세 (주문상품 묶음) */
type CancelOrderDetailSet = BaseCancelOrderDetail<CancelDetailOrderItemSet>

/** [취소] 주문 상세 주문상품 묶음 */
type CancelDetailOrderItemSet = OrderItemSet<CancelDetailOrderItem>

/** [취소] 주문 상세 주문상품 */
type CancelDetailOrderItem = Pick<OrderItem, 'id'|'paid_price'|'point_used'> & {
	seller_name: string
    /** 상품 */
    goods: OrderItem['goods'] & {
        is_soldout: boolean
		ea: number
    }
}

/** [취소] 가능 주문 베이스 */
type BaseCancelableOrder<CancelOrderItem> = Pick<
    ClaimableOrder<CancelOrderItem>,
	'order_id'|
	'ordered_at'|
	'packs'|
	'payment_method_label'|
	'require_refund_account'
> & {
    /** 결제완료 여부 */
    is_paid: boolean
	/** 부분취소 가능 여부 */
	is_partial_cancelable: boolean
}

/** [취소] 가능 주문 */
type CancelableOrder = BaseCancelableOrder<CancelableOrderItem>

/** [취소] 가능 주문(주문상품 묶음)*/
type CancelableOrderSet = BaseCancelableOrder<CancelableOrderItemSet>

/** [취소] 가능 주문상품 묶음 */
type CancelableOrderItemSet = OrderItemSet<CancelableOrderItem>;

/** [취소] 가능 주문상품 */
type CancelableOrderItem = Pick<
    OrderItem,
    'id'|
    'order_status_label'|
    'paid_price'|
    'point_used'
> & {
    /** 주문상태 코드 */
    order_status_code: number
    /** 셀러명 */
    seller_name: string
    /** 사용된 쿠폰명 */
    used_coupon_title: string
    /** 상품 */
    goods: OrderItem['goods'] & {
        is_soldout: boolean
    }
}

/** [취소] 신청 FORM */
type CancelForm = {
    /** 주문번호 */
    order_id: string
    /** 주문상품 ID 리스트 */
    order_item_ids: number[]
    /** 취소 사유 CODE */
    cancel_reason_code: Nullable<number>
    /** 취소 사유 상세 */
    cancel_reason_detail: string
    /** 환불계좌: 예금주명 */
    refund_account_owner_name: RefundAccountForm['owner_name']
    /** 환불계좌: 은행코드 */
    refund_bank_code: Nullable<RefundAccountForm['bank_code']>
    /** 환불계좌: 계좌번호 */
    refund_account_number: RefundAccountForm['account_number']
}

type ClaimReasonIconLabel = 'change_mind'|'issue_with_goods'|'wrong_goods_delivered'
type ClaimReasonIconClassName = 'change'|'defects'|'other'

/** [반품] 사유 */
type ReturnReason = TypeCodeLabel & {
    /** (영)라벨 */
    eng_label: ClaimReasonIconLabel
    /** 귀책사유: 셀러|주문자 */
    censure: 'seller'|'orderer'
    /** 상세사유 필요 여부 */
    require_detail: boolean
    /** 아이콘 클래스명 */
    icon_class_name: ClaimReasonIconClassName
}

/** [반품] 주문내역 */
type ReturnStepOrder = MyOrder<ReturnStepOrderItem> & {
    /** 반품 주문번호 */
    return_id: string
}

/** [반품] 주문상품 */
type ReturnStepOrderItem = Pick<
    OrderItem,
    'id'|
    'return_target_id'|
    'order_status_label'|
    'paid_price'|
    'point_used'|
    'return_cancelable'|
    'return_delivery_trackable'|
    'return_delivery_tracking_url'|
	'goods'
>

/** [반품] 주문 상세 베이스*/
type BaseReturnOrderDetail<ReturnOrderItem> = {
    /** 반품주문번호 */
    id: string
    /** 반품신청시 작성한 사유 */
    reason: {
        label: string
        detail: Nullable<string>
    }
    /** 반품 송장 정보 */
    retrieve_invoice: Nullable<{
        /** 택배사 코드 */
        delivery_company_code: string
        /** 택배사명 */
        delivery_company_name: string
        /** 송장번호 */
        invoice_number: string
    }>
    /** 반품 수거지 */
    retrieve_address: MyShippingAddress
    /** 환불계좌 */
    refund_account: Nullable<RefundAccount>
    /** 환불정보 */
    refund_info: RefundInfo
    /** 포장단위 */
    pack: OrderPack<ReturnOrderItem>
}

/** [반품] 주문 상세 */
type ReturnOrderDetail = BaseReturnOrderDetail<ReturnOrderDetailItem>;

/** [반품] 주문 상세 (주문상품 묶음) */
type ReturnOrderDetailSet = BaseReturnOrderDetail<ReturnOrderDetailItemSet>

/** [반품] 주문상세 주문상품 */
type ReturnOrderDetailItem = Pick<OrderItem, 'id'|'paid_price'|'point_used'> & {
	seller_name: string
    /** 상품 */
    goods: OrderItem['goods'] & {
        is_soldout: boolean
		ea: number
    }
};

/** [반품] 주문상세 주문상품 묶음 */
type ReturnOrderDetailItemSet = OrderItemSet<ReturnOrderDetailItem>;

/** [반품] 가능 주문 베이스 */
type BaseReturnableOrder<ReturnOrderItem> = Pick<
    ClaimableOrder<ReturnOrderItem>,
    'order_id'|
    'ordered_at'|
    'packs'|
    'payment_method_label'|
    'require_refund_account'|
    'shipping_address'
>

/** [반품] 가능 주문 */
type ReturnableOrder = BaseReturnableOrder<ReturnableOrderItem>;

/** [반품] 가능 주문 (주문상품 묶음) */
type ReturnableOrderSet = BaseReturnableOrder<ReturnableOrderItemSet>;

/** [반품] 가능 주문상품 묶음 */
type ReturnableOrderItemSet = OrderItemSet<ReturnableOrderItem>;

/** [반품] 가능 주문상품 */
type ReturnableOrderItem = Pick<
    OrderItem,
    'id'|
    'order_status_label'|
    'paid_price'|
    'point_used'
> & {
    /** 주문상태 코드 */
    order_status_code: number
    /** 셀러명 */
    seller_name: string
    /** 사용된 쿠폰명 */
    used_coupon_title: string
    /** 상품 */
    goods: OrderItem['goods'] & {
        is_soldout: boolean
    }
}

/** [반품] 신청 FORM */
type ReturnForm = {
    /** 주문번호 */
    order_id: string
    /** 주문상품 ID 리스트 */
    order_item_ids: number[]
    /** 반품 사유 CODE */
    return_reason_code: Nullable<number>
    /** 반품 사유 상세 */
    return_reason_detail: string
    /** 회수방법 CODE */
    retrieve_method_code: Nullable<number>
    /** 반품송장정보 */
    retrieve_invoice: RetrieveInvoiceForm
    /** 반품 수거지 정보 */
    retrieve_from: MyShippingAddress
    /** 환불계좌 정보 */
    refund_account: RefundAccountForm
}

/** [반품] 환불금액 정보 조회 FORM */
type ReturnRefundPredictForm = {
    /** 주문상품 ID 리스트 */
    order_item_ids: number[]
    /** 반품 사유 CODE */
    return_reason_code: number
    /** 회수방법 CODE */
    retrieve_method: number
    /** 반품수거지 우편번호 */
    retrieve_zip_code: Nullable<string>
    /** 반품수거지 주소 */
    retrieve_base_address: Nullable<string>
    /** 반품수거지 상세주소 */
    retrieve_detail_address: Nullable<string>
}

/** [반품] 송장수정 FORM */
type ReturnRetrieveInvoiceUpdateForm = {
    /** 반품주문번호 */
    return_id: string
    /** 택배사 코드 */
    delivery_company_code: string
    /** 송장번호 */
    invoice_no: string
}

/** [교환] 사유 */
type ExchangeReason = ReturnReason & {
    /** 동일옵션 교환 가능 여부 */
    is_same_option_exchangeable: boolean
}

type ChosenExchangeReason = Pick<ExchangeReason, 'code'|'label'|'eng_label'> & {
    detail: Nullable<string>
}

/** [교환] 주문내역*/
type ExchangeStepOrder = MyOrder<ExchangeStepOrderItem> & {
    /** 교환주문번호 */
    exchange_id: string
};

/** [교환] 주문상품 */
type ExchangeStepOrderItem = Pick<
    OrderItem,
    'id'|
    'order_status_label'|
    'exchange_target_id'|
    'exchanged_option_name'|
    'paid_price'|
    'point_used'|
    'return_delivery_trackable'|
    'return_delivery_tracking_url'|
    'exchange_cancelable'|
    'to_return_switchable'|
    'goods'
>

/** [교환] 가능 주문 베이스*/
type BaseExchangeableOrder<ExchangeOrderItem> = Pick<
    ClaimableOrder<ExchangeOrderItem>,
    'order_id'|
    'ordered_at'|
    'packs'|
    'payment_method_label'|
    'shipping_address'
>

/** [교환] 가능 주문 */
type ExchangeableOrder = BaseExchangeableOrder<ExchangeableOrderItem>

/** [교환] 가능 주문 (주문상품 묶음) */
type ExchangeableOrderSet = BaseExchangeableOrder<ExchangeableOrderItemSet>

/** [교환] 가능 주문상품 묶음 */
type ExchangeableOrderItemSet = OrderItemSet<ExchangeableOrderItem>;

/** [교환] 가능 주문상품 */
type ExchangeableOrderItem = Pick<
    OrderItem,
    'id'|
    'order_status_label'|
    'paid_price'|
    'point_used'
> & {
    /** 주문상태 코드 */
    order_status_code: number
    /** 셀러명 */
    seller_name: string
    /** 사용된 쿠폰명 */
    used_coupon_title: string
    /** 상품 */
    goods: OrderItem['goods'] & {
        is_soldout: boolean
    }
    /** 교환 가능 옵션 리스트 */
    exchangeable_options: {
        /** 교환 가능 옵션: ID */
        id: number
		/** 교환 가능 옵션명 */
		option_name: string
        /** 교환 가능 옵션: 재고 */
        stock: number
		option_extra_amount: number
		is_exchangeable: boolean
    }[]
	/** 선택된 교환 옵션 */
	exchange_option: Nullable<{
        /** 선택된 교환 옵션: ID */
        id: number
        /** 선택된 교환 옵션: 옵션명 */
        option_name: string
        /** 교환 가능 옵션: 재고 */
        stock: number
	}>
}

/** [교환] 주문 상세 베이스 */
type BaseExchangeOrderDetail<ExchangeOrderItem> = {
    /** 교환주문번호 */
    id: string
    /** 교환신청시 작성한 사유 */
    reason: {
        label: string
        detail: Nullable<string>
    }
    /** 교환 송장 정보 */
    retrieve_invoice: Nullable<{
        /** 택배사 코드 */
        delivery_company_code: string
        /** 택배사명 */
        delivery_company_name: string
        /** 송장번호 */
        invoice_number: string
    }>
    /** 교환 수거지 */
    retrieve_address: MyShippingAddress
    /** 교환 배송지 */
    exchange_address: MyShippingAddress
    additional_payment_price: ExchangePaymentInfo & {
        /**
         * 추가결제금액 지불 타입 라벨
         * @example 즉시결제 | 판매자와 협의 후 결제
         */
        pay_type_label: string
    }
    payment_info: Nullable<{
        label: string
        card: Nullable<CardPayment>
    }>
    /** 포장단위 */
    pack: OrderPack<ExchangeOrderItem>
}
/** [교환] 주문 상세 */
type ExchangeOrderDetail = BaseExchangeOrderDetail<ExchangeOrderDetailItem>

/** [교환] 주문 상세 (주문상품 묶음)*/
type ExchangeOrderDetailSet = BaseExchangeOrderDetail<ExchangeDetailOrderItemSet>

/** [교환] 주문 상세 주문상품 묶음 */
type ExchangeDetailOrderItemSet = OrderItemSet<ExchangeOrderDetailItem>

/** [교환] 주문 상세 주문상품 */
type ExchangeOrderDetailItem = Pick<OrderItem, 'id'|'paid_price'|'point_used'|'exchanged_option_name'> & {
	seller_name: string
    goods: OrderItem['goods'] & {
        is_soldout: boolean
		ea: number
    }
}

/** [교환] 주문상품-교환옵션 */
type ExchangeOptionPair = {
    order_item_id: number
    option_id: Nullable<number>
}

/** [교환] 신청 FORM*/
type ExchangeForm = {
    /** 주문번호 */
    order_id: string
    /** 주문상품-교환옵션 리스트 */
    exchange_option_pair: ExchangeOptionPair[]
    /** 교환 사유 코드 */
    reason_code: number
    /** 교환 사유 상세 */
    reason_detail: string
    /** 회수방법 CODE */
    retrieve_method_code: number
    /** 교환송장번호 */
    retrieve_invoice: RetrieveInvoiceForm
    /** 교환 수거지 정보 */
    retrieve_from: MyShippingAddress
    /** 교환 배송지 정보 */
    exchange_to: MyShippingAddress
    /** 추가 결제금액 결제 여부 */
    is_additional_payment_paid: boolean
    /** 추가결제금액 즉시결제 요청 후 발급받은 토큰 */
    payment_token: string
}

/** [교환] 추가결제금액 조회 FORM */
type ExchangePaymentPredictForm = {
    /** 주문상품-교환옵션 리스트 */
    exchange_options: ExchangeForm['exchange_option_pair']
    /** 교환 사유 코드 */
    exchange_reason_code: ExchangeForm['reason_code']
    /** 회수방법 CODE */
    retrieve_method: ExchangeForm['retrieve_method_code']
    /** 교환 수거지 정보 */
    retrieve_from: MyClaimShippingAddressForm
    /** 교환 배송지 정보 */
    exchange_to: MyClaimShippingAddressForm
}

/** [교환] 추가결제정보 */
type ExchangePaymentInfo = {
    /** 추가결제 총액 */
    total_price: number
    /** 추가결제금액 계산내역 */
    calculate_details: {
        /** 계산내역: 내역명 */
        label: string
        /** 계산내역: 금액 */
        amount: number
    }[]
}

/** [교환] 추가결제금 결제 FORM */
type ExchangePaymentForm = {
    order_id: string
    payment_info: {
        card_code: Nullable<number>,
        interest_month: number,
        is_interest_free: boolean,
        is_partial_interest_free: boolean,
        payment_price: number
    }
    exchange_form: Omit<ExchangeForm, 'order_id'|'is_additional_payment_paid'|'payment_token'>
}

/** [교환] 반품전환 가능 주문 */
type BaseExchangeToReturnableOrder<ExchangeToReturnOrderItem> = Pick<
    ClaimableOrder<ExchangeToReturnOrderItem>,
    'order_id'|
    'ordered_at'|
    'packs'|
    'payment_method_label'|
    'require_refund_account'|
    'shipping_address'
>

type ExchangeToReturnableOrder = BaseExchangeToReturnableOrder<ExchangeToReturnableOrderItem>
type ExchangeToReturnableOrderSet = BaseExchangeToReturnableOrder<ExchangeToReturnableOrderItemSet>
type ExchangeToReturnableOrderItemSet = OrderItemSet<ExchangeToReturnableOrderItem>;

/** [교환] 반품전환 가능 주문상품 */
type ExchangeToReturnableOrderItem = Pick<
    OrderItem,
    'id'|
    'exchange_target_id'|
    'order_status_label'|
    'paid_price'|
    'point_used'
> & {
    /** 주문상태 코드 */
    order_status_code: number
    /** 셀러명 */
    seller_name: string
    /** 사용된 쿠폰명 */
    used_coupon_title: string
    /** 상품 */
    goods: OrderItem['goods'] & {
        is_soldout: boolean
    }
}

/** [교환] 반품전환 신청 FORM */
type ExchangeToReturnForm = {
    /** 교환주문번호 */
    exchange_id: string
    /** 교환 레코드 고유번호: 교환 주문 내 주문상품 식별값 */
    exchange_target_ids: number[]
    /** 환불계좌 */
    refund_account: RefundAccountForm
}

/** [교환] 송장수정 FORM */
type ExchangeRetrieveInvoiceUpdateForm = {
    /** 교환주문번호 */
    exchange_id: string
    /** 택배사 코드 */
    delivery_company_code: string
    /** 송장번호 */
    invoice_no: string
}


/** 환불정보 */
type RefundInfo = {
    /** 총 상품결제금액 */
    total_paid_price: number
    /** 환불금액 */
    refund_price: number
    /** 포인트 */
    refund_point: number
    /**	차감/합산 상세 내역 리스트 */
    calculate_details: {
        /** 계산내역 라벨 */
        label: string
        /** 계산내역 값 */
        amount: number
        /** 차감여부 (false인 경우 합산) */
        is_subtracted: boolean
    }[];
}


/** 반품/교환 회수 방법 */
type RetrieveMethods = TypeCodeLabel & {
    /** 자동회수 여부 */
    is_auto_retrieve: boolean
    /** 고객직접회수 여부 */
    is_retrieve_by_orderer: boolean
}

/** 반품/교환 회수송장 FORM */
type RetrieveInvoiceForm = {
    /** 택배사 코드 */
    delivery_company: string
    /** 송장번호 */
    invoice_number: string
}

/** 카드결제 정보 */
type CardPayment = {
    /** 카드사명 */
    label: string
    /** 카드번호(마스킹) */
    masking_number: string
    /** 결제승인일시 */
    approved_at: string
}

type DeliveryCompany = {
	code: string
	name: string
};