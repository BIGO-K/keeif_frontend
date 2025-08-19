<template>
	<div class="m_overlay-review-detail">
		<carousel
			:items="reviewCarouselItems"
			:use-control="true"
			:is-auto-height="true"
			@complete="reviewAutoHide"
		>
			<template #default="{ item }">
				<div class="mm_scroller">
					<div class="mm_review">
						<div class="mm_review-head">
							<p class="text_user">
								<experience-review-tag v-if="true"></experience-review-tag>

								<lazyload
									class="mm_bg-contain image_grade"
									:src="item.grade.image"
									:is-error-image="false"
								></lazyload>
								<span class="mm_ir-blind">{{ item.grade.alt }}</span>
								{{ item.id }}
							</p>
							<p class="text_star">
								<i class="ico_star-fill"></i><span>{{ item.score }}</span>
							</p>
						</div>
						<ul class="m...detail-image">
							<li
								v-for="image in item.images"
								:key="image"
							>
								<i class="image_review">
									<lazyload
										tag="img"
										:src="image"
										:is-ratio="true"
									></lazyload>
								</i>
							</li>
						</ul>
						<p class="text_info">
							{{ item.option }}
						</p>
						<p class="text_review">
							<b v-html="item.review"></b>
						</p>

						<review-template-satisfy v-if="true"></review-template-satisfy>

						<p class="text_date">
							{{ item.date }}
						</p>
					</div>
				</div>
			</template>
		</carousel>
	</div>
</template>

<script setup lang="ts">
	import Carousel from '@/component/Carousel.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import ExperienceReviewTag from '@/feature/experience/component/ExperienceReviewTag.vue';
	import ReviewTemplateSatisfy from '@/feature/review-template/component/ReviewTemplateSatisfy.vue';

	const reviewCarouselItems = [
		{
			grade: {
				image: '/image/common/level4.png',
				alt: '브론즈',
			},
			id: 'abcde***',
			score: 4.5,
			images: [
				'/image/_sample/brand_wide_1.png',
				'/image/_sample/prod_x1_5.png',
				'/image/_sample/prod_x1_6.png',
			],
			option: '화이트/85',
			review: `주문하고 다음날 바로 받았어요. 옆트임이 길어서 고민하다<br>
				주문했는데 연출하기 좀 애매한거 같아요.....`,
			date: '2022.05.26',
		},
		{
			grade: {
				image: '/image/common/level1.png',
				alt: 'VIP',
			},
			id: 'asdfg***',
			score: 5.0,
			images: [
				'/image/_sample/prod_x1_5.png',
				'/image/_sample/brand_wide_1.png',
				'/image/_sample/prod_x1_6.png',
			],
			option: '블랙/90',
			review: `주문하고 다음날 바로 받았어요. 옆트임이 길어서 고민하다<br>
				주문했는데 연출하기 좀 애매한거 같아요.....`,
			date: '2022.07.13',
		},
		{
			grade: {
				image: '/image/common/level5.png',
				alt: '패밀리',
			},
			id: 'qwer***',
			score: 4.0,
			images: [
				'/image/_sample/prod_x1_6.png',
				'/image/_sample/brand_wide_1.png',
			],
			option: '화이트/100',
			review: `주문하고 다음날 바로 받았어요. 옆트임이 길어서 고민하다<br>
				주문했는데 연출하기 좀 애매한거 같아요.....`,
			date: '2022.08.03',
		},
	];

	const reviewAutoHide = () => {
		console.log('complete - auto hide');
	};
</script>

<!-- 현재 페이지 스크립트 -->
<!--
	<script>
	// 버튼 노출/숨김
	function reviewAutoHide(__isChange) {

	if (__isChange === false) return;

	var $carousel = mm.find('.mm_carousel')[0];
	var $btnControls = mm.find('.btn_carousel-prev, .btn_carousel-next', $carousel);
	var _classOn = 'S=control-on';

	mm.class.add($btnControls, _classOn);
	mm.delay.on(mm.class.remove, { _time: 1, _isSec: true, _name: 'DELAY_REVIEW_CONTROL_HIDE', _isOverwrite: true, params: [$btnControls, _classOn] });

	}

	mm.load(mm.delay.on(reviewAutoHide, { _time: 300 }));
	</script>
-->