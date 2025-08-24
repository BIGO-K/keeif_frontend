import { useBackend } from '$/composables/useBackend';

export function useNotice() {
	const defaultPageSize = 10;

    /**
     * 최신 공지 조회
     * @param limit
     * @returns
     */
	async function getRecents(limit: number = 5) {
		const { notices } = await useBackend().command<{
            notices: NoticeDetail[]
        }>('v1/cs/notices/recents', {
        	params: {
        		limit,
        	},
        });

		return notices;
	}

    /**
     * 공지 페이지네이터 조회
     * @param page
     * @param pageSize
     * @returns
     */
	async function getPaginator(page: number, pageSize: number = defaultPageSize) {
		const { paginator } = await useBackend().command<{
            paginator: Paginator<Notice>
        }>('v1/cs/notices', {
        	params: {
        		page: page,
        		page_size: pageSize,
        	},
        });

		return paginator;
	}

    /**
     * 중요공지 조회
     * @returns
     */
	async function getImportants() {
		const { important_notices } = await useBackend().command<{
            important_notices: Notice[]
        }>('v1/cs/notices/importants');

		return important_notices;
	}

    /**
     * 공지 상세 조회
     * @param id
     * @returns
     */
	async function getDetail(id: number) {
		return await useBackend().command<NoticeDetail>(`v1/cs/notices/${id}`);
	}

	return {
		getRecents,
		getPaginator,
		getImportants,
		getDetail,

	};
}