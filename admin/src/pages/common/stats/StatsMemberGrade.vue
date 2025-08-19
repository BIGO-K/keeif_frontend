<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>등급별 월 회원수</b>
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
										<b>통계 연도</b>
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
							<h3 class="mm_heading">
								<b>회원 등급</b>
							</h3>
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
													STARTER
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													SILVER
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													GOLD
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													VIP
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													VVIP
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													<p>
														최근 3개월간<br>
														구매금액 <span class="mm_text-secondary">20만원 미만</span><br>
														구매횟수 <span class="mm_text-secondary">1회 미만</span>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<p>
														최근 3개월간<br>
														구매금액 <span class="mm_text-secondary">20만원 이상</span><br>
														구매횟수 <span class="mm_text-secondary">1회 이상</span>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<p>
														최근 3개월간<br>
														구매금액 <span class="mm_text-secondary">40만원 이상</span><br>
														구매횟수 <span class="mm_text-secondary">3회 이상</span>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<p>
														최근 3개월간<br>
														구매금액 <span class="mm_text-secondary">60만원 이상</span><br>
														구매횟수 <span class="mm_text-secondary">5회 이상</span>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<p>
														최근 3개월간<br>
														구매금액 <span class="mm_text-secondary">80만원 이상</span><br>
														구매횟수 <span class="mm_text-secondary">10회 이상</span>
													</p>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<!-- 안내문구 -->
						<div class="mm_note">
							<ul>
								<li>개발팀을 통해 등급 조건 설정이 완료된 등급만 노출됩니다.</li>
								<li>등급별 회원수에는 탈퇴 회원과 휴면 회원이 포함되어 있지 않습니다.</li>
							</ul>
						</div>
						<!-- // 안내문구 -->
					</div>
					<!-- // 테이블영역 -->

					<!-- 테이블영역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
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
														등급
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														회원수
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														비중
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														총 회원수
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td rowspan="5">
													<div class="mm_table-item">
														2022-01
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														VVIP
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
													</div>
												</td>
												<td rowspan="5">
													<div class="mm_table-item">
														<span class="text_num">5000</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														VIP
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														GOLD
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														SILVER
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														STARTER
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
													</div>
												</td>
											</tr>
										</tbody>
										<tbody>
											<tr>
												<td rowspan="5">
													<div class="mm_table-item">
														2022-02
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														VVIP
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
													</div>
												</td>
												<td rowspan="5">
													<div class="mm_table-item">
														<span class="text_num">5000</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														VIP
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														GOLD
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														SILVER
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														STARTER
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
													</div>
												</td>
											</tr>
										</tbody>
										<tbody>
											<tr>
												<td rowspan="5">
													<div class="mm_table-item">
														2022-03
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														VVIP
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
													</div>
												</td>
												<td rowspan="5">
													<div class="mm_table-item">
														<span class="text_num">5000</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														VIP
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														GOLD
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														SILVER
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														STARTER
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
													</div>
												</td>
											</tr>
										</tbody>
										<tbody>
											<tr>
												<td rowspan="5">
													<div class="mm_table-item">
														2022-04
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														VVIP
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
													</div>
												</td>
												<td rowspan="5">
													<div class="mm_table-item">
														<span class="text_num">5000</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														VIP
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														GOLD
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														SILVER
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														STARTER
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
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