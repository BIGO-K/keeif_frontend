<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>랭킹</b>
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

					<!-- 유의사항 -->
					<div class="mm_note">
						<ul>
							<li>랭킹 수동 설정 시 해당 페이지의  <strong>순위 등락, 일간/주간/월간 탭, 구매/찜/VIEW 개수, 집계 일자 정보</strong>는 일괄 제거됩니다.</li>
							<li>랭킹 수동 상품은 카테고리별 <strong>최대 100개</strong>까지 설정 가능합니다. (1위~100위 상품)</li>
							<li>랭킹 브랜드는 <strong>최대 100개</strong>까지 설정 가능합니다. (1위~100위 브랜드)</li>
							<li>변경 및 적용되는 정보는 즉시 반영이 아닌 일 배치를 통해 <strong>다음날 적용</strong>됩니다.</li>
							<li>순서 편집시 변경 내용은 <strong>[순서 편집 적용]</strong> 버튼을 클릭해야 반영됩니다.</li>
						</ul>
					</div>
					<!-- // 유의사항 -->

					<!-- 탭메뉴 -->
					<div class="mm_tab_menu">
						<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
						<ul>
							<li><a href="ranking/item" data-href="{ '_type': 'link' }"><b>아이템 랭킹</b></a></li>
							<li><a href="ranking/brand" data-href="{ '_type': 'link' }"><b>브랜드 랭킹</b></a></li>
							<li><a class="S=tab-on" href="ranking/view" data-href="{ '_type': 'link' }" title="선택됨"><b>VIEW 랭킹</b></a></li>
							<li><a href="ranking/like" data-href="{ '_type': 'link' }"><b>찜 랭킹</b></a></li>
						</ul>
					</div>
					<!-- // 탭메뉴 -->

					<!-- 랭킹 수동/자동 설정 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<div class="mm_rside">
								<a class="mm_btn T=line btn_help" href="/display/ranking/help" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>도움말</b><i class="ico_help"></i></a>
							</div>
						</div>
						<!-- // 폼 상단 -->

						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>랭킹 수동/자동 설정</b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-set" data-radio="{ 'syncer': '.mm_syncer-ranking-self' }" checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">수동</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-set" data-radio="{ 'syncer': '.mm_syncer-ranking-auto' }">
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">자동</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- // 랭킹 수동/자동 설정 -->

					<!-- 랭킹 상품 설정 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>랭킹 상품 설정</b>
							</h3>
						</div>
						<!-- // 폼 상단 -->

						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>랭킹 카테고리</b>
										</th>
										<td colspan="3">
											<div class="mm_syncer-ranking-self">
												<div class="mm_form-select T=sm">
													<label>
														<select data-select>
															<option>ALL</option>
														</select>
														<b class="text_selected"></b>
														<i class="ico_form-select"></i>
													</label>
												</div>
											</div>
											<div class="mm_syncer-ranking-auto">
												<div class="mm_note">
													<p class="mm_text-primary">
														모든 카테고리의 상품이 자동 모드로 변경됩니다.
													</p>
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="mm_syncer-ranking-self">
						<!-- 테이블영역 -->
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
									<div class="mm_lside">
										<div class="mm_btn_box">
											<div class="mm_inline">
												<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
													<i class="ico_sortable-edit"></i><b>순서편집</b>
												</button>
												<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
												<button type="button" class="mm_btn T=line">
													<b>선택 삭제</b>
												</button>
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
																<input type="checkbox" name="dev_check-option" data-check="{ '_type': 'check_all' }">
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
															<label class="mm_form-check">
																<input type="checkbox" name="dev_check-option" data-check>
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
															DEPTH1 &#62; DEPTH2 &#62; DEPTH3
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
															898_12555
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
															898_12555
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
													<td>
														<div class="mm_table-item">
															<div class="mm_btn_box">
																<div class="mm_inline">
																	<button type="button" class="mm_btn T=sm T=line">
																		<b>삭제</b>
																	</button>
																</div>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="mm_table-item">
															<label class="mm_form-check">
																<input type="checkbox" name="dev_check-option" data-check>
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
															DEPTH1 &#62; DEPTH2 &#62; DEPTH3
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
															898_12555
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
															898_12555
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
													<td>
														<div class="mm_table-item">
															<div class="mm_btn_box">
																<div class="mm_inline">
																	<button type="button" class="mm_btn T=sm T=line">
																		<b>삭제</b>
																	</button>
																</div>
															</div>
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
												<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
												<button type="button" class="mm_btn T=line">
													<b>선택 삭제</b>
												</button>
											</div>
										</div>
									</div>
								</div>
								<!-- // 테이블하단 -->
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
									<div class="mm_lside">
										<div class="mm_btn_box">
											<div class="mm_inline">
												<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
											</div>
										</div>
									</div>
								</div>
								<!-- // 테이블상단 -->

								<div class="mm_table-none">
									<p>등록된 내용이 없습니다.</p>
								</div>

								<!-- 테이블하단 -->
								<div class="mm_table_box-unit">
									<div class="mm_lside">
										<div class="mm_btn_box">
											<div class="mm_inline">
												<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
											</div>
										</div>
									</div>
								</div>
								<!-- // 테이블하단 -->
							</div>
						</template>
						<!-- // 테이블영역 -->
					</div>
					<!-- // 랭킹 상품 설정 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>저장하기</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 최하단버튼 -->
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