import { ref } from 'vue';
import { usePageContextStore } from '$/stores/usePageContextStore';
import { useWishedStore } from '$/stores/useWishedStore';
import { useBackend } from '$/composables/useBackend';
import { useCardInstallment } from '$/composables/useCardInstallment';
import { useErrorAlert } from '$/composables/useErrorAlert';
import { useGoodsAdditional } from '$/composables/useGoodsAdditional';

/** 상품상세 컴포저블 */
export async function useGoodsDetail(goodsId: number) {
	const { add: addWishedGoods } = useWishedStore();
	const pageContextStore = usePageContextStore();
	const { getOptions } = useGoodsAdditional();
	/** 초기 로딩요소 */

	const fetch = async (goodsId: number, isInit?: boolean = false) => {
		const [
			pGoodsDetail,
			pOptions,
			pPromotion,
			pStock,
			pReactionAggregate,
			pCreditCardInstallment,
		] = await Promise
			.all([
				getBasicInfo(goodsId),
				getOptions(goodsId),
				getPromotion(goodsId),
				getStock(goodsId),
				getReactionAggregate(goodsId),
				isInit ? useCardInstallment().get() : undefined,
			])
			.catch(e => {
				const cloneImage = document.querySelector('.m_product-clone');
				if (cloneImage) {
					cloneImage.remove();
				}

				// 에러 처리
				useErrorAlert(e, {
					httpCatcher: {
						404: '상품이 존재하지 않습니다.',
					},
					alertCallback: () => {
						//
						pageContextStore.clearErrorWithHistoryBack();
					},
				});
				// throw (e);
			});

		return {
			pGoodsDetail,
			pOptions,
			pPromotion,
			pStock,
			pReactionAggregate,
			pCreditCardInstallment,
		};
	};

	const { pGoodsDetail, pOptions, pPromotion, pStock, pReactionAggregate, pCreditCardInstallment } = await fetch(goodsId, true);
	const goodsDetail = ref<GoodsDetail>(pGoodsDetail);
	const options = ref<GoodsOption[]>(pOptions.options);
	const is3DepthOptionRequired = ref<boolean>(pOptions.is_option3_required);
	const promotion = ref<GoodsPromotion>(pPromotion);
	const stockState = ref<GoodsStockState>(pStock);
	const shoppingAggregate = ref<GoodsReactionAggregate>(pReactionAggregate);
	const creditCardInstallment = ref<Nullable<CardInstallment> | undefined>(pCreditCardInstallment);

    /**
     * [상품상세] 기본 구성요소 조회
     * @param goodsId
     * @returns
     */
	async function getBasicInfo(goodsId: number) {
		const { goods, joint_purchase, raffle } = await useBackend().command<{
            goods: GoodsDetail
            joint_purchase: { id: number } | null
            raffle: { id: number } | null
        }>(`v1/goods/${goodsId}`);

		goods.id = goodsId;
		goods.image_url = goods.thumbnail_urls[0];
		goods.joint_purchase_id = joint_purchase?.id;
		goods.raffle_id = raffle?.id;

		return goods;
	}

    /**
     * [상품상세] 수량 조회
     * @param goodsId
     * @returns
     */
	async function getStock(goodsId: number) {
		const { stock, is_soldout } = await useBackend().command<GoodsStockState>(`v1/goods/${goodsId}/stock`);

		return {
			stock,
			is_soldout,
		};
	}

    /**
     * [상품상세] 프로모션 정보 조회
     * @param goodsId
     */
	async function getPromotion(goodsId: number) {
		return await useBackend().command<GoodsPromotion>(`v1/goods/${goodsId}/promotions`);
	}

    /**
     * [상품상세] 세트상품 조회
     * @param goodsId
     * @returns
     */
	async function getPackageGoodsList(goodsId: number): Promise<PackageGoods[]> {
		const { goods_packages } = await useBackend().command<{
            goods_packages: Nullable<(PackageGoods & { goods_id: number})[]>
            	}>(`v1/goods/${goodsId}/packages`);

		return (goods_packages || [])?.map(packageGood => {
			return {
				id: packageGood.goods_id,
				...packageGood,
			};
		});
	}

    /**
     * [상품상세] 브랜드 베스트 상품 리스트 조회
     * @param goodsId
     */
	async function getBrandBestGoodsList(goodsId: number) {
		const { brand_best_goods } = await useBackend().command<{
            brand_best_goods: BestGoods[]
        }>(`v1/goods/${goodsId}/best-of-brand`);

		return brand_best_goods.filter(goods => goods.id !== goodsId);
	}

    /**
     * [상품상세] 대표카테고리 베스트 상품 리스트 조회
     * @param goodsId
     * @returns
     */
	async function getCategoryBestGoodsList(goodsId: number) {
		const { category_best_goods } = await useBackend().command<{
            category_best_goods: BestGoods[]
        }>(`v1/goods/${goodsId}/best-of-category`);

		return category_best_goods.filter(goods => goods.id !== goodsId);
	}

    /**
     * [상품상세] 리뷰/문의/좋아요 집계
     * @param goodsId
     */
	async function getReactionAggregate(goodsId: number) {
		return await useBackend().command<GoodsReactionAggregate>(`v1/goods/${goodsId}/aggregate`);
	}

    /**
     * [상품상세] 사용자에 따른 부가 기능 조회
     * @param goodsId
     * @returns
     */
	async function me(goodsId: number) {
		const { is_wished, is_writable_review } = await useBackend().command<{
            is_wished: boolean
            is_writable_review: boolean
        }>(`v1/goods/${goodsId}/me`);

		if (is_wished) {
			addWishedGoods(goodsId);
		}

		return {
			is_wished,
			is_writable_review,
		};
	}

    /**
     * [상품: 쿠폰] 다운로드 가능 쿠폰 리스트 조회
     * @param goodsId
     */
	async function getDownloadableCoupons(goodsId: number) {
		const { coupons } = await useBackend().command<{
            coupons: DownloadableCoupon[]
        }>(`v1/goods/${goodsId}/coupons`);

		return coupons;
	}

    /**
     * [상품: 쿠폰] EP 쿠폰 조회
     * @param goodsId
     * @returns
     */
	async function getEpCoupon(goodsId: number) {
		const { epCoupon } = await useBackend().command<{
            epCoupon: Nullable<EPCoupon>
        }>(`v1/goods/${goodsId}/ep-coupon`);

		return epCoupon;
	}

	async function refetch(goodsId: number) {
		const { pGoodsDetail, pOptions, pPromotion, pStock, pReactionAggregate } = await fetch(goodsId);
		goodsDetail.value = pGoodsDetail;
		options.value = pOptions.options;
		is3DepthOptionRequired.value = pOptions.is_option3_required;
		promotion.value = pPromotion;
		stockState.value = pStock;
		shoppingAggregate.value = pReactionAggregate;
	}

	async function getInfluencerMarketing(goodsId: number): Promise<GoodsInfluencerMarketing> {
		const { coop_deal } = await useBackend().command<{ coop_deal: GoodsInfluencerMarketing}>(`v1/goods/${goodsId}/influencer-marketing`);

		return coop_deal;
	}

	return {
		options,
		getBasicInfo,
		getPackageGoodsList,
		getBrandBestGoodsList,
		getCategoryBestGoodsList,
		getReactionAggregate,
		getEpCoupon,
		getDownloadableCoupons,
		me,
		is3DepthOptionRequired,
		goodsDetail,
		promotion,
		stockState,
		shoppingAggregate,
		creditCardInstallment,
		refetch,
		getInfluencerMarketing,
	};
}