type Category = {
    code: string
    depth: number
    full_path: string
    name: string
    alt: string
    image_url?: string
    mobile_top_alt?: string
    mobile_top_image_url?: string
    pc_top_alt?: string
    pc_top_image_url?: string
    children: Category[]
}

type CategoryInformation = {
    depth: number
    depth1_category_code: string
    depth2_category_code: string|undefined|null
    depth3_category_code: string|undefined|null
    name: string
}

/** 카테고리 전시 페이지 정보 */
type CategoryExhibit = {
    name: string
    children: Pick<Category, 'code'|'name'>[]
    main_banner: Nullable<CategoryBanner[]>
    brand_banner_group: Nullable<{
        title: string
        banners: CategoryBrandBanner[]
    }>
    brand_group: Nullable<{
        title: string
        brands: Pick<Brand, 'id'|'name'>[]
    }>
    goods_group: Nullable<{
        title: string
        goods_list: Goods[]
    }>
}