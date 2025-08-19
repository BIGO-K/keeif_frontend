<template>
	<div
		v-if="isMainLayerShow"
		class="m_main-layer S=on"
		:class="[`T=p${mainLayerType}`, { 'T=layer-toast': mainLayerLayout === 'toast' }]"
	>
		<div class="m_main-layer-dim"></div>
		<div class="m_main-layer-item">
			<slot :close-layer="closeLayer"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

	const mainLayerLayout = ref('toast');
	const mainLayerType = ref('b');

	// 메인 팝업 노출 여부
	const isMainLayerShow = ref<boolean>(true);

	// 레이어팝업 닫기
	function closeLayer(_isToday: boolean) {

		// 오늘 하루 보지 않기
		if (_isToday) {
			//
		}

		document.documentElement.classList.remove('S=noscroll');
		isMainLayerShow.value = false;

	}
</script>