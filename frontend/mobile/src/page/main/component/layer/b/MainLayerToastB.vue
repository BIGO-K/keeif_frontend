<template>
	<div class="m_main-layer S=on T=lb T=layer-toast">
		<div class="m_main-layer-dim"></div>
		<div class="m_main-layer-item">
			<carousel
				use-count
				:auto-delay="4"
				:items="banners"
			>
				<template #default="{ item: banner }">
					<mm-link :to="banner.link">
						<lazyload
							class="mm_bg-cover image_banner"
							is-force
							:src="banner.image_url"
						></lazyload>
						<b class="mm_ir-blind">{{ banner.image_alt }}</b>
					</mm-link>
				</template>
			</carousel>
			<div class="mm_btnbox">
				<button
					type="button"
					class="btn_today"
					@click="$emit('close', { hideToday: true })"
				>
					<b>오늘 하루 그만보기</b>
				</button>
				<button
					type="button"
					class="btn_close"
					@click="$emit('close', { hideToday: false })"
				>
					<b>닫기</b>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import Carousel from '@/component/Carousel.vue';
	import Lazyload from '@/component/Lazyload.vue';

	withDefaults(defineProps<{
		banners: MainBanner[]
	}>(), {
		banners: () => []
	});

	defineEmits<{
		(e: 'close', value: { hideToday: boolean }): void
	}>();
</script>