<template>
	<div class="m_overlay-myorder-option">
		<div class="mm_order-item">
			<form-check
				v-model="allSelected"
				label="전체선택"
			></form-check>
			<div class="mm_order-item-seller">
				<div class="mm_order...seller-head">
					<h5><i class="ico_shop"></i><b>{{ orderItemSet.seller_name }}</b></h5>
				</div>
				<div class="mm_product-list T=sm">
					<ul>
						<li
							v-for="orderItem in orderItemSet.items"
							:key="orderItem.id"
						>
							<form-check
								v-model="selected"
								:value="orderItem[valueName]"
								label="상품 선택"
								:label-on-blind="true"
							></form-check>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: orderItemSet.goods.id } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											:src="orderItemSet.goods.thumbnail_url"
										></lazyload>
										<figcaption>
											<p class="text_brand">
												{{ orderItemSet.goods.brand_name }}
											</p>
											<p class="text_product">
												{{ orderItemSet.goods.name }}
											</p>
											<p class="text_price">
												<strong>{{ number(orderItem.paid_price + orderItem.point_used) }}</strong>
											</p>
											<p class="text_option">
												{{ optionText(orderItem.goods.option_name) }} / 1개
											</p>
										</figcaption>
									</figure>
								</mm-link>
								<div
									v-if="orderItem.used_coupon_title"
									class="mm_product-item-footer"
								>
									<div class="mm_form-select T=sm">
										<label>
											<span class="text_readonly">{{ orderItem.used_coupon_title }}</span>
											<i class="ico_form-select"></i>
										</label>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="mm_foot">
			<div class="mm_inner">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
						@click="apply"
					>
						<b>적용하기</b>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import Lazyload from '@/component/Lazyload.vue';
	import FormCheck from '@/component/form/FormCheck.vue';

	const props = withDefaults(defineProps<{
		orderItemSet: CancelableOrderItemSet|ExchangeableOrderItemSet
		valueName?: keyof (CancelableOrderItemSet|ExchangeableOrderItemSet)['items'][number]
		legacySelected: number[]
		closer: CloseHandler<{ selected: number[]}>
	}>(), {
		valueName: 'id',
	});
	defineExpose<OverlayComponentExpose>({
		title: `부분 선택`,
	});

	/** 전역 페이지 composable */
	const { bom } = useGlobalPageContext();
	/** formatter composable */
	const { number, optionText } = useFormatter();

	/** 전체선택 여부 */
	const allSelected = computed({
		get: () => props.orderItemSet.items.length == selected.value.length,
		set: (val: boolean) => {
			selected.value = val
				? props.orderItemSet.items.map(orderItem => Number(orderItem[props.valueName]))
				: [];
		},
	});

	/** 선택된 주문상품 */
	const selected = ref<number[]>(props.legacySelected);

	/** 적용 */
	function apply() {
		if (selected.value.length < 1) {
			return bom.alert('상품을 선택해주세요.');
		}

		bom.alert('수량에 적용되었습니다.', () => {
			props.closer({ selected: selected.value });
		});
	}
</script>