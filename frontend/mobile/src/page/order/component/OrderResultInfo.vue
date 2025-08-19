<template>
	<!-- 주문 상품 -->
	<div class="mm_order-item">
		<div
			v-for="pack, packIndex in orderResult?.packs"
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
										<p class="text_brand">{{ group.goods.brand_name }}</p>
										<p class="text_product">{{ group.goods.name }}</p>
										<p class="text_price"><strong>54,800</strong></p>
										<p class="text_option">베이지 FREE / 1개</p>
									</figcaption>
								</figure>
							</a>
							<div class="mm_product-item-footer">
								<p class="text_point">
									사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
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
		<gift-order-info v-if="true"></gift-order-info>

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
									<strong>210,000</strong>
								</p>
							</td>
						</tr>
						<tr>
							<th scope="row">
								<b>배송비</b>
							</th>
							<td>
								<p class="text_price">
									+ <strong>2,500</strong>
								</p>
							</td>
						</tr>
						<tr>
							<th scope="row">
								<b>추가할인</b>
							</th>
							<td>
								<p class="text_price">
									- <strong>6,200</strong>
								</p>
							</td>
						</tr>
						<tr>
							<th scope="row">
								<b>쿠폰할인</b>
							</th>
							<td>
								<p class="text_price">
									- <strong>8,540</strong>
								</p>
							</td>
						</tr>
						<tr>
							<th scope="row">
								<b>적립금 사용</b>
							</th>
							<td>
								<p class="text_point">
									- <strong>2,450</strong><sub>원</sub>
								</p>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<th scope="row">
								<b>최종 결제금액</b>
							</th>
							<td>
								<p class="text_price mm_text-variable">
									<strong>201,510</strong>
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

<script setup lang="ts">
	import { computed } from 'vue';
	import config from '$/utils/config';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import Lazyload from '@/component/Lazyload.vue';
	import GiftOrderInfo from '@/feature/gift/component/GiftInfo.vue';

	const props = defineProps <{
		orderResult: OrderResult
	}>();

	const { isMember } = useGlobalPageContext();
	const bankOwnerName = config('shop.bank_owner_name');
	const { number, date } = useFormatter();

	const summaryPrice = computed(() => {
		if (props.orderResult === null) {
			return {
				totalGoodsPrice: 0,
				memberDiscountedPrice: 0,
				registCouponAmount: 0,
				nightSaleAmount: 0,
				immediatelySaleAmount: 0,
				usedPointAmount: 0,
				shippingPrice: 0,
				paymentPrice: 0
			};
		}

		const total = props.orderResult.packs.map((pack) => {
			return {
				goodsPrice: pack.items.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.goods_sell_price;
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
				}, 0)
			};
		});

		const totalGoodsPrice = total.reduce((acc, cur) => {
			return acc + cur.goodsPrice;
		}, 0);
		const memberDiscountedPrice = total.reduce((acc, cur) => {
			return acc + cur.memberDiscountedPrice;
		}, 0);
		const shippingPrice = props.orderResult.packs.reduce((acc, cur) => {
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
			paymentPrice: totalGoodsPrice - memberDiscountedPrice + shippingPrice - nightSaleAmount - registCouponAmount - immediatelySaleAmount - usedPointAmount
		};
	});
</script>