<template>
	<layout-popup>
		<template #title>
			<h1><b>변경 이력</b></h1>
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
														발생일시
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
												<th scope="col">
													<div class="mm_table-item">
														수정 전 내용
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														수정 후 내용
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-04-17 12:22:36
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														옵션
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														옵션: BK / 95 / 10
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														옵션: WH / 100 / 10
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-04-17 12:22:36
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														seller A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														판매가, 배송정책
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														판매가: 6,000원 <br>배송정책: 배송정책 A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														판매가: 5,000원 <br>배송정책: 배송정책 B
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-04-17 12:22:36
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														자사몰 리스트 이미지 미리보기, 검색어
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														자사몰 리스트 이미지 미리보기: 자동 등록, 1000129628_detail_047.jpg <br>검색어: 슈펫
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														자사몰 리스트 이미지 미리보기: 자동 등록, 1000129628_detail_033.jpg <br>검색어: PG5UA
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-04-17 12:22:36
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														상세 설명
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														상세 설명
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														상세 설명
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-04-17 12:22:36
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														카테고리
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														카테고리: MEN &#62; PANTS &#62; SHORTS
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-04-17 12:22:36
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														옵션
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														옵션: BK / 95 / 10 <br>검색어: 슈펫
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														옵션: WH / 100 / 10
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