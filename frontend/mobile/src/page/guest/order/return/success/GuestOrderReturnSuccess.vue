<template>
	<layout
		title="반품 신청 완료"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<h3 class="mm_heading m_popup-myclaim-title">
			<b>반품 신청이 완료되었습니다</b>
		</h3>

		<!-- 반품 상품 목록 -->
		<div class="mm_order-item">
			<div
				v-for="pack in returnedOrderPacks"
				:key="pack.shipping_rule_id"
				class="mm_order-item-seller"
			>
				<div class="mm_order...seller-head">
					<p class="text_ship">
						<i class="ico_ship"></i>
						<span :class="{'text_price': pack.paid_shipping_price > 0}">
							<strong>{{ pack.paid_shipping_price === 0 ? '무료배송' : number(pack.paid_shipping_price) }}</strong>
						</span>
					</p>
				</div>
				<div class="mm_product-list T=sm">
					<ul>
						<li
							v-for="orderItem in pack.order_items"
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
											<p class="text_price">
												<strong>{{ number(orderItem.total_paid_price + orderItem.total_point_used) }}</strong>
											</p>
											<p class="text_option">
												{{ optionText(orderItem.goods.option_name) }} / {{ orderItem.goods.ea }}개
											</p>
										</figcaption>
									</figure>
								</mm-link>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="mm_inner">
			<div class="mm_note">
				<ul>
					<li>위의 목록은 반품 신청하신 상품에 대한 금액만 표시됩니다.</li>
					<li>반품 사유 및 적립금 사용에 따라 실제 환불 금액은 다를 수 있습니다.</li>
				</ul>
			</div>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<div class="mm_flex T=equal">
						<mm-link
							class="mm_btn T=line T=dark"
							replace
							:to="{ name: 'Main' }"
						>
							<b>메인으로 이동</b>
						</mm-link>
						<mm-link
							class="mm_btn T=primary"
							:to="{ name: 'GuestOrderReturn' }"
							replace
						>
							<b>반품내역 확인</b>
						</mm-link>
					</div>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useFormatter } from '$/composables/useFormatter';
	import { useMyOrder } from '$/composables/useMyOrder';
	import Layout from '@/component/layout/Layout.vue';
	import Lazyload from '@/component/Lazyload.vue';

	const props = defineProps<{
		orderId: string
		returnIds: string[]
	}>();
	/** formatter composable */
	const { number, optionText } = useFormatter();

	const { getReturnDetail } = useMyOrder();

	const returnedOrderPacks = ref<ReturnOrderDetailSet['pack'][]>([]);

	props.returnIds.forEach(async (returnId) => {
		const returnDetail = await getReturnDetail(returnId, true);
		returnedOrderPacks.value = returnedOrderPacks.value.concat(returnDetail.pack);
	});
</script>