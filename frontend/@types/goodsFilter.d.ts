type CategoryForFilter = {
    code: string
    name: string
    goods_count: number
    full_label: string
    child_categories: CategoryForFilter[]
}

type BrandForFilter = {
    id: number
    name: string
    goods_count: number
}

type PriceRangeForFilter = {
    min: number
    max: number
}

type ReviewRateForFilter = {
    value: number
    label: string
}

type BenefitForFilter = {
    value: string
    label: string
	selected: boolean
}

type ColorForFilter = {
    id: number
    code: string
    image_url?: string | null
    label: string
}

type FitSizeForFilter = {
    id: number
    label: string
}

type ShoesSizeForFilter = {
    id: number
    label: string
}

// type SearchGoodsFilterParamForCommand = GoodsFilterParamForCommand & {
// 	keyword: string,
// 	do_not_correct: false
// }

type GoodsFilterParamForCommand = {
    category_codes: string[]
    brand_ids: string[]
    fit_sizes: string[]
    shoes_sizes: string[]
    colors: string[]
    max_price: string
    min_price: string
    review_stars: string[]
    only_free_delivery: 'true' | 'false'
    only_sale: 'true' | 'false'
    except_soldout: 'true' | 'false'
    page: number
    page_size: number
    sorting: string
	keyword?: string,
	do_not_correct?: false
}

type GoodsFilterSelected = {
    categories: CategoryForFilter[]
    brands: BrandForFilter[]
    price_ranges: PriceRangeForFilter[]
    review_rates: ReviewRateForFilter[]
    benefits: BenefitForFilter[]
    colors: ColorForFilter[]
    fit_sizes: FitSizeForFilter[]
    shoes_sizes: ShoesSizeForFilter[]
}

type TaggableItem = BrandForFilter | PriceRangeForFilter
| ReviewRateForFilter | BenefitForFilter
| ColorForFilter | FitSizeForFilter
| ShoesSizeForFilter

type SelectedTag = {
    code?: string
    remove: () => void
    label: string
}

type GoodsFilterable = {
    categories?: CategoryForFilter[]
    brands?: BrandForFilter[]
    price_ranges?: PriceRangeForFilter[]
    review_rates?: ReviewRateForFilter[]
    benefits?: BenefitForFilter[]
    colors?: ColorForFilter[]
    fit_sizes?: FitSizeForFilter[]
    shoes_sizes?: ShoesSizeForFilter[]
}


type CustomGoodsFilterable = {
    categories?: CategoryForFilter[]
    brands?: BrandForFilter[]
    price_ranges?: PriceRangeForFilter[]
    review_rates?: ReviewRateForFilter[]
    benefits?: BenefitForFilter[]
    colors?: ColorForFilter[]
    fit_sizes?: FitSizeForFilter[]
    shoes_sizes?: ShoesSizeForFilter[]
	sorting: string
}


type CategoryShopGoodsFilterable = Required<Omit<GoodsFilterable, 'categories'>>
type BrandShopGoodsFilterable = Required<Omit<GoodsFilterable, 'brands'>>
type SellerShopGoodsFilterable = Required<GoodsFilterable>
type SearchEngineGoodsFilterable = Required<GoodsFilterable>