<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>관리자</b>
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
										<b>검색</b>
									</th>
									<td colspan="7">
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option>관리자명</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
										<div class="mm_form-textarea">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<textarea class="textfield" data-text></textarea><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">검색어를 입력해 주세요.</span>
											</label>
										</div>
										<div class="mm_note">
											<ul>
												<li><strong>줄바꿈</strong>으로 구분하여 다중 검색 가능 (최대 100줄)</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>근무 상태</b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-work" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-work" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">재직</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-work" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">휴직</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-work" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">퇴사</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
									<th scope="row">
										<b>등록일자</b>
									</th>
									<td colspan="3">
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
														<option selected>전체</option>
														<option>오늘</option>
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
							</tbody>
						</table>
						<div class="mm_note">
							<ul>
								<li>키워드로 검색할 경우 설정한 기간과 관계없이 검색이 진행됩니다.</li>
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

					<!-- 테이블 영역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<div class="mm_lside">
									<a class="mm_btn T=line T=secondary btn_register" href="./admin/register" data-href="{ '_type': 'link' }"><b>관리자 등록하기</b><i class="ico_register"></i></a>
									<ul class="mm_table-status">
										<li>관리자 수<b class="mm_text-secondary"><strong class="text_num">1234</strong></b></li>
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
							<div class="mm_table_box-unit">
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<button type="button" class="mm_btn T=line">
												<b>선택 삭제</b>
											</button>
											<button type="button" class="mm_btn">
												<b>재직 처리</b>
											</button>
											<button type="button" class="mm_btn">
												<b>휴직 처리</b>
											</button>
											<button type="button" class="mm_btn">
												<b>퇴사 처리</b>
											</button>
										</div>
									</div>
								</div>
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
														관리자명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														근무 상태
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														부서
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														아이디
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														접근 권한
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등록일시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														수정일시
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
														21
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자 A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														재직
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														웹디자인팀
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b class="mm_text-ellipsis T=2line">웹디자인팀 접근 권한</b>
														</p>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-03-20 13:22:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-03-20 13:22:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="./admin/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
																<button type="button" class="mm_btn T=sm T=line T=ligh" onclick="mm.bom.confirm('해당 관리자의 비밀번호를 초기화하시겠습니까?', sampleCallback);">
																	<b>비밀번호 초기화</b>
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
														20
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														재직
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														영업부_언더/키즈
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b class="mm_text-ellipsis T=2line">웹디자인팀 접근 권한</b>
														</p>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-03-20 13:22:00
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="./admin/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
																<button type="button" class="mm_btn T=sm T=line T=ligh" onclick="mm.bom.confirm('해당 관리자의 비밀번호를 초기화하시겠습니까?', sampleCallback);">
																	<b>비밀번호 초기화</b>
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
														19
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														휴직
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														외부_카카오정산
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b class="mm_text-ellipsis T=2line">웹디자인팀 접근 권한</b>
														</p>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-03-20 13:22:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-03-20 13:22:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="./admin/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
																<button type="button" class="mm_btn T=sm T=line T=ligh" onclick="mm.bom.confirm('해당 관리자의 비밀번호를 초기화하시겠습니까?', sampleCallback);">
																	<b>비밀번호 초기화</b>
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
														18
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														퇴사
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														기획팀
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b class="mm_text-ellipsis T=2line">웹디자인팀 접근 권한</b>
														</p>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-03-20 13:22:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-03-20 13:22:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="./admin/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
																<button type="button" class="mm_btn T=sm T=line T=ligh" onclick="mm.bom.confirm('해당 관리자의 비밀번호를 초기화하시겠습니까?', sampleCallback);">
																	<b>비밀번호 초기화</b>
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
											<button type="button" class="mm_btn T=line">
												<b>선택 삭제</b>
											</button>
											<button type="button" class="mm_btn">
												<b>재직 처리</b>
											</button>
											<button type="button" class="mm_btn">
												<b>휴직 처리</b>
											</button>
											<button type="button" class="mm_btn">
												<b>퇴사 처리</b>
											</button>
										</div>
									</div>
								</div>
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
								<div class="mm_lside">
									<a class="mm_btn T=line T=secondary btn_register" href="/mall/permission/admin/register" data-href="{ '_type': 'link' }"><b>관리자 등록하기</b><i class="ico_register"></i></a>
									<ul class="mm_table-status">
										<li>관리자 수<b class="mm_text-secondary"><strong class="text_num">0</strong></b></li>
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

							<div class="mm_table-none">
								<p>검색된 결과가 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 테이블 영역 -->
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