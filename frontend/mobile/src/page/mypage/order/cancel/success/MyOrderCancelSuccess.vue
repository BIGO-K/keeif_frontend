<template>
	<layout
		title="취소 완료"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<h3 class="mm_heading m_popup-myclaim-title">
			<b>{{ containApplyStatus ? '주문 취소 신청이' : '주문 취소가' }} 완료되었습니다</b>
		</h3>
		<!-- 취소 상품 목록 -->
		<div class="mm_order-item">
			<form-check
				v-model="allSelected"
				label="전체선택"
			></form-check>
			<div
				v-for="pack in canceledOrderPacks"
				:key="pack.shipping_rule_id"
				class="mm_order-item-seller"
			>
				<div class="mm_order...seller-head">
					<p class="text_ship">
						<i class="ico_ship"></i>
						<span :class="{'text_price': pack.paid_shipping_price > 0}">
							<strong>{{ pack.paid_shipping_price === 0 ? '무료배송' : number(pack.paid_shipping_price) }}</strong>
						</span>
					</p>
				</div>
				<div class="mm_product-list T=sm">
					<ul>
						<li
							v-for="orderItem in pack.order_items"
							:key="orderItem.id"
						>
							<form-check
								v-if="orderItem.items.length"
								v-model="selected"
								label="상품 선택"
								:label-on-blind="true"
								:value="`${orderItem.goods.id}_${orderItem.goods.option_id}`"
							></form-check>
							<p class="text_seller">
								<i class="ico_shop"></i>{{ orderItem.seller_name }}
							</p>
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
											<p class="text_price">
												<strong>{{ number(orderItem.total_paid_price + orderItem.total_point_used) }}</strong>
											</p>
											<p class="text_option">
												{{ optionText(orderItem.goods.option_name) }} / {{ orderItem.goods.ea }}개
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
			<div class="mm_note">
				<ul>
					<li>판매자의 <strong>승인 전까지 주문은 실제로 취소되지 않으며,</strong> 사정에 따라 <strong>취소 거부</strong>가 될 수 있습니다.</li>
					<li>노출되는 가격 및 옵션은 현재와 다를 수 있습니다.</li>
					<li>품절 등 장바구니에 담을 수 없는 상품은 체크하실 수 없습니다.</li>
					<li>취소 수량과 별개로 장바구니에는 1개의 수량만 담깁니다.</li>
				</ul>
			</div>
		</div>
		<div class="m_popup-myclaim-foot">
			<div class="mm_btn_box">
				<div class="mm_flex T=equal">
					<mm-link
						class="mm_btn T=line T=dark"
						:to="{ name: 'MyOrderCancel' }"
						replace
					>
						<b>취소내역 확인</b>
					</mm-link>
					<button
						type="button"
						class="mm_btn T=primary"
						@click="addCart"
					>
						<b>장바구니 담기</b>
					</button>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { useCart } from '$/composables/useCart';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useMyOrder } from '$/composables/useMyOrder';
	import Layout from '@/component/layout/Layout.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import FormCheck from '@/component/form/FormCheck.vue';

	const props = defineProps<{
		orderId: string
		cancelIds: string[]
	}>();
	/** formatter composable */
	const { number, optionText } = useFormatter();
	/** 전역 페이지 composable */
	const { bom, loading, router } = useGlobalPageContext();
	const { getCancelDetail } = useMyOrder();
	const { add } = useCart();

	const canceledOrderPacks = ref<CancelOrderDetailSet['packs']>([]);

	// 상품ID_옵션ID 리스트
	const goodsOptionIds = computed<string[]>(() => {
		const optionIds: string[] = [];
		canceledOrderPacks.value.forEach(pack => {
			pack.order_items.forEach(set => {
				optionIds.push(`${set.goods.id}_${set.goods.option_id}`);
			});
		});

		return optionIds;
	});
	const selected = ref<string[]>([]);

	/** 전체선택 여부 */
	const allSelected = computed({
		get: () => goodsOptionIds.value.length == selected.value.length,
		set: (val: boolean) => selected.value = val ? goodsOptionIds.value : [],
	});

	/** 취소 신청 포함 여부 */
	const containApplyStatus = ref(false);

	/** 장바구니 담기 */
	async function addCart() {
		if (selected.value.length < 1) {
			return bom.alert('상품을 선택해주세요.');
		}

		loading.show();
		try {
			const addCartOptions = [...new Set(selected.value)].map(goodsOption => {
				const goodsOptionArr = goodsOption.split('_');

				return {
					goods_id: Number(goodsOptionArr[0]),
					option_id: Number(goodsOptionArr[1]),
					ea: 1,
				};
			});

			await add(addCartOptions);

			bom.confirm(
				'선택하신 상품을 장바구니에 담았습니다.\n장바구니로 이동하시겠습니까?',
				(flag: boolean) => {
					if (flag) {
						router.replace({
							name: 'Cart',
						});
					}
				},
				{
					okLabel: '장바구니 가기',
					cancelLabel: '쇼핑 계속하기',
				},
			);
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {

			loading.hide();
		}
	}

	props.cancelIds.forEach(async (cancelId) => {
		const cancelDetail = await getCancelDetail(cancelId, true);
		canceledOrderPacks.value = canceledOrderPacks.value.concat(cancelDetail.packs);
		containApplyStatus.value = containApplyStatus.value || cancelDetail.is_contain_apply_status;
	});
</script>

<!-- 현재 페이지 스크립트 -->
<!--
	<script>
	// 하단버튼 sticky
	(function() {

	var $btnFoot = mm.find('.m_popup-myclaim-foot')[0];
	var _classOn = 'S=sticky-off';

	function footSticky() {

	if ((window.innerHeight - (mm.element.offset($btnFoot).top + $btnFoot.offsetHeight)) >= 0) $btnFoot.classList.add(_classOn);
	else $btnFoot.classList.remove(_classOn);

	}
	footSticky();

	mm.event.on(mm.scroll.el, 'scroll', footSticky);

	})();
	</script>
-->