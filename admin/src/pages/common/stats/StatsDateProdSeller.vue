<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>셀러별 결제/취소/반품 주문</b>
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
										<b>담당 MD</b>
									</th>
									<td colspan="7">
										<div class="mm_selected">
											<!-- (D) 검색 팝업에서 선택 적용 시 'ul' 영역을 노출합니다. -->
											<a class="mm_btn T=line" href="/search/md" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>담당 MD 검색</b></a>
											<!--
												<ul>
												<li>
												<b>담당 MD A</b>
												<button type="button" class="btn_remove"><i class="ico_remove"></i><b class="mm_ir-blind">삭제</b></button>
												</li>
												</ul>
											-->
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
											<!--
												<ul>
												<li>
												<b>셀러 A</b>
												<button type="button" class="btn_remove"><i class="ico_remove"></i><b class="mm_ir-blind">삭제</b></button>
												</li>
												</ul>
											-->
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
								<div class="mm_rside">
									<div class="mm_form-select T=xs">
										<label>
											<select data-select>
												<option>결제 수량</option>
												<option>반품 수량</option>
												<option>취소 수량</option>
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

							<div class="mm_table" data-table>
								<div class="mm_scroller">
									<!-- (D) 좌측고정 영역에는 colspan, rowspan을 사용할 수 없으며 th, td에 'S=table-fixed' 클래스를 추가합니다. -->
									<table>
										<thead>
											<tr>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														No.
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														셀러 코드
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														셀러명
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														집계금액
													</div>
												</th>
												<th scope="col" colspan="2">
													<div class="mm_table-item">
														결제
													</div>
												</th>
												<th scope="col" colspan="3">
													<div class="mm_table-item">
														취소
													</div>
												</th>
												<th scope="col" colspan="3">
													<div class="mm_table-item">
														반품
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														배송
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														담당 MD
													</div>
												</th>
											</tr>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														수량
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														수량
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														비율
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														수량
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														비율
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														5455
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러 A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">49000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">144</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">365000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">-144</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-365000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														16.2%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">-144</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-365000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														18.7%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														업체
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														김홍철
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														13341
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러 C
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">49000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">144</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">365000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">-144</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-365000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														16.2%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">-144</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-365000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														18.7%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														업체
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														3
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														52345
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러 B
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">49000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">144</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">365000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">-144</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-365000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														16.2%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">-144</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-365000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														18.7%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														업체
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														고길동
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
												<td>
													<div class="mm_table-item">
														<span class="text_price">495000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">5140</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">765000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">-514</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-765000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														16.2%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">-514</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-765000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														18.7%
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
											</tr>
										</tfoot>
									</table>
								</div>
							</div>

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
									<div class="mm_form-select T=xs">
										<label>
											<select data-select>
												<option>결제 수량</option>
												<option>반품 수량</option>
												<option>취소 수량</option>
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