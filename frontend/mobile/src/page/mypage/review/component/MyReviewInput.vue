<template>
	<!-- 별점 -->
	<section>
		<h6><b>상품은 만족하셨나요?</b></h6>
		<!-- (D) 선택된 별점의 li에 'S=starscore-on' 클래스와 button에 '선택됨' 타이틀이 추가되며, input hidden의 value값에 점수가 입력됩니다. (0 선택안됨) -->
		<div class="m_overlay-myreview-starscore">
			<ul>
				<li
					v-for="score in 5"
					:key="score"
					:class="{ 'S=starscore-on': (rate || 0) >= score }"
				>
					<button
						type="button"
						:title="rate === score ? '선택됨' : ''"
						@click="rate = score"
					>
						<i class="ico_star-fill"></i><b class="mm_ir-blind">5점 만점에 {{ score }}점</b>
					</button>
				</li>
			</ul>
			<input
				type="hidden"
				:value="rate"
			>
		</div>
	</section>


	<review-template-satisfy-setting
		v-if="useReviewTemplate && reviewTemplates.length && selectedReviewTemplates"
		v-model:selected-review-templates="selectedReviewTemplates"
		:review-templates="reviewTemplates"
	></review-template-satisfy-setting>


	<div class="mm_inner">
		<review-template-body
			v-if="usePersonalization"
			v-model:height="height"
			v-model:weight="weight"
			v-model:shoes-size="shoesSize"
		></review-template-body>

		<h6 class="mm_text-label">
			<b>리뷰 내용</b>
		</h6>
		<form-textarea
			v-model="contents"
			placeholder="최소 10자 이상 입력하세요"
			:byte="2000"
		></form-textarea>
		<form-image
			v-model="images"
			:urls="imageUrls"
			need-block
		></form-image>
		<div class="mm_note">
			<ul>
				<li>사진은 jpg, png 파일로 3개까지 업로드 가능합니다.</li>
				<li>첫번째 등록한 사진이 리뷰 대표 이미지로 설정됩니다.</li>
				<li>입력하신 리뷰 위에 등록한 이미지가 노출됩니다.</li>
				<li>동일한 문자 또는 자음/모음은 4회 이상 연속 입력할 수 없습니다.</li>
				<li>소중한 고객님의 개인 정보 보호를 위해 주민번호, 전화번호 등 개 인 정보는 절대 입력하지 않도록 주의해주세요.</li>
				<li>저작권 침해/음란/욕설/비방 글, 개인 정보 유출(전화번호, 주민 번호, 이름, 아이디 등), 판매/광고/홍보성 글을 등록한 경우 임의 로 삭제될 수 있습니다.</li>
				<li class="mm_text-secondary">
					작성해 주신 소중한 리뷰는 마케팅 목적으로 사용될 수 있습니다.
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import FormImage from '@/component/form/FormImage.vue';
	import FormTextarea from '@/component/form/FormTextarea.vue';
	import ReviewTemplateBody from '@/feature/review-template/component/ReviewTemplateBody.vue';
	import ReviewTemplateSatisfySetting from '@/feature/review-template/component/ReviewTemplateSatisfySetting.vue';

	const props = withDefaults(defineProps<{
		rate: number|null
		contents: string
		selectedReviewTemplates?: MyReviewDetail['selected_templates']
		images: (File | Blob | null)[]
		height?: number|null
		weight?: number|null
		shoesSize?: number|null
		imageUrls?: string[]
		reviewTemplates: ReviewTemplate[]
		useReviewTemplate?: boolean
		usePersonalization?: boolean
	}>(), {
		rate: 0,
		contents: '',
		images: () => [],
		imageUrls: () => [],
		height: null,
		weight: null,
		shoesSize: null,
		selectedReviewTemplates: () => [],
		reviewTemplates: () => [],
		useReviewTemplate: false,
		usePersonalization: false,
	});


	const emit = defineEmits<{
		(e: 'update:rate', value: number): void
		(e: 'update:contents', value: string): void
		(e: 'update:images', value: (File | Blob | null)[]): void
		(e: 'update:selectedReviewTemplates', value: MyReviewDetail['selected_templates']): void
		(e: 'update:height', value: number|null): void
		(e: 'update:weight', value: number|null): void
		(e: 'update:shoesSize', value: number|null): void
	}>();

	/** 문의 제목 */
	const rate = computed({
		get: () => props.rate,
		set: (value) => emit('update:rate', value),
	});

	/** 문의 내용 */
	const contents = computed({
		get: () => props.contents,
		set: (value) => emit('update:contents', value),
	});

	/** 문의 이미지 */
	const images = computed({
		get: () => props.images,
		set: (value) => emit('update:images', value),
	});

	const height = computed({
		get: () => props.height,
		set: (value) => emit('update:height', value),
	});

	const weight = computed({
		get: () => props.weight,
		set: (value) => emit('update:weight', value),
	});

	const shoesSize = computed({
		get: () => props.shoesSize,
		set: (value) => emit('update:shoesSize', value),
	});


	const selectedReviewTemplates = computed({
		get: () => props.selectedReviewTemplates,
		set: (value) => emit('update:selectedReviewTemplates', value),
	});
</script>