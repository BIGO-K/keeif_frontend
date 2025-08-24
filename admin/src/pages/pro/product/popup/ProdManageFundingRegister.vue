<template>
	<layout-popup>
		<template #title>
			<h1><b>상품 등록</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-prod-manage">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_form m...manage-form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>셀러<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-select T=xl">
											<label>
												<select data-select>
													<option>선택하세요.</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
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
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>상품 유형<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-product" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">일반 상품</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-product" data-radio="{ 'syncer': '.mm_syncer-product-special, .mm_syncer-prod-funding', 'desyncer': '.mm_desyncer-prod-funding' }">
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">펀딩 상품</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr class="mm_syncer-product-special">
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
								<!-- (D) 셀러 설정시 상품 속성 설정 영역을 노출합니다. -->
								<tr>
									<th scope="row">
										<b>상품 속성<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-attr" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">공용</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-attr" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">남성</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-attr" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">여성</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>상품 번호<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
												<span class="text_placeholder">숫자, 영문(대)만 입력</span>
											</label>
										</div>
										<div class="mm_note">
											<p>TAG에 있는 상품 번호를 입력하세요. (최초 등록 후 수정 불가)</p>
										</div>
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
										<b>진열 상품명<i class="ico_required" title="필수입력"></i></b>
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
										<b>배송 정책<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_select-list T=fit">
											<ul>
												<li>
													<div class="mm_form-select">
														<label>
															<select data-select>
																<option>선택하세요.</option>
																<option data-option="{ 'syncer': '.mm_syncer-delivery-overseas' }">해외 배송 정책</option>
																<option data-option="{ 'syncer': '.mm_syncer-delivery-custom' }">주문 제작 상품 배송 정책</option>
															</select>
															<b class="text_selected"></b>
															<i class="ico_form-select"></i>
														</label>
													</div>
												</li>
												<!-- (D) 선택한 배송 정책에 배송지가 여러개 존재할 시, 배송지 선택 셀렉트 박스가 노출됩니다. -->
												<li>
													<div class="mm_form-select">
														<label>
															<select data-select>
																<option>배송지를 선택하세요.</option>
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
								<tr class="mm_syncer-delivery-overseas">
									<th scope="row">
										<b>해외 배송 상품<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-period">
											<span class="text_linked">평균 배송일</span>
											<div class="mm_form-select T=xs">
												<label>
													<select data-select>
														<option>선택하세요.</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
											<b class="text_tilde">~</b>
											<div class="mm_form-select T=xs">
												<label>
													<select data-select>
														<option>선택하세요.</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
										</div>
									</td>
								</tr>
								<tr class="mm_syncer-delivery-custom">
									<th scope="row">
										<b>주문 제작 상품<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-period">
											<span class="text_linked">주문 제작 배송일</span>
											<div class="mm_form-select T=xs">
												<label>
													<select data-select>
														<option>선택하세요.</option>
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
										<b>구매 단가<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td>
										<div class="mm_form_mix-linked">
											<div class="mm_form-text T=xs">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text readonly><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">구매 단가</span>
												</label>
											</div>
											<span class="text_linked">원 (판매가 - 마진)</span>
										</div>
									</td>
									<th scope="row">
										<b>마진율(%)<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td>
										<!-- (D) 셀러 선택 시 해당 셀러에 설정된 마진율을 노출합니다. -->
										<div class="mm_form-text T=xs">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder">최대 100.0</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>카테고리 설정<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="m...manage-form-category">
											<div class="mm_flex T=equal m...category-list">
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
											<dl class="m...category-selected">
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
										<div class="mm_form-table m...manage-form-info">
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
									<td class="m...manage-form-origin" colspan="3">
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
																	<option data-option="{ 'syncer': '.mm_syncer-origin-etc', 'desyncer': '.mm_desyncer-origin-etc' }">기타</option>
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
										<b>과세/면세<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-tax" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">과세</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-tax" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">면세</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>펀딩 메인 문구 1<i class="ico_required" title="필수입력"></i></b>
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
										<b>펀딩 메인 문구 2<i class="ico_required" title="필수입력"></i></b>
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
										<b>펀딩 진행 기간<i class="ico_required" title="필수입력"></i></b>
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
										<b>펀딩 진행율<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-table">
											<table>
												<caption>
													<div class="mm_radio-list">
														<ul>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-funding-process" data-radio checked>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">수동</span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-funding-process" data-radio="{ 'desyncer': '.mm_desyncer-funding-auto' }">
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">자동</span>
																	</b>
																</label>
															</li>
														</ul>
													</div>
												</caption>
												<tbody>
													<tr>
														<th scope="row">
															<b>목표 개수</b>
														</th>
														<td>
															<div class="mm_form_mix-linked">
																<div class="mm_form-text T=xs">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text maxlength="9"><i class="bg_text"></i>
																		<span class="text_placeholder">숫자만 입력</span>
																	</label>
																</div>
																<span class="text_linked">개</span>
															</div>
														</td>
													</tr>
													<tr class="mm_desyncer-funding-auto">
														<th scope="row">
															<b>진행율</b>
														</th>
														<td>
															<div class="mm_form_mix-linked">
																<div class="mm_form-text T=xs">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text maxlength="3"><i class="bg_text"></i>
																		<span class="text_placeholder">숫자만 입력</span>
																	</label>
																</div>
																<span class="text_linked">%</span>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>펀딩 상품<br>배송 시작일<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-period">
											<div class="mm_form-text T=calendar">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
													<span class="text_placeholder">날짜선택</span>
													<i class="ico_datepicker-calendar"></i>
												</label>
											</div>
											<span class="text_linked">부터 순차적 배송 시작</span>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>생산 원가</b>
									</th>
									<td colspan="3">
										<div class="mm_table_box">
											<div class="mm_table" data-table>
												<div class="mm_scroller">
													<table>
														<thead>
															<tr>
																<th scope="col">
																	<div class="mm_table-item">
																		원단
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		부자재
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		가공비
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		마진
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		마케팅
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		KC 인증
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		B.O 비용
																	</div>
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td data-editable="{ '_byte': 11 }">
																	<div class="mm_table-item">
																		<p class="text_editable" contenteditable></p>
																		<span class="text_placeholder">숫자만 입력</span>
																	</div>
																</td>
																<td data-editable="{ '_byte': 11 }">
																	<div class="mm_table-item">
																		<p class="text_editable" contenteditable></p>
																		<span class="text_placeholder">숫자만 입력</span>
																	</div>
																</td>
																<td data-editable="{ '_byte': 11 }">
																	<div class="mm_table-item">
																		<p class="text_editable" contenteditable></p>
																		<span class="text_placeholder">숫자만 입력</span>
																	</div>
																</td>
																<td data-editable="{ '_byte': 11 }">
																	<div class="mm_table-item">
																		<p class="text_editable" contenteditable></p>
																		<span class="text_placeholder">숫자만 입력</span>
																	</div>
																</td>
																<td data-editable="{ '_byte': 11 }">
																	<div class="mm_table-item">
																		<p class="text_editable" contenteditable></p>
																		<span class="text_placeholder">숫자만 입력</span>
																	</div>
																</td>
																<td data-editable="{ '_byte': 11 }">
																	<div class="mm_table-item">
																		<p class="text_editable" contenteditable></p>
																		<span class="text_placeholder">숫자만 입력</span>
																	</div>
																</td>
																<td data-editable="{ '_byte': 11 }">
																	<div class="mm_table-item">
																		<p class="text_editable" contenteditable></p>
																		<span class="text_placeholder">숫자만 입력</span>
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
										<div class="mm_note T=bottom">
											<ul>
												<li>입력한 정보만 PC 프론트에 노출됩니다.</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>관련 상품 설정<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-funding-product" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">랜덤 노출</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-funding-product" data-radio="{ 'syncer': '.mm_syncer-funding-self' }">
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">수동 노출</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-funding-product" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">미노출</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
										<div class="mm_note">
											<p>'랜덤 노출' 설정 시 대표 카테고리 상품이 랜덤으로 10개 노출됩니다.</p>
										</div>
									</td>
								</tr>
								<tr class="mm_syncer-funding-self">
									<th scope="row">
										<b>관련 상품<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_btn_box">
											<div class="mm_inline">
												<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
												<!-- (D) 상품 추가 후 노출합니다. -->
												<a class="mm_btn T=line" href="/product-list" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>등록 상품 확인 <strong class="mm_text-secondary text_num">1000</strong>개</b></a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>상품 이미지 등록<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td class="m...manage-form-image" colspan="3">
										<div class="mm_form-multiple">
											<ul>
												<li>
													<div class="mm_form-image">
														<div class="mm_form-image-preview"></div>
														<label>
															<input type="file" accept=".jpg, .png" data-file="{ '_imageSize': 'contain', '_fileSize': 2000, 'onChange': 'imagePreview' }">
															<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
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
										<b>펀딩 리스트<br> 이미지 미리보기</b>
									</th>
									<td colspan="3">
										<div class="mm_form-table m...manage-form-preview T=funding">
											<table>
												<caption>
													<div class="mm_radio-list">
														<ul>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-preview-funding" data-radio="{ 'syncer': '.mm_syncer-funding-auto' }" checked>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">자동 등록</span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-preview-funding" data-radio="{ 'syncer': '.mm_syncer-funding-self' }">
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">직접 등록</span>
																	</b>
																</label>
															</li>
														</ul>
													</div>
												</caption>
												<tbody>
													<tr class="mm_syncer-funding-auto">
														<td>
															<div class="m...preview-image">
																<div class="m...preview-image-auto">
																	<p>대표이미지</p>
																</div>
															</div>
															<div class="mm_note T=bottom">
																<p class="mm_text-primary">
																	등록한 대표이미지가 프론트 펀딩 리스트 노출 비율에 따라 크롭되어 보여집니다.
																</p>
															</div>
														</td>
													</tr>
													<tr class="mm_syncer-funding-self">
														<td>
															<div class="mm_form-image">
																<div class="mm_form-image-preview"></div>
																<label>
																	<input type="file" accept=".jpg, .png" data-file="{ '_imageSize': 'cover', '_fileSize': 2000 }">
																	<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
																</label>
																<button type="button" class="btn_remove-file">
																	<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
																</button>
															</div>
															<div class="mm_note T=bottom">
																<ul>
																	<li>권장 사이즈는 W 000px * H 000px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
																	<li>이미지 한 개당 최대 용량은 2MB를 초과할 수 없습니다.</li>
																	<li><strong>직접 등록한 이미지가 리스트에 우선으로 노출</strong>됩니다.</li>
																</ul>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>펀딩 리스트 이미지<br> (마우스 오버)</b>
									</th>
									<td colspan="3">
										<div class="mm_form-image">
											<div class="mm_form-image-preview"></div>
											<label>
												<input type="file" accept=".jpg, .png" data-file="{ '_imageSize': 'cover', '_fileSize': 2000 }">
												<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
											</label>
											<button type="button" class="btn_remove-file">
												<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
											</button>
										</div>
										<div class="mm_note T=bottom">
											<ul>
												<li>권장 사이즈는 W 000px * H 000px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
												<li>이미지 한 개당 최대 용량은 2MB를 초과할 수 없습니다.</li>
												<li>PC 프론트에서 마우스 오버했을 때 노출되는 이미지입니다.</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>상품 대표 색상</b>
									</th>
									<td colspan="3">
										<div class="m...manage-form-color">
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
											<!-- (D) 체크한 색상을 .m...color-list 영역에 추가하며, 선택된 색상이 없을 경우 '.m...color-list' 를 노출하지 않습니다. -->
											<!--
												<ul class="m...color-list">
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
								<tr class="mm_desyncer-prod-funding">
									<th scope="row">
										<b>상품 옵션 설정<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td class="m...manage-form-option" colspan="3">
										<div class="mm_form-table">
											<table>
												<tbody>
													<tr>
														<th scope="row">
															<b>옵션 1</b>
														</th>
														<td>
															<div class="mm_form-textarea">
																<button type="button" class="btn_text-clear">
																	<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																</button>
																<label>
																	<textarea class="textfield" data-text="{ '_resizeMin': 6, '_byte': 1000 }"></textarea><i class="bg_text"></i>
																	<span class="text_placeholder">반드시 콤마(,)로 구분하여 입력해주세요. 예) 블랙, 화이트</span>
																</label>
															</div>
														</td>
													</tr>
													<tr>
														<th scope="row">
															<b>옵션 2</b>
														</th>
														<td>
															<div class="mm_form-textarea">
																<button type="button" class="btn_text-clear">
																	<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																</button>
																<label>
																	<textarea class="textfield" data-text="{ '_resizeMin': 6, '_byte': 1000 }"></textarea><i class="bg_text"></i>
																	<span class="text_placeholder">반드시 콤마(,)로 구분하여 입력해주세요. 예) 55, 66</span>
																</label>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
										<button type="button" class="mm_btn T=xl T=tertiary btn_add">
											<b>옵션 조합</b><i class="ico_add"></i>
										</button>
										<!-- 내용있음 -->
										<div class="mm_table_box">
											<div class="mm_table_box-caption">
												<div class="mm_note">
													<ul>
														<li><strong>엑셀파일의 행 개수는 300개 이내로 해주세요.</strong></li>
														<li>판매가능수량은 <strong>최대 999</strong>까지 입력할 수 있고, <strong>품절은 0</strong>으로 입력해주세요.</li>
													</ul>
												</div>
											</div>
											<div class="mm_table_box-unit">
												<div class="mm_lside">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
																<i class="ico_sortable-edit"></i><b>순서편집</b>
															</button>
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
																		프론트 노출 여부
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
																		<button type="button" class="mm_btn T=sm T=line">
																			<b>삭제</b>
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
																		WH
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
																		<button type="button" class="mm_btn T=sm T=line">
																			<b>삭제</b>
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
															<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
																<i class="ico_sortable-edit"></i><b>순서편집</b>
															</button>
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
										</div>
										<!-- // 내용있음 -->

										<!-- 내용없음 -->
										<!--
											<div class="mm_table_box">
											<div class="mm_table-none">
											<p>등록된 내용이 없습니다.</p>
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
																		<input type="file" accept=".xlsx, .xls" data-file="{ '_fileName': 'option_product' }">
																		<span class="text_path"></span>
																		<span class="mm_btn T=line T=light text_label">파일첨부</span>
																	</label>
																</div>
																<a class="btn_sample" href="#" download="option_product.xls"><b>샘플다운받기</b></a>
																<button type="button" class="mm_btn T=line T=xload btn_excel">
																	<b>엑셀 업로드</b><i class="ico_upload"></i>
																</button>
															</div>
															<div class="mm_note T=bottom">
																<ul>
																	<li><strong>option_product 파일명만 업로드가 가능</strong>합니다. (xls/xlsx 확장자를 제외한 파일 및 이미지는 업로드 불가)</li>
																	<li>파일 지정 후 업로드 버튼 클릭 시 상단 목록에 적용되어 노출됩니다.</li>
																	<li>업로드 시, 동일한 데이터를 가진 항목은 유지되고 변동이 있거나 신규 추가된 항목만 업로드되어 노출됩니다.</li>
																	<li>항목 삭제는 엑셀 파일이 아닌 목록의 삭제 버튼을 통해서만 가능하며 <strong>상품 수정 시에는 삭제가 불가능</strong>합니다.</li>
																</ul>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
										<!-- // 엑셀 업로드 -->
									</td>
								</tr>
								<!-- (D) 펀딩 상품 옵션 설정 -->
								<tr class="mm_syncer-prod-funding">
									<th scope="row">
										<b>상품 옵션 설정<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td class="m...manage-form-option" colspan="3">
										<div class="mm_form-table">
											<table>
												<tbody>
													<tr>
														<th scope="row">
															<b>옵션 1</b>
														</th>
														<td>
															<div class="mm_form-textarea">
																<button type="button" class="btn_text-clear">
																	<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																</button>
																<label>
																	<textarea class="textfield" data-text="{ '_resizeMin': 6, '_byte': 1000 }"></textarea><i class="bg_text"></i>
																	<span class="text_placeholder">반드시 콤마(,)로 구분하여 입력해주세요. 예) 블랙, 화이트</span>
																</label>
															</div>
														</td>
													</tr>
													<tr>
														<th scope="row">
															<b>옵션 2</b>
														</th>
														<td>
															<div class="mm_form-textarea">
																<button type="button" class="btn_text-clear">
																	<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																</button>
																<label>
																	<textarea class="textfield" data-text="{ '_resizeMin': 6, '_byte': 1000 }"></textarea><i class="bg_text"></i>
																	<span class="text_placeholder">반드시 콤마(,)로 구분하여 입력해주세요. 예) 55, 66</span>
																</label>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
										<button type="button" class="mm_btn T=xl T=tertiary btn_add">
											<b>옵션 조합</b><i class="ico_add"></i>
										</button>
										<!-- 내용있음 -->
										<div class="mm_table_box">
											<div class="mm_table_box-caption">
												<div class="mm_note">
													<ul>
														<li><strong>엑셀파일의 행 개수는 300개 이내로 해주세요.</strong></li>
														<li>판매가능수량은 <strong>최대 999</strong>까지 입력할 수 있고, <strong>품절은 0</strong>으로 입력해주세요.</li>
														<li>
															옵션가는 <strong>판매가 기준으로 추가금액을 입력</strong>해주세요. 0으로 입력하거나 입력하지 않을 경우 옵션가가 적용되지 않습니다.<br>
															(ex. 판매가 10,000원에 옵션 추가금액 1,000원 입력 시 해당 옵션은 10,000 + 1,000 = 11,000원의 가격으로 설정됩니다.)
														</li>
													</ul>
												</div>
											</div>
											<div class="mm_table_box-unit">
												<div class="mm_lside">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
																<i class="ico_sortable-edit"></i><b>순서편집</b>
															</button>
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
																		옵션 추가금액
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
																		BK
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		FREE
																	</div>
																</td>
																<td data-editable="{ '_byte': 11 }">
																	<div class="mm_table-item">
																		<p class="text_editable" contenteditable></p>
																		<span class="text_placeholder">숫자만 입력</span>
																	</div>
																</td>
																<td data-editable="{ '_byte': 3 }">
																	<div class="mm_table-item">
																		<p class="text_editable" contenteditable></p>
																		<span class="text_placeholder">최대: 999, 품절: 0</span>
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<button type="button" class="mm_btn T=sm T=line">
																			<b>삭제</b>
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
																		WH
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		FREE
																	</div>
																</td>
																<td data-editable="{ '_byte': 11 }">
																	<div class="mm_table-item">
																		<p class="text_editable" contenteditable></p>
																		<span class="text_placeholder">숫자만 입력</span>
																	</div>
																</td>
																<td data-editable="{ '_byte': 3 }">
																	<div class="mm_table-item">
																		<p class="text_editable" contenteditable></p>
																		<span class="text_placeholder">최대: 999, 품절: 0</span>
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<button type="button" class="mm_btn T=sm T=line">
																			<b>삭제</b>
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
															<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
																<i class="ico_sortable-edit"></i><b>순서편집</b>
															</button>
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
										</div>
										<!-- // 내용있음 -->

										<!-- 내용없음 -->
										<!--
											<div class="mm_table_box">
											<div class="mm_table-none">
											<p>등록된 내용이 없습니다.</p>
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
																		<input type="file" accept=".xlsx, .xls" data-file="{ '_fileName': 'option_funding' }">
																		<span class="text_path"></span>
																		<span class="mm_btn T=line T=light text_label">파일첨부</span>
																	</label>
																</div>
																<a class="btn_sample" href="#" download="option_funding.xls"><b>샘플다운받기</b></a>
																<button type="button" class="mm_btn T=line T=xload btn_excel">
																	<b>엑셀 업로드</b><i class="ico_upload"></i>
																</button>
															</div>
															<div class="mm_note T=bottom">
																<ul>
																	<li><strong>option_funding 파일명만 업로드가 가능</strong>합니다. (xls/xlsx 확장자를 제외한 파일 및 이미지는 업로드 불가)</li>
																	<li>파일 지정 후 업로드 버튼 클릭 시 상단 목록에 적용되어 노출됩니다.</li>
																	<li>업로드 시, 동일한 데이터를 가진 항목은 유지되고 변동이 있거나 신규 추가된 항목만 업로드되어 노출됩니다.</li>
																	<li>항목 삭제는 엑셀 파일이 아닌 목록의 삭제 버튼을 통해서만 가능하며 <strong>상품 수정 시에는 삭제가 불가능</strong>합니다.</li>
																</ul>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
										<!-- // 엑셀 업로드 -->
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=line T=tertiary">
									<b>초기화</b>
								</button>
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>등록하기</b>
								</button>
							</div>
						</div>
					</div>
					<!-- 최하단버튼 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	// 대/2 DEPTH 선택
	mm.delegate.on(mm.find('.m\\.\\.\\.manage-form-category')[0], '.m\\.\\.\\.category-list button', 'click', function() {

		var _classOn = 'S=category-on';

		var $buttons = mm.find('button', this.closest('dd'));
		mm.class.remove($buttons, _classOn);
		mm.element.attribute($buttons, { 'title': '' });

		this.classList.add(_classOn);
		this.setAttribute('title', '선택됨');

	});

	// 펀딩 리스트 이미지 미리보기
	function imagePreview() {

		var fileData = mm.data.get(mm.find('.m\\.\\.\\.manage-form-image [data-file]')[0]).file;
		var $previews = mm.find('.m\\.\\.\\.preview-image-auto');
		var _classOn = 'S=image-on';

		mm.element.remove(mm.find('.mm_bg-cover', $previews));

		if (fileData && fileData.file.view) {
			_.forEach($previews, function(__$preview) {

				mm.element.append(__$preview, mm.string.template('<i class="mm_bg-cover" style="background-image:url(${FILE})"></i>', { FILE: fileData.file.result }));
				__$preview.classList.add(_classOn);

			});
		}
		else mm.class.remove($previews, _classOn);

	}

	// 상품 이미지 순서변경
	mm.delegate.on(document, '.btn_sort-apply', 'click', imagePreview);
	mm.load(imagePreview);
</script>