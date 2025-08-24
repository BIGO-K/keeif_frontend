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
				<!-- 받는분 정보 -->
				<dropdown
					class="T=order"
					:is-active="true"
				>
					<template #button>
						<b>받는분 정보</b>
						<b class="text_contraction">{{ selectedAddress?.name }}</b>
					</template>
					<template #content>
						<div class="mm_inner">
							<h6 class="mm_text-label">
								<b>이메일 주소 (공백없이 입력)</b>
							</h6>
							<form-text
								v-model="form.orderer_info.email"
								maxlength="50"
								placeholder="이메일 주소를 입력하세요(필수입력)"
							></form-text>
							<h6 class="mm_text-label">
								<b>배송지 정보</b>
							</h6>
							<!-- (D) 등록된 배송지 정보가 있을 경우 아래와 같이 노출합니다 -->
							<template v-if="addresses.length > 0">
								<div class="mm_address-list T=scroller">
									<div class="mm_scroller T=x">
										<ul>
											<li
												v-for="address in addresses"
												:key="address.id"
											>
												<input
													v-model="form.receive_address.id"
													type="radio"
													name="radio-address"
													:value="address.id"
													:checked="form.receive_address.id === address.id"
													:title="address.name"
												>
												<div class="mm_address-item">
													<i class="ico_form-radio T=circle"></i>
													<dl>
														<dt>
															<b>{{ address.shipping_name }}</b>
															<b
																v-if="address.is_recent"
																class="mm_tag T=gray"
															>최근배송지</b>

															<dawn-tag v-if="address.is_dawn_delivery"></dawn-tag>
														</dt>
														<dd>{{ address.name }} / {{ address.tel }}</dd>
														<dd>{{ address.zip_code }}<br>{{ address.base_address }}<br>{{ address.detail_address }}</dd>
													</dl>

													<dawn-address-info
														v-if="address.is_dawn_delivery && address.entrance_description"
														:entrance-description="address.entrance_description"
													></dawn-address-info>
												</div>
												<button
													type="button"
													class="btn_remove"
													@click="removeAddress(address)"
												>
													<b>삭제</b>
												</button>
											</li>
											<li>
												<a
													class="mm_address-item"
													href="#"
													@click.prevent="overlayAddressCreate"
												>
													<i class="ico_plus"></i><b>신규 배송지 등록</b>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</template>
							<!-- (D) 등록된 배송지 정보가 없을 경우 아래와 같이 노출합니다 -->
							<template v-else>
								<a
									class="mm_address-item"
									href="#"
									@click.prevent="overlayAddressCreate"
								>
									<i class="ico_plus"></i><b>신규 배송지 등록</b>
								</a>
							</template>
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
								v-if="selectedShippingMessageTemplate.trim() === '직접 입력'"
								class="mm_syncer-delivery-note S=option-use"
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
								<template v-if="memberHasPersonClearanceCode && !editAblePersonalClearanceCode">
									<div

										class="mm_form-text"
									>
										<label>
											<span class="textfield text_readonly">{{ sheet.orderer_information.personal_clearance_code }}</span>
											<i class="bg_text"></i>
										</label>
									</div>
									<button
										type="button"
										class="mm_btn T=xs T=line btn_modify"
										@click="() => editAblePersonalClearanceCode = true"
									>
										<b>수정하기</b>
									</button>
									<div class="mm_check_box">
										<div class="mm_check-list">
											<ul>
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
								</template>
								<template v-else>
									<form-text
										v-model="form.orderer_info.personal_clearance_code"
										maxlength="13"
										placeholder="P로 시작하는 정보를 입력하세요"
									></form-text>
									<form-check
										v-model="form.orderer_info.is_remember_personal_clearance_code"
										label="다음 주문 시에도 계속 사용"
									></form-check>
									<div class="mm_note">
										<ul>
											<li>상품을 받는 분의 명의로 통관이 진행되므로 <strong class="mm_text-secondary">{{ selectedAddress?.name || '받는분' }} 님</strong>의 개인통관고유부호를 입력해주세요.</li>
											<li>해외배송 상품은 관세청 통관을 위해 수취인의 고유식별정보를 판매자에게 제공합니다.</li>
											<li>개인통관고유부호는 통관 시 주민등록번호 대신 사용 가능한 번호로, 관세청 사이트에서 발급 받으실 수 있습니다.</li>
										</ul>
									</div>
									<a
										class="btn_unipass"
										href="https://unipass.customs.go.kr/csp/persIndexRectOnslCrtf.do?qryIssTp=1&is_out_intent=Y"
										target="_blank"
									><b>개인통관고유부호 발급/확인 바로가기</b><i class="ico_link T=sm"></i></a>
									<div class="mm_check_box">
										<div class="mm_check-list">
											<ul>
												<li>
													<div class="mm_flex">
														<form-check
															v-model="form.orderer_info.is_agree_collect_personal_clearance_code"
															value="true"
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
															value="true"
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
								</template>
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
						<b class="text_contraction"><span class="text_count">
								<strong>{{ sheet.packs.length }}</strong><sub>건</sub></span>
							<span class="text_price"><strong>
								<!-- 결제 금액 - 배송비 -->
								{{ number(priceContext.goodsUnitPrice) }}
							</strong></span>
						</b>
					</template>
					<template #content>
						<div class="mm_order-item">
							<form-check
								v-model="applyMaximumDiscount"
								label="최대할인 적용"
							></form-check>
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
										><strong>{{ number(computePackShippingPrice(pack)) }}</strong></span>
									</p>
								</div>

								<dawn-order v-if="pack.is_dawn_delivery && selectedAddress && selectedAddress.is_dawn_delivery"></dawn-order>
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
															<p class="text_price"><strong>{{ number(totalDiscountedPriceByItemSet[itemSet.key]) }}</strong>
																<span
																	v-if="itemSet.list.some(item => item.appliable_immediately_sale)"
																	class="text_price-sale"
																>즉시할인 적용가</span>
															</p>
															<p class="text_option">{{ itemSet.option.name }} / {{ itemSet.ea }}개</p>
														</figcaption>
													</figure>
												</a>
												<div class="mm_product-item-footer">
													<div class="mm_product...footer-indent">
														<!-- (D) 쿠폰이 적용되지 않은 경우 -->
														<template v-if="usableCouponRegists(itemSet).length < 1">
															<button

																type="button"
																class="mm_btn T=sm"
																disabled
															>
																<b>쿠폰적용</b>
															</button>
														</template>
														<template v-else>
															<p>쿠폰 적용: {{ number(appliedCouponCountByItemSet[itemSet.key]) }}개</p>
															<a
																class="mm_btn T=sm T=primary"
																href="#"
																@click.prevent="overlayOrderCoupon"
															>
																<b>쿠폰적용</b>
															</a>
														</template>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</template>
				</dropdown>

				<template v-if="sheet.giveaway_groups.length > 0">
					<hr class="mm_line">
					<gift-order
						:giveaway-groups="sheet.giveaway_groups"
						:selected-item="form.giveaways"
						@update-selected="(_newItem) => { form.giveaways = _newItem }"
					></gift-order>
				</template>

				<hr class="mm_line">

				<!-- 적립금 사용 -->
				<dropdown
					class="T=order m_order-point"
					:is-active="true"
				>
					<template #button>
						<b>적립금 사용</b>
						<b class="text_contraction"><span class="text_point"><strong>{{ number(form.payment_info.using_point) }}</strong><sub>원</sub></span></b>
					</template>
					<template #content>
						<div class="mm_inner">
							<div class="mm_form_mix-linked">
								<form-text
									v-model.number="form.payment_info.using_point"
									:max="usablePointAmount"
									:default="0"
									input-mode="number"
									maxlength="50"
									:regexp="REGEXP.NUMBER"
									:placeholder="`사용 할 ${pointConfig.label_name}을 입력하세요`"
								></form-text>
								<form-check
									v-model="useAllPoint"
									label="모두 사용"
								></form-check>
							</div>
							<p class="text_point">
								보유 {{ pointConfig.label_name }} <strong>{{ number(sheet.orderer_information.point_balance) }}</strong><sub>원</sub>
							</p>
							<div class="mm_note">
								<ul>
									<li>{{ pointConfig.label_name }} 사용 시 상품 구매금액 비율로 계산되어 각 상품에 사용 적립금이 자동 적용 됩니다.</li>
									<li v-if="pointConfig.min_usable_balance > 0">
										<strong>최소 {{ number(pointConfig.min_usable_balance) }}{{ pointConfig.suffix }} 이상 보유 시 사용 가능</strong>합니다.
									</li>
									<li v-if="pointConfig.max_usable_amount > 0">
										<template v-if="pointConfig.max_usable_amount_type === 'KRW'">
											<strong>최대 {{ number(pointConfig.max_usable_amount) }}{{ pointConfig.suffix }}까지 사용 가능</strong>합니다. (배송비 제외)
										</template>
										<template v-else>
											<strong>최종 결제금액 대비 최대 {{ number(pointConfig.max_usable_amount) }}%까지 사용 가능</strong>합니다. (배송비 제외)
										</template>
									</li>
								</ul>
							</div>
						</div>
					</template>
				</dropdown>
				<hr class="mm_line">

				<!-- 최종 결제금액 -->
				<dropdown
					class="T=order"
					:is-active="true"
				>
					<template #button>
						<b>최종 결제금액</b>
						<b class="text_contraction"><span class="text_price mm_text-variable"><strong>{{ number(finalPaymentPrice) }}</strong></span></b>
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
													+ <strong>{{ number(totalShippingPrice) }}</strong>
												</p>
											</td>
										</tr>
										<tr v-if="priceContext.baseDiscountAmount > 0">
											<th scope="row">
												<b>회원할인</b>
											</th>
											<td>
												<p class="text_price">
													- <strong>{{ number(priceContext.baseDiscountAmount) }}</strong>
												</p>
											</td>
										</tr>
										<tr v-if="priceContext.nightSaleAmount > 0">
											<th scope="row">
												<b>심야할인</b>
											</th>
											<td>
												<p class="text_price">
													- <strong>{{ number(priceContext.nightSaleAmount) }}</strong>
												</p>
											</td>
										</tr>
										<tr v-if="priceContext.couponDiscountAmount > 0">
											<th scope="row">
												<b>쿠폰할인</b>
											</th>
											<td>
												<p class="text_price">
													- <strong>{{ number(priceContext.couponDiscountAmount) }}</strong>
												</p>
											</td>
										</tr>
										<tr v-if="priceContext.immediatelySaleAmount > 0">
											<th scope="row">
												<b>즉시할인</b>
											</th>
											<td>
												<p class="text_price">
													- <strong>{{ number(priceContext.immediatelySaleAmount) }}</strong>
												</p>
											</td>
										</tr>
										<tr v-if="form.payment_info.using_point">
											<th scope="row">
												<b>{{ pointConfig.label_name }} 사용</b>
											</th>
											<td>
												<p class="text_point">
													- <strong>{{ number(form.payment_info.using_point) }}</strong><sub>원</sub>
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
													<strong>{{ number(finalPaymentPrice) }}</strong>
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
					v-show="!isPayAllPoint"
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
										<div class="mm_note">
											<ul>
												<li>5만원 이상 구매 시, 할부 가능합니다.</li>
											</ul>
										</div>
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
										<refund-account-component
											:account="refundAccount"
											@refetch="fetchRefundAccount"
										>
										</refund-account-component>
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
										<refund-account-component
											:account="refundAccount"
											@refetch="fetchRefundAccount"
										>
										</refund-account-component>
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
					<b><strong>{{ number(finalPaymentPrice) }}</strong>원 결제하기</b>
				</button>
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref, computed, watch } from 'vue';
	import { useRouter, useRoute } from 'vue-router';
	import { useRouteParams } from '@vueuse/router';
	import { useAuthStore } from '$/stores/useAuthStore';
	import { useInAppBrowserContextStore } from '$/stores/useInAppBrowserContextStore';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import { useOrderStore } from '$/stores/useOrderStore';
	import config from '$/utils/config';
	import monsDate from '$/utils/date';
	import mons from '$/utils/mons';
	import { useAddress } from '$/composables/useAddress';
	import { useCardInstallment } from '$/composables/useCardInstallment';
	import { useCreditCardInstallMentUtil } from '$/composables/useCreditCardInstallMentUtil';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useFormatter } from '$/composables/useFormatter';
	import { useMyAddress } from '$/composables/useMyAddress';
	import { useMyRefundAccount } from '$/composables/useMyRefundAccount';
	import { useOrderSheet } from '$/composables/useOrderSheet';
	import { usePopupWindow } from '$/composables/usePopupWindow';
	import { useUserAgent } from '$/composables/useUserAgent';
	import { REGEXP } from '$/constants/REGEXP';
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import Toggle from '@/component/Toggle.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import FormRadio from '@/component/form/FormRadio.vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import FormText from '@/component/form/FormText.vue';
	import GiftOrder from '@/feature/gift/component/GiftOrder.vue';
	import DawnAddressInfo from '@/custom/dawn/component/DawnAddressInfo.vue';
	import DawnOrder from '@/custom/dawn/component/DawnOrder.vue';
	import DawnTag from '@/custom/dawn/component/DawnTag.vue';

	const layerContextStore = useLayerContextStore();
	const refundAccountComponent = defineAsyncComponent(() => import('@/page/order/component/OrderRefundAccount.vue'));
	const orderId = useRouteParams<string>('id');
	const { bom, loading } = mons();
	const { number } = useFormatter();
	const { member, refresh } = useAuthStore();
	const pointConfig = config('point');
	const { isInappBrowser, isMobileUser } = useUserAgent();
	const { applyHistoryPosition } = useInAppBrowserContextStore();
	const route = useRoute();
	const {
		getSheet,
		getPayingUrl,
	} = useOrderStore();

	const sheet = ref<OrderSheet>(await getSheet(orderId.value));
	const {
		shippingMessageTemplates,
		usableCouponRegists,
		appliedCouponCountByItemSet,
		applyMaximumDiscount,
		appliedCouponRegist,
		priceContext,
		getPayMethods,
		totalDiscountedPriceByItemSet,
		discountsByItem,
		depositExpireDate,
	} = useOrderSheet(sheet.value);

	/** 결제가능한 수단  */
	const myAddress = useMyAddress();
	const [pPayMethods, pMyAddress] = await Promise.all([
		getPayMethods(),
		myAddress.all(sheet.value.need_dawn_delivery_extra_info),
	]);

	if (!sheet.value.orderer_information.phone && member?.is_certificated) {
		const component = defineAsyncComponent(() => import('@/page/auth/certificate/AuthCertificate.vue'));
		layerContextStore.openOverlay(component, {
			props: {
				needVerify: true,
				redirectPath: `${route.fullPath}`,
			},
			onClose: async () => {
				location.reload();
			},
			onCancelClose: () => {
				bom.alert('본인인증을 취소 하셨습니다.\n 본인인증 후 상품구매가 가능합니다.\n 메인 페이지로 이동 됩니다.', () => {
					router.replace({
						name: 'Main',
					});
				});
			},
		});
	}

	/** 환불 계좌 처리 **/
	const { get: getRefundAccount } = useMyRefundAccount();
	const refundAccount = ref<RefundAccount|null>(null);
	getRefundAccount().then((pRefundAccount) => { refundAccount.value = pRefundAccount; });
	/** 환불계좌 패치 **/
	async function fetchRefundAccount() {
		refundAccount.value = await getRefundAccount();
	}

	const payMethods = ref<PayMethod[]>(pPayMethods);
	const addresses = ref(pMyAddress);
	const selectedPayMethodLabel = computed(() => {
		return payMethods.value.find((method) => {
			return method.code === form.value.payment_info.method;
		})?.label || '신용/체크카드';
	});
	const { form, validate } = useForm<OrderForm>({
			orderer_info: {
				email: sheet.value.orderer_information.email || '',
				personal_clearance_code: sheet.value.orderer_information.personal_clearance_code || '',
				is_agree_collect_personal_clearance_code: sheet.value.orderer_information.personal_clearance_code === null ? false : true,
				is_agree_provide_personal_clearance_code: false,
				is_remember_personal_clearance_code: sheet.value.orderer_information.personal_clearance_code === null ? false : true,
				name: member?.name || '',
				phone: sheet.value.orderer_information.phone,
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
				method: sheet.value.orderer_information.latest_payment_method_code || payMethods.value.find((method) => method.eng_label === 'credit_card')!.code,
				eng_label: '',
				using_point: 0,
				card_code: sheet.value.orderer_information.latest_payment_card_code || undefined,
				interest_month: 0,
				is_interest_free: false,
				is_partial_interest: false,
				bank_code: sheet.value.orderer_information.latest_payment_bank_code || undefined,
				depositor_name: sheet.value.orderer_information.latest_payment_depositor_name || '',
				cash_receipt_apply_type: sheet.value.orderer_information.latest_cash_receipt_apply_type || 3,
				cash_receipt_apply_key: sheet.value.orderer_information.latest_cash_receipt_apply_key || '',
				cash_receipt_phone_number: sheet.value.orderer_information.latest_cash_receipt_apply_type === 1
					? (sheet.value.orderer_information.latest_cash_receipt_apply_key || '')
					: '',
				cash_receipt_business_number: sheet.value.orderer_information.latest_cash_receipt_apply_type === 2
					? (sheet.value.orderer_information.latest_cash_receipt_apply_key || '')
					: '',
				for_payment_price: 0,
			},
			refund_account: null,
			packs: [],
			giveaways: sheet.value.giveaway_groups.map(giveAwayGroup => {
				return {
					goods_id: giveAwayGroup.goods_id,
					giveaway_id: null,
				};
			}),
			isOverseasShippingContains: sheet.value.need_personal_clearance_code,
			is_dawn_delivery: sheet.value.need_dawn_delivery_extra_info,
			my_pay_virtual_id: null,
		},
		{
			rule: {
				'orderer_info.email(이메일)': ['required', 'usableEmail'],
				'receive_address.id(배송지)': ['required'],
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
				'refund_account.bank_code(환불 계좌)': ['requiredIf:payment_info.eng_label,virtual_account,escrow'],
				'refund_account.owner_name(환불 계좌)': ['requiredIf:payment_info.eng_label,virtual_account,escrow'],
				'refund_account.account_number(환불 계좌)': ['requiredIf:payment_info.eng_label,virtual_account,escrow'],
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
					handler: (value): boolean => {
						if (form.value.payment_info.eng_label === 'virtual_account' && form.value.payment_info.cash_receipt_apply_type === 1) {
							const phoneNumberRegExp = /^010[0-9]{4}[0-9]{4}$/g;

							return `${value}`.match(phoneNumberRegExp) !== null;
						}

						return true;
					},
				},
				{
					name: 'validReceiptBusinessNumber',
					defaultMessageOnFailure: '올바른 사업자 번호를 입력해주세요.',
					handler: (value): boolean => {
						if (form.value.payment_info.eng_label === 'virtual_account' && form.value.payment_info.cash_receipt_apply_type === 2) {
							return value !== '' && `${value}`.match(/^[0-9]*$/g) !== null && `${value}`.length >= 10;
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

	const computePackShippingPrice = (pack: OrderSheetPack) => {
		let chargedShippingPrice = pack.charged_shipping_price;

		if (selectedAddressExtraShippingPrice.value) {
			chargedShippingPrice += pack.extra_shipping_price;
		}

		if (selectedAddress.value?.is_dawn_delivery && pack.is_dawn_delivery && pack.charged_shipping_price > 0) {
			chargedShippingPrice += pack.dawn_delivery_extra_shipping_price;
		}

		return chargedShippingPrice;
	};
	/** 결제수단 관련 **/
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

	/** 주소 관련 처리 **/
	const selectedAddressExtraShippingPrice = computed(() => {
		if (!form.value.receive_address.id) {
			return false;
		}

		return addressExtraInfo.value[form.value.receive_address.id]?.is_extra || false;
	});

	if (addresses.value.length > 0) {
		form.value.receive_address.id = (addresses.value.find(address => address.is_recent) || addresses.value[0]).id;
	}
	/** 배송지의 새벽배송지, 도서산간 여부 체크 용 **/
	const addressExtraInfo = ref <Record<number, { is_extra: boolean}>>({});
	const selectedAddress = computed(() => addresses.value.find(address => address.id === form.value.receive_address.id));
	const { isExtraAreaCheck } = useAddress();
	watch(selectedAddress, async (to, from) => {
		if (!to) {
			return;
		}

		if (from && sheet.value?.need_dawn_delivery_extra_info && !to.is_dawn_delivery) {
			bom.alert('새벽배송 가능한 지역이 아닙니다.\n 일반 배송으로 전환됩니다.');
		}

		if (addressExtraInfo.value[to.id]) {
			return;
		}

		addressExtraInfo.value[to.id] = {
			is_extra: await isExtraAreaCheck(to.zip_code, to.base_address),
		};
	}, {
		immediate: true,
	});
	const shippingMessage = ref(sheet.value.orderer_information.latest_shipping_message || '');
	const selectedShippingMessageTemplate = ref(shippingMessageTemplates.includes(shippingMessage.value) ? shippingMessage.value : '배송메모를 선택하세요');
	/** 고유 통관 부호 처리  **/
	const memberHasPersonClearanceCode = sheet.value.orderer_information.personal_clearance_code !== null;
	const editAblePersonalClearanceCode = ref<boolean>(false);
	const totalShippingPrice = computed(() => {
		let confirmedShippingPrice = priceContext.value.shippingPrice;

		if (selectedAddressExtraShippingPrice.value) {
			confirmedShippingPrice += priceContext.value.extraShippingPrice;
		}

		if (priceContext.value.shippingPrice > 0 && selectedAddress.value?.is_dawn_delivery) {
			confirmedShippingPrice += priceContext.value.dawnDeliveryExtraShippingPrice;
		}

		return confirmedShippingPrice;
	});

	const paymentPriceBeforePoint = computed(() => {
		return priceContext.value.goodsUnitPrice
			+ totalShippingPrice.value
			- priceContext.value.baseDiscountAmount
			- priceContext.value.nightSaleAmount
			- priceContext.value.couponDiscountAmount
			- priceContext.value.immediatelySaleAmount;
	});
	const finalPaymentPrice = computed(() => paymentPriceBeforePoint.value - form.value.payment_info.using_point);
	/** 포인트 사용처리 */
	const usablePointAmount = computed(() => {
		const balance = sheet.value?.orderer_information.point_balance || 0;
		const paymentPriceBeforePointWithoutShippingPrice = paymentPriceBeforePoint.value - totalShippingPrice.value;
		if (pointConfig.min_usable_balance > balance) {
			return 0;
		}

		if (pointConfig.max_usable_amount === 0) {
			return Math.min(
				paymentPriceBeforePointWithoutShippingPrice,
				balance,
			);
		}

		if (pointConfig.max_usable_amount_type === 'KRW') {
			return Math.min(
				paymentPriceBeforePointWithoutShippingPrice,
				pointConfig.max_usable_amount,
				balance,
			);
		}

		return Math.min(
			paymentPriceBeforePointWithoutShippingPrice,
			pointConfig.max_usable_amount * paymentPriceBeforePointWithoutShippingPrice / 100,
			balance,
		);
	});
	const useAllPoint = computed({
		get: () => form.value.payment_info.using_point !== 0 && form.value.payment_info.using_point === usablePointAmount.value,
		set: (value) => form.value.payment_info.using_point = value ? usablePointAmount.value : form.value.payment_info.using_point,
	});

	const cardInstallmentInfo = ref<Nullable<CardInstallment>|undefined>(undefined);
	const isInterestDisabled = computed(() => {
		if (!form.value.payment_info.card_code) {
			return true;
		}

		return finalPaymentPrice.value <= 50000;
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
	/** 실제 결제 카드 무이자 처리  **/

	async function overlayCardBenefit() {
		const component = defineAsyncComponent(() => import('@/page/card-benefit/CardBenefit.vue'));
		if (cardInstallmentInfo.value === undefined) {
			cardInstallmentInfo.value = await getCardInterest();
		}

		return layerContextStore.openOverlay(component, {
			props: {
				cardInstallmentInfo: cardInstallmentInfo.value,
			},
		});
	}

	function overlayAddressCreate() {
		const component = defineAsyncComponent(() => import('@/page/address/create/AddressCreate.vue'));
		if (addresses.value.length > 4) {
			return bom.alert('배송지는 5개까지 등록가능합니다.\n 미사용 배송지 삭제 후 이용 부탁드립니다.');
		}

		return layerContextStore.openOverlay(component, {
			props: {
				needDawnDeliveryCheck: sheet.value?.need_dawn_delivery_extra_info || false,
			},
			onClose: async (hasNewAddress) => {
				if (hasNewAddress) {
					addresses.value = await myAddress.all(sheet.value?.need_dawn_delivery_extra_info || false);
				}
			},
		});
	}
	/** 배송지 삭제  */
	async function removeAddress(address: MyShippingAddressDetail) {
		loading.show();
		try {
			await myAddress.remove(address.id);
			addresses.value = await myAddress.all(sheet.value?.need_dawn_delivery_extra_info || false);
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}

	function overlayOrderUnipass() {
		const component = defineAsyncComponent(() => import('@/page/order/unipass/OrderUnipass.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayOrderCoupon() {
		const component = defineAsyncComponent(() => import('@/page/order/coupon/OrderCoupon.vue'));

		return layerContextStore.openOverlay(component, {
			props: {
				sheet,
				appliedCouponRegist,
			},
			onClose: (newApply?: OrderSheetAppliedCouponRegist) => {
				if (!newApply) {
					return;
				}
				appliedCouponRegist.value = newApply;
			},
		});
	}


	const isPayAllPoint = computed(() => paymentPriceBeforePoint.value == form.value.payment_info.using_point);

	const enterUrl = ref<string|undefined>(undefined);
	const router = useRouter();

	async function startProcess() {
		form.value.payment_info.eng_label = paymentMethodEngLabel.value || '';
		if (!sheet.value) {
			return;
		}

		const packs: PackForOrder[] = sheet.value.packs.map((pack) => {
			const packItems = pack.items.map(item => {
				const discountByItem = discountsByItem.value[item.uuid];

				return {
					brand_id: item.brand_id,
					goods_id: item.goods_id,
					goods_base_discounted_price: item.goods_base_discounted_price,
					option_id: item.option_id,
					option_extra_amount: item.option_extra_amount,
					night_sale_id: item.night_sale_id,
					night_sale_amount: item.night_sale_amount,
					regist_coupon_id: appliedCouponRegist.value[item.uuid] ? appliedCouponRegist.value[item.uuid]?.regist_id : null,
					regist_coupon_amount: discountByItem ? discountByItem.couponDiscountAmount : 0,
					immediately_sale_id: item.appliable_immediately_sale ? item.appliable_immediately_sale.id : null,
					immediately_sale_amount: discountByItem ? discountByItem.immediatelySaleAmount : 0,
					goods_applied_all_discounted_price: discountByItem.totalDiscountedPrice,
				};
			});

			return {
				charged_shipping_price: pack.charged_shipping_price,
				extra_shipping_price: selectedAddressExtraShippingPrice.value ? pack.extra_shipping_price : 0,
				dawn_delivery_extra_shipping_price: (pack.is_dawn_delivery && selectedAddress.value?.is_dawn_delivery) && pack.charged_shipping_price !== 0 ? pack.dawn_delivery_extra_shipping_price : 0,
				shipping_rule_id: pack.shipping_rule_id,
				items: packItems,
			} as PackForOrder;
		});

		form.value.payment_info.for_payment_price = finalPaymentPrice.value;
		form.value.payment_info.method = isPayAllPoint.value ? 60 : form.value.payment_info.method;

		if (form.value.payment_info.cash_receipt_apply_type === 1) {
			form.value.payment_info.cash_receipt_apply_key = form.value.payment_info.cash_receipt_phone_number;
		}
		else if (form.value.payment_info.cash_receipt_apply_type === 2) {
			form.value.payment_info.cash_receipt_apply_key = form.value.payment_info.cash_receipt_business_number;
		}
		else if (form.value.payment_info.cash_receipt_apply_type === 3) {
			form.value.payment_info.cash_receipt_apply_key = '';
		}

		form.value.refund_account = refundAccount.value
			? {
				owner_name: refundAccount.value.owner_name,
				bank_code: `${refundAccount.value.bank_code}`,
				account_number: refundAccount.value.account_number,
			}
			: null;

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
			refund_account: refundAccount.value
				? {
					owner_name: refundAccount.value.owner_name,
					bank_code: `${refundAccount.value.bank_code}`,
					account_number: refundAccount.value.account_number,
				}
				: null,
			packs: packs,
			receive_address: Object.assign({
				phone: selectedAddress.value?.tel || '',
				message: selectedShippingMessageTemplate.value === '직접 입력'
					? shippingMessage.value
					: selectedShippingMessageTemplate.value === '배송메모를 선택하세요' ? '' : selectedShippingMessageTemplate.value,
				is_extra_area: selectedAddressExtraShippingPrice.value,
			}, selectedAddress.value),
			payment_info: form.value.payment_info,
			giveaways: form.value.giveaways,
			my_pay_virtual_id: null,
			is_dawn_delivery: sheet.value.need_dawn_delivery_extra_info && (selectedAddress.value?.is_dawn_delivery || false),
		};

		if (sheet.value.need_dawn_delivery_extra_info && (selectedAddress.value?.is_dawn_delivery || false) && monsDate().isSameOrAfter(monsDate().format('YYYY-MM-DD 17:30:00'), 'minute')) {
			return bom.alert(`금일 새벽배송 주문가능 시간이 마감되어 \n익일 새벽배송으로 발송됩니다\n (새벽배송 주문 가능 시간 : 17시 30분이전)`, () => {
				payingPopupOpen(orderData);
			});
		}

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
		const popupWindow = usePopupWindow(`order-action_${orderId}`, enterUrl, options);
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
			// useErrorAlert(e);
			popupWindow.close();
			router.replace({
				name: 'OrderResult',
				params: {
					id: orderId.value,
				},
			});
		}
		finally {
			if (!isInappBrowser.value && !new RegExp('FBAN|FBAV|Instagram', 'i').test(navigator.userAgent)) {
				router.replace({
					name: 'OrderResult',
					params: {
						id: orderId.value,
					},
				});
				popupWindow.close();
			}
		}
	};
</script>

<style lang="scss">
	@use '../../asset/scss/helper/mixin';
	@use '../../asset/scss/helper/function';

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