<template>
	<template
		v-for="container in containers"
		:key="container.id"
	>
		<block-container :container="container"></block-container>
	</template>
</template>

<script setup lang="ts">
	import BlockContainer from '@/component/block/BlockContainer.vue';

	withDefaults(defineProps<{
		containers: Container[],
		pageName: string
	}>(), {
		containers: () => [],
		pageName: '',
	});
</script>

<style lang="scss">
	@import 'src/asset/scss/block/component/option';
	@import 'src/asset/scss/block/component/product';
</style>