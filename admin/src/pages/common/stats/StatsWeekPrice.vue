<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>주간 매출 추이</b>
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
										<b>기준일</b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-period">
											<div class="mm_form-text T=calendar">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
													<span class="text_placeholder">기준일</span>
													<i class="ico_datepicker-calendar"></i>
												</label>
											</div>
										</div>
									</td>
									<th scope="row">
										<b>카테고리</b>
									</th>
									<td colspan="3">
										<div class="mm_form-select T=lg">
											<label>
												<select data-select>
													<option>전체</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
										<div class="mm_note">
											<ul>
												<li>셀러 등록/수정 시 설정한 매출/통계용 카테고리입니다.</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>주문 상태</b>
									</th>
									<td colspan="7">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-state" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">집계</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-state" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">주문</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-state" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">취소</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-state" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">반품</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>셀러</b>
									</th>
									<td colspan="7">
										<div class="mm_selected">
											<!-- (D) 검색 팝업에서 선택 적용 시 'ul' 영역을 노출합니다. -->
											<a class="mm_btn T=line" href="/search/seller-single" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 검색</b></a>
											<ul>
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
							</tbody>
						</table>
						<div class="mm_note">
							<ul>
								<li>기준일은 <strong>금일기준으로 과거 날짜</strong>만 선택 가능 합니다. (금일 선택 불가)</li>
							</ul>
						</div>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=lg T=tertiary btn_search">
									<b>검색</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 검색 -->

					<!-- 테이블영역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
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

							<div class="mm_table" data-table>
								<div class="mm_scroller">
									<!-- (D) 좌측고정 영역에는 colspan, rowspan을 사용할 수 없으며 th, td에 'S=table-fixed' 클래스를 추가합니다. -->
									<table>
										<thead>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														기간
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														월
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														화
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														수
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														목
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														금
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														토
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														주합계
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														일평균
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														평일 평균
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														주말 평균
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														2023-05-01 ~ 2023-05-07
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">20000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">20000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">34560</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">5000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">100000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">313010</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">44716</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">17912</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">111725</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2023-05-08 ~ 2023-05-14
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">20000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">20000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">34560</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">5000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">100000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">313010</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">44716</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">17912</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">111725</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2023-05-15 ~ 2023-05-21
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">20000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">20000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">34560</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">5000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">100000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">313010</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">44716</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">17912</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">111725</span>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>

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
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<div class="mm_table-none">
								<p>검색된 결과가 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 테이블영역 -->
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