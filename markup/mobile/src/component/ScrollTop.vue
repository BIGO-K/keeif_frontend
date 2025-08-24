<template>
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

	<!-- 최근 본 상품 -->
	<!-- (D) 최근본 상품이 없을 경우 '.btn_prodetail-recent'요소를 노출하지 않습니다(display none처리가 아닌 요소 삭제) -->
	<a
		class="btn_prodetail-recent"
		@click.prevent="overlayProductRecently"
	>
		<lazyload
			class="mm_bg-cover image_product"
			src="/image/_sample/prod_x1_1.png"
		></lazyload>
		<b class="mm_ir-blind">최근 본 상품</b>
	</a>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref, computed, watch, onMounted, toRefs } from 'vue';
	import { useScroll } from '@vueuse/core';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import Lazyload from '@/component/Lazyload.vue';

	/** 최근 본 상품 */
	const layerContextStore = useLayerContextStore();
	function overlayProductRecently() {
		const component = defineAsyncComponent(() => import('@/page/product/recently/ProductRecently.vue'));

		return layerContextStore.openOverlay(component);
	}

	/** 스크롤 이벤트 */
	const $html = document.documentElement as HTMLElement;
	const $view = ref<HTMLElement|null>(null);
	const $header = ref<HTMLElement|null>(null);
	const $topButton = ref<HTMLElement|null>(null);
	const $scroller = ref<HTMLElement|null>(null);

	const classHeaderHide = 'S=hide';
	const classTopOn = 'S=btn-on';

	const smooth = ref(false);
	const behavior = computed(() => smooth.value ? 'smooth' : 'auto');
	const { y, arrivedState, directions } = useScroll($scroller, { behavior });
	const { top, bottom } = toRefs(directions);

	if ($html.classList.contains(classHeaderHide)) $html.classList.remove(classHeaderHide);

	watch(y, (_currentScrollY, _beforeScrollY) => {

		if (_beforeScrollY < 1 || !$header.value || !$scroller.value) return;

		// 헤더 노출/숨김(keeif minishop에서는 헤더 숨기지 않음)
		if ($header.value && !$view.value?.classList.contains('L=minishop')) {
			if (!arrivedState.bottom && _currentScrollY > $header.value?.offsetHeight * 2) {
				if (top.value) $html.classList.remove(classHeaderHide);
				else if (bottom.value) $html.classList.add(classHeaderHide);
			}
			else $html.classList.remove(classHeaderHide);
		}

		// 탑버튼 노출/숨김
		if (!$html.classList.contains(classHeaderHide) && ($scroller.value?.scrollHeight > window.innerHeight * 1.5) && (_currentScrollY > window.innerHeight * 0.5 || arrivedState.bottom)) $topButton.value?.classList.add(classTopOn);
		else $topButton.value?.classList.remove(classTopOn);

	}, {
		flush: 'post'
	});

	// 페이지 스크롤 위로 이동
	function positionToTop() {

		smooth.value = true;
		y.value = 0;

	}

	onMounted(() => {

		if ($topButton.value !== null) {
			$view.value = document.querySelector('.mm_view') as HTMLElement;

			if ($view.value !== null) {
				$header.value = $view.value.querySelector('.mm_header') as HTMLElement;
				$scroller.value = $view.value.querySelector('.mm_page > .mm_scroller') as HTMLElement;
			}
		}

	});
</script>