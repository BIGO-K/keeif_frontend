<template>
	<div class="m_myreview">
		<p
			v-if="items.length < 1"
			class="mm_text-none"
		>
			<i class="ico_text-none"></i>작성 가능한 리뷰가 없습니다
		</p>

		<template v-else>
			<p class="m_myreview-note">
				3건의 리뷰를 작성하시면 <strong class="mm_text-variable">최대 5,000원</strong>을 드립니다
			</p>
			<!-- 리뷰목록 -->
			<div class="m_myreview-list">
				<ul>
					<li>
						<p class="text_date">
							2022.05.14
						</p>
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
										<p class="text_price">
											<strong>54,800</strong>
										</p>
									</figcaption>
								</figure>
							</mm-link>
						</div>
						<p class="m_myreview-tooltip">
							최대 <strong class="mm_text-secondary">5,000원</strong> 적립
						</p>
						<a
							class="btn_write-review"
							href="#"
							@click.prevent="overlayMyReviewCreate"
						>
							<i class="ico_review-write"></i><b class="mm_ir-blind">리뷰 작성하기</b>
						</a>
					</li>
					<li>
						<p class="text_date">
							2022.05.14
						</p>
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
										<p class="text_price">
											<strong>54,800</strong>
										</p>
									</figcaption>
								</figure>
							</mm-link>
						</div>
						<p class="m_myreview-tooltip">
							최대 <strong class="mm_text-secondary">5,000원</strong> 적립
						</p>
						<a
							class="btn_write-review"
							href="#"
							@click.prevent="overlayMyReviewCreate"
						>
							<i class="ico_review-write"></i><b class="mm_ir-blind">리뷰 작성하기</b>
						</a>
					</li>
					<li>
						<p class="text_date">
							2022.05.14
						</p>
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
										<p class="text_price">
											<strong>54,800</strong>
										</p>
									</figcaption>
								</figure>
							</mm-link>
						</div>
						<p class="m_myreview-tooltip">
							최대 <strong class="mm_text-secondary">5,000원</strong> 적립
						</p>
						<a
							class="btn_write-review"
							href="#"
							@click.prevent="overlayMyReviewCreate"
						>
							<i class="ico_review-write"></i><b class="mm_ir-blind">리뷰 작성하기</b>
						</a>
					</li>
				</ul>
			</div>

			<!-- 유의사항 -->
			<div class="mm_note">
				<ul>
					<li>리뷰는 배송출발 시점부터 바로 작성할 수 있습니다.</li>
					<li>구매확정 후 30일 경과 시 리뷰를 작성할 수 없습니다.</li>
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

	const layerContextStore = useLayerContextStore();

	function overlayMyReviewCreate() {
		const component = defineAsyncComponent(() => import('@/page/mypage/review/create/MyReviewCreate.vue'));

		return layerContextStore.openOverlay(component);
	}

	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
</script>