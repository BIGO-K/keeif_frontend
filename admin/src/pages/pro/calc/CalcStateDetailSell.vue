<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>판매분 정산집계 상세</b>
						</h2>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xs T=round">
									<b>즐겨찾기 추가</b><i class="ico_plus"></i>
								</button>
								<a class="mm_btn T=xs T=round" href="" target="_blank" title="새 창 열림"><b>새창보기</b><i class="ico_newtab"></i></a>
							</div>
						</div>
					</div>

					<!-- 검색 -->
					<div class="mm_search">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td><th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>셀러</b>
									</th>
									<td colspan="7">
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option>선택하세요.</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>정산 자료</b>
									</th>
									<td colspan="7">
										<p>2022년 3월</p>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=lg T=tertiary btn_search">
									<b>검색</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 검색 -->

					<!-- 판매분 정산집계 상세 내역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>판매분 정산집계 상세 내역</b>
								</h3>
								<div class="mm_rside">
									<a class="mm_btn T=line btn_help" href="../calc/state" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>도움말</b><i class="ico_help"></i></a>
									<div class="mm_form-select T=list">
										<label>
											<select data-select>
												<option>20개 보기</option>
												<option>40개 보기</option>
												<option>60개 보기</option>
												<option>80개 보기</option>
												<option>100개 보기</option>
											</select>
											<b class="text_selected"></b>
											<i class="ico_form-select"></i>
										</label>
									</div>
								</div>
							</div>
							<div class="mm_table_box-unit">
								<div class="mm_rside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=xload btn_excel" href="/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
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
												<th class="S=table-fixed" scope="col" rowspan="2">
													<div class="mm_table-item">
														보정
													</div>
												</th>
												<th class="S=table-fixed" scope="col" rowspan="2">
													<div class="mm_table-item">
														보정 이력
													</div>
												</th>
												<th class="S=table-fixed" scope="col" rowspan="2">
													<div class="mm_table-item">
														주문번호
													</div>
												</th>
												<th class="S=table-fixed" scope="col" rowspan="2">
													<div class="mm_table-item">
														순번
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														주문일시
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														주문자
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														상품명
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														상품 코드
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														셀러
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														상품 옵션
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														판매 수량
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														판매가
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														마진율
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														마진금액
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														마진 제외 금액
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														사용 적립금
													</div>
												</th>
												<th scope="col" colspan="8">
													<div class="mm_table-item">
														자사 부담
													</div>
												</th>
												<th scope="col" colspan="3">
													<div class="mm_table-item">
														셀러 부담
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														판매 수수료
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														판매분 정산 금액
													</div>
												</th>
											</tr>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														할인 금액 합계
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														1차 쿠폰 할인금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														심야 할인
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														즉시 할인
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														일반 상품 쿠폰
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														타임딜 쿠폰
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														EP 쿠폰
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														자동 발행 쿠폰
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														할인 금액 합계
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														1차 쿠폰 할인금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														일반 상품 쿠폰
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm">
																	<b>보정</b>
																</button>
															</div>
														</div>
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														<a class="mm_btn T=sm T=line T=light" href="/calc/state/detail/sell/history" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>보정 이력</b></a>
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>123123123</b></a>
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-10-22 12:33:12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>[밸리걸] 레터링 티셔츠 120670</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123123123
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러A
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
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">120000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>원
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
											</tr>
											<!-- (D) 보정 버튼 클릭 시 노출형태 -->
											<tr>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>취소</b>
																</button>
																<button type="button" class="mm_btn T=sm">
																	<b>적용</b>
																</button>
															</div>
														</div>
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item"></div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>123123123</b></a>
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-10-22 12:33:12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>[밸리걸] 레터링 티셔츠 120670</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123123123
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러A
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
														<span class="text_price">125000</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자, (-)만 입력</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">120000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>원
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자, (-)만 입력</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자, (-)만 입력</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자, (-)만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자, (-)만 입력</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
											</tr>
											<!-- (D) 보정 이력 발생 시 노출형태 -->
											<tr>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm">
																	<b>보정</b>
																</button>
															</div>
														</div>
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														<a class="mm_btn T=sm T=line T=light" href="/calc/state/detail/sell/history" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>보정 이력</b></a>
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>123123123</b></a>
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-10-22 12:33:12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>[밸리걸] 레터링 티셔츠 120670</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123123123
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러A
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
														<span class="text_price">125000</span>
													</div>
												</td>
												<!-- (D) 보정된 항목의 'td' 요소에 T=highlight 클래스를 추가합니다 -->
												<td class="T=highlight">
													<div class="mm_table-item">
														10%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">120000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>원
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<!-- (D) 보정된 항목의 'td' 요소에 T=highlight 클래스를 추가합니다 -->
												<td class="T=highlight">
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<!-- (D) 보정된 항목의 'td' 요소에 T=highlight 클래스를 추가합니다 -->
												<td class="T=highlight">
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<!-- (D) 보정된 항목의 'td' 요소에 T=highlight 클래스를 추가합니다 -->
												<td class="T=highlight">
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<!-- (D) 보정된 항목의 'td' 요소에 T=highlight 클래스를 추가합니다 -->
												<td class="T=highlight">
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
											</tr>
											<!-- (D) 임시마감 이후 노출형태 -->
											<tr>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														임시마감
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														<a class="mm_btn T=sm T=line T=light" href="/calc/state/detail/sell/history" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>보정 이력</b></a>
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>123123123</b></a>
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-10-22 12:33:12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>[밸리걸] 레터링 티셔츠 120670</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123123123
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러A
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
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">120000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>원
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
											</tr>
											<!-- (D) 정산마감 이후 노출형태 -->
											<tr>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														정산마감
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														<a class="mm_btn T=sm T=line T=light" href="/calc/state/detail/sell/history" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>보정 이력</b></a>
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>123123123</b></a>
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-10-22 12:33:12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>[밸리걸] 레터링 티셔츠 120670</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123123123
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러A
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
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">120000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>원
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														총 계
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item"></div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item"></div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item"></div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
											</tr>
										</tfoot>
									</table>
								</div>
							</div>
							<!-- // 테이블 -->

							<!-- 테이블하단 -->
							<div class="mm_table_box-unit">
								<div class="mm_rside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=xload btn_excel" href="/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
										</div>
									</div>
								</div>
							</div>
							<!-- // 테이블하단 -->

							<!-- 페이지네이션 -->
							<!-- (D) 현재 페이지의 메뉴에 'S=page-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
							<div class="mm_pagination">
								<div class="mm_inline">
									<ol>
										<li><a class="S=page-on" href="#" title="선택됨"><b>1</b></a></li>
										<li><a href="#"><b>2</b></a></li>
										<li><a href="#"><b>3</b></a></li>
										<li><a href="#"><b>4</b></a></li>
										<li><a href="#"><b>5</b></a></li>
									</ol>
									<button type="button" class="btn_control-first" onclick="mm.link('')" disabled>
										<i class="ico_page-first"></i><b class="mm_ir-blind">처음</b>
									</button>
									<button type="button" class="btn_control-prev" onclick="mm.link('')" disabled>
										<i class="ico_page-prev"></i><b class="mm_ir-blind">이전</b>
									</button>
									<button type="button" class="btn_control-next" onclick="mm.link('')">
										<i class="ico_page-next"></i><b class="mm_ir-blind">다음</b>
									</button>
									<button type="button" class="btn_control-last" onclick="mm.link('')">
										<i class="ico_page-last"></i><b class="mm_ir-blind">마지막</b>
									</button>
								</div>
								<div class="mm_pagination-jump">
									<div class="mm_form_mix-linked">
										<div class="mm_form-text">
											<label>
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder">000</span>
											</label>
										</div>
										<button type="button" class="btn_jump">
											<b class="mm_ir-blind">이동</b><i class="ico_page-jump"></i>
										</button>
										<p class="text_linked">
											of 10<strong>(1,125 items)</strong>
										</p>
									</div>
								</div>
							</div>
							<!-- // 페이지네이션 -->

							<!-- 유의사항 -->
							<div class="mm_note">
								<ul>
									<li>마진율, 1차 쿠폰 할인금액[자사/셀러 부담], 일반 상품 쿠폰[자사/셀러 부담] 항목만 보정이 가능합니다.</li>
									<li>보정된 데이터와 연관되는 데이터는 자동 계산되어 수정됩니다.</li>
									<li>보정된 데이터의 셀은 붉은 배경색으로 표기됩니다.</li>
									<li>보정 이력 버튼을 통해 보정 진행된 이력 확인이 가능합니다.</li>
								</ul>
							</div>
							<!-- // 유의사항 -->
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>판매분 정산집계 상세 내역</b>
								</h3>
								<div class="mm_rside">
									<a class="mm_btn T=line btn_help" href="../calc/state" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>도움말</b><i class="ico_help"></i></a>
									<div class="mm_form-select T=list">
										<label>
											<select data-select>
												<option>20개 보기</option>
												<option>40개 보기</option>
												<option>60개 보기</option>
												<option>80개 보기</option>
												<option>100개 보기</option>
											</select>
											<b class="text_selected"></b>
											<i class="ico_form-select"></i>
										</label>
									</div>
								</div>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>검색된 결과가 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 판매분 정산집계 상세 내역 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';

	// 내용없음
	const _isNone = false;
</script>