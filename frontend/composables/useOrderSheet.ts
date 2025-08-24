import { ref, computed } from 'vue';
import { useAuthStore } from '$/stores/useAuthStore';
import { calculateDiscountAmount } from '$/utils/calculateDiscountAmount';
import monsDate from '$/utils/date';
import { useBackend } from '$/composables/useBackend';

export function useOrderSheet(sheet: OrderSheet) {
	/** 배송 메세지 템플릿 */
	const shippingMessageTemplates = [
		'배송메모를 선택하세요',
		'부재 시 경비실에 맡겨주세요',
		'빠른 배송 부탁드립니다',
		'부재 시 핸드폰으로 연락 바랍니다',
		'배송 전 연락 바랍니다',
		'직접 입력',
	];

	const { member } = useAuthStore();
	const depositExpireDate = monsDate().add(1, 'day').format('YYYY-MM-DD 23:59:59');
	/** 적용된 쿠폰 정보 */
	const appliedCouponRegist = ref<OrderSheetAppliedCouponRegist>({});
	/** 전체 가격 관련  */
	const totalDiscountedPrices = ref<OrderSheetTotalDiscountedPrice>({});

	const itemSets = computed(() => sheet.packs.flatMap(pack => pack.mergedOrderItems));
	/** 실제 상품 */
	const orderItems = computed(() => itemSets.value.flatMap(set => set.list));

	/** item set 별 적용 쿠폰 수량 */
	const appliedCouponCountByItemSet = computed(() => {
		const result: Record<string, number> = {};

		itemSets.value.forEach(set => {
			result[set.key] = set.list.filter(orderItem => appliedCouponRegist.value[orderItem.uuid] != undefined).length;
		});

		return result;
	});

	/** 아이템셋의 적용가능 쿠폰발급목록 */
	function usableCouponRegists(itemSet: OrderSheetMergedOrderItems) {
		const targetItemSet = itemSets.value.find(set => set.key === itemSet.key);
		if (!targetItemSet) {
			return [];
		}

		return targetItemSet.usable_coupon_regists;
	}

	/** 결제수단 조회  */
	async function getPayMethods(): Promise<PayMethod[]> {
		const { pay_methods } = await useBackend().command<{
			pay_methods: PayMethod[]
		}>('v1/orders/utilities/payment-methods');

		return pay_methods;
	}

	/** 최대할인 적용되는 쿠폰 선택값 */
	const maximumDiscountAppliedCouponRegist = computed<OrderSheetAppliedCouponRegist>(() => {
		const apply: OrderSheetAppliedCouponRegist = {};
		if (!member) {
			orderItems.value.forEach(orderItem => {
				apply[orderItem.uuid] = undefined;
			});

			return apply;
		}

		const appliedValues = orderItems.value.flatMap(orderItem => {
			return orderItem.usable_coupon_regists.map(couponRegist => {
				const beforeCouponPrice = orderItem.goods_base_discounted_price
                    + orderItem.option_extra_amount
					// + orderItem.option_extra_amount_by_marketing
                    - orderItem.night_sale_amount;

				const afterCouponPrice = beforeCouponPrice - calculateDiscountAmount(beforeCouponPrice, couponRegist.coupon);

				return {
					uuid: orderItem.uuid,
					discountedAmount: beforeCouponPrice - afterCouponPrice,
					couponRegist,
				};
			});
		});

		const appliedOrderItemUuids: string[] = [];
		const appliedCouponRegistIds: number[] = [];
		appliedValues.sort((before, after) => after.discountedAmount - before.discountedAmount);

		appliedValues.forEach(appliedValue => {
			if (
				appliedOrderItemUuids.includes(appliedValue.uuid)
                || appliedCouponRegistIds.includes(appliedValue.couponRegist.regist_id)
			) {
				return;
			}

			appliedOrderItemUuids.push(appliedValue.uuid);
			appliedCouponRegistIds.push(appliedValue.couponRegist.regist_id);
			apply[appliedValue.uuid] = appliedValue.couponRegist;
		});

		return apply;
	});

	/** 최대할인 적용처리 */
	const applyMaximumDiscount = computed({
		get: () => JSON.stringify(appliedCouponRegist.value) === JSON.stringify(maximumDiscountAppliedCouponRegist.value),
		set: (value) => {
			if (value === true) {
				appliedCouponRegist.value = { ...maximumDiscountAppliedCouponRegist.value };
			}
			else {
				appliedCouponRegist.value = {};
			}
		},
	});

	applyMaximumDiscount.value = true;

	const discountsByItem = computed<DiscountByItem>(() => {
		const result: DiscountByItem = {};

		orderItems.value.forEach(orderItem => {
			result[orderItem.uuid] = {
				unitPrice: (member ? orderItem.goods_base_discounted_price : orderItem.goods_sell_price) + orderItem.option_extra_amount,
				baseDiscountAmount: 0,
				nightSaleAmount: 0,
				couponDiscountAmount: 0,
				immediatelySaleAmount: 0,
				totalDiscountedPrice: 0,
				totalDiscountAmount: 0,
			};

			if (!member) {
				result[orderItem.uuid].totalDiscountedPrice = result[orderItem.uuid].unitPrice;

				return;
			}

			result[orderItem.uuid].nightSaleAmount = orderItem.night_sale_amount;

			const beforeCouponPrice: number = orderItem.goods_base_discounted_price
                    + orderItem.option_extra_amount
					// + orderItem.option_extra_amount_by_marketing
                    - orderItem.night_sale_amount;

			const couponRegist = appliedCouponRegist.value[orderItem.uuid];
			const afterCouponPrice = beforeCouponPrice
                    - (
                    	couponRegist != undefined
                    		? calculateDiscountAmount(beforeCouponPrice, couponRegist.coupon)
                    		: 0
                    );

			result[orderItem.uuid].couponDiscountAmount = beforeCouponPrice - afterCouponPrice;

			const afterImmediatelySalePrice = afterCouponPrice
                            - (
                            	orderItem.appliable_immediately_sale
                            		? calculateDiscountAmount(afterCouponPrice, orderItem.appliable_immediately_sale)
                            		: 0
                            );

			result[orderItem.uuid].immediatelySaleAmount = afterCouponPrice - afterImmediatelySalePrice;

			result[orderItem.uuid].totalDiscountedPrice = afterImmediatelySalePrice;
			result[orderItem.uuid].totalDiscountAmount = result[orderItem.uuid].unitPrice - result[orderItem.uuid].totalDiscountedPrice;
		});



		return result;
	});
	/** 결제금액 집계 */
	const priceContext = computed(() => {
        /** 상품단가(판매가 + 옵션추감액) */
		const goodsUnitPrice = orderItems.value.reduce((sum, orderItem) => sum + orderItem.goods_sell_price + orderItem.option_extra_amount, 0);

        /** 배송비 / 도서산간배송비 */
		const shippingPrice = sheet.packs.reduce((sum, pack) => sum + pack.charged_shipping_price, 0);
		const extraShippingPrice = sheet.packs.reduce((sum, pack) => sum + pack.extra_shipping_price, 0);
		const dawnDeliveryExtraShippingPrice = sheet.packs.reduce((sum, pack) => sum + (pack.charged_shipping_price > 0 ? pack.dawn_delivery_extra_shipping_price : 0), 0);

        /** 회원할인(1차) */
		const baseDiscountAmount = member
			? orderItems.value.reduce((sum, orderItem) => sum + (orderItem.goods_sell_price - orderItem.goods_base_discounted_price), 0)
			: 0;

        /** 심야할인 */
		const nightSaleAmount = orderItems.value.reduce((sum, orderItem) => sum + orderItem.night_sale_amount, 0);

        /** 중복쿠폰 할인 */
		const couponDiscountAmount = orderItems.value.reduce((sum, orderItem) => {
			const discount = discountsByItem.value[orderItem.uuid];
			if (!discount) {
				return sum;
			}

			return sum + discount.couponDiscountAmount;
		}, 0);

        /** 심야할인 */
		const immediatelySaleAmount = orderItems.value.reduce((sum, orderItem) => {
			const discount = discountsByItem.value[orderItem.uuid];
			if (!discount) {
				return sum;
			}

			return sum + discount.immediatelySaleAmount;
		}, 0);

		return {
			goodsUnitPrice,
			shippingPrice,
			extraShippingPrice,
			dawnDeliveryExtraShippingPrice,
			baseDiscountAmount,
			nightSaleAmount,
			couponDiscountAmount,
			immediatelySaleAmount,
		};
	});

	/** item set 별 최종할인가 총합 */
	const totalDiscountedPriceByItemSet = computed(() => {
		const result: Record<string, number> = {};
		itemSets.value.forEach(set => {
			result[set.key] = set.list.reduce((sum, orderItem) => {
				const discount = discountsByItem.value[orderItem.uuid];
				if (!discount) {
					return sum;
				}

				return sum + discount.totalDiscountedPrice;
			}, 0);
		});

		return result;
	});

	return {
		getPayMethods,
		shippingMessageTemplates,
		appliedCouponCountByItemSet,
		appliedCouponRegist,
		totalDiscountedPrices,
		usableCouponRegists,
		totalDiscountedPriceByItemSet,
		applyMaximumDiscount,
		priceContext,
		discountsByItem,
		depositExpireDate,
	};
}

