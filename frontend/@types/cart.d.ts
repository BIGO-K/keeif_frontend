type CartPack = {
    key: string
    conditional_free_from: number
    extra_shipping_price: number
    is_charge_on_each: boolean
    seller_id: number
    seller_name: string
    shipping_price: number
    shipping_price_policy: number
    shipping_rule_title: string
	is_dawn_delivery: boolean
	dawn_delivery_extra_shipping_price: number
    items: CartItem[]
}

type CartItem = {
    brand_id: number
    brand_name: string
    cart_id: number
    ea: number
    goods_base_discounted_price: number
    goods_headline: null | string
    goods_id: number
    goods_name: string
    goods_sell_price: number
    goods_stock: number
    goods_thumbnail_url: string
    goods_type: string
    is_soldout: boolean
    option_extra_amount: number
	// option_extra_amount_by_marketing: number
    option_id: number
    option_name: string
    option_stock: number
	seller_id: number
    seller_name: string
    goods: Pick<Goods, 'id' | 'brand_id' | 'brand_name' | 'base_discounted_price' | 'headline' | 'name' | 'price' | 'stock' | 'is_soldout' | 'thumbnail_url'> & {
		option_extra_amount: number
		// option_extra_amount_by_marketing: number
		is_dawn_delivery: boolean,
	}
	influencer_marketing: Nullable<CartItemInfluencerMarketing>
}

type CartItemInfluencerMarketing = Omit<GoodsInfluencerMarketing, 'influencer_id'| 'origin_goods_id'>

type CartItemModifyContext = {
    cartItem: CartItem
	has3DepthOption: boolean;
    isSingleOption: boolean
    options: GoodsOption[]
	buyAmount: number
	selectedOption: CartSelectedOptionContext
}

type CartSelectedOptionContext = {
	option1: GoodsOption
	option2?: GoodsSubWithChildOption
	selected: GoodsSubOption
	buyAmount: number
}

type PriceContextByPackKey = Record<string, {
    goodsSellPrice: number
    goodsBaseDiscountAmount: number
    goodsPrice: number
    shippingPrice: number
    totalPrice: number
}>