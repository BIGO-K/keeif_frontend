<template>
	<base-block :block="block">
		<block-banner
			v-if="banner"
			:banner="banner"
			:use-circle-outline="true"
		></block-banner>
	</base-block>
</template>
<script setup lang="ts">
	import { computed } from 'vue';
	import BaseBlock from '@/component/block/BaseBlock.vue';
	import BlockBanner from '@/component/block/BlockBanner.vue';

	const props = defineProps<{ block: Block }>();

	const banner = computed(() => props.block.banner_partition?.banners[0]);
</script>

<style lang="scss">
	@import 'src/asset/scss/block/basic/b_n=w6Xh2_s1';
</style>