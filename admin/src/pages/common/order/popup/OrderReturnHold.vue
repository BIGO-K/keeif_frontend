<template>
	<layout-popup>
		<template #title>
			<h1><b>반품 보류</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 상품 정보 -->
					<div class="mm_table_box">
						<!-- 테이블 -->
						<div class="mm_table" data-table>
							<div class="mm_scroller">
								<table>
									<thead>
										<tr>
											<th scope="col">
												<div class="mm_table-item">
													반품 주문번호
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													반품 신청일시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													주문 상태
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													셀러
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													상품명
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													상품 코드
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													상품 옵션
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													수량
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													202205070004
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-05-07 19:09:09
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													반품 회수 완료
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러A
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>[밸리걸] 레터링 티셔츠 120670</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													123
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													BK / 55
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													1
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													202205070004
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-05-07 19:09:09
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													반품 회수 완료
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러B
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>[밸리걸] 레터링 티셔츠 120670</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													456
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													BK / 66
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													1
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													202205070004
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-05-07 19:09:09
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													반품 회수 완료
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러C
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>[밸리걸] 레터링 티셔츠 120670</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													789
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													WH / 55
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													1
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->
					</div>
					<!-- // 상품 정보 -->

					<!-- 보류 사유 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>보류 사유<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 20 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 20자 입력</span>
											</label>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 보류 사유 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>변경하기</b>
								</button>
							</div>
						</div>
					</div>
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>