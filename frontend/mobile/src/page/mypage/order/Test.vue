
<template>
	<div class="mm_scroller">
		<iframe
			:src="deliveryTrackingUrl"
		></iframe>
	</div>
</template>

<script setup lang="ts">
	const prop = defineProps<{
		title: string
		deliveryTrackingUrl: string
	}>();

	defineExpose<OverlayComponentExpose>({
		title: prop.title,
		isFull: true,
	});
</script>
