<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>월별 가입회원</b>
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
										<b>가입연도</b>
									</th>
									<td colspan="7">
										<div class="mm_form-select T=xs">
											<label>
												<select data-select>
													<option>2022년</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
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
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h4 class="mm_heading">
								<b>2022년</b>
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
													자사
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													네이버
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													애플
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													카카오
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													페이코
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													토스
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													합계
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													전년 합계
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													증감율
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													누적 합계
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													2022-01
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">1872</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">3745</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">32</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">566</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">32</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">566</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">5147</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">20180</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													15.2%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">20180</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													2022-02
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">1872</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">3745</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">32</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">566</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">32</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">566</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">5147</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">20180</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													7.2%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">20180</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													2022-03
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">1872</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">3745</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">32</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">566</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">32</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">566</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">5147</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">20180</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													32.8%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">20180</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													2022-04
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">1872</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">3745</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">32</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">566</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">32</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">566</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">5147</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">20180</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													15.2%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">20180</span>
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
													<span class="text_num">7488</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">14980</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">128</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">566</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">128</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">566</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">5147</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">20180</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													15.2%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">20180</span>
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