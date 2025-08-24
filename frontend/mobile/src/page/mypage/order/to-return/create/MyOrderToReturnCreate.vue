<template>
	<layout
		title="반품 전환"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="mm_process">
			<!-- 상품 선택 -->
			<div
				v-if="process.orderItems.isOn"
				class="mm_process-item S=process-on"
			>
				<!-- 주문목록 -->
				<article class="mm_order-item">
					<h5>
						<b>{{ date(switchReturnable.order.ordered_at, 'YYYY.MM.DD') }}</b>
						<strong>주문번호: {{ switchReturnable.order.order_id }}</strong>
					</h5>
					<div
						v-for="pack in switchReturnable.order.packs"
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
										v-model="selectedOrderItemSetIds"
										:value="orderItem.exchange_target_id"
										label="상품 선택"
										:label-on-blind="true"
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
												v-if="orderItem.items.length > 1"
												class="mm_product...footer-indent"
											>
												<p>반품 수량: {{ partialSelectedOrderItems[orderItem.exchange_target_id]?.length || 0 }}개</p>
												<a
													class="mm_btn T=sm T=line T=primary"
													href="#"
													@click.prevent="overlayMyOrderPick(orderItem)"
												>
													<b>부분 선택</b>
												</a>
											</div>
											<p class="text_point">
												사용 적립금<b><strong>{{ number(orderItem.total_point_used) }}</strong><sub>원</sub></b>
											</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</article>

				<!-- 반품신청 -->
				<div class="mm_inner">
					<div class="mm_foot">
						<div class="mm_btn_box">
							<button
								type="button"
								class="mm_btn T=primary"
								@click="processStep()"
							>
								<b>다음 단계로</b>
							</button>
						</div>
					</div>
					<div class="mm_note">
						<dropdown
							:is-active="true"
							icon-class="T=box"
						>
							<template #button>
								<i class="ico_info"></i><b>반품 주의사항</b>
							</template>
							<template #content>
								<ul>
									<li>반품 전환의 경우 수량 부분 선택이 불가능합니다.</li>
									<li>반품 전환하신 상품은 바로 반품 완료 처리가 진행됩니다.</li>
								</ul>
							</template>
						</dropdown>
					</div>
				</div>
			</div>

			<!-- 반품 사유 -->
			<div
				v-if="process.reason.isOn"
				class="mm_process-item S=process-on"
			>
				<div class="mm_inner">
					<h3 class="mm_heading m_popup-myclaim-title">
						<b>반품 사유를 확인하세요</b>
					</h3>
					<div class="m_popup-myclaim-reason">
						<ul>
							<li
								v-for="reason in returnReasons"
								:key="reason.code"
							>
								<label class="mm_form-radio">
									<input
										type="radio"
										:checked="switchReturnable.chosenExchangeReason.eng_label === reason.eng_label"
										disabled
									>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<i :class="`ico_my-${reason.icon_class_name}`">
											<i :class="reason.censure == 'orderer' ? 'ico_my-cancel' : 'ico_my-question'"></i>
										</i>
										<strong>{{ reason.label }}</strong>
										<span>{{ reason.censure === 'seller' ? '판매자' : '구매자' }} 반품비용 부담</span>
									</b>
								</label>
							</li>
						</ul>
						<div
							v-if="showReasonDetail"
							class="mm_syncer-reason S=radio-use"
						>
							<h6 class="mm_strapline">
								<b>상세사유</b><strong>(필수입력)</strong>
							</h6>
							<div class="mm_form-textarea">
								<label>
									<span class="textfield text_disabled">{{ switchReturnable.chosenExchangeReason.detail }}</span>
									<i class="bg_text"></i>
								</label>
							</div>
						</div>
					</div>
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_flex T=auto">
								<button
									type="button"
									class="mm_btn T=line T=light btn_back"
									@click="processStep(false)"
								>
									<i class="ico_page-prev"></i><b>이전으로</b>
								</button>
								<button
									type="button"
									class="mm_btn T=primary"
									@click="processStep()"
								>
									<b>다음으로</b>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- 환불관련정보 -->
			<div
				v-if="process.refund.isOn"
				class="mm_process-item S=process-on"
			>
				<div class="mm_inner">
					<h3 class="mm_heading m_popup-myclaim-title">
						<b>예상 환불금액을 확인하세요</b>
					</h3>

					<my-order-refund-details
						v-bind="{
							refundInfo,
							label: '반품 상품 주문 금액'
						}"
					></my-order-refund-details>
					<h6 class="mm_strapline">
						<b>환불 정보</b>
					</h6>
					<div class="mm_cost">
						<table>
							<tbody>
								<tr>
									<th scope="row">
										<b>{{ switchReturnable.order.payment_method_label }} 환불</b>
									</th>
									<td>
										<p class="text_price">
											<strong>{{ number(refundInfo.refund_price) }}</strong>
										</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>적립금 환불</b>
									</th>
									<td>
										<p class="text_point">
											<strong>{{ number(refundInfo.refund_point) }}</strong><sub>원</sub>
										</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="mm_note">
						<ul>
							<li>최종적으로 환불 받으실 금액은 상이할 수 있습니다.</li>
						</ul>
					</div>
					<template v-if="switchReturnable.order.require_refund_account">
						<h6 class="mm_strapline">
							<b>환불 계좌 관리</b>
						</h6>
						<div
							v-if="refundAccount"
							class="mm_order-refund"
						>
							<p class="text_bank">
								{{ refundAccount.bank_name }}
							</p>
							<p class="text_name">
								{{ refundAccount.owner_name }}
							</p>
							<p>{{ refundAccount.account_number }}</p>
							<a
								class="mm_btn T=xs T=dark"
								href="#"
								@click.prevent="overlayMyRefundUpdate"
							>
								<b>변경하기</b><i class="ico_link T=sm"></i>
							</a>
						</div>
						<!-- (D) 등록된 계좌가 없을 경우 노출합니다. -->

						<div
							v-else
							class="mm_order-refund-none"
						>
							<p>환불 계좌를 등록하세요</p>
							<a
								class="mm_btn T=dark"
								href="#"
								@click.prevent="overlayMyRefundCreate"
							><b>환불 계좌 등록하기</b></a>
						</div>

						<div class="mm_note">
							<ul>
								<li>입력하신 계좌 정보는 환불 목적으로만 이용되고 있습니다.</li>
							</ul>
						</div>
					</template>
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_flex T=auto">
								<button
									type="button"
									class="mm_btn T=line T=light btn_back"
									@click="processStep(false)"
								>
									<i class="ico_page-prev"></i><b>이전으로</b>
								</button>
								<a
									class="mm_btn T=primary"
									href="#"
									@click="apply"
								>
									<b>반품 전환하기</b>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, computed, defineAsyncComponent, watchEffect, watch } from 'vue';
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
	import MyOrderRefundDetails from '@/page/mypage/order/component/MyOrderRefundDetails.vue';

	const props = defineProps<{
		exchangeId: string
		exchangeTargetId: number
	}>();

	/** 전역 페이지 composable */
	const { bom, loading, router, openOverlay } = useGlobalPageContext();
	/** formatter composable */
	const { date, number, optionText } = useFormatter();
	/** my 주문 composable */
	const {

		defaultRefundInfo,
		getReturnReasons,
		getExchangeToReturnable,
		applyExchangeToReturn,
		getExchangeToReturnRefundInfo,
	} = useMyOrder();
	const { get: getMyRefundAccount, getBankCodes } = useMyRefundAccount();

	const [returnReasons, switchReturnable] = await Promise.all([
		getReturnReasons(),
		getExchangeToReturnable(props.exchangeId),
	]);

	const myRefundAccount = switchReturnable.order.require_refund_account ? await getMyRefundAccount() : null;

	/** 환불정보 */
	const refundInfo = ref(defaultRefundInfo);

	/** 환불계좌 */
	const refundAccount = ref(myRefundAccount);

	/** 은행코드 */
	const bankCodes = ref<BankCode[]>([]);

	/** form composable */
	const { form, validate } = useForm<ExchangeToReturnForm & {
		require_refund_account: 1|0
	}>(
		{
			exchange_id: props.exchangeId,
			exchange_target_ids: [],
			refund_account: {
				owner_name: myRefundAccount?.owner_name || '',
				bank_code: myRefundAccount?.bank_code || null,
				account_number: myRefundAccount?.account_number || '',
			},
			require_refund_account: switchReturnable.order.require_refund_account ? 1 : 0,
		},
		{
			rule: {},
			message: {
				'exchange_target_ids.required': ':param(을/를) 선택해주세요.',
				'refund_account.owner_name.requiredIf': ':param(을/를) 등록해주세요.',
				'refund_account.bank_code.requiredIf': ':param(을/를) 등록해주세요.',
				'refund_account.account_number.requiredIf': ':param(을/를) 등록해주세요.',
			},
		},
	);

	/** 선택된 주문묶음 */
	const selectedOrderItemSetIds = ref<number[]>([]);
	/** 부분선택된 주문상품 */
	const partialSelectedOrderItems = ref<Record<string, number[]>>({});

	// 상세사유 노출 여부 (교환시 선택한 사유가 상세사유 필수인 경우 노출)
	const showReasonDetail = computed<boolean>(() => {
		return returnReasons.find(reason => switchReturnable.chosenExchangeReason.eng_label == reason.eng_label)?.require_detail || false;
	});

	/** 유효성검사 규칙 */
	const baseValidationRules: {[ruleName: string]: Record<string, string[]>} = {
		order_item_ids: {
			'exchange_target_ids(반품 전환하실 상품)': ['required'],
		},
		refund: {
			'refund_account.owner_name(환불계좌)': ['requiredIf:require_refund_account,1'],
			'refund_account.bank_code(환불계좌)': ['requiredIf:require_refund_account,1'],
			'refund_account.account_number(환불계좌)': ['requiredIf:require_refund_account,1'],
		},
	};

	/** 반품전환 단계 */
	type SwitchReturnProcess = 'orderItems'|'reason'|'refund'
	const currentProcess = ref<SwitchReturnProcess>('orderItems');
	const process = ref<{
		[processName in SwitchReturnProcess]: {
			isOn: boolean
			rules: Record<string, string[]>
			next: Nullable<SwitchReturnProcess>,
			previous: Nullable<SwitchReturnProcess>
		}
	}>({
		orderItems: {
			isOn: true,
			rules: baseValidationRules.order_item_ids,
			next: 'reason',
			previous: null,
		},
		reason: {
			isOn: false,
			rules: {},
			next: 'refund',
			previous: 'orderItems',
		},
		refund: {
			isOn: false,
			rules: baseValidationRules.refund,
			next: null,
			previous: 'reason',
		},
	});

	/**
	 * 주문상품 선택
	 * @param orderItemSet
	 */
	function overlayMyOrderPick(orderItemSet: ExchangeToReturnableOrderItemSet) {
		const component = defineAsyncComponent(() => import('@/page/mypage/order/pick/MyOrderPick.vue'));

		return openOverlay(component, {
			props: {
				valueName: 'exchange_target_id',
				orderItemSet,
				legacySelected: partialSelectedOrderItems.value[orderItemSet.exchange_target_id],
			},
			onClose: (_value: { selected: number[] }) => {
				if (!_value.selected || _value.selected.length <= 0) {
					return;
				}

				partialSelectedOrderItems.value[orderItemSet.exchange_target_id] = _value.selected;
			},
		});
	}


	/** 환불계좌 등록 overlay open */
	async function overlayMyRefundCreate() {
		const component = defineAsyncComponent(() => import('@/page/mypage/refund/create/MyRefundCreate.vue'));

		if (!bankCodes.value.length) {
			bankCodes.value = await getBankCodes();
		}

		return openOverlay(component, {
			props: {
				bankCodes: bankCodes.value,
			},
			onClose: (_value: { refundAccount: RefundAccount }) => {
				if (!_value?.refundAccount) {
					return;
				}
				refundAccount.value = _value?.refundAccount;
			},
		});
	}

	/** 환불계좌 변경 overlay open */
	async function overlayMyRefundUpdate() {
		const component = defineAsyncComponent(() => import('@/page/mypage/refund/update/MyRefundUpdate.vue'));

		if (!bankCodes.value.length) {
			bankCodes.value = await getBankCodes();
		}

		return openOverlay(component, {
			props: {
				bankCodes: bankCodes.value,
				refundAccount,
			},
			onClose: (_value: { refundAccount: RefundAccount }) => {
				if (!_value?.refundAccount) {
					return;
				}
				refundAccount.value = _value?.refundAccount;
			},
		});
	}

	/** 단계 진행 */
	async function processStep(forward: boolean = true) {
		const nextStep = process.value[currentProcess.value].next;
		const previousStep = process.value[currentProcess.value].previous;

		if (forward && nextStep) {
			try {
				await validate(process.value[currentProcess.value].rules);
				process.value[currentProcess.value].isOn = false;
				process.value[nextStep].isOn = true;
				currentProcess.value = nextStep;
			}
			catch (e) {
				useErrorAlert(e);
			}
		}
		else if (!forward && previousStep) {
			process.value[currentProcess.value].isOn = false;
			process.value[previousStep].isOn = true;
			currentProcess.value = previousStep;
		}
	}

	/** 반품전환 신청 */
	async function apply() {
		try {
			await validate(Object.assign(
				baseValidationRules.order_item_ids,
				baseValidationRules.refund,
			));
		}
		catch (e) {
			useErrorAlert(e);

			return;
		}

		bom.confirm('주문 반품전환을 진행하시겠습니까?', async (flag) => {
			if (!flag) return;

			loading.show();
			try {
				const returnId = await applyExchangeToReturn(form.value);
				router.replace({
					name: 'MyOrderToReturnSuccess',
					params: {
						exchange_id: props.exchangeId,
						return_id: returnId,
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
	switchReturnable.order.packs.forEach(pack => {
		pack.order_items.forEach(set => {
			if (set.items.length == 1) {
				partialSelectedOrderItems.value[set.exchange_target_id] = [set.exchange_target_id];
			}
			else {
				partialSelectedOrderItems.value[set.exchange_target_id] = [];
			}

			set.items.forEach(item => {
				if (item.exchange_target_id == props.exchangeTargetId) {
					partialSelectedOrderItems.value[set.exchange_target_id] = [props.exchangeTargetId];
					selectedOrderItemSetIds.value = [set.exchange_target_id];
				}
			});
		});
	});

	/** 선택한 주문상품 form에 동기화 */
	watchEffect(() => {
		form.value.exchange_target_ids = selectedOrderItemSetIds.value
			.map((setId) => partialSelectedOrderItems.value[setId])
			.flat(1);
	});

	/** 환불계좌 form에 동기화 */
	watch(refundAccount, (newAccount) => {
		if (!newAccount) {
			return;
		}

		form.value.refund_account.account_number = newAccount.account_number;
		form.value.refund_account.owner_name = newAccount.owner_name;
		form.value.refund_account.bank_code = newAccount.bank_code;
	});

	/** 환불정보 조회 */
	watch([
		() => process.value.refund.isOn,
	], async (to) => {
		if (!to) {
			return;
		}

		if (form.value.exchange_target_ids.length < 1) {
			refundInfo.value = defaultRefundInfo;

			return;
		}

		try {
			refundInfo.value = await getExchangeToReturnRefundInfo(props.exchangeId, form.value.exchange_target_ids);
		}
		catch (e) {
			useErrorAlert(e);
			refundInfo.value = defaultRefundInfo;
		}
	});
</script>