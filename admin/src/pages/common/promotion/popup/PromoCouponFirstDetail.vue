<template>
	<layout-popup>
		<template #title>
			<h1><b>1차 쿠폰A</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 1차 쿠폰 상세 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>쿠폰명<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<p>1차 쿠폰 A</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>쿠폰 설명</b>
									</th>
									<td colspan="3">
										<p>15% 1차 쿠폰</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>사용 여부<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td><p>사용</p></td>
									<th scope="row">
										<b>사용 기간<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td><p>2021-04-12 ~ 2021-04-22</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>할인율/할인금액<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<p>15%</p>
									</td>
									<!-- <td><p><span class="text_price">60,000</span></p></td> -->
								</tr>
								<tr>
									<th scope="row">
										<b>업체 부담률<br>/부담금액<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td><p>15%</p></td>
									<!-- <td><p><span class="text_price">60,000</span></p></td> -->
									<th scope="row">
										<b>할인금액 중<br>업체 부담률<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td><p>50%</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>최대 할인 금액</b>
									</th>
									<td colspan="3">
										<p><span class="text_price">0</span></p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>최저 금액 조건</b>
									</th>
									<td><p><span class="text_price">1,500</span></p></td>
									<th scope="row">
										<b>최저 마진 조건</b>
									</th>
									<td><p>10%</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>쿠폰 적용 범위<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<p>셀러</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>쿠폰 적용 제외 범위</b>
									</th>
									<td colspan="3">
										<p>상품, 카테고리</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 1차 쿠폰 상세 -->

					<!-- (D) 쿠폰 적용 범위 목록 -->
					<!-- 셀러 설정 (쿠폰 적용) -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>셀러 설정 (쿠폰 적용)</b>
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
														No.
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러 코드
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														3
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러A
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
														10073_6076497
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러B
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러C
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
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>셀러 설정 (쿠폰 적용)</b>
								</h3>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>등록된 내용이 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 셀러 설정 (쿠폰 적용) -->

					<!-- 상품 설정 (쿠폰 적용) -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>상품 설정 (쿠폰 적용)</b>
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
														No.
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
														상품 번호
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러
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
														3
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>상품A</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														11111222221
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러3
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1560000</span>
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
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>상품B</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														111111
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러2
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
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>상품C</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														111111
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러1
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
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>상품 설정 (쿠폰 적용)</b>
								</h3>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>등록된 내용이 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 상품 설정 (쿠폰 적용) -->

					<!-- 카테고리 설정 (쿠폰 적용) -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>카테고리 설정 (쿠폰 적용)</b>
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
														No.
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														카테고리 명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														카테고리 코드
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														3
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														WOMEN &#62; PANTS &#62; Shorts
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
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
														WOMEN &#62; PANTS &#62; Shorts
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														WOMEN &#62; PANTS &#62; Shorts
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
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
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>카테고리 설정 (쿠폰 적용)</b>
								</h3>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>등록된 내용이 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 카테고리 설정 (쿠폰 적용) -->

					<!-- 브랜드 설정 (쿠폰 적용) -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>브랜드 설정 (쿠폰 적용)</b>
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
														No.
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														브랜드명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														브랜드 코드
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														3
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														나이키
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
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
														나이키
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														나이키
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
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
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>브랜드 설정 (쿠폰 적용)</b>
								</h3>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>등록된 내용이 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 브랜드 설정 (쿠폰 적용) -->

					<!-- (D) 쿠폰 적용 제외 범위 목록 -->
					<!-- 셀러 설정 (쿠폰 적용 제외) -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>셀러 설정 (쿠폰 적용 제외)</b>
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
														No.
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러 코드
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														3
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러A
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
														10073_6076497
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러B
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러C
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
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>셀러 설정 (쿠폰 적용 제외)</b>
								</h3>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>등록된 내용이 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 셀러 설정 (쿠폰 적용 제외) -->

					<!-- 상품 설정 (쿠폰 적용 제외) -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>상품 설정 (쿠폰 적용 제외)</b>
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
														No.
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
														상품 번호
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러
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
														3
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>상품A</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														11111222221
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러3
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1560000</span>
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
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>상품B</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														111111
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러2
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
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>상품C</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														111111
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러1
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
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>상품 설정 (쿠폰 적용 제외)</b>
								</h3>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>등록된 내용이 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 상품 설정 (쿠폰 적용 제외) -->

					<!-- 카테고리 설정 (쿠폰 적용 제외) -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>카테고리 설정 (쿠폰 적용 제외)</b>
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
														No.
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														카테고리 명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														카테고리 코드
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														3
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														WOMEN &#62; PANTS &#62; Shorts
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
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
														WOMEN &#62; PANTS &#62; Shorts
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														WOMEN &#62; PANTS &#62; Shorts
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
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
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>카테고리 설정 (쿠폰 적용 제외)</b>
								</h3>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>등록된 내용이 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 카테고리 설정 (쿠폰 적용 제외) -->

					<!-- 브랜드 설정 (쿠폰 적용 제외) -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>브랜드 설정 (쿠폰 적용 제외)</b>
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
														No.
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														브랜드명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														브랜드 코드
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														3
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														나이키
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
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
														나이키
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														나이키
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10073_6076497
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
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>브랜드 설정 (쿠폰 적용 제외)</b>
								</h3>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>등록된 내용이 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 브랜드 설정 (쿠폰 적용 제외) -->
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