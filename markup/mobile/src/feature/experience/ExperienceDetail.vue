<template>
	<layout
		title="체험단 후기 상세"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_popup-experience-detail">
			<!-- 체험단 후기 상단 -->
			<div class="m...detail-head">
				<h3 class="text_title">
					브랜드 하이커 에어 백팩 WHITE 후기 하이커 에어 백팩 WHITE 후기입니다
				</h3>
				<b class="text_user">박효*</b>
				<b class="text_date">2022.07.10</b>
				<b class="text_view">조회수 <strong>1,000</strong></b>
			</div>
			<hr class="mm_line">

			<!-- 체험단 후기 상품 -->
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

			<div class="mm_inner">
				<!-- 체험단 후기 -->
				<div class="m...detail-content">
					<b class="text_star">
						<i
							class="ico_star-fill"
							title="별점"
						></i><span>4.5</span>
					</b>
					<b class="text_size">155cm/44kg/230mm</b>
					<p class="text_review">
						안녕하세요. 이번에 하이커 에어 백팩 체험단에 당첨되어 리뷰를 남기게 되었습니다.
						이번에 하이커 에어 백팩 체험단에 당첨되어 리뷰를 남기게 되었습니다. 이번에 체험단 당첨되어 리뷰를 남기게 되었습니다.
						제가 받은 제품은 WHITE 컬러인데요. 저는 "화이트 백팩은 때가 잘 타서 관리하기 힘들고 코디하기도 어려운 부담스러운 컬러"라고 생각했었는데
						이 제품은 중간에 블랙이 섞여 있어서 부담스럽지 않은 컬러조합이여서 만족했습니다. 가방 중앙에 시그니처 로고가 들어가 심심하지 않았고,
						지퍼 안엔 노트북을 넣고 다닐 수 있는 공간과 큰 수납공간이 있어 들고 다닐 짐이 많은 학생분들, 대학생분들에게도 좋다고 생각했습니다.
						지갑이랑 에어팟케이스를 같이 주는 센스 있는 패키징까지..!! 디자인도 이뻐서 멋스럽게 코디하기도 아주 괜찮았습니다.
						새내기 느낌으로 저는 캐주얼하게 맨투맨과 같이 코디해봤는데 아주 잘 어울리더라고요.
						신학기 백팩으로, 기능성과 멋스러움 둘다 갖춘 이 백팩, 아주 강추드립니다ㅎㅎ
					</p>
				</div>

				<!-- 체험단 후기 사진 -->
				<div class="m...detail-photo">
					<ul>
						<li>
							<i class="image_review">
								<lazyload
									tag="img"
									src="/image/_sample/experience_review1.png"
								></lazyload>
							</i>
						</li>
						<li>
							<i class="image_review">
								<lazyload
									tag="img"
									src="/image/_sample/experience_review2.png"
								></lazyload>
							</i>
						</li>
						<li>
							<i class="image_review">
								<lazyload
									tag="img"
									src="/image/_sample/experience_review3.png"
								></lazyload>
							</i>
						</li>
					</ul>
				</div>

				<review-template-satisfy v-if="true"></review-template-satisfy>

				<p class="text_thumb">
					이 리뷰가 도움이 되었다면 <strong>클릭!</strong>
				</p>
				<toggle
					class="btn_thumb"
					:is-active="true"
				>
					<i class="ico_thumb"></i><b>1,000</b>
				</toggle>
			</div>

			<!-- 하단버튼 -->
			<div class="mm_foot">
				<div class="mm_btn_box">
					<a
						class="mm_btn T=primary"
						href="#"
						@click.prevent="$router.go(-1)"
					>
						<b>목록으로</b>
					</a>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/component/layout/Layout.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import Toggle from '@/component/Toggle.vue';
	import ReviewTemplateSatisfy from '@/feature/review-template/component/ReviewTemplateSatisfy.vue';
</script>

<style src="./_experience.scss" lang="scss"></style>
<style lang="scss">
	@use '../../asset/scss/helper/mixin';
	@use '../../asset/scss/helper/function';
	@use '../../asset/scss/helper/const';

	.m_popup-experience-detail {
		// 리뷰 상단
		#{function.escape('.m...detail-head')} {
			padding: 18px 14px 17px;
			@include mixin.font('1.3rem/1.8rem');

			.text_title {
				padding: 0 50px 14px 0;
				font-size: 1.4rem;
			}

			.text_date {
				margin-left: 14px;
				color: #888;
			}

			.text_view {
				float: right;
				margin-right: 14px;
				@include mixin.font(#888 '1.2rem');

				strong {
					margin-left: 5px;
					@include mixin.font(var(--color_text_base) 600);
				}
			}
		}

		// 리뷰 상품
		> .mm_product-item {
			border: 1px solid #eee;

			> a {
				padding: 20px 14px 17px;
			}
		}

		// 리뷰내용
		#{function.escape('.m...detail-content')} {
			margin-top: 20px;
			font-size: 0;

			.text_size {
				margin-left: 20px;
				@include mixin.font(#4a4a4a '1.4rem/1.9rem');
			}

			.text_review {
				margin-top: 11px;
				@include mixin.font(#3d3d3d '1.4rem/2.1rem');
			}
		}

		// 리뷰사진
		#{function.escape('.m...detail-photo')} {
			margin-top: 23px;

			ul > li:nth-child(n+2) {
				margin-top: 8px;
			}
		}

		.mm_satisfy {
			margin-top: 26px;
		}

		.text_thumb {
			margin-top: 40px;
			padding-bottom: 13px;
			@include mixin.font('1.5rem' center);

			strong {
				font-weight: 700;
			}
		}

		.btn_thumb {
			display: block;
			margin: 0 auto;
			padding: 0 12px;
			height: 32px;
			border-color: #cdcdcd;
			@include mixin.font(#2b2b2b '1.3rem/3.1rem');

			.ico_thumb {
				margin: 6px 5px 0 0;

				&::before {
					width: 14px;
					height: 16px;
					background-color: #3d3d3d;
				}
			}
		}

		.mm_foot {
			margin-top: 34px;
			padding: 28px 14px 0;
			border-top: 1px solid #eee;
		}
	}
</style>