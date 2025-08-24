<template>
	<layout-main>
		<template #main>
			<block-page
				page-name="main"
				:containers="containers"
			></block-page>
		</template>
	</layout-main>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useBlock } from '$/composables/useBlock';
	import LayoutMain from '@/component/layout/LayoutMain.vue';
	import BlockPage from '@/component/block/BlockPage.vue';

	const containers = ref<Container[]>([]);

	try {
		containers.value = await useBlock().getPage('mainpage');
	}
	catch (e) {
		//console.error(e);
	}
</script>