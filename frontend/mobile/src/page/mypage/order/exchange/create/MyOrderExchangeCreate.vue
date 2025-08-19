<template>
	<layout
		title="주문 교환"
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
						<b>{{ date(exchangeable.order.ordered_at, 'YYYY.MM.DD') }}</b>
						<strong>주문번호: {{ exchangeable.order.order_id }}</strong>
					</h5>
					<div
						v-for="pack in exchangeable.order.packs"
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
										v-model="orderItemSelectForm.orderItemSetIds"
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
											<div class="mm_product...footer-indent">
												<p>교환 수량</p>
												<form-select
													v-model="orderItemSelectForm.exchangeEas[orderItem.id]"
													class="T=sm T=shortest"
												>
													<option
														v-for="ea in orderItem.items.length"
														:key="ea"
														:value="ea"
													>
														{{ ea }}
													</option>
												</form-select>
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

				<!-- 교환신청 -->
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
								<i class="ico_info"></i><b>교환 주의사항</b>
							</template>
							<template #content>
								<ul>
									<li>주문 제작하신 상품 및 해외 배송 상품은 교환이 불가하여 리스트에 노출되지 않습니다.</li>
									<li>교환은 배송 완료 이후 7일 이내 신청 가능합니다.</li>
									<li>교환 사유별 배송비 부담이 상이합니다.</li>
									<li>묶음 교환의 경우 동일한 업체에 한해서 가능합니다.</li>
									<li>교환하실 상품을 발송하기 전에 한해서 교환 철회가 가능합니다.</li>
								</ul>
							</template>
						</dropdown>
					</div>
				</div>
			</div>

			<!-- 교환사유 -->
			<div
				v-if="process.reason.isOn"
				class="mm_process-item S=process-on"
			>
				<div class="mm_inner">
					<h3 class="mm_heading m_popup-myclaim-title">
						<b>교환 사유를 선택하세요</b>
					</h3>
					<div class="m_popup-myclaim-reason">
						<ul>
							<li
								v-for="reason in exchangeReasons"
								:key="reason.code"
							>
								<form-radio
									v-model="form.reason_code"
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
								v-model="form.reason_detail"
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
			<!-- 교환사유 -->

			<!-- 옵션변경 -->
			<div
				v-if="process.option.isOn"
				class="mm_process-item S=process-on"
			>
				<h3 class="mm_heading m_popup-myclaim-title">
					<b>변경할 옵션을 선택하세요</b>
				</h3>
				<div class="mm_order-item">
					<div
						v-for="pack in selectedPacks"
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
													<p class="text_option">
														{{ optionText(orderItem.goods.option_name) }} / {{ orderItem.goods.ea }}개
													</p>
												</figcaption>
											</figure>
										</mm-link>
										<div class="mm_product-item-footer">
											<div class="mm_product...footer-indent">
												<a
													class="mm_btn T=sm T=line T=primary"
													href="#"
													@click.prevent="overlayMyOrderExchangeCreateOption(orderItem.items)"
												>
													<b>옵션 변경</b>
												</a>
											</div>

											<template
												v-for="partialItem in orderItem.items"
												:key="partialItem.id"
											>
												<p
													v-if="partialItem.exchange_option"
													class="text_changed"
												>
													<strong class="mm_text-variable">변경된 옵션</strong>
													<span>{{ optionText(partialItem.exchange_option.option_name) }} / 1개</span>
												</p>
											</template>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="mm_inner">
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

			<!-- 교환방법 -->
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
								v-for="retrieveMethod in exchangeable.availableRetrieveMethods"
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
												@click.prevent="overlayAddress('retrieve_from')"
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
								<ul v-if="exchangeable.availableRetrieveMethods.find(method => method.is_auto_retrieve)">
									<li>배송비 관련 금액이 발생될 경우 추가 결제가 진행됩니다.</li>
									<li>배송비 관련 금액을 동봉하지 말아주세요.</li>
									<li>상품은 착불로 발송바랍니다.</li>
									<li>본 상품은 택배사에 <strong>자동으로 교환/수거 접수</strong>됩니다.</li>
								</ul>
								<!-- (D) 굿스플로 사용하지 않는 브랜드 관리자 상품일 경우 노출합니다 -->
								<ul v-else>
									<li>배송비 관련 금액이 발생될 경우 추가 결제가 진행됩니다.</li>
									<li>배송비 관련 금액을 동봉하지 말아주세요.</li>
									<li>상품은 착불로 발송바랍니다.</li>
									<li>본 상품은 <strong>판매처에서 교환/수거 접수</strong>됩니다.</li>
									<li><strong>3일 이내 회수되지 않을 경우</strong> 해당 택배사 또는 쇼핑몰 고객센터로 문의하세요.</li>
									<li>회수 시 발급된 송장번호는 <strong>교환 상세내역에서 등록</strong>하세요.</li>
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
			<!-- 교환방법 -->

			<!-- 교환받을주소 -->
			<div
				v-if="process.exchange.isOn"
				class="mm_process-item S=process-on"
			>
				<div class="mm_inner">
					<h3 class="mm_heading m_popup-myclaim-title">
						<b>교환 상품 받으실 주소를 설정하세요</b>
					</h3>
					<div class="mm_order-info">
						<table>
							<caption>교환 상품 받을 정보</caption>
							<tbody>
								<tr>
									<th scope="row">
										<b>받는 사람</b>
									</th>
									<td>{{ form.exchange_to.name }}</td>
								</tr>
								<tr>
									<th scope="row">
										<b>휴대폰 번호</b>
									</th>
									<td>{{ form.exchange_to.tel }}</td>
								</tr>
								<tr>
									<th scope="row">
										<b>주소</b>
									</th>
									<td>{{ form.exchange_to.zip_code }}<br>{{ `${form.exchange_to.base_address} ${form.exchange_to.detail_address}` }}</td>
								</tr>
							</tbody>
						</table>
						<a
							class="mm_btn T=xs T=line btn_address-change"
							href="#"
							@click.prevent="overlayAddress('exchange_to')"
						>
							<b>주소변경</b>
						</a>
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
									@click="
										processStep();
										fetchAdditionalPayments();
									"
								>
									<b>다음 단계로</b>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 교환받을주소 -->

			<!-- 추가금액결제 -->
			<div
				v-if="process.payment.isOn"
				class="mm_process-item S=process-on"
			>
				<div class="mm_inner">
					<h3 class="mm_heading m_popup-myclaim-title">
						<b>추가 금액을 결제하세요</b>
					</h3>
					<div class="mm_cost">
						<table>
							<tbody>
								<tr
									v-for="detail in additionalPayments.calculate_details"
									:key="detail.label"
								>
									<th scope="row">
										<strong>{{ detail.label }}</strong>
									</th>
									<td>
										<p class="text_price">
											<strong>{{ number(detail.amount) }}</strong>
										</p>
									</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<th scope="row">
										<b>추가 결제금액</b>
									</th>
									<td>
										<p class="text_price mm_text-variable">
											<strong>{{ number(additionalPayments.total_price) }}</strong>
										</p>
									</td>
								</tr>
							</tfoot>
						</table>
					</div>
					<template v-if="additionalPayments.total_price">
						<h6 class="mm_strapline">
							<b>결제방법 선택</b>
						</h6>
						<div class="m_popup-myclaim-way">
							<ul>
								<li>
									<form-radio
										v-model.boolean="isPayNow"
										name="dev_radio-payment"
										:value="true"
									>
										<b class="mm_block">
											<i class="ico_form-radio"></i>
											<span class="text_label">즉시 결제</span>
										</b>
									</form-radio>
									<div
										v-if="isPayNow"
										class="mm_syncer-payment-now S=radio-use"
									>
										<form-select v-model="paymentForm.card_code">
											<option>카드를 선택하세요</option>
											<option
												v-for="card in creditCards"
												:key="card.code"
												:value="card.code"
											>
												{{ card.label }}
											</option>
										</form-select>
									</div>
								</li>
								<li>
									<form-radio
										v-model.boolean="isPayNow"
										name="dev_radio-payment"
										:value="false"
									>
										<b class="mm_block">
											<i class="ico_form-radio"></i>
											<span class="text_label">판매자와 협의 후 결제</span>
										</b>
									</form-radio>
								</li>
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
									<b>{{ isProceedPayments ? '결제하기' : '교환 신청하기' }}</b>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 추가금액결제 -->
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, watch, defineAsyncComponent, computed } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useMyOrder } from '$/composables/useMyOrder';
	import { usePopupWindow } from '$/composables/usePopupWindow';
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import FormRadio from '@/component/form/FormRadio.vue';
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
		defaultExchangeAdditionalPayments,
		getExchangeReason,
		getExchangeable,
		applyExchange,
		getExchangePaymentInfo,
		getDeliveryCompanies,
		getPayMethods,
		prepareExchangePay,
		getExchangePayResult,
		validateInvoice,
	} = useMyOrder();

	const [exchangeReasons, exchangeable, deliveryCompanies, payMethods] = await Promise.all([
		getExchangeReason(),
		getExchangeable(props.orderId, props.orderItemId),
		getDeliveryCompanies(),
		getPayMethods(),
	]);

	// 신용카드 리스트
	const creditCards = computed<PayMethod['child_methods']>(() => {
		return (payMethods.find(method => method.eng_label === 'credit_card')?.child_methods) || [];
	});

	/** form composable */
	const { form, validate } = useForm<ExchangeForm & {
		is_self_retrieve: 1|0
	}>(
		{
			order_id: props.orderId,
			exchange_option_pair: [],
			reason_code: exchangeReasons[0].code,
			reason_detail: '',
			retrieve_method_code: exchangeable.availableRetrieveMethods[0].code,
			retrieve_invoice: {
				delivery_company: '',
				invoice_number: '',
			},
			retrieve_from: {
				...exchangeable.order.shipping_address,
			},
			exchange_to: {
				...exchangeable.order.shipping_address,
			},
			is_additional_payment_paid: false,
			payment_token: '',
			is_self_retrieve: 0,
		},
		{
			rule: {},
			message: {
				'exchange_option_pair.required': ':param(을/를) 선택해주세요.',
				'exchange_option_pair.*.order_item_id.required': ':param(을/를) 선택해주세요.',
				'exchange_option_pair.*.option_id.required': ':param(을/를) 선택해주세요.',
				'reason_code.in': ':param(이/가) 올바르지 않습니다.',
				'reason_code.required': ':param(을/를) 선택해주세요.',
				'retrieve_invoice.delivery_company.requiredIf': ':param(을/를) 선택해주세요.',
			},
		},
	);

	// 교환 결제 form
	const { form: paymentForm, validate: validatePaymentForm } = useForm<ExchangePaymentForm['payment_info']>(
		{

			card_code: null,
			interest_month: 0,
			is_interest_free: false,
			is_partial_interest_free: false,
			payment_price: 0,
		},
		{
			rule: {
				'card_code(결제수단)': ['required'],
			},
			message: {
				'card_code.required': ':param(을/를) 선택해주세요.',
				'card_code.in': ':param(이/가) 올바르지 않습니다.',
			},
		},
	);

	// 교환할 상품 선택 form
	const orderItemSelectForm = ref<{
		orderItemSetIds: number[],
		exchangeEas: { [setId: string]: number },
	}>({
		orderItemSetIds: [],
		exchangeEas: {},
	});


	// 바로결제 여부
	const isPayNow = ref<boolean>(true);
	// 교환 추가결제 진행 여부
	const isProceedPayments = computed(() => {
		return additionalPayments.value.total_price > 0 && isPayNow.value;
	});

	/** 사유상세 필요여부 */
	const reasonDetailRequired = computed(() => exchangeReasons.find(reason => reason.code === form.value.reason_code)?.require_detail || false);

	/** 주문자회수 여부 */
	const isRetrievedByOrderer = computed<boolean>(() => {
		return exchangeable.availableRetrieveMethods.find(method => form.value.retrieve_method_code == method.code)?.is_retrieve_by_orderer === true;
	});

	// 교환 추가 결제 금액 정보
	const additionalPayments = ref<ExchangePaymentInfo>(defaultExchangeAdditionalPayments);

	const baseValidationRules: {[ruleName: string]: Record<string, string[]>} = {
		order_items: {
			'exchange_option_pair(주문 교환하실 상품)': ['required'],
		},
		exchange_options: {
			'exchange_option_pair.*.order_item_id(주문 교환하실 상품)': ['required'],
			'exchange_option_pair.*.option_id(주문 교환하실 옵션)': ['required'],
		},
		reason: {
			'reason_code(주문 교환 사유)': ['required'],
			'reason_detail(주문 교환 사유)': [`requiredIf:reason_code,${exchangeReasons.filter(reason => reason.require_detail).map(reason => reason.code).join(',')}`],
		},
		retrieve: {
			// 반품송장정보
			'retrieve_invoice.delivery_company(택배사)': ['requiredIf:is_self_retrieve,1'],
			'retrieve_invoice.invoice_number(송장번호)': ['requiredIf:is_self_retrieve,1'],
			// 반품수거지 정보
			'retrieve_from.name(교환 수거지 주문자명)': ['requiredIf:is_self_retrieve,0', 'maxLength:50'],
			'retrieve_from.tel(교환 수거지 연락처)': ['requiredIf:is_self_retrieve,0', 'number', 'maxLength:12'],
			'retrieve_from.zip_code(교환 수거지 우편번호)': ['requiredIf:is_self_retrieve,0'],
			'retrieve_from.base_address(교환 수거지 주소)': ['requiredIf:is_self_retrieve,0'],
			'retrieve_from.detail_address(교환 수거지 상세주소)': ['requiredIf:is_self_retrieve,0', 'maxLength:100'],
		},
		exchange: {
			'exchange_to.name(교환 배송지 주문자명)': ['requiredIf:is_self_retrieve,0', 'maxLength:50'],
			'exchange_to.tel(교환 배송지 연락처)': ['requiredIf:is_self_retrieve,0', 'number', 'maxLength:12'],
			'exchange_to.zip_code(교환 배송지 우편번호)': ['requiredIf:is_self_retrieve,0'],
			'exchange_to.base_address(교환 배송지 주소)': ['requiredIf:is_self_retrieve,0'],
			'exchange_to.detail_address(교환 배송지 상세주소)': ['requiredIf:is_self_retrieve,0', 'maxLength:100'],
		},
	};


	/** 교환 단계 */
	type ExchangeProcess = 'orderItems'|'reason'|'option'|'retrieve'|'exchange'|'payment'
	const process = ref<{
		[processName in ExchangeProcess]: {
			isOn: boolean
			rules: Record<string, string[]>
			next: Nullable<ExchangeProcess>,
			previous: Nullable<ExchangeProcess>
		}
	}>({
		orderItems: {
			isOn: true,
			rules: baseValidationRules.order_items,
			next: 'reason',
			previous: null,
		},
		reason: {
			isOn: false,
			rules: baseValidationRules.reason,
			next: 'option',
			previous: 'orderItems',
		},
		option: {
			isOn: false,
			rules: baseValidationRules.exchange_options,
			next: 'retrieve',
			previous: 'reason',
		},
		retrieve: {
			isOn: false,
			rules: baseValidationRules.retrieve,
			next: 'exchange',
			previous: 'option',
		},
		exchange: {
			isOn: false,
			rules: baseValidationRules.exchange,
			next: 'payment',
			previous: 'retrieve',
		},
		payment: {
			isOn: false,
			rules: baseValidationRules.refund,
			next: null,
			previous: 'exchange',
		},
	});
	const currentProcess = ref<ExchangeProcess>('orderItems');


	//옵션 변경할 주문상품묶음
	const selectedPacks = ref<ExchangeableOrderSet['packs']>([]);

	const paymentUrl = ref<string|undefined>(undefined);

	// 동일옵션 선택 가능 여부
	const isSameOptionSelectable = computed<boolean>(() => {
		return exchangeReasons.find(reason => form.value.reason_code == reason.code && reason.is_same_option_exchangeable) ? true : false;
	});

	/** 배송지 변경 */
	function overlayAddress(target: 'retrieve_from'|'exchange_to') {
		const component = defineAsyncComponent(() => import('@/page/address/Address.vue'));

		return openOverlay(component, {
			onClose: async (_value: { newAddress: MyShippingAddressDetail }) => {
				const newAddress = _value.newAddress;
				if (!newAddress) {
					return;
				}

				form.value[target] = {
					...newAddress,
				};
			},
		});
	}

	/** 옵션 선택 */
	function overlayMyOrderExchangeCreateOption(orderItems: ExchangeableOrderItem[]) {
		const component = defineAsyncComponent(() => import('@/page/mypage/order/exchange/create/option/MyOrderExchangeCreateOption.vue'));

		return openOverlay(component, {
			props: {
				orderItems,
				isSameOptionSelectable: isSameOptionSelectable.value,
			},
			onClose: (_value: { selected: { [orderItemId: string ]: number } }) => {
				if (!_value.selected) {
					return;
				}

				const orderItemIds = Object.keys(_value.selected).map(selected => Number(selected));

				form.value.exchange_option_pair = form.value.exchange_option_pair
					.filter((pair) => !orderItemIds.includes(pair.order_item_id));

				orderItems.forEach(item => {
					const selectedOptionId = _value.selected[item.id];
					if (!selectedOptionId) {
						return;
					}

					item.exchange_option = item.exchangeable_options.find(option => option.id == selectedOptionId) || null;
					form.value.exchange_option_pair = form.value.exchange_option_pair.concat([{
						order_item_id: item.id,
						option_id: selectedOptionId,
					}]);
				});
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

	/**
	 * 추가결제금액 조회
	 */
	async function fetchAdditionalPayments() {
		try {
			await validate(Object.assign(
				baseValidationRules.exchange_options,
				baseValidationRules.reason,
				baseValidationRules.retrieve,
				baseValidationRules.exchange,
			));
		}
		catch (e) {
			return;
		}

		// 조회
		try {
			additionalPayments.value = await getExchangePaymentInfo(props.orderId, {
				exchange_options: form.value.exchange_option_pair,
				exchange_reason_code: form.value.reason_code,
				retrieve_method: form.value.retrieve_method_code,
				retrieve_from: form.value.retrieve_from,
				exchange_to: form.value.exchange_to,
			});
		}
		catch (e) {
			useErrorAlert(e);
			additionalPayments.value = defaultExchangeAdditionalPayments;
		}
	}


	/** 교환 신청 */
	async function apply() {
		try {
			await validate();
			if (isProceedPayments.value) {
				await validatePaymentForm();
			}
		}
		catch (e) {
			useErrorAlert(e);

			return;
		}

		bom.confirm('주문 교환을 진행하시겠습니까?', async (flag) => {
			if (!flag) return;

			loading.show();
			try {
				const proceedExchange = ref(!isProceedPayments.value);

				if (isProceedPayments.value) {
					paymentForm.value.payment_price = additionalPayments.value.total_price;

					const popupWindow = usePopupWindow('order-action', paymentUrl);
					const popupPromise = popupWindow.open();
					const { paying_url, payment_token } = await prepareExchangePay({
						order_id: props.orderId,
						payment_info: paymentForm.value,
						exchange_form: form.value,
					});
					form.value.payment_token = payment_token;
					paymentUrl.value = paying_url;

					const { popupWindowClosed } = await popupPromise;
					const { is_success, error_message } = await getExchangePayResult(payment_token);

					if (!is_success) {
						throw new Error(error_message);
					}
					form.value.is_additional_payment_paid = true;
					proceedExchange.value = popupWindowClosed;
				}

				if (proceedExchange.value) {
					const exchangeId = await applyExchange(form.value);
					router.replace({
						name: 'MyOrderExchangeSuccess',
						params: {
							order_id: props.orderId,
							exchange_id: exchangeId,
						},
					});
				}
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
	exchangeable.order.packs.forEach(pack => {
		pack.order_items.forEach(set => {
			set.items.forEach(item => {
				if (item.id == props.orderItemId) {
					orderItemSelectForm.value.orderItemSetIds = [set.id];
				}
			});
		});
	});


	/** 주문자 회수 여부 FORM 에 적용 */
	watch(isRetrievedByOrderer, () => {
		form.value.is_self_retrieve = isRetrievedByOrderer.value ? 1 : 0;
	}, {
		immediate: true,
	});

	/** 주문상품 선택 > 교환 form 적용 */
	watch(orderItemSelectForm, (itemSelectForm) => {
		const clonedOrder: ExchangeableOrderSet = JSON.parse(JSON.stringify(exchangeable.order));
		let selectedOrderItemIds: number[] = [];

		selectedPacks.value = clonedOrder.packs.filter(pack => {
			pack.order_items = pack.order_items.filter(itemSet => {
				itemSet.items = itemSet.items.slice(0, (Number(itemSelectForm.exchangeEas[itemSet.id]) || 1));
				itemSet.total_paid_price = itemSet.items.reduce((sum, current) => sum += current.paid_price, 0);
				itemSet.goods.ea = itemSet.items.length;

				const isSelected = itemSelectForm.orderItemSetIds.find(setId => setId == itemSet.id);
				if (isSelected) {
					selectedOrderItemIds = selectedOrderItemIds.concat(itemSet.items.map(item => item.id));
				}

				return isSelected;
			});

			return pack.order_items.length > 0 ;
		});

		form.value.exchange_option_pair = selectedOrderItemIds.map(itemId => ({
			order_item_id: itemId,
			option_id: null,
		}));
	}, {
		immediate: true,
		deep: true,
	});
</script>