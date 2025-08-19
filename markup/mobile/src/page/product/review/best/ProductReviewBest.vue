<template>
	<product-review-content></product-review-content>
</template>

<script setup lang="ts">
	import ProductReviewContent from '@/page/product/review/component/ProductReviewContent.vue';

	defineExpose<OverlayComponentExpose>({
		title: `베스트 리뷰`,
		isFull: true,
	});
</script>

