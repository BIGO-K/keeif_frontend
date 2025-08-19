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
		v-slot="{ isExactActive, href }"
		v-bind="$props"
		custom
	>
		<a
			v-bind="$attrs"
			:href="href"
			:class="isExactActive ? activeClass : inactiveClass"
			:title="isExactActive ? '선택됨' : ''"
			@click="linkClicked($event)"
		>
			<slot></slot>
		</a>
	</router-link>
</template>

<script setup lang='ts'>
	import { computed } from 'vue';
	import { RouterLink, RouteLocationPathRaw, RouteLocationNamedRaw, useLink } from 'vue-router';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import { useGoodsZoomLoaderImage } from '$/composables/useGoodsZoomLoaderImage';

	const props = withDefaults(defineProps<{
		to: string | RouteLocationPathRaw | RouteLocationNamedRaw,
		replace?: boolean,
		inactiveClass?: string,
		activeClass?: string
	}>(), {
		replace: false,
		inactiveClass: '',
		activeClass: '',
	});
	const { navigate } = useLink(props);
	const isExternalLink = computed(() => typeof props.to === 'string' && props.to.startsWith('http'));
	const { clearLayer } = useLayerContextStore();
	const { getZoomLoaderImage } = useGoodsZoomLoaderImage();
	async function linkClicked(e: MouseEvent) {
		clearLayer();
		if (props.to.name && props.to.name === 'ProductDetail') {
			getZoomLoaderImage(e);
		}

		await navigate(e);
	}
</script>
