<template>
	<div data-mui="b_c=w6Xh7_s1_side_1">
		<carousel
			:active-index="carouselIndex"
			:items="banners"
			:use-pagination="true"
			:is-more-side="true"
			:auto-delay="4"
			@ready="_param => carouselIndex = _param.activeIndex"
			@start="_param => carouselIndex = _param.activeIndex"
		>
			<template #default="{ item : banner }">
				<mm-link :to="banner.link ? banner.link : ''">
					<figure>
						<lazyload
							class="mui_bg-cover image_banner"
							:src="banner.image_url"
						></lazyload>
						<figcaption :class="{ ['T=text-black']: banner.text_color === '#000000' }">
							<p
								v-if="banner.is_use_text && banner.text_1"
								class="text_banner1"
							>
								{{ banner.text_1 }}
							</p>
							<p
								v-if="banner.is_use_text && banner.text_2"
								class="text_banner2"
							>
								{{ banner.text_2 }}
							</p>
							<p
								v-if="banner.is_use_text && banner.text_3"
								class="text_banner3"
							>
								{{ banner.text_3 }}
							</p>
							<p class="text_alt">
								{{ banner.alt }}
							</p>
						</figcaption>
					</figure>
				</mm-link>
			</template>
			<template #pagination="{ realIndex, change }">
				<ol ref="$carouselList">
					<li
						v-for="_i in banners.length"
						:key="_i"
					>
						<button
							:ref="$el => $carouselPages[_i - 1] = $el as HTMLButtonElement"
							type="button"
							class="btn_carousel-page"
							:class="{ ['S=on']: _i - 1 === realIndex }"
							@click="change(_i, _i > realIndex ? 'next' : 'prev')"
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
	import { useBlock } from '$/composables/useBlock';
	import Carousel from '@/component/Carousel.vue';
	import Lazyload from '@/component/Lazyload.vue';

	const props = defineProps<{ block: Block }>();
	const { applyContext, getContext } = useBlock();

	const banners = computed(() => props.block.banner_partition?.banners || []);

	const $carouselParent = computed(() => $carouselList.value?.parentElement);
	const $carouselList = ref<HTMLElement>();
	const $carouselPages = ref<HTMLButtonElement[]>([]);

	const carouselIndex = ref(getContext(props.block)?.carouselIndex || 0);
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
		if (total < 7) return;

		const viewHalf = Math.floor(carouselViewTotal / 2);
		const extra = carouselViewTotal % 2 === 0 ? 1 : 0;// 짝수 추가 계산
		applyContext(props.block, { carouselIndex: _index });
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
	@import 'src/asset/scss/block/basic/b_c=w6Xh7_s1_side_1';
</style>