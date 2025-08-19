<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>팝업</b>
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

					<!-- 유의사항 -->
					<div class="mm_note">
						<ul>
							<li>목록 <strong>최상단부터 최대 4개의 팝업이 프론트에 노출</strong>됩니다. (PC, Mobile 각각 팝업 사용 4개)</li>
							<li>노출 하루 전 예약 상태의 팝업은 노출 팝업 목록으로 이동되어 순서 변경이 가능합니다.</li>
							<li>노출 팝업이 없을 경우 홈페이지에 노출되지 않습니다.</li>
						</ul>
					</div>
					<!-- // 유의사항 -->

					<!-- 테이블영역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>노출 팝업 목록</b>
								</h3>
								<div class="mm_lside">
									<div class="mm_note">
										<p><i class="ico_image-show"></i> 아이콘 클릭 시 이미지가 노출됩니다.</p>
									</div>
								</div>
							</div>
							<div class="mm_form_box-unit">
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
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
														제목
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														<span>팝업</span><button type="button" class="btn_preview-toggle" title="이미지 미리보기 켜기">
															<i class="ico_image-show"></i>
														</button>
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														노출 상태
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														노출 기간
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														사용 여부
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
														관리
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														20
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														팝업 제목 입니다.
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box T=linebreak">
															<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/display/popup/preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
																<b>Mobile 팝업보기</b>
																<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
															</a>
															<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/display/popup/preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
																<b>PC 팝업보기</b>
																<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
															</a>
														</div>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														노출
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-04-01 ~ 2022-04-30
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														사용
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-15 12:22:32
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-15 12:22:32
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
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="popup/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														20
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														팝업 제목 입니다.
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box T=linebreak">
															<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/display/popup/preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
																<b>Mobile 팝업보기</b>
																<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
															</a>
															<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/display/popup/preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
																<b>PC 팝업보기</b>
																<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
															</a>
														</div>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														노출
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-04-01 ~ 2022-04-30
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														사용
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-15 12:22:32
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-15 12:22:32
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
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="popup/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														20
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														팝업 제목 입니다.
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box T=linebreak">
															<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/display/popup/preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
																<b>Mobile 팝업보기</b>
																<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
															</a>
															<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/display/popup/preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
																<b>PC 팝업보기</b>
																<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
															</a>
														</div>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														노출
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-04-01 ~ 2022-04-30
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														사용
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-15 12:22:32
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-15 12:22:32
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
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="popup/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														20
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														팝업 제목 입니다.
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box T=linebreak">
															<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/display/popup/preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
																<b>Mobile 팝업보기</b>
																<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
															</a>
															<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/display/popup/preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
																<b>PC 팝업보기</b>
																<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
															</a>
														</div>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														노출
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-04-01 ~ 2022-04-30
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														사용
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-15 12:22:32
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-15 12:22:32
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
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="popup/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														20
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														팝업 제목 입니다.
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box T=linebreak">
															<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/display/popup/preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
																<b>Mobile 팝업보기</b>
																<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
															</a>
															<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/display/popup/preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
																<b>PC 팝업보기</b>
																<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
															</a>
														</div>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														노출
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-04-01 ~ 2022-04-30
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														사용
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-15 12:22:32
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-15 12:22:32
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
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="popup/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
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
											<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
												<i class="ico_sortable-edit"></i><b>순서편집</b>
											</button>
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
									<b>노출 팝업 목록</b>
								</h3>
								<div class="mm_lside">
									<div class="mm_note">
										<p><i class="ico_image-show"></i> 아이콘 클릭 시 이미지가 노출됩니다.</p>
									</div>
								</div>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>등록된 내용이 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 테이블영역 -->

					<!-- 대기 팝업 목록 -->
					<div class="mm_section">
						<h3 class="mm_heading">
							<b>대기 팝업 목록</b>
						</h3>
						<!-- 검색 -->
						<div class="mm_search">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td><th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>제목</b>
										</th>
										<td colspan="7">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">검색어를 입력해 주세요.</span>
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
												<div class="mm_form-select T=xs">
													<label>
														<select data-select>
															<option>등록일시</option>
														</select>
														<b class="text_selected"></b>
														<i class="ico_form-select"></i>
													</label>
												</div>
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
											<b>노출 상태</b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-exposure" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">전체</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-exposure" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">예약</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-exposure" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">노출</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-exposure" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">노출 종료</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
										<th scope="row">
											<b>사용 여부</b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-using" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">전체</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-using" data-radio>
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
										<a class="mm_btn T=line T=secondary btn_register" href="popup/register" data-href="{ '_type': 'link' }"><b>팝업 등록하기</b><i class="ico_register"></i></a>
										<div class="mm_note">
											<p><i class="ico_image-show"></i> 아이콘 클릭 시 이미지가 노출됩니다.</p>
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
															제목
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															<span>팝업</span><button type="button" class="btn_preview-toggle" title="이미지 미리보기 켜기">
																<i class="ico_image-show"></i>
															</button>
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															노출 상태
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															노출 기간
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															사용 여부
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
															관리
														</div>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div class="mm_table-item">
															20
														</div>
													</td>
													<td class="T=table-left">
														<div class="mm_table-item">
															팝업 제목 입니다.
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<div class="mm_btn_box T=linebreak">
																<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/display/popup/preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
																	<b>Mobile 팝업보기</b>
																	<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
																</a>
																<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/display/popup/preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
																	<b>PC 팝업보기</b>
																	<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
																</a>
															</div>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															노출
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-04-01 ~ 2022-04-30
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															사용
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-03-15 12:22:32
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-03-15 12:22:32
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
															<div class="mm_btn_box">
																<div class="mm_inline">
																	<button type="button" class="mm_btn T=sm T=line">
																		<b>삭제</b>
																	</button>
																	<a class="mm_btn T=sm" href="popup/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
																</div>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="mm_table-item">
															20
														</div>
													</td>
													<td class="T=table-left">
														<div class="mm_table-item">
															팝업 제목 입니다.
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<div class="mm_btn_box T=linebreak">
																<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/display/popup/preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
																	<b>Mobile 팝업보기</b>
																	<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
																</a>
																<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/display/popup/preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
																	<b>PC 팝업보기</b>
																	<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
																</a>
															</div>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															노출
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-04-01 ~ 2022-04-30
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															사용
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-03-15 12:22:32
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-03-15 12:22:32
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
															<div class="mm_btn_box">
																<div class="mm_inline">
																	<button type="button" class="mm_btn T=sm T=line">
																		<b>삭제</b>
																	</button>
																	<a class="mm_btn T=sm" href="popup/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
																</div>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="mm_table-item">
															20
														</div>
													</td>
													<td class="T=table-left">
														<div class="mm_table-item">
															팝업 제목 입니다.
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<div class="mm_btn_box T=linebreak">
																<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/display/popup/preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
																	<b>Mobile 팝업보기</b>
																	<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
																</a>
																<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/display/popup/preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
																	<b>PC 팝업보기</b>
																	<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
																</a>
															</div>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															노출
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-04-01 ~ 2022-04-30
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															사용
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-03-15 12:22:32
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-03-15 12:22:32
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
															<div class="mm_btn_box">
																<div class="mm_inline">
																	<button type="button" class="mm_btn T=sm T=line">
																		<b>삭제</b>
																	</button>
																	<a class="mm_btn T=sm" href="popup/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
																</div>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="mm_table-item">
															20
														</div>
													</td>
													<td class="T=table-left">
														<div class="mm_table-item">
															팝업 제목 입니다.
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<div class="mm_btn_box T=linebreak">
																<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/display/popup/preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
																	<b>Mobile 팝업보기</b>
																	<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
																</a>
																<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/display/popup/preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
																	<b>PC 팝업보기</b>
																	<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
																</a>
															</div>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															노출
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-04-01 ~ 2022-04-30
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															사용
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-03-15 12:22:32
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-03-15 12:22:32
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
															<div class="mm_btn_box">
																<div class="mm_inline">
																	<button type="button" class="mm_btn T=sm T=line">
																		<b>삭제</b>
																	</button>
																	<a class="mm_btn T=sm" href="popup/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
																</div>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="mm_table-item">
															20
														</div>
													</td>
													<td class="T=table-left">
														<div class="mm_table-item">
															팝업 제목 입니다.
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<div class="mm_btn_box T=linebreak">
																<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/display/popup/preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
																	<b>Mobile 팝업보기</b>
																	<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
																</a>
																<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/display/popup/preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
																	<b>PC 팝업보기</b>
																	<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
																</a>
															</div>
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															노출
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-04-01 ~ 2022-04-30
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															사용
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-03-15 12:22:32
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-03-15 12:22:32
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
															<div class="mm_btn_box">
																<div class="mm_inline">
																	<button type="button" class="mm_btn T=sm T=line">
																		<b>삭제</b>
																	</button>
																	<a class="mm_btn T=sm" href="popup/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
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
									<div class="mm_lside">
										<a class="mm_btn T=line T=secondary btn_register" href="popup/register" data-href="{ '_type': 'link' }"><b>팝업 등록하기</b><i class="ico_register"></i></a>
										<div class="mm_note">
											<p><i class="ico_image-show"></i> 아이콘 클릭 시 이미지가 노출됩니다.</p>
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
					</div>
					<!-- // 대기 팝업 목록 -->
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