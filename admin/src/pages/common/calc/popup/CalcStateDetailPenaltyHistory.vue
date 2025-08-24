<template>
	<layout-popup>
		<template #title>
			<h1><b>보정이력</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 최초 데이터 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h3 class="mm_heading">
								<b>최초 데이터</b>
							</h3>
						</div>
						<!-- // 테이블상단 -->

						<!-- 테이블 -->
						<div class="mm_table" data-table>
							<div class="mm_scroller" style="max-height:300px;">
								<table>
									<thead>
										<tr>
											<th scope="col">
												<div class="mm_table-item">
													부과 수수료
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													면책금액
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													<span class="text_price">3000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">3000</span>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->
					</div>
					<!-- // 최초 데이터 -->

					<!-- 보정 진행 이력 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>보정 진행 이력</b>
								</h3>
							</div>
							<!-- // 테이블상단 -->

							<!-- 테이블 -->
							<div class="mm_table" data-table>
								<div class="mm_scroller" style="max-height:300px;">
									<table>
										<thead>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														보정일시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														보정자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														부과 수수료
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														면책금액
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-03-11 12:12:12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004(홍길동)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">3000</span>
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-03-11 12:12:12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004(홍길동)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">3000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">3000</span>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<!-- // 테이블 -->

							<!-- 유의사항 -->
							<div class="mm_note">
								<ul>
									<li>보정 진행 시 수정되지 않은 이력은 하이픈(-) 표기로 노출됩니다.</li>
								</ul>
							</div>
							<!-- // 유의사항 -->
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>보정 진행 이력</b>
								</h3>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>등록된 내용이 없습니다.</p>
							</div>

							<!-- 유의사항 -->
							<div class="mm_note">
								<ul>
									<li>보정 진행 시 수정되지 않은 이력은 하이픈(-) 표기로 노출됩니다.</li>
								</ul>
							</div>
							<!-- // 유의사항 -->
						</div>
					</template>
					<!-- // 보정 진행 이력 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	// 내용없음
	const _isNone = false;
</script>