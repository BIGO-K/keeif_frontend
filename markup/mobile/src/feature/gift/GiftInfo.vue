<template>
	<div class="mm_inner m_overlay-gift">
		<div class="mm_note">
			<ul>
				<li>사은품은 회원 대상으로 지급됩니다.</li>
			</ul>
		</div>
		<!-- (D) 사은품 정보 팝업에서만 지급조건과 지급기간 내용 앞에 "지급조건:", "지급기간:" 문구가 추가됩니다.(다른 페이지 내 사은품 내용에는 추가되지 않습니다.) -->
		<ul class="mm_gift-list">
			<li>
				<div class="mm_gift-item">
					<figure>
						<lazyload
							class="mm_bg-cover image_gift"
							src="/image/_sample/prod_x1_2.png"
						></lazyload>
						<figcaption>
							<p class="text_name">
								내셔널지오그래픽 텀블러 증정
							</p>
							<p class="text_condition">
								지급조건: 전상품 25,000원 이상 구매 시
							</p>
							<p class="text_date">
								지급기간: 2021.07.28 ~ 2021.08.28
							</p>
						</figcaption>
					</figure>
				</div>
			</li>
			<li>
				<div class="mm_gift-item">
					<figure>
						<lazyload
							class="mm_bg-cover image_gift"
							src="/image/_sample/prod_x1_1.png"
						></lazyload>
						<figcaption>
							<p class="text_name">
								내셔널지오그래픽 텀블러 증정
							</p>
							<p class="text_condition">
								지급조건: 전상품 25,000원 이상 구매 시
							</p>
							<p class="text_date">
								지급기간: 2021.07.28 ~ 2021.08.28
							</p>
						</figcaption>
					</figure>
				</div>
			</li>
			<li>
				<div class="mm_gift-item">
					<figure>
						<lazyload
							class="mm_bg-cover image_gift"
							src="/image/_sample/prod_x1_3.png"
						></lazyload>
						<figcaption>
							<p class="text_name">
								내셔널지오그래픽 텀블러 증정
							</p>
							<p class="text_condition">
								지급조건: 전상품 25,000원 이상 구매 시
							</p>
							<p class="text_date">
								지급기간: 2021.07.28 ~ 2021.08.28
							</p>
						</figcaption>
					</figure>
				</div>
			</li>
			<li>
				<div class="mm_gift-item">
					<figure>
						<lazyload
							class="mm_bg-cover image_gift"
							src="/image/_sample/prod_x1_4.png"
						></lazyload>
						<figcaption>
							<p class="text_name">
								내셔널지오그래픽 텀블러 증정
							</p>
							<p class="text_condition">
								지급조건: 전상품 25,000원 이상 구매 시
							</p>
							<p class="text_date">
								지급기간: 2021.07.28 ~ 2021.08.28
							</p>
						</figcaption>
					</figure>
				</div>
			</li>
			<li>
				<div class="mm_gift-item">
					<figure>
						<lazyload
							class="mm_bg-cover image_gift"
							src="/image/_sample/prod_x1_5.png"
						></lazyload>
						<figcaption>
							<p class="text_name">
								내셔널지오그래픽 텀블러 증정
							</p>
							<p class="text_condition">
								지급조건: 전상품 25,000원 이상 구매 시
							</p>
							<p class="text_date">
								지급기간: 2021.07.28 ~ 2021.08.28
							</p>
						</figcaption>
					</figure>
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import Lazyload from '@/component/Lazyload.vue';

	defineExpose<OverlayComponentExpose>({
		title: `사은품 정보`,
	});
</script>

<style src="./_gift.scss" lang="scss"></style>
<style lang="scss">
	@use '../../asset/scss/helper/mixin';

	.m_overlay-gift {
		padding-top: 10px;

		.mm_note {
			padding-left: 3px;
		}

		.mm_gift-list {
			margin-top: 4px;
		}

		.mm_gift-item {
			figcaption {
				> p {
					@include mixin.text-ellipsis(0);
				}
			}
		}
	}
</style>
