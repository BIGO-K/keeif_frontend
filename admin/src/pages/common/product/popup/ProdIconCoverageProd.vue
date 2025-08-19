<template>
	<layout-popup>
		<template #title>
			<h1><b>적용 범위 (상품)</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
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
													브랜드
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
													1
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
													나이키
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">120000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">25000</span>
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
													2
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2020
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
													셀러B
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													나이키
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">20000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">10000</span>
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
													3
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2019
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
													셀러C
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													나이키
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">120000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">25000</span>
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

						<!-- 테이블하단 -->
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
						<!-- // 테이블하단 -->
					</div>
					<!-- // 테이블영역 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>