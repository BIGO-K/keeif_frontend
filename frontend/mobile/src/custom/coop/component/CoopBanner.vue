<template>
	<div class="m_coopbuy-ribbon">
		<carousel
			:auto-delay="4"
			:items="banners"
			use-pagination
		>
			<template #default="{ item: banner }">
				<mm-link :to="url(banner.link)">
					<lazyload
						class="mm_bg-contain"
						:src="banner.image_url"
					></lazyload>
				</mm-link>
			</template>
		</carousel>
	</div>
</template>

<script setup lang='ts'>
	import { useFormatter } from '$/composables/useFormatter';
	import Carousel from '@/component/Carousel.vue';
	import Lazyload from '@/component/Lazyload.vue';

	defineProps<{
		banners: Banner[]
	}>();

	const { url } = useFormatter();
</script>