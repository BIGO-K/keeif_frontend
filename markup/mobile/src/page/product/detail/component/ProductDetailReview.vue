<template>
	<div class="m_prodetail-tab-review">
		<strong class="text_star"><i class="ico_star-fill"></i><span>4.5</span></strong>
		<p><strong>828명</strong>의 고객님이 리뷰를 남겨주셨고,<br> <strong class="mm_text-secondary">99%</strong>가 만족하셨습니다.</p>

		<review-template-satisfy-detail v-if="true"></review-template-satisfy-detail>

		<div class="m...review-point">
			<p>리뷰 작성하시면 포인트를 적립해드립니다.</p>
			<ul>
				<li><p>텍스트 리뷰: <strong>500</strong><sub>원</sub></p></li>
				<li><p>포토 리뷰: <strong>1,000</strong><sub>원</sub></p></li>
			</ul>
			<a
				class="mm_btn T=primary"
				href="#"
				@click.prevent="overlayMyReviewCreate"
			>
				<b>리뷰 작성하기</b>
			</a>
		</div>

		<p
			v-if="items.length < 1"
			class="mm_text-none"
		>
			<i class="ico_text-none"></i>등록된 리뷰가 아직 없습니다
		</p>

		<template v-else>
			<div class="m...review-best">
				<h4><b>베스트 리뷰</b></h4>
				<carousel
					:items="bestCarouselItems"
					:use-count="true"
					:is-more-side="true"
					count-pad="00"
				>
					<template #default="{ item }">
						<a
							href="#"
							@click.prevent="overlayProductReviewBest"
						>
							<p class="text_user">
								<lazyload
									class="mm_bg-contain image_grade"
									:src="item.grade.image"
								></lazyload>
								<span class="mm_ir-blind">{{ item.grade.alt }}</span>
								{{ item.id }}
							</p>
							<p class="text_star">
								<i class="ico_star-fill"></i><span>{{ item.score }}</span>
							</p>
							<div class="mm_flex">
								<p class="text_review">
									<b v-html="item.review"></b>
									<span class="text_date">{{ item.date }}</span>
								</p>
								<lazyload
									v-if="item.image != null"
									class="mm_bg-cover image_review"
									:src="item.image"
								></lazyload>
							</div>
						</a>
					</template>
				</carousel>
			</div>

			<section class="m...review-list">
				<h4><b>전체 리뷰수</b><strong>9,999</strong></h4>

				<!-- 포토리뷰 -->
				<div class="m...review-list-photo">
					<ul>
						<li>
							<a
								href="#"
								@click.prevent="overlayProductReviewAllPhoto"
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
								@click.prevent="overlayProductReviewAllPhoto"
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
								@click.prevent="overlayProductReviewAllPhoto"
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
								@click.prevent="overlayProductReviewAllPhoto"
							>
								<lazyload
									class="mm_bg-cover image_review"
									src="/image/_sample/prod_x1_4.png"
								></lazyload>
								<b class="mm_ir-blind">abc***님의 포토리뷰</b>
							</a>
						</li>
					</ul>
				</div>

				<!-- 리뷰 목록 -->
				<div class="m...review-list-head">
					<form-check
						v-model="isPhotoReview"
						label="포토리뷰"
					></form-check>
					<ul>
						<li>
							<button
								type="button"
								class="S=on"
								title="선택됨"
							>
								<b>최신순</b>
							</button>
						</li>
						<li>
							<button type="button">
								<b>별점 높은순</b>
							</button>
						</li>
						<li>
							<button type="button">
								<b>별점 낮은순</b>
							</button>
						</li>
					</ul>
				</div>
				<ul>
					<li>
						<div class="mm_review">
							<div class="mm_review-head">
								<p class="text_user">
									<experience-review-tag v-if="true"></experience-review-tag>

									<lazyload
										class="mm_bg-contain image_grade"
										src="/image/common/level3.png"
										:is-error-image="false"
									></lazyload>
									seed***
								</p>
								<p class="text_star">
									<i class="ico_star-fill"></i><span>5.0</span>
								</p>
								<p class="text_info">
									화이트/85
								</p>
							</div>
							<!-- (D) 리뷰 내용이 3줄 이하인 경우는 리뷰 내용이 아래와 같이 노출됩니다 -->
							<p class="text_review">
								<b>
									꽤 길고 박시해요.<br>딱 만졌을 때 면은 도톰하니 되게 질이 좋아보여요.
								</b>
							</p>

							<review-template-satisfy v-if="true"></review-template-satisfy>

							<p class="text_date">
								2022.05.26
							</p>
						</div>
					</li>
					<li>
						<div class="mm_review">
							<div class="mm_review-head">
								<p class="text_user">
									<lazyload
										class="mm_bg-contain image_grade"
										src="/image/common/level5.png"
										:is-error-image="false"
									></lazyload>
									seed***
								</p>
								<p class="text_star">
									<i class="ico_star-fill"></i><span>4.5</span>
								</p>
								<p class="text_info">
									화이트/85
								</p>
							</div>
							<toggle
								class="text_review"
								title="열기"
								active-title="닫기"
								parent-selector=".mm_review"
							>
								<b>
									꽤 길고 박시해요.<br>딱 만졌을 때 면은 도톰하니 되게 질이 좋아보여요<br>
									기장이 길어서 바지 안에 넣어입기에는 좀 귀찮고 모델사진처럼 치마에 넣어입으니까 편하고 좋네요<br>
									초록색 레터링에 반해서 좀 비싸도 사봤는데 만족합니다<br>
									여름에 두루두루 잘 입을 수 있을 것 같아요<br>
									다만 트임을 이용해서 앞만 넣고 입는건 뒤에 남는 기장 때문에 개인적으로 좀 애매한것 같아요.
								</b>
								<span class="mm_btn T=line T=dark"><i class="ico_toggle"></i></span>
							</toggle>

							<review-template-satisfy v-if="true"></review-template-satisfy>

							<ul class="mm_review-image">
								<li>
									<a
										href="#"
										@click.prevent="overlayProductReviewPhoto"
									>
										<i class="image_review">
											<lazyload
												class="mm_bg-contain image_grade"
												tag="img"
												src="/image/_sample/brand_wide_1.png"
												:is-ratio="false"
											></lazyload>
										</i>
									</a>
								</li>
								<li>
									<a
										href="#"
										@click.prevent="overlayProductReviewPhoto"
									>
										<i class="image_review">
											<lazyload
												class="mm_bg-contain image_grade"
												tag="img"
												src="/image/_sample/prod_x1_5.png"
												:is-ratio="false"
											></lazyload>
										</i>
									</a>
								</li>
								<li>
									<a
										href="#"
										@click.prevent="overlayProductReviewPhoto"
									>
										<i class="image_review">
											<lazyload
												class="mm_bg-contain image_grade"
												tag="img"
												src="/image/_sample/prod_x1_6.png"
												:is-ratio="false"
											></lazyload>
										</i>
									</a>
								</li>
							</ul>
							<p class="text_date">
								2022.05.26
							</p>
						</div>
					</li>
					<li>
						<div class="mm_review">
							<div class="mm_review-head">
								<p class="text_user">
									<lazyload
										class="mm_bg-contain image_grade"
										src="/image/common/level4.png"
									></lazyload>
									seed***
								</p>
								<p class="text_star">
									<i class="ico_star-fill"></i><span>4.5</span>
								</p>
								<p class="text_info">
									화이트/85
								</p>
							</div>
							<toggle
								class="text_review"
								title="열기"
								active-title="닫기"
								parent-selector=".mm_review"
							>
								<b>
									꽤 길고 박시해요.<br>딱 만졌을 때 면은 도톰하니 되게 질이 좋아보여요<br>
									기장이 길어서 바지 안에 넣어입기에는 좀 귀찮고 모델사진처럼 치마에 넣어입으니까 편하고 좋네요<br>
									초록색 레터링에 반해서 좀 비싸도 사봤는데 만족합니다<br>
									여름에 두루두루 잘 입을 수 있을 것 같아요<br>
									다만 트임을 이용해서 앞만 넣고 입는건 뒤에 남는 기장 때문에 개인적으로 좀 애매한것 같아요.
								</b>
								<span class="mm_btn T=line T=dark"><i class="ico_toggle"></i></span>
							</toggle>

							<review-template-satisfy v-if="true"></review-template-satisfy>

							<p class="text_date">
								2022.05.26
							</p>
						</div>
					</li>
				</ul>

				<pagination></pagination>
			</section>
		</template>
	</div>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import Carousel from '@/component/Carousel.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import Pagination from '@/component/Pagination.vue';
	import Toggle from '@/component/Toggle.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import ExperienceReviewTag from '@/feature/experience/component/ExperienceReviewTag.vue';
	import ReviewTemplateSatisfy from '@/feature/review-template/component/ReviewTemplateSatisfy.vue';
	import ReviewTemplateSatisfyDetail from '@/feature/review-template/component/ReviewTemplateSatisfyDetail.vue';

	const bestCarouselItems = [
		{
			grade: {
				image: '/image/common/level4.png',
				alt: '브론즈',
			},
			id: 'seed***',
			score: 4.5,
			review: `꽤 길고 박시해요.<br>딱 만졌을 때 면은 도톰하니 되게 질이 좋아보여요<br>
				기장이 길어서 바지 안에 넣어입기에는 좀 귀찮고 모델사진처럼 치마에 넣어입으니까 편하고 좋네요<br>
				초록색 레터링에 반해서 좀 비싸도 사봤는데 만족합니다<br>
				여름에 두루두루 잘 입을 수 있을 것 같아요<br>
				다만 트임을 이용해서 앞만 넣고 입는건 뒤에 남는 기장 때문에 개인적으로 좀 애매한것 같아요.`,
			date: '2022.05.26',
			image: '/image/_sample/brand_wide_1.png',
		},
		{
			grade: {
				image: '/image/common/level5.png',
				alt: '패밀리',
			},
			id: 'abced***',
			score: 3.5,
			review: `꽤 길고 박시해요.<br>딱 만졌을 때 면은 도톰하니 되게 질이 좋아보여요<br>
				기장이 길어서 바지 안에 넣어입기에는 좀 귀찮고 모델사진처럼 치마에 넣어입으니까 편하고 좋네요<br>
				초록색 레터링에 반해서 좀 비싸도 사봤는데 만족합니다<br>
				여름에 두루두루 잘 입을 수 있을 것 같아요<br>
				다만 트임을 이용해서 앞만 넣고 입는건 뒤에 남는 기장 때문에 개인적으로 좀 애매한것 같아요.`,
			date: '2022.07.05',
			image: '/image/_sample/prod_x2_6.png',
		},
		{
			grade: {
				image: '/image/common/level2.png',
				alt: '골드',
			},
			id: 'asdfgh***',
			score: 5.0,
			review: `꽤 길고 박시해요.<br>딱 만졌을 때 면은 도톰하니 되게 질이 좋아보여요<br>
				기장이 길어서 바지 안에 넣어입기에는 좀 귀찮고 모델사진처럼 치마에 넣어입으니까 편하고 좋네요<br>
				초록색 레터링에 반해서 좀 비싸도 사봤는데 만족합니다<br>
				여름에 두루두루 잘 입을 수 있을 것 같아요<br>
				다만 트임을 이용해서 앞만 넣고 입는건 뒤에 남는 기장 때문에 개인적으로 좀 애매한것 같아요.`,
			date: '2023.01.18',
			image: null,
		},
	];

	const layerContextStore = useLayerContextStore();

	function overlayMyReviewCreate() {
		const component = defineAsyncComponent(() => import('@/page/mypage/review/create/MyReviewCreate.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayProductReviewAllPhoto() {
		const component = defineAsyncComponent(() => import('@/page/product/review/all-photo/ProductReviewAllPhoto.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayProductReviewPhoto() {
		const component = defineAsyncComponent(() => import('@/page/product/review/photo/ProductReviewPhoto.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayProductReviewBest() {
		const component = defineAsyncComponent(() => import('@/page/product/review/best/ProductReviewBest.vue'));

		return layerContextStore.openOverlay(component);
	}

	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
	const isPhotoReview = ref(false);
</script>