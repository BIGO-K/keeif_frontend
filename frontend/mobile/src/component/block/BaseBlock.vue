<template>
	<div :data-mui="block.mui_code">
		<block-title
			:title1="block.title_1"
			:title2="block.title_2"
			:design-class-name="block.design_title_class_name"
		></block-title>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
	import BlockTitle from '@/component/block/BlockTitle.vue';

	defineProps<{ block: Block }>();
</script>