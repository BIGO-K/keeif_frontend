
<template>
	<div :class="['mm_modal-item', itemClass, layer.isActive ? 'S=on' : 'S=old']">
		<div class="mm_modal-item-dim"></div>
		<div
			class="mm_modal-item-inner"
		>
			<div
				v-if="title"
				class="mm_modal...head"
			>
				<h2><b>{{ title }}</b></h2>
				<button
					type="button"
					class="btn_modal-close"
					@click="close"
				>
					<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
				</button>
			</div>

			<div class="mm_modal...content">
				<button
					type="button"
					class="btn_modal-close"
					@click="close"
				>
					<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
				</button>
				<div class="mm_scroller">
					<component
						:is="layer.component"
						ref="modalComponent"
						v-bind="layer.props"
						:closer="closer"
					></component>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed, ref, watch } from 'vue';
	import { useRouter } from 'vue-router';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';

	/** VARIABLE **/
	const router = useRouter();
	const props = defineProps<{
		layer: Layer
	}>();

	const { removeLayer } = useLayerContextStore();
	const layer = computed(() => {
		return props.layer;
	});

	const modalComponent = ref<OverlayComponentExpose>();

	const title = computed(() => modalComponent.value?.title);
	const itemClass = computed(() => modalComponent.value?.class);

	/** //VARIABLE **/
	/** FUNC **/
	async function closer<ModalCloseContext>(context?: ModalCloseContext) {
		if (layer.value.onClose) {
			layer.value.onClose(context || '');
		}

		removeLayer(layer.value.uuid);
	}

	function close() {
		if (layer.value.onCancelClose) {
			layer.value.onCancelClose();
		}
		removeLayer(layer.value.uuid);
	}
	/** //FUNC **/

	// 라우트 이동시 모달 닫힘 처리
	watch(() => router.currentRoute.value.path, () => {
		removeLayer(layer.value.uuid);
	});
</script>

