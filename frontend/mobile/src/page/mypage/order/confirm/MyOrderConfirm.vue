<template>
	<div class="m_overlay-myconfirm">
		<h3 class="mm_heading">
			<b>구매 확정 이후로는 반품 및 교환이 불가하므로<br> 상품을 받으신 후 진행해주세요</b>
		</h3>
		<!-- 구매확정상품 -->
		<div class="mm_order-item">
			<div class="mm_order-item-seller">
				<div class="mm_order...seller-head">
					<h5><i class="ico_shop"></i><b>{{ sellerName }}</b></h5>
				</div>
				<div class="mm_product-list T=sm">
					<ul>
						<li>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: orderItem.goods.id } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"

											:src="orderItem.goods.thumbnail_url"
										></lazyload>
										<figcaption>
											<p class="text_brand">
												{{ orderItem.goods.brand_name }}
											</p>
											<p class="text_product">
												{{ orderItem.goods.name }}
											</p>
											<p class="text_option">
												{{ optionText(orderItem.goods.option_name) }} / 1개
											</p>
										</figcaption>
									</figure>
								</mm-link>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="mm_inner">
			<p class="text_point">
				구매 확정 시 적립금 <b><strong>{{ number(orderItem.earnable_point) }}</strong><sub>원</sub></b> 적립
			</p>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
						@click="confirmPurchase"
					>
						<b>구매 확정하기</b>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useMyOrder } from '$/composables/useMyOrder';
	import Lazyload from '@/component/Lazyload.vue';

	const props = defineProps<{
		sellerName: string
		orderItem: NormalStepOrderItem
		closer: CloseHandler<void>
	}>();

	defineExpose<OverlayComponentExpose>({
		title: `구매 확정`,
	});

	const { loading, bom } = useGlobalPageContext();
	const { optionText, number } = useFormatter();

	async function confirmPurchase() {
		bom.confirm('구매 확정 시 배송완료 처리되며 되돌릴 수 없습니다. 구매 확정을 하시겠습니까?', async (flag) => {
			if (!flag) {
				return;
			}

			loading.show();
			try {
				await useMyOrder().confirmPurchase(props.orderItem.id);
				props.closer();
			}
			catch (e) {
				useErrorAlert(e, {
					alertCallback: () => {
						props.closer;
					},
				});
			}
			finally {
				loading.hide();
			}
		});
	}
</script>