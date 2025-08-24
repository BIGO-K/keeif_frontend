import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import defined from '$/utils/defined';
import { useFormatter } from '$/composables/useFormatter';
import { useGoodsSorting } from '$/composables/useGoodsSorting';

export function useFilteringGoods(
	totalCount: number,
	initFilterable: GoodsFilterable,
	initGoodsList: Array<(Goods|null)[]>,
	initParamsForCommand: GoodsFilterParamForCommand,
	fetchList: (paramForCommand: GoodsFilterParamForCommand) => Promise<Goods[]|SearchedResult>,
	isGeneralList?: boolean = true,
	fetchCount?: (paramForCommand: GoodsFilterParamForCommand) => Promise<number>,

) {
	const router = useRouter();
	const sorts = useGoodsSorting();
	const defaultSort = sorts[0];

	/** 초기 데이터 */
	const filterable = computed(() => initFilterable);
	const goodsListByPage = ref<Array<(Goods|null)[]>>(initGoodsList || []);
	const paramsForCommand = ref<GoodsFilterParamForCommand>(initParamsForCommand);

    /** 구성요소(데이터/상태) 선언 */
	const paginator = ref<Paginator<Goods>>({
		current_page: paramsForCommand.value.page,
		per_page: paramsForCommand.value.page_size,
		total: totalCount || 0,
		data: [],
	});

	const goodsList = ref<Goods[]>([]);
	const sorting = ref(initParamsForCommand.sorting);
	const pending = ref(false);
	const loadingPages = ref<number[]>([]);

    /** 구성요소(호출자) 선언 */
	const loadCount = async () => {
		if (!fetchCount) {
			return;
		}
		paginator.value.total = await fetchCount(paramsForCommand.value);
	};
	const loadList = async (page: number|number[], resetPage = false) => {
		pending.value = true;
		try {
			const pages = Array.isArray(page) ? page.concat([]) : [page];

			if (resetPage) {
				loadingPages.value = [];
				goodsListByPage.value = [];
			}

			const pagesNeedLoad = pages.filter(page => {
				if (
					loadingPages.value.some(lp => lp === page)
					|| (goodsListByPage.value[page] && goodsListByPage.value[page].some(item => item === null) === false)
					&& !resetPage
				) {
					return false;
				}

				return true;
			});

			if (pagesNeedLoad.length < 1) {
				return;
			}

			loadingPages.value = loadingPages.value.concat(pagesNeedLoad);

			await Promise.all(pagesNeedLoad.map(async page => {
				paramsForCommand.value.page = page;
				if (isGeneralList) {
					goodsListByPage.value[page] = (await fetchList(paramsForCommand.value) as Goods[]);
				}
				else {

					const searchResult = (await fetchList(paramsForCommand.value) as SearchedResult);
					// filterable.value.categories = searchResult.filters.categories;
					// filterable.value.brands = searchResult.filters.brands;
					// filterable.value.fit_sizes = searchResult.filters.fit_sizes;
					// filterable.value.shoes_sizes = searchResult.filters.shoes_sizes;
					// filterable.value.colors = searchResult.filters.colors;
					// totalCount.value = searchResult.paginator.total;
					goodsListByPage.value[page] = searchResult.paginator.data;
					// bestGoods.value = searchResult.best_goods;
					// correctInfo.value = {
					// 	corrected_keyword: searchResult.corrected_keyword,
					// 	is_corrected: searchResult.is_corrected,
					// 	origin_keyword: searchResult.origin_keyword
					// };
					// relationKeywords.value = searchResult.related_keywords;
					// relatedBrands.value = searchResult.brand;
				}
			}));
		}
		finally {
			router.replace({
				query: {
					...router.currentRoute.value.query,
					...paramsForCommand.value,
				},
			});
			pending.value = false;
		}
	};

    /** 변화감지 */
	watch(sorting, (newSorting, oldSorting) => {

		if (newSorting === oldSorting) {
			return;
		}
		paramsForCommand.value.sorting = newSorting;
		paramsForCommand.value.page = 1;
		paginator.value.current_page = 1;
		loadList(paramsForCommand.value.page, true);
	});

    /** `선택상태` 정의 -> 사용자의 필터 선택요소를 처리 */
	const selected = ref<GoodsFilterSelected>({
		categories: [],
		brands: [],
		price_ranges: [],
		review_rates: [],
		benefits: [],
		colors: [],
		fit_sizes: [],
		shoes_sizes: [],
	});

    /** 선택상태 - 카테고리 유틸성 */
	function isChildrenCategoryAllSelected(parentCategory: CategoryForFilter) {
		const childrenCodes = parentCategory.child_categories.map(c => c.code);

		return childrenCodes.every(childCode => selected.value.categories.some(c => c.code === childCode));
	}

	function toggleChildrenCategory(parentCategory?: CategoryForFilter) {
		if (!parentCategory) {
			return;
		}

		const childrenCodes = parentCategory.child_categories.map(c => c.code);

		const checked = isChildrenCategoryAllSelected(parentCategory);
		if (checked) {
			selected.value.categories = selected.value.categories.filter(selectedCategory => !childrenCodes.includes(selectedCategory.code));
		}
		else {
			selected.value.categories = selected.value.categories
				.filter(selectedCategory => !childrenCodes.includes(selectedCategory.code))
				.concat(parentCategory.child_categories);
		}
	}

	/** 선택상태 - 가격범위 유틸성 */
	const { number } = useFormatter();
	const textPriceRange = (priceRange: PriceRangeForFilter) => {
		const fromText = priceRange.min % 10000 === 0 ? `${priceRange.min / 10000}만원 ` : `${number(priceRange.min)}원 `;
		const toText = priceRange.max % 10000 === 0 ? ` ${priceRange.max / 10000}만원` : ` ${number(priceRange.max)}원`;

		return `${priceRange.min === 0 ? '' : fromText}~${priceRange.max === 0 ? '' : toText}`;
	};

    /**
     *
     * `선택가능범위(filterable) 처리`
     * -> 간접제공되는 `선택상태`는 선택가능범위에 영향을 받을 수 있는 구조
     *    ex) 쿼리의 brand_ids를 브랜드명을 포함한 brand 객체로 변환 필요 등
     */
	// console.log(filterable.value);
	const flatCategories = ref<CategoryForFilter[]>([]);
	filterable.value.categories?.forEach(c1 => {
		c1.child_categories.forEach(c2 => {
			flatCategories.value = flatCategories.value.concat(c2.child_categories);
		});
	});
	selected.value.categories = paramsForCommand.value.category_codes
		.map(categoryCode => flatCategories.value.find(category => category.code === categoryCode))
		.filter(defined);

	selected.value.brands = paramsForCommand.value.brand_ids
		.map(brandId => filterable.value.brands?.find(brand => brand.id.toString() === brandId))
		.filter(defined);

	selected.value.fit_sizes = paramsForCommand.value.fit_sizes
		.map(fitSizeId => filterable.value.fit_sizes?.find(fitSize => fitSize.id.toString() === fitSizeId))
		.filter(defined);

	selected.value.shoes_sizes = paramsForCommand.value.shoes_sizes
		.map(shoesSizeId => filterable.value.shoes_sizes?.find(shoesSize => shoesSize.id.toString() === shoesSizeId))
		.filter(defined);

	selected.value.colors = paramsForCommand.value.colors
		.map(colorId => filterable.value.colors?.find(color => color.id.toString() === colorId))
		.filter(defined);

	if (paramsForCommand.value.min_price || paramsForCommand.value.max_price) {
		selected.value.price_ranges = [{
			min: paramsForCommand.value.min_price ? Number.parseInt(paramsForCommand.value.min_price) : 0,
			max: paramsForCommand.value.max_price ? Number.parseInt(paramsForCommand.value.max_price) : 0,
		}];
	}

	selected.value.review_rates = paramsForCommand.value.review_stars
		.map(reviewStar => filterable.value.review_rates?.find(reviewRate => reviewRate.value.toString() === reviewStar))
		.filter(defined);

	selected.value.benefits = filterable.value.benefits?.filter(benefit => (
		paramsForCommand.value.only_free_delivery === 'true' && benefit.value === 'only_free_delivery'
            || paramsForCommand.value.only_sale === 'true' && benefit.value === 'only_sale'
            || paramsForCommand.value.except_soldout === 'true' && benefit.value === 'except_soldout'
	)) || [];

	paginator.value.current_page = paramsForCommand.value.page;
	sorting.value = sorts.find(s => s.value === paramsForCommand.value.sorting)?.value || defaultSort.value;



    /** `선택상태` 초기화 */
	function resetSelected() {
		selected.value.categories = [];
		selected.value.brands = [];
		selected.value.price_ranges = [];
		selected.value.review_rates = [];
		selected.value.benefits = [];
		selected.value.colors = [];
		selected.value.fit_sizes = [];
		selected.value.shoes_sizes = [];
	}

    /** `선택상태`를 컨텍스트에 반영 */
	function applySelected(newSelected?: GoodsFilterSelected) {
        /** selected -> paramsForCommand */
		paramsForCommand.value.page = 1;
		paginator.value.current_page = 1;
		if (newSelected) {
			selected.value = newSelected;
		}
		setSelectedToParamsForCommand();

		Promise.all([
			loadList(paramsForCommand.value.page, true),
			loadCount(),
		]);
	}

    /** `선택상태`를 데이터 조회에 사용할 파라미터로 적용 */
	function setSelectedToParamsForCommand() {
		paramsForCommand.value.category_codes = selected.value.categories.map(c => c.code);
		paramsForCommand.value.brand_ids = selected.value.brands.map(b => b.id.toString());
		paramsForCommand.value.fit_sizes = selected.value.fit_sizes.map(f => f.id.toString());
		paramsForCommand.value.shoes_sizes = selected.value.shoes_sizes.map(s => s.id.toString());
		paramsForCommand.value.colors = selected.value.colors.map(c => c.id.toString());
		if (selected.value.price_ranges.length > 0) {
			paramsForCommand.value.min_price = selected.value.price_ranges[0].min.toString();
			paramsForCommand.value.max_price = selected.value.price_ranges[0].max.toString();
		}
		else {
			paramsForCommand.value.min_price = '';
			paramsForCommand.value.max_price = '';
		}
		paramsForCommand.value.review_stars = selected.value.review_rates.map(r => r.value.toString());
		paramsForCommand.value.only_free_delivery = selected.value.benefits.some(b => b.value == 'only_free_delivery') ? 'true' : 'false';
		paramsForCommand.value.only_sale = selected.value.benefits.some(b => b.value == 'only_sale') ? 'true' : 'false';
		paramsForCommand.value.except_soldout = selected.value.benefits.some(b => b.value == 'except_soldout') ? 'true' : 'false';
	}

    /** 페이지를 반영 */
	async function applyPage(page: number) {
		pending.value = true;
		paginator.value.current_page = page;
		paramsForCommand.value.page = page;
		await loadList(page);
	}

	return {
		filterable,
		goodsList,
		paginator,
		pending,
		sorts,
		sorting,
		selected,
		resetSelected,
		applySelected,
		applyPage,
		textPriceRange,
		isChildrenCategoryAllSelected,
		toggleChildrenCategory,
		goodsListByPage,
		paramsForCommand,
	};
}