<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>탑배너 관리</b>
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
										<b>제목</b>
									</th>
									<td colspan="7">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 30 }"><i class="bg_text"></i>
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
											<div class="mm_form-select T=xs">
												<label>
													<select data-select>
														<option>등록일시</option>
														<option>노출 시작일</option>
														<option>노출 종료일</option>
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
														<input type="radio" name="dev_radio-exposure" data-radio>
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
														<input type="radio" name="dev_radio-exposure" data-radio checked>
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

					<!-- 테이블영역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<div class="mm_lside">
									<a class="mm_btn T=line T=secondary btn_register" href="top-banner/register" data-href="{ '_type': 'link' }"><b>탑배너 등록하기</b><i class="ico_register"></i></a>
								</div>
							</div>
							<!-- // 테이블상단 -->

							<!-- 테이블 -->
							<div class="mm_table" data-table>
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
													제목
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
													수정일시
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
													55
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													7월 여름 휴가
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													예약
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2021-07-01 ~ 2021-07-31
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													사용
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2021-06-10 08:11:29
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2021-06-10 08:11:29
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													mmonstar(홍길동)
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													mmonstar(홍길동)
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<button type="button" class="mm_btn T=sm T=line">
																<b>삭제</b>
															</button>
															<a class="mm_btn T=sm" href="top-banner/modify" data-href="{ '_type': 'link' }">수정</a>
														</div>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													54
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													6월 택배 파업
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													노출
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2021-06-01 ~ 2021-06-30
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													사용
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2020-05-01 12:11:31
												</div>
											</td>
											<td><div class="mm_table-item"></div></td>
											<td>
												<div class="mm_table-item">
													mmonstar(홍길동)
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
															<a class="mm_btn T=sm" href="top-banner/modify" data-href="{ '_type': 'link' }">수정</a>
														</div>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													55
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													2월 명절
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													노출 종료
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2021-02-01 ~ 2021-02-28
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													사용
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2020-01-01 12:11:34
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2020-01-05 12:11:34
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													mmonstar(홍길동)
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													mmonstar(홍길동)
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<button type="button" class="mm_btn T=sm T=line">
																<b>삭제</b>
															</button>
															<a class="mm_btn T=sm" href="top-banner/modify" data-href="{ '_type': 'link' }">수정</a>
														</div>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
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
												<span class="text_placeholder">000</span>
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
									<a class="mm_btn T=line T=secondary btn_register" href="top-banner/register" data-href="{ '_type': 'link' }"><b>탑배너 등록하기</b><i class="ico_register"></i></a>
								</div>
							</div>
							<!-- // 테이블상단 -->
							<div class="mm_table-none">
								<p>검색된 결과가 없습니다</p>
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