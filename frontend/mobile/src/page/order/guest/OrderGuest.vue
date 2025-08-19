<template>
	<layout
		title="주문/결제"
		layout="popup"
		class="L=lowbtn"
		:is-footer="false"
		:is-toolbar="false"
	>
		<template #title>
			주문/결제
		</template>

		<template #default>
			<div
				v-if="sheet"
				class="m_order"
			>
				<dropdown
					class="T=order"
					:is-active="true"
				>
					<!-- 주문자 정보 -->
					<template #button>
						<b>주문자 정보</b>
						<b class="text_contraction">{{ form.orderer_info.name }}</b>
					</template>
					<template #content>
						<div class="mm_inner">
							<h6 class="mm_text-label">
								<b>주문자명</b>
							</h6>
							<form-text
								v-model="form.orderer_info.name"
								maxlength="10"
								placeholder="주문자 이름을 입력하세요(필수입력)"
							></form-text>
							<h6 class="mm_text-label">
								<b>휴대폰 번호</b>
							</h6>
							<form-text
								v-model="form.orderer_info.phone"
								maxlength="12"
								:type-for-display="'number'"
								placeholder="휴대폰 번호를 입력하세요(필수/숫자만 입력)"
							></form-text>
							<h6 class="mm_text-label">
								<b>이메일 주소 (공백없이 입력)</b>
							</h6>
							<form-text
								v-model="form.orderer_info.email"
								maxlength="50"
								placeholder="이메일 주소를 입력하세요(필수입력)"
							></form-text>
						</div>
					</template>
				</dropdown>
				<hr class="mm_line">

				<!-- 배송지 정보 -->
				<dropdown
					class="T=order m_order-receive"
					:is-active="true"
				>
					<template #button>
						<b>배송지 정보</b>
						<b class="text_contraction">{{ form.receive_address.name }}</b>
					</template>
					<template #content>
						<form-check
							v-model="isSameOrderInfo"
							label="주문자 정보와 동일"
						></form-check>
						<div class="mm_inner">
							<h6 class="mm_text-label">
								<b>받는사람</b>
							</h6>
							<form-text
								v-model="form.receive_address.name"
								maxlength="10"
								placeholder="받는 사람을 입력하세요(필수입력)"
							></form-text>
							<h6 class="mm_text-label">
								<b>휴대폰 번호</b>
							</h6>
							<form-text
								v-model="form.receive_address.phone"
								maxlength="12"
								:type-for-display="'number'"
								placeholder="휴대폰 번호를 입력하세요(필수/숫자만 입력)"
							></form-text>
							<div class="mm_form_mix-address">
								<h6 class="mm_strapline">
									<b>주소</b>
								</h6>
								<div class="mm_form_mix-linked">
									<form-text
										v-model="form.receive_address.zip_code"
										readonly
										placeholder="우편번호"
										label-on-blind
									></form-text>
									<button
										type="button"
										class="mm_btn T=dark"
										@click="overlayAddressPostcode"
									>
										<b>우편번호 찾기</b>
									</button>
								</div>
								<form-text
									v-model="form.receive_address.base_address"
									readonly
									label-on-blind
									placeholder="검색주소"
								></form-text>
								<form-text
									v-model="form.receive_address.detail_address"
									placeholder="상세 주소를 입력하세요(필수입력)"
								></form-text>
							</div>
							<h6 class="mm_strapline">
								<b>배송메모</b>
							</h6>
							<form-select v-model="selectedShippingMessageTemplate">
								<!-- 배송메모를 선택하세요 -->
								<option
									v-for="template in shippingMessageTemplates"
									:key="template"
									:value="template"
								>
									{{ template }}
								</option>
							</form-select>
							<div
								class="mm_syncer-delivery-note"
								:class="{ 'S=select-use': selectedShippingMessageTemplate.trim() === '직접 입력' }"
							>
								<form-text
									v-model="shippingMessage"
									maxlength="20"
									placeholder="배송메모를 입력하세요(20자 이내)"
								></form-text>
							</div>

							<!-- 해외배송 개인통관고유부호 -->
							<section
								v-if="sheet.need_personal_clearance_code"
								class="m_order-unipass"
							>
								<h6 class="mm_text-label">
									<b>해외배송 개인통관고유부호</b>
								</h6>
								<form-text
									v-model="form.orderer_info.personal_clearance_code"
									maxlength="13"
									placeholder="P로 시작하는 정보를 입력하세요"
								></form-text>
								<div class="mm_note">
									<ul>
										<li>상품을 받는 분의 명의로 통관이 진행되므로 <strong class="mm_text-secondary">수취인</strong>의 개인통관고유부호를 입력해주세요.</li>
										<li>해외배송 상품은 관세청 통관을 위해 수취인의 고유식별정보를 판매자에게 제공합니다.</li>
										<li>개인통관고유부호는 통관 시 주민등록번호 대신 사용 가능한 번호로, 관세청 사이트에서 발급 받으실 수 있습니다.</li>
									</ul>
								</div>
								<mm-link
									class="btn_unipass"
									to="https://unipass.customs.go.kr/csp/persIndexRectOnslCrtf.do?qryIssTp=1"
								>
									<b>개인통관고유부호 발급/확인 바로가기</b><i class="ico_link T=sm"></i>
								</mm-link>
								<div class="mm_check_box">
									<div class="mm_check-list">
										<ul>
											<li>
												<div class="mm_flex">
													<form-check
														v-model="form.orderer_info.is_agree_collect_personal_clearance_code"
													>
														<span class="text_label"><strong class="mm_text-variable">(필수)</strong>해외배송 상품의 수입신고를 위한 개인통관고유부호 수집에 동의</span>
													</form-check>
													<a
														class="btn_detail"
														href="#"
														@click.prevent="overlayOrderUnipass"
													>
														<b>자세히</b>
													</a>
												</div>
											</li>
											<li>
												<div class="mm_flex">
													<form-check
														v-model="form.orderer_info.is_agree_provide_personal_clearance_code"
													>
														<span class="text_label"><strong class="mm_text-variable">(필수)</strong>해외배송 상품의 수입신고를 위한 개인통관고유부호 판매자 제동 동의</span>
													</form-check>
													<a
														class="btn_detail"
														href="#"
														@click.prevent="overlayOrderUnipass"
													>
														<b>자세히</b>
													</a>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</section>
						</div>
					</template>
				</dropdown>
				<hr class="mm_line">

				<!-- 상품 정보 -->
				<dropdown
					class="T=order"
					:is-active="true"
				>
					<template #button>
						<b>상품 정보</b>
						<b class="text_contraction">
							<span class="text_count"><strong>{{ sheet.packs.length }}</strong><sub>건</sub></span>
							<span class="text_price"><strong>{{ number(priceContext.goodsUnitPrice) }}</strong></span></b>
					</template>
					<template #content>
						<div class="mm_order-item">
							<div
								v-for="pack, index in sheet.packs"
								:key="index"
								class="mm_order-item-seller"
							>
								<div class="mm_order...seller-head">
									<p class="text_ship">
										<i class="ico_ship"></i>
										<span v-if="(!selectedAddressExtraShippingPrice || pack.extra_shipping_price === 0) && pack.charged_shipping_price === 0">무료배송</span>
										<span
											v-else
											class="text_price"
										><strong>{{ number(selectedAddressExtraShippingPrice ? (pack.charged_shipping_price + pack.extra_shipping_price) : pack.charged_shipping_price) }}</strong></span>
									</p>
								</div>

								<div class="mm_product-list T=sm">
									<ul>
										<li
											v-for="itemSet in pack.mergedOrderItems"
											:key="itemSet.key"
										>
											<p class="text_seller">
												<i class="ico_shop"></i>{{ itemSet.seller_name }}
											</p>
											<div class="mm_product-item">
												<a>
													<figure>
														<lazyload
															class="mm_bg-cover image_product"
															:src="itemSet.goods.thumbnail_url"
														></lazyload>
														<figcaption>
															<p class="text_brand">{{ itemSet.goods.brand_name }}</p>
															<p class="text_product">{{ itemSet.goods.name }}</p>
															<p class="text_price"><strong>{{ number(totalDiscountedPriceByItemSet[itemSet.key]) }}</strong></p>
															<p class="text_option">{{ itemSet.option.name }} / {{ itemSet.ea }}개</p>
														</figcaption>
													</figure>
												</a>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</template>
				</dropdown>

				<!-- 사은품 -->
				<template v-if="sheet.giveaway_groups.length > 0">
					<hr class="mm_line">
					<gift-order
						:giveaway-groups="sheet.giveaway_groups"
						:selected-item="form.giveaways"
						@update-selected="(_newItem) => { form.giveaways = _newItem }"
					></gift-order>
				</template>

				<!-- 최종 결제금액 -->
				<dropdown
					class="T=order"
					:is-active="true"
				>
					<template #button>
						<b>최종 결제금액</b>
						<b class="text_contraction"><span class="text_price mm_text-variable"><strong>{{ number(paymentPrice) }}</strong></span></b>
					</template>
					<template #content>
						<div class="mm_inner">
							<div class="mm_cost">
								<table>
									<tbody>
										<tr>
											<th scope="row">
												<b>총 상품금액</b>
											</th>
											<td>
												<p class="text_price">
													<strong>{{ number(priceContext.goodsUnitPrice) }}</strong>
												</p>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>배송비</b>
											</th>
											<td>
												<p class="text_price">
													+ <strong>{{ number(priceContext.shippingPrice + (selectedAddressExtraShippingPrice ? priceContext.extraShippingPrice : 0)) }}</strong>
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
													<strong>{{ number(paymentPrice) }}</strong>
												</p>
											</td>
										</tr>
									</tfoot>
								</table>
							</div>
						</div>
					</template>
				</dropdown>
				<hr class="mm_line">

				<!-- 결제수단 선택 -->
				<dropdown
					class="T=order m_order-payment"
					:is-active="true"
				>
					<template #button>
						<b>결제수단 선택</b>
						<b class="text_contraction">{{ selectedPayMethodLabel }}</b>
					</template>
					<template #content>
						<ul>
							<li>
								<div
									class="mm_syncer-payment-method S=radio-use"
								>
									<!-- 결제수단 목록 -->
									<div class="m_order-payment-method">
										<ul>
											<li
												v-for="payMethod in payMethods"
												:key="payMethod.label"
											>
												<form-radio
													v-model="form.payment_info.method"
													name="radio-payment"
													:value="payMethod.code"
												>
													<b class="mm_block">
														<i :class="`ico_${payMethod.eng_label.replace('_', '-')}`"></i>
														<span class="text_label">{{ payMethod.label }}</span>
													</b>
												</form-radio>
											</li>
										</ul>
									</div>

									<!-- 신용/체크카드 -->
									<div
										class="mm_syncer-method-card"
										:class="{ 'S=radio-use': paymentMethodEngLabel === 'credit_card' }"
									>
										<div class="mm_note">
											<ul>
												<li>인스타그램을 통한 카드결제가 원활하지 않을 경우 외부 브라우저 또는 타 결제 수단을 이용 바랍니다.</li>
												<li><a href="https://triz.keeif.kr/dlqwny"><strong>[Keeif 앱 다운 바로가기 Click]</strong></a></li>
											</ul>
										</div>
										<form-select v-model="form.payment_info.card_code">
											<option value="0">
												카드를 선택하세요
											</option>
											<option
												v-for="creditCard in creditCards"
												:key="creditCard.code"
												:value="creditCard.code"
											>
												{{ creditCard.label }}
											</option>
										</form-select>
										<form-select v-model="form.payment_info.interest_month">
											<option
												v-for="installMent in interest"
												:key="installMent.value"
												:disabled="installMent.disabled"
												:value="installMent.value"
											>
												{{ installMent.label }}
											</option>
										</form-select>
										<a
											class="btn_card-info"
											href="#"
											@click.prevent="overlayCardBenefit"
										>
											<b>무이자할부 안내</b><i class="ico_link"></i>
										</a>
									</div>

									<!-- 무통장 입금 -->
									<div
										class="mm_syncer-method-deposit"
										:class="{ 'S=radio-use': paymentMethodEngLabel === 'virtual_account' }"
									>
										<div class="mm_inner">
											<form-select v-model="form.payment_info.bank_code">
												<option>은행을 선택하세요</option>
												<option
													v-for="bank in banks"
													:key="bank.code"
													:value="bank.code"
												>
													{{ bank.label }}
												</option>
											</form-select>
											<form-text
												v-model="form.payment_info.depositor_name"
												placeholder="입금자명을 입력하세요"
											></form-text>
											<p>입금기한: <strong class="mm_text-secondary">{{ depositExpireDate }} 까지</strong></p>
										</div>
										<section class="m_order-payment-receipt">
											<h6 class="mm_strapline">
												<b>현금영수증 발급신청</b>
											</h6>
											<ul class="mm_flex T=equal">
												<li>
													<form-radio
														v-model.number="form.payment_info.cash_receipt_apply_type"
														name="radio-receipt"
														value="1"
													>
														<b class="mm_block">
															<span class="text_label">소득공제용</span>
														</b>
													</form-radio>
												</li>
												<li>
													<form-radio
														v-model.number="form.payment_info.cash_receipt_apply_type"
														name="radio-receipt"
														value="2"
													>
														<b class="mm_block">
															<span class="text_label">지출증빙용</span>
														</b>
													</form-radio>
												</li>
												<li>
													<form-radio
														v-model.number="form.payment_info.cash_receipt_apply_type"
														name="radio-receipt"
														value="3"
													>
														<b class="mm_block">
															<span class="text_label">신청안함</span>
														</b>
													</form-radio>
												</li>
											</ul>
											<div
												class="mm_syncer-receipt-income"
												:class="{ 'S=radio-use': form.payment_info.cash_receipt_apply_type == 1 }"
											>
												<form-text
													v-model="form.payment_info.cash_receipt_phone_number"
													type="tel"
													maxlength="11"
													placeholder="휴대폰 번호(숫자만 입력하세요)"
												></form-text>
											</div>
											<div
												class="mm_syncer-receipt-expense"
												:class="{ 'S=radio-use': form.payment_info.cash_receipt_apply_type == 2 }"
											>
												<form-text
													v-model="form.payment_info.cash_receipt_business_number"
													input-mode="number"
													placeholder="사업자 등록번호(숫자만 입력하세요)"
												></form-text>
											</div>
										</section>
										<order-guest-refund-account
											v-model:owner-name="refundAccount.owner_name"
											v-model:bank-code="refundAccount.bank_code"
											v-model:account-number="refundAccount.account_number"
										></order-guest-refund-account>
									</div>

									<!-- 에스크로 -->
									<div
										class="mm_syncer-method-escrow"
										:class="{ 'S=radio-use': paymentMethodEngLabel === 'escrow' }"
									>
										<div class="mm_note">
											<ul>
												<li>에스크로 결제 건은 부분 취소가 불가능하고, 전체 취소만 가능합니다.</li>
											</ul>
										</div>
										<hr class="mm_line">
										<order-guest-refund-account
											v-model:owner-name="refundAccount.owner_name"
											v-model:bank-code="refundAccount.bank_code"
											v-model:account-number="refundAccount.account_number"
										></order-guest-refund-account>
									</div>

									<!-- 네이버 페이 -->
									<div
										class="mm_syncer-method-naverpay"
										:class="{ 'S=radio-use': paymentMethodEngLabel === 'naverpay' }"
									>
										<div class="mm_note">
											<ul>
												<li>네이버페이는 네이버ID로 신용카드 또는 은행계좌 정보를 등록하여 결제할 수 있는 간편결제 서비스입니다.</li>
												<li>주문 변경 시 카드사 혜택 및 할부 적용 여부는 해당 카드사 정책에 따라 변경될 수 있습니다.</li>
												<li>지원 가능 결제수단: 네이버페이 결제창 내 노출되는 모든 카드/계좌</li>
											</ul>
										</div>
									</div>

									<!-- 페이코 -->
									<div
										class="mm_syncer-method-payco"
										:class="{ 'S=radio-use': paymentMethodEngLabel === 'payco' }"
									>
										<div class="mm_note">
											<ul>
												<li>페이코는 온/오프라인 쇼핑은 물론 송금, 멤버십 적립까지 가능한 통합 서비스입니다.</li>
												<li>휴대폰과 카드 명의자가 동일해야 결제 가능하며 결제금액 제한은 없습니다.(지원카드 : 모든 국내 신용/체크 카드)</li>
											</ul>
										</div>
									</div>
								</div>
							</li>
						</ul>
						<!-- 네이버 페이 -->
					</template>
				</dropdown>
				<hr class="mm_line">

				<!-- 약관동의 안내 -->
				<div class="mm_inner m_order-agree">
					<div class="m_order-agree-inner">
						<h6><b>주문상품정보 및 서비스 이용약관에 동의</b></h6>
						<ul>
							<li><p>구매조건 확인 및 결제 진행 동의</p></li>
							<li>
								<p>개인정보 제 3자 제공 동의</p>
								<toggle class="btn_more">
									<b>자세히</b>
								</toggle>
								<table>
									<tbody>
										<tr>
											<th scope="row">
												<b>제공 받는 자</b>
											</th>
											<td>공급사 판매자</td>
										</tr>
										<tr>
											<th scope="row">
												<b>목적</b>
											</th>
											<td>판매자와 구매자의 거래의 원활한 진행, 본인의사의확인, 고객 상담 및 불만처리, 상품과 경품 배송을 위한 배송지 확인 등</td>
										</tr>
										<tr>
											<th scope="row">
												<b>항목</b>
											</th>
											<td>이름, ID, 휴대폰번호, 이메일 주소,전 화번호, 상품 구매정보, 상품 수취인정보(성명, 주소, 전화번호)</td>
										</tr>
										<tr>
											<th scope="row">
												<b>보유 및<br>이용기간</b>
											</th>
											<td>이용목적 달성 시까지 보관</td>
										</tr>
									</tbody>
								</table>
							</li>
						</ul>
					</div>
					<p>위 주문 내용을 확인하였으며, 결제에 동의합니다.</p>
				</div>
			</div>
		</template>

		<template #button>
			<div class="mm_btn_box T=fixed">
				<button
					type="button"
					class="btn_order"
					@click="startProcess"
				>
					<b><strong>{{ number(paymentPrice) }}</strong>원 결제하기</b>
				</button>
			</div>
		</template>
	</layout>
</template>


<script setup lang="ts">
	import { defineAsyncComponent, ref, computed, watch } from 'vue';
	import { useRouteParams } from '@vueuse/router';
	import { useOrderStore } from '$/stores/useOrderStore';
	import { useAddress } from '$/composables/useAddress';
	import { useCardInstallment } from '$/composables/useCardInstallment';
	import { useCreditCardInstallMentUtil } from '$/composables/useCreditCardInstallMentUtil';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useOrderSheet } from '$/composables/useOrderSheet';
	import { usePopupWindow } from '$/composables/usePopupWindow';
	import { useUserAgent } from '$/composables/useUserAgent';
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import Toggle from '@/component/Toggle.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import FormRadio from '@/component/form/FormRadio.vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import FormText from '@/component/form/FormText.vue';
	import GiftOrder from '@/feature/gift/component/GiftOrder.vue';
	import OrderGuestRefundAccount from '@/page/order/component/OrderGuestRefundAccount.vue';

	const orderId = useRouteParams<string>('id');
	const { isInappBrowser, isMobileUser } = useUserAgent();
	const { openOverlay, loading, router } = useGlobalPageContext();
	const {
		getSheet,
		getPayingUrl,
	} = useOrderStore();

	const sheet = ref<OrderSheet>(await getSheet(orderId.value));

	const { number } = useFormatter();
	const {
		shippingMessageTemplates,
		priceContext,
		getPayMethods,
		totalDiscountedPriceByItemSet,
		depositExpireDate,
	} = useOrderSheet(sheet.value);
	const refundAccount = ref<RefundAccountForm>({
		owner_name: '',
		bank_code: null,
		account_number: '',
	});
	/** 결제수단 관련 **/
	const payMethods = ref<PayMethod[]>(await getPayMethods());
	const selectedPayMethodLabel = computed(() => {
		return payMethods.value.find((method) => {
			return method.code === form.value.payment_info.method;
		})?.label || '신용/체크카드';
	});

	const paymentMethodEngLabel = computed(() => payMethods.value.find(method => method.code === form.value.payment_info.method)?.eng_label);
	const creditCards = computed(() => {
		return payMethods.value.find((payMethod) => {
			return payMethod.eng_label === 'credit_card';
		})?.child_methods || [];
	});

	const banks = computed(() => {
		return payMethods.value.find((payMethod) => {
			return payMethod.eng_label === 'virtual_account';
		})?.child_methods || [];
	});
	/** @TODO 배송지 **/

	const shippingMessage = ref('');
	const selectedShippingMessageTemplate = ref(shippingMessage.value ? '직접 입력' : '선택 안함');
	/** 결제수단 관련 **/
	const { form, validate } = useForm<OrderForm>({
			orderer_info: {
				email: '',
				personal_clearance_code: '',
				is_agree_collect_personal_clearance_code: false,
				is_agree_provide_personal_clearance_code: false,
				is_remember_personal_clearance_code: false,
				name: '',
				phone: '',
			},
			receive_address: {
				id: undefined,
				name: '',
				phone: '',
				zip_code: '',
				base_address: '',
				detail_address: '',
				is_extra_area: false,
				message: '',
			},
			payment_info: {
				method: payMethods.value.find((method) => method.eng_label === 'credit_card')!.code,
				eng_label: '',
				card_code: undefined,
				interest_month: 0,
				is_interest_free: false,
				is_partial_interest: false,
				bank_code: undefined,
				depositor_name: '',
				cash_receipt_apply_type: 3,
				cash_receipt_apply_key: '',
				cash_receipt_phone_number: '',
				cash_receipt_business_number: '',
				using_point: 0,
				for_payment_price: 0,
			},
			refund_account: refundAccount.value,
			packs: [],
			giveaways: sheet.value.giveaway_groups.map(giveAwayGroup => {
				return {
					goods_id: giveAwayGroup.goods_id,
					giveaway_id: null,
				};
			}),
			isOverseasShippingContains: sheet.value.need_personal_clearance_code,
			is_dawn_delivery: false,
		},
		{
			rule: {
				'orderer_info.name(주문자명)': ['required'],
				'orderer_info.phone(주문자 휴대폰번호)': ['required', 'validPhoneNumber'],
				'orderer_info.email(주문자 이메일)': ['required', 'usableEmail'],
				'receive_address.name(받는분)': ['required'],
				'receive_address.phone(받는분 휴대폰 번호)': ['required', 'validPhoneNumber'],
				'receive_address.zip_code(우편번호)': ['required'],
				'receive_address.base_address(주소)': ['required'],
				'receive_address.detail_address(상세주소)': ['required'],
				'orderer_info.personal_clearance_code(개인통관 고유부호)': ['requiredIf:isOverseasShippingContains', 'validCode'],
				'orderer_info.is_agree_collect_personal_clearance_code(개인통관고유부호 수집에 동의)': ['validIsAgree'],
				'orderer_info.is_agree_provide_personal_clearance_code(개인통관고유부호 판매자 제공에 동의)': ['validIsAgree'],
				'giveaways.*.giveaway_id(사은품)': ['required'],
				'payment_info.method(결제수단)': ['required'],
				'payment_info.card_code(결제 카드)': ['requiredIf:payment_info.eng_label,credit_card'],
				'payment_info.bank_code(은행)': ['requiredIf:payment_info.eng_label,virtual_account'],
				'payment_info.depositor_name(입금자명)': ['requiredIf:payment_info.eng_label,virtual_account'],
				'payment_info.cash_receipt_apply_type(현금영수증 발급 신청 종류)': ['requiredIf:payment_info.eng_label,virtual_account', 'in:1,2,3'],
				'payment_info.cash_receipt_phone_number(현금영수증-휴대폰 번호)': ['validReceiptPhone'],
				'payment_info.cash_receipt_business_number(현금영수증-사업자 등록번호)': ['validReceiptBusinessNumber'],
				'refund_account.bank_code(환불은행 - 은행)': ['requiredIf:payment_info.eng_label,virtual_account,escrow'],
				'refund_account.owner_name(환불은행 - 예금주명)': ['requiredIf:payment_info.eng_label,virtual_account,escrow'],
				'refund_account.account_number(환불은행 - 계좌번호)': ['requiredIf:payment_info.eng_label,virtual_account,escrow'],
			},
			message: {
				'orderer_info.email.required': ':param(을/를) 입력해주세요.',
				'receive_address.id.required': ':param(을/를) 설정해주세요.',
				'orderer_info.personal_clearance_code.requiredIf': ':param(을/를) 입력해주세요.',
				'orderer_info.personal_clearance_code.validCode': ':param(을/를) 확인해주세요.',
				'giveaways.*.giveaway_id.required': ':param(을/를) 선택해주세요.',
				'payment_info.card_code.requiredIf': ':param(을/를) 선택해주세요.',
				'payment_info.bank_code.requiredIf': ':param(을/를) 선택해주세요.',
				'payment_info.depositor_name.requiredIf': ':param(을/를) 입력해주세요.',
				'payment_info.cash_receipt_apply_type.requiredIf': ':param(을/를) 선택해주세요.',
				'payment_info.cash_receipt_apply_type.in': ':param(을/를) 선택해주세요.',
				'refund_account.owner_name.requiredIf': ':param(을/를) 등록 해주세요.',
				'refund_account.bank_code.requiredIf': ':param(을/를) 등록 해주세요.',
				'refund_account.account_number.requiredIf': ':param(을/를) 등록 해주세요.',
			},
			testers: [
				{
					name: 'validCode',
					defaultMessageOnFailure: ':param(을/를) 확인해주세요',
					handler: (): boolean => {
						if (sheet.value && !sheet.value.need_personal_clearance_code) {
							return true;
						}

						return form.value.orderer_info.personal_clearance_code !== '' && /^[Pp][0-9]{12}$/g.test(form.value.orderer_info.personal_clearance_code);
					},
				},
				{
					name: 'validReceiptPhone',
					defaultMessageOnFailure: '올바른 휴대폰 번호를 입력해주세요',
					handler: (value: string): boolean => {
						if (form.value.payment_info.eng_label === 'virtual_account' && form.value.payment_info.cash_receipt_apply_type === 1) {
							const phoneNumberRegExp = /^010[0-9]{4}[0-9]{4}$/g;

							return value.match(phoneNumberRegExp) !== null;
						}

						return true;
					},
				},
				{
					name: 'validReceiptBusinessNumber',
					defaultMessageOnFailure: '올바른 사업자 번호를 입력해주세요.',
					handler: (value: string): boolean => {
						if (form.value.payment_info.eng_label === 'virtual_account' && form.value.payment_info.cash_receipt_apply_type === 2) {
							return value !== '' && value.match(/^[0-9]*$/g) !== null && value.length >= 10;
						}

						return true;
					},
				},
				{
					name: 'validIsAgree',
					defaultMessageOnFailure: ':param(을/를) 동의해주세요',
					handler: (value): boolean => {
						if (form.value.isOverseasShippingContains) {
							return `${value}` == 'true';
						}

						return true;
					},
				},
			],

		},
	);

	const totalShippingPrice = computed(
		() => priceContext.value.shippingPrice + (
			selectedAddressExtraShippingPrice.value
				? priceContext.value.extraShippingPrice
				: 0
		),
	);
	const paymentPrice = computed(() => {
		return priceContext.value.goodsUnitPrice
			+ totalShippingPrice.value
			- priceContext.value.baseDiscountAmount;
	});

	const selectedAddressExtraShippingPrice = computed(() => form.value.receive_address.is_extra_area);

	const enterUrl = ref<string|undefined>(undefined);
	async function startProcess() {
		form.value.payment_info.eng_label = paymentMethodEngLabel.value || '';

		if (!sheet.value) {
			return;
		}

		const packs: PackForOrder[] = sheet.value.packs.map((pack) => {
			const packItems = pack.items.map((item) => {
				return {
					brand_id: item.brand_id,
					goods_id: item.goods_id,
					goods_base_discounted_price: item.goods_base_discounted_price,
					option_id: item.option_id,
					option_extra_amount: item.option_extra_amount,
					night_sale_id: item.night_sale_id,
					night_sale_amount: item.night_sale_amount || 0,
					regist_coupon_id: null,
					regist_coupon_amount: 0,
					immediately_sale_id: null,
					immediately_sale_amount: 0,
					goods_applied_all_discounted_price: item.goods_sell_price + item.option_extra_amount,
				};
			});

			return {
				charged_shipping_price: pack.charged_shipping_price,
				extra_shipping_price: form.value.receive_address.is_extra_area ? pack.extra_shipping_price : 0,
				shipping_rule_id: pack.shipping_rule_id,
				dawn_delivery_extra_shipping_price: 0,
				items: packItems,
			};
		});

		form.value.payment_info.for_payment_price = paymentPrice.value;

		if (form.value.payment_info.cash_receipt_apply_type === 1) {
			form.value.payment_info.cash_receipt_apply_key = form.value.payment_info.cash_receipt_phone_number;
		}
		else if (form.value.payment_info.cash_receipt_apply_type === 2) {
			form.value.payment_info.cash_receipt_apply_key = form.value.payment_info.cash_receipt_business_number;
		}
		else if (form.value.payment_info.cash_receipt_apply_type === 3) {
			form.value.payment_info.cash_receipt_apply_key = '';
		}

		form.value.refund_account = refundAccount.value.bank_code === null ? null : refundAccount.value;
		loading.show();

		try {
			await validate();

		}
		catch (e) {
			useErrorAlert(e);

			return;
		}
		finally {
			loading.hide();
		}

		const orderData = {
			orderer_info: form.value.orderer_info,
			receive_address: Object.assign({}, form.value.receive_address, {
				message: selectedShippingMessageTemplate.value === '직접 입력'
					? shippingMessage.value
					: selectedShippingMessageTemplate.value === '배송메모를 선택하세요' ? '' : selectedShippingMessageTemplate.value,
			}),
			refund_account: form.value.refund_account,
			packs: packs,
			payment_info: form.value.payment_info,
			giveaways: [],
			my_pay_virtual_id: null,
			is_dawn_delivery: false,
		};

		payingPopupOpen(orderData);
	}

	const payingPopupOpen = async (orderData: OrderPrePareForm) => {
		if (isInappBrowser.value || new RegExp('FBAN|FBAV|Instagram', 'i').test(navigator.userAgent)) {
			const redirectPath = `${location.origin}${router.resolve({
				name: 'OrderResult',
				params: {
					id: orderId.value,
				},
			}).fullPath}`;

			location.href = await getPayingUrl(orderId.value, orderData, redirectPath);

			return;
		}
		const options = isMobileUser ? undefined : {
			width: 300,
			height: 450,
			scrollbars: false,
			resizable: false,
		};
		const popupWindow = usePopupWindow('order-action', enterUrl, options);
		try {
			const popupPromise = popupWindow.open();
			enterUrl.value = await getPayingUrl(orderId.value, orderData);
			const { popupWindowClosed } = await popupPromise;

			if (popupWindowClosed) {
				router.replace({
					name: 'OrderResult',
					params: {
						id: orderId.value,
					},
				});
			}
		}
		catch (e) {
			popupWindow.close();
			router.replace({
				name: 'OrderResult',
				params: {
					id: orderId.value,
				},
				replace: true,
			});
		}
	};

	const cardInstallmentInfo = ref<Nullable<CardInstallment>|undefined>(undefined);
	const isInterestDisabled = computed(() => {
		if (!form.value.payment_info.card_code) {
			return true;
		}

		return paymentPrice.value <= 50000;
	});
	const { get: getCardInterest } = useCardInstallment();
	/** 실제 결제 카드 무이자 처리  **/
	const { getUsableInstallMents } = useCreditCardInstallMentUtil(isInterestDisabled);
	const interest = ref<UsableInstallMentInfo[]>([]);
	watch(() => form.value.payment_info.card_code, (newCardCode) => {
		interest.value = getUsableInstallMents(newCardCode);
	}, {
		immediate: true,
	});

	async function overlayCardBenefit() {
		const component = defineAsyncComponent(() => import('@/page/card-benefit/CardBenefit.vue'));
		if (cardInstallmentInfo.value === undefined) {
			cardInstallmentInfo.value = await getCardInterest();
		}

		return openOverlay(component, {
			props: {
				cardInstallmentInfo: cardInstallmentInfo.value,
			},
		});
	}

	const { isExtraAreaCheck } = useAddress();

	function overlayAddressPostcode() {
		const component = defineAsyncComponent(() => import('@/page/address/postcode/AddressPostcode.vue'));

		return openOverlay(component, {
			onClose: async (address: SearchAddress) => {

				form.value.receive_address.zip_code = address.zip_code;
				form.value.receive_address.base_address = address.road_address;
				form.value.receive_address.is_extra_area = await isExtraAreaCheck(form.value.receive_address.zip_code, form.value.receive_address.base_address);
			},
		},
		);
	}

	function overlayOrderUnipass() {
		const component = defineAsyncComponent(() => import('@/page/order/unipass/OrderUnipass.vue'));

		return openOverlay(component);
	}


	const isSameOrderInfo = ref(false);
	watch(isSameOrderInfo, (to) => {
		if (to) {
			form.value.receive_address.name = form.value.orderer_info.name;
			form.value.receive_address.phone = form.value.orderer_info.phone;
		}
	});

	window.test = () => {
		form.value.orderer_info = {
			name: '테스터',
			phone: '01012341234',
			email: 'test@mmonstar.co.kr',
			personal_clearance_code: '',
			is_agree_collect_personal_clearance_code: false,
			is_agree_provide_personal_clearance_code: false,
			is_remember_personal_clearance_code: false,
		};

		form.value.receive_address = {
			name: '테스터',
			phone: '01012341234',
			zip_code: '13487',
			base_address: '경기도 성남시 분당구 판교로 242(삼평동)',
			detail_address: 'TEST',
			is_extra_area: false,
			message: '',
		};
	};
</script>

<!--
	// FIXME
	유료기능 간편결제(네이버페이, 카카오페이, 페이코, 토스)는
	마크업 기준에서는 유료 기능별로 컴포넌트로 구분되어 있지만
	프론트 개발 기준에서는 데이터 연동을 기준으로 하기 때문에 컴포넌트로 나눠져 있는게
	오히려 비효율적이고 불필요한 코드가 늘게 되어 주문결제의 간편결제 유료 기능만 컴포넌트로 나누지 않습니다.
	추후 개선 필요
-->
<style lang="scss">
	@use '../../../asset/scss/helper/mixin';
	@use '../../../asset/scss/helper/function';

	.m_order-payment {
		// 결제 수단
		&-method {
			.mm_form-radio {
				// 결제수단 아이콘 클래스명은 개발팀 요청으로 지정된 클래스이며, 주문결제 페이지에서만 사용합니다.
				$payments: (naverpay, 55px, 22px, #00c73c, 31px, 'ico_naverpay.svg'), (kakaopay, 54px, 18px, #47292b, 34px, 'ico_kakaopay.svg'),
					(payco, 56px, 14px, #fa1414, 35px, 'ico_payco.svg'), (toss, 100px, 32px, #0064ff, 26px, 'ico_toss.svg');
				@each $payment, $width, $height, $color, $top, $url in $payments {
					.ico_#{$payment} {
						top: $top;

						&::before {
							width: $width;
							height: $height;
							@include mixin.svg(#888 url('/image/common/#{$url}'));
						}
					}

					&#{function.escape('.T=payment-#{$payment}')} {
						input[type='radio'] {
							&:checked + .mm_block {
								&::before {
									border-color: $color;

									@if $payment == kakaopay {
										border-color: #ffcd00;
									}
								}

								i::before {
									@if $payment == naverpay {
										@include mixin.svg(none);
										@include mixin.background(transparent url('/image/common/#{$url}') '100% 0/contain' no-repeat);
									}
									@else if $payment == toss {
										@include mixin.background(transparent '0 100%');
									}
									@else {
										background-color: $color;
									}
								}

								.text_label {
									color: $color;
								}
							}
						}
					}
				}
			}
		}
	}
</style>