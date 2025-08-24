type JointPurchase = {
    id: number
    /** 상품 ID */
    goods_id: number
    /** 상품명 */
    goods_name: string
    /** 상품 대표이미지 */
    thumbnail_url: string
    /** 브랜드 ID */
    brand_id: number
    /** 브랜드명 */
    brand_name: string
    /** 브랜드 로고 이미지 */
    logo_image_url: string
    /** 성인전용상품 여부 */
    is_only_adult: boolean
    /** 정가 */
    price: number
    /** 공동구매가 */
    joint_purchase_price: number
    /** 참여인원 */
    participant_count: number
    /** 목표 인원 */
    target_count: number
    /** 목표 달성 여부 */
    is_target_achieve: boolean
    /** 목표 일시 */
    target_at: string
    /** 목표 달성률 */
    target_achieve_rate: number 
    /** [인플루언서] */
    influencer: {
        id: number
        name: string
        logo_image_url: string
    }
}

/** 공동구매 상세 */
type JointPurchaseDetail = Pick<
    JointPurchase, 
    'id'|
    'goods_id'|
    'target_count'|
    'participant_count'|
    'target_achieve_rate'
> & {
    /** 공동구매 쿠폰 유효기간 */
    expiration_date_message: string
    /** 공동구매 시작일 */
    start_at: string
    /** 공동구매 시작일 */
    end_at: string
    /** 공동구매 할인액 */
    joint_purchase_amount: number;
    /** 공동구매 할인율 */
    joint_purchase_sale_rate: number;
    /** 구매가능 여부 */
    is_purchasable: boolean;
}