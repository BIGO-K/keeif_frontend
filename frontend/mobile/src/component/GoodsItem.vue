<template>
	<component
		:is="tag"
		:class="`${goodsItemDefaultClass}_product-item`"
	>
		<mm-link :to="link">
			<figure>
				<lazyload
					:class="`${goodsItemDefaultClass}_bg-cover image_product`"
					:src="!isOnlyAdult || me?.is_verify_age ? thumbnailUrl : null"
				></lazyload>
				<!-- 마우스오버 -->
				<!--
					<template v-if="mouseOverImageUrl">
					<i
					v-lazyload="{ src: mouseOverImageUrl }"
					class="mm_bg-cover image_product"
					></i>

					</template>
				-->
				<template v-if="isSoldout">
					<!-- 품절안내 -->
					<p class="text_soldout">
						{{ soldoutMessage }}
					</p>
				</template>

				<template v-else-if="almostSoldout">
					<!-- 재고소진예정 -->
					<p class="text_product-status">
						품절임박
					</p>
				</template>

				<template v-if="isSoldout === false && icon">
					<!-- 아이콘 -->
					<p
						class="text_tag"
						:style="{
							backgroundColor: icon.background_color_code,
							color: icon.font_color_code
						}"
					>
						{{ icon.label }}
					</p>
				</template>

				<template v-if="useStockNotify">
					<!-- 재입고 예정 -->
					<p class="text_product-status">
						재입고 예정
					</p>
				</template>

				<template v-if="isOnlyAdult && me?.is_verify_age !== true">
					<!-- 성인전용 -->
					<p class="text_adult">
						<b :class="`${goodsItemDefaultClass}_ir-blind`">미성년자 구매불가</b>
						<i :class="`${goodsItemIconClass}_adult`"></i>
					</p>
				</template>

				<figcaption v-if="hideFigcaption !== true">
					<template v-if="hideBrand !== true">
						<!-- 브랜드명 -->
						<p class="text_brand">
							{{ brandName }}
						</p>
					</template>

					<!-- (말머리 + ) 상품명 -->
					<p class="text_product">
						<span
							v-if="headline"
							class="text_foreword"
						>[{{ headline }}]</span>
						{{ name }}
					</p>

					<template v-if="hideSaleRate !== true && saleRate > 0">
						<!-- 할인율 -->
						<p class="text_sale">
							{{ saleRate }}%
						</p>
					</template>

					<slot name="optionName"></slot>

					<!--
						<template v-if="optionText">
						<p class="text_option">
						{{ optionText }}
						</p>
						</template>
					-->

					<template v-if="hidePrice !== true">
						<!-- 가격 -->
						<p class="text_price">
							<strong>{{ number(displayPrice) }}</strong>
							<template v-if="saleRate > 0 && hideUpperPrice !== true && price">
								<del><span>{{ number(price) }}</span></del>
							</template>
						</p>
					</template>

					<template v-if="hideTag !== true">
						<!-- 실적데이터 -->
						<div :class="`${goodsItemDefaultClass}_product-item-react`">
							<p

								class="text_star"
							>
								<i :class="`${goodsItemIconClass}_star`"></i>
								<span>{{ reviewScoreAverage }}</span>
							</p>
							<p
								class="text_review"
							>
								<i :class="`${goodsItemIconClass}_review`"></i>
								<span>{{ reviewCount }}</span>
							</p>
							<p
								class="text_like"
							>
								<i :class="`${goodsItemIconClass}_like`"></i>
								<span>{{ wishCount > 1000 ? '999+' : wishCount }}</span>
							</p>
						</div>
					</template>

					<template v-if="badges.length > 0 || forceBadge || isDawnDelivery">
						<!-- 뱃지 -->
						<div :class="`${goodsItemDefaultClass}_tag-list`">
							<dawn-tag
								v-if="isDawnDelivery"
								:is-block="isBlockContents"
							></dawn-tag>
							<b
								v-for="badge in badges"
								:key="badge"
								:class="`${goodsItemDefaultClass}_tag T=square T=dark`"
							>{{ badge }}</b>
							<b
								v-if="!almostSoldout && badges.length < 1"
								class="mm_tag T=square T=dark"
								style="opacity: 0;"
							>-</b>
						</div>
					</template>
				</figcaption>
				<slot name="figcaption">
				</slot>
			</figure>
		</mm-link>

		<template v-if="hideWish !== true">
			<button
				type="button"
				class="btn_like"
				:class="{ 'S=toggle-on' : isWished }"
				@click="wishedGoods(goods.id)"
			>
				<i :class="`${goodsItemIconClass}_like`"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
			</button>
		</template>
	</component>
</template>

<script setup lang="ts">
	import { computed, defineAsyncComponent } from 'vue';
	import { useAuthStore } from '$/stores/useAuthStore';
	import { useWishedStore } from '$/stores/useWishedStore';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import Lazyload from '@/component/Lazyload.vue';
	import DawnTag from '@/custom/dawn/component/DawnTag.vue';

	const props = withDefaults(defineProps<{
		tag?: string
		goods: Goods | WishedGoods | Pick<Goods, 'id' | 'name' | 'thumbnail_url'>
		optionText?: string
		displayPrice?: number
		hideTag?: boolean
		hideSaleRate?: boolean
		hideWish?: boolean
		hidePrice?: boolean
		hideBrand?: boolean
		hideFigcaption?: boolean
		link?: string
		withoutLink?: boolean
		hideUpperPrice?: boolean
		isBlockContents?: boolean
		forceBadge?: boolean
		soldoutMessage?: string
	}>(), {
		tag: 'div',
		optionText: '',
		displayPrice: undefined,
		hideTag: false,
		hideSaleRate: false,
		hideWish: false,
		hidePrice: false,
		hideBrand: false,
		link: undefined,
		withoutLink: false,
		hideUpperPrice: false,
		isBlockContents: false,
		hideFigcaption: false,
		forceBadge: false,
		soldoutMessage: 'SOLD OUT',
	});

	const { number } = useFormatter();

	// const { isWishedGoods, pcWishHandler } = useGoodsWish()

	const authStore = useAuthStore();
	const me = authStore.member;

	/** 타입 가드 처리 */
	const thumbnailUrl = computed(() => props.goods.thumbnail_url);
	// const mouseOverImageUrl = computed(() => 'mouse_over_image_url' in props.goods ? props.goods.mouse_over_image_url : '');
	const isSoldout = computed(() => 'is_soldout' in props.goods ? props.goods.is_soldout : false);
	const almostSoldout = computed(() => 'stock' in props.goods ? props.goods.stock < 6 : false);
	const icon = computed(() => 'icon' in props.goods ? props.goods.icon : null);
	const useStockNotify = computed(() => 'is_use_stock_notify' in props.goods ? props.goods.is_use_stock_notify : false);
	const isOnlyAdult = computed(() => 'is_only_adult' in props.goods ? props.goods.is_only_adult : false);
	const headline = computed(() => 'headline' in props.goods ? props.goods.headline : null);
	const name = computed(() => props.goods.name);
	const brandName = computed(() => 'brand_name' in props.goods ? props.goods.brand_name : null);
	const saleRate = computed(() => 'sale_rate' in props.goods ? props.goods.sale_rate : 0);
	const baseDiscountedPrice = computed(() => 'base_discounted_price' in props.goods ? props.goods.base_discounted_price : 0);
	const displayPrice = computed(() => props.displayPrice !== undefined ? props.displayPrice : baseDiscountedPrice.value);
	const price = computed(() => 'price' in props.goods ? props.goods.price : null);
	const reviewScoreAverage = computed(() => 'review_score_average' in props.goods ? props.goods.review_score_average : 0);
	const reviewCount = computed(() => 'review_count' in props.goods ? props.goods.review_count : 0);
	const wishCount = computed(() => 'wish_count' in props.goods ? props.goods.wish_count : 0);
	const badges = computed(() => 'badges' in props.goods ? props.goods.badges : []);
	const isDawnDelivery = computed(() => 'is_dawn_delivery' in props.goods ? props.goods.is_dawn_delivery : false);

	/** 상품아이템 클래스(블록/기본) **/
	const goodsItemDefaultClass = computed(() => props.isBlockContents ? `mui` : `mm`);
	const goodsItemIconClass = computed(() => props.isBlockContents ? `uico` : `ico`);
	const { isWishedGoods, add, remove } = useWishedStore();
	const isWished = computed(() => (isWishedGoods(props.goods.id)));
	const { openOverlay, isMember, router, bom } = useGlobalPageContext();
	const link = computed(() => {
		if (props.link) {
			return props.link;
		}

		if (isOnlyAdult.value && me?.is_verify_age !== true) {
			return {
				name: 'AuthAdult',
				query: {
					redirect_to_after: `/product/${props.goods.id}`,
				},
			};
		}

		return {
			name: 'ProductDetail',
			params: {
				id: props.goods.id,
			},
		};
	});

	const component = defineAsyncComponent(() => import('@/page/mypage/wishlist/product/folder/MyWishlistProductFolder.vue'));

	async function wishedGoods(goodsId: number) {
		if (!isMember.value) {
			return bom.confirm('로그인이 필요합니다 \n로그인 페이지로 이동하시겠습니까?', (flag) => {
				if (flag) {
					router.push({
						name: 'Login',
						query: {
							redirect_to_after: router.currentRoute.value.fullPath,
						},
					});
				}
			});
		}

		if (isWished.value) {
			return remove([goodsId]);
		}

		return openOverlay(component, {
			props: {
				goodsId: goodsId,
			},
			onClose: async () => {
				await add(goodsId);
				// isWished.value = !isWished.value;
				// goodsForMe.value.is_wished = isWishedGoods(goodsId);
				// if (goodsForMe.value.is_wished) {
				// 	shoppingAggregate.value.wish_count = shoppingAggregate.value.wish_count + 1;
				// }
			},
		});
	}
</script>