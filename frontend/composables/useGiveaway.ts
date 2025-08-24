import { useBackend } from '$/composables/useBackend';

export function useGiveaway() {
	async function getDetail(id: number) {
		return Object.assign({
			id: id
		}, await useBackend<Omit<Giveaway, 'id'>>().command(`v1/shopping/giveaways/${id}`));
	}

	async function getTargetGoodsPaginator(
		id: number,
		page: number,
		perPage: number
	) {
		const { paginator } = await useBackend <GiveawayTargetGoodsPaginator>().command(`v1/shopping/giveaways/${id}/on-goods`, {
			params: {
				page: page,
				page_size: perPage
			}
		});

		return paginator;
	}

	return {
		getDetail,
		getTargetGoodsPaginator
	};
}