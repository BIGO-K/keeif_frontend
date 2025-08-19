<template>
	<!-- 주문목록 -->
	<p
		v-if="normalOrders.length < 1"
		class="mm_text-none"
	>
		<i class="ico_text-none"></i>주문 내역이 없습니다
	</p>

	<div
		v-else
		class="mm_order-list"
	>
		<article
			v-for="order in normalOrders"
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
													<strong>{{ number(orderItem.paid_price) }}</strong>
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
												<mm-link
													v-if="orderItem.cancelable"
													class="mm_btn T=sm T=line"
													:to="{
														name: 'GuestOrderCancelCreate',
														params: {
															order_id: order.order_id,
															item_id: orderItem.id
														}
													}"
												>
													<b>주문취소</b>
												</mm-link>
												<button
													v-if="orderItem.receipt_confirmable"
													type="button"
													class="mm_btn T=sm"
													@click="bomReceiptConfirm(orderItem.id)"
												>
													<b>수취확인</b>
												</button>
												<mm-link
													v-if="orderItem.exchangeable"
													class="mm_btn T=sm T=line"
													:to="{
														name: 'GuestOrderExchangeCreate',
														params: { order_id: order.order_id, item_id: orderItem.id }
													}"
												>
													<b>교환신청</b>
												</mm-link>
												<mm-link
													v-if="orderItem.returnable"
													class="mm_btn T=sm T=line"
													:to="{
														name: 'GuestOrderReturnCreate',
														params: { order_id: order.order_id, item_id: orderItem.id }
													}"
												>
													<b>반품신청</b>
												</mm-link>
												<button
													v-if="orderItem.delivery_trackable"
													type="button"
													class="mm_btn T=sm T=line T=variable"
													@click="overlayDeliveryTracking(orderItem.delivery_tracking_url || '')"
												>
													<b>배송조회</b>
												</button>
												<a
													v-if="orderItem.purchase_confirmable"
													class="mm_btn T=sm T=variable"
													href="#"
													@click.prevent="overlayMyOrderConfirm(seller.name, orderItem)"
												>
													<b>구매확정</b>
												</a>
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
	import { defineAsyncComponent, ref } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useMyOrder } from '$/composables/useMyOrder';
	import Lazyload from '@/component/Lazyload.vue';

	/** 페이지 전역 composable */
	const { router, loading, bom, openOverlay } = useGlobalPageContext();
	/** formatter composable */
	const { date, number, optionText, externalLink } = useFormatter();
	/** 주문 composable */
	const {
		getNormalStepOrders,
		confirmReceipt,
	} = useMyOrder();

	/** 주문 리스트 */
	const normalOrders = ref<NormalStepOrder[]>([]);
	/** 구매확정 모달 OPEN */
	function overlayMyOrderConfirm(sellerName: string, orderItem: NormalStepOrderItem) {
		const component = defineAsyncComponent(() => import('@/page/mypage/order/confirm/MyOrderConfirm.vue'));

		return openOverlay(component, {
			props: {
				sellerName,
				orderItem,
			},
			onClose: getOrders,
		});
	}

	/**
	 * 수취확인처리
	 * @param orderItemId
	 */
	function bomReceiptConfirm(orderItemId: number) {
		bom.confirm('수취 확인 시 배송 완료 처리되며 되돌릴 수 없습니다. 수취 확인을 하시겠습니까?', async (flag) => {
			if (!flag) {
				return;
			}

			loading.show();
			try {
				await confirmReceipt(orderItemId);
				await getOrders();
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

	/** 주문 조회 */
	async function getOrders() {
		loading.show();
		try {
			normalOrders.value = await getNormalStepOrders(12);
		}
		catch (e) {
			useErrorAlert(e, {
				alertCallback: () => {
					router.go(-1);
				},
			});
		}
		finally {
			loading.hide();
		}
	}

	/** 주문 리스트 조회 */
	await getOrders();
</script>