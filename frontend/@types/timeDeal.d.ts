/** [타임딜] 정보 */
type TimeDealInformation = {
    sell_start_at: string
    sell_end_at: string
    max_orderable_count: number
}

/** [타임딜] 배너 */
type TimeDealBanner = Omit<TimeDealInformation, 'max_orderable_count'> & {
    id: number
    title: string
    banner_name: string

    image_url: string
    image_alt: string

    goods_id: number
    goods_name: string
    is_only_adult: number

    is_use_banner_text: boolean
    banner_text_1: Nullable<string>
    banner_text_2: Nullable<string>
    banner_text_3: Nullable<string>
    banner_text_4: Nullable<string>
    banner_text_color: Nullable<string>

    display_start_at: string
}

/** [타임딜] 배너 유형 */
type TimeDealBannerType = 'A'|'B'|'C'