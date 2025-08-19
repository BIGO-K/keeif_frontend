<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>이메일/SMS 발송</b>
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

					<!-- 유의사항 -->
					<div class="mm_note">
						<ul>
							<li>전체 회원 이메일 발송, 전체 회원 SMS 발송은 회원을 검색 결과와는 무관하게 전체 회원 대상으로 이메일 또는 SMS 발송을 진행합니다.</li>
							<li>이메일 / SMS는 발송 시 회원에게 순차적으로 발송되어 이메일 / SMS를 수신 받는 고객들의 수신 시간이 상이할 수 있습니다.</li>
						</ul>
					</div>
					<!-- // 유의사항 -->

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
													<option>회원명</option>
													<option>휴대폰 번호</option>
													<option>이메일</option>
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
										<b>기간</b>
									</th>
									<td colspan="7">
										<div class="mm_form_mix-period">
											<div class="mm_form-select T=xs">
												<label>
													<select data-select>
														<option>가입일</option>
														<option>최근접속일</option>
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
														<option>전체</option>
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
								<tr>
									<th scope="row">
										<b>등급</b>
									</th>
									<td colspan="7">
										<div class="mm_check-list">
											<ul>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-grade" data-check="{ '_type': 'check_all' }" checked>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-grade" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">WELCOME</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-grade" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">FAMILY</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-grade" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">VIP</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-grade" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">VVIP</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>회원가입 유형</b>
									</th>
									<td colspan="7">
										<div class="mm_check-list">
											<ul>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-join" data-check="{ '_type': 'check_all' }" checked>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-join" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">일반회원</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-join" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">네이버 로그인</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-join" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">카카오 로그인</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-join" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">애플 로그인</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>마케팅 수신동의 여부</b>
									</th>
									<td colspan="7">
										<div class="mm_check-list">
											<ul>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-agree" data-check checked>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">이메일 수신동의</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-agree" data-check checked>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">SMS 수신동의</span>
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
									<ul class="mm_table-status">
										<li>회원 수<b class="mm_text-secondary"><strong class="text_num">1234</strong>개</b></li>
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
											<a class="mm_btn" href="/member/inform/send/mail" data-href="{ '_type': 'link' }"><b>선택 이메일 발송</b></a>
											<a class="mm_btn" href="/member/inform/send/sms" data-href="{ '_type': 'link' }"><b>선택 SMS 발송</b></a>
											<a class="mm_btn" href="/member/inform/send/mail" data-href="{ '_type': 'link' }"><b>검색 이메일 발송</b></a>
											<a class="mm_btn" href="/member/inform/send/sms" data-href="{ '_type': 'link' }"><b>검색 SMS 발송</b></a>
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
														회원가입 유형
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														회원명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														회원아이디
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														회원등급
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														휴대폰번호
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														이메일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														이메일 수신동의
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														SMS 수신동의
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														가입일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														최근접속일
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
														일반회원
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														김길동
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														kim1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														FAMILY
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														01012341234
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														kim1@naver.com
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														동의
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														비동의
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-12-01
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2023-01-03
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
														네이버 로그인
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														양철수
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														yangyang2
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														VVIP
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														01012341234
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														yang@naver.com
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														동의
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														동의
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2021-12-01
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2023-02-03
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
														카카오 로그인
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														손지은
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														dlwlrma
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														VIP
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														01012341234
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														dlwlrma@naver.com
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														비동의
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														동의
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2021-12-01
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2023-02-03
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
														애플 로그인
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														황엠몬
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmon
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														VIP
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														01012341234
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmon@naver.com
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														동의
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														동의
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2021-12-01
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2023-02-03
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
											<a class="mm_btn" href="/member/inform/send/mail" data-href="{ '_type': 'link' }"><b>선택 이메일 발송</b></a>
											<a class="mm_btn" href="/member/inform/send/sms" data-href="{ '_type': 'link' }"><b>선택 SMS 발송</b></a>
											<a class="mm_btn" href="/member/inform/send/mail" data-href="{ '_type': 'link' }"><b>검색 이메일 발송</b></a>
											<a class="mm_btn" href="/member/inform/send/sms" data-href="{ '_type': 'link' }"><b>검색 SMS 발송</b></a>
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
									<ul class="mm_table-status">
										<li>회원 수<b class="mm_text-secondary"><strong class="text_num">0</strong>개</b></li>
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
					<!-- // 테이블영역 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<a class="mm_btn T=xl T=tertiary" href="send/mail" data-href="{ '_type': 'link' }"><b>전체 회원 이메일 발송</b></a>
								<a class="mm_btn T=xl T=tertiary" href="send/sms" data-href="{ '_type': 'link' }"><b>전체 회원 SMS 발송</b></a>
							</div>
						</div>
					</div>
					<!-- // 최하단버튼 -->
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