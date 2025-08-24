/** 배너 */
type Banner = {
    image_url: string;
    image_alt: string;
    link: string;
}

/** 메인 배너 */
type MainBanner = Banner

/** 탑배너 */
type TopBanner = {
    title: string
    image_url: string
    alt: string
    link: string
    curtain_banner_image_url: Nullable<string>
    curtain_banner_alt: Nullable<string>
}

/** 윙배너 */
type WingBanner = {
    title: string
    image_url: string
    alt: string
    link: string
    big_image_url: string
    big_image_alt: string
}

/** 카테고리 전시 배너 */
type CategoryBanner = {
    id: number
    image_url: string
    alt: string
    link: string
    text_1: string
    text_2: string
    text_3: string
    text_color: string
}

/** 카테고리 전시 브랜드 배너 */
type CategoryBrandBanner = Omit<CategoryBanner, 'text_3'>;