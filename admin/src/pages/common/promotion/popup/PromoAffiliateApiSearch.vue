<template>
	<layout-popup>
		<template #title>
			<h1><b>상품 검색</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
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
													<option>셀러</option>
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

					<!-- 검색결과 -->
					<div class="mm_table_box">
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
													No.
												</div>
											</th>
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
													셀러
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
													31
												</div>
											</td>
											<td data-editable="{ '_byte': 30 }">
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder">최대 30자 입력</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													123123123
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>상품 21</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러 21
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">125000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">125000</span>
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
													30
												</div>
											</td>
											<td data-editable="{ '_byte': 30 }">
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder">최대 30자 입력</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													123123123
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>상품 21</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러 21
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">125000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">125000</span>
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
													29
												</div>
											</td>
											<td data-editable="{ '_byte': 30 }">
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder">최대 30자 입력</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													123123123
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>상품 21</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러 21
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">125000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">125000</span>
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
						</div>
						<!-- // 페이지네이션 -->
					</div>
					<!-- // 검색결과 -->

					<!-- 적용 제휴사 설정 -->
					<template v-if="_isNone === false">
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
					</template>

					<template v-else>
						<div class="mm_table_box">
							<div class="mm_table-none">
								<p>검색된 결과가 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 적용 제휴사 설정 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>추가하기</b>
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

	// 내용없음
	const _isNone = false;
</script>
