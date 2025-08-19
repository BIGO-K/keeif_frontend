<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>래플 등록</b>
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

					<!-- 래플 등록 -->
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
												<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 50자 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>응모 가능 디바이스 설정<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_check-list">
											<ul>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-set" data-check="{ '_type': 'check_all' }" checked>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-set" data-check>
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
										<b>당첨자 수<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text T=xs">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder">숫자만 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>노출 여부<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td>
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-exposure" data-radio checked>
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
															<span class="text_label">미노출</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
									<th scope="row">
										<b>임직원 추첨 여부</b>
									</th>
									<td>
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-executives" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">미추첨</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-executives" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">추첨</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>응모 기간<i class="ico_required" title="필수입력"></i></b>
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
										<b>발표일시<i class="ico_required" title="필수입력"></i></b>
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
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>당첨자 구매 기간<i class="ico_required" title="필수입력"></i></b>
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
										<b>래플 상품<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_table_box">
											<!-- 테이블상단 -->
											<div class="mm_table_box-caption">
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
											<!-- // 테이블상단 -->
											<!-- 테이블 -->
											<div class="mm_table" data-table>
												<div class="mm_scroller">
													<table>
														<thead>
															<tr>
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
																		셀러
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
																		관리
																	</div>
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
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
											<!-- // 테이블 -->
										</div>

										<!-- 내용 없음 -->
										<!--
											<div class="mm_table_box">
											<div class="mm_table_box-caption">
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
											</div>
										-->
										<!-- // 내용 없음 -->
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 래플 등록 -->

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