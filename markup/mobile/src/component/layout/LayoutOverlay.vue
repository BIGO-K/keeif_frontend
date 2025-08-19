<template>
	<div
		class="mm_overlay-item"
		:class="{ 'T=full': isFull, 'T=hide_header': isHideHeader }"
	>
		<div class="mm_overlay-item-inner">
			<div class="mm_overlay...head">
				<h2>
					<b :class="{ 'mm_ir-blind': isHideHeader }">
						{{ title }}
					</b>
				</h2>
				<button
					type="button"
					class="btn_overlay-close"
					@click="close"
				>
					<b class="mm_ir-blind">닫기</b><i class="ico_overlay-close"></i>
				</button>
			</div>
			<div class="mm_overlay...content">
				<div class="mm_scroller">
					<component
						:is="layer.component"
						ref="layerComponent"
						v-bind="layer.props"
						:closer="closer"
					></component>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';

	const props = defineProps<{
		layer: Layer
	}>();

	const layer = computed(() => {
		return props.layer;
	});
	const layoutStore = useLayerContextStore();
	const layerComponent = ref<OverlayComponentExpose>();

	const title = computed(() => layerComponent.value?.title || '');
	const isFull = computed(() => layerComponent.value?.isFull || false);
	const isHideHeader = computed(() => layerComponent.value?.isHideHeader || false);

	function closer<OverlayCloseContext>(context?: OverlayCloseContext) {
		if (layer.value.onClose) {
			layer.value.onClose(context || '');
		}

		layoutStore.removeLayer(layer.value.uuid);
	}

	function close() {
		if (layer.value.onCancelClose) {
			layer.value.onCancelClose();
		}

		layoutStore.removeLayer(layer.value.uuid);
	}
</script>
