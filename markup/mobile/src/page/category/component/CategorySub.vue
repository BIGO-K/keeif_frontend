<template>
	<layout
		title="남성"
		:hide-title="true"
	>
		<template #after-title>
			<h1>
				<toggle
					class="btn_category"
					title="펼쳐보기"
					active-title="접어놓기"
					@click="isMenuOpen = !isMenuOpen"
				>
					<b>남성</b><i class="ico_dropdown"></i>
				</toggle>
			</h1>

			<!-- 대카테고리 -->
			<div
				v-if="isMenuOpen"
				class="mm_header-category"
			>
				<div class="mm_header-category-dim"></div>
				<div class="mm_scroller">
					<ul>
						<li>
							<a
								href="#"
								onclick="return false;"
							>
								<b>NEW</b>
							</a>
						</li>
						<li>
							<a
								class="S=category-on"
								href="#"
								title="선택됨"
								onclick="return false;"
							>
								<b>남성</b>
							</a>
						</li>
						<li>
							<a
								href="#"
								onclick="return false;"
							>
								<b>여성</b>
							</a>
						</li>
						<li>
							<a
								href="#"
								onclick="return false;"
							>
								<b>키즈</b>
							</a>
						</li>
						<li>
							<a
								href="#"
								onclick="return false;"
							>
								<b>캠핑</b>
							</a>
						</li>
						<li>
							<a
								href="#"
								onclick="return false;"
							>
								<b>화장품</b>
							</a>
						</li>
						<li>
							<a
								href="#"
								onclick="return false;"
							>
								<b>캐리어</b>
							</a>
						</li>
						<li>
							<a
								href="#"
								onclick="return false;"
							>
								<b>아울렛</b>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</template>

		<template #default>
			<!-- (D) 카테고리 선택 시 새로고침 되지 않고 페이지 내에서 카테고리 아래로 내용만 변경됩니다 -->
			<!-- 카테고리 -->
			<div class="m_product-category">
				<!-- 중카테고리 -->
				<div class="m_product-category-list">
					<div class="mm_scroller T=x">
						<!-- (D) 선택된 카테고리에 'S=category-on' 클래스와 '선택됨' 타이틀을 추가합니다 -->
						<ul>
							<li
								v-for="index in 10"
								:key="index"
							>
								<a
									:class="{ 'S=category-on': index === 1 }"
									href="#"
									:title="'선택됨'"
								>
									<b>중카테고리{{ index }}</b>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<!-- 소카테고리 -->
				<div class="m_product-category-list">
					<div class="mm_scroller T=x">
						<!-- (D) 선택된 카테고리에 'S=category-on' 클래스와 '선택됨' 타이틀을 추가합니다 -->
						<ul>
							<li
								v-for="index in 10"
								:key="index"
							>
								<a
									:class="{ 'S=category-on': index === 1 }"
									href="#"
									:title="'선택됨'"
								>
									<b>소카테고리{{ index }}</b>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<!-- 소카테고리 드롭다운 -->
				<dropdown :icon-class="'T=category T=bold'">
					<template #button>
						<b class="mm_ir-blind">소 카테고리</b>
					</template>
					<template #content>
						<!-- (D) 선택된 카테고리에 'S=category-on' 클래스와 '선택됨' 타이틀을 추가합니다 -->
						<div class="mm_scroller">
							<ul>
								<li
									v-for="index in 3"
									:key="index"
								>
									<a
										:class="{ 'S=category-on': index === 1 }"
										href="#"
										:title="'선택됨'"
									>
										<b>소카테고리{{ index }}</b>
									</a>
								</li>
							</ul>
						</div>
					</template>
				</dropdown>
			</div>

			<!-- 상품리스트 -->
			<div class="mm_inner">
				<!-- 카테고리 배너 -->
				<div class="m_product-category-banner">
					<i class="image_banner">
						<lazyload
							tag="img"
							src="/image/_sample/category_banner_1.jpg"
							alt="미니멀한 색상과 패턴 SEASON-OFF 단독 최대 60% 할인"
						></lazyload>
					</i>
				</div>

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
							></i><b class="mm_ir-blind">상품 정렬 변경</b>
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
	</layout>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import ProductItem from '@/component/ProductItem.vue';
	import Toggle from '@/component/Toggle.vue';
	import FormSelect from '@/component/form/FormSelect.vue';

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
	const isMenuOpen = ref(false);
	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
	const isLoading = false;
</script>