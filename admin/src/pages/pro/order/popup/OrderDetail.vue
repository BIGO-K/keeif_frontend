<template>
	<layout-popup>
		<template #title>
			<h1><b>주문 상세보기</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-order-detail">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_tab" data-tab="{ 'onChange': 'mm.popup.resize' }">
						<!-- 탭메뉴 -->
						<div class="mm_tab_menu">
							<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
							<ul>
								<li><a class="btn_tab S=tab-on" href="#" title="선택됨"><b>주문 정보</b></a></li>
								<li><a class="btn_tab" href="#"><b>정상 주문</b></a></li>
								<li><a class="btn_tab" href="#"><b>취소 주문</b></a></li>
								<li><a class="btn_tab" href="#"><b>반품 주문</b></a></li>
								<li><a class="btn_tab" href="#"><b>교환 주문</b></a></li>
							</ul>
						</div>
						<!-- // 탭메뉴 -->

						<!-- 주문 정보 -->
						<div class="mm_tab-item S=tab-on">
							<div class="mm_form">
								<table>
									<tbody>
										<tr>
											<th></th><td></td><th></th><td></td>
										</tr>
										<tr>
											<th scope="row">
												<b>주문번호</b>
											</th>
											<td><p>202005070001</p></td>
											<th scope="row">
												<b>주문일시</b>
											</th>
											<td><p>2022-05-30 09:09:09</p></td>
										</tr>
										<tr>
											<th scope="row">
												<b>원 주문번호</b>
											</th>
											<td colspan="3">
												<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>202205010001</b></a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>

							<!-- 주문 상품 목록 -->
							<div class="mm_table_box">
								<!-- 테이블상단 -->
								<div class="mm_table_box-caption">
									<h3 class="mm_heading">
										<b>주문 상품 목록</b>
									</h3>
								</div>
								<!-- // 테이블상단 -->

								<!-- 테이블 -->
								<div class="mm_table" data-table>
									<div class="mm_scroller">
										<table>
											<thead>
												<tr>
													<th scope="col">
														<div class="mm_table-item">
															순번
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															배송처
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															주문 상태
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															상품명
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															상품 코드
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															상품 옵션
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															주문 수량
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															판매가
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															1차 쿠폰가
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															쿠폰 + 추가 할인
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															사용 적립금
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															배송비
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															제휴 실 판매가
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															제휴 실 결제가
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															제휴 실 할인금액
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															셀러
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															출고지
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															택배사
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															송장번호
														</div>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div class="mm_table-item">
															1
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															업체 배송
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															배송 완료
														</div>
													</td>
													<td class="T=table-left">
														<div class="mm_table-item">
															<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>[밸리걸] 레터링 티셔츠 120670</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															1233
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															BK / 55
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															1
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">125000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">120000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<a href="/order/detail/discount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">10000</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_num">90</span>원
														</div>
													</td>
													<td rowspan="3">
														<div class="mm_table-item">
															<span class="text_price">2500</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">120000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">110000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">10000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러A</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															A(123456)
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															한진택배
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<a href="#" target="_blank" title="새 창 열림"><b>123456789</b></a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="mm_table-item">
															2
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															물류 배송
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															반품 신청
														</div>
													</td>
													<td class="T=table-left">
														<div class="mm_table-item">
															<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>[밸리걸] 레터링 티셔츠 120670</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															1233
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															BK / 55
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															1
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">125000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">120000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<a href="/order/detail/discount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">10000</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_num">90</span>원
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">120000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">110000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">10000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러A</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															A(123456)
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															한진택배
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<a href="#" target="_blank" title="새 창 열림"><b>123456789</b></a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="mm_table-item">
															3
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															새벽 배송
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															취소 완료
														</div>
													</td>
													<td class="T=table-left">
														<div class="mm_table-item">
															<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>[밸리걸] 레터링 티셔츠 120670</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															1233
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															BK / 55
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															1
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">20000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">18000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<a href="/order/detail/discount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">3000</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_num">180</span>원
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">18000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">17500</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">500</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러A</b></a>
														</div>
													</td>
													<td><div class="mm_table-item"></div></td>
													<td><div class="mm_table-item"></div></td>
													<td><div class="mm_table-item"></div></td>
												</tr>
												<tr>
													<td>
														<div class="mm_table-item">
															4
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															새벽 배송
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															교환 신청
														</div>
													</td>
													<td class="T=table-left">
														<div class="mm_table-item">
															<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>[밸리걸] 레터링 티셔츠 120670</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															1233
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															BK / 55
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															1
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">30000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">24000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<a href="/order/detail/discount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">3000</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_num">240</span>원
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">0</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">24000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">20000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">4000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러A</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															B(123456)
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															CJ 대한통운
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<a href="#" target="_blank" title="새 창 열림"><b>123456789</b></a>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<!-- // 테이블 -->
							</div>
							<!-- // 주문 상품 목록 -->

							<!-- 사은품 목록 -->
							<div class="mm_table_box">
								<!-- 테이블상단 -->
								<div class="mm_table_box-caption">
									<h3 class="mm_heading">
										<b>사은품 목록</b>
									</h3>
								</div>
								<!-- // 테이블상단 -->

								<!-- 테이블 -->
								<div class="mm_table" data-table>
									<div class="mm_scroller">
										<table>
											<thead>
												<tr>
													<th scope="col">
														<div class="mm_table-item">
															사은품 코드
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															사은품명
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															지급 기준
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															지급 관리
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															지급 조건
														</div>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div class="mm_table-item">
															225
														</div>
													</td>
													<td class="T=table-left">
														<div class="mm_table-item">
															<p class="T=linebreak">
																<b>NFL 양말</b>
															</p>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															50,000원 이상 구매 시 지급
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															최초 1회만 지급
														</div>
													</td>
													<td class="T=table-left">
														<div class="mm_table-item">
															<p class="T=linebreak">
																<b class="mm_text-ellipsis T=2line">특정 상품 50,000원 이상 구매 시, 최초 1회 양말 지급</b>
															</p>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="mm_table-item">
															4
														</div>
													</td>
													<td class="T=table-left">
														<div class="mm_table-item">
															<p class="T=linebreak">
																<b>NFL 양말</b>
															</p>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															구매 시 지급
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															제한 없음
														</div>
													</td>
													<td class="T=table-left">
														<div class="mm_table-item">
															<p class="T=linebreak">
																<b class="mm_text-ellipsis T=2line">맨투맨 구매 시, 뱃지 지급</b>
															</p>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<!-- // 테이블 -->
							</div>
							<!-- // 사은품 목록 -->

							<!-- 예약판매 상품 정보 -->
							<div class="mm_table_box">
								<!-- 테이블상단 -->
								<div class="mm_table_box-caption">
									<h3 class="mm_heading">
										<b>예약판매 상품 정보</b>
									</h3>
								</div>
								<!-- // 테이블상단 -->

								<!-- 테이블 -->
								<div class="mm_table" data-table>
									<div class="mm_scroller">
										<table>
											<thead>
												<tr>
													<th scope="col">
														<div class="mm_table-item">
															상품명
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															상품 코드
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															예약판매 시작일
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															예약판매 종료일
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															예약 배송 시작일
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															예약 배송 종료일
														</div>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td class="T=table-left">
														<div class="mm_table-item">
															<p class="T=linebreak">
																<b>[밸리걸] 레터링 티셔츠 120670</b>
															</p>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															143708
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-07-12
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-07-12
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-07-12
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-07-12
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<!-- // 테이블 -->
							</div>
							<!-- // 예약판매 상품 정보 -->

							<!-- 주문자 / 수취인 정보 -->
							<div class="mm_form_box">
								<!-- 폼 상단 -->
								<div class="mm_form_box-caption">
									<h3 class="mm_heading">
										<b>주문자 / 수취인 정보</b>
									</h3>
								</div>
								<div class="mm_form_box-unit">
									<div class="mm_lside">
										<div class="mm_btn_box">
											<div class="mm_inline">
												<a class="mm_btn" href="/order/detail/address" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>배송지 정보 수정</b></a>
											</div>
										</div>
									</div>
								</div>
								<!-- // 폼 상단 -->
								<div class="mm_form">
									<table>
										<tbody>
											<tr>
												<th></th><td></td><th></th><td></td>
											</tr>
											<tr>
												<th scope="row">
													<b>주문자 아이디</b>
												</th>
												<td><p>drcr11</p></td>
												<th scope="row">
													<b>주문자</b>
												</th>
												<td><p>홍길동</p></td>
											</tr>
											<tr>
												<th scope="row">
													<b>주문자 전화번호</b>
												</th>
												<td><p>-</p></td>
												<th scope="row">
													<b>주문자 휴대폰 번호</b>
												</th>
												<td><p>01011112222</p></td>
											</tr>
											<tr>
												<th scope="row">
													<b>주문자 이메일</b>
												</th>
												<td><p>avbc@abcdee.com</p></td>
												<th scope="row">
													<b>고유 통관 번호</b>
												</th>
												<td><p>-</p></td>
											</tr>
											<tr>
												<th scope="row">
													<b>수취인</b>
												</th>
												<td><p>홍길동</p></td>
												<th scope="row">
													<b>수취인 전화번호</b>
												</th>
												<td><p>-</p></td>
											</tr>
											<tr>
												<th scope="row">
													<b>수취인 휴대폰 번호</b>
												</th>
												<td><p>01011112222</p></td>
												<th scope="row">
													<b>배송지 주소</b>
												</th>
												<td><p>[12345] 경기도 성남시 판교로 242</p></td>
											</tr>
											<tr>
												<th scope="row">
													<b>배송 메시지</b>
												</th>
												<td colspan="3">
													<p>부재 시 집 앞에 놔주세요.</p>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<!-- 폼 하단 -->
								<div class="mm_form_box-unit">
									<div class="mm_lside">
										<div class="mm_btn_box">
											<div class="mm_inline">
												<a class="mm_btn" href="/order/detail/address" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>배송지 정보 수정</b></a>
											</div>
										</div>
									</div>
								</div>
								<!-- // 폼 하단 -->
							</div>
							<!-- // 주문자 / 수취인 정보 -->

							<!-- 주문 결제 정보 -->
							<div class="mm_form_box">
								<!-- 폼 상단 -->
								<div class="mm_form_box-caption">
									<h3 class="mm_heading">
										<b>주문 결제 정보</b>
									</h3>
								</div>
								<!-- // 폼 상단 -->
								<div class="mm_form">
									<table>
										<tbody>
											<tr>
												<th></th><td></td><th></th><td></td>
											</tr>
											<tr>
												<th scope="row">
													<b>총 상품 판매가</b>
												</th>
												<td colspan="3">
													<p class="text_price">
														60000
													</p>
												</td>
											</tr>
											<tr>
												<th scope="row">
													<b>총 배송비</b>
												</th>
												<td colspan="3">
													<p class="text_price">
														2500
													</p>
												</td>
											</tr>
											<tr>
												<th scope="row">
													<b>총 할인 금액</b>
												</th>
												<td>
													<p class="text_price">
														6500
													</p>
												</td>
												<th scope="row">
													<b>할인 상세 내역</b>
												</th>
												<td>
													<ul>
														<li>1차 쿠폰: <span class="text_price">3000</span></li>
														<li>즉시 할인: <span class="text_price">3000</span></li>
														<li>심야 할인: <span class="text_price">3000</span></li>
														<li>중복 할인: <span class="text_price">3000</span></li>
														<li>적립금 할인: <span class="text_num">1000</span>원</li>
													</ul>
												</td>
											</tr>
											<tr>
												<th scope="row">
													<b>최종 결제가</b>
												</th>
												<td>
													<p class="text_price">
														60000
													</p>
												</td>
												<th scope="row">
													<b>결제 수단</b>
												</th>
												<td><p>카드</p></td>
											</tr>
											<tr>
												<th scope="row">
													<b>제휴 실 결제가</b>
												</th>
												<td>
													<p class="text_price">
														50500
													</p>
												</td>
												<th scope="row">
													<b>제휴 실 할인금액</b>
												</th>
												<td>
													<p class="text_price">
														9500
													</p>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<!-- // 주문 결제 정보 -->

							<!-- SMS 발송 정보 -->
							<!-- 내용있음 -->
							<div class="mm_table_box">
								<!-- 테이블상단 -->
								<div class="mm_table_box-caption">
									<h3 class="mm_heading">
										<b>SMS 발송 정보</b>
									</h3>
								</div>
								<div class="mm_table_box-unit">
									<div class="mm_lside">
										<div class="mm_btn_box">
											<div class="mm_inline">
												<a class="mm_btn" href="/order/detail/sms" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>SMS 발송</b></a>
											</div>
										</div>
									</div>
								</div>
								<!-- // 테이블상단 -->

								<!-- 테이블 -->
								<div class="mm_table" data-table>
									<div class="mm_scroller">
										<table>
											<thead>
												<tr>
													<th scope="col">
														<div class="mm_table-item">
															발송내용
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															발송일시
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															발송자
														</div>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td class="T=table-left">
														<div class="mm_table-item">
															<a class="T=linebreak" href="/order/detail/sms-detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="mm_text-ellipsis T=2line">[엠몬솔루션] 안녕하세요. 먼저 엠몬솔루션 제품을 구매해주셔서 감사합니다.</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-05-18 19:00:10
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															관리자A(abc1)
														</div>
													</td>
												</tr>
												<tr>
													<td class="T=table-left">
														<div class="mm_table-item">
															<a class="T=linebreak" href="/order/detail/sms-detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="mm_text-ellipsis T=2line">[엠몬솔루션] 안녕하세요. 먼저 엠몬솔루션 제품을 구매해주셔서 감사합니다.</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-05-18 19:00:10
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															관리자A(abc1)
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<!-- // 테이블 -->

								<!-- 테이블하단 -->
								<div class="mm_table_box-unit">
									<div class="mm_lside">
										<div class="mm_btn_box">
											<div class="mm_inline">
												<a class="mm_btn" href="/order/detail/sms" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>SMS 발송</b></a>
											</div>
										</div>
									</div>
								</div>
								<!-- // 테이블하단 -->
							</div>
							<!-- // 내용있음 -->

							<!-- 내용없음 -->
							<div class="mm_table_box">
								<!-- 테이블상단 -->
								<div class="mm_table_box-caption">
									<h3 class="mm_heading">
										<b>SMS 발송 정보</b>
									</h3>
								</div>
								<div class="mm_table_box-unit">
									<div class="mm_lside">
										<div class="mm_btn_box">
											<div class="mm_inline">
												<a class="mm_btn" href="/order/detail/sms" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>SMS 발송</b></a>
											</div>
										</div>
									</div>
								</div>
								<!-- // 테이블상단 -->

								<!-- 테이블 -->
								<div class="mm_table-none">
									<p>등록된 내용이 없습니다.</p>
								</div>
								<!-- // 테이블 -->

								<!-- 테이블하단 -->
								<div class="mm_table_box-unit">
									<div class="mm_lside">
										<div class="mm_btn_box">
											<div class="mm_inline">
												<a class="mm_btn" href="/order/detail/sms" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>SMS 발송</b></a>
											</div>
										</div>
									</div>
								</div>
								<!-- // 테이블하단 -->
							</div>
							<!-- // 내용없음 -->
							<!-- // SMS 발송 정보 -->

							<!-- CS 정보 -->
							<!-- 내용있음 -->
							<div class="mm_table_box">
								<!-- 테이블상단 -->
								<div class="mm_table_box-caption">
									<h3 class="mm_heading">
										<b>CS 정보</b>
									</h3>
								</div>
								<div class="mm_table_box-unit">
									<div class="mm_lside">
										<div class="mm_btn_box">
											<div class="mm_inline">
												<a class="mm_btn" href="/order/detail/counsel-register" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>신규 상담 등록</b></a>
											</div>
										</div>
									</div>
								</div>
								<!-- // 테이블상단 -->

								<!-- 테이블 -->
								<div class="mm_table" data-table>
									<div class="mm_scroller">
										<table>
											<thead>
												<tr>
													<th scope="col">
														<div class="mm_table-item">
															상담번호
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															중요
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															상담내용
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															등록일시
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															등록자
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															수정일시
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															수정자
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															관리 상태
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															관리 사유
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															관리 일자
														</div>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div class="mm_table-item">
															<a href="/order/detail/counsel-modify" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>12345</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="mm_text-primary">중요</span>
														</div>
													</td>
													<td class="T=table-left">
														<div class="mm_table-item">
															<p class="T=linebreak">
																<b class="mm_text-ellipsis T=2line">일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십</b>
															</p>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-05-18 19:00:10
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															홍길동
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-05-18 19:00:10
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															홍길동
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															확인 필요
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															고객 약속
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-05-08
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="mm_table-item">
															<a href="/order/detail/counsel-modify" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>12345</b></a>
														</div>
													</td>
													<td><div class="mm_table-item"></div></td>
													<td class="T=table-left">
														<div class="mm_table-item">
															<p class="T=linebreak">
																<b class="mm_text-ellipsis T=2line">중요한 상담내용일 경우 확인이 필요합니다.</b>
															</p>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-05-18 19:00:10
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															홍길동
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-05-18 19:00:10
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															홍길동
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															관리 필요 없음
														</div>
													</td>
													<td><div class="mm_table-item"></div></td>
													<td><div class="mm_table-item"></div></td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<!-- // 테이블 -->

								<!-- 테이블하단 -->
								<div class="mm_table_box-unit">
									<div class="mm_lside">
										<div class="mm_btn_box">
											<div class="mm_inline">
												<a class="mm_btn" href="/order/detail/counsel-register" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>신규 상담 등록</b></a>
											</div>
										</div>
									</div>
								</div>
								<!-- // 테이블하단 -->
							</div>
							<!-- // 내용있음 -->

							<!-- 내용없음 -->
							<div class="mm_table_box">
								<!-- 테이블상단 -->
								<div class="mm_table_box-caption">
									<h3 class="mm_heading">
										<b>CS 정보</b>
									</h3>
								</div>
								<div class="mm_table_box-unit">
									<div class="mm_lside">
										<div class="mm_btn_box">
											<div class="mm_inline">
												<a class="mm_btn" href="/order/detail/counsel-register" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>신규 상담 등록</b></a>
											</div>
										</div>
									</div>
								</div>
								<!-- // 테이블상단 -->

								<!-- 테이블 -->
								<div class="mm_table-none">
									<p>등록된 내용이 없습니다.</p>
								</div>
								<!-- // 테이블 -->

								<!-- 테이블하단 -->
								<div class="mm_table_box-unit">
									<div class="mm_lside">
										<div class="mm_btn_box">
											<div class="mm_inline">
												<a class="mm_btn" href="/order/detail/counsel-register" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>신규 상담 등록</b></a>
											</div>
										</div>
									</div>
								</div>
								<!-- // 테이블하단 -->
							</div>
							<!-- // 내용없음 -->
							<!-- // CS 정보 -->

							<!-- 주문 상태 변경 정보 -->
							<!-- 내용있음 -->
							<div class="mm_form_box">
								<!-- 폼 상단 -->
								<div class="mm_form_box-caption">
									<h3 class="mm_heading">
										<b>주문 상태 변경 정보</b>
									</h3>
								</div>
								<!-- // 폼 상단 -->
								<div class="mm_form">
									<table>
										<tbody>
											<tr>
												<th></th><td></td><th></th><td></td>
											</tr>
											<tr>
												<th scope="row">
													<b>변경 내역</b>
												</th>
												<td colspan="3">
													<ul>
														<li>2022-05-07 09:09:10 결제 완료 / 시스템</li>
														<li>2022-05-11 12:12:10 취소 완료 / 상품B / 시스템</li>
														<li>2022-05-20 09:20:50 배송 준비중 / 상품C / 셀러A</li>
													</ul>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<!-- // 내용있음 -->

							<!-- 내용없음 -->
							<div class="mm_form_box">
								<!-- 폼 상단 -->
								<div class="mm_form_box-caption">
									<h3 class="mm_heading">
										<b>주문 상태 변경 정보</b>
									</h3>
								</div>
								<!-- // 폼 상단 -->
								<div class="mm_form">
									<table>
										<tbody>
											<tr>
												<th></th><td></td><th></th><td></td>
											</tr>
											<tr>
												<th scope="row">
													<b>변경 내역</b>
												</th>
												<td colspan="3">
													<p>최근 1개월 내 변경 이력이 없습니다.</p>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<!-- // 내용없음 -->
							<!-- // 주문 상태 변경 정보 -->
						</div>
						<!-- // 주문 정보 -->

						<!-- 정상 주문 -->
						<div class="mm_tab-item">
							<div class="mm_form_box">
								<!-- 폼 상단 -->
								<div class="mm_form_box-caption">
									<h3 class="mm_heading">
										<b>정상 주문 정보</b>
									</h3>
								</div>
								<!-- // 폼 상단 -->
								<div class="mm_form">
									<table>
										<tbody>
											<tr>
												<th></th><td></td><th></th><td></td>
											</tr>
											<tr>
												<th scope="row">
													<b>주문번호</b>
												</th>
												<td><p>202005070001</p></td>
												<th scope="row">
													<b>주문일시</b>
												</th>
												<td><p>2022-05-30 09:09:09</p></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>

							<!-- 주문 상품 목록 -->
							<div class="mm_table_box">
								<!-- 테이블상단 -->
								<div class="mm_table_box-unit">
									<div class="mm_lside">
										<div class="mm_btn_box">
											<div class="mm_inline">
												<button type="button" class="mm_btn">
													<b>결제 완료</b>
												</button>
												<button type="button" class="mm_btn">
													<b>배송 준비 중</b>
												</button>
												<button type="button" class="mm_btn">
													<b>발송 처리</b>
												</button>
												<button type="button" class="mm_btn">
													<b>배송 완료</b>
												</button>
												<button type="button" class="mm_btn">
													<b>구매 확정</b>
												</button>
												<button type="button" class="mm_btn">
													<b>품절 처리</b>
												</button>
												<a class="mm_btn" href="/order/ship/cancel" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>주문 취소</b></a>
												<a class="mm_btn" href="/order/ship/delay" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>예약 배송</b></a>
												<a class="mm_btn" href="/order/ship/return" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>반품 신청</b></a>
												<a class="mm_btn" href="/order/ship/exchange" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>교환 신청</b></a>
											</div>
										</div>
									</div>
								</div>
								<!-- // 테이블상단 -->

								<!-- 테이블 -->
								<div class="mm_table" data-table>
									<div class="mm_scroller">
										<table>
											<thead>
												<tr>
													<th class="col_check" scope="col">
														<div class="mm_table-item">
															<label class="mm_form-check">
																<input type="checkbox" name="dev_check-order1" data-check="{ '_type': 'check_all' }">
																<b class="mm_block">
																	<i class="ico_form-check"></i>
																	<span class="text_label mm_ir-blind">전체선택</span>
																</b>
															</label>
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															순번
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															배송처
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															주문 상태
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															상품명
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															상품 코드
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															상품 옵션
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															수량
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															판매가
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															1차 쿠폰가
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															쿠폰 + 추가 할인
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															사용 적립금
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															배송비
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															제휴 실 판매가
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															제휴 실 결제가
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															제휴 실 할인금액
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															셀러
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															출고지
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															택배사
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															송장번호
														</div>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div class="mm_table-item">
															<label class="mm_form-check">
																<input type="checkbox" name="dev_check-order1" data-check>
																<b class="mm_block">
																	<i class="ico_form-check"></i>
																	<span class="text_label mm_ir-blind">항목선택</span>
																</b>
															</label>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															1
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															업체 배송
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															결제 완료
														</div>
													</td>
													<td class="T=table-left">
														<div class="mm_table-item">
															<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>[밸리걸] 레터링 티셔츠 120670</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															1233
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															BK / 55
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															1
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">10000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">9000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<a href="/order/detail/discount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">1000</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_num">90</span>원
														</div>
													</td>
													<td rowspan="2">
														<div class="mm_table-item">
															<span class="text_price">2500</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">9000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">7000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">2000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러A</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<div class="mm_form-select">
																<label>
																	<select data-select>
																		<option>선택하세요.</option>
																	</select>
																	<b class="text_selected"></b>
																	<i class="ico_form-select"></i>
																</label>
															</div>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<div class="mm_form-select">
																<label>
																	<select data-select>
																		<option>선택하세요.</option>
																	</select>
																	<b class="text_selected"></b>
																	<i class="ico_form-select"></i>
																</label>
															</div>
														</div>
													</td>
													<td data-editable>
														<div class="mm_table-item">
															<p class="text_editable" contenteditable></p>
															<span class="text_placeholder">송장번호 입력</span>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="mm_table-item">
															<label class="mm_form-check">
																<input type="checkbox" name="dev_check-order1" data-check>
																<b class="mm_block">
																	<i class="ico_form-check"></i>
																	<span class="text_label mm_ir-blind">항목선택</span>
																</b>
															</label>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															3
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															물류 배송
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															결제 완료
														</div>
													</td>
													<td class="T=table-left">
														<div class="mm_table-item">
															<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>[밸리걸] 레터링 티셔츠 120670</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															4561
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															WH / 44
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															1
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">20000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">18000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<a href="/order/detail/discount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">3000</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_num">180</span>원
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">18000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">17500</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">500</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러A</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<div class="mm_form-select">
																<label>
																	<select data-select>
																		<option>선택하세요.</option>
																	</select>
																	<b class="text_selected"></b>
																	<i class="ico_form-select"></i>
																</label>
															</div>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<div class="mm_form-select">
																<label>
																	<select data-select>
																		<option>선택하세요.</option>
																	</select>
																	<b class="text_selected"></b>
																	<i class="ico_form-select"></i>
																</label>
															</div>
														</div>
													</td>
													<td data-editable>
														<div class="mm_table-item">
															<p class="text_editable" contenteditable></p>
															<span class="text_placeholder">송장번호 입력</span>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="mm_table-item">
															<label class="mm_form-check">
																<input type="checkbox" name="dev_check-order1" data-check>
																<b class="mm_block">
																	<i class="ico_form-check"></i>
																	<span class="text_label mm_ir-blind">항목선택</span>
																</b>
															</label>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															4
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															새벽 배송
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															배송 중
														</div>
													</td>
													<td class="T=table-left">
														<div class="mm_table-item">
															<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>[밸리걸] 레터링 티셔츠 120670</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															1111
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															BK / 66
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															1
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">30000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">24000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<a href="/order/detail/discount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">2000</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_num">240</span>원
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">2500</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">24000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">20000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<span class="text_price">4000</span>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러B</b></a>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															1231231
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															CJ 대한통운
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<a href="#" target="_blank" title="새 창 열림"><b>123456789</b></a>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<!-- // 테이블 -->

								<!-- 테이블하단 -->
								<div class="mm_table_box-unit">
									<div class="mm_lside">
										<div class="mm_btn_box">
											<div class="mm_inline">
												<button type="button" class="mm_btn">
													<b>결제 완료</b>
												</button>
												<button type="button" class="mm_btn">
													<b>배송 준비 중</b>
												</button>
												<button type="button" class="mm_btn">
													<b>발송 처리</b>
												</button>
												<button type="button" class="mm_btn">
													<b>배송 완료</b>
												</button>
												<button type="button" class="mm_btn">
													<b>구매 확정</b>
												</button>
												<button type="button" class="mm_btn">
													<b>품절 처리</b>
												</button>
												<a class="mm_btn" href="/order/ship/cancel" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>주문 취소</b></a>
												<a class="mm_btn" href="/order/ship/delay" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>예약 배송</b></a>
												<a class="mm_btn" href="/order/ship/return" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>반품 신청</b></a>
												<a class="mm_btn" href="/order/ship/exchange" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>교환 신청</b></a>
											</div>
										</div>
									</div>
								</div>
								<!-- // 테이블하단 -->
								<div class="mm_note">
									<ul>
										<li>입금 대기 상태인 주문의 상태 변경은 주문 단위로만 가능합니다.</li>
										<li>품절 처리 시 해당 상품은 <strong>취소 처리</strong>가 진행됩니다.</li>
										<li>주문 취소 시 바로 <strong>취소 완료</strong> 처리됩니다. (<strong>주문 제작/해외 배송 상품은 취소 신청</strong> 단계로 변경)</li>
										<li>물류 배송(새벽 배송) 상품은 <strong>주문 상태를 일괄로 변경</strong>해야 합니다. 일부만 주문 상태를 변경하여도 WMS에 물류 배송(새벽 배송) 전 상품이 연동됩니다.</li>
									</ul>
								</div>
							</div>
							<!-- // 주문 상품 목록 -->
						</div>
						<!-- // 정상 주문 -->

						<!-- 취소 주문 -->
						<template v-if="_isNone === false">
							<div class="mm_tab-item">
								<div class="mm_form_box">
									<!-- 폼 상단 -->
									<div class="mm_form_box-caption">
										<h3 class="mm_heading">
											<b>취소 주문 정보</b>
										</h3>
									</div>
									<!-- // 폼 상단 -->
									<div class="mm_form">
										<table>
											<tbody>
												<tr>
													<th></th><td></td><th></th><td></td>
												</tr>
												<tr>
													<th scope="row">
														<b>주문번호</b>
													</th>
													<td><p>202005070001</p></td>
													<th scope="row">
														<b>취소 주문번호</b>
													</th>
													<td><p>202005070001</p></td>
												</tr>
												<tr>
													<th scope="row">
														<b>취소 신청일시</b>
													</th>
													<td><p>2022-05-28 11:48:55</p></td>
													<th scope="row">
														<b>취소 사유</b>
													</th>
													<td><p>단순 변심</p></td>
												</tr>
												<tr>
													<th scope="row">
														<b>취소 금액</b>
													</th>
													<td colspan="3">
														<p>
															<span class="text_price">47000</span> [상품 구매가 <span class="text_price">44500</span> + 배송비 <span class="text_price">2500</span>]<br>
															(결제수단명 <span class="text_price">45000</span> + 적립금 <span class="text_num">2000</span>원)
														</p>
													</td>
												</tr>
												<tr>
													<th scope="row">
														<b>환불 계좌 정보</b>
													</th>
													<td colspan="3">
														<p>-</p>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>

								<!-- 취소 상품 목록 -->
								<div class="mm_table_box">
									<!-- 테이블상단 -->
									<div class="mm_table_box-unit">
										<div class="mm_lside">
											<div class="mm_btn_box">
												<div class="mm_inline">
													<button type="button" class="mm_btn">
														<b>취소 완료</b>
													</button>
													<a class="mm_btn" href="/order/cancel/reject" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>취소 거부</b></a>
												</div>
											</div>
										</div>
									</div>
									<!-- // 테이블상단 -->

									<!-- 테이블 -->
									<div class="mm_table" data-table>
										<div class="mm_scroller">
											<table>
												<thead>
													<tr>
														<th class="col_check" scope="col">
															<div class="mm_table-item">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-cancel1" data-check="{ '_type': 'check_all' }">
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label mm_ir-blind">전체선택</span>
																	</b>
																</label>
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																순번
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																배송처
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																주문 상태
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																상품명
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																상품 코드
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																상품 옵션
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																수량
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																판매가
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																1차 쿠폰가
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																쿠폰 + 추가 할인
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																사용 적립금
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																배송비
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																제휴 실 판매가
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																제휴 실 결제가
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																제휴 실 할인금액
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																셀러
															</div>
														</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<div class="mm_table-item">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-cancel1" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label mm_ir-blind">항목선택</span>
																	</b>
																</label>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																1
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																업체 배송
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																결제 완료
															</div>
														</td>
														<td class="T=table-left">
															<div class="mm_table-item">
																<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>[밸리걸] 레터링 티셔츠 120670</b></a>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																1233
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																BK / 55
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																1
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">10000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">9000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<a href="/order/detail/discount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">1000</b></a>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_num">90</span>원
															</div>
														</td>
														<td rowspan="2">
															<div class="mm_table-item">
																<span class="text_price">2500</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">9000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">8000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">1000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러A</b></a>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div class="mm_table-item">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-cancel1" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label mm_ir-blind">항목선택</span>
																	</b>
																</label>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																3
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																물류 배송
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																결제 완료
															</div>
														</td>
														<td class="T=table-left">
															<div class="mm_table-item">
																<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>[밸리걸] 레터링 티셔츠 120670</b></a>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																4561
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																WH / 44
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																1
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">20000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">18000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<a href="/order/detail/discount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">3000</b></a>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_num">180</span>원
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">18000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">17500</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">500</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러A</b></a>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div class="mm_table-item">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-cancel1" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label mm_ir-blind">항목선택</span>
																	</b>
																</label>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																4
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																새벽 배송
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																배송 중
															</div>
														</td>
														<td class="T=table-left">
															<div class="mm_table-item">
																<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>[밸리걸] 레터링 티셔츠 120670</b></a>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																1111
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																BK / 66
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																1
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">30000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">24000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<a href="/order/detail/discount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">2000</b></a>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_num">240</span>원
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">2500</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">24000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">20000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">4000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러B</b></a>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<!-- // 테이블 -->

									<!-- 테이블하단 -->
									<div class="mm_table_box-unit">
										<div class="mm_lside">
											<div class="mm_btn_box">
												<div class="mm_inline">
													<button type="button" class="mm_btn">
														<b>취소 완료</b>
													</button>
													<a class="mm_btn" href="/order/cancel/reject" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>취소 거부</b></a>
												</div>
											</div>
										</div>
									</div>
									<!-- // 테이블하단 -->
									<div class="mm_note">
										<ul>
											<li>취소 거부 시 해당 주문은 취소 신청 이전 주문 상태로 자동 변경됩니다.</li>
											<li>취소 금액은 취소 완료가 되었을 때 노출됩니다.</li>
										</ul>
									</div>
								</div>
								<!-- // 취소 상품 목록 -->
							</div>
						</template>

						<template v-else>
							<div class="mm_tab-item">
								<p class="mm_text-none">
									취소 내역이 없습니다.
								</p>
							</div>
						</template>
						<!-- // 취소 주문 -->

						<!-- 반품 주문 -->
						<template v-if="_isNone === false">
							<div class="mm_tab-item">
								<div class="mm_form_box">
									<!-- 폼 상단 -->
									<div class="mm_form_box-caption">
										<h3 class="mm_heading">
											<b>반품 주문 정보</b>
										</h3>
									</div>
									<!-- // 폼 상단 -->
									<div class="mm_form">
										<table>
											<tbody>
												<tr>
													<th></th><td></td><th></th><td></td>
												</tr>
												<tr>
													<th scope="row">
														<b>주문번호</b>
													</th>
													<td><p>202005070001</p></td>
													<th scope="row">
														<b>반품 주문번호</b>
													</th>
													<td><p>202005070001</p></td>
												</tr>
												<tr>
													<th scope="row">
														<b>반품 신청일시</b>
													</th>
													<td><p>2022-05-28 11:48:55</p></td>
													<th scope="row">
														<b>반품 사유</b>
													</th>
													<td><p>단순 변심</p></td>
												</tr>
												<tr>
													<th scope="row">
														<b>회수 방법</b>
													</th>
													<td colspan="3">
														<p>고객 직접 회수</p>
													</td>
												</tr>
												<!-- (D) 회수 방법이 자동 회수, 고객 직접 회수일 경우 노출합니다. -->
												<tr>
													<th scope="row">
														<b>택배 정보</b>
														<a class="mm_btn T=xs T=line T=secondary" href="/order/invoice-modify" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>송장 수정</b></a>
													</th>
													<td colspan="3">
														<span>CJ 대한통운 / </span><a href="#" target="_blank" title="새 창 열림"><b>412589942</b></a>
													</td>
												</tr>
												<!-- (D) 회수 방법이 자동 회수이면서 상품이 회수되기 전일 경우 노출합니다. -->
												<!--
													<tr>
													<th scope="row"><b>택배 정보</b></th>
													<td colspan="3"><p>회수 완료 시 자동 기입됩니다.</p></td>
													</tr>
												-->
												<!-- (D) 회수 방법이 업체 회수 일 경우 노출합니다. -->
												<!--
													<tr>
													<th scope="row"><b>택배 정보</b></th>
													<td colspan="3">
													<div class="mm_form_mix-linked">
													<button type="button" class="mm_btn"><b>저장</b></button>
													<div class="mm_form-select T=sm">
													<label>
													<select data-select>
													<option>택배사를 선택하세요.</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
													</label>
													</div>
													<div class="mm_form-text">
													<button type="button" class="btn_text-clear"><i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b></button>
													<label>
													<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">최대 50자 입력</span>
													</label>
													</div>
													</div>
													</td>
													</tr>
												-->

												<!-- (D) 반품 수거지/반품지는 회수 방법이 고객 직접 회수일 경우 비노출합니다. -->
												<tr>
													<th scope="row">
														<b>반품 수거지</b>
													</th>
													<td><p>(12345) 경기도 성남시 판교로 242</p></td>
													<th scope="row">
														<b>반품지</b>
													</th>
													<td><p>(13487) 경기도 성남시 분당구 판교로 242 (삼평동) 판교디지털센터 C동 401호</p></td>
												</tr>
												<tr>
													<th scope="row">
														<b>반품 상품 결제 금액</b>
													</th>
													<td>
														<p class="text_price">
															55000
														</p>
													</td>
													<th scope="row">
														<b>차감 내역</b>
													</th>
													<td>
														<p>
															<span class="text_price">5000</span><br>
															(면제 배송비 <span class="text_price">2500</span> + 반품 배송비<span class="text_price">2500</span> + 도서산간 배송비<span class="text_price">2500</span>)
														</p>
													</td>
												</tr>
												<tr>
													<th scope="row">
														<b>환불 금액</b>
													</th>
													<td>
														<p>
															<span class="text_price">50000</span><br>
															(결제수단명 <span class="text_price">47500</span> + 적립금 <span class="text_num">2500</span>원)
														</p>
													</td>
													<th scope="row">
														<b>환불 계좌 정보</b>
													</th>
													<td><p>우리은행 / 1002555666666 / 홍길동</p></td>
												</tr>
											</tbody>
										</table>
									</div>
									<!-- 안내문구 -->
									<div class="mm_note">
										<ul>
											<li>면제 배송비란? 조건부 무료배송으로 주문하였으나, 반품 시 조건부 무료배송 조건을 충족하지 못하였을 시 고객의 반품 금액에서 차감하는 초기 택배 배송비 금액입니다.</li>
											<li>반품 확정 전까지 면제 배송비는 주문의 반품 신청 ~ 반품 회수 완료 상태로 있는 모든 상태에 노출됩니다.</li>
											<li>반품 확정 시, 면제 배송비가 차감되는 반품 상품에만 면제 배송비 금액이 노출되고 다른 반품 상품 내역에는 면제 배송비가 노출되지 않습니다.</li>
										</ul>
									</div>
									<!-- // 안내문구 -->
								</div>

								<!-- 반품 상품 목록 -->
								<div class="mm_table_box">
									<!-- 테이블상단 -->
									<div class="mm_table_box-unit">
										<div class="mm_lside">
											<div class="mm_btn_box">
												<div class="mm_inline">
													<button type="button" class="mm_btn">
														<b>반품 회수 완료</b>
													</button>
													<button type="button" class="mm_btn">
														<b>반품 확정</b>
													</button>
													<button type="button" class="mm_btn">
														<b>반품 철회</b>
													</button>
													<a class="mm_btn" href="/order/return/hold" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>반품 보류</b></a>
												</div>
											</div>
										</div>
									</div>
									<!-- // 테이블상단 -->

									<!-- 테이블 -->
									<div class="mm_table" data-table>
										<div class="mm_scroller">
											<table>
												<thead>
													<tr>
														<th class="col_check" scope="col">
															<div class="mm_table-item">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-return1" data-check="{ '_type': 'check_all' }">
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label mm_ir-blind">전체선택</span>
																	</b>
																</label>
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																순번
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																배송처
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																주문 상태
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																상품명
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																상품 코드
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																상품 옵션
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																수량
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																판매가
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																1차 쿠폰가
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																쿠폰 + 추가 할인
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																사용 적립금
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																배송비
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																제휴 실 판매가
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																제휴 실 결제가
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																제휴 실 할인금액
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																셀러
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																사은품명
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																사은품 코드
															</div>
														</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<div class="mm_table-item">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-return1" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label mm_ir-blind">항목선택</span>
																	</b>
																</label>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																1
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																업체 배송
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																결제 완료
															</div>
														</td>
														<td class="T=table-left">
															<div class="mm_table-item">
																<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>[밸리걸] 레터링 티셔츠 120670</b></a>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																1233
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																BK / 55
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																1
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">10000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">9000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<a href="/order/detail/discount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">1000</b></a>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_num">90</span>원
															</div>
														</td>
														<td rowspan="2">
															<div class="mm_table-item">
																<span class="text_price">2500</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">9000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">8000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">1000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러A</b></a>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																사은품A
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																255
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div class="mm_table-item">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-return1" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label mm_ir-blind">항목선택</span>
																	</b>
																</label>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																3
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																물류 배송
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																결제 완료
															</div>
														</td>
														<td class="T=table-left">
															<div class="mm_table-item">
																<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>[밸리걸] 레터링 티셔츠 120670</b></a>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																4561
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																WH / 44
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																1
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">20000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">18000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<a href="/order/detail/discount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">3000</b></a>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_num">180</span>원
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">18000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">17500</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">500</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러A</b></a>
															</div>
														</td>
														<td><div class="mm_table-item"></div></td>
														<td><div class="mm_table-item"></div></td>
													</tr>
													<tr>
														<td>
															<div class="mm_table-item">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-return1" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label mm_ir-blind">항목선택</span>
																	</b>
																</label>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																4
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																새벽 배송
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																배송 중
															</div>
														</td>
														<td class="T=table-left">
															<div class="mm_table-item">
																<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>[밸리걸] 레터링 티셔츠 120670</b></a>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																1111
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																BK / 66
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																1
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">30000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">24000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<a href="/order/detail/discount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">2000</b></a>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_num">240</span>원
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">2500</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">24000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">2000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">4000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러B</b></a>
															</div>
														</td>
														<td><div class="mm_table-item"></div></td>
														<td><div class="mm_table-item"></div></td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<!-- // 테이블 -->

									<!-- 테이블하단 -->
									<div class="mm_table_box-unit">
										<div class="mm_lside">
											<div class="mm_btn_box">
												<div class="mm_inline">
													<button type="button" class="mm_btn">
														<b>반품 회수 완료</b>
													</button>
													<button type="button" class="mm_btn">
														<b>반품 확정</b>
													</button>
													<button type="button" class="mm_btn">
														<b>반품 철회</b>
													</button>
													<a class="mm_btn" href="/order/return/hold" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>반품 보류</b></a>
												</div>
											</div>
										</div>
									</div>
									<!-- // 테이블하단 -->
									<div class="mm_note">
										<ul>
											<li>반품 철회 시 주문 상태는 구매 확정 단계로 변경됩니다.</li>
										</ul>
									</div>
								</div>
								<!-- // 반품 상품 목록 -->
							</div>
						</template>

						<template v-else>
							<div class="mm_tab-item">
								<p class="mm_text-none">
									반품 내역이 없습니다.
								</p>
							</div>
						</template>
						<!-- // 반품 주문 -->

						<!-- 교환 주문 -->
						<template v-if="_isNone === false">
							<div class="mm_tab-item">
								<div class="mm_form_box">
									<!-- 폼 상단 -->
									<div class="mm_form_box-caption">
										<h3 class="mm_heading">
											<b>교환 주문 정보</b>
										</h3>
									</div>
									<!-- // 폼 상단 -->
									<div class="mm_form">
										<table>
											<tbody>
												<tr>
													<th></th><td></td><th></th><td></td>
												</tr>
												<tr>
													<th scope="row">
														<b>주문번호</b>
													</th>
													<td><p>202005070001</p></td>
													<th scope="row">
														<b>교환 주문번호</b>
													</th>
													<td><p>202005070001</p></td>
												</tr>
												<tr>
													<th scope="row">
														<b>신규 교환 주문번호</b>
													</th>
													<td colspan="3">
														<p class="mm_text-primary">
															교환 확정 처리 시 신규 교환 주문이 배송 준비 중 상태로 생성됩니다.
														</p>
														<!-- <a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>202205010001</b></a> -->
													</td>
												</tr>
												<tr>
													<th scope="row">
														<b>교환 요청일시</b>
													</th>
													<td><p>2022-05-28 11:48:55</p></td>
													<th scope="row">
														<b>교환 사유</b>
													</th>
													<td><p>단순 변심</p></td>
												</tr>
												<tr>
													<th scope="row">
														<b>회수 방법</b>
													</th>
													<td colspan="3">
														<p>고객 직접 회수</p>
													</td>
												</tr>
												<!-- (D) 회수 방법이 자동 회수, 고객 직접 회수일 경우 노출합니다. -->
												<tr>
													<th scope="row">
														<b>택배 정보</b>
														<a class="mm_btn T=xs T=line T=secondary" href="/order/invoice-modify" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>송장 수정</b></a>
													</th>
													<td colspan="3">
														<span>CJ 대한통운 / </span><a href="#" target="_blank" title="새 창 열림"><b>412589942</b></a>
													</td>
												</tr>
												<!-- (D) 회수 방법이 자동 회수이면서 상품이 회수되기 전일 경우 노출합니다. -->
												<!--
													<tr>
													<th scope="row"><b>택배 정보</b></th>
													<td colspan="3"><p>회수 완료 시 자동 기입됩니다.</p></td>
													</tr>
												-->
												<!-- (D) 회수 방법이 업체 회수 일 경우 노출합니다. -->
												<!--
													<tr>
													<th scope="row"><b>택배 정보</b></th>
													<td colspan="3">
													<div class="mm_form_mix-linked">
													<button type="button" class="mm_btn"><b>저장</b></button>
													<div class="mm_form-select T=sm">
													<label>
													<select data-select>
													<option>택배사를 선택하세요.</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
													</label>
													</div>
													<div class="mm_form-text">
													<button type="button" class="btn_text-clear"><i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b></button>
													<label>
													<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">최대 50자 입력</span>
													</label>
													</div>
													</div>
													</td>
													</tr>
												-->

												<!-- (D) 교환 수거지/교환지는 회수 방법이 고객 직접 회수일 경우 비노출합니다. -->
												<tr>
													<th scope="row">
														<b>교환 수거지</b>
													</th>
													<td><p>(12345) 경기도 성남시 판교로 242</p></td>
													<th scope="row">
														<b>교환지</b>
													</th>
													<td><p>(13487) 경기도 성남시 분당구 판교로 242 (삼평동) 판교디지털센터 C동 401호</p></td>
												</tr>
												<tr>
													<th scope="row">
														<b>교환 상품 수취인</b>
													</th>
													<td><p>홍길동</p></td>
													<th scope="row">
														<b>휴대폰 번호</b>
													</th>
													<td><p>01012341234</p></td>
												</tr>
												<tr>
													<th scope="row">
														<b>교환 배송지</b>
													</th>
													<td colspan="3">
														<p>경기도 성남시 판교로 242</p>
													</td>
												</tr>
												<tr>
													<th scope="row">
														<b>추가 결제 금액</b>
													</th>
													<td colspan="3">
														<p>
															<span class="text_price">7500</span><br>
															(일반 배송비 <span class="text_price">2500</span> + 교환 배송비 <span class="text_price">2500</span> + 도서산간 배송비 <span class="text_price">2500</span>)
														</p>
													</td>
												</tr>
												<tr>
													<th scope="row">
														<b>결제 방식</b>
													</th>
													<td colspan="3">
														<p>판매자와 협의 후 결제</p>
													</td>
												</tr>
												<!-- (D) 교환 철회 내역이 있을 경우 노출합니다. -->
												<tr>
													<th scope="row">
														<b>추가 결제 금액<br> 환불 내역</b>
													</th>
													<td><p><span class="text_price">7500</span></p></td>
													<th scope="row">
														<b>환불 요청일시</b>
													</th>
													<td><p>2022-03-11 13:22:11</p></td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>

								<!-- 반품 상품 목록 -->
								<div class="mm_table_box">
									<!-- 테이블상단 -->
									<div class="mm_table_box-unit">
										<div class="mm_lside">
											<div class="mm_btn_box">
												<div class="mm_inline">
													<button type="button" class="mm_btn">
														<b>교환 회수 완료</b>
													</button>
													<button type="button" class="mm_btn">
														<b>교환 확정</b>
													</button>
													<button type="button" class="mm_btn">
														<b>교환 철회</b>
													</button>
													<a class="mm_btn" href="/order/exchange/hold" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>교환 보류</b></a>
													<a class="mm_btn" href="/order/exchange/switch" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>반품 전환</b></a>
												</div>
											</div>
										</div>
									</div>
									<!-- // 테이블상단 -->

									<!-- 테이블 -->
									<div class="mm_table" data-table>
										<div class="mm_scroller">
											<table>
												<thead>
													<tr>
														<th class="col_check" scope="col">
															<div class="mm_table-item">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-exchange1" data-check="{ '_type': 'check_all' }">
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label mm_ir-blind">전체선택</span>
																	</b>
																</label>
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																순번
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																배송처
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																주문 상태
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																상품명
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																상품 코드
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																상품 옵션
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																변경 옵션
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																수량
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																판매가
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																1차 쿠폰가
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																쿠폰 + 추가 할인
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																사용 적립금
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																배송비
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																제휴 실 판매가
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																제휴 실 결제가
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																제휴 실 할인금액
															</div>
														</th>
														<th scope="col">
															<div class="mm_table-item">
																셀러
															</div>
														</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<div class="mm_table-item">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-exchange1" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label mm_ir-blind">항목선택</span>
																	</b>
																</label>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																1
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																업체 배송
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																결제 완료
															</div>
														</td>
														<td class="T=table-left">
															<div class="mm_table-item">
																<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>[밸리걸] 레터링 티셔츠 120670</b></a>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																1233
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																BK / 55
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																BK / 44
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																1
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">10000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">9000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<a href="/order/detail/discount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">1000</b></a>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_num">90</span>원
															</div>
														</td>
														<td rowspan="2">
															<div class="mm_table-item">
																<span class="text_price">2500</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">9000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">8000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">1000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러A</b></a>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div class="mm_table-item">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-exchange1" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label mm_ir-blind">항목선택</span>
																	</b>
																</label>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																3
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																물류 배송
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																결제 완료
															</div>
														</td>
														<td class="T=table-left">
															<div class="mm_table-item">
																<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>[밸리걸] 레터링 티셔츠 120670</b></a>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																4561
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																WH / 44
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																WH / 55
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																1
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">20000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">18000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<a href="/order/detail/discount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">3000</b></a>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_num">180</span>원
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">18000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">17500</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">500</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러A</b></a>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div class="mm_table-item">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-exchange1" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label mm_ir-blind">항목선택</span>
																	</b>
																</label>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																4
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																새벽 배송
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																배송 중
															</div>
														</td>
														<td class="T=table-left">
															<div class="mm_table-item">
																<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>[밸리걸] 레터링 티셔츠 120670</b></a>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																1111
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																BK / 66
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																BK / 55
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																1
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">30000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">24000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<a href="/order/detail/discount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">2000</b></a>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_num">240</span>원
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">2500</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">24000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">20000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<span class="text_price">4000</span>
															</div>
														</td>
														<td>
															<div class="mm_table-item">
																<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러B</b></a>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<!-- // 테이블 -->

									<!-- 테이블하단 -->
									<div class="mm_table_box-unit">
										<div class="mm_lside">
											<div class="mm_btn_box">
												<div class="mm_inline">
													<button type="button" class="mm_btn">
														<b>교환 회수 완료</b>
													</button>
													<button type="button" class="mm_btn">
														<b>교환 확정</b>
													</button>
													<button type="button" class="mm_btn">
														<b>교환 철회</b>
													</button>
													<a class="mm_btn" href="/order/exchange/hold" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>교환 보류</b></a>
													<a class="mm_btn" href="/order/exchange/switch" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>반품 전환</b></a>
												</div>
											</div>
										</div>
									</div>
									<!-- // 테이블하단 -->
									<div class="mm_note">
										<ul>
											<li>교환 철회 시 주문 상태는 <strong>구매 확정</strong> 단계로 변경됩니다.</li>
											<li>반품 전환 시 주문 상태는 <strong>반품 확정</strong>으로 변경되어 환불이 진행됩니다.</li>
											<li>고객이 교환 요청 시 추가 결제한 배송비가 있을 경우 해당 배송비는 <strong>자동 환불</strong> 처리됩니다.</li>
										</ul>
									</div>
								</div>
								<!-- // 반품 상품 목록 -->
							</div>
						</template>

						<template v-else>
							<div class="mm_tab-item">
								<p class="mm_text-none">
									교환 내역이 없습니다.
								</p>
							</div>
						</template>
						<!-- // 교환 주문 -->
					</div>
				</div>
				<!-- // 본문 내용 -->

				<!-- 현재 페이지 스크립트 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	// 내용없음
	const _isNone = false;
</script>