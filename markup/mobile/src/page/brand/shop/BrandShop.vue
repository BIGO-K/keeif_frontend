<template>
	<layout title="브랜드샵">
		<!-- 브랜드샵 상단 영역 -->
		<div class="m_brand-head">
			<h3 class="text_brand">
				<!-- (D) 어드민에서 브랜드 상단 이미지를 등록하지 않았을 경우 data-lazyload의 _src 경로에 'null'을 넣어주세요. 예) data-lazyload="{ '_src': 'null' }" -->
				<lazyload
					class="mm_bg-cover image_banner"
					src="/image/_sample/brand_wide_1.png"
					:is-error-image="false"
				></lazyload>
				<b>BRANDshop 엠몬스타</b>
			</h3>
			<p class="text_main">
				감도 깊은 취향 셀렉트 브랜드
			</p>
			<p class="text_sub">
				Exclusive 아이템부터 패션, 라이프스타일, 컬쳐까지 감도 깊은 디자인을 엠몬스타에서 만나보세요. 나를 위한 맞춤 셀렉트 브랜드 '엠몬스타'
			</p>
			<div class="m_brand-head-private">
				<ul>
					<li>
						<toggle class="btn_like">
							<i class="ico_like"></i><b>좋아요</b>
						</toggle>
					</li>
					<li>
						<button
							type="button"
							class="btn_sns-share"
							@click="shareStore.open"
						>
							<i class="ico_share"></i><b>공유하기</b>
						</button>
					</li>
				</ul>
			</div>
		</div>

		<showcase-brand v-if="true"></showcase-brand>

		<!-- 큐레이션 -->
		<section class="m_brand-curation">
			<h4><b>CURATION</b></h4>
			<div class="mm_product-item T=single">
				<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
					<figure>
						<lazyload
							class="mm_bg-cover image_product"
							src="/image/_sample/prod_x3_1.png"
						></lazyload>
						<figcaption>
							<p class="text_brand">
								엠몬스타
							</p>
							<p class="text_product">
								<span class="text_foreword">[단독]</span>남녀공용 블랙 숏 라이너 리버시블 점퍼
							</p>
							<p class="text_sale">
								25%
							</p>
							<p class="text_price">
								<strong>99,000</strong>
							</p>
							<div class="mm_tag-list">
								<dawn-tag v-if="true"></dawn-tag>
								<b class="mm_tag T=square T=dark">무료배송</b>
							</div>
						</figcaption>
					</figure>
				</mm-link>
				<toggle class="btn_like">
					<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
				</toggle>
			</div>
			<div class="mm_product-list T=card">
				<ul>
					<li>
						<div class="mm_product-item T=pa">
							<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
								<figure>
									<lazyload
										class="mm_bg-cover image_product"
										src="/image/_sample/prod_x3_1.png"
									></lazyload>
									<p class="text_product-status">
										품절임박
									</p>
									<figcaption>
										<p class="text_brand">
											남녀공용 블랙 숏 라이더 자켓
										</p>
										<p class="text_sale">
											20%
										</p>
										<p class="text_price">
											<strong>1,830,100</strong>
										</p>
									</figcaption>
								</figure>
							</mm-link>
							<toggle class="btn_like">
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</toggle>
						</div>
					</li>
					<li>
						<div class="mm_product-item T=pa">
							<a>
								<figure>
									<lazyload
										class="mm_bg-cover image_product"
										src="/image/_sample/prod_x3_2.png"
									></lazyload>
									<p class="text_soldout">
										SOLD OUT
									</p>
									<figcaption>
										<p class="text_brand">
											엠몬스타
										</p>
										<p class="text_sale">
											45%
										</p>
										<p class="text_price">
											<strong>276,000</strong>
										</p>
									</figcaption>
								</figure>
							</a>
							<toggle class="btn_like">
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</toggle>
						</div>
					</li>
					<li>
						<div class="mm_product-item T=pa">
							<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
								<figure>
									<lazyload
										class="mm_bg-cover image_product"
										src="/image/_sample/prod_x3_3.png"
									></lazyload>
									<figcaption>
										<p class="text_brand">
											엠몬스타
										</p>
										<p class="text_sale">
											25%
										</p>
										<p class="text_price">
											<strong>38,000</strong>
										</p>
									</figcaption>
								</figure>
							</mm-link>
							<toggle class="btn_like">
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</toggle>
						</div>
					</li>
				</ul>
			</div>
			<div class="mm_btn_box">
				<div class="mm_inline">
					<button
						type="button"
						class="mm_btn T=sm T=line T=dark"
					>
						<b>새로운 상품 더보기</b><i class="ico_more-load"></i>
					</button>
				</div>
			</div>
		</section>

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
	</layout>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import { useShareStore } from '$/stores/useShareStore';
	import Layout from '@/component/layout/Layout.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import ProductItem from '@/component/ProductItem.vue';
	import Toggle from '@/component/Toggle.vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import ShowcaseBrand from '@/feature/showcase/component/ShowcaseBrand.vue';
	import DawnTag from '@/custom/dawn/component/DawnTag.vue';

	const shareStore = useShareStore();

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