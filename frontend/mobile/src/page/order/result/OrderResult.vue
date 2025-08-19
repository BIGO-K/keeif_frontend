<template>
	<layout
		title="주문완료"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_popup-order-fin">
			<div class="mm_inner">
				<template v-if="isOrderSuccess && orderResult">
					<h3 class="mm_title">
						<b>주문이 완료되었습니다</b>
					</h3>
					<p>주문번호: {{ orderId }}</p>
					<!-- (D) 결제방법이 무통장입금인 경우 'm...fin-deposit' 영역을 노출합니다 -->
					<div
						v-if="orderResult.payment_info.eng_label === 'virtual_account'"
						class="m...fin-deposit"
					>
						<p class="text_deadline">
							입금기한: {{ date(orderResult.payment_info.bank_input_expire_date, 'YYYY-MM-DD') }}<span>23:59:59</span>까지
						</p>
						<p>입금계좌: {{ orderResult.payment_info.bank_label }} {{ orderResult.payment_info.bank_account_number }}</p>
					</div>
					<div class="mm_btn_box">
						<div class="mm_flex T=equal">
							<mm-link
								class="mm_btn T=line T=dark"
								:to="{ name: 'MyOrder' }"
							>
								<b>구매내역 보기</b>
							</mm-link>
							<mm-link
								class="mm_btn T=primary"
								:to="{ name: 'Main' }"
							>
								<b>쇼핑 홈 가기</b>
							</mm-link>
						</div>
					</div>
				</template>
				<template v-else>
					<p class="mm_text-none">
						<i class="ico_text-none"></i>결제 승인에 실패했습니다<br>{{ errorMessage }}
					</p>
					<div class="mm_btn_box">
						<div class="mm_flex T=equal">
							<mm-link
								class="mm_btn T=line T=dark"
								:to="{}"
								@click.prevent="restartOrderProcess"
							>
								<b>주문서로 가기</b>
							</mm-link>
							<mm-link
								class="mm_btn T=primary"
								:to="{ name: 'Main' }"
							>
								<b>쇼핑 홈 가기</b>
							</mm-link>
						</div>
					</div>
				</template>
			</div>

			<template v-if="isOrderSuccess && orderResult">
				<!-- 주문 상품 -->
				<div class="mm_order-item">
					<div
						v-for="pack, packIndex in orderResult.packs"
						:key="`${packIndex}`"
						class="mm_order-item-seller"
					>
						<div class="mm_order...seller-head">
							<p class="text_ship">
								<i class="ico_ship"></i>
								<span v-if="pack.shipping_price < 1">무료배송</span>
								<span
									v-else
									class="text_price"
								><strong>{{ number(pack.shipping_price) }}</strong></span>
							</p>
						</div>
						<div class="mm_product-list T=sm">
							<ul>
								<li
									v-for="group,index in pack.mergedOrderItems"
									:key="index"
								>
									<p class="text_seller">
										<i class="ico_shop"></i>{{ group.seller_name }}
									</p>
									<div class="mm_product-item">
										<a>
											<figure>
												<lazyload
													class="mm_bg-cover image_product"

													:src="group.goods.thumbnail_url"
												></lazyload>
												<figcaption>
													<dawn-tag v-if="pack.is_dawn_delivery"></dawn-tag>

													<p class="text_brand">{{ group.goods.brand_name }}</p>
													<p class="text_product">{{ group.goods.name }}</p>
													<p class="text_price">
														<strong>{{ number(groupItemsSummary[packIndex][index].paidPrice) }}</strong>
													</p>
													<p class="text_option">{{ optionText(group.option.name) }}/ {{ group.ea }}개</p>
												</figcaption>
											</figure>
										</a>
										<div
											v-if="isMember"
											class="mm_product-item-footer"
										>
											<p class="text_point">
												사용 적립금<b><strong>{{ number(groupItemsSummary[packIndex][index].usedPointAmount) }}</strong><sub>원</sub></b>
											</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr class="mm_line">
				<div class="mm_inner">
					<gift-order-info
						v-if="orderResult.giveaways.length > 0"
						:giveaways="orderResult.giveaways"
					></gift-order-info>

					<!-- 배송지 정보 -->
					<section>
						<h4 class="mm_strapline">
							<b>배송지 정보</b>
						</h4>
						<div class="mm_order-info">
							<table>
								<tbody>
									<tr v-if="isMember">
										<th scope="row">
											<b>배송지명</b>
										</th>
										<td>{{ orderResult.receive_address.shipping_name }}</td>
									</tr>
									<tr>
										<th scope="row">
											<b>받는 사람</b>
										</th>
										<td>{{ orderResult.receive_address.name }}</td>
									</tr>
									<tr>
										<th scope="row">
											<b>휴대폰 번호</b>
										</th>
										<td>{{ orderResult.receive_address.phone }}</td>
									</tr>
									<tr>
										<th scope="row">
											<b>주소</b>
										</th>
										<td>{{ orderResult.receive_address.zip_code }}<br>{{ orderResult.receive_address.base_address }} {{ orderResult.receive_address.detail_address }}</td>
									</tr>

									<dawn-order-address-info
										v-if="hasDawnDelivery"
										:entrance-description="orderResult.receive_address.entrance_description"
									></dawn-order-address-info>

									<tr>
										<th scope="row">
											<b>배송메모</b>
										</th>
										<td>{{ orderResult.receive_address.message }}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</section>

					<!-- 최종 결제금액 -->
					<section class="mm_costbox">
						<h4 class="mm_strapline">
							<b>최종 결제금액</b>
						</h4>
						<div class="mm_cost">
							<table>
								<tbody>
									<tr>
										<th scope="row">
											<b>총 상품금액</b>
										</th>
										<td>
											<p class="text_price">
												<strong>{{ number(summaryPrice.totalGoodsPrice) }}</strong>
											</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송비</b>
										</th>
										<td>
											<p class="text_price">
												+ <strong>{{ number(summaryPrice.shippingPrice) }}</strong>
											</p>
										</td>
									</tr>
									<template v-if="isMember">
										<tr v-if="summaryPrice.memberDiscountedPrice > 0">
											<th scope="row">
												<b>회원할인</b>
											</th>
											<td>
												<p class="text_price">
													- <strong>{{ number(summaryPrice.memberDiscountedPrice) }}</strong>
												</p>
											</td>
										</tr>
										<tr v-if="summaryPrice.nightSaleAmount > 0">
											<th scope="row">
												<b>심야할인</b>
											</th>
											<td>
												<p class="text_price">
													- <strong>{{ number(summaryPrice.nightSaleAmount) }}</strong>
												</p>
											</td>
										</tr>
										<tr v-if="summaryPrice.registCouponAmount > 0">
											<th scope="row">
												<b>쿠폰할인</b>
											</th>
											<td>
												<p class="text_price">
													- <strong>{{ number(summaryPrice.registCouponAmount) }}</strong>
												</p>
											</td>
										</tr>
										<tr v-if="summaryPrice.immediatelySaleAmount > 0">
											<th scope="row">
												<b>즉시할인</b>
											</th>
											<td>
												<p class="text_price">
													- <strong>{{ number(summaryPrice.immediatelySaleAmount) }}</strong>
												</p>
											</td>
										</tr>
										<tr v-if="summaryPrice.usedPointAmount > 0">
											<th scope="row">
												<b>적립금 사용</b>
											</th>
											<td>
												<p class="text_point">
													- <strong>{{ number(summaryPrice.usedPointAmount) }}</strong>
													<sub>원</sub>
												</p>
											</td>
										</tr>
									</template>
								</tbody>
								<tfoot>
									<tr>
										<th scope="row">
											<b>최종 결제금액</b>
										</th>
										<td>
											<p class="text_price mm_text-variable">
												<strong>{{ number(summaryPrice.paymentPrice) }}</strong>
											</p>
										</td>
									</tr>
								</tfoot>
							</table>
						</div>
						<div class="mm_costbox-unit">
							<p>결제수단: {{ orderResult.payment_info.label }}</p>
							<template v-if="orderResult.payment_info.eng_label === 'credit_card'">
								<p>카드사: {{ orderResult?.payment_info.card_label }}</p>
								<p>카드번호: {{ orderResult?.payment_info.card_masking_number }}</p>
							</template>
							<template v-if="orderResult.payment_info.eng_label === 'virtual_account' || orderResult.payment_info.eng_label === 'escrow'">
								<p>이체은행: {{ orderResult.payment_info.bank_label }}</p>
								<p>예금주: {{ bankOwnerName }}</p>
								<p>계좌번호: {{ orderResult.payment_info.bank_account_number }}</p>
								<p>입금기한: {{ date(orderResult.payment_info.bank_input_expire_date, 'YYYY-MM-DD 23:59:59') }}</p>
								<!-- <p>입금액: {{ number(summaryPrice.paymentPrice) }}원</p> -->
							</template>
							<template v-else>
								<p>결제승인일: {{ date(orderResult.payment_info.approve_at, 'YYYY.MM.DD') }}<span class="text_time">{{ date(orderResult.payment_info.approve_at, 'hh:mm:ss') }}</span></p>
							</template>
						</div>
					</section>
				</div>
			</template>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { useRoute } from 'vue-router';
	import { useOrderStore } from '$/stores/useOrderStore';
	import config from '$/utils/config';
	import { useAirbridge } from '$/composables/useAirbridge';
	import { useChannelTalk } from '$/composables/useChannelTalk';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useThirdPartyTracking } from '$/composables/useThirdPartyTracking';
	import Layout from '@/component/layout/Layout.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import GiftOrderInfo from '@/feature/gift/component/GiftInfo.vue';
	import DawnOrderAddressInfo from '@/custom/dawn/component/DawnOrderAddressInfo.vue';
	import DawnTag from '@/custom/dawn/component/DawnTag.vue';

	const route = useRoute();
	const { isMember } = useGlobalPageContext();
	const orderId = `${route.params.id}`;
	const orderStore = useOrderStore();
	const bankOwnerName = config('shop.bank_owner_name');
	const { number, date, optionText } = useFormatter();

	const orderResult = ref<OrderResult|null>(null);
	const errorMessage = ref<string>('');
	try {
		orderResult.value = await orderStore.getResult(orderId);
	}
	catch (e) {
		errorMessage.value = e.response.data.message;
	}
	const isOrderSuccess = computed(() => orderResult.value !== null);



	async function restartOrderProcess() {
		return orderStore.moveToOrderPage();
	}

	const summaryPrice = computed(() => {
		if (orderResult.value === null) {
			return {
				totalGoodsPrice: 0,
				memberDiscountedPrice: 0,
				registCouponAmount: 0,
				nightSaleAmount: 0,
				immediatelySaleAmount: 0,
				usedPointAmount: 0,
				shippingPrice: 0,
				paymentPrice: 0,
			};
		}

		const total = orderResult.value.packs.map((pack) => {
			return {
				goodsPrice: pack.items.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.goods_sell_price + currentValue.option_extra_amount;
				}, 0),
				memberDiscountedPrice: pack.items.reduce((accumulator, currentValue) => {
					return accumulator + (currentValue.goods_sell_price - currentValue.goods_base_discounted_price);
				}, 0),
				nightSaleAmount: pack.items.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.night_sale_amount;
				}, 0),
				registCouponAmount: pack.items.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.coupon_amount;
				}, 0),
				immediatelySaleAmount: pack.items.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.immediately_sale_amount;
				}, 0),
				usedPointAmount: pack.items.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.used_point_amount;
				}, 0),
			};
		});

		const totalGoodsPrice = total.reduce((acc, cur) => {
			return acc + cur.goodsPrice;
		}, 0);
		const memberDiscountedPrice = total.reduce((acc, cur) => {
			return acc + cur.memberDiscountedPrice;
		}, 0);
		const shippingPrice = orderResult.value.packs.reduce((acc, cur) => {
			return acc + cur.shipping_price;
		}, 0);
		const nightSaleAmount = total.reduce((acc, cur) => {
			return acc + cur.nightSaleAmount;
		}, 0);
		const registCouponAmount = total.reduce((acc, cur) => {
			return acc + cur.registCouponAmount;
		}, 0);
		const immediatelySaleAmount = total.reduce((acc, cur) => {
			return acc + cur.immediatelySaleAmount;
		}, 0);

		const usedPointAmount = total.reduce((acc, cur) => {
			return acc + cur.usedPointAmount;
		}, 0);

		return {
			totalGoodsPrice,
			memberDiscountedPrice,
			shippingPrice,
			nightSaleAmount,
			registCouponAmount,
			immediatelySaleAmount,
			usedPointAmount,
			paymentPrice: totalGoodsPrice - memberDiscountedPrice + shippingPrice - nightSaleAmount - registCouponAmount - immediatelySaleAmount - usedPointAmount,
		};
	});

	const hasDawnDelivery = computed(() => orderResult.value?.packs.some((pack) => pack.is_dawn_delivery));

	const groupItemsSummary = computed<{
		usedPointAmount: number;
		paidPrice: number;
	}[][]>(() => {
		if (orderResult.value === null) {
			return [];
		}

		return orderResult.value.packs.map((pack) => {
			return pack.mergedOrderItems.map((group) => {
				return {
					usedPointAmount: group.list.reduce((accumulator, currentValue) => {
						return accumulator + currentValue.used_point_amount;
					}, 0),
					paidPrice: group.list.reduce((acc, cur) => {
						// group.goodsBaseDiscountedPrice - group.nightSaleAmount - group.registCouponAmount - group.immediatelySaleAmount
						return acc + (
							cur.goods_base_discounted_price
							+ cur.option_extra_amount
							- cur.night_sale_amount
							- cur.coupon_amount
							- cur.immediately_sale_amount);
					}, 0),
				};
			});
		});
	});

	if (isOrderSuccess.value && orderResult.value) {
		useThirdPartyTracking().orderReceipted({
			isMobile: true,
			isTablet: false,
			isDesktop: false,
			orderId: orderId,
			paymentPrice: summaryPrice.value.paymentPrice,
			orderedItems: orderResult.value.packs
				.map(p => p.mergedOrderItems)
				.flat()
				.map(groupPack => {
					return {
						goodsId: groupPack.goods.id,
						optionId: groupPack.option.id,
						goodsName: groupPack.goods.name,
						optionName: groupPack.option.name,
						quantity: groupPack.list.length,
						price: groupPack.goods.sell_price + groupPack.option.extra_amount,
						paidPrice: groupPack.goods.base_discounted_price + groupPack.option.extra_amount,
					};
				}),
		});

		useAirbridge().orderComplete({
			products: orderResult.value.packs
				.map(p => p.mergedOrderItems)
				.flat()
				.map((groupPack, index) => {
					return {
						productID: `${groupPack.goods.id}`,
						brandName: `${groupPack.goods.brand_name}`,
						// optionId: groupPack.option.id,
						name: `${groupPack.goods.name}_옵션_${groupPack.option.name}`,
						optionName: groupPack.option.name,
						currency: 'KRW',
						quantity: groupPack.list.length,
						position: index + 1,
						price: groupPack.goods.base_discounted_price + groupPack.option.extra_amount,
					};
				}),
			totalValue: summaryPrice.value.paymentPrice,
			orderId: orderId,
		});

		useChannelTalk().orderComplete({
			orderId: orderId,
			paymentPrice: summaryPrice.value.paymentPrice,
			totalGoodsEa: orderResult.value.packs.reduce((acc, cur) => acc + cur.items.length, 0),
			products: orderResult.value.packs
				.map(p => p.mergedOrderItems)
				.flat()
				.map((groupPack) => {
					return {
						productId: groupPack.goods.id,
						productName: `${groupPack.goods.name}_${groupPack.option.name}`,
						quantity: groupPack.list.length,
						productPrice: groupPack.goods.base_discounted_price + groupPack.option.extra_amount,
					};
				}),
		});
	}

	orderStore.orderFinish(orderId, isOrderSuccess.value);
</script>