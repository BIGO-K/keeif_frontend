<template>
	<layout title="체험단 후기">
		<div class="mm_inner">
			<!-- 체험단 후기 목록 -->
			<div
				class="m_experience-list"
				:class="{ 'T=skeleton': isLoading }"
			>
				<!-- (D) 회원일 경우에만 체험단 후기 작성 버튼을 노출합니다. -->
				<a
					class="mm_btn T=xs T=line T=dark btn_register"
					href="#"
					@click.prevent="overlayExperienceCreate"
				>
					<i class="ico_review-write"></i><b>체험단 후기 작성</b>
				</a>
				<ul v-if="isLoading">
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
					v-if="items.length < 1"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>등록된 상품이 없습니다
				</p>

				<ul v-else>
					<li
						v-for="item in 10"
						:key="item"
					>
						<mm-link :to="{ name: 'ExperienceDetail', params: { id: 123 } }">
							<figure>
								<lazyload
									class="mm_bg-cover image_banner"
									:src="`/image/_sample/experience_review1.png`"
								></lazyload>
								<figcaption>
									<b class="text_star">
										<i
											class="ico_star-fill"
											title="별점"
										></i><span>4.5</span>
									</b>
									<p class="text_title">
										레푸스 트레이닝 풀집업 체험단 후기
									</p>
									<b class="text_user">박효*</b>
									<b class="text_date">2022.07.10</b>
								</figcaption>
							</figure>
						</mm-link>
						<toggle
							class="btn_thumb"
							:is-active="true"
						>
							<i class="ico_thumb"></i><b>1,000</b>
						</toggle>
						<b class="text_view">조회 1,000</b>
					</li>
				</ul>
			</div>

			<pagination></pagination>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import Layout from '@/component/layout/Layout.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import Pagination from '@/component/Pagination.vue';
	import Toggle from '@/component/Toggle.vue';

	const layerContextStore = useLayerContextStore();

	function overlayExperienceCreate() {
		const component = defineAsyncComponent(() => import('@/feature/experience/ExperienceCreate.vue'));

		return layerContextStore.openOverlay(component);
	}

	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
	const isLoading = false;
</script>

<style src="./_experience.scss" lang="scss"></style>