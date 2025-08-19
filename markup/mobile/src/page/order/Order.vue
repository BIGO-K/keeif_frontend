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
			<div class="m_order">
				<!-- 받는분 정보 -->
				<dropdown
					class="T=order"
					:is-active="true"
				>
					<template #button>
						<b>받는분 정보</b>
						<b class="text_contraction">나의자취방</b>
					</template>
					<template #content>
						<div class="mm_inner">
							<h6 class="mm_text-label">
								<b>이메일 주소</b>
							</h6>
							<form-text
								maxlength="50"
								placeholder="이메일 주소를 입력하세요(필수입력)"
							></form-text>
							<h6 class="mm_text-label">
								<b>배송지 정보</b>
							</h6>
							<!-- (D) 등록된 배송지 정보가 있을 경우 아래와 같이 노출합니다 -->
							<div
								v-if="true"
								class="mm_address-list T=scroller"
							>
								<div class="mm_scroller T=x">
									<ul>
										<li>
											<input
												type="radio"
												name="dev_radio-address"
												title="나의자취방"
												checked
											>
											<div class="mm_address-item">
												<i class="ico_form-radio T=circle"></i>
												<dl>
													<dt>
														<b>나의자취방</b>
														<b class="mm_tag T=gray">최근배송지</b>

														<dawn-tag></dawn-tag>
													</dt>
													<dd>홍길동 / 010-1234-1234</dd>
													<dd>06616<br>부산광역시 강서구 녹산산단382로 14번가길 10~29번지(송정동)'<br>302동 101호</dd>
												</dl>
												<dawn-address-info></dawn-address-info>
											</div>
											<button
												type="button"
												class="btn_remove"
											>
												<b>삭제</b>
											</button>
										</li>
										<li>
											<input
												type="radio"
												name="dev_radio-address"
												title="직장"
											>
											<div class="mm_address-item">
												<i class="ico_form-radio T=circle"></i>
												<dl>
													<dt><b>직장</b></dt>
													<dd>홍길동 / 010-1234-1234</dd>
													<dd>06616<br>서울특별시 도봉구 창2동 647-12<br>가람마을10단지동양엔파트월드메르디앙 302동 101호</dd>
												</dl>
											</div>
											<button
												type="button"
												class="btn_remove"
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
							<!-- (D) 등록된 배송지 정보가 없을 경우 아래와 같이 노출합니다 -->
							<a
								v-else
								class="mm_address-item"
								href="#"
								@click.prevent="overlayAddressCreate"
							>
								<i class="ico_plus"></i><b>배송지를 등록하세요</b>
							</a>

							<form-select
								v-model="shippingNote"
								:v-model="sortDeliveryNote"
							>
								<option>배송메모를 선택하세요</option>
								<option value="etc">
									직접입력
								</option>
							</form-select>

							<div
								class="mm_syncer-delivery-note"
								:class="{ 'S=select-use': shippingNote === 'etc' }"
							>
								<form-text
									maxlength="20"
									placeholder="배송메모를 입력하세요"
								></form-text>
							</div>

							<!-- 해외배송 개인통관고유부호 -->
							<section class="m_order-unipass">
								<h6 class="mm_text-label">
									<b>해외배송 개인통관고유부호</b>
								</h6>
								<form-text
									maxlength="13"
									placeholder="P로 시작하는 정보를 입력하세요"
								></form-text>
								<form-check
									v-model="saveUnipass"
									label="다음 주문 시에도 계속 사용"
								></form-check>
								<div class="mm_note">
									<ul>
										<li>상품을 받는 분의 명의로 통관이 진행되므로 <strong class="mm_text-secondary">홍길동 님</strong>의 개인통관고유부호를 입력해주세요.</li>
										<li>해외배송 상품은 관세청 통관을 위해 수취인의 고유식별정보를 판매자에게 제공합니다.</li>
										<li>개인통관고유부호는 통관 시 주민등록번호 대신 사용 가능한 번호로, 관세청 사이트에서 발급 받으실 수 있습니다.</li>
									</ul>
								</div>
								<mm-link
									class="btn_unipass"
									to="http://"
								>
									<b>개인통관고유부호 발급/확인 바로가기</b><i class="ico_link T=sm"></i>
								</mm-link>
								<div class="mm_check_box">
									<div class="mm_check-list">
										<ul>
											<li>
												<div class="mm_flex">
													<form-check
														v-model="unipassCollectAgree"
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
														v-model="unipassSellerAgree"
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
							<section class="m_order-unipass">
								<h6 class="mm_text-label">
									<b>해외배송 개인통관고유부호</b>
								</h6>
								<div class="mm_form-text">
									<label>
										<span class="textfield text_readonly">P123456789</span>
										<i class="bg_text"></i>
									</label>
								</div>
								<button
									type="button"
									class="mm_btn T=xs T=line btn_modify"
								>
									<b>수정하기</b>
								</button>
								<div class="mm_check_box">
									<div class="mm_check-list">
										<ul>
											<li>
												<div class="mm_flex">
													<form-check
														v-model="overseasSellerAgree"
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
						<b class="text_contraction"><span class="text_count"><strong>3</strong><sub>건</sub></span><span class="text_price"><strong>239,000</strong></span></b>
					</template>
					<template #content>
						<div class="mm_order-item">
							<form-check
								v-model="maxDiscount"
								label="최대할인 적용"
							></form-check>
							<div class="mm_order-item-seller">
								<div class="mm_order...seller-head">
									<p class="text_ship">
										<i class="ico_ship"></i><span class="text_price"><strong>2,500</strong></span>
									</p>
								</div>

								<dawn-order></dawn-order>

								<div class="mm_product-list T=sm">
									<ul>
										<li>
											<p class="text_seller">
												<i class="ico_shop"></i>엠몬스타
											</p>
											<div class="mm_product-item">
												<a>
													<figure>
														<lazyload
															class="mm_bg-cover image_product"
															src="/image/_sample/prod_x1_1.png"
														></lazyload>
														<figcaption>
															<p class="text_brand">엠몬스타</p>
															<p class="text_product">[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140</p>
															<p class="text_price"><strong>54,800</strong><span class="text_price-sale">즉시할인 적용가</span></p>
															<p class="text_option">모로오렌지 클렌즈 / 60일분 2Box / 마이해빗 보틀 1 (-37,000원) / 1개</p>
														</figcaption>
													</figure>
												</a>
												<div class="mm_product-item-footer">
													<div class="mm_product...footer-indent">
														<p>쿠폰 적용: 1개</p>
														<!-- (D) 쿠폰이 적용되지 않은 경우 -->
														<a
															class="mm_btn T=sm T=primary"
															href="#"
															@click.prevent="overlayOrderCoupon"
														>
															<b>쿠폰적용</b>
														</a>
													</div>
												<!-- <p class="text_point">사용 적립금<b><strong>3,000</strong><sub>원</sub></b></p> -->
												</div>
											</div>
										</li>
										<li>
											<p class="text_seller">
												<i class="ico_shop"></i>엠몬스타
											</p>
											<div class="mm_product-item">
												<a>
													<figure>
														<lazyload
															class="mm_bg-cover image_product"
															src="/image/_sample/prod_x1_2.png"
														></lazyload>
														<figcaption>
															<p class="text_brand">엠몬스타</p>
															<p class="text_product">[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140</p>
															<p class="text_price"><strong>54,800</strong><span class="text_price-sale">즉시할인 적용가</span></p>
															<p class="text_option">모로오렌지 클렌즈 / 60일분 2Box / 마이해빗 보틀 1 (-37,000원) / 1개</p>
														</figcaption>
													</figure>
												</a>
												<div class="mm_product-item-footer">
													<div class="mm_product...footer-indent">
														<p>쿠폰 적용: 1개</p>
														<!-- (D) 쿠폰이 적용된 상태일 경우 -->
														<a
															class="mm_btn T=sm T=primary"
															href="#"
															@click.prevent="overlayOrderCoupon"
														>
															<b>쿠폰적용</b>
														</a>
													</div>
												<!-- <p class="text_point">사용 적립금<b><strong>3,000</strong><sub>원</sub></b></p> -->
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div class="mm_order-item-seller">
								<div class="mm_order...seller-head">
									<p class="text_ship">
										<i class="ico_ship"></i><span class="text_price"><strong>2,500</strong></span>
									</p>
								</div>
								<div class="mm_product-list T=sm">
									<ul>
										<li>
											<p class="text_seller">
												<i class="ico_shop"></i>엠몬스타
											</p>
											<div class="mm_product-item">
												<a>
													<figure>
														<lazyload
															class="mm_bg-cover image_product"
															src="/image/_sample/prod_x1_2.png"
														></lazyload>
														<figcaption>
															<p class="text_brand">엠몬스타</p>
															<p class="text_product">[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140</p>
															<p class="text_price"><strong>54,800</strong></p>
															<p class="text_option">베이지 FREE / 1개</p>
														</figcaption>
													</figure>
												</a>
												<div class="mm_product-item-footer">
													<div class="mm_product...footer-indent">
														<p>쿠폰 적용: 0개</p>
														<!-- (D) 쿠폰 적용이 불가능한 경우 -->
														<button
															type="button"
															class="mm_btn T=sm"
															disabled
														>
															<b>쿠폰적용</b>
														</button>
													</div>
												<!-- <p class="text_point">사용 적립금<b><strong>0</strong><sub>원</sub></b></p> -->
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</template>
				</dropdown>

				<template v-if="true">
					<hr class="mm_line">
					<gift-order></gift-order>
				</template>

				<hr class="mm_line">

				<!-- 적립금 사용 -->
				<dropdown
					class="T=order m_order-point"
					:is-active="true"
				>
					<template #button>
						<b>적립금 사용</b>
						<b class="text_contraction"><span class="text_point"><strong>1,200</strong><sub>원</sub></span></b>
					</template>
					<template #content>
						<div class="mm_inner">
							<div class="mm_form_mix-linked">
								<form-text
									type="number"
									maxlength="50"
									placeholder="사용 할 적립금을 입력하세요"
								></form-text>
								<form-check
									v-model="pointAllUse"
									label="모두 사용"
								></form-check>
							</div>
							<p class="text_point">
								보유 적립금 <strong>210,000</strong><sub>원</sub>
							</p>
							<div class="mm_note">
								<ul>
									<li>적립금 사용 시 상품 구매금액 비율로 계산되어 각 상품에 사용 적립금이 자동 적용 됩니다.</li>
									<li><strong>최소 5,000원 이상 보유 시 사용 가능</strong>합니다.</li>
									<li><strong>최대 30,000원까지 사용 가능</strong>합니다.</li>
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
						<b class="text_contraction"><span class="text_price mm_text-variable"><strong>239,000</strong></span></b>
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
													<strong>210,000</strong>
												</p>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>배송비</b>
											</th>
											<td>
												<p class="text_price">
													+ <strong>2,500</strong>
												</p>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>회원할인</b>
											</th>
											<td>
												<p class="text_price">
													- <strong>6,200</strong>
												</p>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>쿠폰할인</b>
											</th>
											<td>
												<p class="text_price">
													- <strong>8,540</strong>
												</p>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>즉시할인</b>
											</th>
											<td>
												<p class="text_price">
													- <strong>8,540</strong>
												</p>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>적립금 사용</b>
											</th>
											<td>
												<p class="text_point">
													- <strong>2,450</strong><sub>원</sub>
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
													<strong>201,510</strong>
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
						<b class="text_contraction">신용/체크카드</b>
					</template>
					<template #content>
						<ul>
							<li>
								<div>
									<!-- 결제수단 목록 -->
									<div class="m_order-payment-method">
										<ul>
											<li>
												<form-radio
													v-model="paymentMethod"
													name="dev_radio-payment"
													value="card"
												>
													<b class="mm_block">
														<i class="ico_credit-card"></i>
														<span class="text_label">신용/체크카드</span>
													</b>
												</form-radio>
											</li>
											<li>
												<form-radio
													v-model="paymentMethod"
													name="dev_radio-payment"
													value="deposit"
												>
													<b class="mm_block">
														<i class="ico_virtual-account"></i>
														<span class="text_label">무통장 입금</span>
													</b>
												</form-radio>
											</li>
											<li>
												<form-radio
													v-model="paymentMethod"
													name="dev_radio-payment"
													value="phone"
												>
													<b class="mm_block">
														<i class="ico_mobile"></i>
														<span class="text_label">휴대폰</span>
													</b>
												</form-radio>
											</li>
											<li>
												<form-radio
													v-model="paymentMethod"
													name="dev_radio-payment"
													value="escrow"
												>
													<b class="mm_block">
														<i class="ico_escrow"></i>
														<span class="text_label">에스크로 결제</span>
													</b>
												</form-radio>
											</li>

											<!--
												// FIXME
												유료기능 간편결제(네이버페이, 카카오페이, 페이코, 토스)는
												마크업 기준에서는 유료 기능별로 컴포넌트로 구분되어 있지만
												프론트 개발 기준에서는 데이터 연동을 기준으로 하기 때문에 컴포넌트로 나눠져 있는게
												오히려 비효율적이고 불필요한 코드가 늘게 되어 주문결제의 간편결제 유료 기능만 컴포넌트로 나누지 않습니다.
												추후 개선 필요
											-->
											<li>
												<form-radio
													v-model="paymentMethod"
													class="T=payment-naverpay"
													name="dev_radio-payment"
													value="naverpay"
												>
													<b class="mm_block">
														<i class="ico_naverpay"></i>
														<span class="text_label">네이버페이</span>
													</b>
												</form-radio>
											</li>
											<li>
												<form-radio
													class="T=payment-kakaopay"
													name="dev_radio-payment"
												>
													<b class="mm_block">
														<i class="ico_kakaopay"></i>
														<span class="text_label">카카오페이</span>
													</b>
												</form-radio>
											</li>
											<li>
												<form-radio
													v-model="paymentMethod"
													class="T=payment-payco"
													name="dev_radio-payment"
													value="payco"
												>
													<b class="mm_block">
														<i class="ico_payco"></i>
														<span class="text_label">페이코</span>
													</b>
												</form-radio>
											</li>
											<li>
												<form-radio
													class="T=payment-toss"
													name="dev_radio-payment"
												>
													<b class="mm_block">
														<i class="ico_toss"></i>
														<span class="text_label">토스페이</span>
													</b>
												</form-radio>
											</li>
										</ul>
									</div>

									<!-- 신용/체크카드 -->
									<div
										class="mm_syncer-method-card"
										:class="{ 'S=radio-use': paymentMethod === 'card' }"
									>
										<form-select :v-model="sortCard">
											<option>카드를 선택하세요</option>
										</form-select>
										<form-select :v-model="sortInstallment">
											<option>일시불</option>
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
										:class="{ 'S=radio-use': paymentMethod === 'deposit' }"
									>
										<div class="mm_inner">
											<form-select :v-model="sortBank">
												<option>은행을 선택하세요</option>
											</form-select>
											<form-text
												placeholder="입금자명을 입력하세요"
											></form-text>
											<p>입금기한: <strong class="mm_text-secondary">2022-01-01 23:59:59 까지</strong></p>
										</div>
										<section class="m_order-payment-receipt">
											<h6 class="mm_strapline">
												<b>현금영수증 발급신청</b>
											</h6>
											<ul class="mm_flex T=equal">
												<li>
													<form-radio
														v-model="depositReceipt"
														name="dev_radio-receipt"
														value="income"
													>
														<b class="mm_block">
															<span class="text_label">소득공제용</span>
														</b>
													</form-radio>
												</li>
												<li>
													<form-radio
														v-model="depositReceipt"
														name="dev_radio-receipt"
														value="expense"
													>
														<b class="mm_block">
															<span class="text_label">지출증빙용</span>
														</b>
													</form-radio>
												</li>
												<li>
													<form-radio
														v-model="depositReceipt"
														name="dev_radio-receipt"
														value="none"
													>
														<b class="mm_block">
															<span class="text_label">신청안함</span>
														</b>
													</form-radio>
												</li>
											</ul>
											<div
												class="mm_syncer-receipt-income"
												:class="{ 'S=radio-use': depositReceipt === 'income' }"
											>
												<form-text
													type="tel"
													maxlength="11"
													placeholder="휴대폰 번호(숫자만 입력하세요)"
												></form-text>
											</div>
											<div
												class="mm_syncer-receipt-expense"
												:class="{ 'S=radio-use': depositReceipt === 'expense' }"
											>
												<form-text
													type="number"
													placeholder="사업자 등록번호(숫자만 입력하세요)"
												></form-text>
											</div>
										</section>
										<section>
											<h6 class="mm_strapline">
												<b>환불 계좌 관리</b>
											</h6>
											<!-- (D) 등록된 계좌가 있을 경우 노출합니다. -->
											<!--
												<div class="mm_order-refund">
												<p class="text_bank">국민은행</p>
												<p class="text_name">홍길동</p>
												<p>1234567891234</p>
												<mm-link
												class="mm_btn T=xs T=dark"
												:to="{ name: 'MyRefundUpdate' }"
												>
												<b>변경하기</b><i class="ico_link T=sm"></i>
												</mm-link>
												</div>
											-->
											<!-- (D) 등록된 계좌가 없을 경우 노출합니다. -->
											<div class="mm_order-refund-none">
												<p>환불 계좌를 등록하세요</p>
												<a
													class="mm_btn T=dark"
													href="#"
													@click.prevent="overlayMyRefundCreate"
												>
													<b>환불 계좌 등록하기</b>
												</a>
											</div>
											<div class="mm_note">
												<ul>
													<li>입력하신 계좌 정보는 환불 목적으로만 이용되고 있습니다.</li>
												</ul>
											</div>
										</section>
									</div>

									<!-- 에스크로 -->
									<div
										class="mm_syncer-method-escrow"
										:class="{ 'S=radio-use': paymentMethod === 'escrow' }"
									>
										<div class="mm_note">
											<ul>
												<li>에스크로 결제 건은 부분 취소가 불가능하고, 전체 취소만 가능합니다.</li>
											</ul>
										</div>
										<hr class="mm_line">
										<section>
											<h6 class="mm_strapline">
												<b>환불 계좌 관리</b>
											</h6>
											<!-- (D) 등록된 계좌가 있을 경우 노출합니다. -->
											<div class="mm_order-refund">
												<p class="text_bank">
													국민은행
												</p>
												<p class="text_name">
													홍길동
												</p>
												<p>1234567891234</p>
												<a
													class="mm_btn T=xs T=dark"
													href="#"
													@click.prevent="overlayMyRefundUpdate"
												>
													<b>변경하기</b>
												</a>
											</div>
											<!-- (D) 등록된 계좌가 없을 경우 노출합니다. -->
											<!--
												<div class="mm_order-refund-none">
												<p>환불 계좌를 등록하세요</p>
												<a
												class="mm_btn T=dark"
												href="#"
												@click.prevent="overlayMyRefundCreate"
												>
												<b>환불 계좌 등록하기</b>
												</a>
												</div>
											-->
											<div class="mm_note">
												<ul>
													<li>입력하신 계좌 정보는 환불 목적으로만 이용되고 있습니다.</li>
												</ul>
											</div>
										</section>
									</div>

									<!-- 네이버 페이 -->
									<div
										class="mm_syncer-method-naverpay"
										:class="{ 'S=radio-use': paymentMethod === 'naverpay' }"
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
										:class="{ 'S=radio-use': paymentMethod === 'payco' }"
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
				>
					<b><strong>34,590</strong>원 결제하기</b>
				</button>
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
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

	function overlayCardBenefit() {
		const component = defineAsyncComponent(() => import('@/page/card-benefit/CardBenefit.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayAddressCreate() {
		const component = defineAsyncComponent(() => import('@/page/address/create/AddressCreate.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayOrderUnipass() {
		const component = defineAsyncComponent(() => import('@/page/order/unipass/OrderUnipass.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayMyRefundCreate() {
		const component = defineAsyncComponent(() => import('@/page/mypage/refund/create/MyRefundCreate.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayMyRefundUpdate() {
		const component = defineAsyncComponent(() => import('@/page/mypage/refund/update/MyRefundUpdate.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayOrderCoupon() {
		const component = defineAsyncComponent(() => import('@/page/order/coupon/OrderCoupon.vue'));

		return layerContextStore.openOverlay(component);
	}

	const sortDeliveryNote = ref('');
	const shippingNote = ref('');
	const sortCard = ref('');
	const sortInstallment = ref('');
	const sortBank = ref('');
	const paymentMethod = ref('');
	const depositReceipt = ref('');
	const maxDiscount = ref(false);
	const saveUnipass = ref(false);
	const pointAllUse = ref(false);
	const unipassCollectAgree = ref(false);
	const unipassSellerAgree = ref(false);
	const overseasSellerAgree = ref(false);
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
	// @use '../../asset/scss/helper/mixin';
	@use '../../asset/scss/helper/mixin';
	@use '../../asset/scss/helper/function';

	.m_order-payment {
		// 결제 수단
		&-method {
			.mm_form-radio {
				// 결제수단 아이콘 클래스명은 개발팀 요청으로 지정된 클래스이며, 주문결제 페이지에서만 사용합니다.
				$payments: (naverpay, 55px, 22px, #00c73c, 31px, 'ico_naverpay.svg'), (kakaopay, 54px, 18px, #47292b, 34px, 'ico_kakaopay.svg'),
					(payco, 56px, 14px, #fa1414, 35px, 'ico_payco.svg'), (toss, 83px, 16px, #0064ff, 34px, 'ico_toss.png');
				@each $payment, $width, $height, $color, $top, $url in $payments {
					.ico_#{$payment} {
						top: $top;

						&::before {
							width: $width;
							height: $height;
							@if $payment == toss {
								@include mixin.svg(none);
								@include mixin.background(transparent url('/image/common/#{$url}') no-repeat '0 0/cover');
							}
							@else {
								@include mixin.svg(#888 url('/image/common/#{$url}'));
							}
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