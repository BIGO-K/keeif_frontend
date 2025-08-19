<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>매출코드별 실적 현황</b>
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
										<b>기간</b>
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
											<div class="mm_form-select T=xs">
												<label>
													<select data-select>
														<option selected>오늘</option>
														<option>최근 3일</option>
														<option>최근 1주일</option>
														<option>최근 1개월</option>
														<option>최근 3개월</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
										</div>
									</td>
								</tr>
								<tr>
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
									<th scope="row">
										<b>주문 상태</b>
									</th>
									<td colspan="3">
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
											<!--
												<ul>
												<li>
												<b>셀러 A</b>
												<button type="button" class="btn_remove"><i class="ico_remove"></i><b class="mm_ir-blind">삭제</b></button>
												</li>
												</ul>
											-->
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
														상세 구분
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														제휴사
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														상세 제휴
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														매출 실적
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														전체 점유율
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														전년 실적
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														신장율
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														마진율
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td rowspan="8">
													<div class="mm_table-item">
														자체
													</div>
												</td>
												<td rowspan="4">
													<div class="mm_table-item">
														자체
													</div>
												</td>
												<td rowspan="4">
													<div class="mm_table-item">
														자체
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														본사
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/stats/inflow/sheet" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">242400376</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2.74%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">316272105</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														-23.36%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10.11%
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														mb_push
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/stats/inflow/sheet" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">0</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2.74%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">316272105</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														-23.36%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10.11%
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														mobileapp A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/stats/inflow/sheet" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">242400376</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2.74%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">316272105</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														-23.36%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10.11%
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
														<a href="/stats/inflow/sheet" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">242400376</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2.74%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">316272105</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														-23.36%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10.11%
													</div>
												</td>
											</tr>
											<tr>
												<td rowspan="3">
													<div class="mm_table-item">
														바로가기
													</div>
												</td>
												<td rowspan="3">
													<div class="mm_table-item">
														바로가기
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														naver
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/stats/inflow/sheet" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">242400376</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2.74%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">316272105</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														-23.36%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10.11%
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														daum
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/stats/inflow/sheet" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">242400376</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2.74%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">316272105</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														-23.36%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10.11%
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
														<a href="/stats/inflow/sheet" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">242400376</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2.74%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">316272105</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														-23.36%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10.11%
													</div>
												</td>
											</tr>
											<tr class="T=subtotal">
												<td>
													<div class="mm_table-item">
														소계
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														<a href="/stats/inflow/sheet" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="text_price">242400376</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2.74%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">316272105</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														-23.36%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10.11%
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
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">242400376</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2.74%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">316272105</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														-23.36%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10.11%
													</div>
												</td>
											</tr>
										</tfoot>
									</table>
								</div>
							</div>
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