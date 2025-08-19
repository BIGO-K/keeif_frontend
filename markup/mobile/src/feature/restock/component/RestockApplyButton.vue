<template>
	<!-- 재입고 알림 -->
	<a
		v-if="true"
		class="mm_btn T=2xs T=line btn_restock"
		@click.prevent="modalRestockApply"
	>
		<i class="ico_alarm"></i><b>재입고 알림받기</b>
	</a>
</template>

<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';

	const layerContextStore = useLayerContextStore();

	function modalRestockApply() {
		const component = defineAsyncComponent(() => import('@/feature/restock/RestockApply.vue'));

		return layerContextStore.openModal(component);
	}
</script>

<style lang="scss">
	.m_product-option {
		&-select {
			.btn_restock {
				margin-top: 16px;
				color: #4457a7;

				&::after {
					border-color: #4457a7;
					border-radius: 3px;
				}

				.ico_alarm {
					margin: 4px 4px 0 0;

					&::before {
						background-color: #4457a7;
					}
				}
			}
		}
	}
</style>