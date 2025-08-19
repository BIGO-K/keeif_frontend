<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>배송비 정산집계 상세</b>
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
										<b>셀러</b>
									</th>
									<td colspan="7">
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option>선택하세요.</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>정산 자료</b>
									</th>
									<td colspan="7">
										<p>2022년 3월</p>
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

					<!-- 배송비 정산집계 상세 내역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>배송비 정산집계 상세 내역</b>
								</h3>
								<div class="mm_rside">
									<a class="mm_btn T=line btn_help" href="../calc/state" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>도움말</b><i class="ico_help"></i></a>
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
														주문번호
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														주문일시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														주문자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														배송 정책명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														배송비 유형
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														배송비
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>123123123</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-10-22 12:33:12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러A
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="/seller/manage/ship-policy" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>배송 정책명20</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														정상 배송비
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>123123123</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-10-22 12:33:12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러A
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a class="T=linebreak" href="/seller/manage/ship-policy" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>배송 정책명20</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														정상 배송비
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<td>
													<div class="mm_table-item">
														총 계
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">125000</span>
													</div>
												</td>
											</tr>
										</tfoot>
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

					<template v-else>
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>배송비 정산집계 상세 내역</b>
								</h3>
								<div class="mm_rside">
									<a class="mm_btn T=line btn_help" href="../calc/state" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>도움말</b><i class="ico_help"></i></a>
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
					<!-- // 배송비 정산집계 -->
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