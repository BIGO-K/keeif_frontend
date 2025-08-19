<template>
	<template v-if="isShow">
		<main-layer-toast-b
			:banners="mainLayerBanners"
			@close="({ hideToday }) => close(hideToday || false)"
		>
		</main-layer-toast-b>
	</template>
</template>
<script setup lang="ts">
	import { ref, onBeforeUnmount } from 'vue';
	import { useMainBanner } from '$/composables/useMainBanner';
	import MainLayerToastB from '@/page/main/component/layer/b/MainLayerToastB.vue';

	const { mainLayerBanners, isHideToday, all, hide } = useMainBanner();

	const isShow = ref(false);

	/**
	 * 팝업 열기
	 */
	function open() {
		document.documentElement.classList.add('S=noscroll');
		isShow.value = true;
	}

	/**
	 * 팝업 닫기
	 * @param hideToday
	 */
	function close(hideToday: boolean = false) {
		if (hideToday) {
			hide();
		}

		document.documentElement.classList.remove('S=noscroll');
		isShow.value = false;
	}

	/** 숨김처리 안된경우 메인팝업배너 조회 */
	if (!isHideToday.value) {
		await all();
	}

	/** 메인팝업배너가 빈배열이 아닐경우 팝업 open 처리 */
	if (mainLayerBanners.value.length) {
		open();
	}

	onBeforeUnmount(() => {
		document.documentElement.classList.remove('S=noscroll');
	});
</script>