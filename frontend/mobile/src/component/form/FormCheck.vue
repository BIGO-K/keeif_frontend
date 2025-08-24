<template>
	<label :class="labelClasses">
		<input
			ref="element"
			type="checkbox"
			v-bind="$attrs"
			@change="onChange"
		>
		<b :class="`mm_${props.blockStyle}`">
			<i
				v-if="props.hideIcon"
				class="ico_form-check"
			></i>

			<template v-if="$slots.default">
				<slot name="default"></slot>
			</template>
			<template v-else-if="optional">
				<span class="text_label">
					<strong class="mm_text-variable">(선택)</strong>{{ label }}
				</span>
			</template>
			<template v-else>
				<span
					class="text_label"
					:class="{ 'mm_ir-blind': labelOnBlind }"
				>{{ label }}</span>
			</template>
		</b>
	</label>
</template>

<script setup lang='ts'>
	import { computed, ref, useAttrs, watch } from 'vue';

	defineOptions({
		inheritAttrs: false
	});

	const props = withDefaults(defineProps<{
		/** @prop { boolean | unknown[] } - @requires */
		modelValue: boolean | unknown[];
		/** @prop { string } `default: ''` - slot.#default가 없을 때 노출되는 내용 */
		label?: string;
		/** @prop { boolean } `default: false` */
		typeSwitch?: boolean;
		/** @prop { 'block' | 'inline' } `default: 'block''` - mm_block | mm_inline 적용 */
		blockStyle?: 'block' | 'inline';
		/** @prop { boolean } `default: false` - 기본 아이콘 사용 */
		hideIcon?: boolean;
		/** @prop { boolean } `default: false` - 라벨 대체텍스트로 제공 */
		labelOnBlind?: boolean;
		/** @prop { boolean } `default: false` - 선택옵션 */
		optional?: boolean;
	}>(), {
		label: '',
		typeSwitch: false,
		blockStyle: 'block',
		hideIcon: true,
		labelOnBlind: false,
		optional: false,
	});

	const emit = defineEmits<{
		'update:modelValue': [value: boolean | unknown[]];
	}>();

	const attrs = useAttrs();
	const hasAttribute = (_value: unknown) => !['undefined', 'false'].includes(String(_value));

	const labelClasses = computed(() => {
		const classes: string[] = ['mm_form-check'];

		if (hasAttribute(attrs.readonly)) classes.push('T=readonly');
		if (hasAttribute(attrs.disabled)) classes.push('T=disabled');
		if (props.typeSwitch) classes.push('T=switch');

		return classes;
	});

	const element = ref<HTMLInputElement>();

	function isEqualObject(objectA: unknown, objectB: unknown) {
		return JSON.stringify(objectA) === JSON.stringify(objectB);
	}

	function onChange(e: Event) {
		const checked = (e.target as HTMLInputElement).checked;
		emit('update:modelValue', Array.isArray(props.modelValue)
			? checked
				? [...props.modelValue, attrs.value]
				: props.modelValue.filter(item => !isEqualObject(item, attrs.value))
			: checked
		);
	}

	watch([element, () => props.modelValue], () => {
		if (element.value == null) return;

		element.value.checked = Array.isArray(props.modelValue)
			? props.modelValue.some(item => isEqualObject(item, attrs.value))
			: props.modelValue;
	});
</script>
