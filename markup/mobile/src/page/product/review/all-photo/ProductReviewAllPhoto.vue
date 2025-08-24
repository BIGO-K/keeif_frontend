<template>
	<div class="m_overlay-review-photo">
		<ul>
			<li>
				<a
					href="#"
					@click.prevent="overlayProductReviewDetail"
				>
					<lazyload
						class="mm_bg-cover image_review"
						src="/image/_sample/prod_x1_7.png"
					></lazyload>
					<b class="mm_ir-blind">abc***님의 포토리뷰</b>
				</a>
			</li>
			<li>
				<a
					href="#"
					@click.prevent="overlayProductReviewDetail"
				>
					<lazyload
						class="mm_bg-cover image_review"
						src="/image/_sample/prod_x1_1.png"
					></lazyload>
					<b class="mm_ir-blind">abc***님의 포토리뷰</b>
				</a>
			</li>
			<li>
				<a
					href="#"
					@click.prevent="overlayProductReviewDetail"
				>
					<lazyload
						class="mm_bg-cover image_review"
						src="/image/_sample/prod_x1_2.png"
					></lazyload>
					<b class="mm_ir-blind">abc***님의 포토리뷰</b>
				</a>
			</li>
			<li>
				<a
					href="#"
					@click.prevent="overlayProductReviewDetail"
				>
					<lazyload
						class="mm_bg-cover image_review"
						src="/image/_sample/prod_x1_3.png"
					></lazyload>
					<b class="mm_ir-blind">abc***님의 포토리뷰</b>
				</a>
			</li>
			<li>
				<a
					href="#"
					@click.prevent="overlayProductReviewDetail"
				>
					<lazyload
						class="mm_bg-cover image_review"
						src="/image/_sample/prod_x1_4.png"
					></lazyload>
					<b class="mm_ir-blind">abc***님의 포토리뷰</b>
				</a>
			</li>
			<li>
				<a
					href="#"
					@click.prevent="overlayProductReviewDetail"
				>
					<lazyload
						class="mm_bg-cover image_review"
						src="/image/_sample/prod_x1_5.png"
					></lazyload>
					<b class="mm_ir-blind">abc***님의 포토리뷰</b>
				</a>
			</li>
			<li>
				<a
					href="#"
					@click.prevent="overlayProductReviewDetail"
				>
					<lazyload
						class="mm_bg-cover image_review"
						src="/image/_sample/prod_x1_6.png"
					></lazyload>
					<b class="mm_ir-blind">abc***님의 포토리뷰</b>
				</a>
			</li>
			<li>
				<a
					href="#"
					@click.prevent="overlayProductReviewDetail"
				>
					<lazyload
						class="mm_bg-cover image_review"
						src="/image/_sample/prod_x1_1.png"
					></lazyload>
					<b class="mm_ir-blind">abc***님의 포토리뷰</b>
				</a>
			</li>
			<li>
				<a
					href="#"
					@click.prevent="overlayProductReviewDetail"
				>
					<lazyload
						class="mm_bg-cover image_review"
						src="/image/_sample/prod_x1_2.png"
					></lazyload>
					<b class="mm_ir-blind">abc***님의 포토리뷰</b>
				</a>
			</li>
			<li>
				<a
					href="#"
					@click.prevent="overlayProductReviewDetail"
				>
					<lazyload
						class="mm_bg-cover image_review"
						src="/image/_sample/prod_x1_3.png"
					></lazyload>
					<b class="mm_ir-blind">abc***님의 포토리뷰</b>
				</a>
			</li>
			<li>
				<a
					href="#"
					@click.prevent="overlayProductReviewDetail"
				>
					<lazyload
						class="mm_bg-cover image_review"
						src="/image/_sample/prod_x1_4.png"
					></lazyload>
					<b class="mm_ir-blind">abc***님의 포토리뷰</b>
				</a>
			</li>
			<li>
				<a
					href="#"
					@click.prevent="overlayProductReviewDetail"
				>
					<lazyload
						class="mm_bg-cover image_review"
						src="/image/_sample/prod_x1_5.png"
					></lazyload>
					<b class="mm_ir-blind">abc***님의 포토리뷰</b>
				</a>
			</li>
			<li>
				<a
					href="#"
					@click.prevent="overlayProductReviewDetail"
				>
					<lazyload
						class="mm_bg-cover image_review"
						src="/image/_sample/prod_x1_6.png"
					></lazyload>
					<b class="mm_ir-blind">abc***님의 포토리뷰</b>
				</a>
			</li>
			<li>
				<a
					href="#"
					@click.prevent="overlayProductReviewDetail"
				>
					<lazyload
						class="mm_bg-cover image_review"
						src="/image/_sample/prod_x1_7.png"
					></lazyload>
					<b class="mm_ir-blind">abc***님의 포토리뷰</b>
				</a>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import Lazyload from '@/component/Lazyload.vue';

	const layerContextStore = useLayerContextStore();

	function overlayProductReviewDetail() {
		const component = defineAsyncComponent(() => import('@/page/product/review/detail/ProductReviewDetail.vue'));

		return layerContextStore.openOverlay(component);
	}

	defineExpose<OverlayComponentExpose>({
		title: `포토리뷰`,
	});
</script>