<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>스팟성 테마관</b>
						</h2>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xs T=round">
									<i class="ico_plus"></i><b>즐겨찾기 추가</b>
								</button>
								<a class="mm_btn T=xs T=round" href="" target="_blank" title="새 창 열림"><i class="ico_newtab"></i><b>새창보기</b></a>
							</div>
						</div>
					</div>

					<!-- 유의사항 -->
					<div class="mm_note">
						<ul>
							<li>사용 및 노출 상태의 스팟성 테마관은 <strong>개수 제한 없이 GNB에 모두 노출</strong>됩니다.</li>
							<li>테마관명에 입력된 정보가 쇼핑몰 GNB 영역에 리스트 순서대로 노출됩니다.</li>
							<li>예약 상태인 테마관 중 노출 하루 전인 테마관은 노출 중인 테마관 목록으로 이동되어 순서 변경이 가능합니다</li>
							<li>노출 시작은 노출 기간에 설정한 시작일의 AM 00시에 프론트에 노출되며, 종료는 노출 기간에 설정한 종료일 다음날의 AM00시에 프론트에 미노출 됩니다.</li>
						</ul>
					</div>
					<!-- // 유의사항 -->

					<!-- 노출 중 스팟성 테마관 영역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>노출 중 스팟성 테마관</b>
								</h3>
							</div>
							<div class="mm_table_box-unit">
								<div class="mm_lside">
									<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
										<i class="ico_sortable-edit"></i><b>순서 변경</b>
									</button>
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
														No.
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														테마관명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														노출 상태
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														노출 기간
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														사용 여부
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등록일시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등록자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														수정일시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														수정자
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
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														테마관1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														노출
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-12-30 ~ 2023-01-02
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														사용
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-12-30 11:12:14
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														amdin(최고관리자)
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="spot/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
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
														테마관2
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														노출
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2023-01-02 ~ 2023-01-30
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														사용
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-12-29 11:12:14
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														amdin(최고관리자)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-12-30 14:12:14
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														amdin(최고관리자)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="spot/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
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
														테마관3
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														노출
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2023-03-01 ~ 2023-03-02
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														사용
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-12-29 10:12:14
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														amdin(최고관리자)
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="spot/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														4
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														테마관4
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														노출
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2023-01-01 ~ 2023-02-28
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														사용
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-12-28 17:12:14
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														amdin(최고관리자)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-12-29 10:12:14
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														amdin(최고관리자)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="spot/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
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
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>노출 중 스팟성 테마관</b>
								</h3>
							</div>
							<!-- // 테이블상단 -->
							<div class="mm_table-none">
								<p>등록된 내용이 없습니다</p>
							</div>
						</div>
					</template>
					<!-- // 노출 중 스팟성 테마관 영역 -->

					<!-- 스팟성 테마관 리스트 영역 -->
					<div class="mm_section">
						<h3 class="mm_heading">
							<b>스팟성 테마관 리스트</b>
						</h3>
						<!-- 검색 -->
						<div class="mm_search">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td><th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>검색</b>
										</th>
										<td colspan="7">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text="{ '_byte': 5 }"><i class="bg_text"></i>
													<span class="text_placeholder">최대 5자 입력</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>기간</b>
										</th>
										<td colspan="7">
											<div class="mm_form_mix-period">
												<div class="mm_form-select T=xs">
													<label>
														<select data-select>
															<option>등록일시</option>
														</select>
														<b class="text_selected"></b>
														<i class="ico_form-select"></i>
													</label>
												</div>
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
															<option>오늘</option>
															<option>최근 3일</option>
															<option>최근 1주일</option>
															<option selected>최근 1개월</option>
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
											<b>노출 상태</b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-exposure" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">전체</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-exposure" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">예약</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-exposure" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">노출</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-exposure" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">노출 종료</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
										<th scope="row">
											<b>사용 여부</b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-using" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">전체</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-using" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">사용</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-using" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">미사용</span>
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

						<!-- 테이블 영역 -->
						<template v-if="_isNone === false">
							<div class="mm_table_box">
								<!-- 테이블상단 -->
								<div class="mm_table_box-caption">
									<div class="mm_lside">
										<a class="mm_btn T=line T=secondary btn_register" href="spot/register" data-href="{ '_type': 'link' }"><b>스팟성 테마관 등록</b><i class="ico_register"></i></a>
										<ul class="mm_table-status">
											<li>테마관 수<b class="mm_text-secondary"><strong class="text_num">99</strong>개</b></li>
										</ul>
									</div>
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

								<!-- 테이블 -->
								<div class="mm_table" data-table>
									<div class="mm_scroller">
										<table>
											<thead>
												<tr>
													<th scope="col">
														<div class="mm_table-item">
															No.
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															테마관명
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															노출 상태
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															노출 기간
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															사용 여부
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															등록일시
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															등록자
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															수정일시
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															수정자
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
															99
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															테마관10
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															노출
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-01-05 ~ 2023-02-28
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															미사용
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-12-31 11:12:14
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															amdin(최고관리자)
														</div>
													</td>
													<td><div class="mm_table-item"></div></td>
													<td><div class="mm_table-item"></div></td>
													<td>
														<div class="mm_table-item">
															<div class="mm_btn_box">
																<div class="mm_inline">
																	<button type="button" class="mm_btn T=sm T=line">
																		<b>삭제</b>
																	</button>
																	<a class="mm_btn T=sm" href="spot/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
																</div>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="mm_table-item">
															98
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															테마관9
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															노출 종료
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2023-01-02 ~ 2023-01-03
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															사용
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-12-30 17:12:14
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															amdin(최고관리자)
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-12-30 14:12:14
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															amdin(최고관리자)
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<div class="mm_btn_box">
																<div class="mm_inline">
																	<button type="button" class="mm_btn T=sm T=line">
																		<b>삭제</b>
																	</button>
																	<a class="mm_btn T=sm" href="spot/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
																</div>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="mm_table-item">
															97
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															테마관8
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															예약
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2023-05-05 ~ 2023-05-08
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															사용
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-12-30 10:12:14
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															amdin(최고관리자)
														</div>
													</td>
													<td><div class="mm_table-item"></div></td>
													<td><div class="mm_table-item"></div></td>
													<td>
														<div class="mm_table-item">
															<div class="mm_btn_box">
																<div class="mm_inline">
																	<button type="button" class="mm_btn T=sm T=line">
																		<b>삭제</b>
																	</button>
																	<a class="mm_btn T=sm" href="spot/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
																</div>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div class="mm_table-item">
															96
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															테마관7
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															예약
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2023-09-25 ~ 2023-10-01
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															미사용
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-12-29 11:12:14
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															amdin(최고관리자)
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															2022-12-29 10:12:14
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															amdin(최고관리자)
														</div>
													</td>
													<td>
														<div class="mm_table-item">
															<div class="mm_btn_box">
																<div class="mm_inline">
																	<button type="button" class="mm_btn T=sm T=line">
																		<b>삭제</b>
																	</button>
																	<a class="mm_btn T=sm" href="spot/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
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

								<!-- 유의사항 -->
								<div class="mm_note">
									<ul>
										<li>등록되어 있는 <strong>전체 스팟성 테마관을 확인</strong> 하실 수 있습니다.</li>
									</ul>
								</div>
								<!-- // 유의사항 -->
							</div>
						</template>

						<template v-else>
							<div class="mm_table_box">
								<!-- 테이블상단 -->
								<div class="mm_table_box-caption">
									<div class="mm_lside">
										<a class="mm_btn T=line T=secondary btn_register" href="spot/register" data-href="{ '_type': 'link' }"><b>스팟성 테마관 등록</b><i class="ico_register"></i></a>
										<ul class="mm_table-status">
											<li>테마관 수<b class="mm_text-secondary"><strong class="text_num">0</strong>개</b></li>
										</ul>
									</div>
								</div>
								<!-- // 테이블상단 -->
								<div class="mm_table-none">
									<p>검색된 결과가 없습니다</p>
								</div>
								<!-- 유의사항 -->
								<div class="mm_note">
									<ul>
										<li>등록되어 있는 <strong>전체 스팟성 테마관을 확인</strong> 하실 수 있습니다.</li>
									</ul>
								</div>
								<!-- // 유의사항 -->
							</div>
						</template>
						<!-- // 테이블 영역 -->
					</div>
					<!-- // 스팟성 테마관 리스트 영역 -->
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