<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>상품 공통배너 등록</b>
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

					<!-- 상품 공통배너 등록 영역 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>제목<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 30 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 30자 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>사용 여부<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td>
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
									<th scope="row">
										<b>노출 기간<i class="ico_required" title="필수입력"></i></b>
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
										<b>노출 영역<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-area" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">상단 + 하단</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-area" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">상단</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-area" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">하단</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>등록 방식<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-image" data-radio="{ 'syncer': '.mm_syncer-register-image' }" checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">이미지</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-image" data-radio="{ 'syncer': '.mm_syncer-register-editor' }">
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">에디터</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>배너 (Mobile)<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<!-- 이미지 등록 -->
										<div class="mm_syncer-register-image">
											<div class="mm_form_mix-image">
												<div class="mm_form-image">
													<div class="mm_form-image-preview"></div>
													<label>
														<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000 }">
														<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
													</label>
													<button type="button" class="btn_remove-file">
														<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
													</button>
												</div>
												<div class="mm_form-text">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text><i class="bg_text"></i>
														<span class="text_placeholder">대체 텍스트를 입력하세요.</span>
													</label>
												</div>
												<div class="mm_note T=bottom">
													<ul>
														<li>대체 텍스트는 화면에 노출되지 않으며 이미지를 설명하는 내용을 작성해 주세요.</li>
														<li>권장 사이즈는 W 000px * H 000px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
														<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
													</ul>
												</div>
											</div>
										</div>
										<!-- // 이미지 등록 -->
										<!-- 에디터 등록 -->
										<div class="mm_syncer-register-editor">
											<div class="mm_editor"></div>
										</div>
										<!-- // 에디터 등록 -->
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>배너 (PC)<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<!-- 이미지 등록 -->
										<div class="mm_syncer-register-image">
											<div class="mm_form_mix-image">
												<div class="mm_form-image">
													<div class="mm_form-image-preview"></div>
													<label>
														<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000 }">
														<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
													</label>
													<button type="button" class="btn_remove-file">
														<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
													</button>
												</div>
												<div class="mm_form-text">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text><i class="bg_text"></i>
														<span class="text_placeholder">대체 텍스트를 입력하세요.</span>
													</label>
												</div>
												<div class="mm_note T=bottom">
													<ul>
														<li>대체 텍스트는 화면에 노출되지 않으며 이미지를 설명하는 내용을 작성해 주세요.</li>
														<li>권장 사이즈는 W 000px * H 000px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
														<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
													</ul>
												</div>
											</div>
										</div>
										<!-- // 이미지 등록 -->
										<!-- 에디터 등록 -->
										<div class="mm_syncer-register-editor">
											<div class="mm_editor"></div>
										</div>
										<!-- // 에디터 등록 -->
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
														<input type="radio" name="dev_radio-range" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">전체</span>
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
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 상품 공통배너 등록 영역 -->

					<!-- (D) 쿠폰 적용 범위 목록 -->
					<!-- 상품 설정 -->
					<div class="mm_syncer-apply-product">
						<!-- 내용있음 -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>상품 설정</b>
								</h3>
								<div class="mm_lside">
									<div class="mm_note">
										<p><i class="ico_image-show"></i> 아이콘 클릭 시 이미지가 노출됩니다.</p>
									</div>
								</div>
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
														진열 상태
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
														셀러 코드
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														정가
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
														2
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														진열
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
														셀러1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														111111
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
														진열
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
														셀러1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														111111
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
							</div>
							<!-- // 테이블하단 -->
						</div>
						<!-- // 내용있음 -->

						<!-- 내용없음 -->
						<!--
							<div class="mm_table_box">
							<div class="mm_table_box-caption">
							<h3 class="mm_heading"><b>상품 설정</b></h3>
							<div class="mm_lside">
							<div class="mm_note">
							<p><i class="ico_image-show"></i> 아이콘 클릭 시 이미지가 노출됩니다.</p>
							</div>
							</div>
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
					<div class="mm_syncer-apply-category">
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
					<div class="mm_syncer-apply-brand">
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
														2
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														브랜드 21
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														BRAND 21
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
														브랜드 21
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														BRAND 21
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
								<a class="mm_btn T=xl T=line T=tertiary" href="#" data-href="{ '_type': 'link' }"><b>취소하기</b></a>
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
</script>