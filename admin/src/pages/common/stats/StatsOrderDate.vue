<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>브랜드 일자별 주문</b>
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
										<b>주문 기간</b>
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
								<h3 class="mm_heading">
									<b>셀러 A(132312)</b>
								</h3>
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
														주문일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														판매 수량
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														총 판매가
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														구매 평균
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														최대 금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														최소 금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														고객 수
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														객단가
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														구매 품목 수
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-03-18 (수)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">6125</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">32002580</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">122000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">5060000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">36000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">3521</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">26800</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">347</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-03-17 (화)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">21522000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">122000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">5060000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">36000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">3521</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">26800</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">347</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-03-16 (월)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">512</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1560000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">122000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">5060000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">36000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">3521</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">26800</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">347</span>
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
												<td>
													<div class="mm_table-item">
														<span class="text_num">4305</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">9248504200</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">645580</span>
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
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

							<!-- 페이지네이션 -->
							<!-- (D) 현재 페이지의 메뉴에 'S=page-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
							<div class="mm_pagination">
								<div class="mm_inline">
									<ol>
										<li><a class="S=page-on" href="#" title="선택됨"><b>1</b></a></li>
										<li><a href="#"><b>2</b></a></li>
										<li><a href="#"><b>3</b></a></li>
										<li><a href="#"><b>4</b></a></li>
										<li><a href="#"><b>5</b></a></li>
									</ol>
									<button type="button" class="btn_control-first" onclick="mm.link('')" disabled>
										<i class="ico_page-first"></i><b class="mm_ir-blind">처음</b>
									</button>
									<button type="button" class="btn_control-prev" onclick="mm.link('')" disabled>
										<i class="ico_page-prev"></i><b class="mm_ir-blind">이전</b>
									</button>
									<button type="button" class="btn_control-next" onclick="mm.link('')">
										<i class="ico_page-next"></i><b class="mm_ir-blind">다음</b>
									</button>
									<button type="button" class="btn_control-last" onclick="mm.link('')">
										<i class="ico_page-last"></i><b class="mm_ir-blind">마지막</b>
									</button>
								</div>
								<div class="mm_pagination-jump">
									<div class="mm_form_mix-linked">
										<div class="mm_form-text">
											<label>
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder">숫자</span>
											</label>
										</div>
										<button type="button" class="btn_jump">
											<b class="mm_ir-blind">이동</b><i class="ico_page-jump"></i>
										</button>
										<p class="text_linked">
											of 10<strong>(1,125 items)</strong>
										</p>
									</div>
								</div>
							</div>
							<!-- // 페이지네이션 -->
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>셀러 A(132312)</b>
								</h3>
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