<template>
	<layout title="주문 상세보기">
		<section
			v-if="order"
			class="m_myorder-detail"
		>
			<h3>
				<b>{{ date(order.ordered_at, "YYYY.MM.DD") }}</b>
				<strong>주문번호: {{ order.order_id }}</strong>
			</h3>
			<hr class="mm_line">
			<!-- 주문자 정보 -->
			<dropdown
				class="T=order"
				:is-active="true"
			>
				<template #button>
					<b>주문자 정보</b>
				</template>
				<template #content>
					<div class="mm_inner">
						<div class="mm_order-info">
							<table>
								<tbody>
									<tr>
										<th scope="row">
											<b>주문자 이름</b>
										</th>
										<td>{{ order.orderer_info.name }}</td>
									</tr>
									<tr>
										<th scope="row">
											<b>휴대폰 번호</b>
										</th>
										<td>{{ order.orderer_info.tel }}</td>
									</tr>
									<tr>
										<th scope="row">
											<b>이메일 주소</b>
										</th>
										<td>{{ order.orderer_info.email }}</td>
									</tr>
									<tr v-if="order.orderer_info.personal_clearance_code">
										<th scope="row">
											<b>개인통관<br> 고유번호</b>
										</th>
										<td>{{ order.orderer_info.personal_clearance_code }}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</template>
			</dropdown>
			<hr class="mm_line">

			<!-- 배송 정보 -->
			<dropdown
				class="T=order"
				:is-active="true"
			>
				<template #button>
					<b>배송 정보</b>
				</template>
				<template #content>
					<div class="mm_inner">
						<div class="mm_order-info">
							<table>
								<caption>상품 받을 주소</caption>
								<tbody>
									<tr>
										<th scope="row">
											<b>받는 사람</b>
										</th>
										<td>{{ order.shipping_address.name }}</td>
									</tr>
									<tr>
										<th scope="row">
											<b>휴대폰 번호</b>
										</th>
										<td>{{ order.shipping_address.tel }}</td>
									</tr>
									<tr>
										<th scope="row">
											<b>주소</b>
										</th>
										<td>{{ order.shipping_address.zip_code }}<br>{{ order.shipping_address.base_address }} {{ order.shipping_address.detail_address }}</td>
									</tr>

									<dawn-order-address-info
										v-if="order.shipping_address.entrance_description"
										:entrance-description="order.shipping_address.entrance_description"
									></dawn-order-address-info>

									<tr v-if="order.shipping_address.message">
										<th scope="row">
											<b>배송메모</b>
										</th>
										<td>{{ order.shipping_address.message }}</td>
									</tr>
								</tbody>
							</table>
							<!-- (D) '입금 대기, 결제 완료' 주문일 경우 '주소변경' 버튼을 노출합니다. -->
							<a
								v-if="order.shipping_address_changeable"
								class="mm_btn T=xs T=line btn_address-change"
								href="#"
								@click.prevent="overlayAddress"
							>
								<b>주소변경</b>
							</a>
						</div>
					</div>
				</template>
			</dropdown>
			<hr class="mm_line">

			<!-- 구매 상품 -->
			<dropdown
				class="T=order"
				:is-active="true"
			>
				<template #button>
					<b>구매 상품</b>
				</template>
				<template #content>
					<div class="mm_order-item">
						<template
							v-for="pack in order.packs"
							:key="pack.shipping_rule_id"
						>
							<div
								v-for="seller in pack.sellers"
								:key="seller.id"
								class="mm_order-item-seller"
							>
								<div class="mm_order...seller-head">
									<h5><i class="ico_shop"></i><b>{{ seller.name }}</b></h5>
									<a
										href="#"
										@click.prevent="overlayMyInquirySellerCreate(order.order_id, seller)"
									>
										<b>판매자 문의하기</b>
									</a>
								</div>
								<div class="mm_product-list T=sm">
									<ul>
										<li
											v-for="orderItem in seller.order_items"
											:key="orderItem.id"
										>
											<div class="mm_product-item">
												<mm-link :to="{ name: 'ProductDetail', params: { id: orderItem.goods.id } }">
													<figure>
														<lazyload
															class="mm_bg-cover image_product"
															:src="orderItem.goods.thumbnail_url"
														></lazyload>
														<figcaption>
															<dawn-tag v-if="pack.is_dawn_delivery"></dawn-tag>
															<p class="text_status">
																{{ orderItem.order_status_label }}
																<b
																	v-if="orderItem.refund_status_label"
																	class="text_refund"
																>
																	{{ orderItem.refund_status_label }}
																</b>
															</p>
															<p class="text_brand">
																{{ orderItem.goods.brand_name }}
															</p>
															<p class="text_product">
																{{ orderItem.goods.name }}
															</p>
															<p class="text_price">
																<strong>{{ number(orderItem.paid_price + orderItem.point_used) }}</strong>
															</p>
															<p class="text_option">
																{{ `${optionText(orderItem.goods.option_name)} / 1개` }}
															</p>
														</figcaption>
													</figure>
												</mm-link>
												<div class="mm_product-item-footer">
													<p
														v-if="orderItem.exchanged_option_name"
														class="text_changed"
													>
														<strong class="mm_text-variable">변경된 옵션</strong>
														<span>{{ optionText(orderItem.exchanged_option_name) }} / 1개</span>
													</p>
													<div class="mm_btn_box">
														<div class="mm_flex T=equal">
															<mm-link
																v-if="orderItem.cancelable"
																class="mm_btn T=sm T=line"
																:to="{
																	name: 'MyOrderCancelCreate',
																	params: { order_id: order.order_id, item_id: orderItem.id }
																}"
															>
																<b>주문취소</b>
															</mm-link>
															<button
																v-if="orderItem.receipt_confirmable"
																type="button"
																class="mm_btn T=sm"
																@click="bomReceiptConfirm(orderItem.id)"
															>
																<b>수취확인</b>
															</button>
															<mm-link
																v-if="orderItem.exchangeable"
																class="mm_btn T=sm T=line"
																:to="{
																	name: 'MyOrderExchangeCreate',
																	params: { order_id: order.order_id, item_id: orderItem.id }
																}"
															>
																<b>교환신청</b>
															</mm-link>
															<mm-link
																v-if="orderItem.returnable"
																class="mm_btn T=sm T=line"
																:to="{
																	name: 'MyOrderReturnCreate',
																	params: { order_id: order.order_id, item_id: orderItem.id }
																}"
															>
																<b>반품신청</b>
															</mm-link>
															<button
																v-if="orderItem.delivery_trackable"
																type="button"
																class="mm_btn T=sm T=line T=variable"
																@click="overlayDeliveryTracking(orderItem.delivery_tracking_url || '')"
															>
																<b>배송조회</b>
															</button>
															<a
																v-if="orderItem.purchase_confirmable"
																class="mm_btn T=sm T=variable"
																href="#"
																@click.prevent="overlayMyOrderConfirm(seller.name, orderItem)"
															>
																<b>구매확정</b>
															</a>
															<a
																v-if="orderItem.review_writable"
																class="mm_btn T=sm T=line T=variable"
																href="#"
																@click.prevent="overlayMyReviewCreate(seller.order_items, order.order_id)"
															>
																<b>리뷰 쓰기</b>
															</a>
															<button
																v-if="orderItem.return_cancelable"
																type="button"
																class="mm_btn T=sm T=line"
																@click="bomReturnCancel(orderItem.return_id, orderItem.return_target_id)"
															>
																<b>반품철회</b>
															</button>
															<button
																v-if="orderItem.exchange_cancelable"
																type="button"
																class="mm_btn T=sm T=line"
																@click="bomExchangeCancel(orderItem.exchange_id, orderItem.exchange_target_id)"
															>
																<b>교환철회</b>
															</button>

															<mm-link
																v-if="orderItem.to_return_switchable"
																class="mm_btn T=sm T=line"
																:to="{
																	name: 'MyOrderToReturnCreate',
																	params: {
																		exchange_id: orderItem.exchange_id,
																		exchange_target_id: orderItem.exchange_target_id,
																	}
																}"
															>
																<b>반품전환</b>
															</mm-link>
															<button
																v-if="orderItem.return_delivery_trackable"
																type="button"
																class="mm_btn T=sm T=line T=variable"
																@click="overlayDeliveryTracking(orderItem.return_delivery_tracking_url || '')"
															>
																<b>반송조회</b>
															</button>
														</div>
													</div>
													<p class="text_point">
														사용 적립금<b><strong>{{ number(orderItem.point_used) }}</strong><sub>원</sub></b>
													</p>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</template>
						<mm-link
							v-if="order.original_order_id"
							class="btn_order-origin"
							:to="{ name: 'MyOrderDetail', params: { id: order.original_order_id } }"
						>
							<b>원 주문 상세보기<i class="ico_link"></i></b>
						</mm-link>
					</div>

					<gift-order-info
						v-if="order.giveaways && order.giveaways.length > 0"
						:giveaways="order.giveaways"
						class="mm_inner m_myorder-detail-gift"
					></gift-order-info>

					<div
						v-if="!order.original_order_id"
						class="mm_inner m_myorder-detail-cost"
					>
						<!-- 최종 결제금액 -->
						<section class="mm_costbox">
							<h4 class="mm_strapline">
								<b>최종 결제금액</b>
							</h4>
							<div class="mm_cost">
								<table>
									<tbody>
										<tr>
											<th scope="row">
												<b>총 상품금액</b>
											</th>
											<td>
												<p class="text_price">
													<strong>{{ number(order.payment_summary.total_goods_price) }}</strong>
												</p>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>배송비</b>
											</th>
											<td>
												<p class="text_price">
													+ <strong>{{ number(order.payment_summary.total_shipping_price) }}</strong>
												</p>
											</td>
										</tr>
										<tr v-if="order.payment_summary.discounts.member > 0">
											<th scope="row">
												<b>회원할인</b>
											</th>
											<td>
												<p class="text_price">
													- <strong>{{ number(order.payment_summary.discounts.member) }}</strong>
												</p>
											</td>
										</tr>
										<tr v-if="order.payment_summary.discounts.night_sale > 0">
											<th scope="row">
												<b>심야할인</b>
											</th>
											<td>
												<p class="text_price">
													- <strong>{{ number(order.payment_summary.discounts.night_sale) }}</strong>
												</p>
											</td>
										</tr>
										<tr v-if="order.payment_summary.used_coupon_amount > 0">
											<th scope="row">
												<b>쿠폰할인</b>
											</th>
											<td>
												<p class="text_price">
													- <strong>{{ number(order.payment_summary.used_coupon_amount) }}</strong>
												</p>
											</td>
										</tr>
										<tr v-if="order.payment_summary.discounts.immediately_sale > 0">
											<th scope="row">
												<b>즉시할인</b>
											</th>
											<td>
												<p class="text_price">
													- <strong>{{ number(order.payment_summary.discounts.immediately_sale) }}</strong>
												</p>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>적립금 사용</b>
											</th>
											<td>
												<p class="text_point">
													- <strong>{{ number(order.payment_summary.used_points) }}</strong><sub>원</sub>
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
													<strong>{{ number(order.payment_summary.total_price) }}</strong>
												</p>
											</td>
										</tr>
									</tfoot>
								</table>
							</div>
							<div class="mm_costbox-unit">
								<p>결제수단: {{ order.payment_info.label }}</p>
								<template v-if="order.payment_info.card">
									<p>카드사: {{ order.payment_info.card.label }}</p>
									<p>카드번호: {{ order.payment_info.card.masking_number }}</p>
									<p>결제승인일: {{ date(order.payment_info.card.approved_at, "YYYY.MM.DD") }}</p>
								</template>
								<template v-if="order.payment_info.bank_account">
									<p>예금주: {{ bankOwnerName }}</p>
									<p>은행명: {{ order.payment_info.bank_account.bank_name }}</p>
									<p>계좌번호: {{ order.payment_info.bank_account.account_number }}</p>
									<p>입금기한: {{ date(order.payment_info.bank_account.input_expire_at, "YYYY.MM.DD") }}</p>
								</template>
								<template v-if="order.payment_info.mobile">
									<p>결제 승인일: {{ date(order.payment_info.mobile?.approved_at, 'YYYY.MM.DD HH:mm:ss') }}</p>
								</template>
							</div>
							<a
								v-if="order.receipt_viewable"
								class="mm_btn T=2xs T=dark btn_receipt"
								href="#"
								@click.prevent="overlayMyOrderDetailReceipt"
							>
								<b>영수증 보기</b>
							</a>
						</section>

						<!-- 적립금 적립 혜택 -->
						<h4 class="mm_strapline">
							<b>적립금 적립 혜택</b>
						</h4>
						<div class="mm_cost">
							<table>
								<tbody>
									<tr>
										<th scope="row">
											<b>구매 적립</b>
										</th>
										<td>
											<p class="text_point">
												<strong>{{ number(order.payment_info.buy_point - order.payment_info.except_buy_point) }}</strong><sub>원</sub>
											</p>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="mm_note">
							<ul>
								<li>취소완료/반품완료 된 상품의 적립금은 차감되어 구매적립금이 표시 됩니다.</li>
							</ul>
						</div>
					</div>
				</template>
			</dropdown>
			<hr class="mm_line">

			<!-- 취소 주문번호 -->
			<template
				v-for="cancelDetail in cancelDetails"
				:key="cancelDetail.id"
			>
				<dropdown
					v-model:is-active="cancelDetail.isOpened"
					class="T=order"
					@click="() => cancelDetail.data == null ? cancelDetail.fetch() : undefined"
				>
					<template #button>
						<b>취소 주문번호</b><b class="text_contraction">{{ cancelDetail.id }}</b>
					</template>
					<template
						v-if="cancelDetail.data"
						#content
					>
						<!-- 취소상품 -->
						<div class="mm_order-item">
							<template
								v-for="pack in cancelDetail.data.packs"
								:key="pack.shipping_rule_id"
							>
								<div class="mm_order-item-seller">
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
																<p class="text_price">
																	<strong>{{ number(orderItem.paid_price + orderItem.point_used) }}</strong>
																</p>
																<p class="text_option">
																	{{ `${optionText(orderItem.goods.option_name)} / 1개` }}
																</p>
															</figcaption>
														</figure>
													</mm-link>
													<div class="mm_product-item-footer">
														<p class="text_point">
															사용 적립금<b><strong>{{ number(orderItem.point_used) }}</strong><sub>원</sub></b>
														</p>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</template>
						</div>

						<!-- 취소정보 -->
						<div class="mm_inner m_myorder-detail-claim">
							<h4 class="mm_strapline">
								<b>취소 사유</b>
							</h4>
							<div class="mm_form-select">
								<label>
									<span class="text_readonly">{{ cancelDetail.data.reason.label }}</span>
									<i class="ico_form-select"></i>
								</label>
							</div>
							<div
								v-if="cancelDetail.data.reason.detail"
								class="mm_form-textarea"
							>
								<label>
									<span
										class="textfield text_readonly"
										v-html="newLineToBr(cancelDetail.data.reason.detail)"
									></span>
									<i class="bg_text"></i>
								</label>
							</div>
							<template v-if="cancelDetail.data.refund_account">
								<h4 class="mm_strapline">
									<b>환불 계좌정보</b>
								</h4>
								<div class="mm_order-info">
									<table>
										<tbody>
											<tr>
												<th scope="row">
													<b>예금주</b>
												</th>
												<td>{{ cancelDetail.data.refund_account.owner_name }}</td>
											</tr>
											<tr>
												<th scope="row">
													<b>환불 은행</b>
												</th>
												<td>{{ cancelDetail.data.refund_account.bank_name }}</td>
											</tr>
											<tr>
												<th scope="row">
													<b>환불 계좌</b>
												</th>
												<td>{{ cancelDetail.data.refund_account.account_number }}</td>
											</tr>
										</tbody>
									</table>
								</div>
							</template>
							<template v-if="cancelDetail.data.refund_info && !cancelDetail.data.is_cancel_before_paid">
								<h4 class="mm_strapline">
									<b>환불 정보</b>
								</h4>
								<div class="mm_cost">
									<table>
										<tbody>
											<tr>
												<th scope="row">
													<b>{{ order.payment_info.label }} 환불</b>
												</th>
												<td>
													<p class="text_price">
														<strong>{{ number(getRefundCalculations(cancelDetail.data.refund_info).totalRefund) }}</strong>
													</p>
												</td>
											</tr>
											<tr
												v-for="detail in cancelDetail.data.refund_info.calculate_details"
												:key="detail.label"
											>
												<template v-if="detail.amount !== 0">
													<th scope="row">
														<strong>{{ detail.label }}</strong>
													</th>
													<td>
														<p class="text_price">
															{{ detail.is_subtracted ? '-' : '+' }}
															<strong>{{ number(detail.amount) }}</strong>
														</p>
													</td>
												</template>
											</tr>
											<tr>
												<th scope="row">
													<b>적립금 환불</b>
												</th>
												<td>
													<p class="text_point">
														<strong>{{ number(cancelDetail.data.refund_info.refund_point) }}</strong><sub>원</sub>
													</p>
												</td>
											</tr>
											<tr>
												<th scope="row">
													<b>환불 예상금액</b>
												</th>
												<td>
													<p class="text_price mm_text-variable">
														<strong>{{ number(cancelDetail.data.refund_info.refund_point + cancelDetail.data.refund_info.refund_price) }}</strong>
													</p>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</template>
						</div>
					</template>
				</dropdown>
				<hr class="mm_line">
			</template>
			<!-- 반품 주문번호 -->
			<template
				v-for="returnDetail in returnDetails"
				:key="returnDetail.id"
			>
				<dropdown
					v-model:is-active="returnDetail.isOpened"
					class="T=order"
					@click="() => returnDetail.data == null ? returnDetail.fetch() : undefined"
				>
					<template #button>
						<b>반품 주문번호</b><b class="text_contraction">{{ returnDetail.id }}</b>
					</template>
					<template
						v-if="returnDetail.data"
						#content
					>
						<!-- 반품상품 -->
						<div class="mm_order-item">
							<div class="mm_order-item-seller">
								<div class="mm_order...seller-head">
									<p class="text_ship">
										<i class="ico_ship"></i>
										<span :class="{'text_price': returnDetail.data.pack.paid_shipping_price > 0}">
											<strong>{{ returnDetail.data.pack.paid_shipping_price === 0 ? '무료배송' : number(returnDetail.data.pack.paid_shipping_price) }}</strong>
										</span>
									</p>
								</div>
								<div class="mm_product-list T=sm">
									<ul>
										<li
											v-for="orderItem in returnDetail.data.pack.order_items"
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
															<p class="text_price">
																<strong>{{ number(orderItem.paid_price + orderItem.point_used) }}</strong>
															</p>
															<p class="text_option">
																{{ `${optionText(orderItem.goods.option_name)} / 1개` }}
															</p>
														</figcaption>
													</figure>
												</mm-link>
												<div class="mm_product-item-footer">
													<p class="text_point">
														사용 적립금<b><strong>{{ number(orderItem.point_used) }}</strong><sub>원</sub></b>
													</p>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<!-- 반품정보 -->
						<div class="mm_inner m_myorder-detail-claim">
							<h4 class="mm_strapline">
								<b>반품 사유 및 회수 방법</b>
							</h4>
							<div class="m...claim-collect">
								<h5 class="mm_strapline">
									<b>반품 사유</b>
								</h5>
								<div class="mm_form-select">
									<label>
										<span class="text_readonly">{{ returnDetail.data.reason.label }}</span>
										<i class="ico_form-select"></i>
									</label>
								</div>
								<template v-if="returnDetail.data.reason.detail">
									<h5 class="mm_strapline">
										<b>상세 사유</b>
									</h5>
									<div class="mm_form-textarea">
										<label>
											<span
												class="textfield text_readonly"
												v-html="newLineToBr(returnDetail.data.reason.detail)"
											></span>
											<i class="bg_text"></i>
										</label>
									</div>
								</template>
								<section>
									<h5 class="mm_strapline">
										<b>반품 송장번호</b>
									</h5>
									<template v-if="returnDetail.data.retrieve_invoice">
										<div class="mm_form-text">
											<label>
												<span class="textfield text_readonly">{{ returnDetail.data.retrieve_invoice.delivery_company_name }}</span>
												<i class="bg_text"></i>
											</label>
										</div>
										<div class="mm_form-text">
											<label>
												<span class="textfield text_readonly">{{ returnDetail.data.retrieve_invoice.invoice_number }}</span>
												<i class="bg_text"></i>
											</label>
										</div>
										<a
											class="mm_btn T=xs T=line btn_modify"
											href="#"
											@click.prevent="bomShipNumberUpdate(returnDetail.id, 'return', returnDetail.data.retrieve_invoice)"
										>
											<b>수정하기</b>
										</a>
									</template>
									<!-- (D) 반품 신청 시 상품을 발송하지 않았을 경우에는 '입력하기' 버튼만 노출합니다. -->
									<div
										v-else
										class="mm_btn_box"
									>
										<a
											class="mm_btn T=sm T=line T=primary"
											href="#"
											@click.prevent="bomShipNumberCreate(returnDetail.id, 'return')"
										><b>입력하기</b></a>
									</div>
								</section>
							</div>
							<template v-if="returnDetail.data.retrieve_address">
								<h4 class="mm_strapline">
									<b>반품 수거지 정보</b>
								</h4>
								<div class="mm_order-info">
									<table>
										<tbody>
											<tr>
												<th scope="row">
													<b>보내는 분</b>
												</th>
												<td>{{ returnDetail.data.retrieve_address.name }}</td>
											</tr>
											<tr>
												<th scope="row">
													<b>휴대폰 번호</b>
												</th>
												<td>{{ returnDetail.data.retrieve_address.tel }}</td>
											</tr>
											<tr>
												<th scope="row">
													<b>주소</b>
												</th>
												<td>
													{{ returnDetail.data.retrieve_address.zip_code }}<br>
													{{ returnDetail.data.retrieve_address.base_address }} {{ returnDetail.data.retrieve_address.detail_address }}
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</template>
							<template v-if="returnDetail.data.refund_account">
								<h4 class="mm_strapline">
									<b>환불 계좌정보</b>
								</h4>
								<div class="mm_order-info">
									<table>
										<tbody>
											<tr>
												<th scope="row">
													<b>예금주</b>
												</th>
												<td>{{ returnDetail.data.refund_account.owner_name }}</td>
											</tr>
											<tr>
												<th scope="row">
													<b>환불 은행</b>
												</th>
												<td>{{ returnDetail.data.refund_account.bank_name }}</td>
											</tr>
											<tr>
												<th scope="row">
													<b>환불 계좌</b>
												</th>
												<td>{{ returnDetail.data.refund_account.account_number }}</td>
											</tr>
										</tbody>
									</table>
								</div>
							</template>
							<template v-if="returnDetail.data.refund_info">
								<h4 class="mm_strapline">
									<b>환불 예상 금액</b>
								</h4>
								<div class="mm_cost">
									<table>
										<tbody>
											<tr>
												<th scope="row">
													<b>총 결제금액</b>
												</th>
												<td>
													<p class="text_price">
														<strong>{{ number(returnDetail.data.refund_info.total_paid_price + returnDetail.data.refund_info.refund_point) }}</strong>
													</p>
												</td>
											</tr>
											<tr
												v-for="detail in returnDetail.data.refund_info.calculate_details"
												:key="detail.label"
											>
												<th scope="row">
													<b>{{ detail.label }}</b>
												</th>
												<td>
													<p class="text_price">
														{{ detail.is_subtracted ? '-' : '+' }} <strong>{{ number(detail.amount) }}</strong>
													</p>
												</td>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<th scope="row">
													<b>환불 예상 금액</b>
												</th>
												<td>
													<p class="text_price mm_text-variable">
														<strong>{{ number(returnDetail.data.refund_info.refund_price + returnDetail.data.refund_info.refund_point) }}</strong>
													</p>
												</td>
											</tr>
										</tfoot>
									</table>
								</div>
							</template>
							<div class="mm_note">
								<ul>
									<li>최종적으로 환불 받으실 금액은 상이할 수 있습니다.</li>
								</ul>
							</div>
							<h4 class="mm_strapline">
								<b>환불 정보</b>
							</h4>
							<div class="mm_cost">
								<table>
									<tbody>
										<tr>
											<th scope="row">
												<b>{{ order.payment_info.label }} 환불</b>
											</th>
											<td>
												<p class="text_price">
													<strong>{{ number(returnDetail.data.refund_info.refund_price) }}</strong>
												</p>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>적립금 환불</b>
											</th>
											<td>
												<p class="text_point">
													<strong>{{ number(returnDetail.data.refund_info.refund_point) }}</strong><sub>원</sub>
												</p>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</template>
				</dropdown>
				<hr class="mm_line">
			</template>
			<!-- 교환 주문번호 -->
			<template
				v-for="exchangeDetail in exchangeDetails"
				:key="exchangeDetail.id"
			>
				<dropdown
					v-model:is-active="exchangeDetail.isOpened"
					class="T=order"
					@click="() => exchangeDetail.data == null ? exchangeDetail.fetch() : undefined"
				>
					<template #button>
						<b>교환 주문번호</b><b class="text_contraction">{{ exchangeDetail.id }}</b>
					</template>
					<template
						v-if="exchangeDetail.data"
						#content
					>
						<!-- 교환상품 -->
						<div class="mm_order-item">
							<div class="mm_order-item-seller">
								<div class="mm_order...seller-head">
									<p class="text_ship">
										<i class="ico_ship"></i>
										<span :class="{'text_price': exchangeDetail.data.pack.paid_shipping_price > 0}">
											<strong>{{ exchangeDetail.data.pack.paid_shipping_price === 0 ? '무료배송' : number(exchangeDetail.data.pack.paid_shipping_price) }}</strong>
										</span>
									</p>
								</div>
								<div class="mm_product-list T=sm">
									<ul>
										<li
											v-for="orderItem in exchangeDetail.data.pack.order_items"
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
															<p class="text_price">
																<strong>{{ number(orderItem.paid_price + orderItem.point_used) }}</strong>
															</p>
															<p class="text_option">
																{{ `${optionText(orderItem.goods.option_name)} / 1개` }}
															</p>
														</figcaption>
													</figure>
												</mm-link>
												<div class="mm_product-item-footer">
													<p class="text_changed">
														<strong class="mm_text-variable">변경된 옵션</strong>
														<span>{{ optionText(orderItem.exchanged_option_name) }} / 1개</span>
													</p>
													<p class="text_point">
														사용 적립금<b><strong>{{ number(orderItem.point_used) }}</strong><sub>원</sub></b>
													</p>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<!-- 교환정보 -->
						<div class="mm_inner m_myorder-detail-claim">
							<h4 class="mm_strapline">
								<b>교환 사유 및 회수 방법</b>
							</h4>
							<div class="m...claim-collect">
								<h5 class="mm_strapline">
									<b>교환 사유</b>
								</h5>
								<div class="mm_form-select">
									<label>
										<span class="text_readonly">{{ exchangeDetail.data.reason.label }}</span>
										<i class="ico_form-select"></i>
									</label>
								</div>
								<template v-if="exchangeDetail.data.reason.detail">
									<h5 class="mm_strapline">
										<b>상세 사유</b>
									</h5>
									<div class="mm_form-textarea">
										<label>
											<span
												class="textfield text_readonly"
												v-html="newLineToBr(exchangeDetail.data.reason.detail)"
											></span>
											<i class="bg_text"></i>
										</label>
									</div>
								</template>
								<div
									v-if="exchangeDetail.data.exchange_address"
									class="mm_form_mix-address"
								>
									<h5 class="mm_strapline">
										<b>교환 상품 받을 주소</b>
									</h5>
									<div class="mm_form_mix-linked">
										<div class="mm_form-text">
											<label>
												<span class="textfield text_readonly">{{ exchangeDetail.data.exchange_address.zip_code }}</span>
												<i class="bg_text"></i>
											</label>
										</div>
									</div>
									<div class="mm_form-textarea">
										<label>
											<span class="textfield text_readonly">{{ exchangeDetail.data.exchange_address.base_address }}</span>
											<i class="bg_text"></i>
										</label>
									</div>
									<div class="mm_form-textarea">
										<label>
											<span class="textfield text_readonly">{{ exchangeDetail.data.exchange_address.detail_address }}</span>
											<i class="bg_text"></i>
										</label>
									</div>
								</div>

								<section>
									<h5 class="mm_strapline">
										<b>교환 송장번호</b>
									</h5>
									<template v-if="exchangeDetail.data.retrieve_invoice">
										<div class="mm_form-text">
											<label>
												<span class="textfield text_readonly">{{ exchangeDetail.data.retrieve_invoice.delivery_company_name }}</span>
												<i class="bg_text"></i>
											</label>
										</div>
										<div class="mm_form-text">
											<label>
												<span class="textfield text_readonly">{{ exchangeDetail.data.retrieve_invoice.invoice_number }}</span>
												<i class="bg_text"></i>
											</label>
										</div>
										<a
											class="mm_btn T=xs T=line btn_modify"
											href="#"
											@click.prevent="bomShipNumberUpdate(exchangeDetail.id, 'exchange', exchangeDetail.data.retrieve_invoice)"
										><b>수정하기</b></a>
									</template>
									<!-- (D) 교환 신청 시 상품을 발송하지 않았을 경우에는 '입력하기' 버튼만 노출합니다. -->
									<div
										v-else
										class="mm_btn_box"
									>
										<button
											type="button"
											class="mm_btn T=sm T=line T=primary"
											@click.prevent="bomShipNumberCreate(exchangeDetail.id, 'exchange')"
										>
											<b>입력하기</b>
										</button>
									</div>
								</section>
							</div>
							<template v-if="exchangeDetail.data.retrieve_address">
								<h4 class="mm_strapline">
									<b>교환 수거지 정보</b>
								</h4>
								<div class="mm_order-info">
									<table>
										<tbody>
											<tr>
												<th scope="row">
													<b>보내는 분</b>
												</th>
												<td>{{ exchangeDetail.data.retrieve_address.name }}</td>
											</tr>
											<tr>
												<th scope="row">
													<b>휴대폰</b>
												</th>
												<td>{{ exchangeDetail.data.retrieve_address.tel }}</td>
											</tr>
											<tr>
												<th scope="row">
													<b>주소</b>
												</th>
												<td>
													{{ exchangeDetail.data.retrieve_address.zip_code }}
													<br>{{ exchangeDetail.data.retrieve_address.base_address }} {{ exchangeDetail.data.retrieve_address.detail_address }}
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</template>
							<section
								v-if="exchangeDetail.data.additional_payment_price"
								class="mm_costbox"
							>
								<h4 class="mm_strapline">
									<b>추가 결제정보</b>
								</h4>
								<div class="mm_cost">
									<table>
										<tbody>
											<tr>
												<th scope="row">
													<b>결제방법</b>
												</th>
												<td>{{ exchangeDetail.data.additional_payment_price.pay_type_label }}</td>
											</tr>
											<tr
												v-for="detail in exchangeDetail.data.additional_payment_price.calculate_details"
												:key="detail.label"
											>
												<th scope="row">
													<strong>{{ detail.label }}</strong>
												</th>
												<td>
													<p class="text_price">
														+ <strong>{{ number(detail.amount) }}</strong>
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
														<strong>{{ number(exchangeDetail.data.additional_payment_price.total_price) }}</strong>
													</p>
												</td>
											</tr>
										</tfoot>
									</table>
								</div>
								<div
									v-if="exchangeDetail.data.payment_info"
									class="mm_costbox-unit"
								>
									<p>결제수단: {{ exchangeDetail.data.payment_info.label }}</p>
									<template v-if="exchangeDetail.data.payment_info.card">
										<p>카드사: {{ exchangeDetail.data.payment_info.card.label }}</p>
										<p>카드번호: {{ exchangeDetail.data.payment_info.card.masking_number }}</p>
									</template>
								</div>
							</section>
						</div>
					</template>
				</dropdown>
				<hr class="mm_line">
			</template>
		</section>
	</layout>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref, computed, watch } from 'vue';
	import config from '$/utils/config';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useMyOrder } from '$/composables/useMyOrder';
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import GiftOrderInfo from '@/feature/gift/component/GiftInfo.vue';
	import DawnOrderAddressInfo from '@/custom/dawn/component/DawnOrderAddressInfo.vue';
	import DawnTag from '@/custom/dawn/component/DawnTag.vue';

	/** 취소/반품/교환 상세 객체 */
	interface ClaimDetail<Detail extends CancelOrderDetail|ReturnOrderDetail|ExchangeOrderDetail> {
		id: string
		fetch: () => Promise<void>
		data: Nullable<Detail>
		isOpened: boolean
	}

	const props = defineProps<{
		orderId: string
	}>();


	/** 전역 페이지 composable */
	const { router, loading, bom, openOverlay } = useGlobalPageContext();
	/** FORMATTER composable */
	const { number, date, newLineToBr, optionText } = useFormatter();
	/** MY주문 composable */
	const {
		getDetail,
		getCancelDetail,
		getReturnDetail,
		getExchangeDetail,
		getRefundCalculations,
		confirmReceipt,
		cancelReturn,
		cancelExchange,
		updateShippingAddressId,
		getDeliveryCompanies,
		updateReturnRetrieveInvoice,
		updateExchangeRetrieveInvoice,
		validateInvoice,
	} = useMyOrder();

	/** 주문상세 */
	const order = ref<OrderDetail['order']>();
	/** [취소] 주문상세 */
	const cancelDetails = ref<ClaimDetail<CancelOrderDetail>[]>([]);
	/** [반품] 주문상세 */
	const returnDetails = ref<ClaimDetail<ReturnOrderDetail>[]>([]);
	/** [교환] 주문상세 */
	const exchangeDetails = ref<ClaimDetail<ExchangeOrderDetail>[]>([]);

	/** 쇼핑몰 예금주명 */
	const bankOwnerName = ref<string>(config('shop.bank_owner_name'));

	/** 새벽배송 주문 포함 여부 */
	const hasDawnDelivery = computed(() => (order.value?.packs || []).some(pack => pack.is_dawn_delivery));

	const deliveryCompanyOptions = (await getDeliveryCompanies()).map(({ name, code }) => ({ text: name, value: `${code}` }));

	const { form: returnInvoiceForm, validate: returnInvoiceValidate } = useForm<ReturnRetrieveInvoiceUpdateForm>(
		{
			return_id: '',
			delivery_company_code: '',
			invoice_no: '',
		},
		{
			rule: {
				'return_id(반품주문번호)': ['required'],
				'delivery_company_code(택배사)': ['required'],
				'invoice_no(송장번호)': ['required'],
			},
		},
	);

	const { form: exchangeInvoiceForm, validate: exchangeInvoiceValidate } = useForm<ExchangeRetrieveInvoiceUpdateForm>(
		{
			exchange_id: '',
			delivery_company_code: '',
			invoice_no: '',
		},
		{
			rule: {
				'exchange_id(반품주문번호)': ['required'],
				'delivery_company_code(택배사)': ['required'],
				'invoice_no(송장번호)': ['required'],
			},
		},
	);

	/** 교환/반품 송장번호 입력 BOM OPEN */
	function bomShipNumberCreate(id: string, target: 'return'|'exchange') {
		bom.prompt(
			'회수 시 발급된 송장번호를 입력하세요',
			async (_is: boolean, _values: Record<string, string>) => {
				if (!_is) {
					return;
				}
				try {
					loading.show();
					if (target == 'return') {
						returnInvoiceForm.value = {
							return_id: id,
							delivery_company_code: _values.delivery_company_code,
							invoice_no: _values.invoice_no,
						};
						await returnInvoiceValidate();
						await validateInvoice({
							delivery_company: _values.delivery_company_code,
							invoice_number: _values.invoice_no,
						});
						await updateReturnRetrieveInvoice(returnInvoiceForm.value);
						await returnDetails.value.find(detail => detail.id == id)?.fetch();
					}
					else if (target == 'exchange') {
						exchangeInvoiceForm.value = {
							exchange_id: id,
							delivery_company_code: _values.delivery_company_code,
							invoice_no: _values.invoice_no,
						};
						await exchangeInvoiceValidate();
						await validateInvoice({
							delivery_company: _values.delivery_company_code,
							invoice_number: _values.invoice_no,
						});
						await updateExchangeRetrieveInvoice(exchangeInvoiceForm.value);
						await exchangeDetails.value.find(detail => detail.id == id)?.fetch();
					}

					bom.alert('송장정보가 적용되었습니다.');
				}
				catch (e) {
					useErrorAlert(e);
				}
				finally {
					loading.hide();
				}
			},
			{
				title: '송장번호 입력',
				forms: [
					{ type: 'select', name: 'delivery_company_code', options: [{ text: '택배사를 선택하세요', value: '' }].concat(deliveryCompanyOptions), value: '' },
					{ type: 'number', name: 'invoice_no', maxLength: 50, placeholder: '송장번호를 입력하세요', value: '' },
				],
			},
		);
	}

	/** 교환/반품 송장번호 수정 BOM OPEN */
	function bomShipNumberUpdate(
		id: string,
		target: 'return'|'exchange',
		legacyValue: { delivery_company_code: string, invoice_number: string },
	) {
		bom.prompt(
			'회수 시 발급된 송장번호를 입력하세요',
			async (_is: boolean, _values: Record<string, string>) => {
				if (!_is) {
					return;
				}
				try {
					loading.show();
					if (target == 'return') {
						returnInvoiceForm.value = {
							return_id: id,
							delivery_company_code: _values.delivery_company_code,
							invoice_no: _values.invoice_no,
						};
						await returnInvoiceValidate();
						await validateInvoice({
							delivery_company: _values.delivery_company_code,
							invoice_number: _values.invoice_no,
						});
						await updateReturnRetrieveInvoice(returnInvoiceForm.value);
						await returnDetails.value.find(detail => detail.id == id)?.fetch();
					}
					else if (target == 'exchange') {
						exchangeInvoiceForm.value = {
							exchange_id: id,
							delivery_company_code: _values.delivery_company_code,
							invoice_no: _values.invoice_no,
						};
						await exchangeInvoiceValidate();
						await validateInvoice({
							delivery_company: _values.delivery_company_code,
							invoice_number: _values.invoice_no,
						});
						await updateExchangeRetrieveInvoice(exchangeInvoiceForm.value);
						await exchangeDetails.value.find(detail => detail.id == id)?.fetch();
					}

					bom.alert('송장정보가 적용되었습니다.');
				}
				catch (e) {
					useErrorAlert(e);
				}
				finally {
					loading.hide();
				}
			},
			{
				title: '송장번호 입력',
				forms: [
					{
						type: 'select',
						name: 'delivery_company_code',
						options: [{ text: '택배사를 선택하세요', value: '' }].concat(deliveryCompanyOptions),
						value: legacyValue.delivery_company_code,
					},
					{
						type: 'number',
						name: 'invoice_no',
						maxLength: 50,
						placeholder: '송장번호를 입력하세요',
						value: legacyValue.invoice_number,
					},
				],
			},
		);
	}

	/** 주소변경 모달 OPEN */
	function overlayAddress() {
		const component = defineAsyncComponent(() => import('@/page/address/Address.vue'));

		return openOverlay(component, {
			props: {
				needDawnDeliveryCheck: hasDawnDelivery.value,
			},
			onClose: async (_value: { newAddress: MyShippingAddressDetail }) => {
				const newAddress = _value.newAddress;
				if (!newAddress) {
					return;
				}

				if (hasDawnDelivery.value && !newAddress.is_dawn_delivery) {
					return bom.alert('새벽배송 불가 지역으로 배송지 변경이 불가합니다. \n주문 취소 후 재구매 바랍니다.', overlayAddress);
				}

				await updateShippingAddressId(props.orderId, newAddress.id);

				order.value!.shipping_address = {
					...newAddress,
					message: order.value?.shipping_address.message || '',
				};
			},
		});
	}

	/** 배송추적 overlay OPEN */
	function overlayDeliveryTracking(trackingUrl: string) {
		const component = defineAsyncComponent(() => import('@/component/ExternalOverlay.vue'));

		return openOverlay(component, {
			props: {
				title: '배송추적',
				src: trackingUrl,
			},
		});
	}
	/** 구매확정 모달 OPEN */
	function overlayMyOrderConfirm(sellerName: string, orderItem: NormalStepOrderItem) {
		const component = defineAsyncComponent(() => import('@/page/mypage/order/confirm/MyOrderConfirm.vue'));

		return openOverlay(component, {
			props: {
				sellerName,
				orderItem,
			},
			onClose: fetch,
		});
	}

	/**
	 * 판매자 문의 모달 OPEN
	 * @param orderId
	 * @param sellerId
	 */
	function overlayMyInquirySellerCreate(orderId: string, seller: QnaSeller) {
		const component = defineAsyncComponent(() => import('@/page/mypage/inquiry/seller/create/MyInquirySellerCreate.vue'));

		return openOverlay(component, {
			props: {
				orderId,
				seller: {
					id: seller.id,
					name: seller.name,
					tel: seller.tel,
				},
			},
		});
	}

	/** 영수증 모달 OPEN */
	function overlayMyOrderDetailReceipt() {
		const component = defineAsyncComponent(() => import('@/page/mypage/order/detail/receipt/MyOrderDetailReceipt.vue'));

		return openOverlay(component, {
			props: {
				orderId: props.orderId,
				ordererName: order.value?.orderer_info.name,
				payMethodLabel: order.value?.payment_info.label,
				goodsName: order.value?.packs[0]?.sellers[0]?.order_items[0]?.goods?.name || '',
			},
		});
	}

	/** 리뷰 작성 모달 OPEN */
	function overlayMyReviewCreate(orderItems: NormalStepOrderItem[], orderId: string) {
		const component = defineAsyncComponent(() => import('@/page/mypage/review/create/MyReviewCreate.vue'));

		return openOverlay(component, {
			props: {
				orderItems,
				orderId,
			},
			onClose: fetch,
		});
	}

	/**
	 * 수취확인처리
	 * @param orderItemId
	 */
	function bomReceiptConfirm(orderItemId: number) {
		bom.confirm('수취 확인 시 배송 완료 처리되며 되돌릴 수 없습니다. 수취 확인을 하시겠습니까?', async (flag) => {
			if (!flag) {
				return;
			}

			loading.show();
			try {
				await confirmReceipt(orderItemId);
				await fetch();
			}
			catch (e) {
				useErrorAlert(e);
			}
			finally {
				loading.hide();
			}
		});
	}

	/**
	 * [반품] 철회
	 * @param returnId
	 * @param returnTargetId
	 */
	async function bomReturnCancel(returnId: string, returnTargetId: number) {
		bom.confirm('반품 신청을 철회하시겠습니까?', async (flag) => {
			if (!flag) {
				return;
			}

			loading.show();
			try {
				await cancelReturn(returnId, returnTargetId);
				await fetch();
			}
			catch (e) {
				useErrorAlert(e);
			}
			finally {
				loading.hide();
			}
		});
	}

	/**
	 * [교환] 철회
	 * @param exchangeId
	 * @param exchangeTargetId
	 */
	async function bomExchangeCancel(exchangeId: string, exchangeTargetId: number) {
		bom.confirm('교환 신청을 철회하시겠습니까?', async (flag) => {
			if (!flag) {
				return;
			}

			loading.show();
			try {
				await cancelExchange(exchangeId, exchangeTargetId);
				await fetch();
			}
			catch (e) {
				useErrorAlert(e);
			}
			finally {
				loading.hide();
			}
		});
	}

	/** 주문상세 조회 */
	async function fetch() {
		try {
			const orderDetailSheet = await getDetail(props.orderId);
			order.value = orderDetailSheet.order;

			/** 취소 상세 */
			cancelDetails.value = orderDetailSheet.cancel_ids.map((id) => {
				return {
					id: id,
					fetch: async () => {
						try {
							cancelDetails.value.find(cancelDetail => cancelDetail.id == id)!.data = await getCancelDetail(id);
						}
						catch (e) {
							useErrorAlert(e, {
								httpCatcher: {
									404: '존재하지 않는 취소주문입니다.',
								},
							});
						}
					},
					data: null,
					isOpened: false,
				};
			});

			/** 반품 상세 */
			returnDetails.value = orderDetailSheet.return_ids.map((id) => {
				return {
					id: id,
					fetch: async () => {
						try {
							returnDetails.value.find(returnDetail => returnDetail.id == id)!.data = await getReturnDetail(id);
						}
						catch (e) {
							useErrorAlert(e, {
								httpCatcher: {
									404: '존재하지 않는 반품주문입니다.',
								},
							});
						}
					},
					data: null,
					isOpened: false,
				};
			});

			/** 교환 상세 */
			exchangeDetails.value = orderDetailSheet.exchange_ids.map((id) => {
				return {
					id: id,
					fetch: async () => {
						try {
							exchangeDetails.value.find(exchangeDetail => exchangeDetail.id == id)!.data = await getExchangeDetail(id);
						}
						catch (e) {
							useErrorAlert(e, {
								httpCatcher: {
									404: '존재하지 않는 교환주문입니다.',
								},
							});
						}
					},
					data: null,
					isOpened: false,
				};
			});
		}
		catch (e) {
			useErrorAlert(e, {
				alertCallback: () => {
					router.go(-1);
				},
			});
		}
	}
	/** 원주문 상세보기 클릭시 주문번호 변경되는 이슈로 인해 watch 처리  */
	watch(() => props.orderId, async () => {
		await fetch();
		const scroller = document.querySelector('.mm_scroller');
		if (scroller) {
			scroller.scrollTop = 0;
		}
	});

	/** 주문상세 조회 */
	await fetch();
</script>