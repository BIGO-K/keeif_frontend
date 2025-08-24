<template>
	<dropdown
		class="T=order m_order-gift"
		:is-active="true"
	>
		<template #button>
			<b>사은품 정보</b>
			<i class="ico_dropdown"></i>
		</template>
		<template #content>
			<div class="mm_inner">
				<!-- 사은품 선택 1 -->
				<section>
					<h4 class="mm_strapline">
						<b>사은품 선택</b>
					</h4>
					<ul class="mm_gift-list">
						<li>
							<input
								type="radio"
								name="dev_radio-gift"
							>
							<div class="mm_gift-item">
								<i class="ico_form-radio T=circle"></i>
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
											전상품 25,000원 이상 구매 시전상품 25,000원 이상 구매 시전상품 25,000원 이상 구매 시전상품 25,000원 이상 구매 시
										</p>
									</figcaption>
								</figure>
								<div class="mm_btn_box">
									<div class="mm_rside">
										<a
											class="btn_gift-info"
											href="#"
											@click.prevent="overlayGiftTarget"
										>
											<b>지급대상확인</b><i class="ico_link T=xs"></i>
										</a>
									</div>
								</div>
							</div>
						</li>
						<li>
							<input
								type="radio"
								name="dev_radio-gift"
							>
							<div class="mm_gift-item">
								<i class="ico_form-radio T=circle"></i>
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
											전상품 25,000원 이상 구매 시
										</p>
									</figcaption>
								</figure>
								<div class="mm_btn_box">
									<div class="mm_rside">
										<a
											class="btn_gift-info"
											href="#"
											@click.prevent="overlayGiftTarget"
										>
											<b>지급대상확인</b><i class="ico_link T=xs"></i>
										</a>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="mm_gift-item">
								<i class="ico_form-radio T=circle"></i>
								<figure>
									<lazyload
										class="mm_bg-cover image_gift"
										src="/image/_sample/prod_x1_3.png"
									></lazyload>
									<figcaption>
										<p class="text_note">
											이미 지급받으신 사은품입니다
										</p>
									</figcaption>
								</figure>
								<div class="mm_btn_box">
									<div class="mm_rside">
										<b class="btn_gift-info">지급대상확인<i class="ico_link T=xs"></i></b>
									</div>
								</div>
							</div>
						</li>
						<li>
							<input
								type="radio"
								name="dev_radio-gift"
							>
							<div class="mm_gift-item">
								<i class="ico_form-radio T=circle"></i>
								<p><strong>선택안함</strong>구매상품만 받을게요</p>
							</div>
						</li>
					</ul>
				</section>

				<!-- 사은품 선택 2 -->
				<section>
					<h4 class="mm_strapline">
						<b>사은품 선택<span>(선택2)</span></b>
					</h4>
					<ul class="mm_gift-list">
						<li>
							<input
								type="radio"
								name="dev_radio-gift2"
							>
							<div class="mm_gift-item">
								<i class="ico_form-radio T=circle"></i>
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
											전상품 25,000원 이상 구매 시전상품 25,000원 이상 구매 시전상품 25,000원 이상 구매 시전상품 25,000원 이상 구매 시
										</p>
									</figcaption>
								</figure>
								<div class="mm_btn_box">
									<div class="mm_rside">
										<a
											class="btn_gift-info"
											href="#"
											@click.prevent="overlayGiftTarget"
										>
											<b>지급대상확인</b><i class="ico_link T=xs"></i>
										</a>
									</div>
								</div>
							</div>
						</li>
						<li>
							<input
								type="radio"
								name="dev_radio-gift2"
							>
							<div class="mm_gift-item">
								<i class="ico_form-radio T=circle"></i>
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
											전상품 25,000원 이상 구매 시
										</p>
									</figcaption>
								</figure>
								<div class="mm_btn_box">
									<div class="mm_rside">
										<a
											class="btn_gift-info"
											href="#"
											@click.prevent="overlayGiftTarget"
										>
											<b>지급대상확인</b><i class="ico_link T=xs"></i>
										</a>
									</div>
								</div>
							</div>
						</li>
						<li>
							<input
								type="radio"
								name="dev_radio-gift2"
							>
							<div class="mm_gift-item">
								<i class="ico_form-radio T=circle"></i>
								<p><strong>선택안함</strong>구매상품만 받을게요</p>
							</div>
						</li>
					</ul>
				</section>
			</div>
		</template>
	</dropdown>
</template>

<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';

	const layerContextStore = useLayerContextStore();

	function overlayGiftTarget() {
		const component = defineAsyncComponent(() => import('@/feature/gift/GiftTarget.vue'));

		return layerContextStore.openOverlay(component);
	}
</script>

<style src="../_gift.scss" lang="scss"></style>
<style lang="scss">
	@use '../../../asset/scss/helper/mixin';

	.m_order-gift {
		section + section {
			margin-top: 24px;
		}

		.mm_strapline {
			padding-bottom: 12px;

			span {
				margin-left: 5px;
				color: #888;
			}
		}

		.mm_gift-list li {
			position: relative;

			input[type='radio'] {
				position: absolute;
				z-index: 1;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				opacity: 0;

				&:checked + .mm_gift-item {
					border-color: var(--color_main);

					.ico_form-radio::before {
						background-color: var(--color_main);
					}
				}

				+ .mm_gift-item {
					.ico_form-radio::before {
						background-color: #cdcdcd;
					}
				}
			}
		}

		.mm_gift-item {
			figure > figcaption {
				padding-right: 30px;
			}

			.ico_form-radio {
				position: absolute;
				top: 13px;
				right: 14px;

				&::before {
					width: 20px;
					height: 20px;
					background-color: #eee;
				}
			}

			.text_note {
				padding-top: 29px;
				@include mixin.font('1.4rem', nowrap);
			}

			> p {
				padding: 38px 0 32px;
				@include mixin.font(#4a4a4a '1.3rem' center);

				strong {
					display: block;
					margin-bottom: 8px;
					@include mixin.font(600 '2rem');
				}
			}
		}
	}
</style>