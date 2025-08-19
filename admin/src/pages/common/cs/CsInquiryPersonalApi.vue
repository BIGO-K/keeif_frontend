<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>1:1 문의</b>
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
													<option>등록자</option>
													<option>주문번호</option>
													<option>상품명</option>
													<option>상품 코드</option>
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
										<b>문의 유형</b>
									</th>
									<td colspan="7">
										<div class="mm_select-list">
											<ul>
												<li>
													<div class="mm_form-select T=sm">
														<label>
															<select data-select>
																<option>유형 전체</option>
																<option>배송</option>
																<option>반품/교환</option>
																<option>취소/환불</option>
																<option>주문/결제</option>
																<option>쿠폰/적립금</option>
																<option>회원가입/정보 관리</option>
																<option>오류/개선사항</option>
															</select>
															<b class="text_selected"></b>
															<i class="ico_form-select"></i>
														</label>
													</div>
												</li>
												<li>
													<div class="mm_form-select T=sm">
														<label>
															<select data-select>
																<option>세부 유형 전체</option>
															</select>
															<b class="text_selected"></b>
															<i class="ico_form-select"></i>
														</label>
													</div>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>이관 여부</b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-transfer" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-transfer" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">이관 문의</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-transfer" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">미이관 문의</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
									<th scope="row">
										<b>답변 상태</b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-answer" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-answer" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">답변 대기</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-answer" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">답변 완료</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>판매처</b>
									</th>
									<td colspan="7">
										<div class="mm_check-list">
											<ul>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-store" data-check="{ '_type': 'check_all' }" checked>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-store" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">자사몰</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-store" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">제휴사1</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-store" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">제휴사2</span>
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
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<div class="mm_lside">
								<ul class="mm_table-status">
									<li>문의 수<b class="mm_text-secondary"><strong class="text_num">1234</strong>개</b></li>
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
													문의 번호
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													판매처
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													답변 상태
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													유형
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													세부 유형
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													주문번호
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													문의 제목
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
													답변일자
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													답변자
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													이관 여부
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													이관일자
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													이관 사유
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
													100
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													자사몰
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													답변 완료
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													상품
												</div>
											</td>
											<td><div class="mm_table-item"></div></td>
											<td>
												<div class="mm_table-item">
													1232500540
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<a class="T=linebreak" href="/cs/inquiry-detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 문의입니다.</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-03-25
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													홍길동(abc123)
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-03-27
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러A
												</div>
											</td>
											<td><div class="mm_table-item"></div></td>
											<td><div class="mm_table-item"></div></td>
											<td><div class="mm_table-item"></div></td>
											<td>
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm" href="inquiry-personal/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
														</div>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													99
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													제휴사1
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													답변 대기
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													배송
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													배송 확인
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													1232500540
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<a class="T=linebreak" href="/cs/inquiry-detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>배송 문의입니다.</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-03-25
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													홍길동(abc123)
												</div>
											</td>
											<td><div class="mm_table-item"></div></td>
											<td><div class="mm_table-item"></div></td>
											<td><div class="mm_table-item"></div></td>
											<td><div class="mm_table-item"></div></td>
											<td><div class="mm_table-item"></div></td>
											<td>
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm" href="inquiry-personal/answer" data-href="{ '_type': 'link' }"><b>답변</b></a>
														</div>
													</div>
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
													제휴사2
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													답변 완료
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													주문/결제
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													결제
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													123456789
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<a class="T=linebreak" href="/cs/inquiry-detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>토스 간편 결제 문의입니다.</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-02-14
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													김길동(kiki123)
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-03-01
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러B
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													관리자A(이관)
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-02-25
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm T=line" href="/cs/transfer-detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>사유 확인</b></a>
														</div>
													</div>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm" href="inquiry-personal/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
														</div>
													</div>
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
													자사몰
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													답변 대기
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													쿠폰/적립금
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													적립금
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													1232500540
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<a class="T=linebreak" href="/cs/inquiry-detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>적립금 사용 문의입니다.</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-02-13
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													홍길동(abc123)
												</div>
											</td>
											<td><div class="mm_table-item"></div></td>
											<td><div class="mm_table-item"></div></td>
											<td>
												<div class="mm_table-item">
													관리자A(이관)
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2020-02-15
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm T=line" href="/cs/transfer-detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>사유 확인</b></a>
														</div>
													</div>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm" href="inquiry-personal/answer" data-href="{ '_type': 'link' }"><b>답변</b></a>
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