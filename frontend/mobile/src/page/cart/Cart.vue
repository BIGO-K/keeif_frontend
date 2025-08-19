<template>
	<layout
		title="장바구니"
		class="L=lowbtn"
		:is-footer="false"
		:is-toolbar="false"
	>
		<template #default>
			<div class="m_cart">
				<template
					v-if="cartPacks.length < 1"
				>
					<p class="mm_text-none">
						<i class="ico_text-none"></i>장바구니에 담긴 상품이 없습니다.<br> 원하는 상품을 장바구니에 담아보세요!
					</p>
					<div class="mm_btn_box">
						<div class="mm_inline">
							<button
								type="button"
								class="mm_btn T=primary"
								@click="() => router.push('/')"
							>
								<b>쇼핑하러 가기</b>
							</button>
						</div>
					</div>
				</template>

				<template v-else>
					<!-- 안내문구 -->
					<div class="mm_note">
						<p><i class="ico_info"></i>(냉장/냉동/상온)온도가 구분되어 배송되는 일부상품은 합배송이 불가합니다.</p>
					</div>
					<!-- 장바구니 품목 -->
					<div class="mm_order-item">
						<form-check
							v-model="checkAllCartItem"
							label="전체선택"
						></form-check>
						<button
							type="button"
							class="btn_remove"
							@click="removeSelected()"
						>
							<i class="ico_remove-trash"></i><b>선택삭제</b>
						</button>
						<div
							v-for="pack in cartPacks"
							:key="pack.key"
							class="mm_order-item-seller"
						>
							<div class="mm_order...seller-head">
								<p class="text_ship">
									<i class="ico_ship"></i>
									<span
										v-if="priceContextByPack[pack.key].shippingPrice"
										class="text_price"
									>
										<strong>{{ number(priceContextByPack[pack.key].shippingPrice) }}</strong>
									</span>
									<span v-else>무료배송</span>
								</p>
							</div>

							<dawn-order v-if="pack.is_dawn_delivery"></dawn-order>
							<div class="mm_product-list T=sm">
								<ul>
									<li
										v-for="cartItem in pack.items"
										:key="cartItem.cart_id"
									>
										<form-check
											v-model="checkedCartItems"
											:value="cartItem"
											label="상품 선택"
											label-on-blind
										>
										</form-check>
										<p
											class="text_seller"
										>
											<i class="ico_shop"></i>{{ cartItem.seller_name }}
										</p>
										<goods-item
											:class="{'S=unableBuy': !isPurchasableInfluencerItem(cartItem) }"
											:goods="cartItem.goods"
											:display-price="isMember
												? cartItem.goods.base_discounted_price + cartItem.goods.option_extra_amount
												: cartItem.goods_sell_price + cartItem.goods.option_extra_amount"
											hide-tag
											hide-upper-price
											hide-wish
											soldout-message="품절"
										>
											<template #optionName>
												<p
													class="text_option"
													:class="{'S=option-soldout' : cartItem.option_stock < 1 || cartItem.ea > cartItem.option_stock }"
												>
													{{ `${optionText(cartItem.option_name)} / ${cartItem.ea}개` }}
													<template v-if="cartItem.option_stock < 1 || cartItem.ea > cartItem.option_stock">
														<br>{{ cartItem.option_stock < 1 ? `선택한 옵션이 품절되었습니다` : `수량을 확인 해주세요` }}
													</template>
												</p>
											</template>
										</goods-item>
										<div class="mm_product-item-footer">
											<div class="mm_btn_box">
												<div
													class="mm_flex T=equal"
													:data-handle="wishedStore.isWishedGoods(cartItem.goods.id)"
												>
													<toggle
														class="btn_like"
														:is-active="wishedStore.isWishedGoods(cartItem.goods.id)"
														is-lazy
														@click="toggleWished(wishedStore.isWishedGoods(cartItem.goods.id), cartItem)"
													>
														<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
													</toggle>
													<template v-if="cartItem.goods.is_soldout">
														<p class="text_cart-soldout">
															상품이 품절되었어요
														</p>
													</template>
													<template v-else-if="!isPurchasableInfluencerItem(cartItem)">
														<p class="text_cart-soldout">
															구매불가한 상품입니다
														</p>
													</template>
													<template v-else>
														<toggle
															:is-active="activeCartItemId === cartItem.cart_id"
															class="mm_btn T=sm T=line btn_option-change"
															parent-selector=".mm_product-item-footer"
															@toggle="(isActive) => fetchOptions(isActive, cartItem)"
														>
															<b>옵션/수량 변경</b><i class="ico_toggle"></i>
														</toggle>
														<button
															type="button"
															class="mm_btn T=sm T=line T=primary"
															@click="buy(cartItem)"
														>
															<b>바로구매</b>
														</button>
													</template>
												</div>
											</div>
											<div
												v-if="activeCartItemId === cartItem.cart_id && modifyContext"
												class="m_cart-option"
											>
												<cart-options
													v-if="modifyContext.selectedOption"
													:key="modifyContext.cartItem.cart_id"
													:options="modifyContext.options"
													:modify-context="modifyContext"
													@change-option="changeOption"
													@close-context="closeContext"
												></cart-options>
											</div>
										</div>
										<button
											type="button"
											class="btn_remove"
											@click="removeOne(cartItem)"
										>
											<i class="ico_remove"></i><b class="mm_ir-blind">상품 삭제</b>
										</button>
									</li>
								</ul>
							</div>
							<p class="text_purchase-price">
								{{ number(priceContextByPack[pack.key].goodsPrice) }}원 + 배송비 {{ number(priceContextByPack[pack.key].shippingPrice) }}원 = <strong>{{ number(priceContextByPack[pack.key].totalPrice) }}</strong>원
								<template v-if="pack.conditional_free_from > 0">
									<br> {{ number(pack.conditional_free_from) }}원 이상 무료배송{{ pack.is_charge_on_each ? ' (개별부과)' : '' }}
								</template>
							</p>
						</div>
					</div>
					<hr class="mm_line">

					<!-- 결제금액 -->
					<div class="mm_cost">
						<table>
							<tbody>
								<tr>
									<th scope="row">
										<b>총 상품금액</b>
									</th>
									<td>
										<p class="text_price">
											<strong>{{ number(totalPriceContext.goodsSellPrice) }}</strong>
										</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>배송비</b>
									</th>
									<td>
										<p class="text_price">
											+ <strong>{{ number(totalPriceContext.shippingPrice) }}</strong>
										</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>회원할인</b>
									</th>
									<td>
										<p class="text_price">
											- <strong>{{ number(totalPriceContext.baseDiscountAmount ) }}</strong>
										</p>
									</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<th scope="row">
										<b>최종 결제금액</b>
									</th>
									<td>
										<p class="text_price mm_text-variable">
											<strong>{{ number(totalPriceContext.payAmount) }}</strong>
										</p>
									</td>
								</tr>
							</tfoot>
						</table>
					</div>
				</template>
			</div>
		</template>

		<template #button>
			<!-- 안내문구 툴팁 -->
			<transition name="cart-popover">
				<div
					v-if="checkedCartItems.length > 0 && isShowsSubmitTip"
					class="m_cart-popover"
				>
					<p v-html="submitTipHtml"></p>
					<button
						type="button"
						class="btn_close"
						@click="isShowsSubmitTip = false"
					>
						<i class="ico_popover-close"></i><b class="mm_ir-blind">닫기</b>
					</button>
				</div>
			</transition>

			<transition name="cart-button">
				<div
					v-if="checkedCartItems.length > 0"
					class="mm_btn_box T=fixed"
				>
					<button
						type="button"
						class="mm_flex T=auto btn_order"
						@click="onOrderPayment"
					>
						<b class="text_total">총 <strong>{{ checkedCartItems.length }}</strong>개</b>
						<b class="text_order"><strong>{{ number(totalPriceContext.payAmount) }}</strong>원 주문하기</b>
					</button>
				</div>
			</transition>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import { computed, defineAsyncComponent, ref, watch } from 'vue';
	import { useRoute } from 'vue-router';
	import { useOrderStore } from '$/stores/useOrderStore';
	import { useWishedStore } from '$/stores/useWishedStore';
	import monsDate from '$/utils/date';
	import { useCart } from '$/composables/useCart';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useThirdPartyTracking } from '$/composables/useThirdPartyTracking';
	import Layout from '@/component/layout/Layout.vue';
	import GoodsItem from '@/component/GoodsItem.vue';
	import Toggle from '@/component/Toggle.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import CartOptions from '@/page/cart/CartOptions.vue';
	import DawnOrder from '@/custom/dawn/component/DawnOrder.vue';


	const { isMember, member, bom, router, loading, openOverlay } = useGlobalPageContext();
	const { number, optionText } = useFormatter();
	const cart = useCart();
	const route = useRoute();
	const wishedStore = useWishedStore();
	const { cartPacks, checkedCartItems, priceContextByPack, totalPriceContext, reload, checkAllCartItem } = await cart.context(isMember.value);

	useThirdPartyTracking().viewCart({
		isMobile: true,
		isTablet: false,
		isDesktop: false,
		cartItems: cartPacks.value
			.map(c => c.items)
			.flat()
			.map(cartPack => {
				return {
					goodsId: cartPack.goods_id,
					optionId: cartPack.option_id,
					goodsName: cartPack.goods.name,
					optionName: cartPack.option_name,
					quantity: cartPack.ea,
					price: cartPack.goods_sell_price + cartPack.option_extra_amount,
					discountedPrice: cartPack.goods_base_discounted_price + cartPack.option_extra_amount,
				};
			}),
	});
	const orderStore = useOrderStore();
	const cartItemOnModify = ref<CartItem|null>(null);
	const modifyContext = ref<CartItemModifyContext|null>(null);
	const hasCheckedBlocked = computed(() => checkedCartItems.value.some(_item => isBlockedItem(_item)));
	const hasInfluencerCheckedBlocked = computed(() => checkedCartItems.value.some(_item => !isPurchasableInfluencerItem(_item)));

	function isBlockedItem(_item: CartItem) {
		return _item.option_stock < 1 || _item.ea > _item.option_stock || _item.is_soldout;
	}

	function isPurchasableInfluencerItem(_item: CartItem) {
		return !_item.influencer_marketing
			|| (
				_item.influencer_marketing
				&& monsDate().isBefore(_item.influencer_marketing.sell_end_at)
				&& monsDate().isAfter(_item.influencer_marketing.sell_start_at)
			);
	}

	const onOrderPayment = () => {
		if (hasCheckedBlocked.value) {
			bom.confirm('선택한 상품이 품절이거나\n재고가 부족한 상품이 있습니다.\n해당 상품을 제외하시겠습니까?',
				(_is: boolean) => {
					if (_is) checkedCartItems.value = checkedCartItems.value.filter(_item => !isBlockedItem(_item));
				},
				{
					title: '품절/재고부족',
				},
			);

			return;
		}

		if (hasInfluencerCheckedBlocked.effect.fn()) {
			bom.confirm('선택한 상품중 구매불가한 상품이 있습니다. \n 해당 상품을 제외 후 구매하시겠습니까?',
				(_is: boolean) => {
					if (_is) checkedCartItems.value = checkedCartItems.value.filter(_item => isPurchasableInfluencerItem(_item));
				},
				{
					title: '구매불가',
				},
			);

			return;
		}

		const orderData = checkedCartItems.value.map((item) => {
			return {
				option_id: item.option_id,
				ea: item.ea,
				cart_id: item.cart_id,
				goods_id: item.goods.id,
				is_dawn_delivery: item.goods.is_dawn_delivery,
			};
		});

		orderProcess(orderData);
	};

	// 안내문구
	const isShowsSubmitTip = ref(true);
	const submitTipHtml = computed(() => {
		if (hasCheckedBlocked.value) return '<strong>품절/재고부족</strong> 상품이 포함되어 있습니다';

		if (hasInfluencerCheckedBlocked.value) return '<strong>구매불가</strong> 상품이 포함되어 있습니다';

		return '<strong>추가할인</strong>은 주문 시 적용됩니다';
	});

	watch(submitTipHtml, () => isShowsSubmitTip.value = true);



	const activeCartItemId = ref<number|null>(null);

	const uniqueCartGoodsIds = computed(() => [...new Set(cartPacks.value.flatMap(pack => pack.items).map((item) => item.goods_id))]);
	if (uniqueCartGoodsIds.value.length > 0) {
		wishedStore.check(uniqueCartGoodsIds.value);
	}
	const component = defineAsyncComponent(() => import('@/page/mypage/wishlist/product/folder/MyWishlistProductFolder.vue'));

	async function toggleWished(isWished: boolean, cartItem: CartItem) {
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
		if (isWished) {
			wishedStore.remove([cartItem.goods.id]);

			return;
		}

		openOverlay(component, {
			props: {
				goodsId: cartItem.goods.id,
			},
		});
	}

	async function fetchOptions(isActive: boolean, cartItem: CartItem) {
		activeCartItemId.value = isActive ? cartItem.cart_id : null;
		cartItemOnModify.value = null;
		if (!isActive) {
			modifyContext.value = null;

			return;
		}
		cartItemOnModify.value = cartItem;
		modifyContext.value = await cart.getModifyContext(cartItem);
		modifyContext.value.isSingleOption = modifyContext.value.has3DepthOption
			? false
			: modifyContext.value.options.length === 1 && modifyContext.value.options[0].sub.length === 1;
	}

	async function changeOption(code: number, amount: number) {
		if (!modifyContext.value) {
			return bom.alert('옵션 변경할 상품의 필수 옵션을 전부 선택해주세요.');
		}

		loading.show();
		try {
			await cart.modify(modifyContext.value.cartItem, code, amount);
			await reload();
			bom.alert('옵션이 변경 되었습니다', () => {
				closeContext();
			});
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}

	async function removeOne(cartItem: CartItem) {
		if (!cartItem) {
			return bom.alert('선택된 상품이 없습니다');
		}

		removeCartItem(cartItem);
	}

	async function removeSelected() {
		if (checkedCartItems.value.length < 1) {
			return bom.alert('선택된 상품이 없습니다');
		}

		removeCartItem(checkedCartItems.value);

	}

	async function removeCartItem(cartItem: CartItem|CartItem[]) {
		bom.confirm('선택한 상품을 삭제하시겠습니까?', async flag => {
			if (!flag) {
				return;
			}

			loading.show();
			try {
				await cart.remove(cartItem);
				bom.alert('삭제 되었습니다.');
				await reload();

				checkedCartItems.value = cartPacks.value.flatMap((pack) => pack.items).filter(_item => !isBlockedItem(_item));
			}
			catch (error) {
				useErrorAlert(error);
			}
			finally {
				loading.hide();
			}
		});
	}


	async function buy(item: CartItem) {
		const orderData = [{
			option_id: item.option_id,
			ea: item.ea,
			cart_id: item.cart_id,
			goods_id: item.goods.id,
			is_dawn_delivery: item.goods.is_dawn_delivery,
		}];

		if (item.option_stock < 1 || item.ea > item.option_stock) {
			return bom.alert('옵션 재고 수량이 부족합니다.');
		}

		orderProcess(orderData);
	}

	async function orderProcess(orderData: SelectedForOrder[]) {
		if (orderData.length < 1) {
			return bom.alert('주문할 상품을 선택해주세요.');
		}

		if (!isMember.value) {
			orderStore.temporarySelected = orderData;

			return bom.confirm('로그인이 필요합니다 \n로그인 페이지로 이동하시겠습니까?', (flag: boolean) => {
				if (flag) {
					router.push({
						name: 'Login',
						query: {
							redirect_to_after: 'order',
						},
					});
				}
			});
		}

		if (member.value && member.value.is_certificated === false) {
			orderStore.temporarySelected = orderStore.temporarySelected.concat(orderData);

			const component = defineAsyncComponent(() => import('@/page/auth/certificate/AuthCertificate.vue'));

			return openOverlay(component, {
				props: {
					needVerify: true,
					redirectPath: `${route.fullPath}`,
				},
				onClose: async () => {
					orderProcess(orderData);

					return;
				},
				onCancelClose: () => {
					return bom.alert('본인인증을 취소 하셨습니다.\n 본인인증 후 상품구매가 가능합니다.');
				},
			});
		}

		loading.show();

		try {
			const orderId = await orderStore.generateOrderId(orderData);

			router.push({
				name: 'Order',
				params: {
					id: orderId,
				},
			});
		}
		catch (e) {
			console.log(e);
		}
		finally {
			loading.hide();
		}
	}
	/** 장바구니 옵션 변경 컨텍스트 취소 */
	function closeContext() {
		activeCartItemId.value = null;
		modifyContext.value = null;
	}
</script>

<style lang="scss">
	// 하단버튼 모션
	.cart-button-enter-active,
	.cart-button-leave-active {
		transition: transform 0.3s;
	}

	.cart-button-enter-from,
	.cart-button-leave-to {
		transform: translateY(100%);
		pointer-events: none;
	}

	// 툴팁
	.cart-popover-enter-active,
	.cart-popover-leave-active {
		transition: 0.3s;
		transition-property: transform, opacity;
	}

	.cart-popover-enter-from,
	.cart-popover-leave-to {
		opacity: 0;
		transform: translate(-50%, 100%);
		transition-duration: 0.15s;
	}
</style>
