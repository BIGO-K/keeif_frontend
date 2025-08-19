<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>제휴 주문 로그</b>
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
													<option>제휴사 주문번호</option>
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
								<tr>
									<th scope="row">
										<b>연동 결과</b>
									</th>
									<td colspan="7">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-sync" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-sync" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">성공</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-sync" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">실패</span>
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
								<li>주문번호를 검색할 때, 주문번호 전체를 입력해주세요. 부분입력 시 검색이 정상적으로 진행되지 않습니다. 예) 123 검색 시, 12(검색안됨) 123(검색됨)</li>
								<li><strong>판매처 1개 이상 선택</strong> 시에만 검색 결과가 노출됩니다. (판매처 미선택 시 검색불가)</li>
								<li>기간 검색은 연동일자에 대한 검색이며, 최대 1개월 단위로 검색하시기 바랍니다.</li>
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
														연동일시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														판매처
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														주문번호
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														순번
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														제휴사 주문번호
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														상세 제휴사 주문번호
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														주문상태
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														연동 결과
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														실패 메시지
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-03-27 13:00:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														옥션
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123123123
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														200215748
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														21884096
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														배송 중
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="mm_text-secondary">연동실패</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														잘못된 데이터 입력
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-03-27 13:00:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														11st
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123123123
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														200215748
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														21884096
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														배송 준비중
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														연동성공
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-03-27 13:00:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														G마켓
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123123123
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														200215748
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														21884096
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러B
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														배송 완료
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														연동성공
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-03-27 13:00:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														쿠팡
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123123123
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														200215748
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														21884096
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														반품요청
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="mm_text-secondary">연동실패</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														데이터 미 전송
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-03-27 13:00:00
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														티몬
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123123123
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														200215748
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														21884096
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러B
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														교환요청
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="mm_text-secondary">연동실패</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														데이터 미 전송
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