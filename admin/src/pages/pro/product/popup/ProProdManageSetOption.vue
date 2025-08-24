<template>
	<layout-popup>
		<template #title>
			<h1><b>세트 옵션 확인</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-setoption">
				<!-- 본문 내용 -->
				<div class="mm_container">
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
											<td>
												<div class="mm_table-item">
													밀크 + 초코
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													1box + 1box
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													10
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
						<!-- 테이블 -->
						<div class="mm_table" data-table>
							<div class="mm_scroller">
								<table>
									<thead>
										<tr>
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
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>