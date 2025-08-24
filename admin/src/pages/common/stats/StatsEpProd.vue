<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>EP 연동 상품 수 통계</b>
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
									<th scope="row" rowspan="2">
										<b>기간</b>
									</th>
									<td colspan="7">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-period" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">일자 별</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-period" data-radio="{ 'syncer': '.mm_syncer-period-category' }">
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">카테고리 별</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
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
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
										</div>
									</td>
								</tr>
								<tr class="mm_syncer-period-category">
									<th scope="row">
										<b>카테고리</b>
									</th>
									<td colspan="7">
										<div class="mm_select-list T=fit">
											<ul>
												<li>
													<div class="mm_form-select">
														<label>
															<select data-select>
																<option>1 DEPTH</option>
															</select>
															<b class="text_selected"></b>
															<i class="ico_form-select"></i>
														</label>
													</div>
												</li>
												<li>
													<div class="mm_form-select">
														<label>
															<select data-select>
																<option>2 DEPTH</option>
															</select>
															<b class="text_selected"></b>
															<i class="ico_form-select"></i>
														</label>
													</div>
												</li>
												<li>
													<div class="mm_form-select">
														<label>
															<select data-select>
																<option>3 DEPTH</option>
															</select>
															<b class="text_selected"></b>
															<i class="ico_form-select"></i>
														</label>
													</div>
												</li>
											</ul>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="mm_note">
							<ul>
								<li>전체 EP 파일을 생성 시 카운트한 상품 수 통계가 노출됩니다.</li>
								<li>실제 반영된 상품 수 및 판매가 되고 있는 상품 수 확인은 각 EP 파트너 사이트에서 확인해 주시기 바랍니다.</li>
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
						<!-- (D) 기간 - 일자 별 선택 후 검색 시 노출되는 리스트 입니다. -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
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
									<table>
										<thead>
											<tr>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														일자
													</div>
												</th>
												<th scope="col" colspan="7">
													<div class="mm_table-item">
														전체 EP 파일 생성시간
													</div>
												</th>
											</tr>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														01시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														10시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														12시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														14시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														16시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														18시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														20시
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														2023-01-25
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2023-01-24
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2023-01-23
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2023-01-14
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">200</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">200</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">200</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">199</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">199</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">199</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">199</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2023-01-13
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2023-01-12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
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
							</div>
							<!-- // 페이지네이션 -->
						</div>
						<!-- // 테이블영역 -->

						<!-- 테이블영역 -->
						<!-- (D) 기간 - 카테고리 별 선택 후 검색 시 노출되는 리스트 입니다. -->
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
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
									<table>
										<thead>
											<tr>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														일자
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														카테고리
													</div>
												</th>
												<!-- (D) 생성된 EP 파일 생성 시간 수에 맞게 colspan="" 값 변경이 필요합니다. -->
												<th scope="col" colspan="7">
													<div class="mm_table-item">
														전체 EP 파일 생성시간
													</div>
												</th>
											</tr>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														01시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														10시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														12시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														14시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														16시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														18시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														20시
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<!-- (D) 생성된 카테고리 수에 맞게 rowspan="" 값 변경이 필요합니다. -->
												<td rowspan="3">
													<div class="mm_table-item">
														2023-01-25
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														WOMEN &#62; PANTS &#62; Shorts
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														WOMEN &#62; PANTS &#62; Shorts
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														WOMEN &#62; PANTS &#62; Shorts
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">250</span>
													</div>
												</td>
											</tr>
											<tr>
												<td rowspan="3">
													<div class="mm_table-item">
														2023-01-24
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														WOMEN &#62; PANTS &#62; Shorts
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														WOMEN &#62; PANTS &#62; Shorts
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														WOMEN &#62; PANTS &#62; Shorts
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">200</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">200</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">200</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">199</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">199</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">199</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">199</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2023-01-13
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														WOMEN &#62; PANTS &#62; Shorts
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
											</tr>
											<tr>
												<td rowspan="2">
													<div class="mm_table-item">
														2023-01-12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														WOMEN &#62; PANTS &#62; Shorts
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														WOMEN &#62; PANTS &#62; Shorts
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
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
							</div>
							<!-- // 페이지네이션 -->
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