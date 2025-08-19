<template>
	<div data-mui="b_c=w6Xh7_s1_side_1">
		<carousel
			:items="carouselItems"
			:use-pagination="true"
			:is-more-side="true"
			@ready="_param => carouselIndex = _param.activeIndex"
			@start="_param => carouselIndex = _param.activeIndex"
		>
			<template #default="{ item }">
				<mm-link :to="item.link">
					<figure>
						<lazyload
							class="mui_bg-cover image_banner"
							:src="item.image"
						></lazyload>
						<figcaption :class="{ ['T=text-black']: item.isBlack }">
							<template v-if="item.texts.filter(_value => _value != null).length === 0">
								<p class="text_alt">
									{{ item.alt }}
								</p>
							</template>
							<template v-else>
								<p
									v-for="(text, _i) in item.texts"
									:key="text"
									:class="`text_banner${_i + 1}`"
								>
									{{ text }}
								</p>
							</template>
						</figcaption>
					</figure>
				</mm-link>
			</template>
			<template #pagination="{ activeIndex, change }">
				<ol ref="$carouselList">
					<li
						v-for="_i in carouselItems.length"
						:key="_i"
					>
						<button
							:ref="$el => $carouselPages[_i - 1] = $el as HTMLButtonElement"
							type="button"
							class="btn_carousel-page"
							:class="{ ['S=on']: _i - 1 === activeIndex }"
							@click="change(_i, _i > activeIndex ? 'next' : 'prev')"
						>
							<b class="mm_ir-blind">{{ _i }}</b>
						</button>
					</li>
				</ol>
			</template>
		</carousel>
	</div>
</template>

<script setup lang="ts">
	import { ref, watch, computed } from 'vue';
	import { useIntersectionObserver } from '@vueuse/core';
	import Carousel from '@/component/Carousel.vue';
	import Lazyload from '@/component/Lazyload.vue';

	const $carouselParent = computed(() => $carouselList.value?.parentElement);
	const $carouselList = ref<HTMLElement>();
	const $carouselPages = ref<HTMLButtonElement[]>([]);
	const carouselItems = [
		{
			link: '/promotion/111',
			image: '/image/_sample/b_c=w6Xh7_s1_side_1_01.jpg',
			alt: '대체텍스트',
			isBlack: true,
			texts: [
				'사랑스럽고 웨어러블한',
				'주얼리 컬렉션',
				'뉴시즌 단독 특가 20% 할인',
			],
		},
		{
			link: '/event/222',
			image: '/image/_sample/b_c=w6Xh7_s1_side_1_02.jpg',
			alt: '대체텍스트',
			isBlack: false,
			texts: [
				'지금 가장 사랑받는',
				'캐주얼 웨어',
				'TREND WE PICK',
			],
		},
		{
			link: '/promotion/333',
			image: '/image/_sample/b_c=w6Xh7_s1_side_1_03.jpg',
			alt: '대체텍스트',
			isBlack: false,
			texts: [
				'다가올 간절기를 위한',
				'베스트 아이템',
				'단 하루, 최대 50% 할인!',
			],
		},
		{
			link: '/event/222',
			image: '/image/_sample/b_c=w6Xh7_s1_side_1_02.jpg',
			alt: '대체텍스트',
			isBlack: true,
			texts: [
				'지금 가장 사랑받는',
				'캐주얼 웨어',
				'TREND WE PICK',
			],
		},
		{
			link: '/promotion/333',
			image: '/image/_sample/b_c=w6Xh7_s1_side_1_03.jpg',
			alt: '대체텍스트',
			isBlack: true,
			texts: [
				'다가올 간절기를 위한',
				'베스트 아이템',
				'단 하루, 최대 50% 할인!',
			],
		},
		{
			link: '/promotion/111',
			image: '/image/_sample/b_c=w6Xh7_s1_side_1_01.jpg',
			alt: '대체텍스트',
			isBlack: false,
			texts: [
				'사랑스럽고 웨어러블한',
				'주얼리 컬렉션',
				'뉴시즌 단독 특가 20% 할인',
			],
		},
		{
			link: '/event/222',
			image: '/image/_sample/b_c=w6Xh7_s1_side_1_02.jpg',
			alt: '대체텍스트',
			isBlack: true,
			texts: [
				'지금 가장 사랑받는',
				'캐주얼 웨어',
				'TREND WE PICK',
			],
		},
		{
			link: '/promotion/333',
			image: '/image/_sample/b_c=w6Xh7_s1_side_1_03.jpg',
			alt: '대체텍스트',
			isBlack: false,
			texts: [
				'다가올 간절기를 위한',
				'베스트 아이템',
				'단 하루, 최대 50% 할인!',
			],
		},
		{
			link: '/promotion/111',
			image: '/image/_sample/b_c=w6Xh7_s1_side_1_01.jpg',
			alt: '대체텍스트',
			isBlack: false,
			texts: [
				'사랑스럽고 웨어러블한',
				'주얼리 컬렉션',
				'뉴시즌 단독 특가 20% 할인',
			],
		},
		{
			link: '/event/222',
			image: '/image/_sample/b_c=w6Xh7_s1_side_1_02.jpg',
			alt: '대체텍스트',
			isBlack: true,
			texts: [
				'지금 가장 사랑받는',
				'캐주얼 웨어',
				'TREND WE PICK',
			],
		},
		{
			link: '/promotion/333',
			image: '/image/_sample/b_c=w6Xh7_s1_side_1_03.jpg',
			alt: '대체텍스트',
			isBlack: false,
			texts: [
				'다가올 간절기를 위한',
				'베스트 아이템',
				'단 하루, 최대 50% 할인!',
			],
		},
	];
	const carouselIndex = ref(NaN);
	const carouselFadeClass = 'S=fade';
	const carouselViewTotal = 7;

	useIntersectionObserver($carouselPages, _entries => {
			for (const entry of _entries) {
				entry.target.classList[entry.isIntersecting ? 'remove' : 'add'](carouselFadeClass);
			}
		},
		{
			root: $carouselParent,
			rootMargin: '0px -8px',
			threshold: [0, 1],
		},
	);

	watch(carouselIndex, (_index, _oldIndex) => {
		if ($carouselList.value == null) return;

		const total = $carouselPages.value.length;
		const viewHalf = Math.floor(carouselViewTotal / 2);
		const extra = carouselViewTotal % 2 === 0 ? 1 : 0;// 짝수 추가 계산
		if (total <= viewHalf) return;

		let x = null;
		if (_index >= viewHalf && _index < total - viewHalf + extra) x = _index - viewHalf;
		else if (_oldIndex === total - 1 && _index === 0) x = 0;
		else if (_oldIndex === 0 && _index === total - 1) x = total - carouselViewTotal;

		if (x != null) $carouselList.value.style.transform = `translateX(${-$carouselList.value.offsetWidth / $carouselPages.value.length * x}px)`;
	}, {
		immediate: true,
	});
</script>

<style lang="scss">
	@use '../../../../asset/scss/helper/function';
	@use '../../../../asset/scss/helper/mixin';
	@use '../../../../asset/scss/helper/const';
	@use '../../../../asset/scss/helper/var';

	[data-mui='b_c=w6Xh7_s1_side_1'] {
		.mui_carousel {
			&-inner {
				padding: 0 23px;// 기본 중앙
			}

			&-list {
				padding-top: calc(100% + 6px);// (23 - 20) * 2 = (중앙 패딩 - 여백) * 좌우
			}

			&-item {
				padding: 0 13px;
				height: 100%;

				&#{function.escape('.S=on')} {
					figure {
						width: calc(100% + 32px);
						transform: translateX(-16px);

						&::after {
							opacity: 0;
						}
					}
				}

				a {
					position: relative;
					top: 50%;
					@include mixin.transform(translateY(-50%));
				}

				.image_banner {
					overflow: hidden;
					position: relative;
					padding-top: 100%;
					width: 100%;
					border-radius: 10px;
				}

				figure {
					position: relative;
					width: 100%;
					transition: 0.15s ease-out;
					transition-property: width, transform;

					&::after {
						position: absolute;
						top: 0;
						right: 0;
						bottom: 0;
						left: 0;
						background-image: linear-gradient(0deg, #fff 4%, rgb(0 0 0 / 0.08) 60%);
						transition: opacity 0.15s ease-out;
						content: '';
					}
				}

				figcaption {
					position: absolute;
					z-index: 1;
					right: 0;
					bottom: 10.11904%;
					left: 0;
					padding: 0 28px;
					@include mixin.font(#fff 600 '2.3rem/2.7rem' center);

					&#{function.escape('.T=text-black')} {
						color: var(--color_text_base);
					}

					.text_banner2 {
						margin-top: 2px;
					}

					.text_banner3 {
						margin-top: 9px;
						@include mixin.font(500 '1.5rem/1.8rem');
					}

					.text_alt {
						@include mixin.text_ellipsis(2);
						@include mixin.font(#a3a3a3 '1.4rem/2rem');

						@include mixin.context-after(':not(.mui_image-none)', 'figure') {
							display: none;
						}
					}
				}

				// 이미지 에러
				.mui_image-none {
					.uico_none {
						background-color: #f5f5f5;
					}
				}
			}

			&-pagination {
				overflow: hidden;
				bottom: -22px;
				width: 8px * 7;

				ol {
					display: inline-block;
					transition: transform const.$time_fast;
				}

				li {
					padding: 0 2px;
				}

				button {
					width: 4px;
					height: 4px;
					border-radius: 2px;
					background-color: #000;
					opacity: 0.5;
					transition: const.$time_fast;
					transition-property: transform, opacity;

					&#{function.escape('.S=fade')} {
						transform: scale(0.5);
					}

					&#{function.escape('.S=on')} {
						opacity: 1;
						transform: scale(1);
					}
				}
			}
		}
	}
</style>