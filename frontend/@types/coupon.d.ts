type Coupon = Discounter & {
    id: number
    title: string
    apply_range_type: string
    min_sell_price: number
    is_unlimited: boolean
    usable_device_labels: string[]
}

/**
 * 다운로드 쿠폰
 */
type DownloadableCoupon = {
    id: number
    name: string
    usable_device_labels: string[]
    expiration_date_message: string
    downloadable: boolean
}

/**
 * EP 쿠폰
 */
type EPCoupon = {
    id: number
    discount_amount: number
    discount_type: DiscountType
    discounted_price: number
    duration_day_count: number
    site_code: string
    site_label: string
}

/**
 * 쿠폰(사용가능) 발급내역
 */
type UsableCouponRegist = {
    regist_id: number
    coupon: Pick<
		RegistedCoupon,
        'id'
        |'title'
        |'discount_amount'
        |'discount_type'
        |'maximum_discount_amount'
    > & {
        expire_at: string
    }
}

/**
 * 쿠폰 발급내역
 */
type CouponRegist = {
    id: number
    coupon: RegistedCoupon
    is_usable: boolean
    expire_at: string
    use_start_at: string
    registed_at: string
}

/**
 * 쿠폰 발급내역 상세
 */
type CouponRegistDetail = CouponRegist & {
    coupon: RegistedCoupon & {
        apply_range_description: string
    }
    remain_time_text: string
}

/**
 * 발급된 쿠폰
 */
type RegistedCoupon = Discounter & {
    id: number
    title: string
    apply_range_type: 'all'|'seller'|'goods'|'category'|'brand' // 적용범위 타입
    min_sell_price: number
    is_unlimited: boolean
    usable_device_labels: string[]
    type_label: string // 등급할인쿠폰|일반상품쿠폰|타임딜전용쿠폰|공동구매전용쿠폰|EP쿠폰|자동발행쿠폰
}

type CouponUsableGoods = Pick<Goods, 'id'|'name'|'brand_name'|'thumbnail_url'>
type CouponUsableBrand = Pick<Brand, 'id'|'name'>