<template>
	<layout title="주문 상세보기">
		<section class="m_myorder-detail">
			<h3><b>2022.06.14</b><strong>주문번호: 2005141142151234562</strong></h3>
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
										<td>홍길동</td>
									</tr>
									<tr>
										<th scope="row">
											<b>휴대폰 번호</b>
										</th>
										<td>010-1234-2839</td>
									</tr>
									<tr>
										<th scope="row">
											<b>이메일 주소</b>
										</th>
										<td>mmonstar@mmonstar.co.kr</td>
									</tr>
									<tr>
										<th scope="row">
											<b>개인통관<br> 고유번호</b>
										</th>
										<td>P123456789</td>
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
										<td>홍길동</td>
									</tr>
									<tr>
										<th scope="row">
											<b>휴대폰 번호</b>
										</th>
										<td>010-1234-2839</td>
									</tr>
									<tr>
										<th scope="row">
											<b>주소</b>
										</th>
										<td>39392<br>서울 서초구 명달로 17길 32, 트라움하우스 2차 아파트 301호</td>
									</tr>

									<dawn-order-address-info></dawn-order-address-info>

									<tr>
										<th scope="row">
											<b>배송메모</b>
										</th>
										<td>문옆 소화전이요</td>
									</tr>
								</tbody>
							</table>
							<!-- (D) '입금 대기, 결제 완료' 주문일 경우 '주소변경' 버튼을 노출합니다. -->
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
						<!-- 일반주문 -->
						<div class="mm_order-item-seller">
							<div class="mm_order...seller-head">
								<h5><i class="ico_shop"></i><b>엠몬스타</b></h5>
								<a
									href="#"
									@click.prevent="overlayMyInquirySellerCreate"
								>
									<b>판매자 문의하기</b>
								</a>
							</div>
							<div class="mm_product-list T=sm">
								<ul>
									<li>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_1.png"
													></lazyload>
													<figcaption>
														<p class="text_status">
															결제 완료
														</p>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															[매긴나잇브릿지]플리츠 디테일 드레스
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<div class="mm_btn_box">
													<div class="mm_flex T=equal">
														<mm-link
															class="mm_btn T=sm T=line"
															:to="{ name: 'MyOrderCancelCreate' }"
														>
															<b>주문취소</b>
														</mm-link>
													</div>
												</div>
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
									<li>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_2.png"
													></lazyload>
													<figcaption>
														<p class="text_status">
															배송 준비중
														</p>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															[매긴나잇브릿지]플리츠 디테일 드레스
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<div class="mm_btn_box">
													<div class="mm_flex T=equal">
														<mm-link
															class="mm_btn T=sm T=line"
															:to="{ name: 'MyOrderCancelCreate' }"
														>
															<b>주문취소</b>
														</mm-link>
													</div>
												</div>
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
									<li>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_3.png"
													></lazyload>
													<figcaption>
														<p class="text_status">
															배송 중
														</p>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140
														</p>
														<p class="text_price">
															<strong>54,800</strong><del><span>118,800</span></del>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<div class="mm_btn_box">
													<div class="mm_flex T=equal">
														<button
															type="button"
															class="mm_btn T=sm"
														>
															<b>수취확인</b>
														</button>
														<mm-link
															class="mm_btn T=sm T=line T=variable"
															to="http://"
														>
															<b>배송조회</b>
														</mm-link>
													</div>
												</div>
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div class="mm_order-item-seller">
							<div class="mm_order...seller-head">
								<h5><i class="ico_shop"></i><b>엠몬스타</b></h5>
								<a
									href="#"
									@click.prevent="overlayMyInquirySellerCreate"
								>
									<b>판매자 문의하기</b>
								</a>
							</div>
							<div class="mm_product-list T=sm">
								<ul>
									<li>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_1.png"
													></lazyload>
													<figcaption>
														<p class="text_status">
															배송 완료
														</p>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															[매긴나잇브릿지]플리츠 디테일 드레스
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<div class="mm_btn_box">
													<div class="mm_flex T=equal">
														<mm-link
															class="mm_btn T=sm T=line"
															:to="{ name: 'MyOrderExchangeCreate' }"
														>
															<b>교환신청</b>
														</mm-link>
														<mm-link
															class="mm_btn T=sm T=line"
															:to="{ name: 'MyOrderReturnCreate' }"
														>
															<b>반품신청</b>
														</mm-link>
														<mm-link
															class="mm_btn T=sm T=line T=variable"
															to="http://"
														>
															<b>배송조회</b>
														</mm-link>
														<a
															class="mm_btn T=sm T=variable"
															href="#"
															@click.prevent="overlayMyOrderConfirm"
														>
															<b>구매확정</b>
														</a>
													</div>
												</div>
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
									<li>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_2.png"
													></lazyload>
													<figcaption>
														<p class="text_status">
															구매 확정
														</p>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															[매긴나잇브릿지]플리츠 디테일 드레스
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<div class="mm_btn_box">
													<div class="mm_flex T=equal">
														<a
															class="mm_btn T=sm T=variable"
															href="#"
															@click.prevent="overlayMyOrderConfirm"
														>
															<b>구매확정</b>
														</a>
													</div>
												</div>
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>

						<!-- 취소주문 -->
						<div class="mm_order-item-seller">
							<div class="mm_order...seller-head">
								<h5><i class="ico_shop"></i><b>엠몬스타</b></h5>
								<a
									href="#"
									@click.prevent="overlayMyInquirySellerCreate"
								>
									<b>판매자 문의하기</b>
								</a>
							</div>
							<div class="mm_product-list T=sm">
								<ul>
									<li>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_1.png"
													></lazyload>
													<figcaption>
														<p class="text_status">
															취소 요청<b class="text_refund">환불 요청</b>
														</p>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															[매긴나잇브릿지]플리츠 디테일 드레스
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
									<li>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_1.png"
													></lazyload>
													<figcaption>
														<p class="text_status">
															취소 완료<b class="text_refund">환불 완료</b>
														</p>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															[매긴나잇브릿지]플리츠 디테일 드레스
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>

						<!-- 반품주문 -->
						<div class="mm_order-item-seller">
							<div class="mm_order...seller-head">
								<h5><i class="ico_shop"></i><b>엠몬스타</b></h5>
								<a
									href="#"
									@click.prevent="overlayMyInquirySellerCreate"
								>
									<b>판매자 문의하기</b>
								</a>
							</div>
							<div class="mm_product-list T=sm">
								<ul>
									<li>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_3.png"
													></lazyload>
													<figcaption>
														<p class="text_status">
															반품 신청
														</p>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															[매긴나잇브릿지]플리츠 디테일 드레스
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<div class="mm_btn_box">
													<div class="mm_flex T=equal">
														<button
															type="button"
															class="mm_btn T=sm T=line"
														>
															<b>반품철회</b>
														</button>
														<mm-link
															class="mm_btn T=sm T=line T=variable"
															to="http://"
														>
															<b>반송조회</b>
														</mm-link>
													</div>
												</div>
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
									<li>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_1.png"
													></lazyload>
													<figcaption>
														<p class="text_status">
															반품 완료
														</p>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															[매긴나잇브릿지]플리츠 디테일 드레스
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<div class="mm_btn_box">
													<div class="mm_flex T=equal">
														<mm-link
															class="mm_btn T=sm T=line T=variable"
															to="http://"
														>
															<b>반송조회</b>
														</mm-link>
													</div>
												</div>
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
									<li>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_2.png"
													></lazyload>
													<figcaption>
														<p class="text_status">
															상품 도착
														</p>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															[매긴나잇브릿지]플리츠 디테일 드레스
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<div class="mm_btn_box">
													<div class="mm_flex T=equal">
														<mm-link
															class="mm_btn T=sm T=line T=variable"
															to="http://"
														>
															<b>반송조회</b>
														</mm-link>
													</div>
												</div>
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>

						<!-- 교환주문 -->
						<div class="mm_order-item-seller">
							<div class="mm_order...seller-head">
								<h5><i class="ico_shop"></i><b>엠몬스타</b></h5>
								<a
									href="#"
									@click.prevent="overlayMyInquirySellerCreate"
								>
									<b>판매자 문의하기</b>
								</a>
							</div>
							<div class="mm_product-list T=sm">
								<ul>
									<li>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_3.png"
													></lazyload>
													<figcaption>
														<p class="text_status">
															교환 신청
														</p>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															[매긴나잇브릿지]플리츠 디테일 드레스
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<p class="text_changed">
													<strong class="mm_text-variable">변경된 옵션</strong>
													<span>베이지 FREE / 1개</span>
													<span>레드 FREE / 1개</span>
												</p>
												<div class="mm_btn_box">
													<div class="mm_flex T=equal">
														<button
															type="button"
															class="mm_btn T=sm T=line"
														>
															<b>교환철회</b>
														</button>
														<mm-link
															class="mm_btn T=sm T=line T=variable"
															to="http://"
														>
															<b>반송조회</b>
														</mm-link>
													</div>
												</div>
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
									<li>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_3.png"
													></lazyload>
													<figcaption>
														<p class="text_status">
															교환 승인
														</p>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															[매긴나잇브릿지]플리츠 디테일 드레스
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<p class="text_changed">
													<strong class="mm_text-variable">변경된 옵션</strong>
													<span>베이지 FREE / 1개</span>
													<span>레드 FREE / 1개</span>
												</p>
												<div class="mm_btn_box">
													<div class="mm_flex T=equal">
														<mm-link
															class="mm_btn T=sm T=line T=variable"
															to="http://"
														>
															<b>반송조회</b>
														</mm-link>
													</div>
												</div>
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
									<li>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_2.png"
													></lazyload>
													<figcaption>
														<p class="text_status">
															상품 도착
														</p>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															[매긴나잇브릿지]플리츠 디테일 드레스
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<p class="text_changed">
													<strong class="mm_text-variable">변경된 옵션</strong>
													<span>레드 FREE / 1개</span>
												</p>
												<div class="mm_btn_box">
													<div class="mm_flex T=equal">
														<mm-link
															class="mm_btn T=sm T=line"
															:to="{ name: 'MyOrderToReturnCreate' }"
														>
															<b>반품전환</b>
														</mm-link>
														<mm-link
															class="mm_btn T=sm T=line T=variable"
															to="http://"
														>
															<b>반송조회</b>
														</mm-link>
													</div>
												</div>
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
									<li>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_3.png"
													></lazyload>
													<figcaption>
														<p class="text_status">
															교환 완료
														</p>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															[매긴나잇브릿지]플리츠 디테일 드레스
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<p class="text_changed">
													<strong class="mm_text-variable">변경된 옵션</strong>
													<span>베이지 FREE / 1개</span>
													<span>레드 FREE / 1개</span>
												</p>
												<div class="mm_btn_box">
													<div class="mm_flex T=equal">
														<mm-link
															class="mm_btn T=sm T=line T=variable"
															to="http://"
														>
															<b>반송조회</b>
														</mm-link>
													</div>
												</div>
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<mm-link
							class="btn_order-origin"
							:to="{ name: 'MyOrderDetail', params: { id: 123 } }"
						>
							<b>원 주문 상세보기<i class="ico_link"></i></b>
						</mm-link>
					</div>

					<gift-order-info
						v-if="true"
						class="mm_inner m_myorder-detail-gift"
					></gift-order-info>

					<div class="mm_inner m_myorder-detail-cost">
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
							<div class="mm_costbox-unit">
								<p>결제수단: 신용/체크카드</p>
								<p>카드사: 하나카드</p>
								<p>카드번호: 123*-****-****-****</p>
							</div>
							<a
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
												<strong>100</strong><sub>원</sub>
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
			<dropdown
				class="T=order"
				:is-active="true"
			>
				<template #button>
					<b>취소 주문번호</b><b class="text_contraction">2005131142151234562</b>
				</template>
				<template #content>
					<!-- 취소상품 -->
					<div class="mm_order-item">
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
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_1.png"
													></lazyload>
													<figcaption>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															[매긴나잇브릿지]플리츠 디테일 드레스
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
									<li>
										<p class="text_seller">
											<i class="ico_shop"></i>엠몬스타
										</p>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_1.png"
													></lazyload>
													<figcaption>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															[매긴나잇브릿지]플리츠 디테일 드레스
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<!-- 취소정보 -->
					<div class="mm_inner m_myorder-detail-claim">
						<h4 class="mm_strapline">
							<b>취소 사유</b>
						</h4>
						<div class="mm_form-select">
							<label>
								<span class="text_readonly">기타</span>
								<i class="ico_form-select"></i>
							</label>
						</div>
						<div class="mm_form-textarea">
							<label>
								<span class="textfield text_readonly">취소 상세 사유</span>
								<i class="bg_text"></i>
							</label>
						</div>
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
										<td>홍길동</td>
									</tr>
									<tr>
										<th scope="row">
											<b>환불 은행</b>
										</th>
										<td>신한은행</td>
									</tr>
									<tr>
										<th scope="row">
											<b>환불 계좌</b>
										</th>
										<td>1103331234567</td>
									</tr>
								</tbody>
							</table>
						</div>
						<h4 class="mm_strapline">
							<b>환불 정보</b>
						</h4>
						<div class="mm_cost">
							<table>
								<tbody>
									<tr>
										<th scope="row">
											<b>신용카드 환불</b>
										</th>
										<td>
											<p class="text_price">
												<strong>210,000</strong>
											</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>적립금 환불</b>
										</th>
										<td>
											<p class="text_point">
												<strong>2,000</strong><sub>원</sub>
											</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>환불 예상금액</b>
										</th>
										<td>
											<p class="text_price mm_text-variable">
												<strong>235,450</strong>
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

			<!-- 반품 주문번호 -->
			<dropdown
				class="T=order"
				:is-active="true"
			>
				<template #button>
					<b>반품 주문번호</b><b class="text_contraction">2005131142151234562</b>
				</template>
				<template #content>
					<!-- 반품상품 -->
					<div class="mm_order-item">
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
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_1.png"
													></lazyload>
													<figcaption>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															[매긴나잇브릿지]플리츠 디테일 드레스
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
									<li>
										<p class="text_seller">
											<i class="ico_shop"></i>엠몬스타
										</p>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_1.png"
													></lazyload>
													<figcaption>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															[매긴나잇브릿지]플리츠 디테일 드레스
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
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
									<span class="text_readonly">상품에 하자가 있어요</span>
									<i class="ico_form-select"></i>
								</label>
							</div>
							<h5 class="mm_strapline">
								<b>상세 사유</b>
							</h5>
							<div class="mm_form-textarea">
								<label>
									<span class="textfield text_readonly">나중에 사려구요</span>
									<i class="bg_text"></i>
								</label>
							</div>
							<section>
								<h5 class="mm_strapline">
									<b>반품 송장번호</b>
								</h5>
								<div class="mm_form-text">
									<label>
										<span class="textfield text_readonly">CJ 대한통운</span>
										<i class="bg_text"></i>
									</label>
								</div>
								<div class="mm_form-text">
									<label>
										<span class="textfield text_readonly">111222333444</span>
										<i class="bg_text"></i>
									</label>
								</div>
								<button
									type="button"
									class="mm_btn T=xs T=line btn_modify"
								>
									<b>수정하기</b>
								</button>
								<!-- (D) 반품 신청 시 상품을 발송하지 않았을 경우에는 '입력하기' 버튼만 노출합니다. -->
								<!--
									<div class="mm_btn_box">
									<button
									type="button"
									class="mm_btn T=sm T=line T=primary"
									>
									<b>입력하기</b>
									</button>
									</div>
								-->
							</section>
						</div>
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
										<td>홍길동</td>
									</tr>
									<tr>
										<th scope="row">
											<b>휴대폰 번호</b>
										</th>
										<td>010-1234-1234</td>
									</tr>
									<tr>
										<th scope="row">
											<b>주소</b>
										</th>
										<td>39392<br>서울 서초구 명달로 17길 32, 트라움하우스 2차 아파트 301호</td>
									</tr>
								</tbody>
							</table>
						</div>
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
										<td>홍길동</td>
									</tr>
									<tr>
										<th scope="row">
											<b>환불 은행</b>
										</th>
										<td>신한은행</td>
									</tr>
									<tr>
										<th scope="row">
											<b>환불 계좌</b>
										</th>
										<td>1103331234567</td>
									</tr>
								</tbody>
							</table>
						</div>
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
												<strong>210,000</strong>
											</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>면제 배송비</b>
										</th>
										<td>
											<p class="text_price">
												- <strong>2,500</strong>
											</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>반품 배송비</b>
										</th>
										<td>
											<p class="text_price">
												+ <strong>2,500</strong>
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
												<strong>210,000</strong>
											</p>
										</td>
									</tr>
								</tfoot>
							</table>
						</div>
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
											<b>신용카드 환불</b>
										</th>
										<td>
											<p class="text_price">
												<strong>210,000</strong>
											</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>적립금 환불</b>
										</th>
										<td>
											<p class="text_point">
												<strong>2,000</strong><sub>원</sub>
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

			<!-- 교환 주문번호 -->
			<dropdown
				class="T=order"
				:is-active="true"
			>
				<template #button>
					<b>교환 주문번호</b><b class="text_contraction">2005131142151234562</b>
				</template>
				<template #content>
					<!-- 교환상품 -->
					<div class="mm_order-item">
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
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_1.png"
													></lazyload>
													<figcaption>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															[매긴나잇브릿지]플리츠 디테일 드레스
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<p class="text_changed">
													<strong class="mm_text-variable">변경된 옵션</strong>
													<span>베이지 FREE / 1개</span>
													<span>레드 FREE / 1개</span>
												</p>
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
									<li>
										<p class="text_seller">
											<i class="ico_shop"></i>엠몬스타
										</p>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_1.png"
													></lazyload>
													<figcaption>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															[매긴나잇브릿지]플리츠 디테일 드레스
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<p class="text_changed">
													<strong class="mm_text-variable">변경된 옵션</strong>
													<span>레드 FREE / 1개</span>
												</p>
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
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
									<span class="text_readonly">상품에 하자가 있어요</span>
									<i class="ico_form-select"></i>
								</label>
							</div>
							<h5 class="mm_strapline">
								<b>상세 사유</b>
							</h5>
							<div class="mm_form-textarea">
								<label>
									<span class="textfield text_readonly">나중에 사려구요</span>
									<i class="bg_text"></i>
								</label>
							</div>
							<div class="mm_form_mix-address">
								<h5 class="mm_strapline">
									<b>교환 상품 받을 주소</b>
								</h5>
								<div class="mm_form_mix-linked">
									<div class="mm_form-text">
										<label>
											<span class="textfield text_readonly">06616</span>
											<i class="bg_text"></i>
										</label>
									</div>
								</div>
								<div class="mm_form-textarea">
									<label>
										<span class="textfield text_readonly">서울특별시 도봉구 창2동 647-12</span>
										<i class="bg_text"></i>
									</label>
								</div>
								<div class="mm_form-textarea">
									<label>
										<span class="textfield text_readonly">북한산 현대홈시티3차 302동 101호</span>
										<i class="bg_text"></i>
									</label>
								</div>
							</div>
							<section>
								<h5 class="mm_strapline">
									<b>CJ 대한통운</b>
								</h5>
								<!--
									<div class="mm_form-text">
									<label>
									<span class="textfield text_readonly">CJ 대한통운</span>
									<i class="bg_text"></i>
									</label>
									</div>
									<div class="mm_form-text">
									<label>
									<span class="textfield text_readonly">111222333444</span>
									<i class="bg_text"></i>
									</label>
									</div>
									<button
									type="button"
									class="mm_btn T=xs T=line btn_modify"
									>
									<b>수정하기</b>
									</button>
								-->
								<!-- (D) 교환 신청 시 상품을 발송하지 않았을 경우에는 '입력하기' 버튼만 노출합니다. -->
								<div class="mm_btn_box">
									<button
										type="button"
										class="mm_btn T=sm T=line T=primary"
										@click.prevent="bomShipNumber"
									>
										<b>입력하기</b>
									</button>
								</div>
							</section>
						</div>
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
										<td>홍길동</td>
									</tr>
									<tr>
										<th scope="row">
											<b>휴대폰</b>
										</th>
										<td>010-1234-1234</td>
									</tr>
									<tr>
										<th scope="row">
											<b>주소</b>
										</th>
										<td>39392<br>서울 서초구 명달로 17길 32, 트라움하우스 2차 아파트 301호</td>
									</tr>
								</tbody>
							</table>
						</div>
						<section class="mm_costbox">
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
											<td>즉시결제</td>
										</tr>
										<tr>
											<th scope="row">
												<b>면제 배송비</b>
											</th>
											<td>
												<p class="text_price">
													+ <strong>2,500</strong>
												</p>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>교환 배송비</b>
											</th>
											<td>
												<p class="text_price">
													+ <strong>2,500</strong>
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
													<strong>5,000</strong>
												</p>
											</td>
										</tr>
									</tfoot>
								</table>
							</div>
							<div class="mm_costbox-unit">
								<p>결제수단: 신용/체크카드</p>
								<p>카드사: 하나카드</p>
								<p>카드번호: 123*-****-****-****</p>
							</div>
						</section>
					</div>
				</template>
			</dropdown>
			<hr class="mm_line">
		</section>
	</layout>
</template>

<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import mons from '$/utils/mons';
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import GiftOrderInfo from '@/feature/gift/component/GiftInfo.vue';
	import DawnOrderAddressInfo from '@/custom/dawn/component/DawnOrderAddressInfo.vue';

	const bomShipNumber = () => {
		mons().bom.prompt(
			'회수 시 발급된 송장번호를 입력하세요',
			(_is: boolean, _values: Record<string, string>) => {
				console.log(_is, _values);
			},
			{
				title: '송장번호 입력',
				forms: [
					// { type: 'select', options: [{ text: '택배사를 선택하세요', value: '' }] },// FIXME 셀렉트 필요?
					{ type: 'number', name: 'ship', maxLength: 50, placeholder: '송장번호를 입력하세요' },
				],
			},
		);
	};

	const layerContextStore = useLayerContextStore();

	function overlayAddress() {
		const component = defineAsyncComponent(() => import('@/page/address/Address.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayMyOrderConfirm() {
		const component = defineAsyncComponent(() => import('@/page/mypage/order/confirm/MyOrderConfirm.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayMyInquirySellerCreate() {
		const component = defineAsyncComponent(() => import('@/page/mypage/inquiry/seller/create/MyInquirySellerCreate.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayMyOrderDetailReceipt() {
		const component = defineAsyncComponent(() => import('@/page/mypage/order/detail/receipt/MyOrderDetailReceipt.vue'));

		return layerContextStore.openOverlay(component);
	}
</script>