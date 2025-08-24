<template>
	<div class="m_overlay-size">
		<template v-if="sizeGuideImages.length < 1 || isAllImageEmpty">
			<p class="mm_text-none T=sm">
				<i class="ico_text-none"></i> 등록된 사이즈 차트가 없습니다
			</p>
		</template>
		<template v-else>
			<ul>
				<li
					v-for="guideImage in sizeGuideImages"
					:key="guideImage"
				>
					<i>
						<lazyload
							tag="img"
							:src="guideImage"
							:on-error="errorHandle"
						></lazyload>
					</i>
				</li>
			</ul>
		</template>
	</div>
</template>

<script setup lang='ts'>
	import { ref } from 'vue';
	import Lazyload from '@/component/Lazyload.vue';

	defineExpose<OverlayComponentExpose>({
		title: `사이즈 가이드`,
	});

	const prop = defineProps<{
		sizeGuideImages: string[]
	}>();

	const errorImageCount = ref(0);
	const isAllImageEmpty = ref(true);

	function errorHandle() {
		errorImageCount.value = ++errorImageCount.value;
		if (errorImageCount.value === prop.sizeGuideImages.length) {
			isAllImageEmpty.value = true;
		}
	}
</script>
