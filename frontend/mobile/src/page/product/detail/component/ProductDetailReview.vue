<template>
	<div class="m_prodetail-tab-review">
		<template v-if="shoppingAggregate.total_review_count > 0">
			<strong class="text_star">
				<!-- (D) span 태그에 별점을 10단위로 %값을 width로 설정해줍니다. -->
				<i><i class="ico_star-fill"></i><span :style="{ width: `${shoppingAggregate.review_average_star / 0.05}%` }"><i class="ico_star-fill"></i></span></i>
				<span>{{ shoppingAggregate.review_average_star }}</span>
			</strong>
			<p>
				<strong>{{ number(shoppingAggregate.total_review_count) }}명</strong>의 고객님이 리뷰를 남겨주셨고,<br>
				<strong class="mm_text-secondary">{{ shoppingAggregate.satisfaction }}%</strong>가 만족하셨습니다.
			</p>
		</template>

		<review-template-satisfy-detail
			v-if="shoppingAggregate.reviewer_count > 0 && reviewTemplateStatistics.length > 0"
			:review-template-statistics="reviewTemplateStatistics"
		></review-template-satisfy-detail>

		<div class="m...review-point">
			<p>리뷰 작성하시면 포인트를 적립해드립니다.</p>
			<ul>
				<li><p>텍스트 리뷰: <strong>{{ number(textReviewPoint) }}</strong><sub>원</sub></p></li>
				<li><p>포토 리뷰: <strong>{{ number(photoReviewPoint) }}</strong><sub>원</sub></p></li>
			</ul>
			<a
				class="mm_btn T=primary"
				href="#"
				@click.prevent="goWriteReviewPage"
			>
				<b>리뷰 작성하기</b>
			</a>
		</div>

		<p
			v-if="shoppingAggregate.reviewer_count === 0 && reviewPaginator.total < 1"
			class="mm_text-none"
		>
			<i class="ico_text-none"></i>등록된 리뷰가 아직 없습니다
		</p>

		<template v-else>
			<div
				v-if="bestReviews.length > 0"
				class="m...review-best"
			>
				<h4><b>베스트 리뷰</b></h4>
				<carousel
					:items="bestReviews"
					:use-count="true"
					:is-more-side="true"
					count-pad="00"
				>
					<template #default="{ item }">
						<a
							href="#"
							@click.prevent="overlayBestReviewDetail(item)"
						>
							<p class="text_user">
								<!--
									<lazyload
									class="mm_bg-contain image_grade"
									:src="item.grade.image"
									></lazyload>
								-->
								<!-- <span class="mm_ir-blind">{{ item.grade.alt }}</span> -->
								{{ item.writer_masking_id }}
							</p>
							<p class="text_star">
								<!-- (D) 별점에 따라 T=star5 T=star4 T=star3 T=star2 T=star1 클래스를 추가합니다. -->
								<i
									class="ico_star-fill"
									:class="`T=star${item.rate}`"
								></i>
								<span>{{ item.rate }}</span>
							</p>
							<div class="mm_flex">
								<p class="text_review">
									<b v-html="newLineToBr(item.contents)"></b>
									<span class="text_date">{{ date(item.created_at, 'YYYY.MM.DD') }}</span>
								</p>
								<template v-if="item.is_photo_review">
									<lazyload
										class="mm_bg-cover image_review"
										:src="item.image_urls[0]"
									></lazyload>
								</template>
							</div>
						</a>
					</template>
				</carousel>
			</div>
			<section
				ref="reviewListEl"
				class="m...review-list"
			>
				<h4><b>전체 리뷰수</b><strong>{{ number(reviewPaginator.total) }}</strong></h4>

				<!-- 포토리뷰 -->

				<div
					v-if="recentPhotoReviewList.total > 0"
					class="m...review-list-photo"
				>
					<ul>
						<li
							v-for="photo in recentPhotoReviewList.data.slice(0,4)"
							:key="photo.id"
						>
							<a
								href="#"
								@click.prevent="overlayProductReviewAllPhoto"
							>
								<lazyload
									class="mm_bg-cover image_review"
									:src="photo.image_url"
								></lazyload>
								<b class="mm_ir-blind">{{ photo.writer_masking_id }}님의 포토리뷰</b>
							</a>
						</li>
					</ul>
				</div>

				<!-- 리뷰 목록 -->
				<div class="m...review-list-head">
					<form-check
						v-model="reviewFilter.onlyPhotoReview"
						label="포토리뷰"
					></form-check>
					<ul>
						<li
							v-for="sort in sortOptions"
							:key="sort.value"
						>
							<button
								type="button"
								:class="{ 'S=on' : reviewFilter.sort === sort.value }"
								:title="reviewFilter.sort === sort.value ? '선택됨' : ''"
								@click="changeSort(sort)"
							>
								<b>{{ sort.label }}</b>
							</button>
						</li>
					</ul>
				</div>

				<p
					v-if="reviewPaginator.total < 1"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>등록된 리뷰가 아직 없습니다
				</p>
				<ul v-else>
					<li
						v-for="review in reviewPaginator.data"
						:key="review.id"
					>
						<div class="mm_review">
							<div class="mm_review-head">
								<p class="text_user">
									<experience-review-tag v-if="review.is_experience_group"></experience-review-tag>
									<!-- 등급 아이콘 미노출 -->
									<!--
										<lazyload
										class="mm_bg-contain image_grade"
										:src="review.writer_grade_image_url"
										:is-error-image="false"
										></lazyload>
									-->
									{{ review.writer_masking_id }}
								</p>
								<p class="text_star">
									<!-- (D) 별점에 따라 T=star5 T=star4 T=star3 T=star2 T=star1 클래스를 추가합니다. -->
									<i
										class="ico_star-fill"
										:class="`T=star${review.rate}`"
									></i>
									<span>{{ review.rate }}</span>
								</p>
								<p class="text_info">
									{{ review.option_name }}
								</p>
							</div>
							<!-- (D) 리뷰 내용이 3줄 이하인 경우는 리뷰 내용이 아래와 같이 노출됩니다 -->
							<review-contents
								:contents="review.contents"
							></review-contents>
							<review-template-satisfy
								v-if="(review.templates || []).length > 0"
								:templates="review.templates"
							>
							</review-template-satisfy>
							<ul
								v-if="review.is_photo_review"
								class="mm_review-image"
							>
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
												class="mm_bg-contain image_grade"
												tag="img"
												:src="imageUrl"
												:is-ratio="false"
											></lazyload>
										</i>
									</a>
								</li>
							</ul>
							<p class="text_date">
								{{ date(review.created_at, 'YYYY.MM.DD') }}
							</p>
						</div>
					</li>
				</ul>

				<pagination
					v-bind="{
						currentPage: reviewPaginator?.current_page,
						itemsPerPage: reviewPaginator?.per_page,
						totalCount: reviewPaginator?.total,
						scrollYTarget: reviewListEl
					}"
					@move:page="fetch"
				></pagination>
			</section>
		</template>
	</div>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, computed, ref, watch } from 'vue';
	import config from '$/utils/config';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useReview } from '$/composables/useReview';
	import Carousel from '@/component/Carousel.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import Pagination from '@/component/Pagination.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import ExperienceReviewTag from '@/feature/experience/component/ExperienceReviewTag.vue';
	import ReviewTemplateSatisfy from '@/feature/review-template/component/ReviewTemplateSatisfy.vue';
	import ReviewTemplateSatisfyDetail from '@/feature/review-template/component/ReviewTemplateSatisfyDetail.vue';
	import ReviewContents from '@/page/mypage/review/component/ReviewContents.vue';

	const props = defineProps<{
		goodsId: number,
		shoppingAggregate: GoodsReactionAggregate,
		reviewWritable: boolean
	}>();
	const reviewFilter = ref({
		page: 1,
		pageSize: 10,
		sort: 'recent',
		onlyPhotoReview: false,
	});
	const sortOptions = [
		{
			label: '최신순',
			value: 'recent',
		},
		{
			label: '별점 높은순',
			value: 'rate_high',
		},
		{
			label: '별점 낮은순',
			value: 'rate_low',
		},
	];


	const { member, bom, loading, openOverlay, router } = useGlobalPageContext();
	const { getReviewTemplateStatistics, getBestReviews, getReviewPaginator, getPhotoReviewPaginator } = useReview();
	const goodsId = computed(() => props.goodsId);
	const shoppingAggregate = computed(() => props.shoppingAggregate);
	const pointConfig = config('point');
	const myReviewPointRule = pointConfig.grade_rules.find(rule => rule.grade_id === member.value?.grade.id);
	const textReviewPoint = computed(() => myReviewPointRule ? myReviewPointRule.text_review_point : pointConfig.review_point);
	const photoReviewPoint = computed(() => myReviewPointRule ? myReviewPointRule.photo_review_point : pointConfig.photo_review_point);
	const { number, newLineToBr, date } = useFormatter();
	const reviewListEl = ref<HTMLElement>();
	const reviewPaginator = ref<Paginator<Review>>({
		total: 0,
		per_page: 10,
		current_page: 1,
		data: [],
	});
	const recentPhotoReviewList = ref<Paginator<PhotoReview>>({
		total: 0,
		per_page: 10,
		current_page: 1,
		data: [],
	});
	const [pReviewTemplateStatistics, pBestReviews, pReviewPaginator, pPhotoPaginator] = await Promise.all([
		getReviewTemplateStatistics(goodsId.value),
		getBestReviews(goodsId.value),
		getReviewPaginator(goodsId.value, reviewFilter.value),
		getPhotoReviewPaginator(goodsId.value, 1, 4),
	]);
	const reviewTemplateStatistics = pReviewTemplateStatistics;
	const bestReviews = ref<BestReview[]>(pBestReviews);
	recentPhotoReviewList.value = pPhotoPaginator;
	reviewPaginator.value = pReviewPaginator;

	watch(reviewFilter, async (changedFilter) => {
		loading.show();
		try {
			reviewPaginator.value = await getReviewPaginator(goodsId.value, changedFilter);
		}
		catch (e) {
			console.error(e);
		}
		finally {
			loading.hide();
		}

	}, {
		deep: true,
	});

	const changeSort = (sort: { label: string; value: string}) => {
		reviewFilter.value.page = 1;
		reviewFilter.value.sort = sort.value;
	};

	async function overlayProductReviewAllPhoto() {
		const component = defineAsyncComponent(() => import('@/page/product/review/all-photo/ProductReviewAllPhoto.vue'));

		return openOverlay(component, {
			props: {
				goodsId: goodsId.value,
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

	function overlayBestReviewDetail(review: Review) {
		const component = defineAsyncComponent(() => import('@/page/product/review/best/ProductReviewBest.vue'));

		return openOverlay(component, {
			props: {
				id: review.id,
				total: bestReviews.value.length,
			},
		});
	}

	function goWriteReviewPage() {
		if (member.value === null || !props.reviewWritable) {
			return bom.alert('상품 구매 회원만 리뷰 작성이 가능합니다.');
		}

		router.push({
			name: 'MyReviewPending',
		});
	}

	async function fetch(page: number = 1) {
		reviewFilter.value.page = page;
	}
</script>