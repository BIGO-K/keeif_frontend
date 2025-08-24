<template>
	<component
		:is="prop.tag"
		ref="$ui"
		class="mm_dropdown"
		:class="{ [prop.activeClass]: isActive }"
		data-dropdown
	>
		<slot></slot>

		<component
			:is="prop.tag === 'div' ? 'button' : 'dt'"
			:type="prop.tag === 'div' ? 'button' : undefined"
			:tabindex="prop.tag === 'dl' ? '0' : undefined"
			class="btn_dropdown"
			:class="prop.buttonClass"
			:title="isActive ? '접어놓기' : '펼쳐보기'"
			@click.prevent="onToggle"
		>
			<slot name="button"></slot>
			<i
				class="ico_dropdown"
				:class="iconClass"
			></i>
		</component>

		<transition name="dropdown">
			<component
				:is="prop.tag === 'div' ? 'div' : 'dd'"
				ref="$item"
				:show="isActive"
				class="mm_dropdown-item"
				:style="itemStyle"
			>
				<div class="mm_dropdown-item-inner">
					<slot name="content"></slot>
				</div>
			</component>
		</transition>
	</component>
</template>

<script setup lang="ts">
	import { ref, computed, watch } from 'vue';
	import { useEventBus } from '@vueuse/core';

	interface DropdownProp {
		/** @prop { boolean } `default: false` - 초기 활성 여부로 modelValue가 있으면 무시(후순위) */
		isActive?: boolean;
		/** @prop { string } `default: 'div'` - {block}+button | dl 구조 */
		tag?: keyof HTMLElementTagNameMap;
		/** @prop { string } `default: 'S=on'` - 활성 클래스 */
		activeClass?: string;
		/** @prop { string | null } `default: null` - ico_dropdown 추가 클래스 */
		iconClass?: string | null;
		/** @prop { string | null } `default: null` - btn_dropdown 추가 클래스 */
		buttonClass?: string | null;
		/** @prop { number } `default: '0'` - 펼쳐지는 모션 시간(초)으로 값이 0이면 모션 없음 */
		time?: number;
		/** @prop { string | null } `default: null` - 아코디언 그룹 */
		group?: string | null;
	}

	const prop = withDefaults(defineProps<DropdownProp>(), {
		isActive: false,
		tag: 'div',
		activeClass: 'S=on',
		iconClass: null,
		buttonClass: null,
		time: 0,
		group: null,
	});

	const emit = defineEmits<{
		'update:is-active': [isActive: boolean];
		'toggle': [isActive: boolean, $ui: HTMLElement];
	}>();

	const isActive = ref(prop.isActive);
	const $ui = ref<HTMLElement>();
	const $item = ref<HTMLElement>();
	const itemStyle = computed(() => ({
		visibility: isActive.value ? 'inherit' : 'hidden',
		height: isActive.value && $item.value != null ? prop.time === 0 ? 'auto' : `${$item.value.scrollHeight}px` : '0',
		transitionDuration: `${prop.time}s`,
	}));

	const onToggle = () => {
		isActive.value = !isActive.value;
		emit('update:is-active', isActive.value);// v-model로 연결되었을 때 반응형 값 없데이트
		emit('toggle', isActive.value, $ui.value as HTMLElement);
		if (prop.group != null) eventBus.emit('toggle', $ui.value);// 그룹
	};

	// 그룹 아코디언
	const eventBus = useEventBus<string>(`accordionGroup-${prop.group}`);
	const eventBusOff = eventBus.on((_e, _activeUI) => {
		if ($ui.value !== _activeUI) isActive.value = false;
	});
	if (prop.group == null) eventBusOff();

	watch(() => prop.isActive, _value => isActive.value = _value);
</script>

<style lang="scss">
	.dropdown-enter-active,
	.dropdown-leave-active {
		transition-property: height;
		transition-timing-function: ease-out;
	}

	.dropdown-enter-from,
	.dropdown-leave-to {
		height: 0 !important;
	}
</style>