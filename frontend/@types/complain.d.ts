/** 품절취소/배송지연 신고 주문 */
type ComplainOrder<OrderItem> = {
    /** 주문번호 */
    order_id: string
    /** 결제일시 */
    paid_at: string
    /** 결제수단 라벨 */
    payment_method_label: string
    /** 포장단위 */
    packs: OrderSellerPack<OrderItem>[]
}

/** 신고가능 주문 */
type ComplainReportableOrder = ComplainOrder<ComplainReportableOrderItem>;
/** 신고된 주문 */
type ComplainReportedOrder = ComplainOrder<ComplainReportedOrderItem>;

/** 신고가능 주문 상품 */
type ComplainReportableOrderItem = Pick<
    OrderItem,
    'id'|
    'order_status_label'|
    'paid_price'|
    'point_used'
> & {
    /** 상품 */
    goods: Pick<Goods, 'id'|'name'|'brand_name'|'thumbnail_url'> & {
        option_name: string
    }
}

/** 신고된 주문 상품 */
type ComplainReportedOrderItem = ComplainReportableOrderItem & {
    /** 처리상태라벨 */
    process_status_label: string
    /** 처리불가 여부 */
    is_unable_to_complete: boolean
    /** 처리완료 여부 */
    is_complete: boolean
    /** 신고일시 */
    reported_at: boolean
    /** 처리일시 */
    processed_at: boolean
}