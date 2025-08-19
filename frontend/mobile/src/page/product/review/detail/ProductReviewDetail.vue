<template>
	<product-review-content
		:reviews="visibleReviews"
		@complete="(active, real) => currentIndex = real"
	></product-review-content>
</template>

<script setup lang="ts">
	import { ref, watch } from 'vue';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useReview } from '$/composables/useReview';
	import ProductReviewContent from '@/page/product/review/component/ProductReviewContent.vue';

	const props = defineProps<{
		id: number
		total: number
		closer: CloseHandler<void>
	}>();

	defineExpose<OverlayComponentExpose>({
		title: `포토 리뷰`,
		isFull: true,
	});

	const { route } = useGlobalPageContext();
	const { getPhotoReviewDetail } = useReview();

	const goodsId = Number(route.params.id);
	if (!goodsId || !props.id) {
		props.closer();
	}

	const max = Math.min(props.total, 4);
	const loadedReviews = ref<PhotoReviewDetail[]>([]);
	const visibleReviews = ref<(PhotoReviewDetail)[]>([]);
	const currentIndex = ref<number>(0);

	async function getReview(id: number) {
		const review = loadedReviews.value.find(loaded => loaded.id == id);
		if (review) {
			return review;
		}

		const newReview = await getPhotoReviewDetail(goodsId, id);
		loadedReviews.value = loadedReviews.value
			.filter(loaded => loaded.id != newReview.id)
			.concat(newReview);

		return newReview;
	}

	async function getReviewWithSide(id: number, index: number) {
		const review = await getReview(id);
		visibleReviews.value[index] = review;

		const prev = await getReview(review.prev_review_id);
		if (prev) {
			const prevIndex = index <= 0 ? max - 1 : index - 1;
			visibleReviews.value[Math.min(max, prevIndex)] = prev;
		}

		if (review.prev_review_id == review.next_review_id) {
			return;
		}

		const next = await getReview(review.next_review_id);
		if (next) {
			const nextIndex = index == max - 1 ? 0 : index + 1;
			visibleReviews.value[nextIndex] = next;
		}

	}

	await getReviewWithSide(props.id, 0);

	watch(currentIndex, async (newIndex) => {
		const targetId = visibleReviews.value[newIndex]?.id || props.id;
		getReviewWithSide(targetId, newIndex || 0);
	});
</script>

