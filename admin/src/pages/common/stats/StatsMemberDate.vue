<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>일별 회원수</b>
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
										<b>통계 월</b>
									</th>
									<td colspan="7">
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
								<h4 class="mm_heading">
									<b>2022년 04월</b>
								</h4>
								<div class="mm_rside">
									<span class="text_unit">(단위: 명)</span>
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
												<th scope="col">
													<div class="mm_table-item">
														일자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														회원수
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														탈퇴 회원수
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														휴면 회원수
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														누적 회원수
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-04-01
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">45520</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">37</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">32</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">32</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-04-02
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">45522</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">45</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">32</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">32</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-04-03
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">45524</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">32</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">32</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-04-04
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">45526</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">32</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">32</span>
													</div>
												</td>
											</tr>
										</tbody>
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