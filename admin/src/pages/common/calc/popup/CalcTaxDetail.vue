<template>
	<layout-popup>
		<template #title>
			<h1><b>월별 상세 내역</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 월별 상세 내역 -->
					<div class="mm_table_box">
						<!-- 테이블 -->
						<div class="mm_table" data-table>
							<div class="mm_scroller">
								<table>
									<thead>
										<tr>
											<th scope="col" rowspan="2">
												<div class="mm_table-item">
													기간
												</div>
											</th>
											<th scope="col" colspan="2">
												<div class="mm_table-item">
													과세/면세 구분
												</div>
											</th>
											<th scope="col" colspan="4">
												<div class="mm_table-item">
													상세 내역
												</div>
											</th>
										</tr>
										<tr>
											<th scope="col">
												<div class="mm_table-item">
													과세 매출금액
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													면세 매출금액
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													현금 외 결제수단
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													현금영수증(소득공제)
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													현금영수증(지출증빙)
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													적립금
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													2022-10-22
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">1000000</span>원
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													2022-10-22
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">1000000</span>원
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													2022-10-22
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">1000000</span>원
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													2022-10-22
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">1000000</span>원
												</div>
											</td>
										</tr>
									</tbody>
									<tfoot>
										<tr>
											<td>
												<div class="mm_table-item">
													총 계
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">1000000</span>원
												</div>
											</td>
										</tr>
									</tfoot>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->
					</div>
					<!-- // 월별 상세 내역 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>