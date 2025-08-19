<template>
	<layout-popup>
		<template #title>
			<h1><b>등록 브랜드</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 등록 브랜드 -->
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
										<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
											<i class="ico_sortable-edit"></i><b>순서편집</b>
										</button>
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
														<input type="checkbox" name="dev_check-sortable" data-check="{ '_type': 'check_all' }">
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
													브랜드 코드
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													브랜드명(한글)
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													브랜드명(영문)
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-sortable" data-check>
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
													30000020
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													그래피커스
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													GRAPHYKERS
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-sortable" data-check>
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
													30000021
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													그래피커스2
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													GRAPHYKERS2
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
										<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
											<i class="ico_sortable-edit"></i><b>순서편집</b>
										</button>
										<button type="button" class="mm_btn T=line">
											<b>선택 삭제</b>
										</button>
									</div>
								</div>
							</div>
						</div>
						<!-- // 테이블하단 -->
					</div>
					<!-- // 등록 브랜드 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>
