import { computed } from 'vue';
import config from '$/utils/config';
import { useBackend } from '$/composables/useBackend';
import { useGlobalPageContext } from '$/composables/useGlobalPageContext';

export function useReview() {
	const defaultPageSize = 20;

	const { member } = useGlobalPageContext();

	const myReviewPointSetting = computed(() => {
		const setting = config('point');
		const defaultSetting = {
			photoReviewPoint: setting.photo_review_point,
			textReviewPoint: setting.review_point,
		};

		if (!member.value) {
			return defaultSetting;
		}
		const myGradeSetting = setting.grade_rules.find(rule => rule.grade_id == member.value?.grade.id);

		if (!myGradeSetting || !myGradeSetting?.use_grade_rule) {
			return defaultSetting;
		}

		return {
			photoReviewPoint: myGradeSetting.photo_review_point,
			textReviewPoint: myGradeSetting.text_review_point,
		};
	});

	const useReviewTemplate = config('paid_features.review_template');
	const usePersonalization = config('paid_features.personalization');

    /**
     * 리뷰 가능 주문상품 페이지네이터 조회
     * @param page
     * @param pageSize
     * @returns
     */
	async function getReviewablePaginator(page: number, pageSize: number = defaultPageSize) {
		const { paginator } = await useBackend().command<{
            paginator: Paginator<ReviewableOrderItem>
        }>('v1/boards/goods-reviews/writables', {
        	params: {
        		page: page,
        		page_size: pageSize,
        	},
        });

		return paginator;
	}

    /**
     * 상품 리뷰템플릿 조회
     * @param goodsId
     * @returns
     */
	async function getReviewTemplates(goodsId: number) {
		const { review_templates } = await useBackend().command<{
            review_templates: ReviewTemplate[]
        }>(`v1/boards/goods-reviews/selectables-with-goods/${goodsId}`);

		return review_templates;
	}

    /**
     * 리뷰 작성
     * @param form
     */
	async function add(form: ReviewStoreForm) {
		const formData = new FormData();
		formData.append('order_id', form.order_id || '');
		formData.append('option_id', form.option_id ? `${form.option_id}` : '');
		formData.append('ea', form.ea ? `${form.ea}` : '');
		formData.append('rate', form.rate ? `${form.rate}` : '');
		formData.append('contents', form.contents);
		formData.append('height', form.height ? `${form.height}` : '');
		formData.append('weight', form.weight ? `${form.weight}` : '');
		formData.append('shoes_size', form.shoes_size ? `${form.shoes_size}` : '');
		form.images.forEach((image) => {
			if (!image) {
				return;
			}
			formData.append('images[]', image);
		});

        // 리뷰템플릿별 선택값
		form.selected_review_templates.forEach((selected, index) => {
			formData.append(`selected_review_templates[${index}][template_id]`, selected.template_id ? `${selected.template_id}` : '');
			formData.append(`selected_review_templates[${index}][template_detail_id]`, selected.detail_id ? `${selected.detail_id}` : '');
		});

		await useBackend().command('v1/boards/goods-reviews', {
			method: 'post',
			data: formData,
			asForm: true,
		});
	}

    /**
     * 작성한 리뷰 페이지네이터 조회
     * @param page
     * @param pageSize
     * @returns
     */
	async function getMyReviewPaginator(page: number = 1, pageSize: number = defaultPageSize) {
		const { paginator } = await useBackend().command<{
            paginator: Paginator<MyReview>
        }>('v1/my/goods-reviews', {
        	params: {
        		page: page,
        		page_size: pageSize,
        	},
        	isForce: true,
        });

		return paginator;
	}

    /**
     * 작성한 리뷰 상세 조회
     * @param id
     * @returns
     */
	async function getMyReviewDetail(id: number) {
		const { review } = await useBackend().command<{
            review: MyReviewDetail
        }>(`v1/boards/goods-reviews/${id}/edit`);

		return review;
	}

    /**
     * 리뷰 수정처리
     * @param id
     * @param form
     */
	async function update(id: number, form: ReviewUpdateForm) {
		const formData = new FormData();
		formData.append('rate', form.rate ? `${form.rate}` : '');
		formData.append('contents', form.contents);
		formData.append('height', form.height ? `${form.height}` : '');
		formData.append('weight', form.weight ? `${form.weight}` : '');
		formData.append('shoes_size', form.shoes_size ? `${form.shoes_size}` : '');
		form.images.forEach((image) => {
			if (!image) {
				return;
			}
			formData.append('images[]', image);
		});

        // 리뷰템플릿별 선택값
		form.selected_review_templates.forEach((selected, index) => {
			formData.append(`selected_review_templates[${index}][template_id]`, selected.template_id ? `${selected.template_id}` : '');
			formData.append(`selected_review_templates[${index}][template_detail_id]`, selected.detail_id ? `${selected.detail_id}` : '');
		});

		await useBackend().command(`v1/boards/goods-reviews/${id}/edit`, {
			method: 'post',
			data: formData,
			asForm: true,
		});
	}

    /**
     * 리뷰 집계 조회: 작성한 리뷰, 작성가능한 리뷰 수 조회
     * @returns
     */
	async function getMyReviewAggregate() {
		const { reviews } = await useBackend().command<{
            reviews: MyReviewAggregate
        }>('v1/my/goods-review-context');

		return reviews;
	}

    /**
     * [상품: 베스트리뷰] 리스트 조회
     * @param goodsId
     * @returns
     */
	async function getBestReviews(goodsId: number) {
		const { best_reviews } = await useBackend().command<{
            best_reviews: BestReview[]
        }>(`v1/goods/${goodsId}/reviews/best`);

		return best_reviews;
	}

    /**
     * [상품: 베스트리뷰] 상세 조회
     * @param goodsId
     * @param reviewId
     * @returns
     */
	async function getBestReviewDetail(goodsId: number, reviewId: number) {
		const {
			best_review,
			prev_best_review_id,
			next_best_review_id,
		} = await useBackend().command<{
			best_review: BestReviewDetail
			prev_review_id: number
			next_review_id: number
		}>(`v1/goods/${goodsId}/reviews/best/${reviewId}`);

		best_review.prev_review_id = prev_best_review_id;
		best_review.next_review_id = next_best_review_id;

		return best_review;
	}

    /**
     * [상품] 리뷰 항목 통계 조회
     * @param goodsId
     * @returns
     */
	async function getReviewTemplateStatistics(goodsId: number) {
		const { review_template_list } = await useBackend().command<{
            review_template_list: GoodsReviewTemplateStatistics[]
        }>(`v1/goods/${goodsId}/reviews/stat-of-templates`);

		return review_template_list;
	}

    /**
     * [상품] 리뷰 페이지네이터 조회
     * @param goodsId
     * @param filter
     * @returns
     */
	async function getReviewPaginator(
		goodsId: number,
		filter: {
            page: number
            pageSize: number
            sort: string
            onlyPhotoReview: boolean;
        },
	) {
		const { paginator } = await useBackend().command<{
            paginator: Paginator<Review>
        }>(`v1/goods/${goodsId}/reviews`, {
        	params: {
        		page: filter.page,
        		page_size: filter.pageSize,
        		sort: filter.sort,
        		only_photo_review: filter.onlyPhotoReview,
        	},
        });

		return paginator;
	}

    /**
     * 포토리뷰 이미지 조회
     * @param reviewId
     * @returns
     */
	async function getReviewImages(reviewId: number) {
		const { image_urls } = await useBackend().command<{
            image_urls: string[]
        }>(`v1/boards/goods-reviews/${reviewId}/image-urls-by-photos`);

		return image_urls;
	}

    /**
     * 포토리뷰 페이지네이터 조회
     * @param goodsId
     * @param page
     * @param pageSize
     * @returns
     */
	async function getPhotoReviewPaginator(goodsId: number, page: number, pageSize: number = 100) {
		const { paginator } = await useBackend().command<{
            paginator: Paginator<PhotoReview>
        }>(`v1/goods/${goodsId}/reviews/photos`, {
        	params: {
        		page: page,
        		page_size: pageSize,
        	},
        });

		return paginator;
	}

    /**
     * 포토리뷰 상세
     * @param goodsId
     * @param reviewId
     * @returns
     */
	async function getPhotoReviewDetail(goodsId: number, reviewId: number) {
		const {
			photo_review,
			prev_review_id,
			next_review_id,
		} = await useBackend().command<{
			photo_review: PhotoReviewDetail
			prev_review_id: number
			next_review_id: number
		}>(`v1/goods/${goodsId}/reviews/photos/${reviewId}`);

		photo_review.prev_review_id = prev_review_id;
		photo_review.next_review_id = next_review_id;

		return photo_review;
	}

	return {
		myReviewPointSetting,
		useReviewTemplate,
		usePersonalization,
		getReviewablePaginator,
		getReviewTemplates,
		add,
		getMyReviewPaginator,
		getMyReviewDetail,
		update,
		getMyReviewAggregate,
		getBestReviews,
		getBestReviewDetail,
		getReviewTemplateStatistics,
		getReviewPaginator,
		getReviewImages,
		getPhotoReviewPaginator,
		getPhotoReviewDetail,
	};
}