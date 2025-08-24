<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>제휴 연동 현황</b>
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

					<!-- 검색 -->
					<div class="mm_search">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td><th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>셀러</b>
									</th>
									<td colspan="7">
										<div class="mm_selected">
											<!-- (D) 검색 팝업에서 선택 적용 시 'ul' 영역을 노출합니다. -->
											<a class="mm_btn T=line" href="/search/seller-multi" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 검색</b></a>
											<ul>
												<li>
													<b>셀러 A</b>
													<button type="button" class="btn_remove">
														<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
													</button>
												</li>
												<li>
													<b>셀러 A</b>
													<button type="button" class="btn_remove">
														<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
													</button>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>브랜드</b>
									</th>
									<td colspan="7">
										<div class="mm_selected">
											<!-- (D) 검색 팝업에서 선택 적용 시 'ul' 영역을 노출합니다. -->
											<a class="mm_btn T=line" href="../search/brand-multi" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>브랜드 검색</b></a>
											<ul>
												<li>
													<b>브랜드 A</b>
													<button type="button" class="btn_remove">
														<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
													</button>
												</li>
												<li>
													<b>브랜드 A</b>
													<button type="button" class="btn_remove">
														<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
													</button>
												</li>
											</ul>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=lg T=tertiary btn_search">
									<b>검색</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 검색 -->

					<div class="m_affiliate-state">
						<template v-if="_isNone === false">
							<!-- 제휴 연동 합계 -->
							<div class="mm_table_box">
								<!-- 테이블상단 -->
								<div class="mm_table_box-caption">
									<h3 class="mm_heading">
										<b>제휴 연동 합계</b>
									</h3>
								</div>
								<!-- // 테이블상단 -->

								<!-- 테이블 -->
								<div class="mm_table" data-table>
									<div class="mm_scroller">
										<table>
											<thead>
												<tr>
													<th scope="col" colspan="2">
														<div class="mm_table-item">
															쿠팡
														</div>
													</th>
													<th scope="col" colspan="2">
														<div class="mm_table-item">
															SSG
														</div>
													</th>
													<th scope="col" colspan="2">
														<div class="mm_table-item">
															GS
														</div>
													</th>
												</tr>
												<tr>
													<th scope="col">
														<div class="mm_table-item">
															연동률
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															연동상품
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															연동률
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															연동상품
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															연동률
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															연동상품
														</div>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div class="mm_table-item">
															78%
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															450/350
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															92%
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															60/55
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															88%
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															240/210
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<!-- // 테이블 -->
							</div>
							<!-- // 제휴 연동 합계 -->

							<!-- 제휴 연동 현황 -->
							<div class="mm_table_box">
								<!-- 테이블상단 -->
								<div class="mm_table_box-caption">
									<h3 class="mm_heading">
										<b>제휴 연동 현황</b>
									</h3>
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
													<th scope="col" rowspan="2">
														<div class="mm_table-item">
															셀러
														</div>
													</th>
													<th scope="col" rowspan="2">
														<div class="mm_table-item">
															브랜드
														</div>
													</th>
													<th scope="col" colspan="3">
														<div class="mm_table-item">
															쿠팡
														</div>
													</th>
													<th scope="col" colspan="3">
														<div class="mm_table-item">
															SSG
														</div>
													</th>
													<th scope="col" colspan="3">
														<div class="mm_table-item">
															GS
														</div>
													</th>
												</tr>
												<tr>
													<th scope="col">
														<div class="mm_table-item">
															연동률
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															연동상품
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															안전재고
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															연동률
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															연동상품
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															안전재고
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															연동률
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															연동상품
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															안전재고
														</div>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><div class="mm_table-item"></div></td>
													<td><div class="mm_table-item"></div></td>
													<td>
														<div class="mm_table-item">
															100%
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															100/100
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															-2
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															65%
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															120/103
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															-2
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															50%
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															10/5
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															-5
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="mm_table-item">
															셀러A-1
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															브랜드A
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															100%
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															100/100
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															-2
														</div>
													</td>
													<td><div class="mm_table-item"></div></td>
													<td><div class="mm_table-item"></div></td>
													<td><div class="mm_table-item"></div></td>
													<td>
														<div class="mm_table-item">
															90%
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															100/90
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															-5
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="mm_table-item">
															셀러A-2
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															브랜드B
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															98%
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															120/118
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															-1
														</div>
													</td>
													<td><div class="mm_table-item"></div></td>
													<td><div class="mm_table-item"></div></td>
													<td><div class="mm_table-item"></div></td>
													<td>
														<div class="mm_table-item">
															90%
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															100/90
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															-5
														</div>
													</td>
												</tr>
											</tbody>
											<tbody>
												<tr>
													<td><div class="mm_table-item"></div></td>
													<td><div class="mm_table-item"></div></td>
													<td>
														<div class="mm_table-item">
															100%
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															100/100
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															-2
														</div>
													</td>
													<td><div class="mm_table-item"></div></td>
													<td><div class="mm_table-item"></div></td>
													<td><div class="mm_table-item"></div></td>
													<td>
														<div class="mm_table-item">
															90%
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															100/90
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															-5
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="mm_table-item">
															셀러B-1
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															브랜드A
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															100%
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															100/100
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															-2
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															83%
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															30/25
														</div>
													</td>
													<td><div class="mm_table-item"></div></td>
													<td>
														<div class="mm_table-item">
															90%
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															90/100
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															-5
														</div>
													</td>
												</tr>
											</tbody>
											<tbody>
												<tr>
													<td><div class="mm_table-item"></div></td>
													<td><div class="mm_table-item"></div></td>
													<td>
														<div class="mm_table-item">
															100%
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															100/100
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															-2
														</div>
													</td>
													<td><div class="mm_table-item"></div></td>
													<td><div class="mm_table-item"></div></td>
													<td><div class="mm_table-item"></div></td>
													<td>
														<div class="mm_table-item">
															90%
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															100/90
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															-5
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="mm_table-item">
															셀러C-1
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															브랜드B
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															100%
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															100/100
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															-2
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															83%
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															30/25
														</div>
													</td>
													<td><div class="mm_table-item"></div></td>
													<td><div class="mm_table-item"></div></td>
													<td><div class="mm_table-item"></div></td>
													<td><div class="mm_table-item"></div></td>
												</tr>
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

								<!-- 유의사항 -->
								<div class="mm_note">
									<ul>
										<li>YYYY-MM-DD 01:00에 집계된 데이터입니다.</li>
										<li>연동상품의 경우 앞에 있는 숫자는 SCM에 등록되어 있는 상품수이고, 뒤에 있는 숫자는 제휴사에 연동된 상품수 입니다.</li>
									</ul>
								</div>
								<!-- // 유의사항 -->
							</div>
							<!-- // 제휴 연동 현황 -->
						</template>

						<template v-else>
							<div class="mm_table_box">
								<div class="mm_table-none">
									<p>검색된 결과가 없습니다.</p>
								</div>
							</div>
						</template>
					</div>
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';

	// 내용없음
	const _isNone = false;
</script>