<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>셀러</b>
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
													<option>상품명</option>
													<option>셀러</option>
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
												<li><strong>줄바꿈</strong>으로 구분하여 다중 검색 가능 (최대 100줄)</li>
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
										<b>제외 판매처</b>
									</th>
									<td colspan="7">
										<div class="mm_check-list">
											<ul>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-seller" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">11번가</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-seller" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">G마켓</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-seller" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">옥션</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>담당 부서</b>
									</th>
									<td colspan="7">
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option>전체</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>

										<!-- (D) MD 관리자 접근 시 노출되는 형태 -->
										<!--
											<div class="mm_form-select T=sm">
											<label>
											<select data-select disabled>
											<option>여성패션 MD</option>
											</select>
											<b class="text_selected"></b>
											<i class="ico_form-select"></i>
											</label>
											</div>
										-->
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

					<!-- 테이블영역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<div class="mm_lside">
									<ul class="mm_table-status">
										<li>상품 수<b class="mm_text-secondary"><strong class="text_num">1234</strong>개</b></li>
									</ul>
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
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=secondary" href="/affiliate/except-link/seller/register" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 추가</b></a>
											<button type="button" class="mm_btn T=line">
												<b>선택 삭제</b>
											</button>
											<a class="mm_btn" href="/affiliate/except-link/seller/modify" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>선택 수정</b></a>
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
														제외 사유
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														제외 판매처
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러 코드
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등록자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														수정자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														담당 부서
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등록일시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														수정일시
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
														특정 상품 제외 건
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														11번가, G마켓, 쿠팡
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러 A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1234143241
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														영업부
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-04-20 11:11:11
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-04-20 11:11:11
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="/affiliate/except-link/seller/modify" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>수정</b></a>
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
														2
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														특정 상품 제외 건
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														11번가
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러 A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1234143241
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														영업부
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-04-20 11:11:11
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-04-20 11:11:11
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="/affiliate/except-link/seller/modify" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>수정</b></a>
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
														3
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														특정 상품 제외 건
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														G마켓
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러 A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1234143241
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														영업부
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-04-20 11:11:11
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-04-20 11:11:11
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="/affiliate/except-link/seller/modify" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>수정</b></a>
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
														4
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														특정 상품 제외 건
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														쿠팡
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러 A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1234143241
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														영업부
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-04-20 11:11:11
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-04-20 11:11:11
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="/affiliate/except-link/seller/modify" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>수정</b></a>
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
											<a class="mm_btn T=line T=secondary" href="/affiliate/except-link/seller/register" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 추가</b></a>
											<button type="button" class="mm_btn T=line">
												<b>선택 삭제</b>
											</button>
											<a class="mm_btn" href="/affiliate/except-link/seller/modify" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>선택 수정</b></a>
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

							<!-- 유의사항 -->
							<div class="mm_note">
								<ul>
									<li>목록에 있는 셀러의 상품은 제휴 연동에서 제외됩니다.</li>
									<li>목록의 같은 페이지에 노출되고 있는 항목에 대해서만 [선택수정], [선택삭제]가 가능합니다.</li>
									<li>엑셀 업로드 시 바로 저장 및 적용됩니다.</li>
								</ul>
							</div>
							<!-- // 유의사항 -->
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<div class="mm_lside">
									<ul class="mm_table-status">
										<li>상품 수<b class="mm_text-secondary"><strong class="text_num">0</strong>개</b></li>
									</ul>
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
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=secondary" href="/affiliate/except-link/seller/register" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 추가</b></a>
										</div>
									</div>
								</div>
							</div>
							<!-- // 테이블상단 -->

							<!-- 테이블 -->
							<div class="mm_table-none">
								<p>검색된 결과가 없습니다.</p>
							</div>
							<!-- // 테이블 -->

							<!-- 테이블하단 -->
							<div class="mm_table_box-unit">
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=secondary" href="/affiliate/except-link/seller/register" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 추가</b></a>
										</div>
									</div>
								</div>
							</div>
							<!-- // 테이블하단 -->
						</div>
					</template>
					<!-- // 테이블영역 -->

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
													<input type="file" accept=".xlsx, .xls" data-file="{ '_fileName': 'linkage_exception_alliance' }">
													<span class="text_path"></span>
													<span class="mm_btn T=line T=light text_label">파일첨부</span>
												</label>
											</div>
											<a class="btn_sample" href="#" download="linkage_exception_alliance.xls"><b>샘플다운받기</b></a>
											<button type="button" class="mm_btn T=line T=xload btn_excel">
												<b>엑셀 업로드</b><i class="ico_upload"></i>
											</button>
										</div>
										<div class="mm_note T=bottom">
											<ul>
												<li><strong>linkage_exception_alliance 파일명만 업로드가 가능</strong>합니다. (xls/xlsx 확장자를 제외한 파일 및 이미지는 업로드 불가)</li>
												<li>파일 지정 후 업로드 버튼 클릭 시 상단 목록에 적용되어 노출됩니다.</li>
												<li>업로드 시, 동일한 데이터를 가진 항목은 유지되고 변동이 있거나 신규 추가된 항목만 업로드되어 노출됩니다.</li>
												<li>항목 삭제는 엑셀 파일이 아닌 목록의 삭제 버튼을 통해서만 가능합니다.</li>
												<li>엑셀 업로드 시 바로 <strong>저장 및 적용</strong>됩니다.</li>
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