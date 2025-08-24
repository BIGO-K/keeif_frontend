import { Component, nextTick, ref, shallowRef } from 'vue';
import { defineStore } from 'pinia';
import { useUserAgentStore } from '$/stores/useUserAgentStore';
import uuid from '$/utils/uuid';

export const useLayerContextStore = defineStore('layer-context', () => {
	const layerContexts = ref<Layer[]>([]);
    /**
     * 레이어 여는 함수
     * @param component
     * @param options
    */
	async function open<Props extends object, LayerCloseContext extends object | string | undefined>(
		component: Component,
		type: `modal`|`overlay`,
		options?: LayerOpenOptions<Props, LayerCloseContext>,
	) {

		const userAgentStore = useUserAgentStore();
		const isBeforeVersion = await userAgentStore.isBeforeVersion();

		if (isBeforeVersion) {
			return location.reload();
		}

		if (typeof options?.props === 'function') {
			options.props = await options.props();
		}


		addLayer({
			uuid: uuid(),
			type: type,
			props: options?.props || {},
			component: shallowRef(component),
			isActive: true,
			onClose: options?.onClose,
			onCancelClose: options?.onCancelClose,
		});
	}

	function addLayer(target: Layer) {
        // 이전 모달 비활성화 처리
		const legacyLayer = layerContexts.value.find((layer) => layer.isActive && layer.type === target.type);
		if (legacyLayer) {
			legacyLayer.isActive = false;
		}

		const sameLayer = layerContexts.value.find((layer) => layer.uuid === target.uuid && layer.type === target.type);
		// 동일한 모달인 경우 현재꺼 제외 처리 후 재할당
		if (sameLayer) {
			layerContexts.value = layerContexts.value.filter((layer) => layer.uuid !== target.uuid);
			nextTick().then(() => {
				layerContexts.value = layerContexts.value.concat(target);
			});

			return;
		}

		layerContexts.value = layerContexts.value.concat(target);
	}

	function removeLayer(targetUniqueId: string) {
		layerContexts.value = layerContexts.value.filter((layer) => layer.uuid !== targetUniqueId);
	}

	function clearLayer() {
		layerContexts.value = [];
	}

	return {
		layerContexts,
		removeLayer,
		openOverlay: <Props extends object, LayerCloseContext extends object | string | undefined>(
			component: Component,
			options?: LayerOpenOptions<Props, LayerCloseContext>,
		) => {
			return open(component, 'overlay', options);
		},
		openModal: <Props extends object, LayerCloseContext extends object | string | undefined>(
			component: Component,
			options?: LayerOpenOptions<Props, LayerCloseContext>,
		) => {
			return open(component, 'modal', options);
		},
		clearLayer,
	};
}, {
	persist: false,
});
