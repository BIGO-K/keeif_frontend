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
					{{ review.title }}
				</h3>
				<b class="text_user">{{ review.writer }}</b>
				<b class="text_date">{{ date(review.created_at, 'YYYY.MM.DD') }}</b>
				<b class="text_view">조회수 <strong>{{ number(review.view_count) }}</strong></b>
			</div>
			<hr class="mm_line">

			<!-- 체험단 후기 상품 -->
			<div class="mm_product-item T=single-sm">
				<mm-link :to="{ name: 'ProductDetail', params: { id: review.goods_id } }">
					<figure>
						<lazyload
							class="mm_bg-cover image_product"
							:src="review.goods_thumbnail_url"
						></lazyload>
						<figcaption>
							<p class="text_brand">
								{{ review.brand_name }}
							</p>
							<p class="text_product">
								{{ review.goods_name }}
							</p>
							<p class="text_price">
								<strong>{{ number(review.base_discounted_price) }}</strong>
							</p>
						</figcaption>
					</figure>
				</mm-link>
			</div>

			<div class="mm_inner">
				<!-- 체험단 후기 -->
				<div class="m...detail-content">
					<b class="text_star">
						<!-- (D) 별점에 따라 T=star5 T=star4 T=star3 T=star2 T=star1 클래스를 추가합니다. -->
						<i
							class="ico_star-fill"
							:class="`T=star${review.grade}`"
							title="별점"
						></i>
						<span>{{ review.grade }}</span>
					</b>
					<b class="text_size">{{ physicalInfo }}</b>
					<p
						class="text_review"
						v-html="newLineToBr(review.contents)"
					>
					</p>
				</div>

				<!-- 체험단 후기 사진 -->
				<div class="m...detail-photo">
					<ul>
						<li
							v-for="image in review.image_url_list"
							:key="image"
						>
							<i class="image_review">
								<lazyload
									tag="img"
									:src="image"
								></lazyload>
							</i>
						</li>
					</ul>
				</div>

				<review-template-satisfy
					v-if="review.templates.length"
					:templates="review.templates"
				></review-template-satisfy>

				<p class="text_thumb">
					이 리뷰가 도움이 되었다면 <strong>클릭!</strong>
				</p>
				<toggle
					v-model:is-active="isRecommended"
					is-lazy
					class="btn_thumb"
					@click="changeRecommend"
				>
					<i class="ico_thumb"></i><b>{{ review.recommendation_count }}</b>
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
	import { computed, ref } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useExperienceReview } from '$/composables/useExperienceReview';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import Layout from '@/component/layout/Layout.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import Toggle from '@/component/Toggle.vue';
	import ReviewTemplateSatisfy from '@/feature/review-template/component/ReviewTemplateSatisfy.vue';

	const props = defineProps<{
		id: number
	}>();

	const { isMember, router, bom, loading } = useGlobalPageContext();
	const { date, number, newLineToBr } = useFormatter();
	const { getDetail, getRecommended, recommend, cancelRecommend } = useExperienceReview();

	const review = await getDetail(props.id);
	const isRecommended = ref((await getRecommended([props.id]))[0].is_recommendation);

	const physicalInfo = computed(() => {
		const physicalLabels = [];
		if (review.height) {
			physicalLabels.push(`${review.height}cm`);
		}

		if (review.weight) {
			physicalLabels.push(`${review.weight}kg`);
		}

		if (review.shoes_size) {
			physicalLabels.push(`${review.shoes_size}mm`);
		}

		return physicalLabels.join('/');
	});

	async function changeRecommend() {
		if (!isMember.value) {
			return bom.confirm('로그인이 필요합니다 \n로그인 페이지로 이동하시겠습니까?', (flag) => {
				if (flag) {
					router.push({
						name: 'Login',
						query: {
							redirect_to_after: router.currentRoute.value.fullPath,
						},
					});
				}
			});
		}

		loading.show();
		try {
			if (!isRecommended.value) {
				await recommend(props.id);
				isRecommended.value = true;
				review.recommendation_count++;
			}
			else {
				await cancelRecommend(props.id);
				isRecommended.value = false;
				review.recommendation_count = Math.max(review.recommendation_count - 1, 0);
			}
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}
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