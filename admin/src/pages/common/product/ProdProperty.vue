<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>상품 속성</b>
						</h2>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xs T=round">
									<b>즐겨찾기 추가</b><i class="ico_plus"></i>
								</button>
								<a class="mm_btn T=xs T=round" href="" target="_blank" title="새 창 열림"><b>새창보기</b><i class="ico_newtab"></i></a>
							</div>
						</div>
					</div>
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
											<td>
												<div class="mm_table-item">
													<a href="/product/property/detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>의류</b></a>
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
													<a href="/product/property/detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>구두/신발</b></a>
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
													<a href="/product/property/detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>가방</b></a>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													40
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="/product/property/detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>기타 재화</b></a>
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
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>