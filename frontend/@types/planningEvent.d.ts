/**
 * 기획전
 */
type PlanningEvent = {
    id: number
    title: string
    is_use_comment: boolean
    /** 상세컨텐츠 */
    sections: {
        id: number
        title: string
        mobile_html: string
        pc_html: string
        goods_list: Goods[]
    }[]
    /** 상품 그룹 */
    groups: PlanningEventGroup[]
}

type PlanningEventGroup = {
	has_mobile_image: boolean
	has_pc_image: boolean
	id: number
	mobile_alt: string
	mobile_image_url: string
	mobile_link: string
	pc_alt: string
	pc_image_url: string
	pc_link: string
	title: string
	goods_list: Goods[]
}

/**
 * 기획전 댓글
 */
type PlanningComment = {
    id: number
    contents: string
    is_editable: boolean
    is_private: boolean
    created_at: string
	writer_masking_login_id: string
	writer_grade_level: number
	writer_grade_image_url: string
}

type PlanningCommentForm = Pick<PlanningComment, 'contents'|'is_private'>