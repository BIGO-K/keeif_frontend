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
				placeholder="검색어를 입력하세요"
			></form-text>
		</template>

		<template #default>
			<div class="m_popup-search-result">
				<template v-if="!isResult">
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

					<!-- 인기 검색어 -->
					<div class="mm_inner">
						<section class="m_popup-search-list">
							<h3><b>인기 검색어</b></h3>
							<div class="mm_scroller">
								<ol>
									<li>
										<mm-link :to="{ name: 'SearchResult' }">
											<b>엠몬스타</b>
											<i
												class="ico_rank-up"
												title="상승"
											></i>
											<b class="text_rank">2</b>
										</mm-link>
									</li>
									<li>
										<mm-link :to="{ name: 'SearchResult' }">
											<b>후드티</b>
											<i
												class="ico_rank-down"
												title="하락"
											></i>
											<b class="text_rank">1</b>
										</mm-link>
									</li>
									<li>
										<mm-link :to="{ name: 'SearchResult' }">
											<b>원피스</b>
											<i
												class="ico_rank-down"
												title="하락"
											></i>
											<b class="text_rank">1</b>
										</mm-link>
									</li>
									<li>
										<mm-link :to="{ name: 'SearchResult' }">
											<b>첼시부츠</b>
											<i
												class="ico_rank-new"
												title="신규"
											></i>
										</mm-link>
									</li>
									<li>
										<mm-link :to="{ name: 'SearchResult' }">
											<b>가디건</b>
											<i
												class="ico_rank-unchanged"
												title="변동없음"
											></i>
										</mm-link>
									</li>
									<li>
										<mm-link :to="{ name: 'SearchResult' }">
											<b>맨투맨</b>
											<i
												class="ico_rank-up"
												title="상승"
											></i>
											<b class="text_rank">8</b>
										</mm-link>
									</li>
									<li>
										<mm-link :to="{ name: 'SearchResult' }">
											<b>셔츠</b>
											<i
												class="ico_rank-unchanged"
												title="변동없음"
											></i>
										</mm-link>
									</li>
									<li>
										<mm-link :to="{ name: 'SearchResult' }">
											<b>자켓</b>
											<i
												class="ico_rank-down"
												title="하락"
											></i>
											<b class="text_rank">3</b>
										</mm-link>
									</li>
									<li>
										<mm-link :to="{ name: 'SearchResult' }">
											<b>양말</b>
											<i
												class="ico_rank-new"
												title="신규"
											></i>
										</mm-link>
									</li>
									<li>
										<mm-link :to="{ name: 'SearchResult' }">
											<b>데님</b>
											<i
												class="ico_rank-up"
												title="상승"
											></i>
											<b class="text_rank">122</b>
										</mm-link>
									</li>
								</ol>
							</div>
							<div class="m...list-foot">
								<p>2021.00.00 00:00 기준</p>
							</div>
						</section>
					</div>

					<!-- best 아이템 -->
					<section class="m...result-best">
						<h3><b>BEST 아이템</b></h3>
						<div class="mm_scroller T=x">
							<div class="mm_product-list T=card">
								<ul>
									<li
										v-for="item in 5"
										:key="item"
									>
										<product-item class="T=pa"></product-item>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</template>

				<template v-else>
					<!-- 검색어 변환 -->
					<div class="m...result-offer">
						<p><strong>티셔츠</strong>(으)로 자동 변환된<br> 검색 결과입니다</p>
						<mm-link :to="{ name: 'SearchResult' }">
							<strong class="mm_text-variable">'xltucm'</strong><b>검색 결과 보기</b><i class="ico_link"></i>
						</mm-link>
					</div>

					<!-- 연관 검색어 -->
					<div class="m...result-keyword">
						<div class="mm_scroller T=x">
							<ul>
								<li>
									<button type="button">
										<b>후드 티셔츠</b>
									</button>
								</li>
								<li>
									<button type="button">
										<b>맨투맨 티셔츠</b>
									</button>
								</li>
								<li>
									<button type="button">
										<b>반팔 티셔츠</b>
									</button>
								</li>
								<li>
									<button type="button">
										<b>롱슬리브 티셔츠</b>
									</button>
								</li>
								<li>
									<button type="button">
										<b>기모 티셔츠</b>
									</button>
								</li>
								<li>
									<button type="button">
										<b>프린팅 티셔츠</b>
									</button>
								</li>
							</ul>
						</div>
					</div>

					<!-- 브랜드샵 -->
					<!-- (D) 브랜드명 검색 시 노출되는 버튼입니다. -->
					<mm-link
						class="btn_brandshop"
						:to="{ name: 'BrandShop', params: { id: 123 } }"
					>
						<strong>엠몬스타</strong><b>브랜드샵 가기<i class="ico_link"></i></b>
					</mm-link>

					<div class="mm_inner">
						<div
							class="mm_product-list"
							:class="{ 'T=skeleton': isLoading }"
						>
							<div class="mm_product-list-head">
								<p class="text_total">
									<strong>8,960</strong>개
								</p>
								<form-select
									:v-model="sortProductFilter"
									icon-class="T=sm"
								>
									<option>판매순</option>
									<option>신상품순</option>
									<option>낮은가격순</option>
									<option>높은가격순</option>
									<option>할인율 높은순</option>
									<option>리뷰 많은순</option>
								</form-select>
								<toggle
									class="btn_array"
									:is-active="true"
									active-class="T=card"
									title="리스트형"
									active-title="카드형"
									parent-selector=".mm_product-list"
									@toggle="toggleStyleProduct"
								>
									<i
										class="ico_array"
										:class="isSortCard ? 'T=wide' : 'T=card'"
									></i>
									<b class="mm_ir-blind">상품 정렬 변경</b>
								</toggle>
								<!-- (D) 필터에 선택된 사항이 있을 경우 'btn_filter'에 'S=filter-on' 클래스를 추가합니다 -->
								<a
									href="#"
									class="btn_filter"
									@click.prevent="overlayCategoryFilter"
								>
									<i class="ico_filter"></i><b>필터</b>
								</a>
							</div>

							<ul v-if="isLoading">
								<li>
									<div class="mm_product-item">
										<i class="image_product"></i>
										<div class="mm_product-item-info">
											<p class="text_brand"></p>
											<p class="text_product"></p>
											<p class="text_price"></p>
										</div>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<i class="image_product"></i>
										<div class="mm_product-item-info">
											<p class="text_brand"></p>
											<p class="text_product"></p>
											<p class="text_price"></p>
										</div>
									</div>
								</li>
							</ul>

							<p
								v-if="items.length < 1"
								class="mm_text-none"
							>
								<i class="ico_text-none"></i>등록된 상품이 없습니다
							</p>

							<ul v-else>
								<li
									v-for="item in 5"
									:key="item"
								>
									<product-item class="T=pa"></product-item>
								</li>
							</ul>
						</div>

						<!-- 하단더보기 -->
						<div
							v-if="items.length > 5"
							class="mm_foot"
						>
							<div class="mm_btn_box">
								<div class="mm_inline">
									<button
										type="button"
										class="mm_btn T=sm T=line btn_more"
									>
										<b>상품 리스트 더보기</b><i class="ico_more"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</template>
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import Layout from '@/component/layout/Layout.vue';
	import ProductItem from '@/component/ProductItem.vue';
	import Toggle from '@/component/Toggle.vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import FormText from '@/component/form/FormText.vue';

	const isSortCard = ref(true);
	const toggleStyleProduct = (_isActive: boolean) => {
		isSortCard.value = _isActive;
		console.log('상품정렬 토글', _isActive);
	};

	const layerContextStore = useLayerContextStore();
	function overlayCategoryFilter() {
		const component = defineAsyncComponent(() => import('@/page/category/filter/CategoryFilter.vue'));

		return layerContextStore.openOverlay(component);
	}

	const sortProductFilter = ref('');
	const isResult = true;
	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
	const isLoading = false;
</script>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->
<!--
	<script>
	// 검색어 자동완성 노출
	(function () {

	mm.event.on('.mm_header .textfield', 'keyup change', function (__e) {

	var $auto = mm.find('.m_popup-search-auto')[0];

	if (__e.target.value) $auto.classList.add('S=auto-on');
	else $auto.classList.remove('S=auto-on');

	});

	})();
	</script>
-->