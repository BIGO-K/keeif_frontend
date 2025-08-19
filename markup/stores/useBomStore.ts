import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useBomStore = defineStore('bom', () => {
    /** 봄 관련 컨텍스트 */
	const bomContexts = ref<BomContext[]>([]);
    /** 현재 포커스된 봄 컨텍스트 */
	const focusedBomContext = computed<BomContext|null>(() => {
		if (bomContexts.value.length < 1) {
			return null;
		}

		return bomContexts.value[bomContexts.value.length - 1];
	});
    /** 로딩 여부 */
	const loading = ref<boolean>(false);

    /** 컨텍스트 추가  */
	function addBomContext(context: BomContext) {
		bomContexts.value = bomContexts.value.concat(context);
	}

    /** 컨텍스트 삭제  */
	function removeBomContext(context: BomContext) {
		bomContexts.value = bomContexts.value.filter(bom => bom.uuid !== context.uuid);
	}

    /** 로딩바 노출 */
	function showLoading() {
		loading.value = true;
	}

    /** 로딩바 숨김 */
	function hideLoading() {
		loading.value = false;
	}

	return {
		bomContexts,
		focusedBomContext,
		addBomContext,
		removeBomContext,
		loading,
		showLoading,
		hideLoading
	};
});