<template>
	<layout-popup>
		<template #title>
			<h1><b>적용 범위 (브랜드)</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
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
													브랜드 코드
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													브랜드명 [한글]
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													브랜드명 [영문]
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
													000001
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													내셔널지오그래픽
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													National Geographic
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
													000002
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													엔에프엘
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													NFL
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
													000003
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													메종 마르지엘라
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													Maison Marigela
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