<template>
	<layout-popup>
		<template #title>
			<h1><b>제휴사이트 주문금액</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 테이블 영역 -->
					<div class="mm_table_box">
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
													제휴사이트
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													상품 수
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													판매 수량
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													총 판매가
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													구매 평균
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													최대금액
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													최소금액
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													고객 수
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
													자사몰
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">200</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">650</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">5360800</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">360800</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">360800</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">800</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">500</span>
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
													옥션
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">200</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">650</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">5360800</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">360800</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">360800</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">800</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">500</span>
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
													11st
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">200</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">650</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">3360800</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">360800</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">360800</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">800</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">64</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													4
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													G마켓
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">200</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">650</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">2360800</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">360800</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">360800</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">800</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">351</span>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->
					</div>
					<!-- // 테이블 영역 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>