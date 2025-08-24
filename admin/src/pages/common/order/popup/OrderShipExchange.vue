<template>
	<layout-popup>
		<template #title>
			<h1><b>교환 신청</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 주문 정보 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>주문번호</b>
									</th>
									<td><a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>202205070001</b></a></td>
									<th scope="row">
										<b>주문일시</b>
									</th>
									<td><p>2022-05-07 09:09:10</p></td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 주문 정보 -->

					<!-- 상품 정보 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h3 class="mm_heading">
								<b>상품 정보</b>
							</h3>
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
													수량
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													셀러
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													상품 옵션
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													변경 옵션
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
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>[밸리걸] 레터링 티셔츠 120670</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													123
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													1
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러A
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													BK / 55
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_form-select">
														<label>
															<select data-select>
																<option>옵션 변경</option>
															</select>
															<b class="text_selected"></b>
															<i class="ico_form-select"></i>
														</label>
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
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>[밸리걸] 레터링 티셔츠 120670</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													123
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													1
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러A
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													BK / 55
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_form-select">
														<label>
															<select data-select>
																<option>옵션 변경</option>
															</select>
															<b class="text_selected"></b>
															<i class="ico_form-select"></i>
														</label>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->
					</div>
					<!-- // 상품 정보 -->

					<!-- 교환 정보 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>교환 정보</b>
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
										<th scope="row">
											<b>교환지</b>
										</th>
										<td colspan="3">
											<p>(13487) 경기도 성남시 분당구 판교로 242 (삼평동) 판교디지털센터 C동 401호</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>교환 사유<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-select">
												<label>
													<select data-select>
														<option>교환 사유를 선택해주세요.</option>
														<option>마음이 변했어요.</option>
														<option data-option="{ 'syncer': '.mm_syncer-exchange-reason' }">상품에 하자가 있어요. (상세 사유 필요)</option>
														<option data-option="{ 'syncer': '.mm_syncer-exchange-reason' }">다른 상품이 배송됐어요. (상세 사유 필요)</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
											<div class="mm_syncer-exchange-reason">
												<div class="mm_form-textarea">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<textarea class="textfield" data-text="{ '_resizeMin': 6, '_byte': 50 }"></textarea><i class="bg_text"></i>
														<span class="text_placeholder">상세 사유를 입력하세요. (필수)</span>
													</label>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>회수 방법<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<caption>
														<div class="mm_form-select">
															<label>
																<select data-select>
																	<option>회수 방법을 선택해주세요.</option>
																	<option data-option="{ 'syncer': '.mm_syncer-collection-direct' }">고객 직접 회수</option>
																	<!-- (D) 굿스플로 사용 셀러일 경우 노출합니다. -->
																	<option data-option="{ 'syncer': '.mm_syncer-collection-auto' }">자동 회수</option>
																	<!-- (D) 굿스플로 미사용 셀러일 경우 노출합니다. -->
																	<option data-option="{ 'syncer': '.mm_syncer-collection-auto' }">업체 회수</option>
																</select>
																<b class="text_selected"></b>
																<i class="ico_form-select"></i>
															</label>
														</div>
													</caption>
													<tbody class="mm_syncer-collection-direct">
														<tr>
															<th scope="row">
																<b>택배사 정보</b>
															</th>
															<td>
																<div class="mm_form_mix-linked">
																	<div class="mm_form-select T=sm">
																		<label>
																			<select data-select>
																				<option>택배사를 선택하세요.</option>
																			</select>
																			<b class="text_selected"></b>
																			<i class="ico_form-select"></i>
																		</label>
																	</div>
																	<div class="mm_form-text">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
																			<span class="text_placeholder mm_ir-blind">최대 50자 입력</span>
																		</label>
																	</div>
																</div>
															</td>
														</tr>
													</tbody>
													<tbody class="mm_syncer-collection-auto">
														<tr>
															<th scope="row">
																<b>주문자</b>
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
																<b>연락처</b>
															</th>
															<td>
																<div class="mm_form-text">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text="{ '_byte': 12 }"><i class="bg_text"></i>
																		<span class="text_placeholder mm_ir-blind">최대 12자 입력</span>
																	</label>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>반품 수거지</b>
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
													</tbody>
												</table>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>추가 결제 금액</b>
										</th>
										<td colspan="3">
											<p><span class="text_price">7500</span> (일반 배송비 <span class="text_price">2500</span> + 교환 배송비 <span class="text_price">2500</span> + 도서산간 배송비 <span class="text_price">2500</span>)</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>결제 방식</b>
										</th>
										<td colspan="3">
											<p>판매자와 협의 후 결제</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>교환 배송지<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<b>주문자</b>
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
																<b>연락처</b>
															</th>
															<td>
																<div class="mm_form-text">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text="{ '_byte': 12 }"><i class="bg_text"></i>
																		<span class="text_placeholder mm_ir-blind">최대 12자 입력</span>
																	</label>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>교환 배송지</b>
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
													</tbody>
												</table>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- // 교환 정보 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>변경하기</b>
								</button>
							</div>
						</div>
					</div>
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>