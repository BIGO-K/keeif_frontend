<template>
	<!-- 최근 본 상품 -->
	<a
		v-if="$route.name === 'ProductDetail'"
		ref="$recentProduct"
		class="btn_prodetail-recent"
		@click.prevent="overlayProductRecently"
	>
		<lazyload
			class="mm_bg-cover image_product"
			:src="recentViewGoodsImage"
		></lazyload>
		<b class="mm_ir-blind">최근 본 상품</b>
	</a>

	<a
		ref="$topButton"
		class="btn_topmost"
		href="#mm_app"
		data-href="{ '_type': 'anchor' }"
		title="페이지 처음으로"
		@click.prevent="positionToTop"
	>
		<i class="ico_topmost"></i><b>TOP</b>
	</a>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref, computed, watch, onMounted, toRefs } from 'vue';
	import { useRoute } from 'vue-router';
	import { useScroll } from '@vueuse/core';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import { useRecentViewGoodsStore } from '$/stores/useRecentViewGoodsStore';
	import Lazyload from '@/component/Lazyload.vue';

	const route = useRoute();
	/** 최근 본 상품 */
	const layerContextStore = useLayerContextStore();
	function overlayProductRecently() {
		const component = defineAsyncComponent(() => import('@/page/product/recently/ProductRecently.vue'));

		return layerContextStore.openOverlay(component, {
			props: {
				hideCurrentGoods: true,
			},
		});
	}

	const recentViewGoodsStore = useRecentViewGoodsStore();
	const recentViewGoodsImage = computed(() => {
		if (recentViewGoodsStore.recordsByRecent.length < 2) {
			return null;
		}

		return recentViewGoodsStore.recordsByRecent[1].goods.thumbnail_url;
	});

	/** 스크롤 이벤트 */
	const $html = document.documentElement as HTMLElement;
	const $view = ref<HTMLElement|null>(null);
	const $header = ref<HTMLElement|null>(null);
	const $topButton = ref<HTMLElement|null>(null);
	const $recentProduct = ref<HTMLElement|null>(null);
	const $scroller = ref<HTMLElement|null>(null);

	const classHeaderHide = 'S=hide';
	const classTopOn = 'S=btn-on';

	const smooth = ref(false);
	const behavior = computed(() => smooth.value ? 'smooth' : 'auto');
	const { y, arrivedState, directions } = useScroll($scroller, { behavior });
	const { top, bottom } = toRefs(directions);

	watch(y, (_currentScrollY, _beforeScrollY) => {
		if (!_beforeScrollY) return $html.classList.remove(classHeaderHide);

		if (_beforeScrollY < 1 || !$header.value || !$scroller.value) return;

		// 헤더 노출/숨김(keeif minishop에서는 헤더 숨기지 않음)
		if ($header.value && !$view.value?.classList.contains('L=minishop')) {
			if (!arrivedState.bottom && _currentScrollY > $header.value?.offsetHeight * 2) {
				if (top.value) $html.classList.remove(classHeaderHide);
				else if (bottom.value) $html.classList.add(classHeaderHide);
			}
			else $html.classList.remove(classHeaderHide);
		}

		// 탑버튼, 최근본상품 노출/숨김
		if (!$html.classList.contains(classHeaderHide) && ($scroller.value?.scrollHeight > window.innerHeight * 1.5) && (_currentScrollY > window.innerHeight * 0.5 || arrivedState.bottom)) {
			$topButton.value?.classList.add(classTopOn);
			$recentProduct.value?.classList.add(classTopOn);
		}

		else {
			$recentProduct.value?.classList.remove(classTopOn);
			$topButton.value?.classList.remove(classTopOn);
		}

	}, {
		immediate: true,
	});

	// 페이지 스크롤 위로 이동
	function positionToTop() {
		smooth.value = true;
		y.value = 0;

	}

	onMounted(() => {
		if ($topButton.value !== null) {
			$view.value = document.querySelector<HTMLElement>(`[data-path="${route.path}"]`);
			if ($view.value !== null) {
				$header.value = $view.value.querySelector('.mm_header') as HTMLElement;
				$scroller.value = $view.value.querySelector('.mm_page > .mm_scroller') as HTMLElement;
			}
		}

	});
</script>