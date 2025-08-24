<template>
	<layout-popup>
		<template #title>
			<h1><b>배송 문의 입니다</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 폼 영역 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>문의 번호</b>
									</th>
									<td><p>1238</p></td>
									<th scope="row">
										<b>문의 유형</b>
									</th>
									<td><p>배송 &#62; 배송 확인</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>판매처</b>
									</th>
									<td colspan="3">
										<p>제휴사1</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>등록자</b>
									</th>
									<td><p>홍길동(abc123)</p></td>
									<th scope="row">
										<b>등록일자</b>
									</th>
									<td><p>2022-03-25</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>답변자</b>
									</th>
									<td>-</td>
									<th scope="row">
										<b>답변일시</b>
									</th>
									<td>-</td>
								</tr>
								<tr>
									<th scope="row">
										<b>주문번호</b>
									</th>
									<td colspan="3">
										<p>123456789</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>제휴사 주문번호</b>
									</th>
									<td colspan="3">
										<p>123456789</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>문의 상품</b>
									</th>
									<td colspan="3">
										<div class="mm_table_box">
											<div class="mm_table" data-table>
												<div class="mm_scroller">
													<table>
														<thead>
															<tr>
																<th scope="col">
																	<div class="mm_table-item">
																		상품코드
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		상품명
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		상품 옵션
																	</div>
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>
																	<div class="mm_table-item">
																		123
																	</div>
																</td>
																<td class="T=table-left">
																	<div class="mm_table-item">
																		<p class="T=linebreak">
																			<b>상품 A</b>
																		</p>
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		BK / 55
																	</div>
																</td>
															</tr>
															<tr>
																<td>
																	<div class="mm_table-item">
																		3454
																	</div>
																</td>
																<td class="T=table-left">
																	<div class="mm_table-item">
																		<p class="T=linebreak">
																			<b>상품 A</b>
																		</p>
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		RED / 55
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>이관 여부</b>
									</th>
									<td><p>관리자A(이관)</p></td>
									<th scope="row">
										<b>이관일자</b>
									</th>
									<td><p>2022-03-27</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>문의 제목</b>
									</th>
									<td colspan="3">
										<p>문의 제목입니다</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>문의 내용</b>
									</th>
									<td colspan="3">
										<div class="text_content">
											<p>
												배송을 한달째 못받고 있습니다.<br>
												<br>
												배송 확인드립니다.<br>
											</p>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>답변 내용</b>
									</th>
									<td colspan="3">
										<div class="text_content">
											<p>
												문의 답변입니다.<br>
												감사합니다.
											</p>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 폼 영역 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>