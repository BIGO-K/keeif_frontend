<template>
	<layout
		title="주문 반품"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<article class="mm_order-item">
			<h5><b>2022.05.14</b><strong>주문번호: 2005141142151234562</strong></h5>
			<div class="mm_order-item-seller">
				<div class="mm_order...seller-head">
					<p class="text_ship">
						<i class="ico_ship"></i><span class="text_price"><strong>2,500</strong></span>
					</p>
				</div>
				<div class="mm_product-list T=sm">
					<ul>
						<li>
							<form-check
								v-model="selectedItems"
								:value="returnItems[0]"
								label="상품 선택"
								:label-on-blind="true"
							></form-check>
							<p class="text_seller">
								<i class="ico_shop"></i>엠몬스타
							</p>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_1.png"
										>
										</lazyload>
										<figcaption>
											<p class="text_status">
												배송 완료
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
												베이지 FREE / 10개
											</p>
										</figcaption>
									</figure>
								</mm-link>
								<div class="mm_product-item-footer">
									<div class="mm_product...footer-indent">
										<p>반품 수량: 4개</p>
										<a
											class="mm_btn T=sm T=line T=primary"
											href="#"
											@click.prevent="overlayMyOrderPick"
										>
											<b>부분 선택</b>
										</a>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="mm_order-item-seller">
				<div class="mm_order...seller-head">
					<p class="text_ship">
						<i class="ico_ship"></i><span class="text_price"><strong>2,500</strong></span>
					</p>
				</div>
				<div class="mm_product-list T=sm">
					<ul>
						<li>
							<form-check
								v-model="selectedItems"
								:value="returnItems[1]"
								label="상품 선택"
								:label-on-blind="true"
							></form-check>
							<p class="text_seller">
								<i class="ico_shop"></i>엠몬스타
							</p>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_2.png"
										></lazyload>
										<figcaption>
											<p class="text_status">
												배송 완료
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
												베이지 FREE / 1개
											</p>
										</figcaption>
									</figure>
								</mm-link>
							</div>
						</li>
						<li>
							<form-check
								v-model="selectedItems"
								:value="returnItems[2]"
								label="상품 선택"
								:label-on-blind="true"
							></form-check>
							<p class="text_seller">
								<i class="ico_shop"></i>엠몬스타
							</p>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_5.png"
										></lazyload>
										<figcaption>
											<p class="text_status">
												결제 완료
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
												베이지 FREE / 10개
											</p>
										</figcaption>
									</figure>
								</mm-link>
								<div class="mm_product-item-footer">
									<div class="mm_product...footer-indent">
										<p>반품 수량: 4개</p>
										<a
											class="mm_btn T=sm T=line T=primary"
											href="#"
											@click.prevent="overlayMyOrderPick"
										>
											<b>부분 선택</b>
										</a>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</article>

		<!-- 반품신청 -->
		<div class="mm_inner">
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
					>
						<b>다음 단계로</b>
					</button>
				</div>
			</div>
			<div class="mm_note">
				<dropdown
					:is-active="true"
					icon-class="T=box"
				>
					<template #button>
						<i class="ico_info"></i><b>반품 주의사항</b>
					</template>
					<template #content>
						<ul>
							<li>주문 제작하신 상품 및 해외 배송 상품은 반품이 불가하여 리스트에 노출되지 않습니다.</li>
							<li>반품은 배송 완료 이후 7일 이내 신청 가능합니다.</li>
							<li>반품 사유별 배송비 부담이 상이합니다.</li>
							<li>묶음 반품의 경우 동일한 업체에 한해서 가능합니다.</li>
							<li>반품하실 상품을 발송하기 전에 한해서 반품 철회가 가능합니다.</li>
						</ul>
					</template>
				</dropdown>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, defineAsyncComponent } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import FormCheck from '@/component/form/FormCheck.vue';

	const layerContextStore = useLayerContextStore();

	function overlayMyOrderPick() {
		const component = defineAsyncComponent(() => import('@/page/mypage/order/pick/MyOrderPick.vue'));

		return layerContextStore.openOverlay(component);
	}

	// XXX 임시 인터페이스
	interface test {
		id: string;
	}
	const returnItems = ref<test[]>([
		{ id: '1' },
		{ id: '2' },
		{ id: '3' },
	]);
	const selectedItems = ref<test[]>(returnItems.value.filter(_item => !_item.id));
</script>