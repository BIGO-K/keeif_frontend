<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>셀러 공지</b>
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
													<option selected>공지제목</option>
													<option>공지내용</option>
													<option>등록자</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">검색어를 입력해 주세요.</span>
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
										<b>분류</b>
									</th>
									<td colspan="7">
										<div class="mm_check-list">
											<ul>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-sort" data-check checked>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">일반</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-sort" data-check checked>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">정산</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-sort" data-check checked>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">시스템</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="mm_note">
							<ul>
								<li>기간 검색은 등록일자에 대한 검색이며, 최대 1년 단위로 검색하시기 바랍니다.</li>
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
							<div class="mm_table_box-caption">
								<div class="mm_lside">
									<a class="mm_btn T=line T=secondary btn_register" href="notice/register" data-href="{ '_type': 'link' }"><b>공지사항 등록하기</b><i class="ico_register"></i></a>
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
														분류
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														제목
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등록일자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														수정일자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														노출일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등록자
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
														<span class="mm_text-secondary">중요</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														일반
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/seller/notice/detail" data-href="{ '_type': 'link' }"><b>일반 문의 관련 공지사항입니다.</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-01-01
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-01-01
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-01-01
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자 A(홍길동)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자 A(홍길동)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="notice/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														<span class="mm_text-secondary">중요</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														일반
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/seller/notice/detail" data-href="{ '_type': 'link' }"><b>일반 문의 관련 공지사항입니다.</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-01-01
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														2022-01-01
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자 A(홍길동)
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
																<a class="mm_btn T=sm" href="notice/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														20
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														정산
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/seller/notice/detail" data-href="{ '_type': 'link' }"><b>[긴급] 정산 변경에 따른 공자사항입니다.</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-01
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														2020-03-10
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자 A(홍길동)
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
																<a class="mm_btn T=sm" href="notice/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														19
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														시스템
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/seller/notice/detail" data-href="{ '_type': 'link' }"><b>2022년 5월 30일 시스템 정기점검 안내</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-01
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-02
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-04-01
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자 A(홍길동)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자 B(김철수)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="notice/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														18
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														정산
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/seller/notice/detail" data-href="{ '_type': 'link' }"><b>정산 처리 오류에 대한 공지입니다.</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-02-15
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														2022-02-28
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자 A(홍길동)
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
																<a class="mm_btn T=sm" href="notice/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														17
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														시스템
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/seller/notice/detail" data-href="{ '_type': 'link' }"><b>시스템 오류에 대한 공지입니다.</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-02-02
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-02-05
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-02-02
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자 C(고길동)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자 C(고길동)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="notice/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														16
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														일반
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/seller/notice/detail" data-href="{ '_type': 'link' }"><b>셀러 공지사항 셀러 공지사항 셀러 공지사항 셀러 공지사항 셀러 공지사항 셀러 공지사항 셀러 공지사항</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-01-01
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-01-01
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-01-01
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자 B(김철수)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자 C(고길동)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="notice/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
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
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<div class="mm_lside">
									<a class="mm_btn T=line T=secondary btn_register" href="notice/register" data-href="{ '_type': 'link' }"><b>공지사항 등록하기</b><i class="ico_register"></i></a>
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