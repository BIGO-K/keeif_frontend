import { ref } from 'vue';
import { useBackend } from '$/composables/useBackend';

export const useSizeGuide = () => {
	const sizeChartImages = ref<Record<number, string[]>>({});

	return {
		getImages: async (sellerId: number) => {
			if (sizeChartImages.value[sellerId]) return sizeChartImages.value[sellerId];

			const { size_chart_images } = await useBackend().command<{
				size_chart_images: string[];
			}>(`/v1/goods/size-table/${sellerId}`);

			sizeChartImages.value[sellerId] = size_chart_images;

			return size_chart_images;
		},
	};
};