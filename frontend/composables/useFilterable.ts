import { ref } from 'vue';
import { useRouteQuery } from '@vueuse/router';
import { useGoodsSorting } from '$/composables/useGoodsSorting';
import { useRouteQueryCast } from '$/composables/useRouteQueryCast';

export function useFilterable(
	fetchFilterable: () => Promise<GoodsFilterable>,
	fetchCount: (paramForCommand: GoodsFilterParamForCommand) => Promise<number>,
	fetchList: (paramForCommand: GoodsFilterParamForCommand) => Promise<Goods[]>,
) {
	// const router = useRouter();
	const sorts = useGoodsSorting();
    /** `선택가능범위` 구조 정의 */
	const filterable = ref<GoodsFilterable>({
		categories: [],
		brands: [],
		price_ranges: [
			{
				min: 0,
				max: 50000,
			},
			{
				min: 50000,
				max: 100000,
			},
			{
				min: 100000,
				max: 500000,
			},
			{
				min: 500000,
				max: 1000000,
			},
			{
				min: 1000000,
				max: 0,
			},
		],
		review_rates: [
			{
				value: 5,
				label: '5.0',
			},
			{
				value: 4,
				label: '4.0',
			},
			{
				value: 3,
				label: '3.0',
			},
			{
				value: 2,
				label: '2.0',
			},
			{
				value: 1,
				label: '1.0',
			},
		],
		benefits: [
			{
				value: 'only_free_delivery',
				label: '무료배송',
				selected: false,
			},
			{
				value: 'only_sale',
				label: '할인상품',
				selected: false,
			},
			{
				value: 'except_soldout',
				label: '품절제외',
				selected: false,
			},
		],
		colors: [],
		fit_sizes: [],
		shoes_sizes: [],
	} as GoodsFilterable);
	const initializePage = Number.parseInt(useRouteQuery('page', '1').value);

	const {
		queryToArray,
	} = useRouteQueryCast();

	/** 실제 데이터 조회시 사용할 파라미터 구조체 */
	const paramsForCommand = ref<GoodsFilterParamForCommand>({
		category_codes: queryToArray('category_codes', []),
		brand_ids: queryToArray('brand_ids', []),
		fit_sizes: queryToArray('fit_sizes', []),
		shoes_sizes: queryToArray('shoes_sizes', []),
		colors: queryToArray('colors', []),
		max_price: useRouteQuery('max_price', '').value,
		min_price: useRouteQuery('min_price', '').value,
		review_stars: useRouteQuery('review_stars', []).value,
		only_free_delivery: useRouteQuery('only_free_delivery', 'false').value,
		only_sale: useRouteQuery('only_sale', 'false').value,
		except_soldout: useRouteQuery('except_soldout', 'false').value,
		page: initializePage,
		page_size: useRouteQuery('page_size', 100),
		sorting: useRouteQuery('sorting', sorts[0].value).value,
		keyword: useRouteQuery('keyword', '').value,
		do_not_correct: false,
	});

	const totalCount = ref<number>(0);
	const goodsListByPage = ref<Array<(Goods|null)[]>>([]);

	/** 최초 설정시 이전 페이지 만큼 빈값 넣어준다 */
	if (paramsForCommand.value.page > 1) {
		for (let page = 1; page <= paramsForCommand.value.page; page++) {
			goodsListByPage.value[page] = [];
			for (let itemIndex = 0; itemIndex < paramsForCommand.value.page_size; itemIndex++) {
				goodsListByPage.value[page][itemIndex] = null;
			}
		}
	}

	async function startContext() {
		await Promise.all([
			fetchFilterable().then((filterableResource) => {
				// 서버에서 제공받는 필터 컨텍스트 처리
				filterable.value.categories = filterableResource.categories;
				filterable.value.brands = filterableResource.brands;
				filterable.value.fit_sizes = filterableResource.fit_sizes;
				filterable.value.shoes_sizes = filterableResource.shoes_sizes;
				filterable.value.colors = filterableResource.colors;
			}),
			fetchCount(paramsForCommand.value).then(_pCount => totalCount.value = _pCount),
			loadList([paramsForCommand.value.page, paramsForCommand.value.page - 1].filter(page => page > 0)),
		]);
	}


	const loadList = async (page: number|number[]) => {

		try {
			const pages = Array.isArray(page) ? page.concat([]) : [page];

			const pagesNeedLoad = pages.filter(page => {
				if (
					(goodsListByPage.value[page] && goodsListByPage.value[page].some(item => item === null) === false)
				) {
					return false;
				}

				return true;
			});
			if (pagesNeedLoad.length < 1) {
				return;
			}
			await Promise.all(pagesNeedLoad.map(async page => {
				paramsForCommand.value.page = page;
				goodsListByPage.value[page] = await fetchList(paramsForCommand.value);
			}));
		}
		catch (e) {

		}
		finally {
			paramsForCommand.value.page = initializePage;
			// paramsForCommand.value.page = Number.parseInt(useRouteQuery('page', '1').value);
			// goodsList.value = list;
			// router.replace({
			// 	query: {
			// 		...router.currentRoute.value.query,
			// 		...paramsForCommand.value
			// 	}
			// });
			// pending.value = false;
		}
	};

	return {
		filterable,
		paramsForCommand,
		totalCount,
		startContext,
		goodsListByPage,
	};
}