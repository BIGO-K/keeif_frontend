<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>전체 적립금</b>
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

					<!-- 적립금 현황 영역 -->
					<div class="mm_table_box">
						<!-- 테이블 -->
						<div class="mm_table" data-table>
							<div class="mm_scroller">
								<table>
									<thead>
										<tr>
											<th scope="col">
												<div class="mm_table-item">
													총 적립 적립금
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													총 사용 적립금
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													소멸 예정 적립금(30일 후 소멸)
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													<span class="text_num">5315040</span>원
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">15315040</span>원
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">0</span>원
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->

						<!-- 안내문구 -->
						<div class="mm_note">
							<ul>
								<li>전체 회원 대상으로 전체 기간에 대한 적립금 정보가 노출됩니다.</li>
								<li>소멸 예정 적립금의 경우 당일 기준으로 조회되어 노출됩니다.</li>
							</ul>
						</div>
						<!-- // 안내문구 -->
					</div>
					<!-- // 적립금 현황 영역 -->

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
													<input type="text" class="textfield" data-text data-datepicker="{ 'config': { '_isMonth': true } }"><i class="bg_text"></i>
													<span class="text_placeholder">시작월</span>
													<i class="ico_datepicker-calendar"></i>
												</label>
											</div>
											<b class="text_tilde">~</b>
											<div class="mm_form-text T=calendar">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text data-datepicker="{ 'config': { '_isMonth': true } }"><i class="bg_text"></i>
													<span class="text_placeholder">종료월</span>
													<i class="ico_datepicker-calendar"></i>
												</label>
											</div>
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

					<!-- 적립금 현황 영역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<div class="mm_table_box-unit">
								<div class="mm_rside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=xload btn_excel" href="/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
										</div>
									</div>
								</div>
							</div>

							<!-- 테이블 -->
							<div class="mm_table" data-table>
								<div class="mm_scroller">
									<table>
										<thead>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														월
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														적립 적립금
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														사용 적립금
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														소멸 적립금
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														누적 적립금
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														2021-04
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">10000000</span>원
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100000</span>원
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>원
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100000</span>원
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2021-03
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">2000000</span>원
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>원
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100000</span>원
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100000</span>원
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2021-02
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">2000000</span>원
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">500000</span>원
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>원
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100000</span>원
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
														<span class="text_num">14000000</span>원
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">600000</span>원
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100000</span>원
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">300000</span>원
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

							<!-- 안내문구 -->
							<div class="mm_note">
								<ul>
									<li>월 기준으로 적립된 적립금, 사용된 적립금, 소멸된 적립금이 노출됩니다.</li>
								</ul>
							</div>
							<!-- // 안내문구 -->
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<div class="mm_table-none">
								<p>검색된 결과가 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 적립금 현황 영역 -->
				</div>
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';

	// 내용없음
	const _isNone = false;
</script>