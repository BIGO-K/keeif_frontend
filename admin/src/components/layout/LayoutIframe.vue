<template>
	<div id="mm_body" class="mm_page">
		<!-- 본문 -->
		<slot name="content"></slot>
	</div>
</template>

<script setup lang="ts">
	document.documentElement.classList.add('L=frame');
</script>