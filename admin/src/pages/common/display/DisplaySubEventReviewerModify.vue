<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>이벤트 수정</b>
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

					<!-- 이벤트 정보 -->
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
										<b>제목<i class="ico_required" title="필수입력"></i></b>
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
										<b>소개 내용<i class="ico_required" title="필수입력"></i></b>
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
										<b>상품 노출 형식<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-prod-type" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">파일 생성</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-prod-type" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">즉시 반영</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>리스트 이미지 (Mobile)<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-image">
											<div class="mm_form-image T=banner">
												<div class="mm_form-image-preview"></div>
												<label>
													<!-- (D) 고정 이미지 사이즈를 data-file의 _imageRatio 값을 width/height 형식으로 넣어주세요(단위px) -->
													<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000, '_imageRatio': '696/484' }">
													<b class="mm_form-image-box mm_btn"><span>이미지 선택</span></b>
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
													<li>이미지 사이즈는 W 696px * H 484px 이고, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
													<li>이미지 사이즈가 다르면, 비율에 맞게 크롭되어 저장됩니다.</li>
													<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
												</ul>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>리스트 이미지 (PC)<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<label class="mm_form-check">
											<input type="checkbox" data-check="{ 'desyncer': '.mm_desyncer-pc-banner' }" checked>
											<b class="mm_block">
												<i class="ico_form-check"></i>
												<span class="text_label">Mobile 이미지와 동일한 이미지 사용</span>
											</b>
										</label>
										<div class="mm_desyncer-pc-banner">
											<div class="mm_form_mix-image">
												<div class="mm_form-image T=banner">
													<div class="mm_form-image-preview"></div>
													<label>
														<!-- (D) 고정 이미지 사이즈를 data-file의 _imageRatio 값을 width/height 형식으로 넣어주세요(단위px) -->
														<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000, '_imageRatio': '440/440' }">
														<b class="mm_form-image-box mm_btn"><span>이미지 선택</span></b>
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
														<li>이미지 사이즈는 W 440px * H 440px 이고, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
														<li>이미지 사이즈가 다르면, 비율에 맞게 크롭되어 저장됩니다.</li>
														<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
													</ul>
												</div>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>상세 URL</b>
									</th>
									<td colspan="3">
										<label class="mm_form-check">
											<input type="checkbox" data-check="{ 'syncer': '.mm_syncer-detail-url', 'desyncer': '.mm_desyncer-detail-url' }">
											<b class="mm_block">
												<i class="ico_form-check"></i>
												<span class="text_label">URL 사용</span>
											</b>
										</label>
										<div class="mm_syncer-detail-url">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">링크 URL</span>
												</label>
											</div>
											<div class="mm_note">
												<p>URL 등록 시, 도메인을 제외한 나머지 부분을 입력해 주세요.<br>예) (X) https://www.naver.com / (O) goods/category/11/115/1053</p>
											</div>
										</div>
									</td>
								</tr>
								<tr class="mm_desyncer-detail-url">
									<th scope="row">
										<b>상세 이미지 등록 방식<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-pc-image" data-radio="{ 'syncer': '.mm_syncer-detail-editor' }" checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">에디터</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-pc-image" data-radio="{ 'syncer': '.mm_syncer-detail-image' }">
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">이미지</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr class="mm_desyncer-detail-url">
									<th scope="row">
										<b>상세 이미지 (Mobile)<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<!-- 에디터 -->
										<div class="mm_syncer-detail-editor">
											<div class="mm_editor"></div>
										</div>
										<!-- // 에디터 -->

										<!-- 이미지 -->
										<div class="mm_syncer-detail-image">
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
														<li>권장 사이즈는 W 696px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
														<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
													</ul>
												</div>
											</div>
										</div>
										<!-- // 이미지 -->
									</td>
								</tr>
								<tr class="mm_desyncer-detail-url">
									<th scope="row">
										<b>상세 이미지 (PC)<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<!-- 에디터 -->
										<div class="mm_syncer-detail-editor">
											<div class="mm_editor"></div>
										</div>
										<!-- // 에디터 -->
										<!-- 이미지 -->
										<div class="mm_syncer-detail-image">
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
														<li>권장 사이즈는 W 1360px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
														<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
													</ul>
												</div>
											</div>
										</div>
										<!-- // 이미지 -->
									</td>
								</tr>
								<tr class="mm_desyncer-detail-url">
									<th scope="row">
										<b>댓글 설정</b>
									</th>
									<td colspan="3">
										<label class="mm_form-check">
											<input type="checkbox" data-check>
											<b class="mm_block">
												<i class="ico_form-check"></i>
												<span class="text_label">사용</span>
											</b>
										</label>
										<div class="mm_note">
											<p>사용 체크 시 회원이 해당 이벤트에 댓글을 작성할 수 있습니다.</p>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>체험단 상품 설정</b>
									</th>
									<td colspan="3">
										<div class="mm_btn_box">
											<div class="mm_inline">
												<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
												<!-- (D) 상품 추가 후 노출합니다. -->
												<a class="mm_btn T=line" href="/product-list" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>등록 상품 확인 <strong class="mm_text-secondary text_num">1000</strong>개</b></a>
											</div>
										</div>
										<div class="mm_note T=bottom">
											<p class="mm_text-primary">
												상품 설정 시 프론트 <strong>체험단 리뷰 작성</strong> 팝업에 노출됩니다.
											</p>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 이벤트 정보 -->

					<!-- 상품 그룹 목록 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h4 class="mm_heading">
								<b>상품 그룹 목록</b>
							</h4>
						</div>
						<div class="mm_table_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<!-- (D) '상품 그룹 추가' 버튼 클릭 시 상품 그룹을 추가합니다. -->
										<button type="button" class="mm_btn">
											<b>상품 그룹 추가</b>
										</button>
										<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
											<i class="ico_sortable-edit"></i><b>순서편집</b>
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
											<th scope="col">
												<div class="mm_table-item">
													No.
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													상품 그룹명<i class="ico_required" title="필수입력"></i>
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													노출 여부<i class="ico_required" title="필수입력"></i>
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													노출 상품<i class="ico_required" title="필수입력"></i>
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													상품 추가
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
													1
												</div>
											</td>
											<td data-editable="{ '_byte': 20 }">
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder">최대 20자 입력</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_radio-list">
														<ul>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-exposure1" data-radio checked>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">노출</span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-exposure1" data-radio>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">미노출</span>
																	</b>
																</label>
															</li>
														</ul>
													</div>
												</div>
											</td>
											<td><div class="mm_table-item"></div></td>
											<td>
												<div class="mm_table-item">
													<a class="mm_btn T=sm T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
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
													2
												</div>
											</td>
											<td data-editable="{ '_byte': 20 }">
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder">최대 20자 입력</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_radio-list">
														<ul>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-exposure2" data-radio checked>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">노출</span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-exposure2" data-radio>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">미노출</span>
																	</b>
																</label>
															</li>
														</ul>
													</div>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a class="mm_btn T=sm T=line" href="/product-list" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>등록 상품 확인 <strong class="mm_text-secondary text_num">1000</strong>개</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a class="mm_btn T=sm T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
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
										<!-- (D) '상품 그룹 추가' 버튼 클릭 시 상품 그룹을 추가합니다. -->
										<button type="button" class="mm_btn">
											<b>상품 그룹 추가</b>
										</button>
										<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
											<i class="ico_sortable-edit"></i><b>순서편집</b>
										</button>
									</div>
								</div>
							</div>
						</div>
						<!-- // 테이블하단 -->
					</div>

					<!-- 내용없음 -->
					<!--
						<div class="mm_table_box">
						<div class="mm_table_box-caption">
						<h4 class="mm_heading"><b>상품 그룹 목록</b></h4>
						</div>
						<div class="mm_table_box-unit">
						<div class="mm_lside">
						<div class="mm_btn_box">
						<div class="mm_inline">
						<button type="button" class="mm_btn"><b>상품 그룹 추가</b></button>
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
						<button type="button" class="mm_btn"><b>상품 그룹 추가</b></button>
						</div>
						</div>
						</div>
						</div>
						</div>
					-->
					<!-- // 내용없음 -->
					<!-- // 상품 그룹 목록 -->

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