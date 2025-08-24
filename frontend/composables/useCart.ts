import { type MaybeRef, computed, ref, watch } from 'vue';
import monsDate from '$/utils/date';
import defined from '$/utils/defined';
import { useBackend } from '$/composables/useBackend';
import { useGoodsAdditional } from '$/composables/useGoodsAdditional';

type AddForCart = {
	goods_id: number
    option_id: number
    ea: number
}
const count = ref<number>(0);

export function useCart() {
	const { getOptions } = useGoodsAdditional();
	const packs = ref<CartPack[]>([]);
	const options = ref<Record<number, { options: GoodsOption[], is_option3_required: boolean }>>({});
    /** 장바구니 조회 처리  */
	async function getCartPacks() {
		const response = await useBackend().command<{
			packs: CartPack[]
		}>('v1/shopping/carts', {
			isForce: true,
		});

		packs.value = response.packs.map((pack, index) => {
			pack.key = `${index}_${pack.seller_id}_${pack.shipping_rule_title}`;
			pack.items = pack.items.map(item => {
				item.goods = toGoods(item, pack);

				return item;
			});

			return pack;
		});

		return packs.value.sort((prev, next) => next.is_dawn_delivery - prev.is_dawn_delivery);
	}

	/** 수량만 조회 */
	async function getCount() {
		const { cart_count } = await useBackend().command<{
            cart_count: number
        }>('v1/shopping/carts/count');

		count.value = cart_count;

		return count.value;
	}

     /** 상품타입 변환 */
	function toGoods(cartItem: CartItem, pack: CartPack): CartItem['goods'] {
		return {
			id: cartItem.goods_id,
			brand_id: cartItem.brand_id,
			brand_name: cartItem.brand_name,
			base_discounted_price: cartItem.goods_base_discounted_price,
			option_extra_amount: cartItem.option_extra_amount,
			// option_extra_amount_by_marketing: cartItem.option_extra_amount_by_marketing,
			headline: cartItem.goods_headline,
			name: cartItem.goods_name,
			price: cartItem.goods_sell_price,
			stock: cartItem.goods_stock,
			is_soldout: cartItem.is_soldout,
			thumbnail_url: cartItem.goods_thumbnail_url,
			is_dawn_delivery: pack.is_dawn_delivery,
		};
	}

    /**
     * 장바구니 담기
     * @param addToCart
    */
	async function add(addToCart: AddForCart[] | AddForCart): Promise<{
		cart_id: number;
		option_id: number
	}[]> {
		const addForCarts = Array.isArray(addToCart) ? addToCart : [addToCart];
		const { cart_count, cart_ids } = await useBackend().command<{ cart_count: number,}>('v1/shopping/carts', {
			method: 'post',
			data: {
				goods_options: addForCarts,
			},
		});

		count.value = cart_count;

		return cart_ids;
	}

    /** 장바구니 아이템 삭제 */
	async function remove(cartItem: CartItem[] | CartItem) {
		const cartItems = Array.isArray(cartItem) ? cartItem : [cartItem];

		const { cart_count } = await useBackend().command<{ cart_count: number }>('v1/shopping/carts/remove', {
			method: 'post',
			data: {
				cart_ids: cartItems.map(item => item.cart_id),
			},
		});

		count.value = cart_count;
	}

	async function removeByIds(cartId: number[]) {
		const { cart_count } = await useBackend().command<{ cart_count: number }>('v1/shopping/carts/remove', {
			method: 'post',
			data: {
				cart_ids: cartId,
			},
		});

		count.value = cart_count;
	}

    /** 카트 아이템 수정 */
	async function modify(cartItem: CartItem, optionId: number, ea: number) {
		await useBackend().command('v1/shopping/carts/update', {
			method: 'post',
			data: {
				cart_id: cartItem.cart_id,
				option_id: optionId,
				ea,
			},
		});
	}

     /** 장바구니 패킹별 가격정보 */
	function getPriceContextByPack(
		cartPacks: MaybeRef<CartPack[]>,
		checkedCartItems: MaybeRef<CartItem[]>,
		isMember: MaybeRef<boolean>,
	) {
		return computed(() => {
			const context: PriceContextByPackKey = {};
			ref(cartPacks).value.forEach(pack => {
				const checkedCartItemsInPack = ref(checkedCartItems).value.filter(checkedCartItem => pack.items.some(cartItem => cartItem.cart_id === checkedCartItem.cart_id));
				const goodsSellPrice = checkedCartItemsInPack.reduce((sum, cartItem) => sum + ((cartItem.goods_sell_price + cartItem.option_extra_amount) * cartItem.ea), 0);
				const goodsBaseDiscountAmount = checkedCartItemsInPack.reduce((sum, cartItem) => sum + ((cartItem.goods_sell_price - cartItem.goods_base_discounted_price) * cartItem.ea), 0);
				const goodsPrice = goodsSellPrice - (isMember ? goodsBaseDiscountAmount : 0);

				const shippingPrice: number = (() => {
					if (pack.shipping_price_policy === 0) {
						return 0;
					}

					if (pack.shipping_price_policy === 1) {
						return pack.shipping_price + pack.dawn_delivery_extra_shipping_price;
					}

					if (pack.is_charge_on_each) {
						return checkedCartItemsInPack.reduce(
							(sum, cartItem) => {
								const eachGoodsPrice = isMember ? cartItem.goods_base_discounted_price : cartItem.goods_sell_price;

								return sum + (eachGoodsPrice >= pack.conditional_free_from ? 0 : (pack.shipping_price + pack.dawn_delivery_extra_shipping_price) * cartItem.ea);
							},
							0,
						);
					}

					return goodsPrice >= pack.conditional_free_from ? 0 : (pack.shipping_price + pack.dawn_delivery_extra_shipping_price);
				})();

				context[pack.key] = {
					goodsSellPrice,
					goodsBaseDiscountAmount,
					goodsPrice,
					shippingPrice,
					totalPrice: goodsPrice + shippingPrice,
				};
			});

			return context;
		});
	}

    /** 장바구니 총괄 컨텍스트 */
	async function context(isMember: boolean) {
		const cartPacks = ref<CartPack[]>(await getCartPacks());
		const allCartItems = computed(() => cartPacks.value.flatMap(pack => pack.items));
		const buyableCartItems = computed(
			() => allCartItems.value
				.filter(cartItem => {
					return !cartItem.is_soldout
						&& cartItem.ea <= cartItem.option_stock
						&& (
							!cartItem.influencer_marketing
							|| (
								cartItem.influencer_marketing
								&& monsDate().isBefore(cartItem.influencer_marketing.sell_end_at)
								&& monsDate().isAfter(cartItem.influencer_marketing.sell_start_at)
							)
						);
				}),
		);

		watch(buyableCartItems, () => {
            /** buyableCartItems 변동시 새로운 buyableCartItems 기반으로 checkedCartItems 갱신 */
			checkedCartItems.value = checkedCartItems.value
				.map(legacy => buyableCartItems.value.find(cartItem => cartItem.cart_id === legacy.cart_id))
				.filter(defined);
		});

		const checkedCartItems = ref<CartItem[]>([...buyableCartItems.value]);
		const checkAllCartItem = computed({
			get: () => checkedCartItems.value.length === buyableCartItems.value.length,
			set: (value) => checkedCartItems.value = value ? [...allCartItems.value] : [],
		});

		const priceContextByPack = getPriceContextByPack(cartPacks, checkedCartItems, isMember);
		const totalPriceContext = computed(() => {
			const priceContextValues = Object.values(priceContextByPack.value);
			const goodsSellPrice = priceContextValues.reduce((sum, priceContext) => sum + priceContext.goodsSellPrice, 0);
			const shippingPrice = priceContextValues.reduce((sum, priceContext) => sum + (priceContext.goodsSellPrice > 0 ? priceContext.shippingPrice : 0), 0);
			const baseDiscountAmount = priceContextValues.reduce((sum, priceContext) => sum + priceContext.goodsBaseDiscountAmount, 0);

			return {
				goodsSellPrice,
				shippingPrice,
				baseDiscountAmount,
				payAmount: goodsSellPrice + shippingPrice - baseDiscountAmount,
			};
		});

		return {
			cartPacks,
			buyableCartItems,
			checkedCartItems,
			checkAllCartItem,
			priceContextByPack,
			totalPriceContext,
			reload: async () => cartPacks.value = await getCartPacks(),
		};
	}

	/** 옵션/수량 변경 가능 컨텍스트 조회 */
	async function getModifyContext(cartItem: CartItem): Promise<CartItemModifyContext> {
		if (!options.value[cartItem.goods.id]) {
			options.value[cartItem.goods.id] = await getOptions(cartItem.goods_id);
		}

		const optionContext = options.value[cartItem.goods.id];
		const has3DepthOption = optionContext.is_option3_required;

		const selectedOption = ref<CartSelectedOptionContext|undefined>(undefined);

		optionContext.options.find(option => {
			if (!has3DepthOption) {
				(option.sub as GoodsSubOption[]).find(sub => {
					if (sub.code === cartItem.option_id) {
						selectedOption.value = {
							option1: option,
							selected: sub,
						};

						return;
					}
				});

				return;
			}

			(option.sub as GoodsSubWithChildOption[]).find(depth2Option => {
				depth2Option.sub.find(sub => {
					if (sub.code === cartItem.option_id) {
						selectedOption.value = {
							option1: option,
							option2: depth2Option,
							selected: sub,
						};

						return;
					}
				});
			});
		});

		return {
			cartItem,
			has3DepthOption,
			buyAmount: cartItem.ea,
			options: optionContext.options,
			selectedOption: selectedOption.value,
		};
	}

	return {
		packs,
		count,
		options,
		getCartPacks,
		getCount,
		add,
		remove,
		modify,
		context,
		getModifyContext,
		removeByIds,
	};
}