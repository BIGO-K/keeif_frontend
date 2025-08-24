<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>월별 주문 추이</b>
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
										<b>주문연도</b>
									</th>
									<td colspan="3">
										<div class="mm_form-select T=xs">
											<label>
												<select data-select>
													<option>2022년</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
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

					<!-- 테이블영역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h4 class="mm_heading">
									<b>2022년</b>
								</h4>
								<div class="mm_rside">
									<div class="mm_form-select T=list">
										<label>
											<select data-select>
												<option>20개 보기</option>
												<option>40개 보기</option>
												<option>60개 보기</option>
												<option>80개 보기</option>
												<option>100개 보기</option>
											</select>
											<b class="text_selected"></b>
											<i class="ico_form-select"></i>
										</label>
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

							<div class="mm_table" data-table>
								<div class="mm_scroller">
									<!-- (D) 좌측고정 영역에는 colspan, rowspan을 사용할 수 없으며 th, td에 'S=table-fixed' 클래스를 추가합니다. -->
									<table>
										<thead>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														구분
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														매출코드
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														1월
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														2월
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														3월
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														4월
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														5월
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														6월
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														7월
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														8월
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														9월
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														10월
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														11월
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														12월
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														소계
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td rowspan="3">
													<div class="mm_table-item">
														자사
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														code 1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price mm_text-primary">10000</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														code 2
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price mm_text-primary">10000</span>
													</div>
												</td>
											</tr>
											<tr class="T=subtotal">
												<td>
													<div class="mm_table-item">
														소계
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
														<span class="text_price mm_text-primary">20000</span>
													</div>
												</td>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<td>
													<div class="mm_table-item">
														총 계
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
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
														<span class="text_price mm_text-primary">20000</span>
													</div>
												</td>
											</tr>
										</tfoot>
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
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h4 class="mm_heading">
									<b>2022년</b>
								</h4>
								<div class="mm_rside">
									<div class="mm_form-select T=list">
										<label>
											<select data-select>
												<option>20개 보기</option>
												<option>40개 보기</option>
												<option>60개 보기</option>
												<option>80개 보기</option>
												<option>100개 보기</option>
											</select>
											<b class="text_selected"></b>
											<i class="ico_form-select"></i>
										</label>
									</div>
								</div>
							</div>
							<!-- // 테이블상단 -->

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