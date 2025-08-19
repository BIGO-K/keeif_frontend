<template>
	<component
		:is="prop.tag"
		ref="$ui"
		:type="prop.tag === 'button' ? 'button' : undefined"
		:class="{ [prop.activeClass]: isActive && !prop.parentSelector }"
		:title="isActive ? prop.activeTitle : prop.title"
		:tabindex="!['button', 'a'].includes(prop.tag) ? '0' : undefined"
		data-toggle
		@click.prevent="onToggle"
	>
		<slot></slot>
	</component>
</template>

<script setup lang="ts">
	import { ref, computed, watch } from 'vue';
	import { useEventBus } from '@vueuse/core';

	interface SwitchProp {
		/** @prop { boolean } `default: false` */
		isActive?: boolean;
		/** @prop { boolean } `default: false` - true일 경우 내부 클릭으로 isActive 변경 안됨 */
		isLazy?: boolean;
		/** @prop { string } `default: 'button'` */
		tag?: keyof HTMLElementTagNameMap;
		/** @prop { string } `default: 'S=on'` - 활성 클래스 */
		activeClass?: string;
		/** @prop { string | null } `default: null` */
		title?: string | null;
		/** @prop { string } `default: '선택됨'` */
		activeTitle?: string;
		/** @prop { string } `default: null` - 값이 있으면 버튼이 아닌 부모 요소에 activeClass 추가 */
		parentSelector?: string | null;
		/** @prop { string | null } `default: null` - 그룹 */
		group?: string | null;
	}

	const prop = withDefaults(defineProps<SwitchProp>(), {
		isActive: false,
		isLazy: false,
		tag: 'button',
		activeClass: 'S=toggle-on',
		title: null,
		activeTitle: '선택됨',
		parentSelector: null,
		group: null,
	});

	const emit = defineEmits<{
		'update:is-active': [isActive: boolean];
		'toggle': [isActive: boolean, $ui: HTMLElement];
	}>();

	const isActive = ref(prop.isActive);
	const $ui = ref<HTMLElement>();

	const onToggle = () => {
		if (prop.isLazy) return;

		isActive.value = !isActive.value;
		emit('update:is-active', isActive.value);// v-model로 연결되었을 때 반응형 값 없데이트
		emit('toggle', isActive.value, $ui.value as HTMLElement);
	};

	if (prop.parentSelector != null) {
		const $parent = computed(() => $ui.value?.closest(prop.parentSelector!.replace(/[.=]/g, '\\$&').replace(/^\\/, '')));
		watch([$parent, isActive], () => {
			$parent.value?.classList[isActive.value ? 'add' : 'remove'](prop.activeClass);
		});
	}

	// 그룹
	const eventBus = useEventBus<string>(`toggleGroup-${prop.group}`);
	const eventBusOff = eventBus.on((_e, _activeUI) => {
		if ($ui.value !== _activeUI) isActive.value = false;
	});
	if (prop.group == null) eventBusOff();

	watch(() => prop.isActive, _value => {
		isActive.value = _value;
		if (prop.group != null) eventBus.emit('toggle', $ui.value);// 그룹
	});
</script>