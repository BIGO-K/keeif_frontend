<template>
	<!-- 주문목록 정렬 -->
	<div class="m_myorder-sort">
		<form-select
			v-model.number="monthFilter"
			class="T=sm"
		>
			<option
				v-for="month in monthTabs"
				:key="month.value"
				:value="month.value"
			>
				{{ month.label }}
			</option>
		</form-select>
	</div>

	<!-- 주문목록 -->
	<p
		v-if="cancelOrders.length < 1"
		class="mm_text-none"
	>
		<i class="ico_text-none"></i>취소 내역이 없습니다
	</p>

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
				:to="{ name: 'MyOrderDetail', params: { id: order.order_id } }"
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
						<a
							href="#"
							@click.prevent="overlayMyInquirySellerCreate(order.order_id, seller)"
						>
							<b>판매자 문의하기</b>
						</a>
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
											></lazyload>
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
													<strong>{{ number(orderItem.paid_price + orderItem.point_used) }}</strong>
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
	import { ref, defineAsyncComponent, watch } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useMyOrder } from '$/composables/useMyOrder';
	import Lazyload from '@/component/Lazyload.vue';
	import FormSelect from '@/component/form/FormSelect.vue';

	/** 페이지 전역 composable */
	const { route, router, loading, openOverlay } = useGlobalPageContext();
	/** 주문 composable */
	const { monthTabs, getCancelStepOrders } = useMyOrder();
	/** formatter composable */
	const { date, number, optionText } = useFormatter();

	/** [검색필터] 날짜 */
	const monthFilter = ref<number>(route.query.month ? Number(route.query.month) : monthTabs[0].value);

	/** [취소] 주문 리스트 */
	const cancelOrders = ref<CancelStepOrder[]>([]);

	/** 판매자 문의 모달 OPEN */
	function overlayMyInquirySellerCreate(orderId: string, seller: QnaSeller) {
		const component = defineAsyncComponent(() => import('@/page/mypage/inquiry/seller/create/MyInquirySellerCreate.vue'));

		return openOverlay(component, {
			props: {
				orderId,
				seller: {
					id: seller.id,
					name: seller.name,
					tel: seller.tel,
				},
			},
		});
	}

	/** [취소] 주문 조회 */
	async function getCancelOrders() {
		loading.show();
		try {
			cancelOrders.value = await getCancelStepOrders(monthFilter.value);
			router.replace({
				path: route.path,
				query: {
					month: monthFilter.value,
				},
			});
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

	/** [취소] 주문 리스트 조회. 날짜 검색필터 값 따라 재조회 */
	await getCancelOrders();
	watch(monthFilter, getCancelOrders);
</script>