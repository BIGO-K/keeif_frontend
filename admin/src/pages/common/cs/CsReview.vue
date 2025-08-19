<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>상품평</b>
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
													<option>상품 코드</option>
													<option>상품명</option>
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
												<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 50자 입력</span>
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
										<b>만족도</b>
									</th>
									<td colspan="3">
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option>전체</option>
													<option>5 / 5</option>
													<option>4 / 5</option>
													<option>3 / 5</option>
													<option>2 / 5</option>
													<option>1 / 5</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
									<th scope="row">
										<b>베스트 리뷰</b>
									</th>
									<td colspan="3">
										<label class="mm_form-check">
											<input type="checkbox" data-check>
											<b class="mm_block">
												<i class="ico_form-check"></i>
												<span class="text_label">베스트 리뷰만 보기</span>
											</b>
										</label>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="mm_note">
							<ul>
								<li>기간 검색은 등록일자에 대한 검색이며, 최대 1년 단위로 검색하시기 바랍니다.</li>
								<li>키워드 검색을 진행할 경우 기간 범위는 무시하고 검색 처리됩니다.</li>
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
							<div class="mm_table_box-unit">
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<button type="button" class="mm_btn">
												<b>베스트 리뷰 설정</b>
											</button>
											<button type="button" class="mm_btn">
												<b>베스트 리뷰 해제</b>
											</button>
										</div>
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
														베스트 리뷰
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														상품 코드
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														상품명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														상품 옵션
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														만족도
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														상품평
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등록일자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등록자
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
														20
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														베스트
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/pro/product/manage" data-href="{ '_type': 'link' }"><b>18400</b></a>
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="/pro/product/manage" data-href="{ '_type': 'link' }"><b>[한소희 착용] Painted sheer one-piece</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														BK / 66
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														5 / 5
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="review/detail" data-href="{ '_type': 'link' }"><b class="mm_text-ellipsis T=2line">상품평 내용 상품평 내용 상품평 내용 상품평 내용</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-27
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동(hooooh122)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
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
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														<a href="/pro/product/manage" data-href="{ '_type': 'link' }"><b>65010</b></a>
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="/pro/product/manage" data-href="{ '_type': 'link' }"><b>Elnoi MARO bag white</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														BK / 66
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														4 / 5
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="review/detail" data-href="{ '_type': 'link' }"><b class="mm_text-ellipsis T=2line">상품평 내용이 길 경우 말줄임 표기 상품평 내용이 길 경우 말줄임 표기 상품평 내용이 길 경우 말줄임 표기 상품평 내용이 길 경우 말줄임 표기 상품평 내용이 길 경우 말줄임 표기</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-27
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														김길동(kim123)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
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
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														<a href="/pro/product/manage" data-href="{ '_type': 'link' }"><b>65010</b></a>
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="/pro/product/manage" data-href="{ '_type': 'link' }"><b>오트밀 시그니처 톤온톤와펜 Unisex 반팔맨투맨 SPTS2E108I1</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														BK / 66
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														3 / 5
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="review/detail" data-href="{ '_type': 'link' }"><b class="mm_text-ellipsis T=2line">상품평 내용 상품평 내용 상품평 내용 상품평 내용</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-22
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														김소희(kim123)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
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
														17
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														<a href="/pro/product/manage" data-href="{ '_type': 'link' }"><b>96611</b></a>
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="/pro/product/manage" data-href="{ '_type': 'link' }"><b>NEWYORK 코튼 오버핏 스웻 셔츠_그레이 JNTS1A891G2</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														BK / 66
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														3 / 5
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="review/detail" data-href="{ '_type': 'link' }"><b class="mm_text-ellipsis T=2line">상품평 내용 상품평 내용 상품평 내용 상품평 내용</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-22
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														구찬성(koo221)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
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
											<button type="button" class="mm_btn">
												<b>베스트 리뷰 설정</b>
											</button>
											<button type="button" class="mm_btn">
												<b>베스트 리뷰 해제</b>
											</button>
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