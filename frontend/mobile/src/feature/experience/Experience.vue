<template>
	<layout title="체험단 후기">
		<div class="mm_inner">
			<!-- 체험단 후기 목록 -->
			<div
				class="m_experience-list"
				:class="{ 'T=skeleton': !paginator }"
			>
				<!-- (D) 회원일 경우에만 체험단 후기 작성 버튼을 노출합니다. -->
				<a
					v-if="isMember"
					class="mm_btn T=xs T=line T=dark btn_register"
					href="#"
					@click.prevent="overlayExperienceCreate"
				>
					<i class="ico_review-write"></i><b>체험단 후기 작성</b>
				</a>
				<ul v-if="!paginator">
					<li>
						<i class="image_banner"></i>
						<p class="text_user"></p>
						<p class="text_title"></p>
						<p class="text_date"></p>
						<p class="text_view"></p>
					</li>
					<li>
						<i class="image_banner"></i>
						<p class="text_user"></p>
						<p class="text_title"></p>
						<p class="text_date"></p>
						<p class="text_view"></p>
					</li>
				</ul>

				<p
					v-else-if="paginator.data.length < 1"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>등록된 상품이 없습니다
				</p>

				<ul v-else>
					<li
						v-for="experienceReview in paginator.data"
						:key="experienceReview.id"
					>
						<mm-link :to="{ name: 'ExperienceDetail', params: { id: experienceReview.id } }">
							<figure>
								<lazyload
									class="mm_bg-cover image_banner"
									:src="experienceReview.thumbnail_url"
								></lazyload>
								<figcaption>
									<b class="text_star">
										<!-- (D) 별점에 따라 T=star5 T=star4 T=star3 T=star2 T=star1 클래스를 추가합니다. -->
										<i
											class="ico_star-fill"
											:class="`T=star${experienceReview.grade}`"
											title="별점"
										></i>
										<span>{{ experienceReview.grade }}</span>
									</b>
									<p class="text_title">
										{{ experienceReview.title }}
									</p>
									<b class="text_user">{{ experienceReview.writer }}</b>
									<b class="text_date">{{ date(experienceReview.created_at, 'YYYY.MM.DD') }}</b>
								</figcaption>
							</figure>
						</mm-link>
						<toggle
							v-model:is-active="recommended[experienceReview.id]"
							is-lazy
							class="btn_thumb"
							@click="changeRecommend(experienceReview.id)"
						>
							<i class="ico_thumb"></i><b>{{ number(experienceReview.recommendation_count) }}</b>
						</toggle>
						<b class="text_view">조회 {{ number(experienceReview.view_count) }}</b>
					</li>
				</ul>
			</div>

			<pagination
				v-bind="{
					currentPage: paginator?.current_page,
					itemsPerPage: paginator?.per_page,
					totalCount: paginator?.total
				}"
				@move:page="fetch"
			></pagination>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useExperienceReview } from '$/composables/useExperienceReview';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import Layout from '@/component/layout/Layout.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import Pagination from '@/component/Pagination.vue';
	import Toggle from '@/component/Toggle.vue';

	const { isMember, bom, router, loading, openOverlay } = useGlobalPageContext();
	const { date, number } = useFormatter();
	const { getPaginator, getRecommended, recommend, cancelRecommend } = useExperienceReview();

	const paginator = ref<Paginator<ExperienceReview>>();
	const recommended = ref<{ [reviewId: number]: boolean}>({});

	async function fetch(page: number = 1) {
		try {
			paginator.value = await getPaginator(page);
			if (isMember.value) {
				const recommendRelation = await getRecommended(paginator.value.data.map(review => review.id));
				recommended.value = Object.fromEntries(
					recommendRelation
						.map(relation => [relation.review_id, relation.is_recommendation]),
				);
			}
		}
		catch (e) {
			useErrorAlert(e);
		}
	}

	async function changeRecommend(id: number) {
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
			if (!recommended.value[id]) {
				await recommend(id);
				recommended.value[id] = true;
				(paginator.value?.data || []).find(review => review.id == id)!.recommendation_count++;
			}
			else {
				await cancelRecommend(id);
				recommended.value[id] = false;
				(paginator.value?.data || []).find(review => review.id == id)!.recommendation_count--;
			}
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}

	function overlayExperienceCreate() {
		const component = defineAsyncComponent(() => import('@/feature/experience/ExperienceCreate.vue'));

		return openOverlay(component);
	}

	await fetch(1);
</script>

<style src="./_experience.scss" lang="scss"></style>