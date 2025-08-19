<template>
	<layout-popup>
		<template #title>
			<h1><b>적용 범위 (상품)</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 테이블영역 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<div class="mm_lside">
								<div class="mm_note">
									<p><i class="ico_image-show"></i> 아이콘 클릭 시 이미지가 노출됩니다.</p>
								</div>
							</div>
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
													No.
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													진열 상태
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													<span>상품 이미지</span><button type="button" class="btn_preview-toggle" title="이미지 미리보기 켜기">
														<i class="ico_image-show"></i>
													</button>
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
													셀러
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													셀러 코드
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													정가
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													판매가
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													1차 쿠폰가
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
													진열
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
														<b>이미지보기</b>
														<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
													</a>
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
													10073_6076497
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러1
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													111111
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">50000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">45000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">45000</span>
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
													진열
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
														<b>이미지보기</b>
														<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
													</a>
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
													10073_6076497
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러1
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													111111
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">50000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">45000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">45000</span>
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
													진열
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
														<b>이미지보기</b>
														<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
													</a>
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
													10073_6076497
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러1
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													111111
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">50000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">45000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">45000</span>
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