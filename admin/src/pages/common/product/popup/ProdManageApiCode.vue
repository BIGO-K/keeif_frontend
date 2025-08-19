<template>
	<layout-popup>
		<template #title>
			<h1><b>제휴 상품 코드</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-api-prodcode">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 테이블영역 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h3 class="mm_heading">
								<b>상품명 A</b>
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
													연동 제휴사
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													상품 코드
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													쿠팡
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													123123
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													11번가
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													234234
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													티몬
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													125456
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													지마켓
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													567125
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->
						<div class="mm_note">
							<ul>
								<li>
									<p>상품 연동 해지한 제휴사의 경우 해당 제휴사에 상품 정보가 존재하고 있으면 제휴 상품 코드 정보는 노출됩니다.</p>
								</li>
							</ul>
						</div>
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