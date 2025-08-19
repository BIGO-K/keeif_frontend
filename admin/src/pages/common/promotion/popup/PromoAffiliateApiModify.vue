<template>
	<layout-popup>
		<template #title>
			<h1><b>예외 항목 수정</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 예외 항목 수정 -->
					<div class="mm_table_box">
						<!-- 테이블 -->
						<div class="mm_table" data-table>
							<div class="mm_scroller">
								<table>
									<thead>
										<tr>
											<th scope="col">
												<div class="mm_table-item">
													예외 사유
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
													판매가
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													1차 쿠폰가[셀러 부담]
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													셀러
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													할인율
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													예외 기간
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td data-editable="{ '_byte': 30 }">
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder">최대 30자 입력</span>
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
													1234143241
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">42312</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">42312</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러 A
												</div>
											</td>
											<td data-editable>
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder">최대 100.0</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
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
														<b class="text_tilde">~</b>
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
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td data-editable="{ '_byte': 30 }">
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder">최대 30자 입력</span>
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
													1234143241
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">42312</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">42312</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러 A
												</div>
											</td>
											<td data-editable>
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder">최대 100.0</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
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
														<b class="text_tilde">~</b>
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
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td data-editable="{ '_byte': 30 }">
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder">최대 30자 입력</span>
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
													1234143241
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">42312</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">42312</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러 A
												</div>
											</td>
											<td data-editable>
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder">최대 100.0</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
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
														<b class="text_tilde">~</b>
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
					<!-- // 예외 항목 수정 -->

					<!-- 적용 제휴사 설정 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>적용 제휴사 설정</b>
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
											<b>적용 제휴사</b>
										</th>
										<td colspan="3">
											<div class="mm_check-list">
												<ul>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-affiliate" data-check="{ '_type': 'check_all' }">
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">전체</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-affiliate" data-check>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">제휴사 1</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-affiliate" data-check>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">제휴사 2</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-affiliate" data-check>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">제휴사 3</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-affiliate" data-check>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">제휴사 4</span>
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
					</div>
					<!-- // 적용 제휴사 설정 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
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
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>
