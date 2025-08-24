<template>
	<div class="mm_satisfy">
		<dl><dt>사이즈</dt><dd>정사이즈예요</dd></dl>
		<dl><dt>색상</dt><dd>화면과 같아요</dd></dl>
		<dl><dt>핏</dt><dd>적당해요</dd></dl>
	</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
	@use '../../../asset/scss/helper/mixin';

	/** 공통 */
	// 리뷰 만족도
	.mm_satisfy {
		dl {
			position: relative;
			padding-left: 75px;
			@include mixin.font(#3d3d3d '1.3rem/2rem');

			dt {
				position: absolute;
				top: 0;
				left: 0;
				width: 65px;
				height: 20px;
				border: 1px solid #d5d5d5;
				border-radius: 20px;
				background-color: #fafafa;
				@include mixin.font('1.2rem/1.8rem' center);
			}

			+ dl {
				margin-top: 4px;
			}
		}
	}

	/** 상품상세 */
	.m_prodetail-tab-review {
		.mm_review {
			.mm_satisfy {
				margin-top: 12px;
				padding-left: 3px;

				+ .mm_review-image {
					margin-top: 14px;
				}

				+ .text_date {
					margin-top: 11px;
				}
			}
		}
	}

	/** 마이페이지 - 리뷰 관리 - 작성한 리뷰 */
	.m_myreview-written {
		.mm_review {
			.mm_satisfy {
				margin-top: -1px;
				padding: 1px 0 12px 4px;
				border-bottom: 1px solid #e6e6e6;
				background-color: #fff;
			}

			.text_review[tabindex] {
				+ .text_date {
					+ .mm_satisfy {
						margin-top: -11px;
					}
				}
			}
		}
	}


	// *---------- 오버레이 ----------*

	/** 리뷰 상세 */
	.m_overlay-review-detail {
		.mm_satisfy {
			margin-top: 15px;

			+ .text_date {
				margin-top: 15px;
			}
		}
	}
</style>