<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>상품색상 설정</b>
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
					<!-- 테이블영역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<div class="mm_lside">
									<ul class="mm_table-status">
										<li>색상 수<b class="mm_text-secondary"><strong class="text_num">1234</strong>개</b></li>
									</ul>
								</div>
							</div>
							<div class="mm_table_box-unit">
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<!-- (D) '색상 추가' 버튼 클릭 시 색상 등록 영역을 추가합니다. -->
											<button type="button" class="mm_btn T=line T=secondary">
												<b>색상 추가</b>
											</button>
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
												<th scope="col">
													<div class="mm_table-item">
														No.
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														색상 명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														색상
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														사용 여부
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
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														갈색
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<b class="text_prod-color"><i class="bg_color" style="background:#8e562e"></i>#8E562E</b>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														사용
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<button type="button" class="mm_btn T=sm">
																	<b>수정</b>
																</button>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														빨강
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<b class="text_prod-color"><i class="bg_color" style="background:#e91818"></i>#E91818</b>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														사용
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<button type="button" class="mm_btn T=sm">
																	<b>수정</b>
																</button>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														3
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														연한 주황
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<b class="text_prod-color"><i class="bg_color" style="background:#f4aa24"></i>#F4AA24</b>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														사용
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<button type="button" class="mm_btn T=sm">
																	<b>수정</b>
																</button>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<!-- (D) '수정' 버튼 클릭시 노출되는 형태입니다. -->
											<tr>
												<td>
													<div class="mm_table-item">
														4
													</div>
												</td>
												<td data-editable="{ '_byte': 10 }">
													<div class="mm_table-item">
														<p class="text_editable" contenteditable>
															노란색
														</p>
														<span class="text_placeholder">최대 10자 입력</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_form-color" data-colorpicker>
															<input type="text" class="colorfield" value="#F2F325" readonly>
															<button type="button" class="btn_picker">
																<i class="bg_color" style="background:#F2F325"></i><b class="mm_ir-blind">색상</b>
															</button>
														</div>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_radio-list">
															<ul>
																<li>
																	<label class="mm_form-radio">
																		<input type="radio" name="dev_radio-use4" data-radio checked>
																		<b class="mm_block">
																			<i class="ico_form-radio"></i>
																			<span class="text_label">사용</span>
																		</b>
																	</label>
																</li>
																<li>
																	<label class="mm_form-radio">
																		<input type="radio" name="dev_radio-use4" data-radio>
																		<b class="mm_block">
																			<i class="ico_form-radio"></i>
																			<span class="text_label">미사용</span>
																		</b>
																	</label>
																</li>
															</ul>
														</div>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>취소</b>
																</button>
																<button type="button" class="mm_btn T=sm T=line T=secondary">
																	<b>저장</b>
																</button>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<!-- (D) '색상 추가' 버튼 클릭시 추가되는 형태입니다. -->
											<tr>
												<td>
													<div class="mm_table-item">
														5
													</div>
												</td>
												<td data-editable="{ '_byte': 10 }">
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">최대 10자 입력</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_form-color" data-colorpicker>
															<input type="text" class="colorfield" value="#FFFFFF" readonly>
															<button type="button" class="btn_picker">
																<i class="bg_color" style="background:#FFF"></i><b class="mm_ir-blind">색상</b>
															</button>
														</div>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_radio-list">
															<ul>
																<li>
																	<label class="mm_form-radio">
																		<input type="radio" name="dev_radio-use5" data-radio checked>
																		<b class="mm_block">
																			<i class="ico_form-radio"></i>
																			<span class="text_label">사용</span>
																		</b>
																	</label>
																</li>
																<li>
																	<label class="mm_form-radio">
																		<input type="radio" name="dev_radio-use5" data-radio>
																		<b class="mm_block">
																			<i class="ico_form-radio"></i>
																			<span class="text_label">미사용</span>
																		</b>
																	</label>
																</li>
															</ul>
														</div>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>취소</b>
																</button>
																<button type="button" class="mm_btn T=sm T=line T=secondary">
																	<b>저장</b>
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

							<!-- 테이블하단 -->
							<div class="mm_table_box-unit">
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<!-- (D) '색상 추가' 버튼 클릭 시 색상 등록 영역을 추가합니다. -->
											<button type="button" class="mm_btn T=line T=secondary">
												<b>색상 추가</b>
											</button>
										</div>
									</div>
								</div>
							</div>
							<!-- // 테이블하단 -->

							<!-- 유의사항 -->
							<div class="mm_note">
								<ul>
									<li>색상 설정 후 <strong>저장 버튼을 클릭하셔야 저장</strong>됩니다.(저장 버튼 미 클릭 시 설정된 내용은 저장되지 않습니다.)</li>
								</ul>
							</div>
							<!-- // 유의사항 -->
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