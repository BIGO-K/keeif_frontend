<template>
	<!-- 재입고 알림 -->
	<a
		class="mm_btn T=2xs T=line btn_restock"
		@click.prevent="modalRestockApply"
	>
		<i class="ico_alarm"></i><b>재입고 알림받기</b>
	</a>
</template>

<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';

	const layerContextStore = useLayerContextStore();
	const { bom, member, router } = useGlobalPageContext();
	const props = withDefaults(defineProps<{
		options: GoodsOption[]
		has3DepthOption: boolean
	}>(), {
		options: () => [],
	});

	function modalRestockApply() {
		if (member.value === null) {
			return bom.confirm('로그인이 필요합니다 \n로그인 페이지로 이동하시겠습니까?', (flag) => {
				if (flag) {
					router.push({
						name: 'Login',
						query: {
							redirect_to_after: router.currentRoute.value.fullPath,
						},
					});
				}
			});
		}

		const component = defineAsyncComponent(() => import('@/feature/restock/RestockApply.vue'));

		return layerContextStore.openModal(component, {
			props: {
				goodsId: Number(`${router.currentRoute.value.params.id}`),
				options: props.options,
				has3DepthOption: props.has3DepthOption,
			},
		});
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