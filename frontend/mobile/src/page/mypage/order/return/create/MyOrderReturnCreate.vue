<template>
	<layout
		title="주문 반품"
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
						<b>{{ date(returnable.order.ordered_at, 'YYYY.MM.DD') }}</b>
						<strong>주문번호: {{ returnable.order.order_id }}</strong>
					</h5>
					<div
						v-for="pack in returnable.order.packs"
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
										:value="orderItem.id"
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
												<p>반품 수량: {{ partialSelectedOrderItems[orderItem.id]?.length || 0 }}개</p>
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
									<li>주문 제작하신 상품 및 해외 배송 상품은 반품이 불가하여 리스트에 노출되지 않습니다.</li>
									<li>반품은 배송 완료 이후 7일 이내 신청 가능합니다.</li>
									<li>반품 사유별 배송비 부담이 상이합니다.</li>
									<li>묶음 반품의 경우 동일한 업체에 한해서 가능합니다.</li>
									<li>반품하실 상품을 발송하기 전에 한해서 반품 철회가 가능합니다.</li>
								</ul>
							</template>
						</dropdown>
					</div>
				</div>
			</div>

			<!-- 반품사유 -->
			<div
				v-if="process.reason.isOn"
				class="mm_process-item S=process-on"
			>
				<div class="mm_inner">
					<h3 class="mm_heading m_popup-myclaim-title">
						<b>반품 사유를 선택하세요</b>
					</h3>
					<div class="m_popup-myclaim-reason">
						<ul>
							<li
								v-for="reason in returnReasons"
								:key="reason.code"
							>
								<form-radio
									v-model="form.return_reason_code"
									name="dev_radio-reason"
									:value="reason.code"
								>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<i :class="`ico_my-${reason.icon_class_name}`">
											<i :class="reason.censure == 'orderer' ? 'ico_my-cancel' : 'ico_my-question'"></i>
										</i>
										<strong>{{ reason.label }}</strong>
										<span>{{ reason.censure === 'seller' ? '판매자' : '구매자' }} 반품비용 부담</span>
									</b>
								</form-radio>
							</li>
						</ul>
						<div
							v-if="reasonDetailRequired"
							class="mm_syncer-reason S=radio-use"
						>
							<h6 class="mm_strapline">
								<b>상세사유</b><strong>(필수입력)</strong>
							</h6>
							<form-textarea
								v-model="form.return_reason_detail"
								placeholder="상세 사유를 입력하세요"
								:byte="2000"
							></form-textarea>
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
									<b>다음 단계로</b>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 반품사유 -->

			<!-- 반품방법 -->
			<div
				v-if="process.retrieve.isOn"
				class="mm_process-item S=process-on"
			>
				<div class="mm_inner">
					<h3 class="mm_heading m_popup-myclaim-title">
						<b>수거방법을 선택하세요</b>
					</h3>
					<div class="m_popup-myclaim-way">
						<ul>
							<li
								v-for="retrieveMethod in returnable.availableRetrieveMethods"
								:key="retrieveMethod.code"
							>
								<form-radio
									v-model="form.retrieve_method_code"
									name="dev_radio-send"
									:value="retrieveMethod.code"
									@change.passive="() => {
										form.retrieve_invoice!.delivery_company = '';
										form.retrieve_invoice!.invoice_number = '';
									}"
								>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<span class="text_label">{{ retrieveMethod.is_retrieve_by_orderer ? '직접 보냈어요' : '수거하러 와주세요' }}</span>
									</b>
								</form-radio>
								<template v-if="form.retrieve_method_code == retrieveMethod.code">
									<div
										v-if="isRetrievedByOrderer"
										class="mm_syncer-way-already S=radio-use"
									>
										<h6 class="mm_strapline">
											<b>발송한 택배사</b>
										</h6>
										<form-select v-model="form.retrieve_invoice.delivery_company">
											<option>택배사를 선택하세요</option>
											<option
												v-for="deliveryCompany in deliveryCompanies"
												:key="deliveryCompany.code"
												:value="deliveryCompany.code"
											>
												{{ deliveryCompany.name }}
											</option>
										</form-select>
										<h6 class="mm_strapline">
											<b>송장번호</b>
										</h6>
										<form-text
											v-model="form.retrieve_invoice.invoice_number"
											:max-length="50"
											input-mode="number"
											placeholder="송장번호를 입력하세요"
										></form-text>
										<div class="mm_note">
											<ul>
												<li>택배사에 직접 접수 후 운송장번호를 입력해주세요</li>
											</ul>
										</div>
									</div>
									<div
										v-else
										class="mm_syncer-way-yet S=radio-use"
									>
										<div class="mm_order-info">
											<table>
												<caption>반품 수거지 정보</caption>
												<tbody>
													<tr>
														<th scope="row">
															<b>보내는 분</b>
														</th>
														<td>{{ form.retrieve_from?.name }}</td>
													</tr>
													<tr>
														<th scope="row">
															<b>휴대폰 번호</b>
														</th>
														<td>{{ form.retrieve_from?.tel }}</td>
													</tr>
													<tr>
														<th scope="row">
															<b>주소</b>
														</th>
														<td>{{ form.retrieve_from?.zip_code }}<br>{{ `${form.retrieve_from?.base_address} ${form.retrieve_from?.detail_address}` }}</td>
													</tr>
												</tbody>
											</table>
											<a
												class="mm_btn T=xs T=line btn_address-change"
												href="#"
												@click.prevent="overlayAddress"
											>
												<b>주소변경</b>
											</a>
										</div>
									</div>
								</template>
							</li>
						</ul>
						<div
							v-if="!isRetrievedByOrderer"
							class="mm_syncer-way-yet S-radio-use"
						>
							<div class="mm_note T=bg">
								<!-- (D) 굿스플로 사용하는 브랜드 관리자 상품일 경우 노출합니다. -->
								<ul v-if="returnable.availableRetrieveMethods.find(method => method.is_auto_retrieve)">
									<li>배송비 관련 금액은 반품 완료 시 환불 예정 금액에서 차감됩니다.</li>
									<li>배송비 관련 금액을 동봉하지 마세요.</li>
									<li>상품은 착불로 발송해주세요.</li>
									<li>본 상품은 택배사에 <strong>자동으로 반품/수거 접수</strong>됩니다.</li>
								</ul>
								<!-- (D) 굿스플로 사용하지 않는 브랜드 관리자 상품일 경우 노출합니다 -->
								<ul v-else>
									<li>반품 택배비는 환불 예정 금액에서 차감됩니다.</li>
									<li>반품 택배비를 동봉하지 말아주세요.</li>
									<li>상품은 착불로 발송바랍니다.</li>
									<li>본 상품은 <strong>판매처에서 반품/수거 접수</strong>됩니다.</li>
									<li><strong>3일 이내 회수되지 않을 경우</strong> 해당 택배사 또는 쇼핑몰 고객센터로 문의바랍니다.</li>
									<li>회수 시 발급된 송장번호는 <strong>반품 상세내역에서 등록</strong>바랍니다.</li>
								</ul>
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
									<b>다음 단계로</b>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 반품방법 -->

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
							label: '총 결제금액'
						}"
					></my-order-refund-details>
					<div class="mm_note">
						<ul>
							<li>초도 배송비를 지불하셨을 경우 귀책 사유 관계 없이 면제 배송비가 부과되지 않습니다.</li>
						</ul>
					</div>
					<h6 class="mm_strapline">
						<b>환불 정보</b>
					</h6>
					<div class="mm_cost">
						<table>
							<tbody>
								<tr>
									<th scope="row">
										<b>{{ returnable.order.payment_method_label }} 환불</b>
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
					<template v-if="returnable.order.require_refund_account">
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
								<button
									type="button"
									class="mm_btn T=primary"
									@click="apply"
								>
									<b>반품 신청하기</b>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 환불관련정보 -->
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, watch, defineAsyncComponent, computed, watchEffect } from 'vue';
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
	import FormRadio from '@/component/form/FormRadio.vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import FormText from '@/component/form/FormText.vue';
	import FormTextarea from '@/component/form/FormTextarea.vue';
	import MyOrderRefundDetails from '@/page/mypage/order/component/MyOrderRefundDetails.vue';

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
		getReturnReasons,
		getReturnable,
		getReturnRefundInfo,
		applyReturn,
		getDeliveryCompanies,
		validateInvoice,
	} = useMyOrder();

	const { get: getMyRefundAccount, getBankCodes } = useMyRefundAccount();

	const [returnReasons, returnable, deliveryCompanies] = await Promise.all([
		getReturnReasons(),
		getReturnable(props.orderId, props.orderItemId),
		getDeliveryCompanies(),
	]);

	const myRefundAccount = returnable.order.require_refund_account ? await getMyRefundAccount() : null;

	/** 환불정보 */
	const refundInfo = ref(defaultRefundInfo);

	/** 환불계좌 */
	const refundAccount = ref(myRefundAccount);

	/** 은행코드 */
	const bankCodes = ref<BankCode[]>([]);

	/** form composable */
	const { form, validate } = useForm<ReturnForm & {
		is_self_retrieve: 1|0;
		require_refund_account: 1|0
	}>(
		{
			order_id: props.orderId,
			order_item_ids: [],
			return_reason_code: returnReasons[0].code,
			return_reason_detail: '',
			retrieve_method_code: returnable.availableRetrieveMethods[0].code,
			retrieve_invoice: {
				delivery_company: '',
				invoice_number: '',
			},
			retrieve_from: {
				...returnable.order.shipping_address,
			},
			refund_account: {
				owner_name: refundAccount.value?.owner_name || '',
				bank_code: refundAccount.value?.bank_code || null,
				account_number: refundAccount.value?.account_number || '',
			},
			is_self_retrieve: 0,
			require_refund_account: returnable.order.require_refund_account ? 1 : 0,
		},
		{
			rule: {},
			message: {
				'order_item_ids.required': ':param(을/를) 선택해주세요.',
				'return_reason_code.in': ':param(이/가) 올바르지 않습니다.',
				'return_reason_code.required': ':param(을/를) 선택해주세요.',
				'retrieve_invoice.delivery_company.requiredIf': ':param(을/를) 선택해주세요.',
				'retrieve_invoice.invoice_number.number': ':param(은/는) 숫자만 입력가능합니다.',
				'refund_account.owner_name.requiredIf': ':param(을/를) 등록해주세요.',
				'refund_account.bank_code.requiredIf': ':param(을/를) 등록해주세요.',
				'refund_account.account_number.requiredIf': ':param(을/를) 등록해주세요.',
			},
		},
	);

	/** 사유상세 필요여부 */
	const reasonDetailRequired = computed(() => returnReasons.find(reason => reason.code === form.value.return_reason_code)?.require_detail || false);
	/** 주문자회수 여부 */
	const isRetrievedByOrderer = computed<boolean>(() => {
		return returnable.availableRetrieveMethods.find(method => form.value.retrieve_method_code == method.code)?.is_retrieve_by_orderer === true;
	});

	/** 선택된 주문묶음 */
	const selectedOrderItemSetIds = ref<number[]>([]);
	/** 부분선택된 주문상품 */
	const partialSelectedOrderItems = ref<Record<string, number[]>>({});

	/** 유효성검사 규칙 */
	const baseValidationRules: {[ruleName: string]: Record<string, string[]>} = {
		order_item_ids: {
			'order_item_ids(주문 반품하실 상품)': ['required'],
		},
		reason: {
			'return_reason_code(주문 반품 사유)': ['required'],
			'return_reason_detail(주문 반품 사유)': [`requiredIf:return_reason_code,${returnReasons.filter(reason => reason.require_detail).map(reason => reason.code).join(',')}`],
		},
		retrieve: {
			// 반품송장정보
			'retrieve_invoice.delivery_company(택배사)': ['requiredIf:is_self_retrieve,1'],
			'retrieve_invoice.invoice_number(송장번호)': ['requiredIf:is_self_retrieve,1'],
			// 반품수거지 정보
			'retrieve_from.name(반품 수거지 주문자)': ['requiredIf:is_self_retrieve,0', 'maxLength:50'],
			'retrieve_from.tel(반품 수거지 연락처)': ['requiredIf:is_self_retrieve,0', 'number', 'maxLength:12'],
			'retrieve_from.zip_code(반품 수거지 우편번호)': ['requiredIf:is_self_retrieve,0'],
			'retrieve_from.base_address(반품 수거지 주소)': ['requiredIf:is_self_retrieve,0'],
			'retrieve_from.detail_address(반품 수거지 상세주소)': ['requiredIf:is_self_retrieve,0', 'maxLength:100'],
		},
		refund: {
			'refund_account.owner_name(환불계좌)': ['requiredIf:require_refund_account,1'],
			'refund_account.bank_code(환불계좌)': ['requiredIf:require_refund_account,1'],
			'refund_account.account_number(환불계좌)': ['requiredIf:require_refund_account,1'],
		},
	};

	/** 반품 단계 */
	type ReturnProcess = 'orderItems'|'reason'|'retrieve'|'refund'
	const currentProcess = ref<ReturnProcess>('orderItems');
	const process = ref<{
		[processName in ReturnProcess]: {
			isOn: boolean
			rules: Record<string, string[]>
			next: Nullable<ReturnProcess>,
			previous: Nullable<ReturnProcess>
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
			rules: baseValidationRules.reason,
			next: 'retrieve',
			previous: 'orderItems',
		},
		retrieve: {
			isOn: false,
			rules: baseValidationRules.retrieve,
			next: 'refund',
			previous: 'reason',
		},
		refund: {
			isOn: false,
			rules: baseValidationRules.refund,
			next: null,
			previous: 'retrieve',
		},
	});

	/**
	 * 배송지 변경
	 */
	function overlayAddress() {
		const component = defineAsyncComponent(() => import('@/page/address/Address.vue'));

		return openOverlay(component, {
			onClose: async (_value: { newAddress: MyShippingAddressDetail }) => {
				const newAddress = _value.newAddress;
				if (!newAddress) {
					return;
				}

				form.value.retrieve_from = {
					...newAddress,
				};
			},
		});
	}

	/**
	 * 주문상품 선택
	 * @param orderItemSet
	 */
	function overlayMyOrderPick(orderItemSet: ReturnableOrderItemSet) {
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
				if (currentProcess.value == 'retrieve' && isRetrievedByOrderer.value) {
					await validateInvoice(form.value.retrieve_invoice);
				}
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

	/** 반품 신청 */
	async function apply() {
		try {
			await validate(Object.assign(
				baseValidationRules.order_item_ids,
				baseValidationRules.reason,
				baseValidationRules.retrieve,
				baseValidationRules.refund,
			));
		}
		catch (e) {
			useErrorAlert(e);

			return;
		}

		bom.confirm('주문 반품을 진행하시겠습니까?', async (flag) => {
			if (!flag) return;

			loading.show();
			try {
				const returnIds = await applyReturn(form.value);
				router.replace({
					name: 'MyOrderReturnSuccess',
					params: {
						order_id: props.orderId,
						return_ids: returnIds,
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
	returnable.order.packs.forEach(pack => {
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

	/** 선택한 주문상품 form에 동기화 */
	watchEffect(() => {
		form.value.order_item_ids = selectedOrderItemSetIds.value
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

		if (!form.value.return_reason_code || form.value.order_item_ids.length < 1 || !form.value.retrieve_method_code) {
			refundInfo.value = defaultRefundInfo;

			return;
		}

		try {
			refundInfo.value = await getReturnRefundInfo(props.orderId, {
				order_item_ids: form.value.order_item_ids,
				return_reason_code: form.value.return_reason_code,
				retrieve_method: form.value.retrieve_method_code,
				retrieve_zip_code: form.value.retrieve_from?.zip_code || '',
				retrieve_base_address: form.value.retrieve_from?.base_address || '',
				retrieve_detail_address: form.value.retrieve_from?.base_address || '',
			});
		}
		catch (e) {
			useErrorAlert(e);
			refundInfo.value = defaultRefundInfo;
		}
	});

	/** 주문자 회수 여부 FORM 에 적용 */
	watch(isRetrievedByOrderer, () => {
		form.value.is_self_retrieve = isRetrievedByOrderer.value ? 1 : 0;
	}, {
		immediate: true,
	});
</script>