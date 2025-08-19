<template>
	<layout-popup>
		<template #title>
			<h1><b>의류</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-prodinfo">
				<!-- 본문 내용 -->
				<div class="mm_container">
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
													No.
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													상품정보고시
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
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>제품 소재(섬유의 조성 또는 혼용율을 백분율로 표시, 기능성인 경우 성적서 또는 허가서)</b>
													</p>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													2
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>색상</b>
													</p>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													3
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>치수</b>
													</p>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													4
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>제조자, 수입품의 경우 수입자를 함께 표기(병행 수입의 경우 병행 수입 여부로 대체 가능)</b>
													</p>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													5
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>제조국</b>
													</p>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													6
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>세탁 방법 및 취급 시 주의사항</b>
													</p>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													7
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>제조연월</b>
													</p>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													8
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>품질보증기준</b>
													</p>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													9
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>A/S 책임자와 전화번호</b>
													</p>
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