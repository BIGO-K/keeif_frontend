<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>자사 DB 현황 메뉴</b>
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
														<option selected>오늘</option>
														<option>최근 3일</option>
														<option>최근 1주일</option>
														<option>최근 1개월</option>
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
										<b>카테고리</b>
									</th>
									<td colspan="7">
										<div class="mm_form-select T=lg">
											<label>
												<select data-select>
													<option>선택하세요.</option>
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
							</tbody>
						</table>
						<div class="mm_note">
							<ul>
								<li>기간 검색은 최대 1개월 범위로 검색이 가능합니다.</li>
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
												<th scope="col">
													<div class="mm_table-item">
														일자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														매출/통계 카테고리
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														자사 진열 DB 수
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														자사 미진열 DB 수
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														자사 품절 DB 수
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														자사 DB 수
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러 수
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														브랜드 수
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-04-11
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/stats/db/category" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>라이프</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">60000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">150</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-04-11
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/stats/db/category" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>잡화</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">2000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">4000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">19</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">19</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-04-11
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/stats/db/category" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>유니섹스</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1500</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">200</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">300</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">2000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">45</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">45</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-04-11
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/stats/db/category" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>여성패션</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">2000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">2000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">37</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">37</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-04-11
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/stats/db/category" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>슈즈</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">780</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">20</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">200</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">36</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">36</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-04-11
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a href="/stats/db/category" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>남성패션</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">300</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">50</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">50</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">400</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">10</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">10</span>
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
												<td>
													<div class="mm_table-item">
														<span class="text_num">46680</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">11370</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">11550</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">69600</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">191</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">299</span>
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
					</template>

					<template v-else>
						<div class="mm_table_box">
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