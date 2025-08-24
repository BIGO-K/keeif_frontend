<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>상품 아이콘 등록</b>
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

					<!-- 상품 아이콘 등록 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
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
														<input type="radio" name="dev_radio-use" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">사용</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-use" data-radio>
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
										<b>노출 기간<i class="ico_required" title="필수입력"></i></b>
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
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>상품 아이콘<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-table m_prod-icon-model">
											<table>
												<tbody>
													<tr>
														<th scope="row">
															<b>상품 아이콘명</b>
														</th>
														<td>
															<div class="mm_form-text">
																<button type="button" class="btn_text-clear">
																	<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																</button>
																<label>
																	<input type="text" class="textfield" data-text="{ '_byte': 10 }"><i class="bg_text"></i>
																	<span class="text_placeholder mm_ir-blind">최대 10자 입력</span>
																</label>
															</div>
														</td>
													</tr>
													<tr>
														<th scope="row">
															<b>배경색 지정</b>
														</th>
														<td>
															<div class="mm_form-color" data-colorpicker="{ 'onChange': 'prodIconColor' }">
																<input type="text" class="colorfield" name="dev_prodicon-bgcolor" value="#FFFFFF" readonly>
																<button type="button" class="btn_picker">
																	<i class="bg_color" style="background:#FFF"></i><b class="mm_ir-blind">배경색 지정</b>
																</button>
															</div>
														</td>
													</tr>
													<tr>
														<th scope="row">
															<b>글씨색 지정</b>
														</th>
														<td>
															<div class="mm_form-color" data-colorpicker="{ 'onChange': 'prodIconColor' }">
																<input type="text" class="colorfield" name="dev_prodicon-textcolor" value="#FFFFFF" readonly>
																<button type="button" class="btn_picker">
																	<i class="bg_color" style="background:#FFF"></i><b class="mm_ir-blind">글씨색 지정</b>
																</button>
															</div>
														</td>
													</tr>
													<tr>
														<th scope="row">
															<b>미리보기</b>
														</th>
														<td><b class="text_prod-icon"></b></td>
													</tr>
												</tbody>
											</table>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>적용 범위<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-area" data-radio="{ 'syncer': '.mm_syncer-area-product' }" checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">상품</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-area" data-radio="{ 'syncer': '.mm_syncer-area-category' }">
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">카테고리</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-area" data-radio="{ 'syncer': '.mm_syncer-area-brand' }">
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
							</tbody>
						</table>
					</div>
					<!-- // 상품 아이콘 등록 -->

					<!-- (D) 적용 범위 목록 -->
					<!-- 상품 설정 -->
					<div class="mm_syncer-area-product">
						<!-- 내용있음 -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>상품 설정</b>
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
														상품 코드
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														상품명
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
												<td>
													<div class="mm_table-item">
														2021
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
														셀러A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														나이키
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">120000</span>
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
																	<b>삭제</b>
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
														2
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020
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
														셀러B
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														나이키
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">20000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
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
														2019
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
														셀러C
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														나이키
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">120000</span>
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
							</div>
							<!-- // 테이블하단 -->
						</div>
						<!-- // 내용있음 -->

						<!-- 내용없음 -->
						<!--
							<div class="mm_table_box">
							<div class="mm_table_box-caption">
							<h3 class="mm_heading"><b>상품 설정</b></h3>
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
					<!-- // 상품 설정 -->

					<!-- 카테고리 설정 -->
					<div class="mm_syncer-area-category">
						<!-- 내용있음 -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>카테고리 설정</b>
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
														여성 &#62; 모자 &#62; 볼캡
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														001001001
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
														여성 &#62; 모자 &#62; 수영모
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														001001001
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
														여성 &#62; 바지 &#62; 데님
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														001001001
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
							</div>
							<!-- // 테이블하단 -->
						</div>
						<!-- // 내용있음 -->

						<!-- 내용없음 -->
						<!--
							<div class="mm_table_box">
							<div class="mm_table_box-caption">
							<h3 class="mm_heading"><b>카테고리 설정</b></h3>
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
					<!-- // 카테고리 설정 -->

					<!-- 브랜드 설정 -->
					<div class="mm_syncer-area-brand">
						<!-- 내용있음 -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>브랜드 설정</b>
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
														브랜드 코드
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														브랜드명 [한글]
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														브랜드명 [영문]
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
														000001
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														내셔널지오그래픽
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														National Geographic
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
														000002
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														엔에프엘
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														NFL
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
														000003
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														메종 마르지엘라
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														Maison Marigela
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
							</div>
							<!-- // 테이블하단 -->
						</div>
						<!-- // 내용있음 -->

						<!-- 내용없음 -->
						<!--
							<div class="mm_table_box">
							<div class="mm_table_box-caption">
							<h3 class="mm_heading"><b>브랜드 설정</b></h3>
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
					<!-- // 브랜드 설정 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=line T=tertiary">
									<b>취소하기</b>
								</button>
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>등록하기</b>
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

	(function() {

		// 상품 아이콘 미리보기
		var $iconModelBox = mm.find('.m_prod-icon-model');
		var $iconPreview = mm.find('.text_prod-icon', $iconModelBox)[0];

		mm.event.on(mm.find('.textfield', $iconModelBox), 'keyup change', function() {

			$iconPreview.innerText = this.value;
			prodIconColor();

		});

	})();

	// 상품 아이콘 컬러 선택
	function prodIconColor() {

		var $iconModelBox = mm.find('.m_prod-icon-model');
		var _bgColor = mm.find('input[name=dev_prodicon-bgcolor]', $iconModelBox)[0].value;
		var _txtColor = mm.find('input[name=dev_prodicon-textcolor]', $iconModelBox)[0].value;

		mm.element.style(mm.find('.text_prod-icon', $iconModelBox)[0], { 'background-color': _bgColor, 'color': _txtColor });

	}
</script>