<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>CS 알리미</b>
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
													<option>주문번호</option>
													<option>상품명</option>
													<option>등록자</option>
													<option>고객명</option>
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
										<b>셀러</b>
									</th>
									<td colspan="7">
										<div class="mm_selected">
											<!-- (D) 검색 팝업에서 선택 적용 시 'ul' 영역을 노출합니다. -->
											<a class="mm_btn T=line" href="/search/seller-single" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 검색</b></a>
											<ul>
												<li>
													<b>셀러 A</b>
													<button type="button" class="btn_remove">
														<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
													</button>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>문의 유형</b>
									</th>
									<td colspan="3">
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option>전체</option>
													<option>배송문의</option>
													<option>반품가능여부문의</option>
													<option>반품입고여부문의</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
									<th scope="row">
										<b>문의 상태</b>
									</th>
									<td colspan="3">
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option>전체</option>
													<option>답변대기</option>
													<option>답변완료</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>문의 종료 여부</b>
									</th>
									<td colspan="7">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-inquiry-state" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-inquiry-state" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">진행 중</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-inquiry-state" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">종료</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>등록자 유형</b>
									</th>
									<td colspan="7">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-register" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-register" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">본사</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-register" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">협력사</span>
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
								<li>기간 검색은 문의일자에 대한 검색이며, 최대 1년 단위로 검색하시기 바랍니다.</li>
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
									<a class="mm_btn T=line T=secondary btn_register" href="/cs/notify/register" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>CS 알리미 등록하기</b><i class="ico_register"></i></a>
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
								<div class="mm_rside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=xload btn_excel" href="/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
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
												<th scope="col">
													<div class="mm_table-item">
														No.
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														문의 종료 여부
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														문의 상태
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														문의 유형
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														주문번호
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														상품명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														문의제목
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														고객명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														문의일시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등록자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등록자 유형
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														답변 완료일시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														답변자
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														100
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														진행 중
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														답변 대기
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 A</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														배송 문의
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														300006250021
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>ORIGINAL GRAND WING OX 카모플라쥬 남성 스파이크리스 윙팁 골프화</b>
														</p>
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="/cs/notify/detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 문의드립니다.</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-29 13:29:18
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														최고관리자
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														99
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														종료
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														답변 완료
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 B</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														주문 취소
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														300006250021
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>ORIGINAL GRAND WING OX 카모플라쥬 남성 스파이크리스 윙팁 골프화</b>
														</p>
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="/cs/notify/detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>주문 취소 부탁드립니다</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														김동길
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-15 13:29:18
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자B
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														협력사
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-18 13:23:28
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자B
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
														종료
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														답변 완료
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 C</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														상품 문의
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														300006250021
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>Navy Logo Over Denim Shirt Light Blue</b>
														</p>
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="/cs/notify/detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>주문 취소 부탁드립니다</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														박수철
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-15 13:29:18
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자C
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														본사
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-18 13:23:28
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자A
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
														종료
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														답변 완료
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 A</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														배송 문의
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														300006250021
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>블루마운틴 캔버스 스니커즈 ML201 화이트 002-JSS002ML</b>
														</p>
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="/cs/notify/detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>배송 문의드립니다.</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-29 13:29:18
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														최고관리자
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-18 13:23:28
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														관리자A
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
									<a class="mm_btn T=line T=secondary btn_register" href="/cs/notify/register" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>CS 알리미 등록하기</b><i class="ico_register"></i></a>
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