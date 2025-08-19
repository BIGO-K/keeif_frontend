<template>
	<layout-main>
		<!-- 베스트 -->
		<div class="m_best">
			<!-- 카테고리 -->
			<!-- (D) 카테고리 선택 시 새로고침 되지 않고 페이지 내에서 카테고리 아래로 내용만 변경됩니다 -->
			<div class="m_product-category m_best-category">
				<div class="m_product-category-list m_best-category-list">
					<div class="mm_scroller T=x">
						<!-- (D) 선택된 카테고리에 'S=category-on' 클래스와 '선택됨' 타이틀을 추가합니다 -->
						<ul>
							<li
								v-for="item in tabItems"
								:key="item.id"
							>
								<a
									:class="{ 'S=category-on': tabId === item.id }"
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
			</div>

			<div
				v-if="isLoading"
				class="mm_product-list T=card T=skeleton"
			>
				<ol>
					<li>
						<div class="mm_product-item">
							<i class="image_product"></i>
							<div class="mm_product-item-info">
								<p class="text_brand"></p>
								<p class="text_product"></p>
								<p class="text_price"></p>
							</div>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<i class="image_product"></i>
							<div class="mm_product-item-info">
								<p class="text_brand"></p>
								<p class="text_product"></p>
								<p class="text_price"></p>
							</div>
						</div>
					</li>
				</ol>
			</div>

			<p
				v-if="items.length < 1"
				class="mm_text-none"
			>
				<i class="ico_text-none"></i>데이터가 없습니다
			</p>

			<div
				v-else
				class="mm_product-list T=card"
			>
				<ol>
					<li
						v-for="item in 12"
						:key="item"
					>
						<product-item
							class="T=pa"
							:is-rank="true"
							:is-react="false"
							:is-badge="false"
						></product-item>
					</li>
				</ol>
			</div>
		</div>
	</layout-main>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import LayoutMain from '@/component/layout/LayoutMain.vue';
	import ProductItem from '@/component/ProductItem.vue';

	const tabItems = [
		{ id: '0', tab: '전체보기' },
		{ id: '1', tab: '메뉴1' },
		{ id: '2', tab: '메뉴2' },
		{ id: '3', tab: '메뉴3' },
		{ id: '4', tab: '메뉴4' },
		{ id: '5', tab: '메뉴5' },
		{ id: '6', tab: '메뉴6' },
		{ id: '7', tab: '메뉴7' },
		{ id: '8', tab: '메뉴8' },
		{ id: '9', tab: '메뉴9' },
	];
	const tabId = ref<string>(tabItems[0].id);

	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
	const isLoading = false;
</script>