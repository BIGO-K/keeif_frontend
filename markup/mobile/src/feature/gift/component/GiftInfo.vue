<template>
	<section>
		<h4 class="mm_strapline">
			<b>사은품 정보</b>
		</h4>
		<ul class="mm_gift-list">
			<li>
				<div class="mm_gift-item">
					<figure>
						<lazyload
							class="mm_bg-cover image_gift"
							src="/image/_sample/prod_x1_1.png"
						></lazyload>
						<figcaption>
							<p class="text_name">
								내셔널지오그래픽 텀블러 증정
							</p>
							<p class="text_condition">
								전상품 25,000원 이상 구매 시전상품 25,000원 이상 구매 시전상품 25,000원 이상 구매 시전상품 25,000원 이상 구매 시전상품 25,000원 이상 구매 시
							</p>
						</figcaption>
					</figure>
					<div class="mm_btn_box">
						<div class="mm_rside">
							<a
								class="btn_gift-info"
								href="#"
								@click.prevent="overlayGiftTarget"
							>
								<b>지급대상확인</b><i class="ico_link T=xs"></i>
							</a>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="mm_gift-item">
					<figure>
						<lazyload
							class="mm_bg-cover image_gift"
							src="/image/_sample/prod_x1_2.png"
						></lazyload>
						<figcaption>
							<p class="text_name">
								내셔널지오그래픽 텀블러 증정
							</p>
							<p class="text_condition">
								전상품 25,000원 이상 구매 시
							</p>
						</figcaption>
					</figure>
					<div class="mm_btn_box">
						<div class="mm_rside">
							<a
								class="btn_gift-info"
								href="#"
								@click.prevent="overlayGiftTarget"
							>
								<b>지급대상확인</b><i class="ico_link T=xs"></i>
							</a>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import Lazyload from '@/component/Lazyload.vue';

	const layerContextStore = useLayerContextStore();

	function overlayGiftTarget() {
		const component = defineAsyncComponent(() => import('@/feature/gift/GiftTarget.vue'));

		return layerContextStore.openOverlay(component);
	}
</script>

<style src="../_gift.scss" lang="scss"></style>
<style lang="scss">
	@use '../../../asset/scss/helper/mixin';

	/** 주문 완료 */
	.m_popup-order-fin {
		.mm_gift-list {
			margin-bottom: 4px;
		}
	}

	/** 주문 상세 */
	.m_myorder-detail-gift {
		margin-top: 22px;
		border-top: 1px solid #eee;

		.mm_strapline {
			padding: 19px 0 11px 2px;
		}

		.mm_gift-item {
			.text_name,
			.text_condition {
				@include mixin.text-ellipsis(2);
			}
		}
	}
</style>