<template>
	<div class="m_overlay-review-detail">
		<carousel
			:items="reviews"
			:use-control="true"
			:is-auto-height="true"
			:control-button-class="controlButtonClass"
			@complete="completed"
		>
			<template #default="{ item: review }">
				<div
					v-if="review"
					class="mm_scroller"
				>
					<div class="mm_review">
						<div class="mm_review-head">
							<p class="text_user">
								<experience-review-tag v-if="review.is_experience_group"></experience-review-tag>
								<!-- 등급아이콘 미노출 처리 -->
								<!--
									<lazyload
									class="mm_bg-contain image_grade"
									:src="item.grade.image"
									:is-error-image="false"
									></lazyload>
									<span class="mm_ir-blind">{{ item.grade.alt }}</span>
								-->
								{{ review.writer_masking_id }}
							</p>
							<p class="text_star">
								<i class="ico_star-fill"></i><span>{{ review.rate }}</span>
							</p>
						</div>
						<ul class="m...detail-image">
							<li
								v-for="image in review.image_urls"
								:key="image"
							>
								<i class="image_review">
									<lazyload
										is-force
										tag="img"
										:src="image"
										is-ratio
									></lazyload>
								</i>
							</li>
						</ul>
						<p class="text_info">
							{{ optionText(review.option_name) }}
						</p>
						<p class="text_review">
							<b v-html="newLineToBr(review.contents)"></b>
						</p>

						<review-template-satisfy
							v-if="(review.templates || []).length > 0"
							:templates="review.templates"
						></review-template-satisfy>

						<p class="text_date">
							{{ date(review.created_at, 'YYYY.MM.DD') }}
						</p>
					</div>
				</div>
			</template>
		</carousel>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useFormatter } from '$/composables/useFormatter';
	import Carousel from '@/component/Carousel.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import ExperienceReviewTag from '@/feature/experience/component/ExperienceReviewTag.vue';
	import ReviewTemplateSatisfy from '@/feature/review-template/component/ReviewTemplateSatisfy.vue';

	withDefaults(defineProps<{
		reviews: (BestReviewDetail|PhotoReviewDetail)[],
	}>(), {
		reviews: () => [],
	});
	const emit = defineEmits<{
		'complete': [activeIndex: number, realIndex: number, isBack: boolean | undefined, $ui: HTMLElement];
	}>();


	const { newLineToBr, optionText, date } = useFormatter();

	const controlClass = 'S=control-on';
	const controlButtonClass = ref('');

	function completed(param: { activeIndex: number, realIndex: number, isBack?: boolean}, $ui: HTMLElement) {
		emit('complete', param.activeIndex, param.realIndex, param.isBack, $ui);
		controlButtonClass.value = controlClass;
		setTimeout(() => {
			controlButtonClass.value = '';
		}, 3000);

	}
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