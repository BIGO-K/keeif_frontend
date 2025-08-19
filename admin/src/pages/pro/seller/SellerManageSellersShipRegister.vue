<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>배송 정책 등록[셀러A]</b>
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

					<!-- 배송 정책 등록 영역 -->
					<div class="mm_form_box">
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송 정책명<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text="{ '_byte': 100 }"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">최대 100자 입력</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송 유형<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-delivery" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">일반 배송</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-delivery" data-radio="{ 'syncer': '.mm_syncer-oversease-ship' }">
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">해외 배송</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-delivery" data-radio="{ 'syncer': '.mm_syncer-custom-ship' }">
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">주문 제작 상품 배송</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr class="mm_syncer-oversease-ship">
										<th scope="row">
											<b>해외배송 평균 배송일<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<div class="mm_form-select T=xs">
													<label>
														<select data-select>
															<option>선택</option>
														</select>
														<b class="text_selected"></b>
														<i class="ico_form-select"></i>
													</label>
												</div>
												<span class="text_linked">~</span>
												<div class="mm_form-select T=xs">
													<label>
														<select data-select>
															<option>선택</option>
														</select>
														<b class="text_selected"></b>
														<i class="ico_form-select"></i>
													</label>
												</div>
											</div>
										</td>
									</tr>
									<tr class="mm_syncer-custom-ship">
										<th scope="row">
											<b>주문 제작 배송일<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-select T=sm">
												<label>
													<select data-select>
														<option>선택</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송처 구분<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-shipping" data-radio="{ 'syncer': '.mm_syncer-shipping-company' }" checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">업체 배송</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-shipping" data-radio="{ 'syncer': '.mm_syncer-shipping-logistics' }">
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">물류 배송 (WMS)</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>사용 택배사<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_syncer-shipping-company">
												<div class="mm_form-select T=sm">
													<label>
														<select data-select>
															<option>택배사를 선택하세요.</option>
														</select>
														<b class="text_selected"></b>
														<i class="ico_form-select"></i>
													</label>
												</div>
											</div>
											<div class="mm_syncer-shipping-logistics">
												<div class="mm_form-select T=sm">
													<label>
														<select data-select disabled>
															<option>택배사를 선택하세요.</option>
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
											<b>무료 배송 여부<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-delivery-charge" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">무료배송</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-delivery-charge" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">미사용</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-delivery-charge" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">조건부 무료배송</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>출고 관련 안내 설정</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<div class="mm_form-text T=xs">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text><i class="bg_text"></i>
														<span class="text_placeholder mm_ir-blind">최대 10자 입력</span>
													</label>
												</div>
												<p class="text_linked">
													시 이전 결제 시 당일 출고됩니다.
												</p>
											</div>
											<div class="mm_note">
												<p>입력 시 해당 배송 정책을 사용하는 상품의 상세 페이지 내 상기 문구가 노출됩니다.</p>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>온도구분</b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-temperature" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">상온</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-temperature" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">냉장</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-temperature" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">냉동</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송비<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td>
											<div class="mm_form-text T=sm">
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
											<b>반품 배송비<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td>
											<div class="mm_form-text T=sm">
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
											<b>교환 배송비<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td>
											<div class="mm_form-text T=sm">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder">숫자만 입력</span>
												</label>
											</div>
											<div class="mm_note">
												<p>왕복 교환 배송비 기입</p>
											</div>
										</td>
										<th scope="row">
											<b>도서산간<br>추가 배송비<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td>
											<div class="mm_form-text T=sm">
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
											<b>조건무 무료 배송</b>
										</th>
										<td>
											<div class="mm_form-text T=sm">
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
											<b>묶음 배송 사용 여부<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td>
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-delivery-bundle" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">사용</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-delivery-bundle" data-radio>
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
									<!-- 추가 배송비 -->
									<tr class="mm_syncer-shipping-logistics">
										<th scope="row">
											<b>냉장 추가 배송비<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<b>배송비</b>
															</th>
															<td>
																<div class="mm_form-text T=sm">
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
																<b>반품 배송비</b>
															</th>
															<td>
																<div class="mm_form-text T=sm">
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
																<b>교환 배송비</b>
															</th>
															<td>
																<div class="mm_form-text T=sm">
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
																<b>도서산간<br>추가 배송비</b>
															</th>
															<td>
																<div class="mm_form-text T=sm">
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
													</tbody>
												</table>
											</div>
										</td>
									</tr>
									<tr class="mm_syncer-shipping-logistics">
										<th scope="row">
											<b>냉동 추가 배송비<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<b>배송비</b>
															</th>
															<td>
																<div class="mm_form-text T=sm">
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
																<b>반품 배송비</b>
															</th>
															<td>
																<div class="mm_form-text T=sm">
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
																<b>교환 배송비</b>
															</th>
															<td>
																<div class="mm_form-text T=sm">
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
																<b>도서산간<br>추가 배송비</b>
															</th>
															<td>
																<div class="mm_form-text T=sm">
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
													</tbody>
												</table>
											</div>
										</td>
									</tr>
									<tr class="mm_syncer-shipping-logistics">
										<th scope="row">
											<b>새벽 배송 사용 여부<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<div class="mm_radio-list">
													<ul>
														<li>
															<label class="mm_form-radio">
																<input type="radio" name="dev_radio-delivery-dawn" data-radio checked>
																<b class="mm_block">
																	<i class="ico_form-radio"></i>
																	<span class="text_label">미사용</span>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-radio">
																<input type="radio" name="dev_radio-delivery-dawn" data-radio="{ 'syncer': '.mm_syncer-delivery-dawn' }">
																<b class="mm_block">
																	<i class="ico_form-radio"></i>
																	<span class="text_label">사용</span>
																</b>
															</label>
														</li>
													</ul>
												</div>
												<div class="mm_syncer-delivery-dawn">
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
														<p>새벽 배송 추가 배송비 기입</p>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<!-- // 추가 배송비 -->
								</tbody>
							</table>
						</div>
						<!-- 추가 배송비 안내문구 -->
						<div class="mm_note mm_syncer-shipping-logistics">
							<ul>
								<li>추가 배송비는 기본 배송비에 <strong>추가되는 금액만 입력</strong>바랍니다.</li>
							</ul>
						</div>
						<!-- // 추가 배송비 안내문구 -->
					</div>
					<!-- 배송지 설정 영역 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>배송지 설정</b>
							</h3>
						</div>
						<div class="mm_form_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<!-- (D) '배송지 추가' 버튼 클릭 시 배송지 등록 영역을 추가합니다. -->
										<button type="button" class="mm_btn">
											<b>배송지 추가</b>
										</button>
									</div>
								</div>
							</div>
							<div class="mm_rside">
								<p class="text_required">
									<i class="ico_required" title="필수입력"></i>로 표시된 항목은 필수입력입니다.
								</p>
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
											<b>배송지 1<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<b>배송지명<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td>
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
																<b>굿스플로 코드<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td>
																<div class="mm_form-text">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text><i class="bg_text"></i>
																		<span class="text_placeholder mm_ir-blind">굿스플로 코드</span>
																	</label>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>배송지 주소<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td>
																<div class="mm_form_mix-address">
																	<div class="mm_form_mix-linked">
																		<div class="mm_form-text T=xs">
																			<button type="button" class="btn_text-clear">
																				<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																			</button>
																			<label>
																				<input type="text" class="textfield" data-text readonly><i class="bg_text"></i>
																				<span class="text_placeholder mm_ir-blind">우편번호</span>
																			</label>
																		</div>
																		<a href="/postcode" class="mm_btn T=line btn_postcode" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>우편번호 찾기</b></a>
																	</div>
																	<div class="mm_form-text T=lg">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text readonly><i class="bg_text"></i>
																			<span class="text_placeholder mm_ir-blind">검색주소</span>
																		</label>
																	</div>
																	<div class="mm_form-text T=lg">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text><i class="bg_text"></i>
																			<span class="text_placeholder">상세 주소를 입력하세요.</span>
																		</label>
																	</div>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>배송지 연락처<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td>
																<div class="mm_form-text T=sm">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text maxlength="12"><i class="bg_text"></i>
																		<span class="text_placeholder">숫자만 입력</span>
																	</label>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>반품/교환지 주소<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td>
																<div class="mm_form_mix-address">
																	<div class="mm_form_mix-linked">
																		<div class="mm_form-text T=xs">
																			<button type="button" class="btn_text-clear">
																				<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																			</button>
																			<label>
																				<input type="text" class="textfield" data-text readonly><i class="bg_text"></i>
																				<span class="text_placeholder mm_ir-blind">우편번호</span>
																			</label>
																		</div>
																		<a href="/postcode" class="mm_btn T=line btn_postcode" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>우편번호 찾기</b></a>
																	</div>
																	<div class="mm_form-text T=lg">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text readonly><i class="bg_text"></i>
																			<span class="text_placeholder mm_ir-blind">검색주소</span>
																		</label>
																	</div>
																	<div class="mm_form-text T=lg">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text><i class="bg_text"></i>
																			<span class="text_placeholder">상세 주소를 입력하세요.</span>
																		</label>
																	</div>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>반품/교환지 연락처<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td>
																<div class="mm_form-text T=sm">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text maxlength="12"><i class="bg_text"></i>
																		<span class="text_placeholder">숫자만 입력</span>
																	</label>
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
											<b>배송지 2<i class="ico_required" title="필수입력"></i></b>
											<!-- (D) '배송지 추가'로 추가된 배송지 등록 영역에 '삭제' 버튼을 노출하며, 클릭 시 해당 배송지 등록 영역을 삭제합니다. -->
											<button type="button" class="mm_btn T=xs T=line T=tertiary">
												<b>삭제</b>
											</button>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<b>배송지명<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td>
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
																<b>굿스플로 코드<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td>
																<div class="mm_form-text">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text><i class="bg_text"></i>
																		<span class="text_placeholder mm_ir-blind">굿스플로 코드</span>
																	</label>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>배송지 주소<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td>
																<div class="mm_form_mix-address">
																	<div class="mm_form_mix-linked">
																		<div class="mm_form-text T=xs">
																			<button type="button" class="btn_text-clear">
																				<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																			</button>
																			<label>
																				<input type="text" class="textfield" data-text readonly><i class="bg_text"></i>
																				<span class="text_placeholder mm_ir-blind">우편번호</span>
																			</label>
																		</div>
																		<a href="/postcode" class="mm_btn T=line btn_postcode" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>우편번호 찾기</b></a>
																	</div>
																	<div class="mm_form-text T=lg">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text readonly><i class="bg_text"></i>
																			<span class="text_placeholder mm_ir-blind">검색주소</span>
																		</label>
																	</div>
																	<div class="mm_form-text T=lg">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text><i class="bg_text"></i>
																			<span class="text_placeholder">상세 주소를 입력하세요.</span>
																		</label>
																	</div>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>배송지 연락처<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td>
																<div class="mm_form-text T=sm">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text maxlength="12"><i class="bg_text"></i>
																		<span class="text_placeholder">숫자만 입력</span>
																	</label>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>반품/교환지 주소<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td>
																<div class="mm_form_mix-address">
																	<div class="mm_form_mix-linked">
																		<div class="mm_form-text T=xs">
																			<button type="button" class="btn_text-clear">
																				<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																			</button>
																			<label>
																				<input type="text" class="textfield" data-text readonly><i class="bg_text"></i>
																				<span class="text_placeholder mm_ir-blind">우편번호</span>
																			</label>
																		</div>
																		<a href="/postcode" class="mm_btn T=line btn_postcode" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>우편번호 찾기</b></a>
																	</div>
																	<div class="mm_form-text T=lg">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text readonly><i class="bg_text"></i>
																			<span class="text_placeholder mm_ir-blind">검색주소</span>
																		</label>
																	</div>
																	<div class="mm_form-text T=lg">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text><i class="bg_text"></i>
																			<span class="text_placeholder">상세 주소를 입력하세요.</span>
																		</label>
																	</div>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>반품/교환지 연락처<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td>
																<div class="mm_form-text T=sm">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text maxlength="12"><i class="bg_text"></i>
																		<span class="text_placeholder">숫자만 입력</span>
																	</label>
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

						<!-- 폼 하단 -->
						<div class="mm_form_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<!-- (D) '배송지 추가' 버튼 클릭 시 배송지 등록 영역을 추가합니다. -->
										<button type="button" class="mm_btn">
											<b>배송지 추가</b>
										</button>
									</div>
								</div>
							</div>
							<div class="mm_rside">
								<p class="text_required">
									<i class="ico_required" title="필수입력"></i>로 표시된 항목은 필수입력입니다.
								</p>
							</div>
						</div>
						<!-- // 폼 하단 -->
					</div>
					<!-- // 배송지 설정 영역 -->
					<!-- // 배송 정책 등록 영역 -->

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