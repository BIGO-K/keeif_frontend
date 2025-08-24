<template>
	<div
		v-if="title1 || title2"
		class="mui_title"
		:class="[
			designClassName,
			positionClass
		]"
	>
		<h3
			v-if="title1"
			class="title_main"
		>
			<b>{{ title1 }}</b>
		</h3>
		<h4
			v-if="title2"
			class="title_sub"
		>
			<b>{{ title2 }}</b>
		</h4>
	</div>
</template>

<script setup lang='ts'>
	import { computed } from 'vue';

	const props = defineProps<{
		title1: Block['title_1']
		title2: Block['title_2']
		designClassName?: Block['design_title_class_name']
		position?: 'default'|'center'|'right'
	}>();

	const positionClass = computed<string>(() => {
		if (!props.position || props.position === 'default') {
			return '';
		}

		return props.position === 'center' ? 'T=center' : 'T=right';
	});
</script>
