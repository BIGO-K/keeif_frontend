<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>주문품목(지불완료)</b>
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
										<b>주문월</b>
									</th>
									<td colspan="3">
										<div class="mm_form-text T=calendar T=xs">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text data-datepicker="{ 'config': { '_isMonth': true } }"><i class="bg_text"></i>
												<span class="text_placeholder">월선택</span>
												<i class="ico_datepicker-calendar"></i>
											</label>
										</div>
									</td>
									<th scope="row">
										<b>카테고리</b>
									</th>
									<td colspan="3">
										<div class="mm_form-select T=lg">
											<label>
												<select data-select>
													<option>전체</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
										<div class="mm_note">
											<ul>
												<li>셀러 등록/수정 시 설정한 매출/통계용 카테고리입니다.</li>
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
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h4 class="mm_heading">
								<b>2022년 04월</b>
							</h4>
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
							<div class="mm_scroller" style="max-height:600px;">
								<!-- (D) 좌측고정 영역에는 colspan, rowspan을 사용할 수 없으며 th, td에 'S=table-fixed' 클래스를 추가합니다. -->
								<table>
									<thead>
										<tr>
											<th scope="col" colspan="2" rowspan="2">
												<div class="mm_table-item">
													집계금액
												</div>
											</th>
											<th scope="col" colspan="2">
												<div class="mm_table-item">
													정상
												</div>
											</th>
											<th scope="col" colspan="3">
												<div class="mm_table-item">
													취소(품절)
												</div>
											</th>
											<th scope="col" colspan="3">
												<div class="mm_table-item">
													반품
												</div>
											</th>
											<th scope="col" colspan="2">
												<div class="mm_table-item">
													목표대비
												</div>
											</th>
											<th scope="col" colspan="2">
												<div class="mm_table-item">
													전년대비
												</div>
											</th>
											<th scope="col" rowspan="2">
												<div class="mm_table-item">
													평균마진율
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
													취소율
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
													반품율
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													목표금액
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													달성율
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													집계금액
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													신장율
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													2022-03-01
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">522504200</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="prod/seller" data-href="{ '_type': 'link' }"><b class="text_num">144</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">365000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="prod/seller" data-href="{ '_type': 'link' }"><b class="text_num">-144</b></a>
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
													<a href="prod/seller" data-href="{ '_type': 'link' }"><b class="text_num">-144</b></a>
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
													<span class="text_price">365000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													16.2%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">365000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													16.2%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													18.7%
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													2022-03-02
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">522504200</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="prod/seller" data-href="{ '_type': 'link' }"><b class="text_num">144</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">365000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="prod/seller" data-href="{ '_type': 'link' }"><b class="text_num">-144</b></a>
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
													<a href="prod/seller" data-href="{ '_type': 'link' }"><b class="text_num">-144</b></a>
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
													<span class="text_price">365000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													16.2%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">365000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													16.2%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													18.7%
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													2022-03-03
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">522504200</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="prod/seller" data-href="{ '_type': 'link' }"><b class="text_num">144</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">365000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="prod/seller" data-href="{ '_type': 'link' }"><b class="text_num">-144</b></a>
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
													<a href="prod/seller" data-href="{ '_type': 'link' }"><b class="text_num">-144</b></a>
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
													<span class="text_price">365000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													16.2%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">365000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													16.2%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													18.7%
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													2022-03-04
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">522504200</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="prod/seller" data-href="{ '_type': 'link' }"><b class="text_num">144</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">365000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="prod/seller" data-href="{ '_type': 'link' }"><b class="text_num">-144</b></a>
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
													<a href="prod/seller" data-href="{ '_type': 'link' }"><b class="text_num">-144</b></a>
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
													<span class="text_price">365000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													16.2%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">365000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													16.2%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													18.7%
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													2022-03-05
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">522504200</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="prod/seller" data-href="{ '_type': 'link' }"><b class="text_num">144</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">365000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="prod/seller" data-href="{ '_type': 'link' }"><b class="text_num">-144</b></a>
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
													<a href="prod/seller" data-href="{ '_type': 'link' }"><b class="text_num">-144</b></a>
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
													<span class="text_price">365000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													16.2%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">365000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													16.2%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													18.7%
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													2022-03-31
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">522504200</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="prod/seller" data-href="{ '_type': 'link' }"><b class="text_num">144</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">365000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="prod/seller" data-href="{ '_type': 'link' }"><b class="text_num">-144</b></a>
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
													<a href="prod/seller" data-href="{ '_type': 'link' }"><b class="text_num">-144</b></a>
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
													<span class="text_price">365000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													16.2%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">365000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													16.2%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													18.7%
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
											<td>
												<div class="mm_table-item">
													<span class="text_price">8853730759</span>
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
											<td>
												<div class="mm_table-item">
													<span class="text_price">365000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													16.2%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">365000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													16.2%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													18.7%
												</div>
											</td>
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