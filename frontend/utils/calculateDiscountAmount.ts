/**
 * 할안 정보 계산 함수
 * @param {number} price : 계산전 가격
 * @param {Discounter} discounter : 할인 계산 정보
 * @returns {number} 할인 적용된 가격
 */
export function calculateDiscountAmount(
	price: number,
	discounter: Discounter,
): number {
	const hasMaximumDiscountAmount = discounter.maximum_discount_amount !== 0 ? true : false;

	if (discounter.discount_type === 'KRW') {
		if (hasMaximumDiscountAmount) {
			return Math.min(discounter.maximum_discount_amount, discounter.discount_amount);
		}

		return discounter.discount_amount;
	}
    /** 상품 가격 단위 EX:) 10, 100  */
	const goodsPriceUnit = 10;
	const discountAmount = Math.floor((price * discounter.discount_amount / 100) / goodsPriceUnit) * goodsPriceUnit;

	if (hasMaximumDiscountAmount) {
		return Math.min(discounter.maximum_discount_amount, discountAmount);
	}

	return discountAmount;
}
