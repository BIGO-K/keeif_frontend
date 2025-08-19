<template>
	<p
		v-if="cancelOrders.length < 1"
		class="mm_text-none"
	>
		<i class="ico_text-none"></i>취소 내역이 없습니다
	</p>
	<!-- 취소목록 -->
	<div
		v-else
		class="mm_order-list"
	>
		<article
			v-for="order in cancelOrders"
			:key="order.order_id"
			class="mm_order-item"
		>
			<h5>
				<b>{{ date(order.ordered_at, 'YYYY.MM.DD') }}</b>
				<strong>주문번호: {{ order.order_id }}</strong>
			</h5>
			<mm-link
				class="btn_detail"
				:to="{ name: 'GuestOrderDetail', params: { id: order.order_id } }"
			>
				<b>주문상세</b><i class="ico_link"></i>
			</mm-link>

			<template
				v-for="pack in order.packs"
				:key="pack.shipping_rule_id"
			>
				<div
					v-for="seller in pack.sellers"
					:key="seller.id"
					class="mm_order-item-seller"
				>
					<div class="mm_order...seller-head">
						<h5><i class="ico_shop"></i><b>{{ seller.name }}</b></h5>
					</div>
					<div class="mm_product-list T=sm">
						<ul>
							<li
								v-for="orderItem in seller.order_items"
								:key="orderItem.id"
							>
								<div class="mm_product-item">
									<mm-link :to="{ name: 'ProductDetail', params: { id: orderItem.goods.id } }">
										<figure>
											<lazyload
												class="mm_bg-cover image_product"
												:src="orderItem.goods.thumbnail_url"
											>
											</lazyload>
											<figcaption>
												<p class="text_status">
													{{ orderItem.order_status_label }}
													<b
														v-if="orderItem.refund_status_label"
														class="text_refund"
													>{{ orderItem.refund_status_label }}</b>
												</p>
												<p class="text_brand">
													{{ orderItem.goods.brand_name }}
												</p>
												<p class="text_product">
													{{ orderItem.goods.name }}
												</p>
												<p class="text_price">
													<strong>{{ number(orderItem.paid_price) }}</strong>
												</p>
												<p class="text_option">
													{{ `${optionText(orderItem.goods.option_name)} / 1개` }}
												</p>
											</figcaption>
										</figure>
									</mm-link>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</template>
		</article>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useFormatter } from '$/composables/useFormatter';
	import { useMyOrder } from '$/composables/useMyOrder';
	import Lazyload from '@/component/Lazyload.vue';

	/** formatter composable */
	const { date, number, optionText } = useFormatter();

	/** [취소] 주문 리스트 */
	const cancelOrders = ref<CancelStepOrder[]>(await useMyOrder().getCancelStepOrders(12));
</script>