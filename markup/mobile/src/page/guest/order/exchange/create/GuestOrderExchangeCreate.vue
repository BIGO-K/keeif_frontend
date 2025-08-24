<template>
	<layout
		title="주문 교환"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<!-- 주문목록 -->
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
								:value="exchangeItems[0]"
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
										<p>교환 수량</p>
										<form-select class="T=sm T=shortest">
											<option>1</option>
										</form-select>
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
								:value="exchangeItems[1]"
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
								:value="exchangeItems[2]"
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
										<p>교환 수량</p>
										<form-select class="T=sm T=shortest">
											<option>1</option>
										</form-select>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</article>

		<!-- 교환신청 -->
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
						<i class="ico_info"></i><b>교환 주의사항</b>
					</template>
					<template #content>
						<ul>
							<li>주문 제작하신 상품 및 해외 배송 상품은 교환이 불가하여 리스트에 노출되지 않습니다.</li>
							<li>교환은 배송 완료 이후 7일 이내 신청 가능합니다.</li>
							<li>교환 사유별 배송비 부담이 상이합니다.</li>
							<li>묶음 교환의 경우 동일한 업체에 한해서 가능합니다.</li>
							<li>교환하실 상품을 발송하기 전에 한해서 교환 철회가 가능합니다.</li>
						</ul>
					</template>
				</dropdown>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import FormSelect from '@/component/form/FormSelect.vue';

	// XXX 임시 인터페이스
	interface test {
		id: string;
	}
	const exchangeItems = ref<test[]>([
		{ id: '1' },
		{ id: '2' },
		{ id: '3' }
	]);
	const selectedItems = ref<test[]>(exchangeItems.value.filter(_item => !_item.id));
</script>