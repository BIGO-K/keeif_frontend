<template>
	<base-block :block="block">
		<div class="mm_scroller T=x">
			<ul>
				<li
					v-for="banner in block.banner_partition?.banners"
					:key="banner.id"
				>
					<block-banner
						:banner="banner"
						:use-circle-outline="true"
					></block-banner>
				</li>
			</ul>
		</div>
		<!-- (D) pc에서만 컨트롤 버튼이 노출됩니다. -->
		<div
			v-if="isPc"
			class="mui_btn_box"
		>
			<button
				ref="$btnPrev"
				type="button"
				class="btn_prev"
				@click="changeScroll('prev')"
			>
				<i class="ico_scroll-control-prev"></i><b class="mui_ir-blind">이전</b>
			</button>
			<button
				ref="$btnNext"
				type="button"
				class="btn_next"
				@click="changeScroll('next')"
			>
				<i class="ico_scroll-control-next"></i><b class="mui_ir-blind">다음</b>
			</button>
		</div>
	</base-block>
</template>
<script setup lang="ts">
	import { ref, watch, onMounted, computed } from 'vue';
	import { useScroll } from '@vueuse/core';
	import { useAnimation } from '$/composables/useAnimation';
	import { useUserAgent } from '$/composables/useUserAgent';
	import BaseBlock from '@/component/block/BaseBlock.vue';
	import BlockBanner from '@/component/block/BlockBanner.vue';

	defineProps<{ block: Block }>();

	const animation = useAnimation();
	const { isMobileUser } = useUserAgent();
	const isPc = !isMobileUser;

	const $scroller = ref<HTMLElement|null>(null);
	const $btnPrev = ref<HTMLElement|null>(null);
	const $btnNext = ref<HTMLElement|null>(null);
	const scrollPosition = ref(0);
	const scrollGap = 72;
	const activeClass = 'S=on';


	const smooth = ref(false);
	const behavior = computed(() => smooth.value ? 'smooth' : 'auto');
	const { x } = useScroll($scroller, { behavior });

	const scrollXWatcherStop = watch(x, (_currentScrollX) => {

		if (!isPc || _currentScrollX === null || $scroller.value === null) return;

		if (_currentScrollX > 0) {
			$btnPrev.value?.classList.add(activeClass);

			if ($scroller.value?.scrollWidth <= $scroller.value?.clientWidth + _currentScrollX) $btnNext.value?.classList.remove(activeClass);
			else $btnNext.value?.classList.add(activeClass);
		}
		else {
			$btnPrev.value?.classList.remove(activeClass);
		}

		scrollPosition.value = _currentScrollX;

	}, {
		immediate: true,
	});

	onMounted(() => {

		if (!isPc) {
			scrollXWatcherStop();

			return;
		}

		const scroller = document.querySelector<HTMLElement>('[data-mui="b_s=w6Xh2_s4"] .mm_scroller');

		if (scroller) {
			$scroller.value = scroller;

			if ($scroller.value === null) return;

			if ($scroller.value?.clientWidth < $scroller.value?.scrollWidth) $btnNext.value?.classList.add(activeClass);
		}
	});


	async function changeScroll(_controller: string) {

		if (!isPc || $scroller.value === null) return;

		if (_controller === 'prev') scrollPosition.value -= scrollGap;
		else scrollPosition.value += scrollGap;

		animation.to($scroller.value, { scrollLeft: scrollPosition.value, duration: 0.2 });

	}
</script>

<style lang="scss">
	@import 'src/asset/scss/block/basic/b_s=w6Xh2_s4';
</style>