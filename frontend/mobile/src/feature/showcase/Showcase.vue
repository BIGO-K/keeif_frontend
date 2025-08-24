<template>
	<layout-main>
		<div class="m_showcase">
			<!-- (D) 등록된 카테고리 메뉴가 없는 경우 아래 타이틀 구조로 노출됩니다. -->
			<template v-if="!isLoading">
				<!-- 탭메뉴 -->
				<div
					class="mm_tab_menu T=scroll m_showcase-tab"
				>
					<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
					<div class="mm_scroller T=x">
						<ul>
							<li>
								<a
									:class="selectedCategory === 0 ? 'S=tab-on' : ''"
									:title="selectedCategory === 0 ? '선택됨' : ''"
									@click="selectedCategory = 0"
								>
									<b>전체보기</b>
								</a>
							</li>
							<li
								v-for="_item in showcaseCategories"
								:key="_item.id"
							>
								<a
									:class="{ 'S=tab-on': selectedCategory === _item.id }"
									href="#"
									:title="selectedCategory === _item.id ? '선택됨' : undefined"
									@click.prevent="selectedCategory = _item.id"
								>
									<b>{{ _item.name }}</b>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</template>

			<!--
				<h3
				v-if="selectedCategory === 0"
				class="mm_heading"
				>
				<b>VIEW ALL</b>
				</h3>
			-->

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
				v-if="showcasePaginator.total < 1"
				class="mm_text-none"
			>
				<i class="ico_text-none"></i>등록된 쇼케이스가 없습니다
			</p>

			<!-- 쇼케이스 -->
			<ul
				v-else
				class="m_showcase-list"
			>
				<li
					v-for="showcase in showcasePaginator.data"
					:key="showcase.id"
				>
					<mm-link :to="{ name: 'ShowcaseDetail', params: { id: showcase.id } }">
						<figure>
							<lazyload
								class="mm_bg-cover image_banner"
								:src="showcase.thumbnail_url"
							></lazyload>
							<figcaption>
								<p class="text_side">
									{{ showcase.sort_name }}
								</p>
								<p class="text_title">
									{{ showcase.title }}
								</p>
								<p class="text_main1">
									{{ showcase.first_words }}
								</p>
								<p class="text_main2">
									{{ showcase.second_words }}
								</p>
								<b>자세히 보기<i class="ico_link T=sm"></i></b>
							</figcaption>
						</figure>
					</mm-link>
				</li>
			</ul>

			<!-- 하단버튼 -->
			<div
				v-if="showcasePaginator.total > 5"
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
	import { ref, watch } from 'vue';
	import { useRoute, useRouter } from 'vue-router';
	import { useShowcase } from '$/composables/useShowcase';
	import LayoutMain from '@/component/layout/LayoutMain.vue';
	import Lazyload from '@/component/Lazyload.vue';

	const route = useRoute();
	const router = useRouter();
	const { getCategories, getPaginator } = useShowcase();
	const selectedCategory = ref<number>(Number(route.query.showcase_category || 0));
	const showcaseCategories = ref<ShowcaseCategory[]>([]);
	const showcasePaginator = ref<Paginator<Showcase>>({
		total: 0,
		per_page: 20,
		current_page: 1,
		data: []
	});

	const isLoading = ref<boolean>(true);

	try {
		Promise.all([
			getCategories().then((pCategories) => showcaseCategories.value = pCategories),
			getPaginator(selectedCategory.value, 1, 10).then(pPaginator => showcasePaginator.value = pPaginator)
		]);
	}
	catch (e) {

	}
	finally {
		isLoading.value = false;
	}

	watch(selectedCategory, async (to) => {
		try {
			showcasePaginator.value = await getPaginator(to, 1, 10);
			router.replace({
				query: {
					showcase_category: to
				}
			});
		}
		catch (e) {

		}
	});
</script>

<style src="./_showcase.scss" lang="scss"></style>