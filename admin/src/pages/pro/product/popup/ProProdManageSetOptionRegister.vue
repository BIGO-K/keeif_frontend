<template>
	<layout-popup>
		<template #title>
			<h1><b>세트 옵션 설정</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-setoption-register">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 테이블영역 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h3 class="mm_heading">
								<b>등록 옵션</b>
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
													옵션
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													옵션가
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													바코드
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
													밀크 / 1BOX
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">5000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													A12943890123
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													600
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
													밀크 / 1BOX
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">5000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													A12943890123
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													600
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
													밀크 / 1BOX
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">5000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													A12943890123
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													600
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
													밀크 / 1BOX
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">5000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													A12943890123
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													600
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->
					</div>
					<!-- // 테이블영역 -->

					<button type="button" class="mm_btn T=xl T=tertiary btn_add">
						<b>옵션 조합</b><i class="ico_add"></i>
					</button>
					<div class="mm_table_box">
						<div class="mm_table_box-caption">
							<h3 class="mm_heading">
								<b>세트 옵션</b>
							</h3>
						</div>
						<div class="mm_table" data-table>
							<div class="mm_scroller">
								<table>
									<colgroup>
										<col style="width: 40%">
										<col style="width: 40%">
										<col style="width: 20%">
									</colgroup>
									<thead>
										<tr>
											<th scope="col">
												<div class="mm_table-item">
													세트 옵션명1
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													세트 옵션명2
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													세트 옵션 포장 수량
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td data-editable>
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder mm_ir-blind">세트 옵션명1</span>
												</div>
											</td>
											<td data-editable>
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder mm_ir-blind">세트 옵션명1</span>
												</div>
											</td>
											<td data-editable>
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder mm_ir-blind">세트 옵션 포장 수량</span>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>

					<!-- 테이블영역 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<button type="button" class="mm_btn T=line">
											<b>선택 삭제</b>
										</button>
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
											<th class="col_check" scope="col">
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-setoption" data-check="{ '_type': 'check_all' }">
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">전체선택</span>
														</b>
													</label>
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													옵션
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													옵션가
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													바코드
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
														<input type="checkbox" name="dev_check-setoption" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													밀크 / 1BOX
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">5000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													A12943890123
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													600
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-setoption" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													밀크 / 1BOX
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">5000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													A12943890123
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													600
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-setoption" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													밀크 / 1BOX
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">5000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													A12943890123
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													600
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-setoption" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													밀크 / 1BOX
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">5000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													A12943890123
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													600
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->

						<!-- 테이블 하단 -->
						<div class="mm_table_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<button type="button" class="mm_btn T=line">
											<b>선택 삭제</b>
										</button>
									</div>
								</div>
							</div>
						</div>
						<!-- // 테이블 하단 -->
					</div>
					<!-- // 테이블영역 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
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
</script>