type HotKeywordRecord = {
    rank: number
    previous_rank: number
    keyword: string
    change_type: 'U'|'D'|'N'|'S'
    change_rank: number
}

type HotKeywordContext = {
    indexedAt: Date
    hotKeywordRecords: HotKeywordRecord[]
}

type RecommendKeyword = {
	keyword: string,
	link_url: string
}

type AutoCompleteKeyword = {
	from: string;
	categories: {
		code: string;
		full_path: string;
		depth: number;
		name: string;
	}[],
	brands: {
		id: number;
		kor_name: string;
		eng_name: string;
		logo_image_url: string;
	}[]
	keywords: string[]
}

type SearchedResult = {
	filters: SearchEngineGoodsFilterable,
	best_goods: Goods[],
	is_corrected: boolean,
	origin_keyword: string,
	related_keywords: string[],
	corrected_keyword: string,
	brand: Nullable<SearchResultBrand>
	paginator: Paginator<Goods>
}

type KeywordCorrectInfo = {
	is_corrected: false,
	corrected_keyword: Nullable<string>,
	origin_keyword: Nullable<string>
}

type RelatedKeywords = string[]

type SearchResultBrand = Omit<Brand, 'brand_category_ids'>