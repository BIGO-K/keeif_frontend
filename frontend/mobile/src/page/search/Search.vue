<template>
	<layout
		title="검색"
		:hide-title="true"
		layout="popup"
		class="L=search"
		:is-footer="false"
		:is-toolbar="false"
	>
		<template #after-title>
			<div class="mm_lside">
				<i class="ico_search"><b class="mm_ir-blind">검색</b></i>
			</div>
			<form-text
				v-model="searchKeyword"
				placeholder="검색어를 입력하세요"
				@keyup.prevent="searchAuto"
				@keydown.enter.prevent="searchKeywordEnter"
			></form-text>
		</template>

		<template #default>
			<!-- 상품 및 검색어 -->
			<carousel
				:items="searchCarouselItems"
				class="m_popup-search"
				:use-pagination="true"
				:is-more-side="true"
			>
				<template #default="{ item }">
					<!-- 최근본상품 -->
					<template v-if="item.title === '최근 본 상품'">
						<section class="m_popup-search-list">
							<h3><b>{{ item.title }}</b></h3>
							<div class="mm_scroller">
								<div class="mm_product-list T=sm">
									<ul>
										<li
											v-for="(entry, index) in (item as SearchProduct).items"
											:key="index"
										>
											<div class="mm_product-item">
												<mm-link :to="{ name: 'ProductDetail', params: { id: entry.goods.id }}">
													<figure>
														<lazyload
															class="mm_bg-cover image_product"
															:src="entry.goods.thumbnail_url"
														></lazyload>
														<p
															v-if="entry.goods.is_soldout"
															class="text_soldout"
														>
															품절
														</p>
														<figcaption>
															<p class="text_product">
																{{ entry.goods.name }}
															</p>
															<p class="text_price">
																<strong>{{ number(entry.goods.base_discounted_price) }}</strong>
															</p>
														</figcaption>
													</figure>
												</mm-link>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</section>
					</template>
					<!-- 최근검색어 -->
					<template v-else-if="item.title === '최근 검색어'">
						<section class="m_popup-search-list">
							<h3><b>{{ item.title }}</b></h3>
							<div class="mm_scroller">
								<ul>
									<li
										v-for="entry in (item as SearchKeyword).items"
										:key="entry.keyword"
									>
										<mm-link
											:to="{ name: 'SearchResult', query: { keyword: entry.keyword } }"
											@click="recentSearchKeywordStore.add(entry.keyword)"
										>
											<b>{{ entry.keyword }}</b>
										</mm-link>
										<button
											type="button"
											class="btn_remove"
											@click="removeSearchedKeyword(entry.keyword)"
										>
											<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
										</button>
									</li>
								</ul>
							</div>
						</section>
					</template>
					<!-- 인기검색어 -->
					<template v-else>
						<section class="m_popup-search-list">
							<h3><b>{{ item.title }}</b></h3>
							<div class="mm_scroller">
								<ol>
									<li
										v-for="(entry, index) in (item as SearchHotKeyword).items"
										:key="index"
									>
										<mm-link
											:to="{ name: 'SearchResult', query: { keyword: entry.keyword } }"
											@click="recentSearchKeywordStore.add(entry.keyword)"
										>
											<b>{{ entry.keyword }}</b>
											<template v-if="entry.change_type === 'N'">
												<i
													class="ico_rank-new"
													title="신규"
												></i>
											</template>
											<template v-else-if="entry.change_type === 'U'">
												<i
													class="ico_rank-up"
													title="상승"
												></i>
												<b class="text_rank">{{ entry.change_rank }}</b>
											</template>
											<template v-else-if="entry.change_type === 'D'">
												<i
													class="ico_rank-down"
													title="하락"
												></i>
												<b class="text_rank">{{ entry.change_rank }}</b>
											</template>
											<template v-else>
												<i
													class="ico_rank-unchanged"
													title="변동없음"
												></i>
											</template>
										</mm-link>
									</li>
								</ol>
							</div>
							<div class="m...list-foot">
								<p>{{ date(`${(item as SearchHotKeyword).indexedAt}`, 'YYYY.MM.DD HH:mm') }} 기준</p>
							</div>
						</section>
					</template>
				</template>
			</carousel>

			<!-- 검색어 자동완성 -->
			<div
				class="mm_full m_popup-search-auto"
				:class="{ 'S=auto-on' : searchKeyword.length > 0 }"
			>
				<div class="mm_scroller">
					<template v-if="!isEmptySearchRelatedKeyword">
						<ul class="m...auto-keyword">
							<li
								v-for="autoCompleteKeyword in autoCompleteKeywords.keywords"
								:key="autoCompleteKeyword"
							>
								<mm-link
									:to="{ name: 'SearchResult', query: { keyword: autoCompleteKeyword } }"
									@click="recentSearchKeywordStore.add(autoCompleteKeyword)"
								>
									<b v-html="wrap(autoCompleteKeyword, searchKeyword, `<strong class='mm_text-variable'>`, '</strong>')"></b>
									<i class="ico_link-arrow"></i>
								</mm-link>
							</li>
						</ul>
					</template>
					<!-- (D) 일치하는 검색어가 없을 경우 아래 영역을 노출합니다. -->
					<template v-else>
						<ul>
							<li><p>일치하는 검색어가 없습니다<i class="ico_link-arrow"></i></p></li>
						</ul>
					</template>
				</div>
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { useRecentSearchKeywordStore } from '$/stores/useRecentSearchKeywordStore';
	import { useRecentViewGoodsStore } from '$/stores/useRecentViewGoodsStore';
	import stringHelper from '$/utils/stringHelper';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useHotKeyword } from '$/composables/useHotKeyword';
	import { useSearchEngine } from '$/composables/useSearchEngine';
	import Layout from '@/component/layout/Layout.vue';
	import Carousel from '@/component/Carousel.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import FormText from '@/component/form/FormText.vue';

	type RecentViewGoods = Pick<Goods, 'id' | 'name' | 'thumbnail_url' | 'base_discounted_price' | 'sale_rate'> & Required<Pick<Goods, 'is_soldout' | 'brand_name'>>
	type RecentViewGoodsRecord = {
		goods: RecentViewGoods
		recentViewedAt: Date|string
	}
	interface SearchProduct {
		title: string,
		items: RecentViewGoodsRecord[];
	}

	interface SearchKeyword {
		title: string;
		items: {
			keyword: string,
			recentViewedAt: Date|string
		}[];
	}

	interface SearchHotKeyword {
		title: string;
		indexedAt: Date;
		items: HotKeywordRecord[];
	}
	const { wrap } = stringHelper;
	const { number, date } = useFormatter();
	const { getAutoComplete } = useSearchEngine();
	const { recordsByRecent: recentViewGoodsRecords } = useRecentViewGoodsStore();
	const recentSearchKeywordStore = useRecentSearchKeywordStore();

	const recentSearchedRecord = computed(() => recentSearchKeywordStore.recordsByRecent);
	const { getContext } = useHotKeyword();
	const { router, bom } = useGlobalPageContext();
	const hotKeywordContext = await getContext();
	const searchKeyword = ref<string>('');
	// const searchCarouselItems: (SearchProduct | SearchKeyword | SearchHotKeyword)[] = [
	// 	{
	// 		title: '최근 본 상품',
	// 		items: recentViewGoodsRecords,
	// 	},
	// 	{
	// 		title: '최근 검색어',
	// 		items: recentSearchedRecord.value,
	// 	},
	// 	{
	// 		title: '인기 검색어',
	// 		indexedAt: hotKeywordContext.indexedAt,
	// 		items: hotKeywordContext.hotKeywordRecords,
	// 	},
	// ];

	const searchCarouselItems = computed<(SearchProduct | SearchKeyword | SearchHotKeyword)[]>(() => {
		return [
			{
				title: '최근 본 상품',
				items: recentViewGoodsRecords,
			},
			{
				title: '최근 검색어',
				items: recentSearchedRecord.value,
			},
			{
				title: '인기 검색어',
				indexedAt: hotKeywordContext.indexedAt,
				items: hotKeywordContext.hotKeywordRecords,
			},
		];
	});

	const removeSearchedKeyword = (keyword: string) => {
		recentSearchKeywordStore.remove(keyword);
	};

	const searchAutoOn = ref<boolean>(false);
	const autoKeywordLoading = ref<boolean>(false);
	const autoCompleteKeywords = ref<AutoCompleteKeyword>({
		from: '',
		categories: [],
		brands: [],
		keywords: [],
	});

	const isEmptySearchRelatedKeyword = computed(() => autoCompleteKeywords.value.keywords.length < 1 || searchKeyword.value === '');
	/**
	 * 자동완성 검색어 조회
	 * @param event
	*/
	async function searchAuto(event: KeyboardEvent) {

		//TODO 검색엔진 연결 후 테스트 필요
		if (event.key.toLocaleLowerCase() === 'enter') {
			return;
		}
		if (searchKeyword.value.trim().length < 1) { // 공백만 입력 시 일치하는 검색어 X 노출
			autoCompleteKeywords.value = {
				from: '',
				categories: [],
				brands: [],
				keywords: [],
			};

			return;
		}
		if (searchKeyword.value === '' && event.key.toLowerCase() === 'backspace') {
			searchAutoOn.value = false;

			return;
		}

		if (searchKeyword.value !== '' && autoKeywordLoading.value === false) {
			searchAutoOn.value = true;
			autoKeywordLoading.value = true;
			try {
				autoCompleteKeywords.value = await getAutoComplete(searchKeyword.value);
			}
			catch (e) {
				console.error(e);
			}

			autoKeywordLoading.value = false;
		}
	}

	/**
	 * 검색어 입력시 검색 처리
	 * @param event
	 */
	async function searchKeywordEnter(event: KeyboardEvent) {
		if (event.isComposing) {
			return;
		}

		if (searchKeyword.value.trim().length < 1) {
			return bom.alert('검색어를 입력하세요');
		}

		(event.target as HTMLElement).blur();
		recentSearchKeywordStore.add(searchKeyword.value.trim());
		router.push({
			name: 'SearchResult',
			query: {
				keyword: searchKeyword.value.trim(),
			},
		});
	}
</script>