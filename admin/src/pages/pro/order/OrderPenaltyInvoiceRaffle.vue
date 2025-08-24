<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>가송장</b>
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
										<b>주문 검색</b>
									</th>
									<td colspan="7">
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option>주문번호</option>
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
												<span class="text_placeholder mm_ir-blind">주문 관련 검색어를 입력해 주세요.</span>
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
														<option>주문일시</option>
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
										<b>상품 유형</b>
									</th>
									<td colspan="7">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-category" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-category" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">일반 상품</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-category" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">래플 상품</span>
														</b>
													</label>
												</li>
											</ul>
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
											<a class="mm_btn T=line" href="/search/seller-multi" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 검색</b></a>
											<ul>
												<li>
													<b>셀러 A</b>
													<button type="button" class="btn_remove">
														<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
													</button>
												</li>
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
							</tbody>
						</table>
						<div class="mm_note">
							<ul>
								<li>기간 검색은 최대 3개월 범위로 검색이 가능합니다.</li>
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
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<div class="mm_lside">
								<ul class="mm_table-status">
									<li>주문 수<b class="mm_text-secondary"><strong class="text_num">1234</strong>개</b></li>
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
										<button type="button" class="mm_btn">
											<b>선택 승인</b>
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
						<!-- // 테이블상단 -->

						<!-- 테이블 -->
						<div class="mm_table" data-table>
							<div class="mm_scroller">
								<table>
									<thead>
										<tr>
											<th class="col_check S=table-fixed" scope="col">
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
											<th class="S=table-fixed" scope="col">
												<div class="mm_table-item">
													관리
												</div>
											</th>
											<th class="S=table-fixed" scope="col">
												<div class="mm_table-item">
													주문일시
												</div>
											</th>
											<th class="S=table-fixed" scope="col">
												<div class="mm_table-item">
													주문상태
												</div>
											</th>
											<th class="S=table-fixed" scope="col">
												<div class="mm_table-item">
													주문번호
												</div>
											</th>
											<th class="S=table-fixed" scope="col">
												<div class="mm_table-item">
													원 주문번호
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													판매처
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													주문유형
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													상품유형
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													배송처
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													주문자
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													주문자 아이디
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													수취인
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													발송 처리일시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													가송장 번호
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													오류 메시지
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													패널티 부과일
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													부과 수수료
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													이의제기 내용
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													이의제기 신청일
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													이의제기 금액
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													실 발송 처리일
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													실 택배사
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													실 송장번호
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													이의제기 승인 여부
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													셀러
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="S=table-fixed">
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
											<td class="S=table-fixed">
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm" href="/order/penalty/invoice/reject" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>반려</b></a>
															<button type="button" class="mm_btn T=sm">
																<b>승인</b>
															</button>
														</div>
													</div>
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													2022-05-28 11:48:55
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													배송 중
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>123123123</b></a>
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item"></div>
											</td>
											<td>
												<div class="mm_table-item">
													자사몰
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													일반주문
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													일반상품
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													업체 배송
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													홍길동
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													hong122
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													홍길동
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-05-28 11:48:55
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													123123
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													미집하
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-06-02
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000</span>
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<a class="T=linebreak" href="/content-detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b class="mm_text-ellipsis T=2line">이의제기합니다!</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-06-02
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">2500</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-05-28 11:48:55
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													CJ 대한통운
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="#" target="_blank" title="새 창 열림"><b>123123</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													반려 2022-06-03<br> 반려 사유 입니다.
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 A</b></a>
												</div>
											</td>
										</tr>
										<tr>
											<td class="S=table-fixed">
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
											<td class="S=table-fixed">
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm T=line" href="/order/penalty/invoice/complain" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>이의제기</b></a>
														</div>
													</div>
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													2022-05-28 11:48:55
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													배송 중
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>123123123</b></a>
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>123123123</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													자사몰
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													일반주문
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													일반상품
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													업체 배송
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													홍길동
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													hong122
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													홍길동
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-05-28 11:48:55
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													123123
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													미집하
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-06-02
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000</span>
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item"></div>
											</td>
											<td><div class="mm_table-item"></div></td>
											<td><div class="mm_table-item"></div></td>
											<td><div class="mm_table-item"></div></td>
											<td><div class="mm_table-item"></div></td>
											<td><div class="mm_table-item"></div></td>
											<td class="T=table-left">
												<div class="mm_table-item"></div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="/seller-info" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 A</b></a>
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
											<b>선택 승인</b>
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
					<!-- // 테이블영역 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>