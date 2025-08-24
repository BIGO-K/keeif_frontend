<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>다운로드 쿠폰 수정</b>
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

					<!-- 다운로드 쿠폰 수정 설정 -->
					<div class="mm_form_box">
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>쿠폰명<i class="ico_required" title="필수입력"></i></b>
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
											<b>쿠폰 유형<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-coupon" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">일반 상품 쿠폰</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-coupon" data-radio="{ 'syncer': '.mm_syncer-coupon-other', 'desyncer': '.mm_desyncer-coupon-other' }">
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">타임딜 전용 쿠폰</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>쿠폰 설명</b>
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
											<b>고객 사용 가능 여부<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-custom" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">사용 가능</span>
															</b>
														</label>
													</li>
													<li>
														<div class="mm_form_mix-linked">
															<label class="mm_form-radio">
																<input type="radio" name="dev_radio-custom" data-radio="{ 'syncer': '.mm_syncer-using-custom' }">
																<b class="mm_block">
																	<i class="ico_form-radio"></i>
																	<span class="text_label">사용 불가</span>
																</b>
															</label>
															<div class="mm_syncer-using-custom">
																<div class="mm_form-text">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text="{ '_byte': 30 }"><i class="bg_text"></i>
																		<span class="text_placeholder mm_ir-blind">최대 30자 입력</span>
																	</label>
																</div>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>디바이스 설정<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_check-list">
												<ul>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-set" data-check checked>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">PC</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-set" data-check checked>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">M WEB</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-set" data-check checked>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">M APP</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>발행 기간<i class="ico_required" title="필수입력"></i></b>
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
									<tr>
										<th scope="row">
											<b>업체 부담률<br>/부담금액<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td>
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
												<div class="mm_note">
													<p>업체 부담률은 할인율로 입력한 숫자보다 낮은 숫자를 입력해 주시기 바랍니다.</p>
												</div>
											</div>
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
										</td>
										<th scope="row">
											<b>할인금액 중<br>업체 부담률</b>
										</th>
										<td><p>50%</p></td>
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
											<b>유효 기간<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked T=fit">
												<label class="mm_form-radio">
													<input type="radio" name="dev_radio-period" data-radio checked>
													<b class="mm_block">
														<i class="ico_form-radio"></i>
														<span class="text_label mm_ir-blind">선택</span>
													</b>
												</label>
												<p class="text_linked">
													발행일로부터
												</p>
												<div class="mm_form-text T=xs">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text maxlength="3"><i class="bg_text"></i>
														<span class="text_placeholder">숫자만 입력</span>
													</label>
												</div>
												<p class="text_linked">
													일간 사용 가능
												</p>
											</div>
											<div class="mm_form_mix-linked T=fit">
												<label class="mm_form-radio">
													<input type="radio" name="dev_radio-period" data-radio>
													<b class="mm_block">
														<i class="ico_form-radio"></i>
														<span class="text_label mm_ir-blind">선택</span>
													</b>
												</label>
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
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>쿠폰 적용 범위<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_desyncer-coupon-other">
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
																<input type="radio" name="dev_radio-range" data-radio="{ 'syncer': '.mm_syncer-apply-seller' }">
																<b class="mm_block">
																	<i class="ico_form-radio"></i>
																	<span class="text_label">셀러</span>
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
																<input type="radio" name="dev_radio-range" data-radio="{ 'syncer': '.mm_syncer-apply-category' }">
																<b class="mm_block">
																	<i class="ico_form-radio"></i>
																	<span class="text_label">카테고리</span>
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
											</div>
											<div class="mm_syncer-coupon-other">
												<p>상품</p>
											</div>
										</td>
									</tr>
									<tr class="mm_desyncer-coupon-other">
										<th scope="row">
											<b>쿠폰 적용 제외 범위</b>
										</th>
										<!-- (D) 쿠폰 적용 범위에서 선택한 범위는 비노출 합니다. -->
										<td colspan="3">
											<div class="mm_check-list">
												<ul>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-area" data-check="{ 'syncer': '.mm_syncer-except-seller' }">
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">셀러</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-area" data-check="{ 'syncer': '.mm_syncer-except-product' }">
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">상품</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-area" data-check="{ 'syncer': '.mm_syncer-except-category' }">
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">카테고리</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-area" data-check="{ 'syncer': '.mm_syncer-except-brand' }">
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">브랜드</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
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
					<!-- // 다운로드 쿠폰 수정 설정 -->

					<!-- (D) 쿠폰 적용 범위 목록 -->
					<!-- 셀러 설정 (쿠폰 적용) -->
					<div class="mm_syncer-apply-seller">
						<!-- 내용있음 -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>셀러 설정 (쿠폰 적용)</b>
								</h3>
							</div>
							<div class="mm_table_box-unit">
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=secondary" href="/search/seller-multi" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 추가</b></a>
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
							<!-- 테이블상단 -->

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
														셀러 코드
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러
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
														셀러C
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
											<a class="mm_btn T=line T=secondary" href="/search/seller-multi" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 추가</b></a>
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
							<h3 class="mm_heading"><b>셀러 설정 (쿠폰 적용)</b></h3>
							</div>
							<div class="mm_table_box-unit">
							<div class="mm_lside">
							<div class="mm_btn_box">
							<div class="mm_inline">
							<a class="mm_btn T=line T=secondary" href="/search/seller-multi" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 추가</b></a>
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
							<a class="mm_btn T=line T=secondary" href="/search/seller-multi" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 추가</b></a>
							</div>
							</div>
							</div>
							</div>
							</div>
						-->
						<!-- // 내용없음 -->
					</div>
					<!-- // 셀러 설정 (쿠폰 적용) -->

					<!-- 상품 설정 (쿠폰 적용) -->
					<div class="mm_syncer-apply-product">
						<!-- 내용있음 -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>상품 설정 (쿠폰 적용)</b>
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
							<h3 class="mm_heading"><b>상품 설정 (쿠폰 적용)</b></h3>
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
														<input type="file" accept=".zip" data-file="{ '_fileName': 'coupon_duplicate_product' }">
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
													<li><strong>coupon_duplicate_product 파일명만 업로드가 가능</strong>합니다. (xls/xlsx 확장자를 제외한 파일 및 이미지는 업로드 불가)</li>
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
					<!-- // 상품 설정 (쿠폰 적용) -->

					<!-- 카테고리 설정 (쿠폰 적용) -->
					<div class="mm_syncer-apply-category">
						<!-- 내용있음 -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>카테고리 설정 (쿠폰 적용)</b>
								</h3>
							</div>
							<div class="mm_table_box-unit">
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=secondary" href="/search/category" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>카테고리 추가</b></a>
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
														카테고리
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														카테고리 코드
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
														WOMEN &#62; PANTS &#62; Shorts
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
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
											<a class="mm_btn T=line T=secondary" href="/search/category" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>카테고리 추가</b></a>
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
							<h3 class="mm_heading"><b>카테고리 설정 (쿠폰 적용)</b></h3>
							</div>
							<div class="mm_table_box-unit">
							<div class="mm_lside">
							<div class="mm_btn_box">
							<div class="mm_inline">
							<a class="mm_btn T=line T=secondary" href="/search/category" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>카테고리 추가</b></a>
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
							<a class="mm_btn T=line T=secondary" href="/search/category" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>카테고리 추가</b></a>
							</div>
							</div>
							</div>
							</div>
							</div>
						-->
						<!-- // 내용없음 -->
					</div>
					<!-- // 카테고리 설정 (쿠폰 적용) -->

					<!-- 브랜드 설정 (쿠폰 적용) -->
					<div class="mm_syncer-apply-brand">
						<!-- 내용있음 -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>브랜드 설정 (쿠폰 적용)</b>
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
							<h3 class="mm_heading"><b>브랜드 설정 (쿠폰 적용)</b></h3>
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
					<!-- // 브랜드 설정 (쿠폰 적용) -->

					<!-- (D) 쿠폰 적용 제외 범위 목록 -->
					<!-- 셀러 설정 (쿠폰 적용 제외) -->
					<div class="mm_syncer-except-seller">
						<!-- 내용있음 -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>셀러 설정 (쿠폰 적용 제외)</b>
								</h3>
							</div>
							<div class="mm_table_box-unit">
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=secondary" href="/search/seller-multi" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 추가</b></a>
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
														셀러 코드
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러
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
														셀러C
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
											<a class="mm_btn T=line T=secondary" href="/search/seller-multi" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 추가</b></a>
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
							<h3 class="mm_heading"><b>셀러 설정 (쿠폰 적용 제외)</b></h3>
							</div>
							<div class="mm_table_box-unit">
							<div class="mm_lside">
							<div class="mm_btn_box">
							<div class="mm_inline">
							<a class="mm_btn T=line T=secondary" href="/search/seller-multi" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 추가</b></a>
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
							<a class="mm_btn T=line T=secondary" href="/search/seller-multi" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 추가</b></a>
							</div>
							</div>
							</div>
							</div>
							</div>
						-->
						<!-- // 내용없음 -->
					</div>
					<!-- // 셀러 설정 (쿠폰 적용 제외) -->

					<!-- 상품 설정 (쿠폰 적용 제외) -->
					<div class="mm_syncer-except-product">
						<!-- 내용있음 -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>상품 설정 (쿠폰 적용 제외)</b>
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
							<h3 class="mm_heading"><b>상품 설정 (쿠폰 적용 제외)</b></h3>
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
					<!-- // 상품 설정 (쿠폰 적용 제외) -->

					<!-- 카테고리 설정 (쿠폰 적용 제외) -->
					<div class="mm_syncer-except-category">
						<!-- 내용있음 -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>카테고리 설정 (쿠폰 적용 제외)</b>
								</h3>
							</div>
							<div class="mm_table_box-unit">
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=secondary" href="/search/category" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>카테고리 추가</b></a>
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
														카테고리
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														카테고리 코드
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
														WOMEN &#62; PANTS &#62; Shorts
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
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
											<a class="mm_btn T=line T=secondary" href="/search/category" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>카테고리 추가</b></a>
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
							<h3 class="mm_heading"><b>카테고리 설정 (쿠폰 적용 제외)</b></h3>
							</div>
							<div class="mm_table_box-unit">
							<div class="mm_lside">
							<div class="mm_btn_box">
							<div class="mm_inline">
							<a class="mm_btn T=line T=secondary" href="/search/category" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>카테고리 추가</b></a>
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
							<a class="mm_btn T=line T=secondary" href="/search/category" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>카테고리 추가</b></a>
							</div>
							</div>
							</div>
							</div>
							</div>
						-->
						<!-- // 내용없음 -->
					</div>
					<!-- // 카테고리 설정 (쿠폰 적용 제외) -->

					<!-- 브랜드 설정 (쿠폰 적용 제외) -->
					<div class="mm_syncer-except-brand">
						<!-- 내용있음 -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>브랜드 설정 (쿠폰 적용 제외)</b>
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
							<h3 class="mm_heading"><b>브랜드 설정 (쿠폰 적용 제외)</b></h3>
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
					<!-- // 브랜드 설정 (쿠폰 적용 제외) -->

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