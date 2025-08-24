import { ref } from 'vue';
import { defineStore } from 'pinia';

type PageContext = {
    key: string,
    scrollTop: number,
	optional?: Record<string, string|number|object|boolean>
}

export const useScrollPositionStore = defineStore('scroll-position', () => {
	const pageContexts = ref<PageContext[]>([]);
    /** 현재 페이지 컨텍스트 저장 */
	function applyPageContext(currentPageContext: PageContext) {
		pageContexts.value = pageContexts.value
			.filter(pageContext => pageContext.key !== currentPageContext.key)
			.concat(currentPageContext);
	}
    /** 페이지 컨텍스트 삭제  */
	function removePageContext(currentPageContext: PageContext) {
		pageContexts.value = pageContexts.value
			.filter(pageContext => pageContext.key !== currentPageContext.key);
	}

	function getCurrentPageContext(path: string) {
		return pageContexts.value.find(context => context.key === path);
	}

	return {
		pageContexts,
		applyPageContext,
		removePageContext,
		getCurrentPageContext,
	};
}, {
	persist: {
		storage: sessionStorage,
	},
});