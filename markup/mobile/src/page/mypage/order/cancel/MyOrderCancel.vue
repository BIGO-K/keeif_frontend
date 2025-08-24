<template>
	<!-- 주문목록 정렬 -->
	<div class="m_myorder-sort">
		<form-select
			:v-model="sortRange"
			class="T=sm"
		>
			<option>최근 1개월</option>
		</form-select>
	</div>

	<!-- 주문목록 -->
	<p
		v-if="items.length < 1"
		class="mm_text-none"
	>
		<i class="ico_text-none"></i>취소 내역이 없습니다
	</p>

	<div
		v-else
		class="mm_order-list"
	>
		<article class="mm_order-item">
			<h5><b>2023.00.00</b><strong>주문번호: 2005141142151234562</strong></h5>
			<mm-link
				class="btn_detail"
				:to="{ name: 'MyOrderDetail', params: { id: 123 } }"
			>
				<b>주문상세</b><i class="ico_link"></i>
			</mm-link>
			<div class="mm_order-item-seller">
				<div class="mm_order...seller-head">
					<h5><i class="ico_shop"></i><b>엠몬스타</b></h5>
					<a
						href="#"
						@click.prevent="overlayMyInquirySellerCreate"
					>
						<b>판매자 문의하기</b>
					</a>
				</div>
				<div class="mm_product-list T=sm">
					<ul>
						<li>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_3.png"
										></lazyload>
										<figcaption>
											<p class="text_status">
												취소 요청<b class="text_refund">환불 요청</b>
											</p>
											<p class="text_brand">
												엠몬스타
											</p>
											<p class="text_product">
												[매긴나잇브릿지]플리츠 디테일 드레스
											</p>
											<p class="text_price">
												<strong>54,800</strong>
											</p>
											<p class="text_option">
												모로오렌지 클렌즈 / 60일분 2Box / 마이해빗 보틀 1 (-37,000원) / 1개
											</p>
										</figcaption>
									</figure>
								</mm-link>
							</div>
						</li>
						<li>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_2.png"
										></lazyload>
										<figcaption>
											<p class="text_status">
												취소 요청<b class="text_refund">환불 요청</b>
											</p>
											<p class="text_brand">
												엠몬스타
											</p>
											<p class="text_product">
												[매긴나잇브릿지]플리츠 디테일 드레스
											</p>
											<p class="text_price">
												<strong>54,800</strong>
											</p>
											<p class="text_option">
												모로오렌지 클렌즈 / 60일분 2Box / 마이해빗 보틀 1 (-37,000원) / 1개
											</p>
										</figcaption>
									</figure>
								</mm-link>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="mm_order-item-seller">
				<div class="mm_order...seller-head">
					<h5><i class="ico_shop"></i><b>엠몬스타</b></h5>
					<a
						href="#"
						@click.prevent="overlayMyInquirySellerCreate"
					>
						<b>판매자 문의하기</b>
					</a>
				</div>
				<div class="mm_product-list T=sm">
					<ul>
						<li>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_1.png"
										></lazyload>
										<figcaption>
											<p class="text_status">
												취소 요청<b class="text_refund">환불 요청</b>
											</p>
											<p class="text_brand">
												엠몬스타
											</p>
											<p class="text_product">
												[매긴나잇브릿지]플리츠 디테일 드레스
											</p>
											<p class="text_price">
												<strong>54,800</strong>
											</p>
											<p class="text_option">
												모로오렌지 클렌즈 / 60일분 2Box / 마이해빗 보틀 1 (-37,000원) / 1개
											</p>
										</figcaption>
									</figure>
								</mm-link>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</article>
		<article class="mm_order-item">
			<h5><b>2023.00.00</b><strong>주문번호: 2005141142151234562</strong></h5>
			<mm-link
				class="btn_detail"
				:to="{ name: 'MyOrderDetail', params: { id: 123 } }"
			>
				<b>주문상세</b><i class="ico_link"></i>
			</mm-link>
			<div class="mm_order-item-seller">
				<div class="mm_order...seller-head">
					<h5><i class="ico_shop"></i><b>엠몬스타</b></h5>
					<a
						href="#"
						@click.prevent="overlayMyInquirySellerCreate"
					>
						<b>판매자 문의하기</b>
					</a>
				</div>
				<div class="mm_product-list T=sm">
					<ul>
						<li>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_2.png"
										></lazyload>
										<figcaption>
											<p class="text_status">
												취소 완료<b class="text_refund">환불 완료</b>
											</p>
											<p class="text_brand">
												엠몬스타
											</p>
											<p class="text_product">
												[매긴나잇브릿지]플리츠 디테일 드레스
											</p>
											<p class="text_price">
												<strong>54,800</strong>
											</p>
											<p class="text_option">
												모로오렌지 클렌즈 / 60일분 2Box / 마이해빗 보틀 1 (-37,000원) / 1개
											</p>
										</figcaption>
									</figure>
								</mm-link>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</article>
	</div>
</template>

<script setup lang="ts">
	import { ref, defineAsyncComponent } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import Lazyload from '@/component/Lazyload.vue';
	import FormSelect from '@/component/form/FormSelect.vue';

	const layerContextStore = useLayerContextStore();

	function overlayMyInquirySellerCreate() {
		const component = defineAsyncComponent(() => import('@/page/mypage/inquiry/seller/create/MyInquirySellerCreate.vue'));

		return layerContextStore.openOverlay(component);
	}

	const sortRange = ref('');
	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
</script>