<template>
	<layout
		title="주문 취소"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<!-- 주문목록 -->
		<!-- (D) '입금 대기' 상태일 경우 상단에 상품선택 체크박스는 노출하지 않습니다. -->
		<article class="mm_order-item">
			<h5>
				<b>{{ date(cancelableOrder.ordered_at, 'YYYY.MM.DD') }}</b>
				<strong>주문번호: {{ cancelableOrder.order_id }}</strong>
			</h5>
			<div
				v-for="pack in cancelableOrder.packs"
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
								v-if="partialCancelable"
								v-model="selectedOrderItemSetIds"
								:value="orderItem.id"
								label="상품 선택"
								label-on-blind
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
										>
										</lazyload>
										<figcaption>
											<p class="text_status">
												{{ orderItem.order_status_label }}
											</p>
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
								<div class="mm_product-item-footer">
									<div
										v-if="partialCancelable && orderItem.items.length > 1"
										class="mm_product...footer-indent"
									>
										<p>취소 수량: {{ partialSelectedOrderItems[orderItem.id]?.length || 0 }}개</p>
										<a
											class="mm_btn T=sm T=line T=primary"
											href="#"
											@click.prevent="overlayMyOrderPick(orderItem)"
										>
											<b>부분 선택</b>
										</a>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</article>

		<!-- 취소신청 -->
		<div class="mm_inner m_popup-myclaim-cancel">
			<h6 class="mm_strapline">
				<b>취소 사유</b>
			</h6>
			<div class="mm_form-select">
				<form-select v-model.number="form.cancel_reason_code">
					<option>취소 사유를 선택하세요</option>
					<option
						v-for="reason in cancelReasons"
						:key="reason.code"
						:value="reason.code"
					>
						{{ reason.label }}
					</option>
				</form-select>
			</div>
			<div
				v-if="reasonDetailRequired"
				class="mm_syncer-reason S=option-use"
			>
				<form-textarea
					v-model="form.cancel_reason_detail"
					placeholder="취소 사유를 입력하세요(필수입력)"
					:byte="2000"
				></form-textarea>
			</div>
			<template v-if="cancelableOrder.is_paid">
				<h6 class="mm_strapline">
					<b>환불 정보</b>
				</h6>
				<div class="mm_cost">
					<table>
						<tbody>
							<tr>
								<th scope="row">
									<b>{{ cancelableOrder.payment_method_label }} 환불</b>
								</th>
								<td>
									<p class="text_price">
										<strong>{{ number(totalRefundAmount) }}</strong>
									</p>
								</td>
							</tr>
							<tr
								v-for="detail in refundInfo.calculate_details"
								:key="detail.label"
							>
								<th scope="row">
									<strong>{{ detail.label }}</strong>
								</th>
								<td>
									<p class="text_price">
										{{ detail.is_subtracted ? '-' : '+' }}
										<strong>{{ number(detail.amount) }}</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>환불 예상금액</b>
								</th>
								<td>
									<p class="text_price mm_text-variable">
										<strong>{{ number(refundInfo.refund_price) }}</strong>
									</p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</template>
			<template v-if="form.require_refund_account">
				<h6 class="mm_strapline">
					<b>예금주</b>
				</h6>
				<form-text
					v-model="form.refund_account_owner_name"
					placeholder="예금주명을 입력하세요"
				></form-text>
				<h6 class="mm_strapline">
					<b>환불 은행</b>
				</h6>
				<div class="mm_form-select">
					<form-select v-model="form.refund_bank_code">
						<option>은행을 선택하세요</option>
						<option
							v-for="bank in bankCodes"
							:key="bank.code"
							:value="bank.code"
						>
							{{ bank.label }}
						</option>
					</form-select>
				</div>
				<h6 class="mm_strapline">
					<b>환불 계좌</b>
				</h6>
				<form-text
					v-model="form.refund_account_number"
					input-mode="number"
					placeholder="계좌번호를 입력하세요(숫자만 입력)"
				></form-text>
			</template>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
						@click="apply"
					>
						<b>취소 신청하기</b>
					</button>
				</div>
			</div>
			<div class="mm_note">
				<dropdown
					:is-active="true"
					icon-class="T=box"
				>
					<template #button>
						<i class="ico_info"></i><b>주문 취소 주의사항</b>
					</template>
					<template #content>
						<ul>
							<li>무통장 입금을 제외한 나머지 결제 수단의 경우 원 결제 수단 취소로 진행됩니다.</li>
							<li>휴대폰 주문은 결제한 당월이 지날 경우 원 결제 취소가 불가합니다.</li>
							<li>에스크로 결제 건은 부분 취소가 불가능하고, 전체 취소만 가능합니다.</li>
						</ul>
					</template>
				</dropdown>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref, computed, watch, watchEffect } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useMyOrder } from '$/composables/useMyOrder';
	import { useMyRefundAccount } from '$/composables/useMyRefundAccount';
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import FormText from '@/component/form/FormText.vue';
	import FormTextarea from '@/component/form/FormTextarea.vue';

	const props = defineProps<{
		orderId: string
		orderItemId: number
	}>();


	/** 전역 페이지 composable */
	const { bom, loading, router, openOverlay } = useGlobalPageContext();
	/** formatter composable */
	const { date, number, optionText } = useFormatter();
	/** my 주문 composable */
	const {
		defaultRefundInfo,
		getCancelReasons,
		getCancelables,
		getCancelRefundInfo,
		getRefundCalculations,
		applyCancel,
	} = useMyOrder();

	const { getBankCodes } = useMyRefundAccount();

	const [cancelReasons, cancelableOrder, bankCodes] = await Promise.all([
		getCancelReasons(),
		getCancelables(props.orderId, props.orderItemId),
		getBankCodes(),
	]);

	/** 환불정보 */
	const refundInfo = ref(defaultRefundInfo);

	/** form composable */
	const { form, validate } = useForm<CancelForm & {
		require_refund_account: 1|0
	}>(
		{
			order_id: props.orderId,
			order_item_ids: [],
			cancel_reason_code: null,
			cancel_reason_detail: '',
			refund_account_owner_name: '',
			refund_bank_code: null,
			refund_account_number: '',
			require_refund_account: cancelableOrder.require_refund_account ? 1 : 0,
		},
		{
			rule: {
				'order_item_ids(주문 취소하실 상품)': ['required'],
				'cancel_reason_code(주문 취소 사유)': ['required', `in:${cancelReasons.map(reason => reason.code).join(',')}`],
				'cancel_reason_detail(주문 취소 사유)': [`requiredIf:cancel_reason_code,${cancelReasons.filter(reason => reason.require_detail).map(reason => reason.code).join(',')}`],
				'refund_account_owner_name(환불계좌)': ['requiredIf:require_refund_account,1'],
				'refund_bank_code(환불계좌)': ['requiredIf:require_refund_account,1'],
				'refund_account_number(환불계좌)': ['requiredIf:require_refund_account,1'],
			},
			message: {
				'order_item_ids.required': ':param(을/를) 선택해주세요.',
				'cancel_reason_code.required': ':param(을/를) 선택해주세요.',
				'cancel_reason_code.in': ':param(이/가) 올바르지 않습니다.',
				'refund_account_owner_name.requiredIf': ':param(을/를) 등록해주세요.',
				'refund_bank_code.requiredIf': ':param(을/를) 등록해주세요.',
				'refund_account_number.requiredIf': ':param(을/를) 등록해주세요.',
			},
		},
	);

	/** 선택된 주문묶음 */
	const selectedOrderItemSetIds = ref<number[]>([]);
	/** 부분선택가능 */
	const partialCancelable = ref(cancelableOrder.is_paid && cancelableOrder.is_partial_cancelable);
	/** 사유상세 필요여부 */
	const reasonDetailRequired = computed(() => cancelReasons.find(reason => reason.code === form.value.cancel_reason_code)?.require_detail || false);
	/** 총 환불금액 */
	const totalRefundAmount = computed(() => getRefundCalculations(refundInfo.value).totalRefund);

	/** 부분선택된 주문상품 */
	const partialSelectedOrderItems = ref<Record<string, number[]>>({});
	// 취소신청 가능여부 (입금대기주문 or 적립금 제외 환불금액 0원 이상)
	const isCancelable = computed(() => !cancelableOrder.is_paid || refundInfo.value.refund_price >= 0);

	/** 주문상품 선택 overlay open */
	function overlayMyOrderPick(orderItemSet: CancelableOrderItemSet) {
		const component = defineAsyncComponent(() => import('@/page/mypage/order/pick/MyOrderPick.vue'));

		return openOverlay(component, {
			props: {
				orderItemSet,
				legacySelected: partialSelectedOrderItems.value[orderItemSet.id],
			},
			onClose: (_value: { selected: number[] }) => {
				if (!_value.selected || _value.selected.length <= 0) {
					return;
				}

				partialSelectedOrderItems.value[orderItemSet.id] = _value.selected;
			},
		});
	}
	async function apply() {
		if (!isCancelable.value) {
			bom.alert('적립금을 제외한 환불금액이 0원 이하일 경우 취소 신청이 불가합니다.');
		}

		try {
			await validate();
		}
		catch (e) {
			useErrorAlert(e);

			return;
		}

		bom.confirm('주문 취소를 진행하시겠습니까?', async (flag) => {
			if (!flag) return;

			loading.show();
			try {
				const cancelIds = await applyCancel(form.value);
				router.replace({
					name: 'GuestOrderCancelSuccess',
					params: {
						order_id: props.orderId,
						cancel_ids: cancelIds,
					},
				});
			}
			catch (e) {
				useErrorAlert(e);
			}
			finally {
				loading.hide();
			}
		});
	}

	/** 상품 default 선택처리 */
	if (partialCancelable.value) {
		cancelableOrder.packs.forEach(pack => {
			pack.order_items.forEach(set => {
				if (set.items.length == 1) {
					partialSelectedOrderItems.value[set.id] = [set.id];
				}
				else {
					partialSelectedOrderItems.value[set.id] = [];
				}

				set.items.forEach(item => {
					if (item.id == props.orderItemId) {
						partialSelectedOrderItems.value[set.id] = [props.orderItemId];
						selectedOrderItemSetIds.value = [set.id];
					}
				});
			});
		});
	}
	else {
		cancelableOrder.packs.forEach(pack => {
			pack.order_items.forEach(set => {
				set.items.forEach(item => {
					partialSelectedOrderItems.value[set.id] = (partialSelectedOrderItems.value[set.id] || [])
						.filter(partial => partial != item.id)
						.concat([item.id]);
					selectedOrderItemSetIds.value = selectedOrderItemSetIds.value
						.filter(setId => setId != set.id)
						.concat([set.id]);
				});
			});
		});
	}

	/** 선택한 주문상품 form에 동기화 */
	watchEffect(() => {
		form.value.order_item_ids = selectedOrderItemSetIds.value
			.map((setId) => partialSelectedOrderItems.value[setId])
			.flat(1);
	});


	/** 환불정보 조회 */
	if (cancelableOrder.is_paid) {
		watch([
			() => form.value.order_item_ids,
			() => form.value.cancel_reason_code,
		], async ([itemIds, reason]) => {
			if (!reason || itemIds.length < 1) {
				refundInfo.value = defaultRefundInfo;

				return;
			}

			try {
				refundInfo.value = await getCancelRefundInfo(props.orderId, itemIds, reason);
			}
			catch (e) {
				useErrorAlert(e);
				refundInfo.value = defaultRefundInfo;
			}
		});
	}
</script>