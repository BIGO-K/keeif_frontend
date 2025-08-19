<template>
	<div
		class="mm_mui"
		:class="{ 'T=full': isFullWidth }"
	>
		<component
			:is="blockComponents[index]"
			v-for="(block, index) in container.blocks"
			:key="block.id"
			:block="block"
		></component>
	</div>
</template>

<script setup lang="ts">
	import { computed, defineAsyncComponent } from 'vue';
	import { useBlock } from '$/composables/useBlock';

	const { getComponentGetter } = useBlock();
	const props = defineProps<{ container: Container }>();
	const container = computed(() => props.container);

	/** 블록 컴포넌트 리스트 */
	const blockComponents = computed(() => {
		return container.value.blocks.map(block => getBlockComponents(block.mui_code));
	});
	const isFullWidth = computed<boolean>(() => {
		const muiCode = props.container.blocks[0].mui_code || '';

		return muiCode.includes('w6');
	});

	/**
	 * 블록 컴포넌트 GETTER
	 * @param name
	 */
	function getBlockComponents(name: string) {
		try {
			const component = defineAsyncComponent(getComponentGetter(name));

			return component;
		}
		catch (e) {
			return null;
		}
	}
</script>
