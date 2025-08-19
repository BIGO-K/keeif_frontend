<template>
	<layout-main-layer v-slot="{ closeLayer }">
		<carousel
			:items="toastCarouselItems"
			:auto-delay="4"
			:use-count="true"
		>
			<template #default="{ item }">
				<mm-link :to="item.link">
					<lazyload
						class="mm_bg-cover image_banner"
						:src="item.image"
					></lazyload>
					<b class="mm_ir-blind">{{ item.alt }}</b>
				</mm-link>
			</template>
		</carousel>
		<div class="mm_btnbox">
			<button
				type="button"
				class="btn_today"
				@click="closeLayer(true)"
			>
				<b>오늘 하루 그만보기</b>
			</button>
			<button
				type="button"
				class="btn_close"
				@click="closeLayer(false)"
			>
				<b>닫기</b>
			</button>
		</div>
	</layout-main-layer>
</template>

<script setup lang="ts">
	import LayoutMainLayer from '@/component/layout/LayoutMainLayer.vue';
	import Carousel from '@/component/Carousel.vue';
	import Lazyload from '@/component/Lazyload.vue';

	const toastCarouselItems = [
		{
			image: '/image/_sample/main_popup_toast_b_01.png',
			alt: '스튜디오톰보이 SEASON OFF 자세히보기',
			link: '/promotion/111',
		},
		{
			image: '/image/_sample/main_popup_toast_b_02.png',
			alt: 'Valentine ACC 자세히보기',
			link: '/event/222',
		},
		{
			image: '/image/_sample/main_popup_toast_b_03.png',
			alt: 'One step Correct kitten 지금 바로 GET!',
			link: '/promotion/333',
		},
	];
</script>