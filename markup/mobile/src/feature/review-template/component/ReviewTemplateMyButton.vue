<template>
	<a
		class="btn_size"
		href="#"
		@click.prevent="overlayMySize"
	>
		<i class="ico_size"></i><b>My 사이즈</b>
	</a>
</template>

<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';

	const layerContextStore = useLayerContextStore();

	function overlayMySize() {
		const component = defineAsyncComponent(() => import('@/feature/review-template/ReviewTemplateMySize.vue'));

		return layerContextStore.openOverlay(component);
	}
</script>

<style lang="scss">
	@use '../../../asset/scss/helper/mixin';

	.m_mymain-member-info {
		> .mm_flex {
			.btn_size {
				@include mixin.font(var(--color_text_base) '/3.8rem');

				.ico_size {
					margin: 13px 4px 0 0;

					&::before {
						background-color: #000;
					}
				}

				b {
					position: relative;

					&::after {
						position: absolute;
						top: 10px;
						right: -6px;
						width: 4px;
						height: 4px;
						border-radius: 100%;
						background-color: var(--color_sub);
						content: '';
					}
				}
			}
		}
	}
</style>