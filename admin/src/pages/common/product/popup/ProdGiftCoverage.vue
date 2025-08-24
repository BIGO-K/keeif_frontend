<template>
	<layout-popup>
		<template #title>
			<h1><b>적용 범위 (상품)</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>지급 기준</b>
									</th>
									<td><p><span class="text_price">100000</span> 이상 구매 시 지급</p></td>
									<th scope="row">
										<b>지급 관리</b>
									</th>
									<td><p>최초 1회만 지급</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>지급 조건</b>
									</th>
									<td colspan="3">
										<p>특정 상품 10,000원 이상 구매 시, 최초 1회에 한하여 로고 티셔츠 지급</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<!-- (D) 적용 범위가 상품일 경우 노출합니다. -->
					<!-- 적용 범위 (상품) -->
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
													상품 코드
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													상품명
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													셀러
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													브랜드
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
											<td>
												<div class="mm_table-item">
													2021
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
													셀러A
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													브랜드A
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">125000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">120000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">25000</span>
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
													미진열
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
											<td>
												<div class="mm_table-item">
													2020
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
													셀러B
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													브랜드B
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">25000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">20000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">10000</span>
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
											<td>
												<div class="mm_table-item">
													2019
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
													셀러C
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													브랜드C
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">125000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">120000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">25000</span>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 적용 범위 (상품) -->
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