import { useBackend } from '$/composables/useBackend';
import { useFormatter } from '$/composables/useFormatter';

export function useMiniShop() {
	const { url } = useFormatter();

	async function get(id: number): Promise<MiniShop> {
		const response = await useBackend().command<MiniShop>(`/v1/marketer-shops/${id}`);

		response.influencer.instagram_url = url(response.influencer.instagram_url);
		response.influencer.kakaotalk_url = url(response.influencer.kakaotalk_url);

		return response;
	}

	async function getId(miniShopUrl: string) {
		const { id } = await useBackend().command<{
			id: number
		}>('/v1/marketer-shops/marketer-id-of-minishop-url', {
			params: {
				minishop_url: miniShopUrl,
			},
		});

		return id;
	}

	return {
		get,
		getId,
	};
}