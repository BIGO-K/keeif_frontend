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
				v-model="searchedKeyword"
				placeholder="검색어를 입력하세요"
				@keydown.enter.prevent="changeKeyword(searchedKeyword)"
			></form-text>
		</template>

		<template #default>
			<div class="m_popup-search-result">
				<template v-if="totalCount < 1">
					<!-- 결과없음 -->
					<p class="mm_text-none">
						<i class="ico_text-none"></i>검색 결과가 없습니다
					</p>
					<div class="mm_note">
						<ul>
							<li>정확한 검색어를 입력하셨는지 확인해 주세요.</li>
							<li>다른 검색어를 입력해 주세요.</li>
							<li>노출이 제한된 상품일 수 있습니다.</li>
						</ul>
					</div>

					<template v-if="!isChangedSearchKeyword">
						<!-- 인기 검색어 -->
						<div class="mm_inner">
							<section
								v-if="hotKeywordContext"
								class="m_popup-search-list"
							>
								<h3><b>인기 검색어</b></h3>
								<div class="mm_scroller">
									<ol>
										<li
											v-for="(entry, index) in hotKeywordContext.hotKeywordRecords"
											:key="index"
										>
											<mm-link
												:to="{ name: 'SearchResult', query: { keyword: entry.keyword } }"
												@click.prevent="changeKeyword(entry.keyword)"
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
									<p>{{ date(`${hotKeywordContext.indexedAt}`, 'YYYY.MM.DD HH:mm') }} 기준</p>
								</div>
							</section>
						</div>

						<!-- best 아이템 -->
						<section
							v-if="bestGoods.length > 0"
							class="m...result-best"
						>
							<h3><b>BEST 아이템</b></h3>
							<div class="mm_scroller T=x">
								<div class="mm_product-list T=card">
									<ul>
										<li
											v-for="bestGood in bestGoods"
											:key="bestGood.id"
										>
											<goods-item
												class="T=pa"
												:goods="bestGood"
												force-badge
											></goods-item>
										</li>
									</ul>
								</div>
							</div>
						</section>
					</template>
				</template>

				<template v-else>
					<!-- 검색어 변환 -->
					<div
						v-if="correctInfo.is_corrected && correctInfo.origin_keyword"
						class="m...result-offer"
					>
						<p><strong>{{ correctInfo.corrected_keyword }}</strong>(으)로 자동 변환된<br> 검색 결과입니다</p>
						<a
							href="#"
							@click.prevent="changeKeyword(correctInfo.origin_keyword, true)"
						>
							<strong class="mm_text-variable">'{{ correctInfo.origin_keyword }}'</strong><b>검색 결과 보기</b><i class="ico_link"></i>
						</a>
					</div>

					<!-- 연관 검색어 -->
					<div
						v-if="relationKeywords.length > 0"
						class="m...result-keyword"
					>
						<div class="mm_scroller T=x">
							<ul>
								<li
									v-for="relatedKeyword in relationKeywords"
									:key="relatedKeyword"
								>
									<button
										type="button"
										@click="changeKeyword(relatedKeyword)"
									>
										<b>{{ relatedKeyword }}</b>
									</button>
								</li>
							</ul>
						</div>
					</div>

					<!-- 브랜드샵 -->
					<!-- (D) 브랜드명 검색 시 노출되는 버튼입니다. -->
					<template v-if="relatedBrand">
						<mm-link
							class="btn_brandshop"
							:to="{ name: 'BrandShop', params: { id: relatedBrand.id } }"
						>
							<strong>{{ relatedBrand.name }}</strong><b>브랜드샵 가기<i class="ico_link"></i></b>
						</mm-link>
					</template>

					<!-- 무한스크롤 상품 리스트 -->
					<!-- //무한스크롤 상품 리스트  -->
					<!-- 상품리스트 -->
					<filtered-goods-list
						:key="currentKeyword"
						:total-count="totalCount"
						:filterable="filterable"
						:goods-list-by-page="goodsListByPage"
						:init-params-for-command="paramsForCommand"
						:is-general-goods="false"
						:fetch-list="fetchList"
					>
					</filtered-goods-list>
				</template>
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useRecentSearchKeywordStore } from '$/stores/useRecentSearchKeywordStore';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useHotKeyword } from '$/composables/useHotKeyword';
	import { useRouteQueryCast } from '$/composables/useRouteQueryCast';
	import { useSearchEngine } from '$/composables/useSearchEngine';
	import { useSearchFilterable } from '$/composables/useSearchFilterable';
	import { useThirdPartyTracking } from '$/composables/useThirdPartyTracking';
	import Layout from '@/component/layout/Layout.vue';
	import FilteredGoodsList from '@/component/FilterGoodsList.vue';
	import GoodsItem from '@/component/GoodsItem.vue';
	import FormText from '@/component/form/FormText.vue';
	const { queryToString } = useRouteQueryCast();

	const currentKeyword = ref<string>('');
	const searchedKeyword = ref<string>(queryToString('keyword', ''));
	currentKeyword.value = searchedKeyword.value;
	const isChangedSearchKeyword = ref<boolean>(false);

	useThirdPartyTracking().searchKeyword(searchedKeyword.value);
	const { loading } = useGlobalPageContext();
	const { add: addSearchKeyword } = useRecentSearchKeywordStore();
	const { fetchList } = useSearchEngine();
	const { getContext } = useHotKeyword();
	const {
		startContext,
		bestGoods,
		filterable,
		goodsListByPage,
		paramsForCommand,
		totalCount,
		correctInfo,
		relationKeywords,
		relatedBrand,
		search,
	} = useSearchFilterable(fetchList);
	const { date } = useFormatter();

	await startContext();
	const hotKeywordContext = totalCount.value < 1 ? await getContext() : null;

	async function changeKeyword(keyword: string, doNotCorrect = false) {
		if (!keyword) {
			return;
		}

		loading.show();
		try {
			isChangedSearchKeyword.value = true;
			addSearchKeyword(keyword);
			paramsForCommand.value.keyword = keyword;
			await search(keyword, doNotCorrect);
			currentKeyword.value = keyword;
			searchedKeyword.value = keyword;
			useThirdPartyTracking().searchKeyword(keyword);
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}

	}
</script>
