<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>회원정보 수동 변경</b>
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
										<b>변경자</b>
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
							</tbody>
						</table>
						<div class="mm_note">
							<ul>
								<li><strong>[회원명/이메일] 두가지</strong>의 조건을 필수로 입력해야 검색이 가능합니다.</li>
								<li><strong>회원 아이디</strong>의 경우 고유한 정보이므로 아이디만 입력 시에도 검색이 가능합니다.</li>
								<li>최대 2년의 로그가 저장되어 있어, 2년 이전의 로그는 검색할 수 없습니다.</li>
								<li>회원정보 로그는 변경된 각 항목에 대한 로그 검색만 가능합니다.</li>
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
														변경일시
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
														이메일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														변경항목
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														변경자
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														2020-03-20 13:22:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/detail" target="_blank" title="새 창 열림"><b>홍**</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/detail" target="_blank" title="새 창 열림"><b>mmonstar1004</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														hon**@mmonstar.co.kr
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														휴대폰번호 변경
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004(홍길동)
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2020-03-20 13:22:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/detail" target="_blank" title="새 창 열림"><b>홍**</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/detail" target="_blank" title="새 창 열림"><b>mmonstar1004</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														hon**@mmonstar.co.kr
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														환불 계좌 은행 코드 변경
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004(홍길동)
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2020-03-20 13:22:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/detail" target="_blank" title="새 창 열림"><b>홍**</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/detail" target="_blank" title="새 창 열림"><b>mmonstar1004</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														hon**@mmonstar.co.kr
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														회원 비밀번호 변경
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004(홍길동)
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2020-03-20 13:22:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/detail" target="_blank" title="새 창 열림"><b>홍**</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/detail" target="_blank" title="새 창 열림"><b>mmonstar1004</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														hon**@mmonstar.co.kr
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														휴대폰번호 변경
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004(홍길동)
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2020-03-20 13:22:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/detail" target="_blank" title="새 창 열림"><b>홍**</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/member/manage/detail" target="_blank" title="새 창 열림"><b>mmonstar1004</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														hon**@mmonstar.co.kr
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														휴대폰번호 변경
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004(홍길동)
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