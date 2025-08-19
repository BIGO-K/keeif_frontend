<template>
	<p
		v-if="exchangeOrders.length < 1"
		class="mm_text-none"
	>
		<i class="ico_text-none"></i>교환 내역이 없습니다
	</p>
	<!-- 교환목록 -->
	<div
		v-else
		class="mm_order-list"
	>
		<article
			v-for="order in exchangeOrders"
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
													{{ optionText(orderItem.goods.option_name) }} / 1개
												</p>
											</figcaption>
										</figure>
									</mm-link>
									<div class="mm_product-item-footer">
										<p class="text_changed">
											<strong class="mm_text-variable">변경된 옵션</strong>
											<span>{{ optionText(orderItem.exchanged_option_name) }} / 1개</span>
										</p>
										<div class="mm_btn_box">
											<div class="mm_flex T=equal">
												<button
													v-if="orderItem.exchange_cancelable"
													type="button"
													class="mm_btn T=sm T=line"
													@click="bomExchangeCancel(order.exchange_id, orderItem.exchange_target_id)"
												>
													<b>교환철회</b>
												</button>
												<mm-link
													v-if="orderItem.to_return_switchable"
													class="mm_btn T=sm T=line"
													:to="{
														name: 'GuestOrderToReturnCreate',
														params: {
															exchange_id: order.exchange_id,
															exchange_target_id: orderItem.exchange_target_id,
														}
													}"
												>
													<b>반품전환</b>
												</mm-link>
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
	const { route, loading, bom, openOverlay } = useGlobalPageContext();
	/** 주문 composable */
	const { monthTabs, getExchangeStepOrders, cancelExchange } = useMyOrder();
	/** formatter composable */
	const { date, number, optionText } = useFormatter();

	/** [검색필터] 날짜 */
	const monthFilter = ref<number>(route.query.month ? Number(route.query.month) : monthTabs[0].value);

	/** [교환] 주문 리스트 */
	const exchangeOrders = ref<ExchangeStepOrder[]>([]);

	/** [교환]주문 조회 */
	async function getExchangeOrders() {
		loading.show();
		try {
			exchangeOrders.value = await getExchangeStepOrders(monthFilter.value);
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}


	/**
	 * [교환] 철회
	 * @param exchangeId
	 * @param exchangeTargetId
	 */
	async function bomExchangeCancel(exchangeId: string, exchangeTargetId: number) {
		bom.confirm('교환 신청을 철회하시겠습니까?', async (flag) => {
			if (!flag) {
				return;
			}

			loading.show();
			try {
				await cancelExchange(exchangeId, exchangeTargetId);
				await getExchangeOrders();
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
	/** [교환] 주문 리스트 조회. 날짜 검색필터 값 따라 재조회 */
	await getExchangeOrders();
</script>