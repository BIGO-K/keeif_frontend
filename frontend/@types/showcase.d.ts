/** 쇼케이스 */
type Showcase = {
    id: number
    thumbnail_url: string
    title: string
    first_words: string
    second_words: string
    brand_id: number
    brand_name: string
    sort_id: number
    sort_name: string
}

type ShowcaseCategory = {
	id: number
	name: string
}

type OtherShowcase = Pick<Showcase, 'id'|'title'|'thumbnail_url'|'sort_id'|'sort_name'>

/** 쇼케이스 상세 */
type ShowcaseDetail = Omit<Showcase, 'sort_id'|'sort_name'> & {
    sub_title: string
    /** 상세내용(컨텐츠) */
    details: string
    mobile_banner_alt: string
    mobile_banner_url: string
    pc_banner_alt: string
    pc_banner_url: string
    video_url: string
    is_video: boolean
    created_at: string
    /** 상품그룹 */
    groups: {
        id: number
        mobile_image_url: string
        mobile_image_alt: string
        pc_image_url: string
        pc_image_alt: string
        goods_list: Goods[]
    }[]
}

type InfluencerShowcase = {
	id: number
	image_url: string
	alt: string
	text_1: string
	text_2: string
	influencer: {
		id: number
		name: string
		logo_image_url: string
		description: string
	}
	main_goods: Goods
}