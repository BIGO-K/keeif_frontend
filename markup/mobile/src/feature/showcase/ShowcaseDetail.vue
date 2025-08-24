<template>
	<layout title="쇼케이스">
		<!-- 쇼케이스 상단 -->
		<div class="m_showcase-detail-head">
			<i class="image_banner">
				<lazyload
					tag="img"
					class="mm_bg-cover image_banner"
					src="/image/_sample/showcase_banner1.png"
				></lazyload>
			</i>
			<div class="mm_inner">
				<p class="text_title">
					<b>헤이(Hei)</b>
				</p>
				<p class="text_date">
					2021.05.06
				</p>
				<p class="text_detail">
					‘Cool & Simple, Artistic Touch, Natural, Contemporary’<br><br>심플하면서도 감각적인 아티스틱 주얼리를 선보이는 헤이(Hei)가 ‘2021 스프링 컬렉션’을 공개했다.<br> 헤이만의 아름다운 클래식 무드가 돋보이는 이번 시즌 컬렉션을 소개한다.
				</p>
			</div>
		</div>

		<!-- 동영상 -->
		<div class="m_showcase-detail-media">
			<iframe
				src="https://www.youtube.com/embed/yKw39s55vOM"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>

		<!-- 상품그룹1 -->
		<div class="m_showcase-detail-product">
			<i class="image_banner">
				<lazyload
					tag="img"
					src="/image/_sample/showcase_detail1.png"
				></lazyload>
			</i>
			<div class="mm_scroller T=x">
				<div class="mm_product-list T=card">
					<ul>
						<li
							v-for="item in 5"
							:key="item"
						>
							<product-item
								class="T=pa"
								:is-sale-price="false"
								:is-react="false"
							></product-item>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- 상품그룹2 -->
		<div class="m_showcase-detail-product">
			<i class="image_banner">
				<lazyload
					tag="img"
					src="/image/_sample/showcase_detail2.png"
				></lazyload>
			</i>
			<div class="mm_scroller T=x">
				<div class="mm_product-list T=card">
					<ul>
						<li
							v-for="item in 5"
							:key="item"
						>
							<product-item
								class="T=pa"
								:is-sale-price="false"
								:is-react="false"
							></product-item>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- 브랜드샵 -->
		<div class="m_showcase-detail-brand">
			<toggle
				class="btn_like"
				@toggle="toggleLikeBrand"
			>
				<i class="ico_like-brand"></i><b class="mm_ir-blind">찜한 브랜드에 추가하기</b>
			</toggle>
			<p class="text_brand">
				Hei
			</p>
			<mm-link
				class="mm_btn T=xs T=primary btn_shop"
				:to="{ name: 'BrandShop', params: { id: 123 } }"
			>
				<b>SHOP NOW</b><i class="ico_link T=sm"></i>
			</mm-link>
		</div>

		<!-- View More -->
		<section class="mm_inner m_showcase-detail-more">
			<h5><b>View More</b></h5>
			<carousel
				:items="moreCarouselItems"
				:group-size="4"
				:use-pagination="true"
			>
				<template #default="{ item }">
					<mm-link :to="item.link">
						<figure>
							<lazyload
								class="mm_bg-cover image_banner"
								:src="item.image"
							></lazyload>
							<figcaption>
								<p class="text_category">
									{{ item.category }}
								</p>
								<p class="text_title">
									{{ item.title }}
								</p>
							</figcaption>
						</figure>
					</mm-link>
				</template>
			</carousel>
		</section>

		<!-- 하단 버튼 -->
		<div class="mm_foot">
			<div class="mm_btn_box">
				<mm-link
					class="mm_btn T=line T=dark"
					:to="{ name: 'Showcase' }"
				>
					<b>쇼케이스 메인으로 이동</b><i class="ico_link"></i>
				</mm-link>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/component/layout/Layout.vue';
	import Carousel from '@/component/Carousel.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import ProductItem from '@/component/ProductItem.vue';
	import Toggle from '@/component/Toggle.vue';

	const moreCarouselItems = [
		{
			image: '/image/_sample/showcase_banner1.png',
			category: 'BRAND STORY',
			title: '일상속의 감각적인 룩을 제안하는 브랜드 LENINA(르니나)',
			link: '/showcase/111',
		},
		{
			image: '/image/_sample/showcase_banner2.png',
			category: '2022.07.20',
			title: '좋은 작품이 주는 감동의 순간 다꼬르피스(DACCORD PIECE)',
			link: '/showcase/222',
		},
		{
			image: '/image/_sample/showcase_banner3.png',
			category: 'COOL',
			title: '행복한 식탁을 꿈꾸는 아내들의 이야기 아내의 식탁',
			link: '/showcase/333',
		},
		{
			image: '/image/_sample/showcase_banner4.png',
			category: '2022.07.20',
			title: '좋은 작품이 주는 감동의 순간 다꼬르피스(DACCORD PIECE)',
			link: '/showcase/444',
		},
		{
			image: '/image/_sample/showcase_banner1.png',
			category: 'BRAND STORY',
			title: '일상속의 감각적인 룩을 제안하는 브랜드 LENINA(르니나)',
			link: '/showcase/555',
		},
		{
			image: '/image/_sample/showcase_banner2.png',
			category: 'LIFE',
			title: '좋은 작품이 주는 감동의 순간 다꼬르피스(DACCORD PIECE)',
			link: '/showcase/666',
		},
		{
			image: '/image/_sample/showcase_banner3.png',
			category: 'COOL',
			title: '일상속의 감각적인 룩을 제안하는 브랜드 LENINA(르니나)',
			link: '/showcase/777',
		},
		{
			image: '/image/_sample/showcase_banner4.png',
			category: '2022.07.20',
			title: '행복한 식탁을 꿈꾸는 아내들의 이야기 아내의 식탁',
			link: '/showcase/888',
		},
		{
			image: '/image/_sample/showcase_banner1.png',
			category: 'BRAND STORY',
			title: '일상속의 감각적인 룩을 제안하는 브랜드 LENINA(르니나)',
			link: '/showcase/999',
		},
		{
			image: '/image/_sample/showcase_banner2.png',
			category: 'LIFE',
			title: '좋은 작품이 주는 감동의 순간 다꼬르피스(DACCORD PIECE)',
			link: '/showcase/000',
		},
	];

	const toggleLikeBrand = (_isActive: boolean) => {
		console.log('브랜드 좋아요 클릭', _isActive);
	};
</script>

<style src="./_showcase.scss" lang="scss"></style>