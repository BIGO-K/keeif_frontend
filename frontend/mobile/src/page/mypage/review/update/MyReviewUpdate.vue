<template>
	<div class="m_overlay-myreview">
		<!-- 상품정보 : 자동노출 -->
		<div class="m_overlay-myreview-product">
			<div class="m...product-point S=point-on">
				<p><i class="ico_review-photo"></i>포토 리뷰 등록 시 최대<b><strong>{{ number(myReviewPointSetting.photoReviewPoint) }}</strong><sub>원</sub></b>적립!</p>
				<div class="m...product-point-inner">
					<dl><dt>텍스트 리뷰</dt><dd><strong>{{ number(myReviewPointSetting.textReviewPoint) }}</strong><sub>원</sub></dd></dl>
					<dl><dt>포토 리뷰</dt><dd><strong>{{ number(myReviewPointSetting.photoReviewPoint) }}</strong><sub>원</sub></dd></dl>
				</div>
			</div>
			<div class="mm_product-item T=single-sm">
				<figure>
					<lazyload
						class="mm_bg-cover image_product"
						:src="originReview.order_item.goods.thumbnail_url"
					></lazyload>
					<figcaption>
						<p class="text_brand">
							{{ originReview.order_item.goods.brand_name }}
						</p>
						<p class="text_product">
							{{ originReview.order_item.goods.name }}
						</p>
						<p class="text_option">
							{{ optionText(originReview.order_item.option_name) }} / {{ originReview.order_item.ea }}개
						</p>
					</figcaption>
				</figure>
			</div>
		</div>
		<hr class="mm_line">

		<my-review-input
			v-model:rate="form.rate"
			v-model:contents="form.contents"
			v-model:selected-review-templates="form.selected_review_templates"
			v-model:images="form.images"
			v-model:height="form.height"
			v-model:weight="form.weight"
			v-model:shoes-size="form.shoes_size"
			v-bind="{
				useReviewTemplate,
				reviewTemplates,
				usePersonalization,
				imageUrls
			}"
		></my-review-input>

		<div class="mm_inner">
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
						@click="updateReview"
					>
						<b>수정하기</b>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useReview } from '$/composables/useReview';
	import Lazyload from '@/component/Lazyload.vue';
	import MyReviewInput from '@/page/mypage/review/component/MyReviewInput.vue';

	const props = defineProps<{
		originReview: MyReview,
		closer: CloseHandler<void>
	}>();

	defineExpose<OverlayComponentExpose>({
		title: `리뷰 쓰기`,
	});

	const { loading, bom } = useGlobalPageContext();
	/** 리뷰 composable */
	const { myReviewPointSetting, useReviewTemplate, usePersonalization, update, getMyReviewDetail } = useReview();
	/** formatter composable */
	const { number, optionText } = useFormatter();
	/** form composable */
	const { form, validate } = useForm<ReviewUpdateForm>(
		{
			rate: props.originReview.rate,
			contents: props.originReview.contents,
			height: undefined,
			weight: undefined,
			shoes_size: undefined,
			selected_review_templates: [],
			images: [],
			ea: props.originReview.order_item.ea,
		},
		{
			rule: {
				'rate(별점)': ['required'],
				'height(키)': ['number'],
				'weight(몸무게)': ['number'],
				'contents(내용)': ['required', 'minLength:10', 'maxLength:2000', 'blank', 'noRepeat'],
			},
		},
	);

	const reviewTemplates = ref<ReviewTemplate[]>([]);
	const imageUrls = ref<string[]>([]);

	async function updateReview() {
		loading.show();
		try {
			await validate();
			await update(props.originReview.id, form.value);
			bom.alert('리뷰가 수정되었습니다.', props.closer);
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}

	await (async () => {
		const review = await getMyReviewDetail(props.originReview.id);
		form.value.height = review.height;
		form.value.weight = review.weight;
		form.value.shoes_size = review.shoes_size;
		imageUrls.value = review.image_urls;
		review.selected_templates.forEach((selected, index) => {
			form.value.selected_review_templates[index] = {
				...selected,
			};
		});
		reviewTemplates.value = review.templates;
	})();
</script>

<!--
	<script>
	(function() {

	//< 별점 선택
	var $starscore = mm.find('.m_overlay-myreview-starscore');
	var $star = mm.find('li', $starscore);

	mm.event.on($star, 'click', function(__e) {

	$starscore[0].classList.add('S=starscore-choice');

	var _currentIndex = mm.element.index(mm.find('li', $starscore), __e.currentTarget);

	_.each($star, function(__element, __index) {
	if (__index > _currentIndex) {
	__element.classList.remove('S=starscore-on');
	__element.children[0].removeAttribute('title');
	}
	else {
	__element.classList.add('S=starscore-on');
	__element.children[0].setAttribute('title', '선택됨');
	}
	});

	mm.find('input[type=hidden]', $starscore)[0].value = _currentIndex + 1;

	});
	//> 별점 선택

	// 리뷰 상품 선택시 포인트 안내 노출
	var $prodSelect = mm.find('.mm_product-select')[0];
	var $selectComplete = mm.find('.mm_product-select-complete', $prodSelect)[0];
	mm.event.on(mm.find('.mm_product-item', $prodSelect), 'click', function(__e) {

	var $reviewPoint = mm.find('.m\\.\\.\\.product-point')[0];
	var _classOn = 'S=point-on';

	if ($reviewPoint.classList.contains(_classOn)) return;

	$reviewPoint.classList.add(_classOn);

	mm.delegate.on($selectComplete, '.btn_remove', 'click', function(__e) {

	$reviewPoint.classList.remove(_classOn);

	});

	});

	})();
	</script>
-->