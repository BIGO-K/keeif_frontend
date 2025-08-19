/** 찜 처리 가능 상품 최소규약 */
type WishManageableGoods = Pick<Goods, 'id'>;

type GoodsWishContext = { 
    goods: WishManageableGoods;
    wished: boolean;
}

type GoodsWishFolder = {
    id: number
    name: string
    order_seq: number
    records_count: number
    recent_goods_thumbnail_url: string | null
}

type WishedGoods = Pick<Goods, 'id' | 'name' | 'thumbnail_url' | 'base_discounted_price' | 'sale_rate' | 'brand_name' | 'is_soldout'>
type WishedBrand = Pick<Brand, 'id' | 'name'> & { logo_image_url: string }