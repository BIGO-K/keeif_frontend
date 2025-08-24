<template>
	<layout-popup>
		<template #title>
			<h1><b>적용 범위 (카테고리)</b></h1>
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
													1 DEPTH
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													2 DEPTH
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													3 DEPTH
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													여성
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													모자
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													볼캡
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													여성
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													모자
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													볼캡
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													여성
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													모자
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													볼캡
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