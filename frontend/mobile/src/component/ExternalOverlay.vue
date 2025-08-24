<template>
	<iframe
		:src="prop.src"
	></iframe>
</template>

<script setup lang="ts">
	const prop = defineProps<{
		title: string
		src: string
	}>();

	defineExpose<OverlayComponentExpose>({
		title: prop.title,
		isFull: true,
	});
</script>