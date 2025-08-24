/** 컨테이너 */
type Container = {
    /** 컨테이너 ID */
    id: number
    /** 블록 리스트 */
    blocks: Block[]
}

/** 블록 */
type Block = {
    /** 블록 ID */
    id: number
    /** 블록 코드 */
    mui_code: string
    /** 타이틀1 */
    title_1: Nullable<string>
    /** 타이틀2 */
    title_2: Nullable<string>
    /** 더보기 링크 */
    link: Nullable<string>
    /** 디자인 타이틀 클래스명 */
    design_title_class_name: Nullable<string>
    /** [내 사이즈 맞춤 추천 블록] 마이핏 존재여부 */
    exist_my_fit?: boolean
    /** [랭킹 블록] 자동집계 랭킹 여부 */
    rank_has_range?: boolean
    /** [탭 포함 블록] 탭 리스트 */
    tabs?: {
        id: number
        title: string
        /** 탭 하위 배너 블록조각 */
        banner_partition: Nullable<BannerPartition>
        /** 탭 하위 배너 상품조각 */
        goods_group: Nullable<GoodsGroup>
    }[]
    /** [배너 포함 블록] 배너 블록조각 */
    banner_partition?: BannerPartition
    /** [상품 포함 블록] 상품그룹 */
    goods_group?: GoodsGroup
    /** [공동구매 블록] 공동구매 블록조각 */
    // joint_purchase_partition?: JointPurchasePartition
    /** [래플블록] 래플 블록조각 */
    // raffle_partition?: RafflePartition
    /** [라이브 커머스 블록] 라이브커머스 블록 조각 */
    // live_commerce_partition?: LiveCommercePartitionResponse
	/** [공구상품 블록] 공구상품 블록조각 */
	coop_deal_partition?: CoopDealPartition
	showcase_partition?: ShowcasePartition
}

/** 블록 조각: 탭, 배너, 상품, 래플(유료), 공동구매(유료) */
type Partition = {
    /**
     * 블록조각 ID
     * @example 상품그룹 ID
     */
    id?: Nullable<number>
    /** 현재 페이지 */
    current_page: number
    /** 페이징 URL */
    paging_url: Nullable<string>
    /** 페이지당 노출 아이템 수 */
    per_page: number
    /** 전체 아이템 수 */
    total: number
}

/** [블록조각] 배너 블록조각 */
type BannerPartition = Partition & {
    /** 배너리스트 */
    banners: BlockBanner[]
}

/** [블록조각] 상품그룹 */
type GoodsGroup = Partition & {
    /** 문구1 */
    text_1: Nullable<string>
    /** 문구2 */
    text_2: Nullable<string>
    /** 문구3 */
    text_3: Nullable<string>
    goods_list: (Partial<HasRank> & Goods)[]
}

/** [블록조각] 공동구매 블록조각 */
type JointPurchasePartition = Partition & {
    joint_purchase_list: (Pick<
        JointPurchase,
        'id'|
        'is_target_achieve'|
        'joint_purchase_price'|
        'participant_count'|
        'target_achieve_rate'|
        'target_at'|
        'target_count'|
        'influencer'
    > & {
        goods: (Goods & {
            brand_logo_image_url: string
        })
        joint_purchase_sale_rate: number
		start_at: string
    })[]
}

/** [블록조각] 래플 블록조각 */
type RafflePartition = Partition & {
    raffle_list: Raffle[]
}

/** [블록조각:커스텀] 공구상품 블록조각 */
type CoopDealPartition = Partition & {
	goods_list: CoopDeal[]
}

/** [블록조각:커스텀] 쇼케이스 블록조각 */
type ShowcasePartition = Partition & {
	showcases: InfluencerShowcase[]
}

/** 블록 배너 */
type BlockBanner = {
    id: number
    image_url: string
    alt: string
    is_use_text: boolean
    link: Nullable<string>
    text_1: Nullable<string>
    text_2: Nullable<string>
    text_3: Nullable<string>
    text_4: Nullable<string>
    text_color: Nullable<string>
    icon: Nullable<{
        name: string
        background_color: string
        font_color: string
    }>
    created_at: string
    display_start_at: string
    display_end_at: string
    /** 배너 하위 상품그룹 */
    goods_group: Nullable<GoodsGroup>
}

type BlockContext = {
	tabId?: number
	carouselIndex?: number
	isShowMore?: boolean
}