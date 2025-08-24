<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>정산현황</b>
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
										<b>임시 마감 여부</b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-temporary" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-temporary" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">Y</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-temporary" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">N</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
									<th scope="row">
										<b>마감 확정 여부</b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-end" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-end" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">Y</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-end" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">N</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>자동 마감 확정 여부</b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-auto" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-auto" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">Y</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-auto" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">N</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
									<th scope="row">
										<b>주문 미발생 대상</b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-miss" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">미포함</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-miss" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">포함</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>정산 자료</b>
									</th>
									<td colspan="7">
										<div class="mm_form-select T=xl">
											<label>
												<select data-select>
													<option>2022년 3월</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
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

					<!-- 총 정산 데이터 합계 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>총 정산 데이터 합계</b>
								</h3>
								<div class="mm_rside">
									<a class="mm_btn T=line btn_help" href="../calc/state" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>도움말</b><i class="ico_help"></i></a>
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
												<th scope="col">
													<div class="mm_table-item">
														판매 금액 합계
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														사용 적립금 합계
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														마진금액 합계
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														마진 제외 금액 합계
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														자사 부담 할인 금액 합계
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러 부담 할인 금액 합계
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														배송비 합계
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														패널티 합계
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														최종 정산 금액 합계
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														판매 수수료 합계
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														공급가액 합계
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														세액 합계
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000000</span>원
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
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
								<div class="mm_rside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=xload btn_excel" href="/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
										</div>
									</div>
								</div>
							</div>
							<!-- // 테이블하단 -->
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>총 정산 데이터 합계</b>
								</h3>
								<div class="mm_rside">
									<a class="mm_btn T=line btn_help" href="../calc/state" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>도움말</b><i class="ico_help"></i></a>
								</div>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>검색된 결과가 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 총 정산 데이터 합계 -->

					<!-- 정산 내역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>정산 내역</b>
								</h3>
								<div class="mm_rside">
									<a class="mm_btn T=line btn_help" href="../calc/state" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>도움말</b><i class="ico_help"></i></a>
								</div>
							</div>
							<div class="mm_table_box-unit">
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<button type="button" class="mm_btn">
												<b>전체 임시 마감</b>
											</button>
											<button type="button" class="mm_btn">
												<b>전체 임시 마감 해제</b>
											</button>
											<button type="button" class="mm_btn">
												<b>선택 임시 마감</b>
											</button>
											<button type="button" class="mm_btn">
												<b>선택 임시 마감 해제</b>
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
												<th class="col_check S=table-fixed" scope="col">
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
												<th class="S=table-fixed" scope="col">
													<div class="mm_table-item">
														관리
													</div>
												</th>
												<th class="S=table-fixed" scope="col">
													<div class="mm_table-item">
														정산 월
													</div>
												</th>
												<th class="S=table-fixed" scope="col">
													<div class="mm_table-item">
														결제 예정일
													</div>
												</th>
												<th class="S=table-fixed" scope="col">
													<div class="mm_table-item">
														임시<br>마감 여부
													</div>
												</th>
												<th class="S=table-fixed" scope="col">
													<div class="mm_table-item">
														마감<br>확정 여부
													</div>
												</th>
												<th class="S=table-fixed" scope="col">
													<div class="mm_table-item">
														자동 마감<br>확정 여부
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														사업자 번호
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														판매 수량
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														판매 금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														사용 적립금
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														마진금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														마진 제외 금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														자사 부담 할인 금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러 부담 할인 금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														배송비 합계
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														패널티 합계
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														최종 정산 금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														판매 수수료
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														공급가액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														세액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														정산 계좌 은행
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														정산 계좌 번호
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														정산 계좌 예금주
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="S=table-fixed">
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
												<td class="S=table-fixed">
													<div class="mm_table-item">
														<a class="mm_btn T=sm T=line" href="state/detail" target="_blank" title="새 창 열림"><b>상세</b></a>
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														2022-05
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														2022-05-12
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														N
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														N
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														N
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1231231231
													</div>
												</td>
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
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>원
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
														<span class="text_price">-125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														KEB 하나은행
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123123123
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														(주)엠몬스타
													</div>
												</td>
											</tr>
											<tr>
												<td class="S=table-fixed">
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
												<td class="S=table-fixed">
													<div class="mm_table-item">
														<a class="mm_btn T=sm T=line" href="state/detail" target="_blank" title="새 창 열림"><b>상세</b></a>
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														2022-05
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														2022-05-12
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														N
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														N
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														N
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1231231231
													</div>
												</td>
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
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>원
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
														<span class="text_price">-125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-125000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														KEB 하나은행
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123123123
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														(주)엠몬스타
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
												<b>전체 임시 마감</b>
											</button>
											<button type="button" class="mm_btn">
												<b>전체 임시 마감 해제</b>
											</button>
											<button type="button" class="mm_btn">
												<b>선택 임시 마감</b>
											</button>
											<button type="button" class="mm_btn">
												<b>선택 임시 마감 해제</b>
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
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>정산 내역</b>
								</h3>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>검색된 결과가 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 정산 내역 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>선택 마감 확정</b>
								</button>
							</div>
						</div>
					</div>

					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<a class="mm_btn T=xl T=line T=xload" href="#" download=""><b>선택 판매 수수료 세금 계산서 양식 다운로드</b></a>
								<a class="mm_btn T=xl T=line T=xload" href="#" download=""><b>선택 패널티 세금 계산서 양식 다운로드</b></a>
							</div>
						</div>
					</div>
					<!-- // 최하단버튼 -->
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