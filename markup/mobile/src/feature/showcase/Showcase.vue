<template>
	<layout-main>
		<div class="m_showcase">
			<!-- (D) 등록된 카테고리 메뉴가 있는 경우 아래 메뉴 구조로 노출됩니다. -->
			<!-- 탭메뉴 -->
			<div
				v-if="tabItems.length > 1"
				class="mm_tab_menu T=scroll m_showcase-tab"
			>
				<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
				<div class="mm_scroller T=x">
					<ul>
						<li
							v-for="item in tabItems"
							:key="item.id"
						>
							<a
								:class="{ 'S=tab-on': tabId === item.id }"
								href="#"
								:title="tabId === item.id ? '선택됨' : undefined"
								@click.prevent="tabId = item.id"
							>
								<b>{{ item.tab }}</b>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<h3 class="mm_heading">
				<b>VIEW ALL</b>
			</h3>

			<ul
				v-if="isLoading"
				class="m_showcase-list T=skeleton"
			>
				<li>
					<i class="image_banner"></i>
					<p class="text_side"></p>
					<p class="text_title"></p>
					<p class="text_main"></p>
				</li>
				<li>
					<i class="image_banner"></i>
					<p class="text_side"></p>
					<p class="text_title"></p>
					<p class="text_main"></p>
				</li>
			</ul>

			<p
				v-if="items.length < 1"
				class="mm_text-none"
			>
				<i class="ico_text-none"></i>등록된 쇼케이스가 없습니다
			</p>

			<!-- 쇼케이스 -->
			<ul
				v-else
				class="m_showcase-list"
			>
				<li>
					<mm-link :to="{ name: 'ShowcaseDetail', params: { id: 123 } }">
						<figure>
							<lazyload
								class="mm_bg-cover image_banner"
								src="/image/_sample/showcase_banner1.png"
							></lazyload>
							<figcaption>
								<p class="text_side">
									BRAND STORY
								</p>
								<p class="text_title">
									MMonstar (엠몬스타)
								</p>
								<p class="text_main1">
									내추럴하면서도 그 시대의 핫한 감성 제안하는
								</p>
								<p class="text_main2">
									아티스틱 디자이너 브랜드
								</p>
								<b>자세히 보기<i class="ico_link T=sm"></i></b>
							</figcaption>
						</figure>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'ShowcaseDetail', params: { id: 123 } }">
						<figure>
							<lazyload
								class="mm_bg-cover image_banner"
								src="/image/_sample/showcase_banner2.png"
							></lazyload>
							<figcaption>
								<p class="text_side">
									2022.05.14
								</p>
								<p class="text_title">
									MMonstar (엠몬스타)
								</p>
								<p class="text_main1">
									내추럴하면서도 그 시대의 핫한 감성 제안하는
								</p>
								<p class="text_main2">
									아티스틱 디자이너 브랜드
								</p>
								<b>자세히 보기<i class="ico_link T=sm"></i></b>
							</figcaption>
						</figure>
					</mm-link>
				</li>
				<li class="T=showcase-left">
					<mm-link :to="{ name: 'ShowcaseDetail', params: { id: 123 } }">
						<figure>
							<lazyload
								class="mm_bg-cover image_banner"
								src="/image/_sample/showcase_banner3.png"
							></lazyload>
							<figcaption>
								<p class="text_side">
									BRAND STORY
								</p>
								<p class="text_title">
									MMonstar (엠몬스타)
								</p>
								<p class="text_main1">
									내추럴하면서도 그 시대의 핫한 감성 제안하는
								</p>
								<p class="text_main2">
									아티스틱 디자이너 브랜드
								</p>
								<b>자세히 보기<i class="ico_link T=sm"></i></b>
							</figcaption>
						</figure>
					</mm-link>
				</li>
				<li class="T=showcase-left">
					<mm-link :to="{ name: 'ShowcaseDetail', params: { id: 123 } }">
						<figure>
							<lazyload
								class="mm_bg-cover image_banner"
								src="/image/_sample/showcase_banner4.png"
							></lazyload>
							<figcaption>
								<p class="text_side">
									2022.05.14
								</p>
								<p class="text_title">
									MMonstar (엠몬스타)
								</p>
								<p class="text_main1">
									내추럴하면서도 그 시대의 핫한 감성 제안하는
								</p>
								<p class="text_main2">
									아티스틱 디자이너 브랜드
								</p>
								<b>자세히 보기<i class="ico_link T=sm"></i></b>
							</figcaption>
						</figure>
					</mm-link>
				</li>
			</ul>

			<!-- 하단버튼 -->
			<div
				v-if="items.length > 5"
				class="mm_inner"
			>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=line T=dark btn_more"
						>
							<b>더보기</b><i class="ico_more"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	</layout-main>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import LayoutMain from '@/component/layout/LayoutMain.vue';
	import Lazyload from '@/component/Lazyload.vue';

	const tabItems = [
		{ id: '0', tab: '전체보기' },
		{ id: '1', tab: '탭메뉴1' },
		{ id: '2', tab: '탭메뉴2' },
		{ id: '3', tab: '탭메뉴3' },
		{ id: '4', tab: '탭메뉴4' },
		{ id: '5', tab: '탭메뉴5' },
		{ id: '6', tab: '탭메뉴6' },
		{ id: '7', tab: '탭메뉴7' },
		{ id: '8', tab: '탭메뉴8' },
		{ id: '9', tab: '탭메뉴9' },
	];
	const tabId = ref<string>(tabItems[0].id);
	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
	const isLoading = false;
</script>

<style src="./_showcase.scss" lang="scss"></style>