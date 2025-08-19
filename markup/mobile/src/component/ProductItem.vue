<template>
	<div
		:class="`${prefix}_product-item`"
	>
		<mm-link :to="prop.link">
			<p
				v-if="prop.useRank"
				class="text_rank"
			></p>
			<figure>
				<lazyload
					:class="`${prefix}_bg-cover image_product`"
					:src="isAdultOnly ? null : `/image/_sample/prod_x3_1.png`"
				></lazyload>
				<p
					v-if="isAdultOnly"
					class="text_adult"
				>
					<b :class="`${prefix}_ir-blind`">미성년자 구매불가</b>
					<i :class="`${iconPrefix}_adult`"></i>
				</p>
				<p
					v-if="isSoldout"
					class="text_soldout"
				>
					SOLD OUT
				</p>
				<p
					v-if="isLowStock"
					class="text_product-status"
				>
					품절임박
				</p>
				<product-icon v-if="!isSoldout && icon != null"></product-icon>
				<restock-icon v-if="useRestock"></restock-icon>
				<figcaption>
					<p class="text_brand">
						{{ '브랜드' }}
					</p>
					<p class="text_product">
						<headline v-if="headlineText != null"></headline>
						{{ '상품명상품명상품명상품명상품명' }}
					</p>
					<p class="text_sale">
						{{ '20%' }}
					</p>
					<p class="text_price">
						<strong>{{ '126,400' }}</strong><del v-if="prop.useListPrice"><span>{{ '158,000' }}</span></del>
					</p>
					<div
						v-if="prop.useReact"
						:class="`${prefix}_product-item-react`"
					>
						<p class="text_star">
							<i :class="`${iconPrefix}_star`"></i><span>{{ '4.5' }}</span>
						</p>
						<p class="text_review">
							<i :class="`${iconPrefix}_review`"></i><span>{{ '890' }}</span>
						</p>
						<p class="text_like">
							<i :class="`${iconPrefix}_like`"></i><span>{{ '999+' }}</span>
						</p>
					</div>
					<div
						v-if="prop.useBadge"
						:class="`${prefix}_tag-list`"
					>
						<dawn-tag
							v-if="true"
							:is-block-content="prop.isBlockContent"
						></dawn-tag>
						<b :class="`${prefix}_tag T=square T=dark`">무료배송</b>
					</div>
				</figcaption>
			</figure>
		</mm-link>
		<toggle
			v-if="prop.useWish"
			class="btn_like"
			:is-active="isWished"
		>
			<i :class="`${iconPrefix}_like`"></i><b :class="`${prefix}_ir-blind`">찜한 아이템에 추가하기</b>
		</toggle>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';
	import Lazyload from '@/component/Lazyload.vue';
	import Toggle from '@/component/Toggle.vue';
	import Headline from '@/feature/headline/Headline.vue';
	import ProductIcon from '@/feature/product-icon/component/ProductIcon.vue';
	import RestockIcon from '@/feature/restock/component/RestockIcon.vue';
	import DawnTag from '@/custom/dawn/component/DawnTag.vue';

	const prop = withDefaults(defineProps<{
		/** @prop { boolean } `default: false` - 블록 여부 */
		isBlockContent?: boolean;
		/** @prop { boolean } `default: true` - 정가 노출 */
		useListPrice?: boolean;
		/** @prop { boolean } `default: true` - 랭킹 사용 */
		useRank?: boolean;
		/** @prop { boolean } `default: true` - 좋아요 수, 리뷰 수, 리뷰 스코어 평균 등 반응 사용 */
		useReact?: boolean;
		/** @prop { boolean } `default: true` - 무료배송 등 뱃지 사용 */
		useBadge?: boolean;
		/** @prop { boolean } `default: true` - 찜한 아이템 사용 */
		useWish?: boolean;
		/** @prop { boolean } `default: ''` - 링크 */
		link?: string;
	}>(), {
		isBlockContent: false,
		useListPrice: true,
		useRank: true,
		useReact: true,
		useBadge: true,
		useWish: true,
		link: '',
	});

	const prefix = computed(() => prop.isBlockContent ? 'mui' : 'mm');
	const iconPrefix = computed(() => prop.isBlockContent ? 'uico' : 'ico');
	const isAdultOnly = computed(() => Math.floor(Math.random() * 2) == 0 ? true : false);// return prop.goods.is_only_aduld ?? false && !me?.is_verify_age;
	const isSoldout = computed(() => Math.floor(Math.random() * 2) == 0 ? true : false);// return prop.goods.is_soldout ?? false;
	const isLowStock = computed(() => Math.floor(Math.random() * 2) == 0 ? true : false);// return 'stock' in prop.goods ? prop.goods.stock < 6 : false;
	const useRestock = computed(() => Math.floor(Math.random() * 2) == 0 ? true : false);// return prop.goods.is_use_stock_notify ?? false;
	const icon = computed(() => null);// return prop.goods.icon ?? null;
	const headlineText = computed(() => null);// return prop.goods.headline ?? null;
	const isWished = ref(false);
</script>