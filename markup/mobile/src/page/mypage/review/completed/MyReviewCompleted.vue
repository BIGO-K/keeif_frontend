<template>
	<div class="m_myreview">
		<p
			v-if="items.length < 1"
			class="mm_text-none"
		>
			<i class="ico_text-none"></i>작성한 리뷰가 없습니다
		</p>

		<template v-else>
			<!-- 리뷰목록 -->
			<div class="m_myreview-written">
				<ul>
					<li>
						<div class="mm_product-item T=single-sm">
							<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
								<figure>
									<lazyload
										class="mm_bg-cover image_product"
										src="/image/_sample/prod_x1_1.png"
									></lazyload>
									<figcaption>
										<p class="text_brand">
											엠몬스타
										</p>
										<p class="text_product">
											[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140
										</p>
										<p class="text_option">
											베이지 FREE / 1개
										</p>
									</figcaption>
								</figure>
							</mm-link>
						</div>
						<div class="mm_review">
							<div class="mm_review-head">
								<p class="text_star">
									<i class="ico_star-fill"></i><span>4.5</span>
								</p>
							</div>
							<!-- (D) 리뷰 내용이 3줄 이하인 경우는 리뷰 내용이 아래와 같이 노출됩니다 -->
							<p class="text_review">
								<b>
									꽤 길고 박시해요.<br>딱 만졌을 때 면은 도톰하니 되게 질이 좋아보여요.
								</b>
							</p>
							<p class="text_date">
								2022.05.26
							</p>

							<review-template-satisfy v-if="true"></review-template-satisfy>

							<div class="mm_review-foot">
								<!-- (D) 등록 리뷰의 사진 미등록시에만 '.m_myreview-tooltip' 요소를 노출합니다. -->
								<p class="m_myreview-tooltip">
									포토 등록 시 <strong class="mm_text-secondary">4,000원</strong> 추가
								</p>
								<a
									class="btn_modify"
									href="#"
									@click.prevent="overlayMyReviewUpdate"
								>
									<i class="ico_review-write"></i><b>리뷰 수정하기</b>
								</a>
							</div>
						</div>
					</li>
					<li>
						<div class="mm_product-item T=single-sm">
							<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
								<figure>
									<lazyload
										class="mm_bg-cover image_product"
										src="/image/_sample/prod_x1_2.png"
									></lazyload>
									<figcaption>
										<p class="text_brand">
											엠몬스타
										</p>
										<p class="text_product">
											[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140
										</p>
										<p class="text_option">
											베이지 FREE / 1개
										</p>
									</figcaption>
								</figure>
							</mm-link>
						</div>
						<div class="mm_review">
							<div class="mm_review-head">
								<p class="text_star">
									<i class="ico_star-fill"></i><span>4.5</span>
								</p>
							</div>
							<toggle
								class="text_review"
								tag="p"
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
							<p class="text_date">
								2022.05.26
							</p>

							<review-template-satisfy v-if="true"></review-template-satisfy>

							<div class="mm_review-foot">
								<!-- (D) 등록 리뷰의 사진 미등록시에만 '.m_myreview-tooltip' 요소를 노출합니다. -->
								<p class="m_myreview-tooltip">
									포토 등록 시 <strong class="mm_text-secondary">4,000원</strong> 추가
								</p>
								<a
									class="btn_modify"
									href="#"
									@click.prevent="overlayMyReviewUpdate"
								>
									<i class="ico_review-write"></i><b>리뷰 수정하기</b>
								</a>
							</div>
						</div>
					</li>
					<li>
						<div class="mm_product-item T=single-sm">
							<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
								<figure>
									<lazyload
										class="mm_bg-cover image_product"
										src="/image/_sample/prod_x1_3.png"
									></lazyload>
									<figcaption>
										<p class="text_brand">
											엠몬스타
										</p>
										<p class="text_product">
											[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140
										</p>
										<p class="text_option">
											베이지 FREE / 1개
										</p>
									</figcaption>
								</figure>
							</mm-link>
						</div>
						<div class="mm_review">
							<div class="mm_review-head">
								<p class="text_star">
									<i class="ico_star-fill"></i><span>4.5</span>
								</p>
							</div>
							<toggle
								class="text_review"
								tag="p"
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
							<ul class="mm_review-image">
								<li>
									<a
										href="#"
										@click.prevent="overlayProductReviewPhoto"
									>
										<i class="image_review">
											<lazyload
												tag="img"
												src="/image/_sample/brand_wide_1.png"
												:is-ratio="true"
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
												tag="img"
												src="/image/_sample/brand_wide_1.png"
												:is-ratio="true"
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
												tag="img"
												src="/image/_sample/brand_wide_1.png"
												:is-ratio="true"
											></lazyload>
										</i>
									</a>
								</li>
							</ul>
							<p class="text_date">
								2022.05.26
							</p>

							<review-template-satisfy v-if="true"></review-template-satisfy>

							<div class="mm_review-foot">
								<a
									class="btn_modify"
									href="#"
									@click.prevent="overlayMyReviewUpdate"
								>
									<i class="ico_review-write"></i><b>리뷰 수정하기</b>
								</a>
							</div>
						</div>
					</li>
					<li>
						<div class="mm_product-item T=single-sm">
							<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
								<figure>
									<lazyload
										class="mm_bg-cover image_product"
										src="/image/_sample/prod_x1_4.png"
									></lazyload>
									<figcaption>
										<p class="text_brand">
											엠몬스타
										</p>
										<p class="text_product">
											[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140
										</p>
										<p class="text_option">
											베이지 FREE / 1개
										</p>
									</figcaption>
								</figure>
							</mm-link>
						</div>
						<div class="mm_review">
							<div class="mm_review-head">
								<p class="text_star">
									<i class="ico_star-fill"></i><span>4.5</span>
								</p>
							</div>
							<!-- (D) 리뷰 내용이 3줄 이하인 경우는 리뷰 내용이 아래와 같이 노출됩니다 -->
							<p class="text_review">
								<b>
									주문하고 다음날 바로 받았어요.
								</b>
							</p>
							<ul class="mm_review-image">
								<li>
									<a
										href="#"
										@click.prevent="overlayProductReviewPhoto"
									>
										<i class="image_review">
											<lazyload
												tag="img"
												src="/image/_sample/brand_wide_1.png"
												:is-ratio="true"
											></lazyload>
										</i>
									</a>
								</li>
							</ul>
							<p class="text_date">
								2022.05.26
							</p>

							<review-template-satisfy v-if="true"></review-template-satisfy>

							<div class="mm_review-foot">
								<a
									class="btn_modify"
									href="#"
									@click.prevent="overlayMyReviewUpdate"
								>
									<i class="ico_review-write"></i><b>리뷰 수정하기</b>
								</a>
							</div>
						</div>
					</li>
				</ul>
			</div>

			<pagination></pagination>
		</template>
	</div>
</template>

<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import Lazyload from '@/component/Lazyload.vue';
	import Pagination from '@/component/Pagination.vue';
	import Toggle from '@/component/Toggle.vue';
	import ReviewTemplateSatisfy from '@/feature/review-template/component/ReviewTemplateSatisfy.vue';

	const layerContextStore = useLayerContextStore();

	function overlayMyReviewUpdate() {
		const component = defineAsyncComponent(() => import('@/page/mypage/review/update/MyReviewUpdate.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayProductReviewPhoto() {
		const component = defineAsyncComponent(() => import('@/page/product/review/photo/ProductReviewPhoto.vue'));

		return layerContextStore.openOverlay(component);
	}

	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
</script>