<template>
	<div class="m_overlay-review-photo">
		<ul>
			<li
				v-for="photoReview in photoReviewPaginator.data"
				:key="photoReview.id"
			>
				<a
					href="#"
					@click.prevent="overlayProductReviewDetail(photoReview.id)"
				>
					<lazyload
						class="mm_bg-cover image_review"
						:src="photoReview.image_url"
						is-force
					></lazyload>
					<b class="mm_ir-blind">{{ photoReview.writer_masking_id }}님의 포토리뷰</b>
				</a>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, defineProps, ref } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import { useReview } from '$/composables/useReview';
	import Lazyload from '@/component/Lazyload.vue';

	defineExpose<OverlayComponentExpose>({
		title: `포토 리뷰 모아보기`,
		isFull: true,
	});

	const props = defineProps<{
		goodsId: number,
	}>();

	const { getPhotoReviewPaginator } = useReview();
	const layerContextStore = useLayerContextStore();

	const photoReviewPaginator = ref<Paginator<PhotoReview>>(await getPhotoReviewPaginator(props.goodsId, 1));

	function overlayProductReviewDetail(id: number) {
		const component = defineAsyncComponent(() => import('@/page/product/review/detail/ProductReviewDetail.vue'));

		return layerContextStore.openOverlay(component, {
			props: {
				id,
				total: photoReviewPaginator.value.total,
			},
		});
	}
</script>