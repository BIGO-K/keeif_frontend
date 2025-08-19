<template>
	<div class="m_overlay-order-coupon">
		<div class="mm_order-item">
			<div class="mm_product-list T=sm">
				<ul
					v-for="pack, index in sheet.packs"
					:key="index"
				>
					<li
						v-for="orderItem in pack.items"
						:key="orderItem.uuid"
					>
						<div class="mm_product-item">
							<a>
								<figure>
									<lazyload
										class="mm_bg-cover image_product"
										:src="orderItem.goods.thumbnail_url"
									></lazyload>
									<figcaption>
										<p class="text_brand">{{ orderItem.goods.brand_name }}</p>
										<p class="text_product">{{ orderItem.goods.name }}</p>
										<p class="text_price"><strong>{{ number(displayPrice(orderItem)) }}</strong></p>
										<p class="text_option">{{ orderItem.option.name }} / 1개</p>
									</figcaption>
								</figure>
							</a>
							<div class="mm_product-item-footer">
								<form-select
									v-model="applyCouponRegistForm[orderItem.uuid]"
									class="T=sm"
									@change="handleCouponRegistChange(orderItem)"
								>
									<option>쿠폰을 선택하세요</option>
									<option
										v-for="couponRegist in orderItem.usable_coupon_regists"
										:key="couponRegist.regist_id"
										:value="couponRegist.regist_id"
									>
										~[{{ date(couponRegist.coupon.expire_at, 'YYYY/MM/DD') }}]
										{{ couponRegist.coupon.title }}
									</option>
								</form-select>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="mm_foot">
				<div class="mm_inner">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=primary"
							@click="apply"
						>
							<b>적용하기</b>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { defineProps, ref } from 'vue';
	import { calculateDiscountAmount } from '$/utils/calculateDiscountAmount';
	import { useFormatter } from '$/composables/useFormatter';
	import Lazyload from '@/component/Lazyload.vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	defineExpose<OverlayComponentExpose>({
		title: `쿠폰 적용`,
	});

	const props = defineProps<{
		sheet: OrderSheet
		appliedCouponRegist: OrderSheetAppliedCouponRegist
		closer: CloseHandler<OrderSheetAppliedCouponRegist>
	}>();

	const { date, number } = useFormatter();

	const applyCouponRegistForm = ref<Record<string, number | undefined>>({});
	Object.entries(props.appliedCouponRegist).forEach(([key, couponRegist]) => {
		applyCouponRegistForm.value[key] = couponRegist?.regist_id;
	});

	/** 노출가격 계산 */
	function displayPrice(orderItem: OrderSheetPackItem) {
		const beforeCouponPrice = orderItem.goods_base_discounted_price
			+ orderItem.option_extra_amount
			- (orderItem.night_sale_amount || 0);

		const couponRegist = orderItem.usable_coupon_regists.find(regist => regist.regist_id === applyCouponRegistForm.value[orderItem.uuid]);
		const afterCouponPrice = beforeCouponPrice
			- (
				couponRegist != undefined
					? calculateDiscountAmount(beforeCouponPrice, couponRegist.coupon)
					: 0
			);

		const afterImmediatelySalePrice = afterCouponPrice
			- (
				orderItem.appliable_immediately_sale
					? calculateDiscountAmount(afterCouponPrice, orderItem.appliable_immediately_sale)
					: 0
			);

		return afterImmediatelySalePrice;
	}

	/** 적용쿠폰 변경 핸들링 */
	function handleCouponRegistChange(orderItem: OrderSheetPackItem) {
		const couponRegist = orderItem.usable_coupon_regists.find(regist => regist.regist_id === applyCouponRegistForm.value[orderItem.uuid]);
		if (!couponRegist) {
			return;
		}

		const newApplyForm = {
			...applyCouponRegistForm.value,
		};
		Object.entries(applyCouponRegistForm.value).forEach(([key, item]) => {
			if (key !== orderItem.uuid && newApplyForm[key] === couponRegist.regist_id) {
				newApplyForm[key] = undefined;
			}
		});

		applyCouponRegistForm.value = { ...newApplyForm };
	}

	/** 적용 */
	function apply() {
		const applyForm = { ...props.appliedCouponRegist };

		const orderItems = props.sheet.packs.flatMap(pack => pack.items);
		Object.entries(applyCouponRegistForm.value).forEach(([key, registId]) => {
			const orderItem = orderItems.find(item => item.uuid === key);
			if (!orderItem) {
				applyForm[key] = undefined;

				return;
			}

			const couponRegist = orderItem.usable_coupon_regists.find(regist => regist.regist_id === registId);
			applyForm[key] = couponRegist;
		});

		props.closer(applyForm);
	}
</script>