<template>
	<layout
		title="교환 신청 완료"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<h3 class="mm_heading m_popup-myclaim-title">
			<b>교환 신청이 완료되었습니다</b>
		</h3>

		<!-- 교환 상품 목록 -->
		<div class="mm_order-item">
			<div class="mm_order-item-seller">
				<div class="mm_order...seller-head">
					<p class="text_ship">
						<i class="ico_ship"></i>
						<span :class="{'text_price': exchangeOrderPack.paid_shipping_price > 0}">
							<strong>{{ exchangeOrderPack.paid_shipping_price === 0 ? '무료배송' : number(exchangeOrderPack.paid_shipping_price) }}</strong>
						</span>
					</p>
				</div>
				<div class="mm_product-list T=sm">
					<ul>
						<li
							v-for="orderItem in exchangeOrderPack.order_items"
							:key="orderItem.id"
						>
							<p class="text_seller">
								<i class="ico_shop"></i>{{ orderItem.seller_name }}
							</p>
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
											<p class="text_option">
												{{ optionText(orderItem.goods.option_name) }} / {{ orderItem.goods.ea }}개
											</p>
										</figcaption>
									</figure>
								</mm-link>
								<div class="mm_product-item-footer">
									<template
										v-for="partialItem in orderItem.items"
										:key="partialItem.id"
									>
										<p
											v-if="partialItem.exchanged_option_name"
											class="text_changed"
										>
											<strong class="mm_text-variable">변경된 옵션</strong>
											<span>{{ optionText(partialItem.exchanged_option_name) }} / 1개</span>
										</p>
									</template>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="mm_inner">
			<div class="mm_foot">
				<div class="mm_btn_box">
					<div class="mm_flex T=equal">
						<mm-link
							class="mm_btn T=line T=dark"
							:to="{ name: 'Main' }"
							replace
						>
							<b>메인으로 이동</b>
						</mm-link>
						<mm-link
							class="mm_btn T=primary"
							:to="{ name: 'GuestOrderExchange' }"
							replace
						>
							<b>교환내역 확인</b>
						</mm-link>
					</div>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { useFormatter } from '$/composables/useFormatter';
	import { useMyOrder } from '$/composables/useMyOrder';
	import Layout from '@/component/layout/Layout.vue';
	import Lazyload from '@/component/Lazyload.vue';

	const props = defineProps<{
		orderId: string
		exchangeId: string
	}>();
	/** formatter composable */
	const { number, optionText } = useFormatter();

	const { getExchangeDetail } = useMyOrder();
	const exchangeOrderPack = (await getExchangeDetail(props.exchangeId, true)).pack;
</script>