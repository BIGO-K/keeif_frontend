<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>자동발행쿠폰 수정</b>
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

					<!-- 자동발행쿠폰 수정 설정 -->
					<div class="mm_form_box">
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>쿠폰명<i class="ico_required" title="필수입력"></i></b>
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
											<b>쿠폰 설명</b>
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
											<b>사용 여부<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
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
									</tr>
									<tr>
										<th scope="row">
											<b>고객 사용 가능 여부<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-custom" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">사용 가능</span>
															</b>
														</label>
													</li>
													<li>
														<div class="mm_form_mix-linked">
															<label class="mm_form-radio">
																<input type="radio" name="dev_radio-custom" data-radio="{ 'syncer': '.mm_syncer-using-custom' }">
																<b class="mm_block">
																	<i class="ico_form-radio"></i>
																	<span class="text_label">사용 불가</span>
																</b>
															</label>
															<div class="mm_syncer-using-custom">
																<div class="mm_form-text">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text="{ '_byte': 30 }"><i class="bg_text"></i>
																		<span class="text_placeholder mm_ir-blind">최대 30자 입력</span>
																	</label>
																</div>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>디바이스 설정<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_check-list">
												<ul>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-set" data-check checked>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">PC</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-set" data-check checked>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">M WEB</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-set" data-check checked>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">M APP</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>발행 기간<i class="ico_required" title="필수입력"></i></b>
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
												<span class="text_tilde">~</span>
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
											<b>할인율/할인금액<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<div class="mm_form_mix-linked">
															<label class="mm_form-radio">
																<input type="radio" name="dev_radio-sale" data-radio="{ 'syncer': '.mm_syncer-dc-rate' }" checked>
																<b class="mm_block">
																	<i class="ico_form-radio"></i>
																	<span class="text_label">할인율</span>
																</b>
															</label>
															<div class="mm_syncer-dc-rate">
																<div class="mm_form-text T=xs">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text><i class="bg_text"></i>
																		<span class="text_placeholder">숫자만 입력</span>
																	</label>
																</div>
															</div>
														</div>
													</li>
													<li>
														<div class="mm_form_mix-linked">
															<label class="mm_form-radio">
																<input type="radio" name="dev_radio-sale" data-radio="{ 'syncer': '.mm_syncer-dc-price' }">
																<b class="mm_block">
																	<i class="ico_form-radio"></i>
																	<span class="text_label">할인금액</span>
																</b>
															</label>
															<div class="mm_syncer-dc-price">
																<div class="mm_form-text T=xs">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
																		<span class="text_placeholder">숫자만 입력</span>
																	</label>
																</div>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr class="mm_syncer-dc-rate">
										<th scope="row">
											<b>최대 할인 금액</b>
										</th>
										<td colspan="3">
											<div class="mm_form-text T=xs">
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
											<b>최저 금액 조건</b>
										</th>
										<td>
											<div class="mm_form-text T=xs">
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
											<b>최저 마진 조건</b>
										</th>
										<td>
											<div class="mm_form-text T=xs">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text><i class="bg_text"></i>
													<span class="text_placeholder">100.0</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>유효 기간<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked T=fit">
												<label class="mm_form-radio">
													<input type="radio" name="dev_radio-period" data-radio checked>
													<b class="mm_block">
														<i class="ico_form-radio"></i>
														<span class="text_label mm_ir-blind">선택</span>
													</b>
												</label>
												<p class="text_linked">
													발행일로부터
												</p>
												<div class="mm_form-text T=xs">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text maxlength="3"><i class="bg_text"></i>
														<span class="text_placeholder">숫자만 입력</span>
													</label>
												</div>
												<p class="text_linked">
													일간 사용 가능
												</p>
											</div>
											<div class="mm_form_mix-linked T=fit">
												<label class="mm_form-radio">
													<input type="radio" name="dev_radio-period" data-radio>
													<b class="mm_block">
														<i class="ico_form-radio"></i>
														<span class="text_label mm_ir-blind">선택</span>
													</b>
												</label>
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
													<span class="text_tilde">~</span>
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
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<!-- 유의사항 -->
						<div class="mm_note">
							<ul>
								<li>최대 할인 금액, 최저 마진 조건, 최저 금액 조건 <strong>입력 없이 등록/수정 시 0으로 자동 기입되며 해당 조건은 무제한으로 적용</strong>됩니다.</li>
							</ul>
						</div>
						<!-- // 유의사항 -->
					</div>
					<!-- // 자동발행쿠폰 수정 설정 -->

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