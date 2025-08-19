<template>
	<div class="m_overlay-myorder-option">
		<div class="mm_note">
			<ul>
				<li>구매 당시 옵션 금액과 동일한 금액의 옵션만 교환 가능합니다.</li>
				<li>그 외 옵션으로 교환이 필요하실 경우 [주문 관리 &#62; 판매자 문의하기]를 통해 문의 바랍니다.</li>
			</ul>
		</div>
		<div class="mm_order-item">
			<div class="mm_order-item-seller">
				<div class="mm_order...seller-head">
					<h5><i class="ico_shop"></i><b>{{ sellerName }}</b></h5>
				</div>
				<div class="mm_product-list T=sm">
					<ul>
						<li
							v-for="orderItem in orderItems"
							:key="orderItem.id"
						>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: orderItem.goods.id } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											:src="orderItem.goods.thumbnail_url"
										></lazyload>
										<figcaption>
											<p class="text_brand">
												{{ orderItem.goods.brand_name }}
											</p>
											<p class="text_product">
												{{ orderItem.goods.name }}
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
								<div class="mm_product-item-footer">
									<form-select v-model.number="selected[orderItem.id]">
										<option>옵션을 선택하세요</option>
										<option
											v-for="option in orderItem.exchangeable_options"
											:key="option.id"
											:value="option.id"
											:disabled="
												(option.stock || 0) < 1
													|| (
														option.id == orderItem.goods.option_id
														&& !isSameOptionSelectable
													)
													|| !option.is_exchangeable
											"
										>
											{{ option.option_name }}
										</option>
									</form-select>
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
	import FormSelect from '@/component/form/FormSelect.vue';

	const props = defineProps<{
		orderItems: ExchangeableOrderItem[],
		isSameOptionSelectable: boolean,
		closer: CloseHandler<{ selected: { [orderItemId: string ]: number } }>
	}>();

	defineExpose<OverlayComponentExpose>({
		title: `옵션 변경`,
	});

	/** 전역 페이지 composable */
	const { bom } = useGlobalPageContext();
	/** formatter composable */
	const { number, optionText } = useFormatter();

	const selected = ref<{ [orderItemId: string ]: number }>({});

	const sellerName = computed(() => props.orderItems[0].seller_name);

	/** 적용 */
	function apply() {
		if (
			Object.keys(selected.value).length < 1
			|| Object.values(selected.value).some(optionId => [null, undefined, 0].includes(optionId))
		) {
			return bom.alert('옵션을 설정해주세요.');
		}

		bom.alert('옵션이 선택되었습니다.', () => {
			props.closer({ selected: selected.value });
		});
	}

	// 기존 선택 옵션 선택처리
	props.orderItems.forEach(item => {
		if (item.exchange_option) {
			const key: string = `${item.id}`;
			selected.value[key] = item.exchange_option.id;
		}
	});
</script>
