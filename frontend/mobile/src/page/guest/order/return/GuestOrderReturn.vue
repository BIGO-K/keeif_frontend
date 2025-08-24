<template>
	<p
		v-if="returnOrders.length < 1"
		class="mm_text-none"
	>
		<i class="ico_text-none"></i>반품 내역이 없습니다
	</p>

	<!-- 반품목록 -->
	<div
		v-else
		class="mm_order-list"
	>
		<article
			v-for="order in returnOrders"
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
												</p>
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
													{{ `${optionText(orderItem.goods.option_name)} / 1개` }}
												</p>
											</figcaption>
										</figure>
									</mm-link>
									<div class="mm_product-item-footer">
										<div class="mm_btn_box">
											<div class="mm_flex T=equal">
												<button
													v-if="orderItem.return_cancelable"
													type="button"
													class="mm_btn T=sm T=line"
													@click="bomReturnCancel(order.return_id, orderItem.return_target_id)"
												>
													<b>반품철회</b>
												</button>
												<button
													v-if="orderItem.return_delivery_trackable"
													type="button"
													class="mm_btn T=sm T=line T=variable"
													@click="overlayDeliveryTracking(orderItem.return_delivery_tracking_url || '')"
												>
													<b>반송조회</b>
												</button>
											</div>
										</div>
									</div>
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
	import { ref, defineAsyncComponent } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useMyOrder } from '$/composables/useMyOrder';
	import Lazyload from '@/component/Lazyload.vue';
	/** 페이지 전역 composable */
	const { loading, bom, openOverlay } = useGlobalPageContext();
	/** 주문 composable */
	const { getReturnStepOrders, cancelReturn } = useMyOrder();
	/** formatter composable */
	const { date, number, optionText } = useFormatter();

	/** [반품] 주문 리스트 */
	const returnOrders = ref<ReturnStepOrder[]>([]);

	/** [반품]주문 조회 */
	async function getReturnOrders() {
		try {
			returnOrders.value = await getReturnStepOrders(12);
		}
		catch (e) {
			useErrorAlert(e);
		}
	}

	/**
	 * [반품] 철회
	 * @param returnId
	 * @param returnTargetId
	 */
	async function bomReturnCancel(returnId: string, returnTargetId: number) {
		bom.confirm('반품 신청을 철회하시겠습니까?', async (flag) => {
			if (!flag) {
				return;
			}

			loading.show();
			try {
				await cancelReturn(returnId, returnTargetId);
				await getReturnOrders();
			}
			catch (e) {
				useErrorAlert(e);
			}
			finally {
				loading.hide();
			}
		});
	}

	/** 배송추적 overlay OPEN */
	function overlayDeliveryTracking(trackingUrl: string) {
		const component = defineAsyncComponent(() => import('@/component/ExternalOverlay.vue'));

		return openOverlay(component, {
			props: {
				title: '배송추적',
				src: trackingUrl,
			},
		});
	}

	await getReturnOrders();
</script>