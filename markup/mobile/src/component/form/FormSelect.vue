<template>
	<div class="mm_form-select">
		<label>
			<select
				ref="selectElement"
				:value="modelValue"
				:disabled="disabled"
				autocomplete="off"
				@change="onChange"
			>
				<slot></slot>
			</select>
			<b class="text_selected">{{ selectedLabel }}</b>
			<i
				class="ico_form-select"
				:class="props.iconClass"
			></i>
		</label>
	</div>
</template>

<script setup lang='ts'>
	import { toRefs, watch, nextTick, ref, onMounted } from 'vue';

	type SelectableValue = string | number | boolean | object | null;

	const props = withDefaults(defineProps<{
		modelValue?: SelectableValue;
		disabled?: boolean;
		iconClass?: string | null;
	}>(), {
		modelValue: false,
		disabled: false,
		iconClass: null,
	});

	const emit = defineEmits<{
		(e: 'update:modelValue', value: SelectableValue): void
	}>();

	const { modelValue } = toRefs(props);

	watch(modelValue, async () => {
		await nextTick();
		updateLabel();
	});

	const selectElement = ref<HTMLSelectElement>();
	const selectedLabel = ref('');

	function onChange(e: Event) {
		const selectElement = (e.target as HTMLSelectElement);
		const selectedOptionElement = selectElement.selectedOptions.item(0);

		const value = (selectedOptionElement && '_value' in selectedOptionElement)
			? selectedOptionElement._value as SelectableValue
			: selectElement.value;

		emit(
			'update:modelValue',
			selectedOptionElement?.hasAttribute('value') === true
				? value
				: value === selectedOptionElement?.innerText.trim() ? null : value
		);
		updateLabel();
	}

	function updateLabel() {
		selectedLabel.value = selectElement.value?.selectedOptions.item(0)?.innerText
			|| selectElement.value?.firstElementChild?.textContent
			|| '';
	}

	onMounted(updateLabel);
</script>