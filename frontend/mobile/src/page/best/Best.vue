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
								v-for="_item in tabItems"
								:key="_item.id"
							>
								<a
									:class="{ 'S=category-on': tabId === _item.id }"
									href="#"
									:title="tabId === _item.id ? '선택됨' : undefined"
									@click.prevent="tabId = _item.id"
								>
									<b>{{ _item.tab }}</b>
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
					<li>
						<div class="mm_product-item T=pa">
							<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
								<p class="text_rank"></p>
								<figure>
									<!-- src="/image/_sample/prod_x3_1.png" -->
									<lazyload
										class="mm_bg-cover image_product"
									></lazyload>
									<p class="text_product-status">
										품절임박
									</p>
									<figcaption>
										<p class="text_brand">
											엠몬스타
										</p>
										<p class="text_product">
											<span class="text_foreword">[단독]</span>남녀공용 블랙 숏 라이너 리버시블 점퍼
										</p>
										<p class="text_sale">
											25%
										</p>
										<p class="text_price">
											<strong>99,000</strong><del><span>118,800</span></del>
										</p>
									</figcaption>
								</figure>
							</mm-link>
							<toggle class="btn_like">
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</toggle>
						</div>
					</li>
				</ol>
			</div>
		</div>
	</layout-main>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import LayoutMain from '@/component/layout/LayoutMain.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import Toggle from '@/component/Toggle.vue';

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