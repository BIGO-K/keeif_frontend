<template>
	<layout-popup>
		<template #title>
			<h1><b>수정 이력</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 테이블영역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블 -->
							<div class="mm_table" data-table>
								<div class="mm_scroller">
									<table>
										<thead>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														변경일시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														변경자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														변경 항목
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-02-21 12:07:12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														본인
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														휴대폰 번호 변경
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-01-21 12:07:12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														abc123(정유미)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														이메일 주소 변경
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-01-20 12:07:12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														본인
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														마케팅 수신여부 변경
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-01-15 12:07:12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														kiki222(홍길동)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														마케팅 수신여부 변경
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-01-14 12:07:12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														본인
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														휴대폰 번호 변경
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-01-14 12:07:12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														본인
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														휴대폰 번호 변경
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-01-14 12:07:12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														본인
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														휴대폰 번호 변경
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-01-14 12:07:12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														본인
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														주소 변경
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<!-- // 테이블 -->
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<div class="mm_table-none">
								<p>등록된 내용이 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 테이블영역 -->
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