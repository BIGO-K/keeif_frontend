<template>
	<app-header v-if="$route.meta.isShowHeader != false">
		<template #title>
			<slot name="title"></slot>
		</template>
	</app-header>

	<div id="mm_body" class="mm_page">
		<!-- 본문 -->
		<slot name="content"></slot>
	</div>
</template>

<script setup lang="ts">
	import { onMounted } from 'vue';
	import AppHeader from '@/components/AppHeader.vue';

	document.documentElement.classList.add('L=popup');

	onMounted(() => {

		// app_page-common.js의 load와 ready를 재실행
		mm.event.dispatch(document, 'DOMContentLoaded'); // ready
		mm.event.dispatch(window, 'load'); // load

	});
</script>