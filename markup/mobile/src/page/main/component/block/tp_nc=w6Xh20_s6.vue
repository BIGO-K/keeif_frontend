<template>
	<div data-mui="tp_nc=w6Xh20_s6">
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
			:auto-delay="4"
			:is-auto-height="true"
			@start="_param => carouselIndex = _param.activeIndex"
		>
			<template #default="{ item }">
				<div class="mui_product-list">
					<ul>
						<li
							v-for="entry in item"
							:key="entry.goods.name"
						>
							<product-item :is-block-content="true"></product-item>
						</li>
					</ul>
				</div>
			</template>
		</carousel>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed, watch } from 'vue';
	import Carousel from '@/component/Carousel.vue';
	import ProductItem from '@/component/ProductItem.vue';

	// 원본 데이터
	const blockDatas = ref([
		{
			tab: '# 탭메뉴 1',
			items: [
				{
					goods: {
						name: '1 No.3 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '2 No.3 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '3 No.3 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '4 No.3 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '5 No.3 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '6 No.3 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '7 No.3 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '8 No.3 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '9 No.3 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '10 No.3 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
			],
		},
		{
			tab: '# 탭메뉴 2',
			items: [
				{
					goods: {
						name: 'No.2-1 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: 'No.2-2 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: 'No.2-3 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
			],
		},
		{
			tab: '# 탭메뉴 3',
			items: [
				{
					goods: {
						name: '3-01 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '3-02 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '3-03 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '3-04 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '3-05 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
			],
		},
		{
			tab: '# 탭메뉴 4',
			items: [
				{
					goods: {
						name: '444-1 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '444-2 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '444-3 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '444-4 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '444-5 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '444-6 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '444-7 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '444-8 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '444-9 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '444-10 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
				{
					goods: {
						name: '444-11 Basic Collection 베이직 컬렉션 시그니쳐 오로라 쉘 칼라 캔들 M',
					},
					link: '/product/111',
				},
			],
		},
	]);

	const $carousel = ref<{
		change: (_index: number, _direction?: 'next' | 'prev') => void;
	}>();

	const splitSize = 6;
	const tabItems = computed(() => blockDatas.value.reduce((_results: { name: string, size: number, total: number }[], _item, _i) => {
		const size = Math.ceil(_item.items.length / splitSize);
		_results.push({
			name: _item.tab,
			size: size,
			total: _i === 0 ? size : _results[_results.length - 1].total + size,
		});

		return _results;
	}, []));
	const tabIndex = ref(0);
	const carouselItems = computed(() => blockDatas.value.map(_item => {
		return _item.items.reduce((_results: (typeof _item.items)[], _entry, _index) => {
			if (_index % splitSize === 0) _results.push([]);
			_results[_results.length - 1].push(_entry);

			return _results;
		}, []);
	}).flat());
	const carouselIndex = ref(0);

	const changeCarousel = (_index: number) => {
		const index = _index === 0 ? 0 : tabItems.value[_index - 1].total;
		$carousel.value?.change(index, index > carouselIndex.value ? 'next' : 'prev');
	};

	watch(carouselIndex, _value => {
		tabIndex.value = tabItems.value.findIndex(_item => _value < _item.total);
	}, {
		immediate: true,
	});
</script>

<style src="./_product.scss" lang="scss"></style>
<style lang="scss">
	@use '../../../../asset/scss/helper/function';
	@use '../../../../asset/scss/helper/mixin';
	@use '../../../../asset/scss/helper/const';
	@use '../../../../asset/scss/helper/var';

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