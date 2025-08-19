<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>상품 아이콘</b>
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
										<b>기간</b>
									</th>
									<td colspan="7">
										<div class="mm_form_mix-period">
											<div class="mm_form-select T=xs">
												<label>
													<select data-select>
														<option>등록일자</option>
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
										<b>노출 상태</b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-display" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-display" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">예약</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-display" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">노출</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-display" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">미노출</span>
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
														<input type="radio" name="dev_radio-use" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-use" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">사용</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-use" data-radio>
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
									<a class="mm_btn T=line T=secondary btn_register" href="/product/icon/register" data-href="{ '_type': 'link' }"><b>상품 아이콘 등록하기</b><i class="ico_register"></i></a>
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
														적용 범위
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														상품 아이콘명
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
														55
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/product/icon/coverage/category" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>카테고리</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<b class="text_prod-icon" style="background-color:#8064a2; color:#fff;">PREMIUM</b>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														노출
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-12-01 ~ 2022-12-31
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														사용
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-20 13:22:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004(홍길동)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-20 13:22:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004(홍길동)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="/product/icon/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
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
												<td>
													<div class="mm_table-item">
														<a href="/product/icon/coverage/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<b class="text_prod-icon" style="background-color:#dae5f1; color:#3d3d3d;">collaboration</b>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														노출
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-12-01 ~ 2022-12-31
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														미사용
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-20 13:22:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004(홍길동)
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
																<a class="mm_btn T=sm" href="/product/icon/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														53
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/product/icon/coverage/brand" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>브랜드</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<b class="text_prod-icon" style="background-color:#fff; color:#222;">사은품 증정</b>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														미노출
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-12-01 ~ 2022-12-31
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														미사용
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-20 13:22:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004(홍길동)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-20 13:22:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004(홍길동)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="/product/icon/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
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