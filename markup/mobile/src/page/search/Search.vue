<template>
	<layout
		title="검색"
		:hide-title="true"
		layout="popup"
		class="L=search"
		:is-footer="false"
		:is-toolbar="false"
	>
		<template #after-title>
			<div class="mm_lside">
				<i class="ico_search"><b class="mm_ir-blind">검색</b></i>
			</div>
			<form-text
				placeholder="검색어를 입력하세요"
			></form-text>
		</template>

		<template #default>
			<!-- 상품 및 검색어 -->
			<carousel
				:items="searchCarouselItems"
				class="m_popup-search"
				:use-pagination="true"
				:is-more-side="true"
			>
				<template #default="{ item }">
					<!-- 최근본상품 -->
					<template v-if="item.title === '최근 본 상품'">
						<section class="m_popup-search-list">
							<h3><b>{{ item.title }}</b></h3>
							<div class="mm_scroller">
								<div class="mm_product-list T=sm">
									<ul>
										<li
											v-for="(entry, index) in (item as SearchProduct).items"
											:key="index"
										>
											<div class="mm_product-item">
												<mm-link :to="entry.link">
													<figure>
														<lazyload
															class="mm_bg-cover image_product"
															:src="entry.image"
														></lazyload>
														<p
															v-if="entry.isSoldout"
															class="text_soldout"
														>
															품절
														</p>
														<figcaption>
															<p class="text_product">
																{{ entry.name }}
															</p>
															<p class="text_price">
																<strong>{{ entry.price }}</strong>
															</p>
														</figcaption>
													</figure>
												</mm-link>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</section>
					</template>
					<!-- 최근검색어 -->
					<template v-else-if="item.title === '최근 검색어'">
						<section class="m_popup-search-list">
							<h3><b>{{ item.title }}</b></h3>
							<div class="mm_scroller">
								<ul>
									<li
										v-for="entry in (item as SearchKeyword).items"
										:key="entry"
									>
										<mm-link :to="{ name: 'SearchResult', query: { keyword: entry } }">
											<b>{{ entry }}</b>
										</mm-link>
										<button
											type="button"
											class="btn_remove"
										>
											<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
										</button>
									</li>
								</ul>
							</div>
						</section>
					</template>
					<!-- 인기검색어 -->
					<template v-else>
						<section class="m_popup-search-list">
							<h3><b>{{ item.title }}</b></h3>
							<div class="mm_scroller">
								<ol>
									<li
										v-for="(entry, index) in (item as SearchPopular).items"
										:key="index"
									>
										<mm-link :to="{ name: 'SearchResult', query: { keyword: entry.keyword } }">
											<b>{{ entry.keyword }}</b>
											<template v-if="Number.isNaN(entry.status)">
												<i
													class="ico_rank-new"
													title="신규"
												></i>
											</template>
											<template v-else-if="entry.status === 0">
												<i
													class="ico_rank-unchanged"
													title="변동없음"
												></i>
											</template>
											<template v-else-if="entry.status > 0">
												<i
													class="ico_rank-up"
													title="상승"
												></i>
												<b class="text_rank">{{ entry.status }}</b>
											</template>
											<template v-else>
												<i
													class="ico_rank-down"
													title="하락"
												></i>
												<b class="text_rank">{{ Math.abs(entry.status) }}</b>
											</template>
										</mm-link>
									</li>
								</ol>
							</div>
							<div class="m...list-foot">
								<p>{{ (item as SearchPopular).date }} 기준</p>
							</div>
						</section>
					</template>
				</template>
			</carousel>

			<!-- 검색어 자동완성 -->
			<div class="mm_full m_popup-search-auto">
				<div class="mm_scroller">
					<div class="m...auto-brand">
						<ul>
							<li>
								<mm-link :to="{ name: 'BrandShop', params: { id: 123 }}">
									<figure>
										<lazyload
											class="mm_bg-contain"
											src="/image/_sample/brand_logo_1.jpg"
										></lazyload>
										<figcaption><strong class="mm_text-variable">고</strong>스트리퍼블릭 주니어</figcaption>
									</figure>
									<span>바로가기<i class="ico_link"></i></span>
								</mm-link>
							</li>
							<li>
								<mm-link :to="{ name: 'BrandShop', params: { id: 123 }}">
									<figure>
										<lazyload
											class="mm_bg-contain"
											src="/image/_sample/brand_logo_2.jpg"
										></lazyload>
										<figcaption><strong class="mm_text-variable">FE</strong>RRA US</figcaption>
									</figure>
									<span>바로가기<i class="ico_link"></i></span>
								</mm-link>
							</li>
							<li>
								<mm-link :to="{ name: 'BrandShop', params: { id: 123 }}">
									<figure>
										<lazyload
											class="mm_bg-contain"
											src="/image/_sample/brand_logo"
										></lazyload>
										<figcaption>포<strong class="mm_text-variable">커</strong>스</figcaption>
									</figure>
									<span>바로가기<i class="ico_link"></i></span>
								</mm-link>
							</li>
						</ul>
					</div>
					<ul class="m...auto-category">
						<li>
							<mm-link :to="{ name: 'Category', params: { id: 123456789 } }">
								<b>남성<i class="ico_depth"></i>팬츠<i class="ico_depth"></i>롱<strong class="mm_text-variable">팬츠</strong></b>
							</mm-link>
						</li>
						<li>
							<mm-link :to="{ name: 'Category', params: { id: 123456789 } }">
								<b>남성<i class="ico_depth"></i>팬츠<i class="ico_depth"></i>숏<strong class="mm_text-variable">팬츠</strong></b>
							</mm-link>
						</li>
						<li>
							<mm-link :to="{ name: 'Category', params: { id: 123456789 } }">
								<b>남성<i class="ico_depth"></i>팬츠<i class="ico_depth"></i>트레이닝<strong class="mm_text-variable">팬츠</strong></b>
							</mm-link>
						</li>
					</ul>
					<ul class="m...auto-keyword">
						<li>
							<mm-link :to="{ name: 'SearchResult' }">
								<b>코튼 <strong class="mm_text-variable">팬츠</strong></b><i class="ico_link-arrow"></i>
							</mm-link>
						</li>
						<li>
							<mm-link :to="{ name: 'SearchResult' }">
								<b>스트링 <strong class="mm_text-variable">팬츠</strong></b><i class="ico_link-arrow"></i>
							</mm-link>
						</li>
						<li>
							<mm-link :to="{ name: 'SearchResult' }">
								<b>테이퍼드 <strong class="mm_text-variable">팬츠</strong></b><i class="ico_link-arrow"></i>
							</mm-link>
						</li>
						<li>
							<mm-link :to="{ name: 'SearchResult' }">
								<b>멀티 포켓  <strong class="mm_text-variable">팬츠</strong></b><i class="ico_link-arrow"></i>
							</mm-link>
						</li>
						<li>
							<mm-link :to="{ name: 'SearchResult' }">
								<b>트레이닝 7부 <strong class="mm_text-variable">팬츠</strong></b><i class="ico_link-arrow"></i>
							</mm-link>
						</li>
						<li>
							<mm-link :to="{ name: 'SearchResult' }">
								<b>하프 <strong class="mm_text-variable">팬츠</strong></b><i class="ico_link-arrow"></i>
							</mm-link>
						</li>
						<li>
							<mm-link :to="{ name: 'SearchResult' }">
								<b>조거 <strong class="mm_text-variable">팬츠</strong></b><i class="ico_link-arrow"></i>
							</mm-link>
						</li>
						<li>
							<mm-link :to="{ name: 'SearchResult' }">
								<b>스트레치 <strong class="mm_text-variable">팬츠</strong></b><i class="ico_link-arrow"></i>
							</mm-link>
						</li>
					</ul>
					<!-- (D) 일치하는 검색어가 없을 경우 아래 영역을 노출합니다. -->
					<!--
						<ul>
						<li><p>일치하는 검색어가 없습니다<i class="ico_link-arrow"></i></p></li>
						</ul>
					-->
				</div>
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/component/layout/Layout.vue';
	import Carousel from '@/component/Carousel.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import FormText from '@/component/form/FormText.vue';

	interface SearchProduct {
		title: string,
		items: {
			link: string;
			image: string;
			name: string;
			price: string;
			isSoldout: boolean;
		}[];
	}

	interface SearchKeyword {
		title: string;
		items: string[];
	}

	interface SearchPopular {
		title: string;
		date: string;
		items: {
			keyword: string;
			status: number;
		}[];
	}

	const searchCarouselItems: (SearchProduct | SearchKeyword | SearchPopular)[] = [
		{
			title: '최근 본 상품',
			items: [
				{
					link: '/product/123',
					image: '/image/_sample/prod_x1_1.png',
					name: '남녀공용 블랙 숏 라이너 리버 시블 점퍼',
					price: '90,150',
					isSoldout: false,
				},
				{
					link: '/product/222',
					image: '/image/_sample/prod_x1_2.png',
					name: '[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140',
					price: '54,800',
					isSoldout: true,
				},
				{
					link: '/product/333',
					image: '/image/_sample/prod_x1_3.png',
					name: '데일리&데이트 13,900원 균일',
					price: '13,900',
					isSoldout: false,
				},
				{
					link: '/product/444',
					image: '/image/_sample/prod_x1_1.png',
					name: '시스루스트라이프셔츠',
					price: '54,800',
					isSoldout: false,
				},
				{
					link: '/product/222',
					image: '/image/_sample/prod_x1_2.png',
					name: '[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140',
					price: '54,800',
					isSoldout: true,
				},
				{
					link: '/product/123',
					image: '/image/_sample/prod_x1_1.png',
					name: '남녀공용 블랙 숏 라이너 리버 시블 점퍼',
					price: '90,150',
					isSoldout: false,
				},
				{
					link: '/product/444',
					image: '/image/_sample/prod_x1_1.png',
					name: '시스루스트라이프셔츠',
					price: '54,800',
					isSoldout: false,
				},
				{
					link: '/product/222',
					image: '/image/_sample/prod_x1_2.png',
					name: '[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140',
					price: '54,800',
					isSoldout: true,
				},
				{
					link: '/product/123',
					image: '/image/_sample/prod_x1_1.png',
					name: '남녀공용 블랙 숏 라이너 리버 시블 점퍼',
					price: '90,150',
					isSoldout: false,
				},
			],
		},
		{
			title: '최근 검색어',
			items: [
				'원피스',
				'오버핏 후드',
				'맨투맨',
				'스티커즈',
				'플랫슈즈',
				'치마',
				'슬랙스',
				'율이에',
				'코치',
				'양말',
			],
		},
		{
			title: '인기 검색어',
			date: '2021.00.00 00:00',
			items: [
				{
					keyword: '엠몬스타',
					status: 2,
				},
				{
					keyword: '후드티',
					status: -1,
				},
				{
					keyword: '원피스',
					status: -1,
				},
				{
					keyword: '첼시부츠',
					status: NaN,
				},
				{
					keyword: '가디건',
					status: 0,
				},
				{
					keyword: '맨투맨',
					status: 8,
				},
				{
					keyword: '셔츠',
					status: 0,
				},
				{
					keyword: '자켓',
					status: -3,
				},
				{
					keyword: '양말',
					status: NaN,
				},
				{
					keyword: '데님',
					status: 2,
				},
			],
		},
	];
</script>