import { useBackend } from '$/composables/useBackend';

export function useGoodsAdditional() {
	/**
     * [상품상세] 옵션 조회
     * @param goodsId
     */
	async function getOptions(goodsId: number): Promise<{
		options: GoodsOption[],
		is_option3_required: boolean
	}> {
		const { options, is_option3_required } = await useBackend().command<{
            options: GoodsOption[]
			is_option3_required: boolean;
        }>(`v1/goods/${goodsId}/options`);


		/** 3뎁스 옵션 사용하는 경우 처리  */
		if (is_option3_required) {
			const a = options.map(option => {
				let isOptionSelectable = false;
				const subOptions: GoodsSubWithChildOption[] = option.sub.map(subOption => {
					const subChildOptions = subOption.sub.map(depth3 => {
						if (depth3.qty > 0) {
							isOptionSelectable = true;
						}

						return {
							code: depth3.code,
							name: depth3.name.trim(),
							qty: depth3.qty,
							is_selectable: depth3.qty > 0,
							extra_amount: depth3.extra_amount,
							extra_amount_by_marketing: 0,
						};
					});

					return {
						name: subOption.name.trim(),
						is_selectable: isOptionSelectable,
						sub: subChildOptions,
					};
				});
				const goodsOption: GoodsOption = {
					name: option.name.trim(),
					is_selectable: isOptionSelectable,
					sub: subOptions,
				};

				return goodsOption;

			});

			return {
				options: a,
				is_option3_required: is_option3_required,
			};
		}

		return {
			options: options.map(option => {
				let isOptionSelectable = false;
				const subOptions: GoodsSubOption[] = option.sub.map(subOption => {
					if (subOption.qty > 0) {
						isOptionSelectable = true;
					}

					return {
						code: subOption.code,
						name: subOption.name.trim(),
						qty: subOption.qty,
						is_selectable: subOption.qty > 0,
						extra_amount: subOption.extra_amount,
						extra_amount_by_marketing: subOption.extra_amount_by_marketing,
					};
				});

				const goodsOption: GoodsOption = {
					name: option.name.trim(),
					is_selectable: isOptionSelectable,
					extra_amount: 0,
					sub: subOptions,
				};

				return goodsOption;
			}),
			is_option3_required: is_option3_required,
		};


	}

	/** 상세설명정보 조회 */
	async function getInformation(goodsId: number) {
		return await useBackend().command<GoodsInformation>(`v1/goods/${goodsId}/information`);
	}

	/**
     * [상품: 쿠폰] 다운로드
     * @param couponIds
	*/
	async function downloadCoupon(couponIds: number[]) {
		await useBackend().command('v1/promotions/extra-coupons/download', {
			method: 'post',
			data: {
				coupon_ids: couponIds,
			},
		});
	}

	/**
     * [상품상세] 재입고알림 신청
     * @param goodsId
     * @param optionId
     */
	async function applyRestockNotify(goodsId: number, optionId: number) {
		await useBackend().command(`v1/goods/${goodsId}/option/${optionId}/in-stock-notification`, {
			method: 'post',
		});
	}

	async function applyCoopDealNotify(goodsId: number) {
		await useBackend().command(`/v1/my/wish/goods/${goodsId}/receive`, {
			method: 'post',
		});
	}

	return {
		getOptions,
		getInformation,
		downloadCoupon,
		applyRestockNotify,
		applyCoopDealNotify,
	};
}