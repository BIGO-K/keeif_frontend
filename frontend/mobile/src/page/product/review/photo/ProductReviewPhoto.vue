<template>
	<div class="m_overlay-image-detail">
		<ul>
			<li
				v-for="imageUrl in imageUrls"
				:key="imageUrl"
			>
				<i>
					<lazyload
						tag="img"
						is-force
						:src="imageUrl"
					></lazyload>
				</i>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import Lazyload from '@/component/Lazyload.vue';

	withDefaults(defineProps<{
		imageUrls: string[]
	}>(), {
		imageUrls: () => [],
	});

	defineExpose<OverlayComponentExpose>({
		title: `사진 상세`,
	});
</script>