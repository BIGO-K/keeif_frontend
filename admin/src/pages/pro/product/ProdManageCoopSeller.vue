<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>셀러 공구 상품 등록/수정</b>
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
													<option>진열 상품명</option>
													<option>상품 번호</option>
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
										<b>상품 유형</b>
									</th>
									<td colspan="7">
										공구상품
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>인플루언서</b>
									</th>
									<td colspan="7">
										<div class="mm_selected">
											<!-- (D) 검색 팝업에서 선택 적용 시 'ul' 영역을 노출합니다. -->
											<a class="mm_btn T=line" href="/search/influencer" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>인플루언서 검색</b></a>
											<!--
												<ul>
												<li>
												<b>인플루언서 A</b>
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
								<tr>
									<th scope="row">
										<b>총 재고</b>
									</th>
									<td colspan="7">
										<label class="mm_form-check">
											<input type="checkbox" data-check>
											<b class="mm_block">
												<i class="ico_form-check"></i>
												<span class="text_label">총 재고 5개 이하</span>
											</b>
										</label>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>승인 상태</b>
									</th>
									<td colspan="3">
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
									<th scope="row">
										<b>진열 상태</b>
									</th>
									<td colspan="3">
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
										<b>카테고리</b>
									</th>
									<td colspan="7">
										<div class="mm_select-list T=fit">
											<ul>
												<li>
													<div class="mm_form-select">
														<label>
															<select data-select>
																<option>1 DEPTH</option>
															</select>
															<b class="text_selected"></b>
															<i class="ico_form-select"></i>
														</label>
													</div>
												</li>
												<li>
													<div class="mm_form-select">
														<label>
															<select data-select>
																<option>2 DEPTH</option>
															</select>
															<b class="text_selected"></b>
															<i class="ico_form-select"></i>
														</label>
													</div>
												</li>
												<li>
													<div class="mm_form-select">
														<label>
															<select data-select>
																<option>3 DEPTH</option>
															</select>
															<b class="text_selected"></b>
															<i class="ico_form-select"></i>
														</label>
													</div>
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
						<div class="mm_note">
							<ul>
								<li>등록된 공구상품은 수정/삭제가 불가합니다. 수정 필요한 항목은 <strong>최고관리자에게 문의</strong> 바랍니다.</li>
							</ul>
						</div>
					</div>
					<!-- // 검색 -->

					<!-- 테이블영역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<div class="mm_lside">
									<a class="mm_btn T=line T=secondary btn_register" href="seller/register" data-href title="새 창 열림"><b>상품 등록하기</b><i class="ico_register"></i></a>
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
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<button type="button" class="mm_btn">
												<b>진열 처리</b>
											</button>
											<button type="button" class="mm_btn">
												<b>미진열 처리</b>
											</button>
											<button type="button" class="mm_btn">
												<b>품절 처리</b>
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
														<span>상품 이미지</span><button type="button" class="btn_preview-toggle" title="이미지 미리보기 켜기">
															<i class="ico_image-show"></i>
														</button>
													</div>
												</th>
												<th class="S=table-fixed" scope="col">
													<div class="mm_table-item">
														카테고리
													</div>
												</th>
												<th class="S=table-fixed" scope="col">
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
														상품 유형
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														상품명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														진열 상품명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														상품 옵션/총 재고
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
														브랜드
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														인플루언서
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														주문 제작 상품
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														해외 배송 상품
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
														마진
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
														<div class="mm_btn_box">
															<div class="mm_inline">
																<a class="mm_btn T=sm" href="seller/modify" title="새 창 열림"><b>수정</b></a>
															</div>
														</div>
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
															<b>이미지보기</b>
															<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
														</a>
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														여성 &#62; 상의 &#62; 반팔
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														12345
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														898_111
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														일반 상품
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>[밸리걸] 레터링 티셔츠 120670</b>
														</p>
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
														<a class="mm_btn T=sm T=line" href="/product/option" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>옵션 확인 / <strong class="mm_text-secondary text_num">10000</strong>개</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														진열
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														승인 완료
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														브랜드A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														-
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														N
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														N
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
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
														10
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-03-20 13:22:00
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
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
														<div class="mm_btn_box">
															<div class="mm_inline">
																<a class="mm_btn T=sm" href="seller/modify" title="새 창 열림"><b>수정</b></a>
															</div>
														</div>
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
															<b>이미지보기</b>
															<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
														</a>
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														여성 &#62; 상의 &#62; 반팔
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														1234_1234
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														898_222
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														공구 상품
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>[밸리걸] 레터링 티셔츠 120670</b>
														</p>
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
														<a class="mm_btn T=sm T=line" href="/product/option" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>옵션 확인 / <strong class="mm_text-secondary text_num">1000</strong>개</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														미진열
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														승인 요청
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														브랜드A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														인플루언서 A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														N
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														N
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">500</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">400</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-03-20 13:22:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-03-20 13:22:00
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
														<div class="mm_btn_box">
															<div class="mm_inline">
																<a class="mm_btn T=sm" href="seller/modify" title="새 창 열림"><b>수정</b></a>
															</div>
														</div>
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
															<b>이미지보기</b>
															<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
														</a>
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														여성 &#62; 상의 &#62; 반팔
													</div>
												</td>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														123
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														898_333
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														일반 상품
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>[밸리걸] 레터링 티셔츠 120670</b>
														</p>
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
														<a class="mm_btn T=sm T=line" href="/product/option" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>옵션 확인 / <strong class="mm_text-secondary text_num">100</strong>개</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														진열
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														반려
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														브랜드A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														-
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														Y
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														Y
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
														<span class="text_price">4000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-03-20 13:22:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-03-20 13:22:00
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
												<b>진열 처리</b>
											</button>
											<button type="button" class="mm_btn">
												<b>미진열 처리</b>
											</button>
											<button type="button" class="mm_btn">
												<b>품절 처리</b>
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
					<!-- // 테이블영역 -->
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