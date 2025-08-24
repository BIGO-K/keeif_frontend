/** [문의] 주문 */
type QnaOrder = {
    order_id: string
    ordered_at: string
    items: QnaOrderItem[]
}

/** [문의] 주문상품 */
type QnaOrderItem = {
    id: number
    goods_name: string
    option_name: string
    thumbnail_url: string
}

/** [문의] 상품 */
type QnaOrderGoods = {
    id: number
    name: string
    brand_name: string
    thumbnail_url: string
    option_name: string
}

/** [문의] 답변 */
type QnaAnswer = {
    contents: string
    created_at: string
}

/** 1:1문의 */
type Qna = {
    id: number
    title: string
    contents: string
    top_goods: {
        id: number
        name: string
        brand_name: string
        thumbnail_url: string
        option_name: string
    }
    goods_count: number
    answer?: QnaAnswer
    created_at: string
}

/** [1:1 문의] 1차 유형 */
type QnaType = TypeCodeLabel & {
    is_with_order: boolean
    children: QnaSubType[]
}
/** [1:1 문의] 2차 유형 */
type QnaSubType = TypeCodeLabel;

/** [1:1문의] 상세 */
type QnaDetail = {
    id: number
    title: string
    contents: string
    type_label: string;
    sub_type_label: string;
    order_id?: string;
    ordered_at?: string;
    goods_list: {
        id: number
        name: string
        thumbnail_url: string
        option_name: string
    }[]
}

/** [1:1문의 작성] FORM */
type QnaStoreForm = {
    title: string
    contents: string
    type: number|null
    sub_type: number|null
    order_id: string
    order_item_ids: number[]
}

/** [1:1 문의] 수정 FORM */
type QnaUpdateForm = {
    title: string
    contents: string
}

/** 판매자문의 */
type SellerQna = {
    id: number
    title: string
    contents: string
    is_private: string
    top_goods: {
        id: number
        name: string
        brand_name: string
        thumbnail_url: string
        option_name: string
    }
    goods_count: number
    answer?: QnaAnswer
    created_at: string
}

/** [판매자문의] 유형 */
type SellerQnaType = TypeCodeLabel


/** [판매자문의] 판매자 정보 */
type QnaSeller = {
	id: number
	name: string
	tel: string
}

/** [판매자문의] 상세 */
type SellerQnaDetail = {
    id: number
    title: string
    contents: string
    is_private: boolean
    type_label: string
    seller: {
        name: string
        tel: string
    }
    goods_list: {
        id: number
        name: string
        thumbnail_url: string
        option_name: string
    }[]
}

/** [판매자문의] 작성 FORM */
type SellerQnaStoreForm = {
    order_id: string
    order_item_ids: number[]
    type: Nullable<number>
    title: string
    contents: string
    is_private: boolean
}

/** [판매자문의] 수정 FORM */
type SellerQnaUpdateForm = {
    title: string
    contents: string
    is_private: boolean
}

/** 상품 문의 */
type GoodsQna = {
    id: number
    title: string
    contents: string
    created_at: string
    is_reply: boolean
    is_editable: boolean
    is_private: boolean
    is_readable: boolean
    answer?: QnaAnswer
}

/** [상품문의] 상세 */
type GoodsQnaDetail = {
    id: number
    title: string
    contents: string
    type_label: string
    is_private: boolean
    goods: {
        id: number
        name: string
        brand_name: string
        seller_name: string
        seller_tel: string
        thumbnail_url: string
    }
}

/** [상품문의] 작성 FORM */
type GoodsQnaStoreForm = {
    title: string
    contents: string
    sub_type: Nullable<number>
    is_private: boolean
}

/** [상품문의] 수정 FORM */
type GoodsQnaUpdateForm = {
    title: string
    contents: string
    is_private: boolean
}

/** [상품문의] 작성정보 */
type GoodsQnaCreateInfo = {
    goods: {
        id: number
        name: string
        brand_name: string
        thumbnail_url: string
    }
    seller: {
        name: string
        tel: string
    }
}

/** [판매자문의] 상세 */
type GoodsQnaDetail = {
    id: number
    title: string
    contents: string
    is_private: boolean
    type_label: string
    goods: {
        id: number
        name: string
        thumbnail_url: string
        seller_name: string
		seller_tel: string
    }
}
