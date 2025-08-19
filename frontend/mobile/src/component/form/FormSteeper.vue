<template>
	<div
		class="mm_stepper"
	>
		<div class="mm_form-text">
			<label>
				<input
					ref="element"
					type="text"
					inputmode="numeric"
					v-bind="$attrs"
					:value="modelValue"
					class="textfield text_stepper"
					@input="onInput"
				><i class="bg_text"></i>
				<span class="mm_ir-blind text_placeholder">수량</span>
			</label>
		</div>
		<button
			type="button"
			class="btn_stepper-subtract"
			:disabled="isDisabled || modelValue === 1"
			@click="minus"
		>
			<i class="ico_stepper-subtract"></i><b class="mm_ir-blind">수량 빼기</b>
		</button>
		<button
			type="button"
			class="btn_stepper-add"
			:disabled="isDisabled || modelValue === max"
			@click="add"
		>
			<i class="ico_stepper-add"></i><b class="mm_ir-blind">수량 더하기</b>
		</button>
	</div>
</template>

<script setup lang='ts'>
	import { ref, computed } from 'vue';

	const props = withDefaults(defineProps<{
		modelValue: number;
		max: number;
		disabled?: boolean;
	}>(), {
		disabled: false,
	});

	const modelValue = computed(() => props.modelValue);
	const isDisabled = computed(() => props.disabled);
	const emit = defineEmits<{
		(e: 'update:modelValue', value: number): void
	}>();

	const element = ref<HTMLInputElement>();

	/** 인풋 이벤트 처리 */
	function onInput(e: Event) {
		/** 입력불가인 경우 처리 */
		if (isDisabled.value && element.value) {
			element.value.value = `${modelValue.value}`;

			return;
		}

		let newValue: number = Number((e.target as HTMLInputElement).value);

		if (isNaN(newValue)) {
			newValue = 1;
		}

		if (newValue > props.max) {
			newValue = props.max;
		}

		emit('update:modelValue', newValue);

		if (element.value) {
			element.value.value = `${newValue}`;
		}
	}

	function add() {
		if (props.modelValue === props.max) {
			return;
		}
		emit('update:modelValue', props.modelValue + 1);
	}

	function minus() {
		if (props.modelValue === 1) {
			return;
		}
		emit('update:modelValue', props.modelValue - 1);
	}
</script>