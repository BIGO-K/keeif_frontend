<template>
	<layout-popup>
		<template #title>
			<h1><b>상품정보고시 항목 확인</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-infocheck">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 검색 -->
					<div class="mm_search">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td><th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>분류 설정</b>
									</th>
									<td colspan="7">
										<div class="mm_form-select">
											<label>
												<select data-select>
													<option>의류</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=lg T=tertiary btn_search">
									<b>조회</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 검색 -->

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
													상품정보고시 분류
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													상품정보고시 코드
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													상품정보고시 내용
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													의류
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													01
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<ol>
														<li>1. 제품 소재(섬유의 조성 또는 혼용율을 백분율로 표시, 기능성인 경우 성적서 또는 허가서)</li>
														<li>2. 색상</li>
														<li>3. 치수</li>
														<li>4. 제조자, 수입품의 경우 수입자를 함께 표기(병행 수입의 경우 병행 수입 여부로 대체 가능)</li>
														<li>5. 제조국</li>
														<li>6. A/S 책임자와 전화번호</li>
													</ol>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													의류
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													02
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<ol>
														<li>1. 제품 소재(섬유의 조성 또는 혼용율을 백분율로 표시, 기능성인 경우 성적서 또는 허가서)</li>
														<li>2. 색상</li>
														<li>3. 치수</li>
														<li>4. 제조자, 수입품의 경우 수입자를 함께 표기(병행 수입의 경우 병행 수입 여부로 대체 가능)</li>
														<li>5. 제조국</li>
														<li>6. A/S 책임자와 전화번호</li>
													</ol>
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