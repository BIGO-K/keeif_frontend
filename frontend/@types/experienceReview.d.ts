/** 체험단 후기 */
type ExperienceReview = {
    id: number
    /** 제목 */
    title: string
    /** 대표사진 */
    thumbnail_url: string
    /** 평점 */
    grade: number
    /** 작성자명 */
    writer: string
    /** 추천수 */
    recommendation_count: number
    /** 조회수 */
    view_count: number
    /** 작성일시 */
    created_at: string
}

/** 체험단 후기 상세 */
type ExperienceReviewDetail = Omit<ExperienceReview, 'thumbnail_url'> & {
    /** 내용 */
    contents: string
    /** 이미지 리스트 */
    image_url_list: string[]
    /** 선택한 리뷰템플릿 */
    templates: SelectedReviewTemplate[]

    /** [신체정보] 키 */
    height: number
    /** [신체정보] 몸무게 */
    weight: number
    /** [신체정보] 신발 사이즈*/
    shoes_size: number

    /** [상품] ID */
    goods_id: number
    /** [상품] 상품명 */
    goods_name: string
    /** [상품] 대표이미지 */
    goods_thumbnail_url: string
    /** [상품] 1차 할인가(판매가) */
    base_discounted_price: number
    /** [상품] 브랜드명 */
    brand_name: string
}

/** 체험단 리뷰 작성 FORM */
type ExperienceReviewForm = {
    goods_id: Nullable<number>
    option_id: Nullable<number>
    rate: Nullable<number>
    title: string
    contents: string
    height?: Nullable<number>
    weight?: Nullable<number>
    shoes_size?: Nullable<number>
    selected_review_templates: {
        template_id: number
        detail_id: number
    }[]
    images: File[]
}

type ExperienceReviewableGoods = {
    id: number
    name: string
    brand_name: string
    thumbnail_url: string
    option_list: {
        id: number
        name: string
    }[]
}