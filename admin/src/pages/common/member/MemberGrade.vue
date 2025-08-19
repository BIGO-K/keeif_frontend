<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>회원등급</b>
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

					<!-- 등급 목록 -->
					<template v-if="_isNone === false">
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
								<div class="mm_rside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=xload btn_excel" href="/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
										</div>
									</div>
								</div>
							</div>

							<!-- 테이블 -->
							<div class="mm_table" data-table>
								<div class="mm_scroller">
									<table>
										<thead>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														등급 순서
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														<span>등급 이미지</span><button type="button" class="btn_preview-toggle" title="이미지 미리보기 켜기">
															<i class="ico_image-show"></i>
														</button>
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등급 색상
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등급명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등급업 조건(구매금액)
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등급업 조건(구매횟수)
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등급 회원수
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														관리
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														4
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
														<b class="text_prod-color"><i class="bg_color" style="background:#9b3da1"></i>#9B3DA1</b>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														VIP
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">500000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														4회 이상
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">31000</span>명
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<a class="mm_btn T=sm" href="grade/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
															</div>
														</div>
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
														<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
															<b>이미지보기</b>
															<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
														</a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<b class="text_prod-color"><i class="bg_color" style="background:#e19c03"></i>#E19C03</b>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														GOLD
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">400000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														4회 이상
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">231000</span>명
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<a class="mm_btn T=sm" href="grade/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
															</div>
														</div>
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
														<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
															<b>이미지보기</b>
															<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
														</a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<b class="text_prod-color"><i class="bg_color" style="background:#7cbacb"></i>#7CBACB</b>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														SILVER
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">300000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														4회 이상
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">731000</span>명
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<a class="mm_btn T=sm" href="grade/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
															</div>
														</div>
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
														<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
															<b>이미지보기</b>
															<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
														</a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<b class="text_prod-color"><i class="bg_color" style="background:#e68362"></i>#E68362</b>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														BRONZE
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">200000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														3회 이상
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">95000</span>명
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<a class="mm_btn T=sm" href="grade/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<!-- (D) 등록된 등급이 없을 경우 기본 등급만 노출합니다. -->
											<!-- 기본등급 -->
											<tr>
												<td>
													<div class="mm_table-item">
														0
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
														<b class="text_prod-color"><i class="bg_color" style="background:#4e8e71"></i>#4E8E71</b>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														FAMILY
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">100000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														0
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1911000</span>명
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<a class="mm_btn T=sm" href="grade/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<!-- // 기본등급 -->
										</tbody>
									</table>
								</div>
							</div>
							<!-- // 테이블 -->

							<!-- 테이블하단 -->
							<div class="mm_table_box-unit">
								<div class="mm_rside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=xload btn_excel" href="/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
										</div>
									</div>
								</div>
							</div>
							<!-- // 테이블하단 -->

							<!-- 안내문구 -->
							<div class="mm_note">
								<ul>
									<li>매월 1일 등급업이 자동 진행됩니다. (6개월간 회원이 구매한 금액, 구매 횟수를 충족한 등급으로 자동 등급업)</li>
									<li>회원이 1명이라도 존재하는 등급은 삭제가 불가합니다.</li>
									<li>등급 순서는 숫자가 커질수록 높은 등급입니다.</li>
								</ul>
							</div>
							<!-- // 안내문구 -->
						</div>
					</template>

					<template v-else>
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
												<th scope="col">
													<div class="mm_table-item">
														등급 순서
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														<span>등급 이미지</span><button type="button" class="btn_preview-toggle" title="이미지 미리보기 켜기">
															<i class="ico_image-show"></i>
														</button>
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등급 색상
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등급명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등급업 조건(구매금액)
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등급업 조건(구매횟수)
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등급 회원수
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														관리
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<!-- (D) 등록된 등급이 없을 경우 기본 등급만 노출합니다. -->
											<!-- 기본등급 -->
											<tr>
												<td>
													<div class="mm_table-item">
														0
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
														<b class="text_prod-color"><i class="bg_color" style="background:#4e8e71"></i>#4E8E71</b>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														FAMILY
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">100000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														0
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1911000</span>명
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<a class="mm_btn T=sm" href="grade/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<!-- // 기본등급 -->
										</tbody>
									</table>
								</div>
							</div>
							<!-- // 테이블 -->

							<!-- 테이블하단 -->
							<div class="mm_table_box-unit">
								<div class="mm_rside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=xload btn_excel" href="/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
										</div>
									</div>
								</div>
							</div>
							<!-- // 테이블하단 -->

							<!-- 안내문구 -->
							<div class="mm_note">
								<ul>
									<li>매월 1일 등급업이 자동 진행됩니다. (6개월간 회원이 구매한 금액, 구매 횟수를 충족한 등급으로 자동 등급업)</li>
									<li>회원이 1명이라도 존재하는 등급은 삭제가 불가합니다.</li>
									<li>등급 순서는 숫자가 커질수록 높은 등급입니다.</li>
								</ul>
							</div>
							<!-- // 안내문구 -->
						</div>
					</template>
					<!-- // 등급 목록 -->
				</div>
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';

	// 내용없음
	const _isNone = false;
</script>