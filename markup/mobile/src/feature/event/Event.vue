<template>
	<layout-main>
		<!-- 이벤트 -->
		<section class="mm_inner">
			<h2 class="m_event-title">
				<b>EVENT</b>
			</h2>

			<!-- 이벤트 메뉴 -->
			<div class="m_event-menu">
				<!-- (D) 선택된 탭메뉴에 'S=menu-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
				<ul>
					<li>
						<a
							:class="{ 'S=menu-on': true }"
							href="#"
							title="선택됨"
						>
							<b>전체</b>
						</a>
					</li>
					<li><a href="#"><b>진행중</b></a></li>
					<li><a href="#"><b>종료</b></a></li>
				</ul>
				<mm-link
					class="btn_experience"
					:to="{ name: 'Experience' }"
				>
					<b>체험단 후기</b><i class="ico_link T=sm"></i>
				</mm-link>
			</div>

			<ul
				v-if="isLoading"
				class="m_event-list T=skeleton"
			>
				<li>
					<i class="image_banner"></i>
					<p class="text_main"></p>
					<p class="text_sub"></p>
					<p class="text_period"></p>
				</li>
				<li>
					<i class="image_banner"></i>
					<p class="text_main"></p>
					<p class="text_sub"></p>
					<p class="text_period"></p>
				</li>
			</ul>

			<p
				v-if="items.length < 1"
				class="mm_text-none"
			>
				<i class="ico_text-none"></i>등록된 이벤트가 없습니다
			</p>

			<template v-else>
				<!-- 이벤트 리스트 -->
				<ul class="m_event-list">
					<li
						v-for="item in 5"
						:key="item"
					>
						<mm-link :to="{ name: 'EventDetail', params: { id: 123 } }">
							<figure>
								<lazyload
									class="mm_bg-cover image_banner"
									src="/image/_sample/event_banner1.png"
								></lazyload>
								<figcaption>
									<p class="text_main">
										담백한 이지웨어
									</p>
									<p class="text_sub">
										의식있는 소비자를 위한 국내 최초 커스터마이징 클린 뷰티 브랜드 그린아뜰리 에의 이재연 대표를 만나다.
									</p>
									<p class="text_period">
										2022.07.01 ~ 2022.08.02
									</p>
								</figcaption>
							</figure>
						</mm-link>
					</li>
				</ul>

				<pagination></pagination>
			</template>
		</section>
	</layout-main>
</template>

<script setup lang="ts">
	import LayoutMain from '@/component/layout/LayoutMain.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import Pagination from '@/component/Pagination.vue';

	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
	const isLoading = false;
</script>

<style src="./_event.scss" lang="scss"></style>