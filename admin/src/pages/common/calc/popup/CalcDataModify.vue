<template>
	<layout-popup>
		<template #title>
			<h1><b>정산 반영 데이터 일괄 수정</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-calc-data">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 검색 -->
					<div class="mm_search">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td><th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>변경 대상</b>
									</th>
									<td colspan="7">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-search" data-radio="{ 'syncer': '.mm_syncer-search-prod' }" checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">상품</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-search" data-radio="{ 'syncer': '.mm_syncer-search-seller' }">
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">셀러</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr class="mm_syncer-search-prod">
									<th scope="row">
										<b>상품 검색</b>
									</th>
									<td colspan="7">
										<div class="mm_selected">
											<!-- (D) 검색 팝업에서 선택 적용 시 'ul' 영역을 노출합니다. -->
											<a class="mm_btn T=line" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 검색</b></a>
											<ul>
												<li>
													<b>상품123123123</b>
													<button type="button" class="btn_remove">
														<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
													</button>
												</li>
												<li>
													<b>상품123123123</b>
													<button type="button" class="btn_remove">
														<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
													</button>
												</li>
												<li>
													<b>상품123123123</b>
													<button type="button" class="btn_remove">
														<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
													</button>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr class="mm_syncer-search-seller">
									<th scope="row">
										<b>셀러 검색</b>
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
										<b>변경 데이터 <br>추출 기간</b>
									</th>
									<td colspan="7">
										<div class="mm_form_mix-period">
											<div class="mm_form-text T=calendar">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
													<span class="text_placeholder">시작일</span>
													<i class="ico_datepicker-calendar"></i>
												</label>
											</div>
											<b class="text_tilde">~</b>
											<div class="mm_form-text T=calendar">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
													<span class="text_placeholder">종료일</span>
													<i class="ico_datepicker-calendar"></i>
												</label>
											</div>
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

					<template v-if="_isNone === false">
						<!-- 일괄 적용 영역 -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>데이터 일괄 적용</b>
								</h3>
							</div>
							<div class="mm_table_box-unit">
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<button type="button" class="mm_btn">
												<b>일괄 적용</b>
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
												<th scope="col">
													<div class="mm_table-item">
														변경 마진율
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														변경 1차 쿠폰<br>자사 부담률
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														변경 1차 쿠폰<br>셀러 부담률
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														변경 다운로드 쿠폰<br>자사 부담률
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														변경 다운로드 쿠폰<br>셀러 부담률
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														변경 다운로드 쿠폰<br>셀러 부담률
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
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
											<button type="button" class="mm_btn">
												<b>일괄 적용</b>
											</button>
										</div>
									</div>
								</div>
							</div>
							<!-- // 테이블하단 -->

							<!-- 유의사항 -->
							<div class="mm_note">
								<ul>
									<li><strong>마감 확정된 데이터는 변경할 수 없습니다.</strong></li>
									<li>이미 발생된 주문 건에 대한 데이터만 변경 가능합니다.</li>
									<li>설정한 변경 데이터 추출 기간에 포함된 모든 주문의 데이터가 <strong>일괄 변경 처리</strong>됩니다.</li>
									<li><strong>최대 100개 항목</strong>까지 수정이 가능합니다.</li>
									<li>자사 부담률과 셀러 부담률은 <strong>100% 기준</strong>으로 분배하여 입력해주세요.(분배된 기준으로 재계산)</li>
								</ul>
							</div>
							<!-- // 유의사항 -->
						</div>
						<!-- // 일괄 적용 영역 -->

						<!-- (D) 상품 설정 검색시 노출 형태  -->
						<!-- 검색결과 - 상품 -->
						<div class="mm_table_box">
							<!-- 테이블 -->
							<div class="mm_table" data-table>
								<div class="mm_scroller">
									<table>
										<thead>
											<tr>
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
														변경 마진율
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														변경 1차 쿠폰<br>자사 부담률
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														변경 1차 쿠폰<br>셀러 부담률
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														변경 다운로드 쿠폰<br>자사 부담률
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														변경 다운로드 쿠폰<br>셀러 부담률
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														123123123
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>[밸리걸] 레터링 티셔츠 120670</b>
														</p>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														123123123
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>[밸리걸] 레터링 티셔츠 120670</b>
														</p>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<!-- // 테이블 -->
						</div>
						<!-- // 검색결과 - 상품 -->

						<!-- (D) 셀러 설정 검색시 노출 형태  -->
						<!-- 검색결과 - 셀러 -->
						<div class="mm_table_box">
							<!-- 테이블 -->
							<div class="mm_table" data-table>
								<div class="mm_scroller">
									<table>
										<thead>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														셀러 코드
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														변경 마진율
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														변경 1차 쿠폰<br>자사 부담률
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														변경 1차 쿠폰<br>셀러 부담률
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														변경 다운로드 쿠폰<br>자사 부담률
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														변경 다운로드 쿠폰<br>셀러 부담률
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														123123123
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러 A
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														123123123
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러 A
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
												<td data-editable>
													<div class="mm_table-item">
														<p class="text_editable" contenteditable></p>
														<span class="text_placeholder">숫자만 입력</span>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<!-- // 테이블 -->
						</div>
						<!-- // 검색결과 - 셀러 -->

						<!-- 최하단버튼 -->
						<div class="mm_foot">
							<div class="mm_btn_box">
								<div class="mm_inline">
									<button type="button" class="mm_btn T=xl T=tertiary">
										<b>수정하기</b>
									</button>
								</div>
							</div>
						</div>
						<!-- // 최하단버튼 -->
					</template>

					<template v-else>
						<div class="mm_table_box">
							<div class="mm_table-none">
								<p>검색된 결과가 없습니다.</p>
							</div>
						</div>
					</template>
				</div>
				<!-- // 본문 내용 -->

				<!-- 현재 페이지 스크립트 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	// 내용없음
	const _isNone = false;
</script>