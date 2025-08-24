<template>
	<layout title="상품 공구관">
		<div class="m_coopbuy">
			<div class="mm_inner">
				<!-- 메뉴 -->
				<div
					ref="$coopbuyMenu"
					class="m_coopbuy-menu"
					:class="classSticky"
				>
					<div class="m_coopbuy-menu-list">
						<ul class="mm_flex T=equal">
							<li
								v-for="item in tabItems"
								:key="item.name"
							>
								<mm-link
									:class="{ 'S=menu-on': item.name === route.name }"
									active-class="S=menu-on"
									:to="{ name: item.name }"
									replace
								>
									<b>{{ item.meta?.tab ?? '' }}</b>
								</mm-link>
							</li>
						</ul>
					</div>
				</div>

				<!-- 띠배너 -->
				<div
					v-if="ribbonCarouselItems.length > 0"
					class="m_coopbuy-ribbon"
				>
					<carousel
						:items="ribbonCarouselItems"
						:use-pagination="true"
						:auto-delay="4"
					>
						<template #default="{ item }">
							<mm-link :to="item.link">
								<lazyload
									class="mm_bg-contain"
									:src="item.image"
								></lazyload>
								<span class="mm_ir-blind">{{ item.alt }}</span>
							</mm-link>
						</template>
					</carousel>
				</div>

				<router-view></router-view>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, computed, watch, onMounted } from 'vue';
	import { useRoute } from 'vue-router';
	import { useScroll } from '@vueuse/core';
	import Layout from '@/component/layout/Layout.vue';
	import Carousel from '@/component/Carousel.vue';
	import Lazyload from '@/component/Lazyload.vue';

	const ribbonCarouselItems = [
		{
			image: '/image/_sample/coopbuy_ribbon_banner1.jpg',
			alt: '특별한 하루를 위한 진정케어, 피부 타입별 추천, 50% 할인',
			link: '/product/123',
		},
		{
			image: '/image/_sample/coopbuy_ribbon_banner1.jpg',
			alt: '222특별한 하루를 위한 진정케어, 피부 타입별 추천, 50% 할인',
			link: '/product/222',
		},
		{
			image: '/image/_sample/coopbuy_ribbon_banner1.jpg',
			alt: '333특별한 하루를 위한 진정케어, 피부 타입별 추천, 50% 할인',
			link: '/product/333',
		},
	];

	const route = useRoute();
	const tabItems = route.matched.at(-2)?.children;

	const $view = ref<HTMLElement|null>(null);
	const $scroller = ref<HTMLElement|null>(null);
	const $coopbuyMenu = ref<HTMLElement|null>(null);

	const classSticky = ref('');

	const smooth = ref(false);
	const behavior = computed(() => smooth.value ? 'smooth' : 'auto');
	const { y } = useScroll($scroller, { behavior });

	watch(y, (_currentScrollY, _beforeScrollY) => {

		if (_beforeScrollY < 1 || !$coopbuyMenu.value) return;

		classSticky.value = ($coopbuyMenu.value.getBoundingClientRect().top + $coopbuyMenu.value.offsetHeight < 0) ? 'S=sticky-on' : '';

	});

	onMounted(() => {

		$view.value = document.querySelector('.mm_view') as HTMLElement;
		if ($view.value !== null) $scroller.value = $view.value.querySelector('.mm_page > .mm_scroller') as HTMLElement;

	});
</script>