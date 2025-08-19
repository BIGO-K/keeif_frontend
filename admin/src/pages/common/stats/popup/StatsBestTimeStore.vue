<template>
	<layout-popup>
		<template #title>
			<h1><b>판매처 리스트</b></h1>
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
													구분
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													수량
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													매출
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													고객수
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													자사몰
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">10</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">100000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">8</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													쿠팡
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">4</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">40000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">4</span>
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

				<!-- 현재 페이지 스크립트 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>