<template>
	<!-- 사이즈 -->
	<section>
		<h6><b>사이즈는 어떤가요?</b></h6>
		<div class="mm_radio-list">
			<ul class="mm_flex T=equal">
				<li>
					<form-radio name="dev_radio-size">
						<b class="mm_block">
							<i class="ico_form-radio"></i>
							<span class="text_label">작아요</span>
						</b>
					</form-radio>
				</li>
				<li>
					<form-radio name="dev_radio-size">
						<b class="mm_block">
							<i class="ico_form-radio"></i>
							<span class="text_label">정사이즈예요</span>
						</b>
					</form-radio>
				</li>
				<li>
					<form-radio name="dev_radio-size">
						<b class="mm_block">
							<i class="ico_form-radio"></i>
							<span class="text_label">생각보다 커요</span>
						</b>
					</form-radio>
				</li>
			</ul>
		</div>
	</section>

	<!-- 색상 -->
	<section>
		<h6><b>색상은 어떤가요?</b></h6>
		<div class="mm_radio-list">
			<ul class="mm_flex T=equal">
				<li>
					<form-radio name="dev_radio-color">
						<b class="mm_block">
							<i class="ico_form-radio"></i>
							<span class="text_label">화면보다 밝아요</span>
						</b>
					</form-radio>
				</li>
				<li>
					<form-radio name="dev_radio-color">
						<b class="mm_block">
							<i class="ico_form-radio"></i>
							<span class="text_label">화면과 같아요</span>
						</b>
					</form-radio>
				</li>
				<li>
					<form-radio name="dev_radio-color">
						<b class="mm_block">
							<i class="ico_form-radio"></i>
							<span class="text_label">화면보다 어두워요</span>
						</b>
					</form-radio>
				</li>
			</ul>
		</div>
	</section>

	<!-- 핏 -->
	<section>
		<h6><b>핏은 어떤가요?</b></h6>
		<div class="mm_radio-list">
			<ul class="mm_flex T=equal">
				<li>
					<form-radio name="dev_radio-fit">
						<b class="mm_block">
							<i class="ico_form-radio"></i>
							<span class="text_label">슬림해요</span>
						</b>
					</form-radio>
				</li>
				<li>
					<form-radio name="dev_radio-fit">
						<b class="mm_block">
							<i class="ico_form-radio"></i>
							<span class="text_label">적당해요</span>
						</b>
					</form-radio>
				</li>
				<li>
					<form-radio name="dev_radio-fit">
						<b class="mm_block">
							<i class="ico_form-radio"></i>
							<span class="text_label">오버핏이에요</span>
						</b>
					</form-radio>
				</li>
			</ul>
		</div>
	</section>
</template>

<script setup lang="ts">
	import FormRadio from '@/component/form/FormRadio.vue';
</script>

<style lang="scss">
	@use '../../../asset/scss/helper/mixin';

	/** 리뷰관리 */
	// 리뷰 쓰기
	.m_overlay-myreview {
		> section {
			&:not(:first-of-type) {
				padding: 42px 0 37px;

				h6 {
					padding-bottom: 15px;
				}
			}

			.mm_radio-list {
				padding: 0 40px;

				ul {
					position: relative;
					text-align: center;

					&::before {
						position: absolute;
						top: 20px;
						left: 20%;
						width: 60%;
						border-top: 1px solid #e6e6e6;
						content: '';
					}
				}

				li {
					&:nth-child(n+2) {
						margin-top: 0;
					}
				}

				.mm_form-radio {
					padding: 48px 0 0;
					min-width: 60px;

					.ico_form-radio {
						left: 50%;
						width: 40px;
						height: 40px;
						border-color: #e6e6e6;
						@include mixin.transform(translateX(-50%));

						&::before {
							top: 50%;
							left: 50%;
							width: 24px;
							height: 24px;
							background-color: #e6e6e6;
							@include mixin.transform(translate(-50%, -50%));
						}
					}

					.text_label {
						margin: 0;
						@include mixin.font(#4a4a4a '1.2rem/1.4rem');
					}

					input:checked {
						+ .mm_block {
							.ico_form-radio {
								border-color: var(--color_main);
							}

							.text_label {
								color: var(--color_main);
							}
						}
					}
				}
			}
		}
	}
</style>