<template>
	<div class="m_overlay-size">
		<ul>
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
						src="/image/_sample/prod_x3_2.png"
					></lazyload>
				</i>
			</li>
			<li>
				<i>
					<lazyload
						tag="img"
						src="/image/_sample/prod_x3_4.png"
					></lazyload>
				</i>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import Lazyload from '@/component/Lazyload.vue';

	defineExpose<OverlayComponentExpose>({
		title: `사이즈 가이드`,
	});
</script>
