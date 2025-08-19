<template>
	<div class="m_overlay-image-detail">
		<ul>
			<li>
				<i>
					<lazyload
						tag="img"
						src="/image/_sample/prod_x3_2.png"
					></lazyload>
				</i>
			</li>
			<li>
				<i>
					<lazyload
						tag="img"
						src="/image/_sample/prod_x3_3.png"
					></lazyload>
				</i>
			</li>
			<li>
				<i>
					<lazyload
						tag="img"
						src="/image/_sample/prod_x3_1.png"
					></lazyload>
				</i>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import Lazyload from '@/component/Lazyload.vue';

	defineExpose<OverlayComponentExpose>({
		title: `포토리뷰`,
	});
</script>