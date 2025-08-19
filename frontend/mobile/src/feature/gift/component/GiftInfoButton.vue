<template>
	<a
		class="btn_gift"
		href="#"
		@click.prevent="overlayGiftInfo"
	>
		<span>GIFT</span><b>구매 고객을 위한 <strong>사은품을 확인해보세요</strong></b><i class="ico_link"></i>
	</a>
</template>

<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';

	const layerContextStore = useLayerContextStore();

	const props = defineProps<{
		gifts: Giveaway[]
	}>();

	function overlayGiftInfo() {
		const component = defineAsyncComponent(() => import('@/feature/gift/GiftInfo.vue'));

		return layerContextStore.openOverlay(component, {
			props: {
				gifts: props.gifts,
			},
		});
	}
</script>

<style lang="scss">
	@use '../../../asset/scss/helper/mixin';

	/** 상품상세 */
	.m_prodetail-head-info {
		.btn_gift {
			display: block;
			position: relative;
			margin-top: 3px;
			padding-left: 69px;
			height: 43px;
			border: 1px solid #4457a7;

			span {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				padding-left: 13px;
				width: 62px;
				background-color: #4457a7;
				@include mixin.font(rgba(#fff, 0.7) '1.2rem/4.2rem');

				&::after {
					position: absolute;
					right: 0;
					@include mixin.triangle(#fff, left, 41px, 19px);
					border-bottom: 0;
					content: '';
				}
			}

			b {
				@include mixin.font('1.3rem/4.2rem');

				strong {
					color: #4457a7;
				}
			}

			.ico_link {
				position: absolute;
				top: 50%;
				right: 13px;
				@include mixin.transform(translateY(-50%));

				&::before {
					width: 6px;
					height: 14px;
					background-color: #4457a7;
				}
			}

			+ .btn_seller {
				margin-top: 14px;
			}
		}
	}
</style>