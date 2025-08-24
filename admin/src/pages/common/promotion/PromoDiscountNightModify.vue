<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>심야 할인 수정</b>
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

					<!-- 셀러 설정 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>셀러 설정<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<p>셀러 A</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 셀러 설정 -->

					<!-- 심야 할인 상세 설정 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>심야 할인 상세 설정</b>
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
											<b>할인명<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
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
											<b>사용 여부<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-using" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">사용</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-using" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">미사용</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>사용 기간<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
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
												<div class="mm_form-select T=time">
													<label>
														<select data-select>
															<option>0</option>
														</select>
														<b class="text_selected"></b>
														<i class="ico_form-select"></i>
													</label>
												</div>
												<span class="text_linked">시</span>
												<span class="text_tilde">~</span>
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
												<div class="mm_form-select T=time">
													<label>
														<select data-select>
															<option>0</option>
														</select>
														<b class="text_selected"></b>
														<i class="ico_form-select"></i>
													</label>
												</div>
												<span class="text_linked">시</span>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>사용 시간<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-period">
												<div class="mm_form-select T=time">
													<label>
														<select data-select>
															<option>0</option>
														</select>
														<b class="text_selected"></b>
														<i class="ico_form-select"></i>
													</label>
												</div>
												<span class="text_linked">시</span>
												<div class="mm_form-select T=time">
													<label>
														<select data-select>
															<option>0</option>
														</select>
														<b class="text_selected"></b>
														<i class="ico_form-select"></i>
													</label>
												</div>
												<span class="text_linked">분</span>
												<b class="text_tilde">~</b>
												<div class="mm_form-select T=xs">
													<label>
														<select data-select>
															<option>1시간</option>
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
											<b>지정 요일<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-period">
												<ul>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_period-week" data-check>
															<b class="mm_block">
																<span class="text_label">월</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_period-week" data-check>
															<b class="mm_block">
																<span class="text_label">화</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_period-week" data-check>
															<b class="mm_block">
																<span class="text_label">수</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_period-week" data-check>
															<b class="mm_block">
																<span class="text_label">목</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_period-week" data-check>
															<b class="mm_block">
																<span class="text_label">금</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_period-week" data-check>
															<b class="mm_block">
																<span class="text_label">토</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_period-week" data-check>
															<b class="mm_block">
																<span class="text_label">일</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>할인율/할인금액<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<div class="mm_form_mix-linked">
															<label class="mm_form-radio">
																<input type="radio" name="dev_radio-sale" data-radio="{ 'syncer': '.mm_syncer-dc-rate' }" checked>
																<b class="mm_block">
																	<i class="ico_form-radio"></i>
																	<span class="text_label">할인율</span>
																</b>
															</label>
															<div class="mm_syncer-dc-rate">
																<div class="mm_form-text T=xs">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text><i class="bg_text"></i>
																		<span class="text_placeholder">숫자만 입력</span>
																	</label>
																</div>
															</div>
														</div>
													</li>
													<li>
														<div class="mm_form_mix-linked">
															<label class="mm_form-radio">
																<input type="radio" name="dev_radio-sale" data-radio="{ 'syncer': '.mm_syncer-dc-price' }">
																<b class="mm_block">
																	<i class="ico_form-radio"></i>
																	<span class="text_label">할인금액</span>
																</b>
															</label>
															<div class="mm_syncer-dc-price">
																<div class="mm_form-text T=xs">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
																		<span class="text_placeholder">숫자만 입력</span>
																	</label>
																</div>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr class="mm_syncer-dc-rate">
										<th scope="row">
											<b>최대 할인 금액</b>
										</th>
										<td colspan="3">
											<div class="mm_form-text T=xs">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder">숫자만 입력</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>최저 금액 조건</b>
										</th>
										<td>
											<div class="mm_form-text T=xs">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder">숫자만 입력</span>
												</label>
											</div>
										</td>
										<th scope="row">
											<b>최저 마진 조건</b>
										</th>
										<td>
											<div class="mm_form-text T=xs">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text><i class="bg_text"></i>
													<span class="text_placeholder">100.0</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>할인 적용 범위<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-range" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">전체 상품</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-range" data-radio="{ 'syncer': '.mm_syncer-apply-product' }">
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">상품</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-range" data-radio="{ 'syncer': '.mm_syncer-apply-brand' }">
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">브랜드</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr class="mm_syncer-apply-brand">
										<th scope="row">
											<b>할인 적용 제외 범위</b>
										</th>
										<!-- (D) 할인 적용 범위에서 선택한 범위는 비노출 합니다. -->
										<td colspan="3">
											<label class="mm_form-check">
												<input type="checkbox" name="dev_check-area" data-check="{ 'syncer': '.mm_syncer-except-product' }">
												<b class="mm_block">
													<i class="ico_form-check"></i>
													<span class="text_label">상품</span>
												</b>
											</label>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<!-- 유의사항 -->
						<div class="mm_note">
							<ul>
								<li>최대 할인 금액, 최저 마진 조건, 최저 금액 조건 <strong>입력 없이 등록/수정 시 0으로 자동 기입되며 해당 조건은 무제한으로 적용</strong>됩니다.</li>
							</ul>
						</div>
						<!-- // 유의사항 -->
					</div>
					<!-- // 심야 할인 상세 설정 -->

					<!-- (D) 할인 적용 범위 목록 -->
					<!-- 상품 설정 (할인 적용) -->
					<div class="mm_syncer-apply-product">
						<!-- 내용있음 -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>상품 설정 (할인 적용)</b>
								</h3>
							</div>
							<div class="mm_table_box-unit">
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
											<button type="button" class="mm_btn T=line">
												<b>선택 삭제</b>
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
								<div class="mm_scroller" style="max-height:300px;">
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
														상품 번호
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러
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
														1
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>상품C</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														111111
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">50000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">45000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
															</div>
														</div>
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
											<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
											<button type="button" class="mm_btn T=line">
												<b>선택 삭제</b>
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
						</div>
						<!-- // 내용있음 -->

						<!-- 내용없음 -->
						<!--
							<div class="mm_table_box">
							<div class="mm_table_box-caption">
							<h3 class="mm_heading"><b>상품 설정 (할인 적용)</b></h3>
							</div>
							<div class="mm_table_box-unit">
							<div class="mm_lside">
							<div class="mm_btn_box">
							<div class="mm_inline">
							<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
							</div>
							</div>
							</div>
							</div>
							<div class="mm_table-none">
							<p>등록된 내용이 없습니다.</p>
							</div>
							<div class="mm_table_box-unit">
							<div class="mm_lside">
							<div class="mm_btn_box">
							<div class="mm_inline">
							<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
							</div>
							</div>
							</div>
							</div>
							</div>
						-->
						<!-- // 내용없음 -->

						<!-- 엑셀 업로드 -->
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>엑셀 업로드</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<div class="mm_form-file">
													<button type="button" class="btn_remove-file">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">파일삭제</b>
													</button>
													<label>
														<input type="file" accept=".zip" data-file="{ '_fileName': 'discount_night_product' }">
														<span class="text_path"></span>
														<span class="mm_btn T=line T=light text_label">파일첨부</span>
													</label>
												</div>
												<a class="btn_sample" href="#" download><b>샘플다운받기</b></a>
												<button type="button" class="mm_btn T=line T=xload btn_excel">
													<b>엑셀 업로드</b><i class="ico_upload"></i>
												</button>
											</div>
											<div class="mm_note T=bottom">
												<ul>
													<li><strong>discount_night_product 파일명만 업로드가 가능</strong>합니다. (xls/xlsx 확장자를 제외한 파일 및 이미지는 업로드 불가)</li>
													<li>파일 지정 후 업로드 버튼 클릭 시 상단 목록에 적용되어 노출됩니다.</li>
													<li>업로드 시, 동일한 데이터를 가진 항목은 유지되고 변동이 있거나 신규 추가된 항목만 업로드되어 노출됩니다.</li>
													<li>항목 삭제는 엑셀파일이 아닌 목록의 삭제 버튼을 통해서만 가능합니다.</li>
												</ul>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<!-- // 엑셀 업로드 -->
					</div>
					<!-- // 상품 설정 (할인 적용) -->

					<!-- 브랜드 설정 (할인 적용) -->
					<div class="mm_syncer-apply-brand">
						<!-- 내용있음 -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>브랜드 설정 (할인 적용)</b>
								</h3>
							</div>
							<div class="mm_table_box-unit">
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=secondary" href="/search/brand-multi" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>브랜드 추가</b></a>
											<button type="button" class="mm_btn T=line">
												<b>선택 삭제</b>
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
								<div class="mm_scroller" style="max-height:300px;">
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
														브랜드 코드
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														브랜드명
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
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														나이키
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
															</div>
														</div>
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
											<a class="mm_btn T=line T=secondary" href="/search/brand-multi" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>브랜드 추가</b></a>
											<button type="button" class="mm_btn T=line">
												<b>선택 삭제</b>
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
						</div>
						<!-- // 내용있음 -->

						<!-- 내용없음 -->
						<!--
							<div class="mm_table_box">
							<div class="mm_table_box-caption">
							<h3 class="mm_heading"><b>브랜드 설정 (할인 적용)</b></h3>
							</div>
							<div class="mm_table_box-unit">
							<div class="mm_lside">
							<div class="mm_btn_box">
							<div class="mm_inline">
							<a class="mm_btn T=line T=secondary" href="/search/brand-multi" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>브랜드 추가</b></a>
							</div>
							</div>
							</div>
							</div>
							<div class="mm_table-none">
							<p>등록된 내용이 없습니다.</p>
							</div>
							<div class="mm_table_box-unit">
							<div class="mm_lside">
							<div class="mm_btn_box">
							<div class="mm_inline">
							<a class="mm_btn T=line T=secondary" href="/search/brand-multi" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>브랜드 추가</b></a>
							</div>
							</div>
							</div>
							</div>
							</div>
						-->
						<!-- // 내용없음 -->
					</div>
					<!-- // 브랜드 설정 (할인 적용) -->

					<!-- (D) 할인 적용 제외 범위 목록 -->
					<!-- 상품 설정 (할인 적용 제외) -->
					<div class="mm_syncer-except-product">
						<!-- 내용있음 -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>상품 설정 (할인 적용 제외)</b>
								</h3>
							</div>
							<div class="mm_table_box-unit">
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
											<button type="button" class="mm_btn T=line">
												<b>선택 삭제</b>
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
								<div class="mm_scroller" style="max-height:300px;">
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
														상품 번호
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러
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
														1
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>상품C</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														111111
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">50000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">45000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
															</div>
														</div>
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
											<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
											<button type="button" class="mm_btn T=line">
												<b>선택 삭제</b>
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
						</div>
						<!-- // 내용있음 -->

						<!-- 내용없음 -->
						<!--
							<div class="mm_table_box">
							<div class="mm_table_box-caption">
							<h3 class="mm_heading"><b>상품 설정 (할인 적용 제외)</b></h3>
							</div>
							<div class="mm_table_box-unit">
							<div class="mm_lside">
							<div class="mm_btn_box">
							<div class="mm_inline">
							<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
							</div>
							</div>
							</div>
							</div>
							<div class="mm_table-none">
							<p>등록된 내용이 없습니다.</p>
							</div>
							<div class="mm_table_box-unit">
							<div class="mm_lside">
							<div class="mm_btn_box">
							<div class="mm_inline">
							<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
							</div>
							</div>
							</div>
							</div>
							</div>
						-->
						<!-- // 내용없음 -->
					</div>
					<!-- // 상품 설정 (할인 적용 제외) -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<a class="mm_btn T=xl T=line T=tertiary" href="#" data-href="{ '_type': 'link' }"><b>취소하기</b></a>
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>수정하기</b>
								</button>
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
</script>