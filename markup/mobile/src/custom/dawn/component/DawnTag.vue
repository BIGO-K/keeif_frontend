<template>
	<b :class="`${prefix}_tag T=dawn`">
		<i :class="`${iconPrefix}_dawn`"></i>
		<span :class="`${prefix}_ir-blind`">새벽배송</span>
	</b>
</template>

<script setup lang="ts">
	import { computed } from 'vue';

	const prop = withDefaults(defineProps<{
		/** @prop { boolean } `default: false` - 블록 여부 */
		isBlockContent?: boolean;
	}>(), {
		isBlockContent: false,
	});

	const prefix = computed(() => prop.isBlockContent ? 'mui' : 'mm');
	const iconPrefix = computed(() => prop.isBlockContent ? 'uico' : 'ico');
</script>