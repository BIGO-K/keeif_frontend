<template>
	<base-block :block="block">
		<div class="mui_tabmenu">
			<ul>
				<li
					v-for="(item, _i) in tabItems"
					:key="item.name"
				>
					<button
						type="button"
						class="btn_menu"
						:class="{ ['S=on']: _i === tabIndex }"
						@click="changeCarousel(_i)"
					>
						<b>{{ item.name }}</b>
					</button>
				</li>
			</ul>
		</div>
		<carousel
			ref="$carousel"
			:active-index="carouselIndex"
			:items="carouselItems"
			:auto-delay="0"
			:is-auto-height="true"
			@start="_param => carouselIndex = _param.activeIndex"
		>
			<template #default="{ item: goodsList }">
				<div class="mui_product-list">
					<ul>
						<li
							v-for="goods in goodsList"
							:key="goods.id"
						>
							<goods-item
								:goods="goods"
								is-block-contents
							>
							</goods-item>
						</li>
					</ul>
				</div>
			</template>
		</carousel>
	</base-block>
</template>

<script setup lang="ts">
	import { ref, computed, watch } from 'vue';
	import { useBlock } from '$/composables/useBlock';
	import Carousel from '@/component/Carousel.vue';
	import GoodsItem from '@/component/GoodsItem.vue';
	import BaseBlock from '@/component/block/BaseBlock.vue';

	const props = defineProps<{ block: Block }>();

	const { applyContext, getContext } = useBlock();

	/** 캐러셀 컴포넌트 */
	const $carousel = ref<{
		change: (_index: number, _direction?: 'next' | 'prev') => void;
	}>();

	/** 한 캐러셀당 노출되는 상품 갯수 */
	const splitSize = (props.block.tabs || [])[0]?.goods_group?.per_page || 6;

	/** 탭 리스트 */
	const tabItems = computed(() => (props.block.tabs || []).reduce((_results: { name: string, size: number, total: number }[], _item) => {
		if (_item.goods_group && (_item.goods_group.goods_list || []).length) {
			const size = Math.ceil((_item.goods_group.goods_list.length) / splitSize);
			_results.push({
				name: _item.title,
				size: size,
				total: _results.length === 0 ? size : _results[_results.length - 1].total + size,
			});
		}

		return _results;
	}, []));

	/** 현재 탭 index */
	const tabIndex = ref(0);

	/** 상품리스트 (캐러셀당 노출되는 갯수로 split) */
	const carouselItems = computed(() => (props.block.tabs || []).map(_item => {
		return (_item.goods_group?.goods_list || []).reduce((_results: GoodsGroup['goods_list'][], _entry, _index) => {
			if (_index % splitSize === 0) _results.push([]);
			_results[_results.length - 1].push(_entry);

			return _results;
		}, []);
	}).flat());

	/** 현재 캐러셀 index */
	const carouselIndex = ref(getContext(props.block)?.carouselIndex || 0);

	/** 캐러셀 이동 */
	const changeCarousel = (_index: number) => {
		const index = _index === 0 ? 0 : tabItems.value[_index - 1].total;
		$carousel.value?.change(index, index > carouselIndex.value ? 'next' : 'prev');
	};

	/** 캐러셀 index 변경 */
	watch(carouselIndex, _value => {
		tabIndex.value = tabItems.value.findIndex(_item => _value < _item.total);
		applyContext(props.block, { carouselIndex: _value });
	}, {
		immediate: true,
	});
</script>

<style src="./_product.scss" lang="scss"></style>
<style lang="scss">
	@use '../asset/scss/helper/function';
	@use '../asset/scss/helper/mixin';
	@use '../asset/scss/helper/const';
	@use '../asset/scss/helper/var';

	[data-mui='tp_nc=w6Xh20_s6'] {
		padding: 0 14px;

		.mui_tabmenu {
			overflow: hidden;
			margin-bottom: 14px;

			ul {
				margin: -10px 0 0 -4px;

				li {
					float: left;
					margin: 10px 0 0 4px;
				}
			}

			.btn_menu {
				padding: 0 15px;
				height: 35px;
				border: 1px solid #e6e6e6;
				border-radius: 3px;
				@include mixin.font(#4a4a4a '1.4rem/3.5rem');

				&#{function.escape('.S=on')} {
					border-color: #1f1f1f;
					color: var(--color_text_base);
				}
			}
		}

		.mui_carousel {
			.mui_product-list {
				> ul {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					grid-gap: 26px 12px;

					> li {
						min-width: 0;
					}

					&::after {
						content: none;
					}
				}
			}
		}
	}
</style>