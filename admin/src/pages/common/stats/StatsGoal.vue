<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>목표 등록</b>
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
										<b>목표 월</b>
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
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=lg T=tertiary btn_search">
									<b>검색</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 검색 -->

					<!-- 목표 월 -->
					<div class="m_stats-calendar">
						<table>
							<caption>
								<h3><b>2022년 04월</b></h3>
							</caption>
							<thead>
								<tr>
									<th scope="col">
										<b>일</b>
									</th>
									<th scope="col">
										<b>월</b>
									</th>
									<th scope="col">
										<b>화</b>
									</th>
									<th scope="col">
										<b>수</b>
									</th>
									<th scope="col">
										<b>목</b>
									</th>
									<th scope="col">
										<b>금</b>
									</th>
									<th scope="col">
										<b>토</b>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td>
										<span class="text_date">01</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">02</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">03</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">04</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
								</tr>
								<tr>
									<td>
										<span class="text_date">05</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">06</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">07</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">08</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">09</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">10</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">11</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
								</tr>
								<tr>
									<td>
										<span class="text_date">12</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">13</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">14</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">15</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">16</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">17</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">18</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
								</tr>
								<tr>
									<td>
										<span class="text_date">19</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">20</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">21</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">22</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">23</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">24</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">25</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
								</tr>
								<tr>
									<td>
										<span class="text_date">26</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">27</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">28</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">29</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">30</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td>
										<span class="text_date">31</span>
										<p class="text_price">
											0
										</p>
										<p class="text_price">
											0
										</p>
										<a class="mm_btn btn_goal-register T=sm T=line" href="/stats/goal/amount" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>금액 입력</b></a>
									</td>
									<td></td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<th scope="row" colspan="6">
										<b>목표 합계</b>
									</th>
									<td><b class="text_price">25,000,000</b></td>
								</tr>
								<tr>
									<th scope="row" colspan="6">
										<b>차감이익 목표 합계</b>
									</th>
									<td><b class="text_price">25,000,000</b></td>
								</tr>
							</tfoot>
						</table>

						<!-- 하단영역 -->
						<div class="m...calendar-unit">
							<div class="mm_rside">
								<div class="mm_form_mix-linked">
									<div class="mm_form-file">
										<button type="button" class="btn_remove-file">
											<i class="ico_form-clear"></i><b class="mm_ir-blind">파일삭제</b>
										</button>
										<label>
											<input type="file" data-file>
											<span class="text_path"></span>
											<span class="mm_btn T=line T=light text_label">파일첨부</span>
										</label>
									</div>
									<a class="btn_sample" href="#" download><b>샘플다운받기</b></a>
									<button type="button" class="mm_btn T=line T=xload btn_excel">
										<b>엑셀 업로드</b><i class="ico_upload"></i>
									</button>
									<a class="mm_btn T=line T=xload btn_excel" href="/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
								</div>
							</div>
						</div>
						<!-- // 하단영역 -->

						<!-- 안내문구 -->
						<div class="mm_note">
							<ul>
								<li>검정색 글씨는 목표 금액, 붉은색 글씨는 차감이익목표 금액입니다.</li>
							</ul>
						</div>
						<!-- // 안내문구 -->
					</div>
					<!-- // 목표 월 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>