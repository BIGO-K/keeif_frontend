/** 코디샷 */
type CodyShot = {
    id: number
    title: string
    brand_name: string
    thumbnail_url: string
    alt: string
}

/** 코디샷 상세 */
type CodyShotDetail = CodyShot & {
    sub_title: string
    /** 좌표 */
    pointers: {
        /** 정렬순서값 */
        order_seq: number
        /** X좌표 */
        x: number
        /** Y좌표 */
        y: number
        /** 상품 */
        goods: Goods
    }[]
    created_at: string
}