<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>네이버 CPS 매출 통계</b>
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
									<th scope="row" rowspan="2">
										<b>기간</b>
									</th>
									<td colspan="7">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-period" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">일자 별</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-period" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">주문 별</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
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
														<option selected>오늘</option>
														<option>최근 3일</option>
														<option>최근 1주일</option>
														<option>최근 1개월</option>
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
										<b>유입 채널</b>
									</th>
									<td colspan="3">
										<div class="mm_form-select">
											<label>
												<select data-select>
													<option>전체</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
									<th scope="row">
										<b>구분</b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-type" checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-type">
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">PC</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-type">
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">Mobile</span>
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
								<li>기간 검색은 최대 3개월 범위로 검색이 가능합니다.</li>
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

					<template v-if="_isNone === false">
						<!-- 누적 현황 -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>누적 현황</b>
								</h3>
							</div>
							<!-- // 테이블상단 -->
							<div class="mm_table" data-table>
								<div class="mm_scroller">
									<table>
										<thead>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														총 판매가
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														총 할인금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														총 적립금
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														총 결제액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														총 취반품액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														순 결제액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														순 매출액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														주문 수량
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														주문 건수
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														<span class="text_price">100000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">5000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">90000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-45000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">45000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40910</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">2</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1</span>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<!-- 누적 현황 -->

						<!-- 일자 별 현황 -->
						<!-- (D) 기간 - 일자 별 선택 후 검색 시 노출되는 리스트 입니다. -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>일자 별 현황</b>
								</h3>
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
							<div class="mm_table" data-table>
								<div class="mm_scroller">
									<table>
										<thead>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														일자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														판매가
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														할인금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														적립금
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														결제액(VAT 포함)
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														매출액(VAT 제외)
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														주문 수량
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														주문 건수
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														2023-01-12 09:12:56
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-20000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-2000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-18000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-16364</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">-1</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2023-01-13 14:12:34
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-30000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-3000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-1500</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-27000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-24545</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">-1</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2023-01-25 14:12:34
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">25000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">2500</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">22500</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">20455</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2023-01-25 14:12:34
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">25000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">2500</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">22500</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">20455</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2023-01-28 14:12:34
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">25000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">2500</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">22500</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">20455</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1</span>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
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
							</div>
							<!-- // 페이지네이션 -->
						</div>
						<!-- // 일자 별 현황 -->

						<!-- 주문 별 현황 -->
						<!-- (D) 기간 - 주문 별 선택 후 검색 시 노출되는 리스트 입니다. -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>주문 별 현황</b>
								</h3>
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
							<div class="mm_table" data-table>
								<div class="mm_scroller">
									<table>
										<thead>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														일자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														주문상태
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														주문번호
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														유입 채널
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														상품 번호
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														상품명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														판매가
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														할인금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														적립금
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														결제액(VAT 포함)
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														매출액(VAT 제외)
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														주문 수량
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														2023-01-12 09:12:56
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														취소완료
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														259784
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														MO_핫딜
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														P789
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														MMONSATAR
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-20000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-2000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-18000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-16364</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">-1</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2023-01-13 14:12:34
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														반품완료
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123747
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														MO_DB
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														P125
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														BBHS
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-30000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-3000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-1500</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-27000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-24545</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">-1</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2023-01-25 14:12:34
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														결제완료
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123456
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														PC_DB
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														P123
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														ABCD
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">25000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">2500</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">22500</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">20455</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2023-01-25 14:12:34
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														결제완료
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														785123
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														PC_DB
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														P567
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														ABCDPP
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">25000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">2500</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">22500</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">20455</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2023-01-28 14:12:34
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														결제완료
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														791482
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														PC_DB
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														P765
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														POOO
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">25000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">2500</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">22500</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">20455</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1</span>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
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
							</div>
							<!-- // 페이지네이션 -->
						</div>
						<!-- // 주문 별 현황 -->
					</template>

					<template v-else>
						<!-- 누적 현황 -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>누적 현황</b>
								</h3>
							</div>
							<!-- // 테이블상단 -->
							<div class="mm_table-none">
								<p>검색된 결과가 없습니다.</p>
							</div>
						</div>
						<!-- 누적 현황 -->

						<!-- 일자 별 현황 -->
						<!-- (D) 기간 - 일자 별 선택 후 검색 시 노출되는 리스트 입니다. -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>일자 별 현황</b>
								</h3>
							</div>
							<!-- // 테이블상단 -->
							<div class="mm_table-none">
								<p>검색된 결과가 없습니다.</p>
							</div>
						</div>
						<!-- // 일자 별 현황 -->

						<!-- 주문 별 현황 -->
						<!-- (D) 기간 - 주문 별 선택 후 검색 시 노출되는 리스트 입니다. -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>주문 별 현황</b>
								</h3>
							</div>
							<!-- // 테이블상단 -->
							<div class="mm_table-none">
								<p>검색된 결과가 없습니다.</p>
							</div>
						</div>
						<!-- // 주문 별 현황 -->
					</template>
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