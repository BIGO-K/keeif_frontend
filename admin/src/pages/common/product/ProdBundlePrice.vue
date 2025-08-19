<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>상품 가격</b>
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
													<option>상품 코드</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
										<div class="mm_form-textarea">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<textarea class="textfield" data-text></textarea><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">검색어를 입력해 주세요.</span>
											</label>
										</div>
										<div class="mm_note">
											<ul>
												<li><strong>줄바꿈</strong>으로 구분하여 다중 검색 가능 (최대 300줄)</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>등록일자</b>
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
										<b>진열 상태</b>
									</th>
									<td colspan="7">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-display" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-display" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">진열</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-display" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">미진열</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-display" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">품절</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>승인 상태</b>
									</th>
									<td colspan="7">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-confirm" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-confirm" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">승인 요청</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-confirm" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">승인 완료</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-confirm" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">반려</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>셀러</b>
									</th>
									<td colspan="7">
										<div class="mm_selected">
											<!-- (D) 검색 팝업에서 선택 적용 시 'ul' 영역을 노출합니다. -->
											<a class="mm_btn T=line" href="/search/seller-multi" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 검색</b></a>
											<!--
												<ul>
												<li>
												<b>셀러 A</b>
												<button type="button" class="btn_remove"><i class="ico_remove"></i><b class="mm_ir-blind">삭제</b></button>
												</li>
												<li>
												<b>셀러 A</b>
												<button type="button" class="btn_remove"><i class="ico_remove"></i><b class="mm_ir-blind">삭제</b></button>
												</li>
												</ul>
											-->
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>브랜드</b>
									</th>
									<td colspan="7">
										<div class="mm_selected">
											<!-- (D) 검색 팝업에서 선택 적용 시 'ul' 영역을 노출합니다. -->
											<a class="mm_btn T=line" href="/search/brand-multi" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>브랜드 검색</b></a>
											<!--
												<ul>
												<li>
												<b>브랜드 A</b>
												<button type="button" class="btn_remove"><i class="ico_remove"></i><b class="mm_ir-blind">삭제</b></button>
												</li>
												<li>
												<b>브랜드 A</b>
												<button type="button" class="btn_remove"><i class="ico_remove"></i><b class="mm_ir-blind">삭제</b></button>
												</li>
												</ul>
											-->
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

					<!-- 상품 가격 일괄 적용 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>상품 가격 일괄 적용</b>
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
										<th scope="row" rowspan="2">
											<b>빠른 처리</b>
										</th>
										<td colspan="3">
											<label class="mm_form-check">
												<input type="checkbox" data-check>
												<b class="mm_block">
													<i class="ico_form-check"></i>
													<span class="text_label">목록 전체 적용</span>
												</b>
											</label>
											<div class="mm_note">
												<p>목록 전체 적용 체크 후 적용 시, 페이징 관계 없이 목록의 전체 항목에 일괄 적용됩니다.</p>
												<p>목록 전체 가격 변경은 한번에 단일로만 처리 가능하며 즉시 반영됩니다.</p>
											</div>
										</td>
									</tr>
									<tr>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<div class="mm_form-text T=xs">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text maxlength="8"><i class="bg_text"></i>
														<span class="text_placeholder">숫자만 입력</span>
													</label>
												</div>
												<div class="mm_btn_box">
													<div class="mm_inline">
														<button type="button" class="mm_btn">
															<b>균일가 적용</b>
														</button>
														<button type="button" class="mm_btn">
															<b>정가 대비 % 판매가 적용</b>
														</button>
														<button type="button" class="mm_btn">
															<b>판매가 대비 % 판매가 적용</b>
														</button>
														<button type="button" class="mm_btn">
															<b>일괄 마진 적용</b>
														</button>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row" rowspan="2">
											<b>예약 적용</b>
										</th>
										<td colspan="3">
											<div class="mm_btn_box">
												<div class="mm_inline">
													<button type="button" class="mm_btn">
														<b>예약 기간 적용</b>
													</button>
													<button type="button" class="mm_btn">
														<b>예약 기간 해제</b>
													</button>
													<button type="button" class="mm_btn">
														<b>예약 적용 종료</b>
													</button>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<b>적용 시작일시</b>
															</th>
															<td>
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
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>적용 종료일시</b>
															</th>
															<td>
																<div class="mm_form_mix-period">
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
													</tbody>
												</table>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<!-- 유의사항 -->
						<div class="mm_note">
							<ul>
								<li>가격 예약을 2022-01-01 하루만 적용하려면 시작일시: 2022-01-01 00시 / 종료일시: 2022-01-02 00시 방식으로 설정해주세요.</li>
								<li>예약 기간 적용 : 적용 시작일시, 적용 종료일시 설정 후 버튼 클릭 시 <strong>하단 목록에 예약 기간이 적용</strong>됩니다.</li>
								<li>
									<dl>
										<dt>예약 기간 해제 : </dt>
										<dd>
											<p>버튼 클릭 시 하단 목록에 설정된 <strong>예약 기간이 해제</strong>됩니다.</p>
											<p><strong>최종 적용 전에만 가능</strong>하며 이미 저장된 기간은 해제할 수 없습니다.</p>
										</dd>
									</dl>
								</li>
								<li>
									<dl>
										<dt>예약 적용 종료 : </dt>
										<dd>
											<p>버튼 클릭 시 하단 목록에 설정된 <strong>예약 적용을 종료</strong>합니다.</p>
											<p>최종 적용된 데이터에 한해서 가능합니다.</p>
											<p><strong>종료 즉시 예약 전 데이터로 변경</strong>됩니다.</p>
										</dd>
									</dl>
								</li>
								<li>목록 하단 [저장하기] 버튼 클릭 시 최종 저장 및 적용됩니다.</li>
								<li><strong>가격 변경이 있는 항목</strong>에 대해서만 예약 상태 설정이 적용됩니다. (가격 변경 없이 예약 상태만 설정된 항목은 적용되지 않습니다.)</li>
								<li>가격 변경은 있으나 예약 기간이 없는 경우 <strong>즉시 적용 처리</strong>됩니다.</li>
							</ul>
						</div>
						<!-- // 유의사항 -->
					</div>
					<!-- // 상품 가격 일괄 적용 -->

					<!-- 테이블영역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<div class="mm_lside">
									<ul class="mm_table-status">
										<li>상품 수<b class="mm_text-secondary"><strong class="text_num">1234</strong>개</b></li>
									</ul>
									<div class="mm_note">
										<p><i class="ico_image-show"></i> 아이콘 클릭 시 이미지가 노출됩니다.</p>
									</div>
								</div>
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
								<div class="mm_rside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=xload btn_excel" href="/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
										</div>
									</div>
								</div>
							</div>

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
														<span>상품 이미지</span><button type="button" class="btn_preview-toggle" title="이미지 미리보기 켜기">
															<i class="ico_image-show"></i>
														</button>
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
														상품명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														진열 상태
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														승인 상태
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														브랜드
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														정가
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														변경 정가
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														판매가
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														변경 판매가
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														마진
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														변경 마진
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														적용 시작일시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														적용 종료일시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														처리자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														처리일시
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
														<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
															<b>이미지보기</b>
															<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
														</a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														12345
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														898_12555
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>[밸리걸] 레터링 티셔츠 120670</b>
														</p>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														품절
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														승인완료
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														브랜드A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
												<td data-editable="{ '_byte': 8 }">
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">120000</span>
													</div>
												</td>
												<td data-editable="{ '_byte': 8 }">
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">최대 100.0</span>
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
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
														<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
															<b>이미지보기</b>
															<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
														</a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														12345
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														898_12555
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>[밸리걸] 레터링 티셔츠 120670</b>
														</p>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														진열
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														승인완료
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														브랜드A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">220000</span>
													</div>
												</td>
												<td data-editable="{ '_byte': 8 }">
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">190000</span>
													</div>
												</td>
												<td data-editable="{ '_byte': 8 }">
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">최대 100.0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-30 11:11:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-31 11:11:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-20 15:30:25
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
					<!-- // 테이블영역 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>저장하기</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 최하단버튼 -->

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
													<input type="file" accept=".xlsx, .xls" data-file="{ '_fileName': 'price_product' }">
													<span class="text_path"></span>
													<span class="mm_btn T=line T=light text_label">파일첨부</span>
												</label>
											</div>
											<a class="btn_sample" href="#" download="price_product.xls"><b>샘플다운받기</b></a>
											<button type="button" class="mm_btn T=line T=xload btn_excel">
												<b>엑셀 업로드</b><i class="ico_upload"></i>
											</button>
										</div>
										<div class="mm_note T=bottom">
											<ul>
												<li><strong>price_product 파일명만 업로드가 가능</strong>합니다. (xls/xlsx 확장자를 제외한 파일 및 이미지는 업로드 불가)</li>
												<li>파일 지정 후 업로드 버튼 클릭 시 상단 목록에 적용되어 노출됩니다.</li>
												<li>업로드 시, 동일한 데이터를 가진 항목은 유지되고 변동이 있거나 신규 추가된 항목만 업로드되어 노출됩니다.</li>
												<li>적용 시작일, 적용 시작 시간, 적용 종료일, 적용 종료 시간 입력 없이 업로드 시 즉시 적용 처리됩니다.</li>
											</ul>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 엑셀 업로드 -->
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