<template>
	<label
		class="mm_form-radio"
		:class="props.class"
	>
		<input
			v-bind="{ ...attrs }"
			type="radio"
			:checked="isChecked"
			@change="onChange"
		>
		<!-- 라디오 하위에 들어가는 항목 정의 -->
		<slot></slot>
	</label>
</template>

<script setup lang="ts">
	import { computed, toRefs, useAttrs } from 'vue';
	type SelectableValue = string | number | boolean | object | null

	defineOptions({
		inheritAttrs: false
	});

	const props = withDefaults(defineProps<{
		modelValue?: SelectableValue
		value?: SelectableValue
		class?: string
	}>(), {
		modelValue: false,
		value: false,
		class: ''
	});

	const emit = defineEmits<{
		(e: 'update:modelValue', value: SelectableValue): void
	}>();

	const { modelValue } = toRefs(props);
	const attrs = useAttrs();

	const isChecked = computed(() => modelValue.value === props.value);

	function onChange() {
		emit('update:modelValue', props.value);
	}
</script>