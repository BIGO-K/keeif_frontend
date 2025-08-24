import { useScrollPositionStore } from '$/stores/useScrollPositionStore';
import { useBackend } from '$/composables/useBackend';
import { type AsyncComponentLoader, type Component } from 'vue';

export function useBlock() {

	const MOBILE_BLOCK_COMPONENTS = import.meta.glob<false, 'raw', AsyncComponentLoader<Component>>('../mobile/src/block/**/*.vue');

	const { applyPageContext, getCurrentPageContext } = useScrollPositionStore();

    /**
     * 블록 컴포넌트 경로 리턴
     * @param name
     * @returns
     */
	function getValidBlockPath(name: string) {
		const path = `../mobile/src/block/${name}.vue`;

		return MOBILE_BLOCK_COMPONENTS[path] ? path : null;
	}

	/**
	 * 블록 컴포넌트 getter 함수 리턴
	 * @param name
	 * @returns
	 */
	function getComponentGetter(name: string) {
		const path = getValidBlockPath(name);
		if (!path) {
			throw Error('block component not exists');
		}

		return MOBILE_BLOCK_COMPONENTS[path];
	}

    /**
     * 블록 페이지 조회
     * @param pageName
     * @returns
     */
	async function getPage(pageName: string): Promise<Container[]> {
		const { containers } = await useBackend().command<{
            containers: Container[]
        }>(`v1/exhibit/lego/${pageName}`);

		return containers.filter((container) => container.blocks.filter((block) => {
			return (
				block.banner_partition?.total > 0
				|| block.coop_deal_partition?.total > 0
				|| block.showcase_partition?.total > 0
				|| block.goods_group?.total > 0
				|| block.tabs?.length > 0
			) && getValidBlockPath(block.mui_code);
		}).length > 0);
	}


	function applyContext(block: Block, context: BlockContext) {
		applyPageContext({
			key: `${block.mui_code}_${block.id}`,
			scrollTop: 0,
			optional: context,
		});
	}

	function getContext(block): BlockContext|undefined {
		return getCurrentPageContext(`${block.mui_code}_${block.id}`)?.optional as BlockContext;
	}

	return {
		getPage,
		getComponentGetter,
		applyContext,
		getContext,
	};
}