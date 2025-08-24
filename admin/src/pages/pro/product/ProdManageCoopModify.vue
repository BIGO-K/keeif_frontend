<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>키잎 공구 수정</b>
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

					<div class="m_product-coop">
						<div class="mm_note">
							<ul>
								<li>키잎 공구는 상품의 배송처 구분이 물류 배송인 상품만 공구상품으로 등록할 수 있습니다.</li>
							</ul>
						</div>
						<div class="mm_form_box">
							<div class="mm_form_box-caption">
								<h3 class="mm_heading">
									<b>상품 정보 설정</b>
								</h3>
								<div class="mm_note">
									<ul>
										<li>상품의 기본 정보를 세팅합니다.</li>
									</ul>
								</div>
							</div>
							<div class="mm_form m_product-coop-form">
								<table>
									<tbody>
										<tr>
											<th></th><td></td><th></th><td></td>
										</tr>
										<tr>
											<th scope="row">
												<b>진열 상태<i class="ico_required" title="필수입력"></i></b>
											</th>
											<td>
												<div class="mm_radio-list">
													<ul>
														<li>
															<label class="mm_form-radio">
																<input type="radio" name="dev_radio-display" data-radio checked>
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
													</ul>
												</div>
											</td>
											<th scope="row">
												<b>상품 상태<i class="ico_required" title="필수입력"></i></b>
											</th>
											<td>
												<div class="mm_radio-list">
													<ul>
														<li>
															<label class="mm_form-radio">
																<input type="radio" name="dev_radio-product" data-radio checked>
																<b class="mm_block">
																	<i class="ico_form-radio"></i>
																	<span class="text_label">새상품</span>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-radio">
																<input type="radio" name="dev_radio-product" data-radio>
																<b class="mm_block">
																	<i class="ico_form-radio"></i>
																	<span class="text_label">중고</span>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-radio">
																<input type="radio" name="dev_radio-product" data-radio>
																<b class="mm_block">
																	<i class="ico_form-radio"></i>
																	<span class="text_label">리퍼</span>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-radio">
																<input type="radio" name="dev_radio-product" data-radio>
																<b class="mm_block">
																	<i class="ico_form-radio"></i>
																	<span class="text_label">스크래치</span>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-radio">
																<input type="radio" name="dev_radio-product" data-radio>
																<b class="mm_block">
																	<i class="ico_form-radio"></i>
																	<span class="text_label">전시</span>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-radio">
																<input type="radio" name="dev_radio-product" data-radio>
																<b class="mm_block">
																	<i class="ico_form-radio"></i>
																	<span class="text_label">반품</span>
																</b>
															</label>
														</li>
													</ul>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>상품 유형<i class="ico_required" title="필수입력"></i></b>
											</th>
											<td colspan="3">
												<p>공구 상품</p>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>브랜드<i class="ico_required" title="필수입력"></i></b>
											</th>
											<td colspan="3">
												<div class="mm_selected">
													<!-- (D) 검색 팝업에서 선택 적용 시 'ul' 영역을 노출합니다. -->
													<a class="mm_btn T=line" href="/search/brand-single" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>브랜드 검색</b></a>
												<!--
													<ul>
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
												<b>구매 수량 제한<i class="ico_required" title="필수입력"></i></b>
											</th>
											<td colspan="3">
												<div class="mm_form-text T=xs">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text maxlength="3"><i class="bg_text"></i>
														<span class="text_placeholder">숫자만 입력</span>
													</label>
												</div>
												<div class="mm_note">
													<p>1인당 구매 수량 제한을 설정 할 수 있으며, 0으로 입력 시 무제한으로 적용됩니다.</p>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>공구 진행 기간<i class="ico_required" title="필수입력"></i></b>
											</th>
											<td colspan="3">
												<div class="mm_form_mix-period">
													<div class="mm_form-text T=calendar">
														<button type="button" class="btn_text-clear">
															<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
														</button>
														<label>
															<input type="text" class="textfield" data-text="" data-datepicker=""><i class="bg_text"></i>
															<span class="text_placeholder">시작일</span>
															<i class="ico_datepicker-calendar"></i>
														</label>
													</div>
													<div class="mm_form-select T=time">
														<label>
															<select data-select="">
																<option>0</option>
															</select>
															<b class="text_selected">0</b>
															<i class="ico_form-select"></i>
														</label>
													</div>
													<span class="text_linked">시</span>
													<div class="mm_form-select T=time">
														<label>
															<select data-select="">
																<option>0</option>
															</select>
															<b class="text_selected">0</b>
															<i class="ico_form-select"></i>
														</label>
													</div>
													<span class="text_linked">분</span>
													<b class="text_tilde">~</b>
													<div class="mm_form-text T=calendar">
														<button type="button" class="btn_text-clear">
															<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
														</button>
														<label>
															<input type="text" class="textfield" data-text="" data-datepicker=""><i class="bg_text"></i>
															<span class="text_placeholder">종료일</span>
															<i class="ico_datepicker-calendar"></i>
														</label>
													</div>
													<div class="mm_form-select T=time">
														<label>
															<select data-select="">
																<option>0</option>
															</select>
															<b class="text_selected">0</b>
															<i class="ico_form-select"></i>
														</label>
													</div>
													<span class="text_linked">시</span>
													<div class="mm_form-select T=time">
														<label>
															<select data-select="">
																<option>0</option>
															</select>
															<b class="text_selected">0</b>
															<i class="ico_form-select"></i>
														</label>
													</div>
													<span class="text_linked">분</span>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>상품 번호</b>
											</th>
											<td colspan="3">
												A1234567
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>상품명<i class="ico_required" title="필수입력"></i></b>
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
												<div class="mm_note">
													<p>어드민에서 사용되는 상품명입니다.</p>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>진열 상품명</b>
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
												<div class="mm_note">
													<p>고객에게 실제 노출되는 상품명입니다.</p>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>정가<i class="ico_required" title="필수입력"></i></b>
											</th>
											<td>
												<div class="mm_form_mix-linked">
													<div class="mm_form-text T=xs">
														<button type="button" class="btn_text-clear">
															<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
														</button>
														<label>
															<input type="text" class="textfield" data-text maxlength="11"><i class="bg_text"></i>
															<span class="text_placeholder">숫자만 입력</span>
														</label>
													</div>
													<span class="text_linked">원 (최초 TAG 가격)</span>
												</div>
											</td>
											<th scope="row">
												<b>판매가<i class="ico_required" title="필수입력"></i></b>
											</th>
											<td>
												<div class="mm_form_mix-linked">
													<div class="mm_form-text T=xs">
														<button type="button" class="btn_text-clear">
															<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
														</button>
														<label>
															<input type="text" class="textfield" data-text maxlength="11"><i class="bg_text"></i>
															<span class="text_placeholder">숫자만 입력</span>
														</label>
													</div>
													<span class="text_linked">원 (실 판매 가격)</span>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>카테고리 설정<i class="ico_required" title="필수입력"></i></b>
											</th>
											<td colspan="3">
												<div class="m...form-category">
													<div class="mm_flex T=equal m...form-category-list">
														<dl>
															<dt>1 DEPTH</dt>
															<dd>
																<!-- (D) 선택된 카테고리에 'S=category-on' 클래스와 '선택됨' 타이틀이 추가됩니다. -->
																<ul>
																	<li>
																		<button type="button" class="S=category-on" title="선택됨">
																			<b>DEPTH1</b>
																		</button>
																	</li>
																	<li>
																		<button type="button">
																			<b>DEPTH1</b>
																		</button>
																	</li>
																	<li>
																		<button type="button">
																			<b>DEPTH1</b>
																		</button>
																	</li>
																	<li>
																		<button type="button">
																			<b>DEPTH1</b>
																		</button>
																	</li>
																	<li>
																		<button type="button">
																			<b>DEPTH1</b>
																		</button>
																	</li>
																	<li>
																		<button type="button">
																			<b>DEPTH1</b>
																		</button>
																	</li>
																	<li>
																		<button type="button">
																			<b>DEPTH1</b>
																		</button>
																	</li>
																	<li>
																		<button type="button">
																			<b>DEPTH1</b>
																		</button>
																	</li>
																	<li>
																		<button type="button">
																			<b>DEPTH1</b>
																		</button>
																	</li>
																	<li>
																		<button type="button">
																			<b>DEPTH1</b>
																		</button>
																	</li>
																	<li>
																		<button type="button">
																			<b>DEPTH1</b>
																		</button>
																	</li>
																	<li>
																		<button type="button">
																			<b>DEPTH1</b>
																		</button>
																	</li>
																	<li>
																		<button type="button">
																			<b>DEPTH1</b>
																		</button>
																	</li>
																	<li>
																		<button type="button">
																			<b>DEPTH1</b>
																		</button>
																	</li>
																</ul>
															</dd>
														</dl>
														<dl>
															<dt>2 DEPTH</dt>
															<dd>
																<!-- (D) 1 DEPTH 선택 전에는 문구를 노출합니다. -->
																<p>1 DEPTH 선택</p>
															<!-- (D) 선택된 카테고리에 'S=category-on' 클래스와 '선택됨' 타이틀이 추가됩니다. -->
															<!--
																<ul>
																<li><button type="button"><b>DEPTH2</b></button></li>
																<li><button type="button"><b>DEPTH2</b></button></li>
																<li><button type="button" class="S=category-on" title="선택됨"><b>DEPTH2</b></button></li>
																<li><button type="button"><b>DEPTH2</b></button></li>
																</ul>
															-->
															</dd>
														</dl>
														<dl>
															<dt>3 DEPTH</dt>
															<dd>
																<!-- (D) 2 DEPTH 선택 전에는 문구를 노출합니다. -->
																<p>2 DEPTH 선택</p>
															<!-- (D) 선택된 카테고리에 'S=category-on' 클래스와 '선택됨' 타이틀이 추가됩니다. -->
															<!--
																<ul>
																<li><button type="button"><b>DEPTH2</b></button></li>
																<li><button type="button"><b>DEPTH2</b></button></li>
																<li><button type="button" class="S=category-on" title="선택됨"><b>DEPTH2</b></button></li>
																<li><button type="button"><b>DEPTH2</b></button></li>
																</ul>
															-->
															</dd>
														</dl>
													</div>
													<button type="button" class="mm_btn T=xl T=tertiary btn_add">
														<b>선택</b><i class="ico_add"></i>
													</button>
													<dl class="m...form-category-selected">
														<dt>선택된 카테고리 목록</dt>
														<dd>
															<!--
																<ul>
																<li><span>DEPTH1 &#62; DEPTH2 &#62; DEPTH3</span><button type="button" class="btn_remove"><i class="ico_remove"></i><b class="mm_ir-blind">삭제</b></button></li>
																<li><span>DEPTH1 &#62; DEPTH2 &#62; DEPTH3</span><button type="button" class="btn_remove"><i class="ico_remove"></i><b class="mm_ir-blind">삭제</b></button></li>
																<li><span>DEPTH1 &#62; DEPTH2 &#62; DEPTH3</span><button type="button" class="btn_remove"><i class="ico_remove"></i><b class="mm_ir-blind">삭제</b></button></li>
																</ul>
															-->
															<!-- (D) 선택된 카테고리가 없을 경우 노출합니다. -->
															<p>선택된 카테고리가 없습니다</p>
														</dd>
													</dl>
												</div>
												<div class="mm_note T=bottom">
													<ul>
														<li>1 DEPTH &#62; 2 DEPTH &#62; 3 DEPTH 순으로 선택바랍니다.</li>
														<li>카테고리는 최대 3개까지 선택 가능합니다.</li>
														<li>잘못된 카테고리 등록 시 강제 미진열 처리될 수 있습니다.</li>
													</ul>
												</div>
											</td>
										</tr>
										<!-- (D) 카테고리 설정을 통해 선택한 첫번째 카테고리에 설정된 상품정보고시 항목이 노출됩니다. -->
										<tr>
											<th scope="row">
												<b>상품정보고시<i class="ico_required" title="필수입력"></i></b>
											</th>
											<td colspan="3">
												<div class="mm_form-table m...form-info">
													<table>
														<caption>
															<div class="mm_note">
																<p><i class="ico_note"></i><strong class="mm_text-warning">허위정보를 입력하여 추후 문제가 발생 시 모든 책임은 업체에게 있습니다.</strong></p>
																<a href="#" download><b>필수정보 입력 가이드 보기</b><i class="ico_link"></i></a>
																<a href="#" download><b>FAQ 보기</b><i class="ico_link"></i></a>
															</div>
															<p>
																의류군 필수기재항목<strong class="mm_text-primary">9</strong>개<button type="button" class="mm_btn T=sm T=line T=secondary">
																	<b>상세페이지 참조 일괄 적용하기</b>
																</button>
															</p>
															<div class="mm_note T=bottom">
																<ul>
																	<li>｢생활화학제품 및 살생물제의 안전관리에 관한 법률｣(이하 ‘화학제품안전법’)에 따른 안전확인대상생활화학제품에 한함</li>
																</ul>
															</div>
														</caption>
														<tbody>
															<tr>
																<th scope="row">
																	<b>제품 소재<i class="ico_required" title="필수입력"></i></b>
																</th>
																<td>
																	<div class="mm_form-text">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text><i class="bg_text"></i>
																			<span class="text_placeholder mm_ir-blind">제품 소개</span>
																		</label>
																	</div>
																</td>
															</tr>
															<tr>
																<th scope="row">
																	<b>색상<i class="ico_required" title="필수입력"></i></b>
																</th>
																<td>
																	<div class="mm_form-text">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text><i class="bg_text"></i>
																			<span class="text_placeholder mm_ir-blind">색상</span>
																		</label>
																	</div>
																</td>
															</tr>
															<tr>
																<th scope="row">
																	<b>치수<i class="ico_required" title="필수입력"></i></b>
																</th>
																<td>
																	<div class="mm_form_mix-linked T=fit">
																		<div class="mm_form-text">
																			<button type="button" class="btn_text-clear">
																				<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																			</button>
																			<label>
																				<input type="text" class="textfield" data-text><i class="bg_text"></i>
																				<span class="text_placeholder mm_ir-blind">치수</span>
																			</label>
																		</div>
																		<a class="mm_btn" href="/product/manage/attribute" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>속성별 입력</b></a>
																	</div>
																	<div class="mm_note">
																		<p>텍스트로도 입력 가능하며, 버튼 클릭 시 기준 사이즈별 상세/실측 사이즈 입력 가능합니다.</p>
																	</div>
																</td>
															</tr>
															<tr>
																<th scope="row">
																	<b>제조자(수입자)<i class="ico_required" title="필수입력"></i></b>
																</th>
																<td>
																	<div class="mm_form-text">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text><i class="bg_text"></i>
																			<span class="text_placeholder mm_ir-blind">제조자(수입자)</span>
																		</label>
																	</div>
																</td>
															</tr>
															<tr>
																<th scope="row">
																	<b>제조국<i class="ico_required" title="필수입력"></i></b>
																</th>
																<td>
																	<div class="mm_form-text">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text><i class="bg_text"></i>
																			<span class="text_placeholder mm_ir-blind">제조국</span>
																		</label>
																	</div>
																</td>
															</tr>
															<tr>
																<th scope="row">
																	<b>세탁방법 및 취급 시 주의사항<i class="ico_required" title="필수입력"></i></b>
																</th>
																<td>
																	<div class="mm_check-list">
																		<ul>
																			<li>
																				<label class="mm_form-check">
																					<input type="checkbox" name="dev_check-laundry" data-check>
																					<b class="mm_block">
																						<i class="ico_form-check"></i>
																						<span class="text_label">드라이클리닝</span>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input type="checkbox" name="dev_check-laundry" data-check>
																					<b class="mm_block">
																						<i class="ico_form-check"></i>
																						<span class="text_label">손세탁</span>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input type="checkbox" name="dev_check-laundry" data-check>
																					<b class="mm_block">
																						<i class="ico_form-check"></i>
																						<span class="text_label">중성 세제</span>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input type="checkbox" name="dev_check-laundry" data-check>
																					<b class="mm_block">
																						<i class="ico_form-check"></i>
																						<span class="text_label">라벨 참조</span>
																					</b>
																				</label>
																			</li>
																		</ul>
																	</div>
																	<div class="mm_form-text">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text><i class="bg_text"></i>
																			<span class="text_placeholder mm_ir-blind">세탁방법 및 취급 시 주의사항</span>
																		</label>
																	</div>
																</td>
															</tr>
															<tr>
																<th scope="row">
																	<b>제조연월<i class="ico_required" title="필수입력"></i></b>
																</th>
																<td>
																	<div class="mm_form-text">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text><i class="bg_text"></i>
																			<span class="text_placeholder mm_ir-blind">제조연월</span>
																		</label>
																	</div>
																</td>
															</tr>
															<tr>
																<th scope="row">
																	<b>품질보증기준<i class="ico_required" title="필수입력"></i></b>
																</th>
																<td>
																	<div class="mm_form_mix-linked T=fit">
																		<div class="mm_form-select T=sm">
																			<label>
																				<select data-select>
																					<option>선택하세요.</option>
																					<option data-option="{ 'syncer': '.mm_syncer-quality-law' }">소비자 분쟁해결기준에 의거 보상</option>
																					<option data-option="{ 'syncer': '.mm_syncer-quality-input' }">직접입력</option>
																				</select>
																				<b class="text_selected"></b>
																				<i class="ico_form-select"></i>
																			</label>
																		</div>
																		<div class="mm_syncer-quality-law">
																			<div class="mm_form-text">
																				<button type="button" class="btn_text-clear">
																					<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																				</button>
																				<label>
																					<input type="text" class="textfield" data-text="{ '_default': '본 제품은 공정거래위원회 고시 소비자 분쟁해결기준에 의거 보상받으실 수 있습니다.' }" maxlength="100"><i class="bg_text"></i>
																					<span class="text_placeholder mm_ir-blind">품질보증기준</span>
																				</label>
																			</div>
																		</div>
																		<div class="mm_syncer-quality-input">
																			<div class="mm_form-text">
																				<button type="button" class="btn_text-clear">
																					<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																				</button>
																				<label>
																					<input type="text" class="textfield" data-text="{ '_byte': 100 }"><i class="bg_text"></i>
																					<span class="text_placeholder mm_ir-blind">품질보증기준</span>
																				</label>
																			</div>
																		</div>
																	</div>
																</td>
															</tr>
															<tr>
																<th scope="row">
																	<b>A/S책임자와 전화번호<i class="ico_required" title="필수입력"></i></b>
																</th>
																<td>
																	<div class="mm_form-text">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text><i class="bg_text"></i>
																			<span class="text_placeholder mm_ir-blind">A/S책임자와 전화번호</span>
																		</label>
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
												<div class="mm_note T=bottom">
													<ul>
														<li>자동차용 광택 코딩제, 방향제, 워셔액, 부동액 등 생활화학제품 및 살생물제의 안전관리에 관한 법률에 따른 안전확인대상생활화학제품의 경우 (15)자동차용품이 아닌 (37)생활화학제품에 해당하는 정보 기재</li>
													</ul>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>원산지<i class="ico_required" title="필수입력"></i></b>
											</th>
											<td class="m...form-origin" colspan="3">
												<div class="mm_form_mix-linked">
													<div class="mm_select-list">
														<ul>
															<li>
																<div class="mm_form-select T=sm">
																	<label>
																		<select data-select>
																			<option>선택하세요.</option>
																			<option>국산</option>
																			<option data-option="{ 'syncer': '.mm_syncer-origin-import' }">수입산</option>
																			<option data-option="{ 'syncer': '.mm_syncer-origin-etc', 'desyncer': '.mm_desyncer-origin-etc' }" selected>기타</option>
																		</select>
																		<b class="text_selected"></b>
																		<i class="ico_form-select"></i>
																	</label>
																</div>
															</li>
															<li class="mm_desyncer-origin-etc">
																<div class="mm_form-select T=sm">
																	<label>
																		<select data-select>
																			<option>선택하세요.</option>
																		</select>
																		<b class="text_selected"></b>
																		<i class="ico_form-select"></i>
																	</label>
																</div>
															</li>
															<li class="mm_desyncer-origin-etc">
																<div class="mm_form-select T=sm">
																	<label>
																		<select data-select>
																			<option>선택하세요.</option>
																		</select>
																		<b class="text_selected"></b>
																		<i class="ico_form-select"></i>
																	</label>
																</div>
															</li>
														</ul>
													</div>
													<label class="mm_form-check">
														<input type="checkbox" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">원산지 다른 상품 함께 등록</span>
														</b>
													</label>
												</div>
												<div class="mm_syncer-origin-import">
													<div class="mm_form-text">
														<button type="button" class="btn_text-clear">
															<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
														</button>
														<label>
															<input type="text" class="textfield" data-text="{ '_byte': 100 }"><i class="bg_text"></i>
															<span class="text_placeholder">수입사를 입력해주세요.</span>
														</label>
													</div>
												</div>
												<div class="mm_syncer-origin-etc">
													<div class="mm_form_mix-linked">
														<div class="mm_form-select T=sm">
															<label>
																<select data-select>
																	<option>선택하세요.</option>
																	<option>상세설명에 표시</option>
																	<option data-option="{ 'syncer': '.mm_syncer-origin-reason' }">직접입력</option>
																</select>
																<b class="text_selected"></b>
																<i class="ico_form-select"></i>
															</label>
														</div>
														<div class="mm_syncer-origin-reason">
															<div class="mm_form-text">
																<button type="button" class="btn_text-clear">
																	<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																</button>
																<label>
																	<input type="text" class="textfield" data-text="{ '_byte': 100 }"><i class="bg_text"></i>
																	<span class="text_placeholder mm_ir-blind">원산지 직접입력</span>
																</label>
															</div>
														</div>
													</div>
												</div>
												<div class="mm_note T=bottom">
													<ul>
														<li>정확한 원산지 정보만 입력해 주시기 바랍니다.</li>
														<li>원산지 관련 정보 제공에 대한 책임은 판매자에게 있습니다.</li>
														<li>허위 표기 시 관련법에 의하여 처벌 받을 수 있습니다.</li>
														<li>해외나 국내 외 여러 곳에서 생산된 경우에는 대표국가를 설정하고 [원산지 다른 상품 함께 등록]을 체크 해주시기 바랍니다.</li>
														<li>농축수산물 가공품의 경우 반드시 가공품에 사용된 원료의 원산지 및 배합비율을 표기해야 합니다.</li>
														<li>기타 원산지를 모르시거나, 선택 정보 별로 원산지가 다를 경우에는 [기타]를 선택하시고 상품상세에 원산지 정보를 표시해주시기 바랍니다.</li>
													</ul>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>상품 이미지 등록<i class="ico_required" title="필수입력"></i></b>
											</th>
											<td class="m...form-image" colspan="3">
												<div class="mm_form-multiple">
													<ul>
														<li>
															<div class="mm_form-image">
																<div class="mm_form-image-preview"></div>
																<label>
																	<input type="file" accept=".jpg, .png" data-file="{ '_imageSize': 'contain', '_fileSize': 2000 }">
																	<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 수정하기</span></b>
																</label>
																<button type="button" class="btn_remove-file">
																	<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
																</button>
															</div>
														</li>
													</ul>
													<div class="mm_btn_box">
														<div class="mm_inline">
															<label class="mm_btn T=xl T=secondary btn_select-multiple">
																<input type="file" accept="image/*" data-multiple="{ '_max': 10, '_isMax': true, '_isAuto': false, '_isDrop': true }" multiple>
																<i class="ico_image-multiple"></i><b>한번에 여러장 선택</b>
															</label>
															<button type="button" class="mm_btn T=xl T=line btn_remove-all">
																<b><i class="ico_image-remove-all"></i>전체삭제</b>
															</button>
															<div class="mm_form-multiple-sortable">
																<button type="button" class="mm_btn T=xl btn_sort">
																	<b><i class="ico_image-sortable T=sm"></i>순서 편집</b>
																</button>
																<button type="button" class="mm_btn T=xl T=line btn_sort-cancel">
																	<b><i class="ico_image-sortable-cancel"></i>순서 편집 취소</b>
																</button>
																<button type="button" class="mm_btn T=xl T=line T=secondary btn_sort-apply">
																	<b><i class="ico_image-sortable-apply"></i>순서 적용</b>
																</button>
															</div>
														</div>
													</div>
												</div>
												<div class="mm_note T=bottom">
													<ul>
														<li>권장 사이즈는 W 000px * H 000px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
														<li>이미지 한 개당 최대 용량은 2MB를 초과할 수 없습니다.</li>
													</ul>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>상품 대표 색상</b>
											</th>
											<td colspan="3">
												<div class="m...form-color">
													<!-- 등록된 색상이 없을 경우 -->
													<!-- <p class="text_none">상품 색상 관리에 등록된 색상이 없습니다</p> -->
													<!-- // 등록된 색상이 없을 경우 -->

													<!-- 등록된 색상이 있을 경우 -->
													<!-- 색상 선택 -->
													<div class="mm_check-list">
														<!-- (D) '.bg_color' 영역에 인라인 스타일로 background: 색상코드 값과 하위 b태그에 색상 명을 넣어줍니다. -->
														<ul>
															<li>
																<label class="mm_form-check">
																	<input type="checkbox" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label"><i class="bg_color" style="background:#8e562e;"><b class="mm_ir-blind">갈색</b></i></span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-check">
																	<input type="checkbox" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label"><i class="bg_color" style="background:#e91818;"><b class="mm_ir-blind">빨강</b></i></span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-check">
																	<input type="checkbox" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label"><i class="bg_color" style="background:#f4aa24;"><b class="mm_ir-blind">연한 주황</b></i></span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-check">
																	<input type="checkbox" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label"><i class="bg_color" style="background:#f2f325;"><b class="mm_ir-blind">노란색</b></i></span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-check">
																	<input type="checkbox" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label"><i class="bg_color" style="background:#a4dc0c;"><b class="mm_ir-blind">연두색</b></i></span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-check">
																	<input type="checkbox" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label"><i class="bg_color" style="background:#37b300;"><b class="mm_ir-blind">녹색</b></i></span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-check">
																	<input type="checkbox" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label"><i class="bg_color" style="background:#6f822e;"><b class="mm_ir-blind">카키색</b></i></span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-check">
																	<input type="checkbox" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label"><i class="bg_color" style="background:#97d0e8;"><b class="mm_ir-blind">하늘색</b></i></span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-check">
																	<input type="checkbox" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label"><i class="bg_color" style="background:#1e2c89;"><b class="mm_ir-blind">남색</b></i></span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-check">
																	<input type="checkbox" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label"><i class="bg_color" style="background:#fdc4da;"><b class="mm_ir-blind">연한 분홍</b></i></span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-check">
																	<input type="checkbox" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label"><i class="bg_color" style="background:#fff;"><b class="mm_ir-blind">흰색</b></i></span>
																	</b>
																</label>
															</li>
														</ul>
													</div>
													<!-- // 색상 선택 -->

													<!-- 선택된 색상 -->
													<!-- (D) 체크한 색상을 .m...form-color-list 영역에 추가하며, 선택된 색상이 없을 경우 '.m...color-list' 를 노출하지 않습니다. -->
													<!--
														<ul class="m...form-color-list">
														<li><i class="bg_color" style="background:#8e562e;"><b class="mm_ir-blind">갈색</b></i></li>
														<li><i class="bg_color" style="background:#97d0e8;"><b class="mm_ir-blind">하늘색</b></i></li>
														<li><i class="bg_color" style="background:#fdc4da;"><b class="mm_ir-blind">연한 분홍</b></i></li>
														</ul>
													-->
													<!-- // 선택된 색상 -->

													<!-- 버튼 영역 -->
													<div class="mm_btn_box">
														<div class="mm_inline">
															<!--
																(D) [색상 선택] 버튼을 클릭하면 '.m...manage-form-color' 요소에 'S=color-select' 클래스가 추가되며, 색상을 선택할 수 있는 '.mm_check-list' 가 노출됩니다.
																[취소/적용] 버튼을 클릭하면 'S=color-select' 클래스 및 '.mm_check-list' 영역이 삭제됩니다.
															-->
															<button type="button" class="mm_btn T=line T=secondary btn_color-select" onclick="mm.class.add(this.closest('.m\\.\\.\\.manage-form-color'), 'S=color-select');">
																<b>색상 선택</b>
															</button>
															<button type="button" class="mm_btn T=line btn_color-cancel" onclick="mm.class.remove(this.closest('.m\\.\\.\\.manage-form-color'), 'S=color-select');">
																<b>취소</b>
															</button>
															<button type="button" class="mm_btn btn_color-complete" onclick="mm.class.remove(this.closest('.m\\.\\.\\.manage-form-color'), 'S=color-select');">
																<b>적용</b>
															</button>
														</div>
													</div>
												<!-- // 버튼 영역 -->
												<!-- // 등록된 색상이 있을 경우 -->
												</div>
												<div class="mm_note T=bottom">
													<ul>
														<li>선택한 색상은 쇼핑몰 내 상품 검색 시에 이용됩니다.</li>
														<li>색상은 <strong>상품관리 &#62; 상품색상 설정</strong>에서 추가할 수 있습니다.</li>
													</ul>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>미성년자 구매가능<i class="ico_required" title="필수입력"></i></b>
											</th>
											<td colspan="3">
												<div class="mm_form_mix-linked">
													<div class="mm_radio-list">
														<ul>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-minority" data-radio checked>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">미성년자 구매가능</span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-minority" data-radio="{ 'syncer': '.mm_syncer-prod-adult' }">
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">미성년자 구매불가</span>
																	</b>
																</label>
															</li>
														</ul>
													</div>
													<div class="mm_syncer-prod-adult">
														<label class="mm_form-check">
															<input type="checkbox">
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">관리자 판매금지</span>
															</b>
														</label>
													</div>
												</div>
												<div class="mm_note T=bottom">
													<ul>
														<li>미성년자 구매불가 선택 시, 상품 이미지가 노출되지 않으며 '19금'으로 표시됩니다.</li>
														<li>구매불가 상품을 구매가능으로 등록 시, 관리자에 의해 판매금지 처리 될 수 있으며 이 경우 셀러 임의 해제가 불가능합니다.</li>
													</ul>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>세부 검색어</b>
											</th>
											<td colspan="3">
												<div class="mm_form-textarea">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<textarea class="textfield" data-text="{ '_resizeMin': 6, '_byte': 1000 }"></textarea><i class="bg_text"></i>
														<span class="text_placeholder">반드시 콤마(,)로 구분하여 입력해주세요. 예) 원피스, 쉬폰 원피스</span>
													</label>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>동영상 URL</b>
											</th>
											<td colspan="3">
												<div class="mm_form-text">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text="{ '_byte': 300 }"><i class="bg_text"></i>
														<span class="text_placeholder mm_ir-blind">동영상 URL</span>
													</label>
												</div>
												<div class="mm_note">
													<p>유튜브 URL 등록 시, 공유 URL이 아닌 퍼가기 영역의 &#60;iframe 으로 시작하는 URL를 입력해 주세요.<br> 예) &#60;iframe width="560" height="315" src="https://www.youtube.com/embed/u2n1EilbJ3w" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&#62;&#60;/iframe&#62;</p>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>상세 설명<i class="ico_required" title="필수입력"></i></b>
											</th>
											<td colspan="3">
												<div class="mm_editor"></div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<!-- 하단버튼 -->
						<div v-if="!coopOptionOn" class="mm_foot">
							<div class="mm_btn_box">
								<div class="mm_inline">
									<button type="button" class="mm_btn T=xl T=line T=tertiary">
										<b>임시저장</b>
									</button>
									<button type="button" class="mm_btn T=xl T=tertiary" @click="coopOptionOn = true">
										<b>다음 단계로</b>
									</button>
								</div>
							</div>
						</div>
						<!-- // 하단버튼 -->

						<template v-if="coopOptionOn">
							<!-- 옵션 설정 -->
							<div class="mm_form_box m_product-coop-option">
								<!-- 폼 상단 -->
								<div class="mm_form_box-caption">
									<h3 class="mm_heading">
										<b>옵션 설정</b>
									</h3>
									<div class="mm_note">
										<ul>
											<li>옵션 정보를 세팅할 수 있습니다.</li>
											<li><strong>배송처 구분이 물류배송(WMS)인 상품</strong>만 공구 상품으로 등록할 수 있습니다.</li>
											<li>상품 검색 후 옵션을 선택해주세요.</li>
											<li>선택한 옵션을 조합하여 세트 옵션으로 설정 가능합니다.</li>
										</ul>
									</div>
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
													<b>상품 옵션 설정<i class="ico_required" title="필수입력"></i></b>
												</th>
												<td colspan="3">
													<div class="mm_form-table">
														<table>
															<tbody>
																<tr>
																	<th scope="row">
																		<b>상품 검색</b>
																	</th>
																	<td>
																		<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
																	</td>
																</tr>
																<tr>
																	<th scope="row">
																		<b>상품 1</b>
																	</th>
																	<td>
																		<div class="mm_table" data-table>
																			<div class="mm_scroller">
																				<table>
																					<thead>
																						<tr>
																							<th scope="col">
																								<div class="mm_table-item">
																									배송처
																								</div>
																							</th>
																							<th scope="col">
																								<div class="mm_table-item">
																									진열 상태
																								</div>
																							</th>
																							<th scope="col">
																								<div class="mm_table-item">
																									상품 카테고리
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
																									상품명
																								</div>
																							</th>
																							<th scope="col">
																								<div class="mm_table-item">
																									브랜드 셀러
																								</div>
																							</th>
																							<th scope="col">
																								<div class="mm_table-item">
																									브랜드 셀러 코드
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
																									물류배송
																								</div>
																							</td>
																							<td>
																								<div class="mm_table-item">
																									진열
																								</div>
																							</td>
																							<td>
																								<div class="mm_table-item">
																									WOMEN &#62; PANTS &#62; Shorts
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
																									1234564987
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
																		<div class="mm_table_box">
																			<!-- 테이블상단 -->
																			<div class="mm_table_box-caption">
																				<h3 class="mm_heading">
																					<b>옵션 확인</b>
																				</h3>
																			</div>
																			<div class="mm_table" data-table>
																				<div class="mm_scroller">
																					<table>
																						<thead>
																							<tr>
																								<th class="col_check" scope="col">
																									<div class="mm_table-item">
																										<label class="mm_form-check">
																											<input type="checkbox" name="dev_check-option1" data-check="{ '_type': 'check_all' }">
																											<b class="mm_block">
																												<i class="ico_form-check"></i>
																												<span class="text_label mm_ir-blind">전체선택</span>
																											</b>
																										</label>
																									</div>
																								</th>
																								<th scope="col">
																									<div class="mm_table-item">
																										옵션1
																									</div>
																								</th>
																								<th scope="col">
																									<div class="mm_table-item">
																										옵션2
																									</div>
																								</th>
																								<th scope="col">
																									<div class="mm_table-item">
																										판매 가능 수량
																									</div>
																								</th>
																								<th scope="col">
																									<div class="mm_table-item">
																										옵션가
																									</div>
																								</th>
																								<th scope="col">
																									<div class="mm_table-item">
																										프론트 노출 여부
																									</div>
																								</th>
																								<th scope="col">
																									<div class="mm_table-item">
																										포장 수량
																									</div>
																								</th>
																							</tr>
																						</thead>
																						<tbody>
																							<tr>
																								<td>
																									<div class="mm_table-item">
																										<label class="mm_form-check">
																											<input type="checkbox" name="dev_check-option1" data-check>
																											<b class="mm_block">
																												<i class="ico_form-check"></i>
																												<span class="text_label mm_ir-blind">항목선택</span>
																											</b>
																										</label>
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										화이트
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										XS
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										300
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										<span class="text_price">0</span>
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										노출
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										1
																									</div>
																								</td>
																							</tr>
																							<tr>
																								<td>
																									<div class="mm_table-item">
																										<label class="mm_form-check">
																											<input type="checkbox" name="dev_check-option1" data-check>
																											<b class="mm_block">
																												<i class="ico_form-check"></i>
																												<span class="text_label mm_ir-blind">항목선택</span>
																											</b>
																										</label>
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										화이트
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										S
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										300
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										<span class="text_price">0</span>
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										노출
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										1
																									</div>
																								</td>
																							</tr>
																							<tr>
																								<td>
																									<div class="mm_table-item">
																										<label class="mm_form-check">
																											<input type="checkbox" name="dev_check-option1" data-check>
																											<b class="mm_block">
																												<i class="ico_form-check"></i>
																												<span class="text_label mm_ir-blind">항목선택</span>
																											</b>
																										</label>
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										화이트
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										M
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										300
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										<span class="text_price">0</span>
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										노출
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										1
																									</div>
																								</td>
																							</tr>
																							<tr>
																								<td>
																									<div class="mm_table-item">
																										<label class="mm_form-check">
																											<input type="checkbox" name="dev_check-option1" data-check>
																											<b class="mm_block">
																												<i class="ico_form-check"></i>
																												<span class="text_label mm_ir-blind">항목선택</span>
																											</b>
																										</label>
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										블랙
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										XL
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										300
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										<span class="text_price">0</span>
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										노출
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										1
																									</div>
																								</td>
																							</tr>
																						</tbody>
																					</table>
																				</div>
																			</div>
																		</div>
																		<div class="mm_btn_box">
																			<div class="mm_inline">
																				<button type="button" class="mm_btn T=xl T=tertiary btn_use-option">
																					<b>옵션 사용</b>
																				</button>
																			</div>
																		</div>
																	</td>
																</tr>
																<tr>
																	<th scope="row">
																		<b>상품 2</b>
																	</th>
																	<td>
																		<div class="mm_table" data-table>
																			<div class="mm_scroller">
																				<table>
																					<thead>
																						<tr>
																							<th scope="col">
																								<div class="mm_table-item">
																									배송처
																								</div>
																							</th>
																							<th scope="col">
																								<div class="mm_table-item">
																									진열 상태
																								</div>
																							</th>
																							<th scope="col">
																								<div class="mm_table-item">
																									상품 카테고리
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
																									상품명
																								</div>
																							</th>
																							<th scope="col">
																								<div class="mm_table-item">
																									브랜드 셀러
																								</div>
																							</th>
																							<th scope="col">
																								<div class="mm_table-item">
																									브랜드 셀러 코드
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
																									물류배송
																								</div>
																							</td>
																							<td>
																								<div class="mm_table-item">
																									진열
																								</div>
																							</td>
																							<td>
																								<div class="mm_table-item">
																									WOMEN &#62; PANTS &#62; Shorts
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
																									1234564987
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
																		<div class="mm_table_box">
																			<!-- 테이블상단 -->
																			<div class="mm_table_box-caption">
																				<h3 class="mm_heading">
																					<b>옵션 확인</b>
																				</h3>
																			</div>
																			<div class="mm_table" data-table>
																				<div class="mm_scroller">
																					<table>
																						<thead>
																							<tr>
																								<th class="col_check" scope="col">
																									<div class="mm_table-item">
																										<label class="mm_form-check">
																											<input type="checkbox" name="dev_check-option2" data-check="{ '_type': 'check_all' }">
																											<b class="mm_block">
																												<i class="ico_form-check"></i>
																												<span class="text_label mm_ir-blind">전체선택</span>
																											</b>
																										</label>
																									</div>
																								</th>
																								<th scope="col">
																									<div class="mm_table-item">
																										옵션1
																									</div>
																								</th>
																								<th scope="col">
																									<div class="mm_table-item">
																										옵션2
																									</div>
																								</th>
																								<th scope="col">
																									<div class="mm_table-item">
																										판매 가능 수량
																									</div>
																								</th>
																								<th scope="col">
																									<div class="mm_table-item">
																										옵션가
																									</div>
																								</th>
																								<th scope="col">
																									<div class="mm_table-item">
																										프론트 노출 여부
																									</div>
																								</th>
																								<th scope="col">
																									<div class="mm_table-item">
																										포장 수량
																									</div>
																								</th>
																							</tr>
																						</thead>
																						<tbody>
																							<tr>
																								<td>
																									<div class="mm_table-item">
																										<label class="mm_form-check">
																											<input type="checkbox" name="dev_check-option2" data-check>
																											<b class="mm_block">
																												<i class="ico_form-check"></i>
																												<span class="text_label mm_ir-blind">항목선택</span>
																											</b>
																										</label>
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										화이트
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										XS
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										300
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										<span class="text_price">0</span>
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										노출
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										1
																									</div>
																								</td>
																							</tr>
																							<tr>
																								<td>
																									<div class="mm_table-item">
																										<label class="mm_form-check">
																											<input type="checkbox" name="dev_check-option2" data-check>
																											<b class="mm_block">
																												<i class="ico_form-check"></i>
																												<span class="text_label mm_ir-blind">항목선택</span>
																											</b>
																										</label>
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										화이트
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										S
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										300
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										<span class="text_price">0</span>
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										노출
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										1
																									</div>
																								</td>
																							</tr>
																							<tr>
																								<td>
																									<div class="mm_table-item">
																										<label class="mm_form-check">
																											<input type="checkbox" name="dev_check-option2" data-check>
																											<b class="mm_block">
																												<i class="ico_form-check"></i>
																												<span class="text_label mm_ir-blind">항목선택</span>
																											</b>
																										</label>
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										화이트
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										M
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										300
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										<span class="text_price">0</span>
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										노출
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										1
																									</div>
																								</td>
																							</tr>
																							<tr>
																								<td>
																									<div class="mm_table-item">
																										<label class="mm_form-check">
																											<input type="checkbox" name="dev_check-option2" data-check>
																											<b class="mm_block">
																												<i class="ico_form-check"></i>
																												<span class="text_label mm_ir-blind">항목선택</span>
																											</b>
																										</label>
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										블랙
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										XL
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										300
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										<span class="text_price">0</span>
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										노출
																									</div>
																								</td>
																								<td>
																									<div class="mm_table-item">
																										1
																									</div>
																								</td>
																							</tr>
																						</tbody>
																					</table>
																				</div>
																			</div>
																		</div>
																		<div class="mm_btn_box">
																			<div class="mm_inline">
																				<button type="button" class="mm_btn T=xl T=tertiary btn_use-option">
																					<b>옵션 사용</b>
																				</button>
																			</div>
																		</div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
													<div class="mm_table_box">
														<div class="mm_table_box-caption">
															<h3 class="mm_heading">
																<b>사용 옵션 리스트</b>
															</h3>
														</div>
														<div class="mm_table_box-unit">
															<div class="mm_lside">
																<div class="mm_btn_box">
																	<div class="mm_inline">
																		<a class="mm_btn" href="/pro/product/manage/set-option/register" data-href="{ '_type': 'popup' }"><b>세트 옵션 설정</b></a>
																		<button type="button" class="mm_btn T=line">
																			<b>선택 삭제</b>
																		</button>
																	</div>
																</div>
															</div>
														</div>
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
																					상품 이미지
																				</div>
																			</th>
																			<th scope="col">
																				<div class="mm_table-item">
																					정가
																				</div>
																			</th>
																			<th scope="col">
																				<div class="mm_table-item">
																					옵션 1
																				</div>
																			</th>
																			<th scope="col">
																				<div class="mm_table-item">
																					옵션 2
																				</div>
																			</th>
																			<th scope="col">
																				<div class="mm_table-item">
																					판매가능수량<button type="button" class="mm_btn T=xs T=line T=secondary">
																						<b>일괄적용</b>
																					</button>
																				</div>
																			</th>
																			<th scope="col">
																				<div class="mm_table-item">
																					옵션가
																				</div>
																			</th>
																			<th scope="col">
																				<div class="mm_table-item">
																					반영가
																				</div>
																			</th>
																			<th scope="col">
																				<div class="mm_table-item">
																					프론트 노출 여부
																				</div>
																			</th>
																			<th scope="col">
																				<div class="mm_table-item">
																					포장 수량
																				</div>
																			</th>
																			<th scope="col">
																				<div class="mm_table-item">
																					세트옵션관리
																				</div>
																			</th>
																			<th scope="col">
																				<div class="mm_table-item">
																					대표옵션설정
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
																					123456
																				</div>
																			</td>
																			<td>
																				<div class="mm_table-item">
																					여성 골프화
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
																					<span class="text_price">130000</span>
																				</div>
																			</td>
																			<td>
																				<div class="mm_table-item">
																					BK
																				</div>
																			</td>
																			<td>
																				<div class="mm_table-item">
																					FREE
																				</div>
																			</td>
																			<td data-editable="{ '_byte': 3 }">
																				<div class="mm_table-item">
																					<p class="text_editable" contenteditable></p>
																					<span class="text_placeholder">최대: 999, 품절: 0</span>
																				</div>
																			</td>
																			<td data-editable>
																				<div class="mm_table-item">
																					<p class="text_editable" contenteditable></p>
																					<span class="text_placeholder">숫자만 입력</span>
																				</div>
																			</td>
																			<td>
																				<div class="mm_table-item">
																					<span class="text_price">39000</span>
																				</div>
																			</td>
																			<td>
																				<div class="mm_table-item">
																					<div class="mm_radio-list">
																						<ul>
																							<li>
																								<label class="mm_form-radio">
																									<input type="radio" name="dev_radio-option-display1" data-radio checked>
																									<b class="mm_block">
																										<i class="ico_form-radio"></i>
																										<span class="text_label">노출</span>
																									</b>
																								</label>
																							</li>
																							<li>
																								<label class="mm_form-radio">
																									<input type="radio" name="dev_radio-option-display1" data-radio>
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
																					1
																				</div>
																			</td>
																			<td><div class="mm_table-item"></div></td>
																			<td>
																				<div class="mm_table-item">
																					<button type="button" class="mm_btn T=sm T=line">
																						<b>대표옵션설정</b>
																					</button>
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
																					123456
																				</div>
																			</td>
																			<td>
																				<div class="mm_table-item">
																					여성 골프화
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
																					<span class="text_price">130000</span>
																				</div>
																			</td>
																			<td>
																				<div class="mm_table-item">
																					BK
																				</div>
																			</td>
																			<td>
																				<div class="mm_table-item">
																					FREE
																				</div>
																			</td>
																			<td data-editable="{ '_byte': 3 }">
																				<div class="mm_table-item">
																					<p class="text_editable" contenteditable></p>
																					<span class="text_placeholder">최대: 999, 품절: 0</span>
																				</div>
																			</td>
																			<td data-editable>
																				<div class="mm_table-item">
																					<p class="text_editable" contenteditable></p>
																					<span class="text_placeholder">숫자만 입력</span>
																				</div>
																			</td>
																			<td>
																				<div class="mm_table-item">
																					<span class="text_price">39000</span>
																				</div>
																			</td>
																			<td>
																				<div class="mm_table-item">
																					<div class="mm_radio-list">
																						<ul>
																							<li>
																								<label class="mm_form-radio">
																									<input type="radio" name="dev_radio-option-display2" data-radio checked>
																									<b class="mm_block">
																										<i class="ico_form-radio"></i>
																										<span class="text_label">노출</span>
																									</b>
																								</label>
																							</li>
																							<li>
																								<label class="mm_form-radio">
																									<input type="radio" name="dev_radio-option-display2" data-radio>
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
																					1
																				</div>
																			</td>
																			<td><div class="mm_table-item"></div></td>
																			<td>
																				<div class="mm_table-item">
																					<button type="button" class="mm_btn T=sm T=line">
																						<b>대표옵션설정</b>
																					</button>
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
																					123456
																				</div>
																			</td>
																			<td>
																				<div class="mm_table-item">
																					여성 골프화
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
																					<span class="text_price">130000</span>
																				</div>
																			</td>
																			<td>
																				<div class="mm_table-item">
																					BK
																				</div>
																			</td>
																			<td>
																				<div class="mm_table-item">
																					FREE
																				</div>
																			</td>
																			<td data-editable="{ '_byte': 3 }">
																				<div class="mm_table-item">
																					<p class="text_editable" contenteditable></p>
																					<span class="text_placeholder">최대: 999, 품절: 0</span>
																				</div>
																			</td>
																			<td data-editable>
																				<div class="mm_table-item">
																					<p class="text_editable" contenteditable></p>
																					<span class="text_placeholder">숫자만 입력</span>
																				</div>
																			</td>
																			<td>
																				<div class="mm_table-item">
																					<span class="text_price">39000</span>
																				</div>
																			</td>
																			<td>
																				<div class="mm_table-item">
																					<div class="mm_radio-list">
																						<ul>
																							<li>
																								<label class="mm_form-radio">
																									<input type="radio" name="dev_radio-option-display3" data-radio checked>
																									<b class="mm_block">
																										<i class="ico_form-radio"></i>
																										<span class="text_label">노출</span>
																									</b>
																								</label>
																							</li>
																							<li>
																								<label class="mm_form-radio">
																									<input type="radio" name="dev_radio-option-display3" data-radio>
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
																					1
																				</div>
																			</td>
																			<td><div class="mm_table-item"></div></td>
																			<td>
																				<div class="mm_table-item">
																					<button type="button" class="mm_btn T=sm T=line">
																						<b>대표옵션설정</b>
																					</button>
																				</div>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</div>
														<div class="mm_table_box-unit">
															<div class="mm_lside">
																<div class="mm_btn_box">
																	<div class="mm_inline">
																		<a class="mm_btn" href="./set-option/register" data-href="{ '_type': 'popup' }"><b>세트 옵션 설정</b></a>
																		<button type="button" class="mm_btn T=line">
																			<b>선택 삭제</b>
																		</button>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<!-- // 옵션 설정 -->

							<!-- 하단버튼 -->
							<div v-if="!coopInfluencerOn" class="mm_foot">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<button type="button" class="mm_btn T=xl T=line T=tertiary">
											<b>임시저장</b>
										</button>
										<button type="button" class="mm_btn T=xl T=tertiary" @click="coopInfluencerOn = true">
											<b>다음 단계로</b>
										</button>
									</div>
								</div>
							</div>
							<!-- // 하단버튼 -->
						</template>

						<template v-if="coopInfluencerOn">
							<!-- 인플루언서 설정 -->
							<div class="mm_form_box">
								<!-- 폼 상단 -->
								<div class="mm_form_box-caption">
									<h3 class="mm_heading">
										<b>인플루언서 설정</b>
									</h3>
									<div class="mm_note">
										<ul>
											<li>인플루언서 매칭 및 인플루언서의 배송 정책을 필수로 등록해주세요.</li>
										</ul>
									</div>
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
													<b>인플루언서<i class="ico_required" title="필수입력"></i></b>
												</th>
												<td colspan="3">
													<div class="mm_form-select T=sm">
														<label>
															<select data-select>
																<option>선택하세요</option>
															</select>
															<b class="text_selected"></b>
															<i class="ico_form-select"></i>
														</label>
													</div>
												</td>
											</tr>
											<tr>
												<th scope="row">
													<b>배송정책<i class="ico_required" title="필수입력"></i></b>
												</th>
												<td colspan="3">
													<div class="mm_form_mix-linked">
														<div class="mm_form-select T=sm">
															<label>
																<select data-select>
																	<option>선택하세요</option>
																</select>
																<b class="text_selected"></b>
																<i class="ico_form-select"></i>
															</label>
														</div>
														<div class="mm_form-select T=sm">
															<label>
																<select data-select>
																	<option>배송지 선택</option>
																</select>
																<b class="text_selected"></b>
																<i class="ico_form-select"></i>
															</label>
														</div>
														<a class="mm_btn T=line T=light" href="/seller/manage/ship-policy" data-href="{ '_type': 'popup' }"><b>배송 정책 확인</b></a>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<!-- // 인플루언서 설정 -->

							<!-- 하단버튼 -->
							<div class="mm_foot">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<button type="button" class="mm_btn T=xl T=line T=tertiary">
											<b>임시저장</b>
										</button>
										<button type="button" class="mm_btn T=xl T=tertiary">
											<b>수정하기</b>
										</button>
									</div>
								</div>
							</div>
							<!-- // 하단버튼 -->
						</template>
					</div>
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import Layout from '@/components/layout/Layout.vue';

	const coopOptionOn = ref(false);
	const coopInfluencerOn = ref(false);
</script>