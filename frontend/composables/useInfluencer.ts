import { useBackend } from '$/composables/useBackend';

export function useInfluencer() {
	async function getMyFollows(page: number = 1, pageSize: number = 100) {
		const { paginator } = await useBackend().command<{
			paginator: SimplePaginator<MyInfluencer>
		}>('v1/my/wish/marketers/list', {
			params: {
				page,
				page_size: pageSize,
			},
		});
		paginator.data = paginator.data.map(influencer => {
			return {
				...influencer,
				is_followed: true,
			};
		});

		return paginator;
	}

	async function getMyFollowCount() {
		const { following_count } = await useBackend().command<{
			following_count: number
		}>('v1/my/wish/marketers/count');

		return following_count;
	}

	/** [인플루언서] 팔로우 */
	async function follow(id: number) {
		await useBackend().command('v1/my/wish/marketers/wish', {
			method: 'post',
			data: {
				influencer_id: id,
			},
		});
		await receiveNotify(id);
	}

	/** [인플루언서] 언팔로우 */
	async function unFollow(id: number) {
		await useBackend().command('v1/my/wish/marketers/unwish', {
			method: 'post',
			data: {
				influencer_id: id,
			},
		});
		await unReceiveNotify(id);
	}

	/** [인플루언서] 알림수신 */
	async function receiveNotify(id: number) {
		await useBackend().command('v1/my/wish/marketers/receive', {
			method: 'post',
			data: {
				influencer_id: id,
			},
		});
	}

	/** [인플루언서] 알림수신해제 */
	async function unReceiveNotify(id: number) {
		await useBackend().command('v1/my/wish/marketers/un-receive', {
			method: 'post',
			data: {
				influencer_id: id,
			},
		});
	}

	async function checkFollow(ids: number[]) {
		const { relation_influencer } = await useBackend().command<{
			relation_influencer: InfluencerFollowContext[]
		}>('v1/my/wish/marketers/data-by-ids', {
			method: 'post',
			data: {
				influencer_ids: ids,
			},
		});

		return relation_influencer;
	}

	return {
		getMyFollows,
		getMyFollowCount,
		follow,
		unFollow,
		checkFollow,
		receiveNotify,
		unReceiveNotify,
	};
}