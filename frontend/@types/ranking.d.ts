type BaseRanking = {
    has_rank_range: boolean    // 랭킹 자동집계 여부
    target_date: string
}

type HasRank = {
    rank: number;
    change_type: 'U'|'D'|'N'|'';
    change_value: number;
}

/** 랭킹 기간 */
type RankRange = 'D'|'W'|'M';

/** * 랭킹 아이템 분류 */
type ItemRankingType = 'order'|'view'|'wish';

/** 랭킹상품 */
type RankingGoods = HasRank & Omit<Goods,'badges'|'review_count'|'review_score_average'>;

/** 랭킹 브랜드 */
type RankingBrand = Pick<Brand,'id'|'name'> & HasRank & {
    goods_list: Pick<Goods, 
        'base_discounted_price'
        |'icon'
        |'id'
        |'is_only_adult'
        |'mouse_over_image_url'
        |'name'
        |'sale_rate'
        |'stock'
        |'thumbnail_url'
    > & {
        alt: string
    }[]
}

/** 상품 랭킹 */
type ItemRanking = BaseRanking & {
    goods_list: RankingGoods[];
}

/** 브랜드 랭킹 */
type BrandRanking = BaseRanking & {
    brand_list: RankingBrand[];
}