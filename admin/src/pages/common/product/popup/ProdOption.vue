<template>
	<layout-popup>
		<template #title>
			<h1><b>상품 옵션/총 재고</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-prodoption">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 테이블영역 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h3 class="mm_heading">
								<b>[밸리걸] 레터링 티셔츠 120670</b>
							</h3>
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
													옵션 1
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													옵션 2
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													옵션 3
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													재고
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													옵션가
												</div>
											</th>
											<!-- (D) 추가 옵션가는 공구상품에만 노출됩니다. -->
											<th scope="col">
												<div class="mm_table-item">
													추가 옵션가
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													최종 옵션가
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													BK
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													55
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													파우치
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">0</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">5000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">5000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">10000</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													BK
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													66
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													파우치
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">0</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">5000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">5000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">10000</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													WH
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													55
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													파우치
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">111</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">5000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">5000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">10000</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													WH
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													66
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													파우치
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">999</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">5000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">5000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">10000</span>
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