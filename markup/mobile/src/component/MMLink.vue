<template>
	<a
		v-if="isExternalLink"
		v-bind="$attrs"
		:href="`${to}`"
		target="_blank"
		title="새 창 열림"
	>
		<slot></slot>
	</a>

	<router-link
		v-else
		v-slot="{ isActive, href, navigate }"
		v-bind="$props"
		custom
	>
		<a
			v-bind="$attrs"
			:href="href"
			:class="isActive ? activeClass : inactiveClass"
			:title="isActive ? '선택됨' : ''"
			@click="navigate"
		>
			<slot></slot>
		</a>
	</router-link>
</template>

<script setup lang='ts'>
	import { computed } from 'vue';
	import { RouterLink, type RouteLocationPathRaw, type RouteLocationNamedRaw } from 'vue-router';

	const props = withDefaults(defineProps<{
		to: string | RouteLocationPathRaw | RouteLocationNamedRaw,
		replace?: boolean,
		inactiveClass?: string,
		activeClass?: string
	}>(), {
		replace: false,
		inactiveClass: '',
		activeClass: ''
	});

	const isExternalLink = computed(() => typeof props.to === 'string' && props.to.startsWith('http'));
</script>