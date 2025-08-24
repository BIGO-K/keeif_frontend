<template>
	<!-- 주문목록 정렬 -->
	<div class="m_myorder-sort">
		<form-select
			v-model.number="filter.month"
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
		<form-select
			v-model.number="filter.statusCode"
			class="T=sm"
		>
			<option :value="null">
				주문상태 전체
			</option>
			<option
				v-for="status in statusCodes"
				:key="status.code"
				:value="status.code"
			>
				{{ status.label }}
			</option>
		</form-select>
	</div>

	<!-- (D) 주문 필터가 [전체, 배송중, 배송완료] 상태 일때만 노출합니다. -->
	<div
		v-if="normalOrders.length > 0"
		class="mm_note"
	>
		<ul>
			<dawn-notice></dawn-notice>
		</ul>
	</div>

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
												<dawn-tag v-if="pack.is_dawn_delivery"></dawn-tag>
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
												<mm-link
													v-if="orderItem.cancelable"
													class="mm_btn T=sm T=line"
													:to="{
														name: 'MyOrderCancelCreate',
														params: { order_id: order.order_id, item_id: orderItem.id }
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
												<button
													v-if="orderItem.delivery_trackable"
													type="button"
													class="mm_btn T=sm T=line T=variable"
													@click="overlayDeliveryTracking(orderItem.delivery_tracking_url || '')"
												>
													<b>배송조회</b>
												</button>
												<mm-link
													v-if="orderItem.exchangeable"
													class="mm_btn T=sm T=line"
													:to="{
														name: 'MyOrderExchangeCreate',
														params: { order_id: order.order_id, item_id: orderItem.id }
													}"
												>
													<b>교환신청</b>
												</mm-link>
												<mm-link
													v-if="orderItem.returnable"
													class="mm_btn T=sm T=line"
													:to="{
														name: 'MyOrderReturnCreate',
														params: { order_id: order.order_id, item_id: orderItem.id }
													}"
												>
													<b>반품신청</b>
												</mm-link>
												<a
													v-if="orderItem.purchase_confirmable"
													class="mm_btn T=sm T=variable"
													href="#"
													@click.prevent="overlayMyOrderConfirm(seller.name, orderItem)"
												>
													<b>구매확정</b>
												</a>
												<a
													v-if="orderItem.review_writable"
													class="mm_btn T=sm T=line T=variable"
													href="#"
													@click.prevent="overlayMyReviewCreate(seller.order_items, order.order_id)"
												>
													<b>리뷰 쓰기</b>
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
	import { ref, defineAsyncComponent, watch, computed } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useMyOrder } from '$/composables/useMyOrder';
	import Lazyload from '@/component/Lazyload.vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import DawnNotice from '@/custom/dawn/component/DawnMyNotice.vue';
	import DawnTag from '@/custom/dawn/component/DawnTag.vue';

	/** 페이지 전역 composable */
	const { route, router, loading, bom, openOverlay } = useGlobalPageContext();
	/** 주문 composable */
	const {
		monthTabs,
		getNormalStepStates,
		getNormalStepOrders,
		confirmReceipt,
	} = useMyOrder();
	/** formatter composable */
	const { date, number, optionText } = useFormatter();

	/** 주문상태코드 리스트 */
	const statusCodes = await getNormalStepStates();

	/** 검색 필터 */
	const filter = ref<{
		statusCode: Nullable<number>
		month: number
	}>({
		statusCode: route.query.status_code ? Number(route.query.status_code) : null,
		month: route.query.month ? Number(route.query.month) : monthTabs[0].value,
	});

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
	/**
	 * 판매자 문의 모달 OPEN
	 * @param orderId
	 * @param sellerId
	 */
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

	/** 리뷰 작성 모달 OPEN */
	function overlayMyReviewCreate(orderItems: NormalStepOrderItem[], orderId: string) {
		const component = defineAsyncComponent(() => import('@/page/mypage/review/create/MyReviewCreate.vue'));

		return openOverlay(component, {
			props: {
				orderItems,
				orderId,
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

	/** 주문 조회 */
	async function getOrders() {
		loading.show();
		try {
			normalOrders.value = await getNormalStepOrders(filter.value.month, filter.value.statusCode);
			router.replace({
				path: route.path,
				query: {
					status_code: filter.value.statusCode,
					month: filter.value.month,
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

	/** 주문 리스트 조회. 날짜 검색필터 값 따라 재조회 */
	await getOrders();
	watch(filter, getOrders, { deep: true });
</script>