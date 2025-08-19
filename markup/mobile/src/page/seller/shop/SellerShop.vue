<template>
	<layout title="판매자샵">
		<div class="m_product-seller">
			<!-- BEST ITEM -->
			<section>
				<h3 class="mm_strapline">
					<b>BEST ITEM</b>
				</h3>
				<div class="mm_scroller T=x">
					<div class="mm_product-list T=card">
						<ul>
							<li
								v-for="item in 5"
								:key="item"
							>
								<product-item
									:is-sale-price="false"
									:is-react="false"
									:is-badge="false"
								></product-item>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<!-- NEW IN -->
			<section>
				<h3 class="mm_strapline">
					<b>NEW IN</b>
				</h3>
				<div class="mm_scroller T=x">
					<div class="mm_product-list T=card">
						<ul>
							<li
								v-for="item in 5"
								:key="item"
							>
								<product-item
									:is-sale-price="false"
									:is-react="false"
									:is-badge="false"
								></product-item>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>

		<!-- 상품리스트 -->
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

				<ul>
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
	</layout>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import Layout from '@/component/layout/Layout.vue';
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
	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
	const isLoading = false;
</script>