<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>회원</b>
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
										<b>회원명</b>
									</th>
									<td colspan="7">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 50자 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>회원 아이디</b>
									</th>
									<td colspan="7">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 50자 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>휴대폰 번호</b>
									</th>
									<td colspan="7">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 50자 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>이메일</b>
									</th>
									<td colspan="7">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">@포함 최대 50자 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>등급</b>
									</th>
									<td colspan="3">
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option>전체</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
									<th scope="row">
										<b>회원 가입 유형</b>
									</th>
									<td colspan="3">
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option>전체</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="mm_note">
							<ul>
								<li><strong>[회원명/휴대폰 번호/이메일] 중 두가지 이상</strong>의 조건을 필수로 입력해야 검색이 가능합니다.</li>
								<li>회원 아이디의 경우 고유한 정보이므로 아이디만 입력 시에도 검색이 가능합니다.</li>
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
														회원 가입 유형
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														회원명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														회원 아이디
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														회원 등급
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														휴대폰 번호
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														이메일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														보유 적립금
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														가입일시
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
														20
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														일반가입
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														**진
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														abc***@naver.com
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														FAMILY
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/sms" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>010-****-1234</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/mail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>abc***@naver.com</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/point" data-href="{ '_type': 'popup' }" title="새 창 열림"><b><span class="text_num">1234</span>원</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-01-15 13:35:23
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<a class="mm_btn T=sm T=line" href="manage/detail" data-href="{ '_type': 'link' }"><b>상세</b></a>
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
														네이버 간편가입
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														**남
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														qqq***@naver.com
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														VIP
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/sms" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>010-****-1234</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/mail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>qqq***@naver.com</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/point" data-href="{ '_type': 'popup' }" title="새 창 열림"><b><span class="text_num">31234</span>원</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-01-15 13:35:23
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<a class="mm_btn T=sm T=line" href="manage/detail" data-href="{ '_type': 'link' }"><b>상세</b></a>
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
														카카오 간편가입
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														**민
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmm1***@naver.com
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														VIP
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/sms" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>010-****-1234</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/mail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>mmm1***@naver.com</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/point" data-href="{ '_type': 'popup' }" title="새 창 열림"><b><span class="text_num">0</span>원</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-01-15 13:35:23
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<a class="mm_btn T=sm T=line" href="manage/detail" data-href="{ '_type': 'link' }"><b>상세</b></a>
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
														애플 간편가입
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														**원
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														one***@naver.com
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														VIP
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/sms" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>010-****-1234</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/mail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>one***@naver.com</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/point" data-href="{ '_type': 'popup' }" title="새 창 열림"><b><span class="text_num">1234</span>원</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-01-15 13:35:23
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<a class="mm_btn T=sm T=line" href="manage/detail" data-href="{ '_type': 'link' }"><b>상세</b></a>
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
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';

	// 내용없음
	const _isNone = false;
</script>