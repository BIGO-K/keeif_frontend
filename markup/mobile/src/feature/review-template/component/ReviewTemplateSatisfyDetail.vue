<template>
	<!-- 개인화 상품 평가 -->
	<div class="m...review-satisfy">
		<section>
			<h6><b>사이즈</b><strong>정사이즈에요</strong><span>75%<small>(113명)</small></span></h6>
			<ul>
				<li>
					<span class="text_label">작아요</span>
					<b class="m...review-satisfy-progress">
						<i
							style="width:10%"
							title="10%"
						></i>
					</b>
					<span>19명</span>
				</li>
				<li class="S=value-high">
					<span class="text_label">정사이즈에요</span>
					<b class="m...review-satisfy-progress">
						<i
							style="width:82%"
							title="82%"
						></i>
					</b>
					<span>119명</span>
				</li>
				<li>
					<span class="text_label">생각보다 커요</span>
					<b class="m...review-satisfy-progress">
						<i
							style="width:23%"
							title="23%"
						></i>
					</b>
					<span>80명</span>
				</li>
			</ul>
		</section>
		<section>
			<h6><b>색상</b><strong>화면과 같아요</strong><span>91%<small>(113명)</small></span></h6>
			<ul>
				<li>
					<span class="text_label">화면보다 밝아요</span>
					<b class="m...review-satisfy-progress">
						<i
							style="width:10%"
							title="10%"
						></i>
					</b>
					<span>19명</span>
				</li>
				<li class="S=value-high">
					<span class="text_label">화면과 같아요</span>
					<b class="m...review-satisfy-progress">
						<i
							style="width:82%"
							title="82%"
						></i>
					</b>
					<span>74명</span>
				</li>
				<li>
					<span class="text_label">화면보다 어두워요</span>
					<b class="m...review-satisfy-progress">
						<i
							style="width:23%"
							title="23%"
						></i>
					</b>
					<span>20명</span>
				</li>
			</ul>
		</section>
		<section>
			<h6><b>핏</b><strong>적당해요</strong><span>57%<small>(113명)</small></span></h6>
			<ul>
				<li>
					<span class="text_label">슬림해요</span>
					<b class="m...review-satisfy-progress">
						<i
							style="width:10%"
							title="10%"
						></i>
					</b>
					<span>19명</span>
				</li>
				<li class="S=value-high">
					<span class="text_label">적당해요</span>
					<b class="m...review-satisfy-progress">
						<i
							style="width:82%"
							title="82%"
						></i>
					</b>
					<span>119명</span>
				</li>
				<li>
					<span class="text_label">오버핏이에요</span>
					<b class="m...review-satisfy-progress">
						<i
							style="width:23%"
							title="23%"
						></i>
					</b>
					<span>80명</span>
				</li>
			</ul>
		</section>
		<toggle
			class="btn_detail"
			parent-selector=".m...review-satisfy"
		>
			<b>자세히 보기</b><i class="ico_more"></i>
		</toggle>
	</div>
</template>

<script setup lang="ts">
	import Toggle from '@/component/Toggle.vue';
</script>

<style lang="scss">
	@use '../../../asset/scss/helper/mixin';
	@use '../../../asset/scss/helper/function';

	/** 상품상세 */
	.m_prodetail-tab-review {
		#{function.escape('.m...review-satisfy')} {
			position: relative;
			margin: 0 14px;
			padding: 10px 0 27px;
			border-bottom: 1px solid #cdcdcd;

			&#{function.escape('.S=toggle-on')} {
				section {
					padding-left: 10px;

					h6 {
						&::before,
						span {
							display: block;
						}
					}

					> ul {
						display: block;
					}

					+ section {
						margin-top: 11px;
					}
				}

				.btn_detail {
					.ico_more::before {
						@include mixin.svg(url('/image/common/ico_arrow_top.svg'));
					}
				}
			}

			section {
				padding: 0 10px 0 20px;

				h6 {
					position: relative;
					z-index: 0;

					&::before {
						display: none;
						position: absolute;
						z-index: -1;
						top: 10px;
						right: 0;
						left: 0;
						height: 1px;
						content: '';
						@include mixin.linear-gradient(#d5d5d5, 90deg, #d5d5d5 4px, #fff 2px);
						@include mixin.background('/6px 1px' repeat-x);
					}

					b {
						width: 68px;
						height: 21px;
						border: 1px solid #101010;
						border-radius: 21px;
						background-color: #fff;
						@include mixin.font('1.3rem/2rem' center);
					}

					strong {
						padding: 0 19px 0 12px;
						background-color: #fff;
						@include mixin.font('1.4rem/2.1rem');
					}

					span {
						display: none;
						position: absolute;
						top: 0;
						right: 0;
						padding-left: 20px;
						background-color: #fff;
						vertical-align: 0;
						@include mixin.font('1.5rem/2.1rem');

						small {
							margin-left: 4px;
							font-size: 1.2rem;
						}
					}
				}

				ul {
					display: none;
					padding: 13px 0 14px;

					li {
						position: relative;
						padding-left: 111px;
						@include mixin.font(#767676 '1.3rem/2.1rem');

						&#{function.escape('.S=value-high')} {
							color: var(--color_text_base);

							b > i {
								background-color: var(--color_main);
							}

							span:not(.text_label) {
								color: var(--color_main);
							}
						}

						> span {
							position: absolute;
							top: 0;
							right: 0;

							&.text_label {
								right: auto;
								left: 5px;
							}
						}

						> b {
							display: block;
							position: relative;
							margin-right: 56px;
							height: 21px;

							&::before,
							i {
								position: absolute;
								top: 50%;
								left: 0;
								height: 6px;
								border-radius: 6px;
								background-color: #aeaeae;
								@include mixin.transform(translateY(-50%));
							}

							&::before {
								right: 0;
								border: 1px solid #dcdcdc;
								background-color: #e6e6e6;
								content: '';
							}
						}
					}
				}

				+ section {
					margin-top: 4px;
				}
			}

			.btn_detail {
				position: absolute;
				right: 0;
				bottom: -1px;
				padding: 0 10px;
				width: auto;
				height: 28px;
				border: 1px solid #cdcdcd;
				@include mixin.font('1.3rem/2.8rem');

				.ico_more {
					margin: 6px 0 0 7px;

					&::before {
						width: 12px;
						height: 14px;
						background-color: #4a4a4a;
					}
				}
			}

			+ #{function.escape('.m...review-point')} {
				margin-top: 44px;
			}
		}
	}
</style>