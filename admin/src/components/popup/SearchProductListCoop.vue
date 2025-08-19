<template>
	<layout-popup>
		<template #title>
			<h1><b>등록 상품</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 등록 상품 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<div class="mm_lside">
								<div class="mm_note">
									<p><i class="ico_image-show"></i> 아이콘 클릭 시 이미지가 노출됩니다.</p>
								</div>
							</div>
						</div>
						<div class="mm_table_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
											<i class="ico_sortable-edit"></i><b>순서편집</b>
										</button>
										<button type="button" class="mm_btn T=line">
											<b>선택 삭제</b>
										</button>
									</div>
								</div>
							</div>
							<div class="mm_rside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<a class="mm_btn T=line T=xload btn_excel" href="/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
									</div>
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
											<th class="col_check" scope="col">
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-sortable" data-check="{ '_type': 'check_all' }">
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">전체선택</span>
														</b>
													</label>
												</div>
											</th>
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
													공구 상태
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													공구 기간
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													카테고리
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
													셀러 코드
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
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-sortable" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
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
													진행 예정
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2023-08-01 ~ 2023-09-01
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													WOMEN &#62; PANTS &#62; Shorts
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
													123123123
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>상품 21</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러 21
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													1234
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">125000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">125000</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-sortable" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
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
													진행중
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2023-08-01 ~ 2023-09-01
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													WOMEN &#62; PANTS &#62; Shorts
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
													123123123
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>상품 21</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러 21
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													1234
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">125000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">125000</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-sortable" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													1
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													품절
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													마감
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2023-08-01 ~ 2023-09-01
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													WOMEN &#62; PANTS &#62; Shorts
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
													123123123
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>상품 21</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러 21
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													1234
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">125000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">125000</span>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->

						<!-- 테이블하단 -->
						<div class="mm_table_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
											<i class="ico_sortable-edit"></i><b>순서편집</b>
										</button>
										<button type="button" class="mm_btn T=line">
											<b>선택 삭제</b>
										</button>
									</div>
								</div>
							</div>
							<div class="mm_rside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<a class="mm_btn T=line T=xload btn_excel" href="/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
									</div>
								</div>
							</div>
						</div>
						<!-- // 테이블하단 -->
					</div>
					<!-- // 등록 상품 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>