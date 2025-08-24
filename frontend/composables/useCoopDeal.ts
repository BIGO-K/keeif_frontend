import { reactive, ref, watch, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useRouteQuery } from '@vueuse/router';
import { useBackend } from '$/composables/useBackend';
import { useGoodsSorting } from '$/composables/useGoodsSorting';
import { useRouteQueryCast } from '$/composables/useRouteQueryCast';
import { COOP_DEAL_STATUSES } from '$/constants/index';

type CoopFilterParamForCommand = {
	page: number
	page_size: number,
	sorting: GoodsSort
}

export function useCoopDealShop(dealStatus: CoopDealStatus) {
	const goodsSorts = useGoodsSorting();
	const progressCoopSorts = computed(() => {
		return [
			{
				value: 'sell_start',
				label: '공구 오픈일순',
				is_hide: dealStatus != COOP_DEAL_STATUSES.upcoming,
			},
			{
				value: 'sell_end',
				label: '공구 마감일순',
				is_hide: dealStatus != COOP_DEAL_STATUSES.ongoing,
			},
		].concat(goodsSorts).filter(sort => !sort.is_hide);
	});
	const router = useRouter();
	/** 기본 소팅 정보 설정 */
	const defaultSorting = dealStatus === COOP_DEAL_STATUSES.upcoming
		? progressCoopSorts.value.find(sort => sort.value === 'sell_start')?.value
		: goodsSorts[0].value;

	const { queryToNumber } = useRouteQueryCast();
	const initPage = queryToNumber('page', 1);
	const paramsForCommand = reactive<CoopFilterParamForCommand>({
		page: initPage,
		page_size: queryToNumber('page_size', 100),
		sorting: useRouteQuery('sorting', defaultSorting).value,
	});
	const banners = ref<Banner[]>([]);
	const loadingPages = ref<number[]>([]);
	const coopDealPaginator = ref<Paginator<CoopDeal>>({
		total: 0,
		per_page: paramsForCommand.page_size,
		current_page: paramsForCommand.page,
		data: [],
	});
	const goodsListByPage = ref<Array<(CoopDeal|null)[]>>([]);
	const pending = ref<boolean>(true);
	/** 최초 설정시 이전 페이지 만큼 빈값 넣어준다 */
	if (paramsForCommand.page > 1) {
		for (let page = 1; page <= paramsForCommand.page; page++) {
			goodsListByPage.value[page] = [];
			for (let itemIndex = 0; itemIndex < paramsForCommand.page_size; itemIndex++) {
				goodsListByPage.value[page][itemIndex] = null;
			}
		}
	}

	watch(() => paramsForCommand.sorting, async () => {
		paramsForCommand.page = 1;
		loadingPages.value = [];
		goodsListByPage.value = [];
		await loadList(1);
		router.replace({
			query: {
				...router.currentRoute.value.query,
				...paramsForCommand,
			},
		});
	});

	async function startContext() {
		await Promise.all([
			getShopInfo(),
			loadList([paramsForCommand.page - 1, paramsForCommand.page].filter(page => page > 0)),
		]);
	}
	/**
	 * 공구관 정보 조회: 배너 리스트 및 총 상품 갯수
	 * @param status
	 * @returns
	 */
	async function getShopInfo() {
		const { banners: pBanners, total_goods_count } = await useBackend().command<{
			banners: Banner[]
			total_goods_count: number
		}>('/v1/exhibit/influencer-marketing', {
			params: {
				status: dealStatus,
			},
		});

		coopDealPaginator.value.total = total_goods_count;
		banners.value = pBanners;
	}

	async function fetch(param: CoopFilterParamForCommand) {
		const { paginator } = await useBackend().command<{
			paginator: SimplePaginator<CoopDeal>
		}>('/v1/exhibit/influencer-marketing/goods', {
			params: {
				status: dealStatus,
				sorting: param.sorting,
				page: param.page,
				page_size: param.page_size,
			},
		});

		return paginator;
	}

	/** 페이지를 반영 */
	async function applyPage(page: number) {
		pending.value = true;
		coopDealPaginator.value.current_page = page;
		paramsForCommand.page = page;
		await loadList(page);
		router.replace({
			query: {
				...router.currentRoute.value.query,
				...paramsForCommand,
			},
		});
	}

	const loadList = async (page: number|number[]) => {

		try {
			const pages = Array.isArray(page) ? page.concat([]) : [page];
			const pagesNeedLoad = pages.filter(page => {
				if (
					loadingPages.value.some(lp => lp === page)
					|| (goodsListByPage.value[page] && goodsListByPage.value[page].some(item => item === null) === false)
				) {
					return false;
				}

				return true;
			});

			if (pagesNeedLoad.length < 1) {
				return;
			}
			pending.value = true;
			loadingPages.value = loadingPages.value.concat(pagesNeedLoad);

			await Promise.all(pagesNeedLoad.map(async page => {
				paramsForCommand.page = page;
				const paginator = await fetch(paramsForCommand);
				goodsListByPage.value[page] = paginator.data;
			}));

		}
		finally {
			pending.value = false;
		}
	};

	const displayedItems = computed<(CoopDeal|null)[]>(() => {
		return goodsListByPage.value.flatMap((itemsInPage) => {
			return itemsInPage;
		});
	});

	return {
		startContext,
		goodsSorts,
		progressCoopSorts,
		coopDealPaginator,
		fetch,
		paramsForCommand,
		pending,
		applyPage,
		banners,
		goodsListByPage,
		displayedItems,
		initPage,
	};
}