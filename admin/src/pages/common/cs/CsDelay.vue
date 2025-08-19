<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>배송지연 신고</b>
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
										<b>검색</b>
									</th>
									<td colspan="7">
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option>신청자</option>
													<option>상품명</option>
													<option>상품 코드</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 50자 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>기간</b>
									</th>
									<td colspan="7">
										<div class="mm_form_mix-period">
											<div class="mm_form-text T=calendar">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
													<span class="text_placeholder">시작일</span>
													<i class="ico_datepicker-calendar"></i>
												</label>
											</div>
											<b class="text_tilde">~</b>
											<div class="mm_form-text T=calendar">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
													<span class="text_placeholder">종료일</span>
													<i class="ico_datepicker-calendar"></i>
												</label>
											</div>
											<div class="mm_form-select T=xs">
												<label>
													<select data-select>
														<option>오늘</option>
														<option>최근 3일</option>
														<option>최근 1주일</option>
														<option selected>최근 1개월</option>
														<option>최근 3개월</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>처리 상태</b>
									</th>
									<td colspan="7">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-state" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-state" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">접수</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-state" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">처리 완료</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-state" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">처리 불가</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="mm_note">
							<ul>
								<li>기간 검색은 신고일자에 대한 검색이며, 최대 1년 단위로 검색하시기 바랍니다.</li>
							</ul>
						</div>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=lg T=tertiary btn_search">
									<b>검색</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 검색 -->

					<!-- 테이블영역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<div class="mm_rside">
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
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<button type="button" class="mm_btn">
												<b>선택 보상 승인</b>
											</button>
											<button type="button" class="mm_btn T=line">
												<b>선택 보상 불가</b>
											</button>
										</div>
									</div>
								</div>
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
												<th class="col_check" scope="col">
													<div class="mm_table-item">
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-option" data-check="{ '_type': 'check_all' }">
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label mm_ir-blind">전체선택</span>
															</b>
														</label>
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														No.
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														처리 상태
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														출고 예상일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														결제일시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														보상 기준일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														배송 출발일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														신청일시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														신청자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														처리일시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														처리자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														주문번호
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														순번
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
												<th scope="col">
													<div class="mm_table-item">
														적립 여부
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														보상률
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														적립금
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
														셀러
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
														관리
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-option" data-check>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label mm_ir-blind">항목선택</span>
															</b>
														</label>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														접수
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														2022-03-20 13:00:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-23
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														2022-03-23 18:00:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>20000205878</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>[테일러메이드]21SS 여성 옆선 배색 로고 큐롯 TWCUK6196-100</b>
														</p>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123456789
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														BK / 55
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">10</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">18000</span>
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-option" data-check>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label mm_ir-blind">항목선택</span>
															</b>
														</label>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														19
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														접수
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-21
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-20 13:00:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-23
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-25
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-24 18:00:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														박미진
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>20000205878</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														CJ대한통운
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="#" target="_blank" title="새 창 열림"><b>12348521</b></a>
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														30%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">500</span>
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>[테일러메이드]21SS 여성 옆선 배색 로고 큐롯 TWCUK6196-100</b>
														</p>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123456789
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														FREE / 100
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">10</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">25000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>보상 불가</b>
																</button>
																<button type="button" class="mm_btn T=sm">
																	<b>보상 승인</b>
																</button>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-option" data-check>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label mm_ir-blind">항목선택</span>
															</b>
														</label>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														18
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														처리 완료
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-22
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-20 13:00:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-23
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-25
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-24 18:00:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														한소희
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-25 10:28:22
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>20000205878</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														CJ대한통운
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="#" target="_blank" title="새 창 열림"><b>12348521</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														적립 완료
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														30%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">600</span>
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>DMAN DOMINIK 2 D211007 OFFWHITE/GREY</b>
														</p>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123456789
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														FREE / 100
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">10</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">74900</span>
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-option" data-check>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label mm_ir-blind">항목선택</span>
															</b>
														</label>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														17
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														처리 불가
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-22
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-20 13:00:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-23
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-22
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-29 18:00:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														이지은
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-25 10:28:22
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자B
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>20000205878</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														로젠택배
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="#" target="_blank" title="새 창 열림"><b>12348521</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														미적립
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														30%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">500</span>
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>Clo bustier belt long dress_BEIGE</b>
														</p>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123456789
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러B
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														beige/44
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">10</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">74900</span>
													</div>
												</td>
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
												<b>선택 보상 승인</b>
											</button>
											<button type="button" class="mm_btn T=line">
												<b>선택 보상 불가</b>
											</button>
										</div>
									</div>
								</div>
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
												<span class="text_placeholder">숫자</span>
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
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<div class="mm_rside">
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
					<!-- // 테이블영역 -->

					<!-- 보상 정책 기준 영역 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h3 class="mm_heading">
								<b>보상 정책 기준</b>
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
													지연일수
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													적립금 보상률
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													결제완료일(D)
												</div>
											</td>
											<td rowspan="3">
												<div class="mm_table-item">
													없음
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													1일 지연(D+1)
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													2일 지연(D+2)
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													3일 지연(D+3)
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													1%
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													4일 지연(D+4)
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2%
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													5일 지연(D+5)
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													3%
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													6일 지연(D+6)
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													4%
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													7일 이상 지연(D+7)
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													5%
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->

						<!-- 안내문구 -->
						<div class="mm_note">
							<ul>
								<li>지연일은 결제일 다음 날부터 계산되어 노출됩니다. (영업일 기준)</li>
								<li>결제 완료일(출고예상일) 다음 날(1일째)부터 3일 이내 배송출발이 되지 않았을 경우, 주문한 상품 판매금액의 최저 4% ~ 최고 10%를 적립금으로 보상해드리는 제도입니다.</li>
							</ul>
						</div>
						<!-- // 안내문구 -->
					</div>
					<!-- // 보상 정책 기준 영역 -->
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