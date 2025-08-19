<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>약관</b>
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

					<!-- 탭메뉴 -->
					<div class="mm_tab_menu">
						<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
						<ul>
							<li><a href="./use" data-href="{ '_type': 'link' }"><b>이용약관</b></a></li>
							<li><a href="./privacy" data-href="{ '_type': 'link' }"><b>개인정보처리방침</b></a></li>
							<li><a class="S=tab-on" href="./consent" data-href="{ '_type': 'link' }" title="선택됨"><b>제 3자 정보제공동의</b></a></li>
							<li><a href="./youth" data-href="{ '_type': 'link' }"><b>청소년보호방침</b></a></li>
						</ul>
					</div>
					<!-- // 탭메뉴 -->

					<!-- 테이블 영역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<div class="mm_lside">
									<a class="mm_btn T=line T=secondary btn_register" href="register" data-href="{ '_type': 'link' }"><b>제 3자 정보제공동의 등록하기</b><i class="ico_register"></i></a>
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
														약관명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														약관 등록일자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														약관 노출 시작일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등록자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														상태
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
														21
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="consent/detail" data-href="{ '_type': 'link' }"><b class="mm_text-ellipsis T=2line">제 3자 정보제공동의 v2.0</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-03-20
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-03-20
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														노출 예약
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line" onclick="mm.bom.confirm('해당 약관을 삭제하시겠습니까?', sampleCallback);">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
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
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="consent/detail" data-href="{ '_type': 'link' }"><b class="mm_text-ellipsis T=2line">제 3자 정보제공동의 v2.0</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-03-20
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-03-20
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														노출 중
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														19
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="consent/detail" data-href="{ '_type': 'link' }"><b class="mm_text-ellipsis T=2line">제 3자 정보제공동의 v2.0</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-03-20
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-03-20
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														노출 종료
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														18
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="consent/detail" data-href="{ '_type': 'link' }"><b class="mm_text-ellipsis T=2line">제 3자 정보제공동의 v2.0</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-03-20
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2020-03-20
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														노출 종료
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
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
									<a class="mm_btn T=line T=secondary btn_register" href="/mall/policy/register" data-href="{ '_type': 'link' }"><b>제 3자 정보제공동의 등록하기</b><i class="ico_register"></i></a>
								</div>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>등록된 내용이 없습니다.</p>
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