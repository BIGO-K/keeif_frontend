import { useBackend } from '$/composables/useBackend';
import { useGlobalPageContext } from '$/composables/useGlobalPageContext';

export function useExperienceReview() {
	const { isMember } = useGlobalPageContext();
    /**
     * [체험단 리뷰] 페이지네이터 조회
     * @param page
     * @param pageSize
     * @returns
     */
	async function getPaginator(page: number = 1, pageSize: number = 20) {
		const { paginator } = await useBackend().command<{
			paginator: Paginator<ExperienceReview>
		}>('v1/exhibit/experience-reviews', {
			params: {
				page,
				page_size: pageSize,
			},
		});

		return paginator;
	}

    /**
     * [체험단 리뷰] 상세조회
     * @param id
     * @returns
     */
	async function getDetail(id: number) {
		const { detail } = await useBackend().command<{
            detail: ExperienceReviewDetail
        }>(`v1/exhibit/experience-reviews/${id}`);

		return detail;
	}

    /**
     * [체험단 후기] 작성 가능 상품 리스트 조회
     * @returns
     */
	async function getReviewableGoods() {
		const { goods_list } = await useBackend().command<{
            goods_list: ExperienceReviewableGoods[]
        }>('v1/exhibit/experience-reviews/reviewable-goods');

		return goods_list;
	}

    /**
     * [체험단 리뷰] 작성
     * @param form
     */
	async function add(form: ExperienceReviewForm) {
		const formData = new FormData();
		formData.append('goods_id', form.goods_id ? `${form.goods_id}` : '');
		formData.append('option_id', form.option_id ? `${form.option_id}` : '');
		formData.append('rate', form.rate ? `${form.rate}` : '');
		formData.append('title', form.title);
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

        // 리뷰 템플릿별 선택 값
		form.selected_review_templates.forEach((selected, index) => {
			formData.append(`selected_review_templates[${index}][template_id]`, selected.template_id ? `${selected.template_id}` : '');
			formData.append(`selected_review_templates[${index}][template_detail_id]`, selected.detail_id ? `${selected.detail_id}` : '');
		});

		await useBackend().command('v1/exhibit/experience-reviews', {
			method: 'post',
			data: formData,
			asForm: true,
		});
	}

    /**
     * [체험단 후기] 추천여부 확인
     * @param reviewIds
     * @returns
     */
	async function getRecommended(reviewIds: number[]) {
		if (!isMember.value) {
			return reviewIds.map(review_id => ({
				review_id,
				is_recommendation: false,
			}));
		}

		const { recommendation_relation_reviews } = await useBackend().command<{
            recommendation_relation_reviews: {
                review_id: number
                is_recommendation: boolean
            }[]
		}>('v1/exhibit/experience-reviews/check-likes', {
			method: 'post',
			data: {
				review_ids: reviewIds,
			},
		});

		return recommendation_relation_reviews;
	}

    /**
     * [체험단 후기] 추천
     * @param id
     */
	async function recommend(id: number) {
		await useBackend().command('v1/exhibit/experience-reviews/like', {
			method: 'post',
			data: {
				review_id: id,
			},
		});
	}

    /**
     * [체험단 후기] 추천 취소
     * @param id
     */
	async function cancelRecommend(id: number) {
		await useBackend().command('v1/exhibit/experience-reviews/unlike', {
			method: 'post',
			data: {
				review_id: id,
			},
		});
	}

	return {
		getPaginator,
		getDetail,
		getRecommended,
		getReviewableGoods,
		add,
		recommend,
		cancelRecommend,
	};
}