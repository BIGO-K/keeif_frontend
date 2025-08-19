<template>
	<div class="m_myreview">
		<p
			v-if="!paginator || paginator.data.length < 1"
			class="mm_text-none"
		>
			<i class="ico_text-none"></i>작성한 리뷰가 없습니다
		</p>

		<template v-else>
			<!-- 리뷰목록 -->
			<div class="m_myreview-written">
				<ul>
					<li
						v-for="review in paginator.data"
						:key="review.id"
					>
						<div class="mm_product-item T=single-sm">
							<mm-link :to="{ name: 'ProductDetail', params: { id: review.order_item.goods.id } }">
								<figure>
									<lazyload
										class="mm_bg-cover image_product"
										:src="review.order_item.goods.thumbnail_url"
									></lazyload>
									<figcaption>
										<p class="text_brand">
											{{ review.order_item.goods.brand_name }}
										</p>
										<p class="text_product">
											{{ review.order_item.goods.name }}
										</p>
										<p class="text_option">
											{{ optionText(review.order_item.option_name) }} / {{ review.order_item.ea }}개
										</p>
									</figcaption>
								</figure>
							</mm-link>
						</div>
						<div class="mm_review">
							<div class="mm_review-head">
								<p class="text_star">
									<!-- (D) 별점에 따라 T=star5 T=star4 T=star3 T=star2 T=star1 클래스를 추가합니다. -->
									<i
										class="ico_star-fill"
										:class="`T=star${review.rate}`"
									></i>
									<span>{{ review.rate }}</span>
								</p>
							</div>
							<review-contents
								:contents="review.contents"
							></review-contents>
							<ul class="mm_review-image">
								<li
									v-for="imageUrl in review.image_urls"
									:key="imageUrl"
								>
									<a
										href="#"
										@click.prevent="overlayProductReviewPhoto(review.image_urls)"
									>
										<i class="image_review">
											<lazyload
												tag="img"
												:src="imageUrl"
												:is-ratio="true"
											></lazyload>
										</i>
									</a>
								</li>
							</ul>
							<p class="text_date">
								{{ date(review.created_at, 'YYYY.MM.DD') }}
							</p>

							<review-template-satisfy
								v-if="review.templates"
								:templates="review.templates"
							></review-template-satisfy>

							<div class="mm_review-foot">
								<!-- (D) 등록 리뷰의 사진 미등록시에만 '.m_myreview-tooltip' 요소를 노출합니다. -->
								<p
									v-if="!review.is_photo_review"
									class="m_myreview-tooltip"
								>
									포토 등록 시 <strong class="mm_text-secondary">{{ number(myReviewPointSetting.photoReviewPoint) }}원</strong> 추가
								</p>
								<a
									class="btn_modify"
									href="#"
									@click.prevent="overlayMyReviewUpdate(review)"
								>
									<i class="ico_review-write"></i><b>리뷰 수정하기</b>
								</a>
							</div>
						</div>
					</li>
				</ul>
			</div>

			<pagination
				v-bind="{
					currentPage: paginator?.current_page,
					itemsPerPage: paginator?.per_page,
					totalCount: paginator?.total
				}"
				@move:page="fetch"
			></pagination>
		</template>
	</div>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useReview } from '$/composables/useReview';
	import Lazyload from '@/component/Lazyload.vue';
	import Pagination from '@/component/Pagination.vue';
	import ReviewTemplateSatisfy from '@/feature/review-template/component/ReviewTemplateSatisfy.vue';
	import ReviewContents from '@/page/mypage/review/component/ReviewContents.vue';

	/** 전역 페이지 composable */
	const { openOverlay } = useGlobalPageContext();
	/** formatter composable */
	const { date, number, optionText } = useFormatter();
	/** 리뷰 composable */
	const { myReviewPointSetting, getMyReviewPaginator } = useReview();

	/** 리뷰 페이지네이터 */
	const paginator = ref<Paginator<MyReview>>();

	function overlayMyReviewUpdate(review: MyReview) {
		const component = defineAsyncComponent(() => import('@/page/mypage/review/update/MyReviewUpdate.vue'));

		return openOverlay(component, {
			props: {
				originReview: review,
			},
			onClose: () => {
				fetch();
			},
		});
	}

	function overlayProductReviewPhoto(imageUrls: string[]) {
		const component = defineAsyncComponent(() => import('@/page/product/review/photo/ProductReviewPhoto.vue'));

		return openOverlay(component, {
			props: {
				imageUrls,
			},
		});
	}

	async function fetch(pageNumber: number = 1) {
		try {
			paginator.value = await getMyReviewPaginator(pageNumber);
		}
		catch (e) {
			useErrorAlert(e);
		}
	}

	await fetch();
</script>