import { ref } from 'vue';
import { useBackend } from '$/composables/useBackend';

export function useTopBanner() {
	const isShow = ref(false);

    /**
     * [탑 배너] 조회
     * @returns
     */
	async function get() {
		const { top_banner } = await useBackend().command<{
            top_banner: Nullable<TopBanner>
        }>('v1/exhibit/top-banners/displays');

		return top_banner;
	}

	return {
		isShow,
		get,
	};
}