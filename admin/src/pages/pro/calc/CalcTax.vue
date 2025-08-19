<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>부가세 신고 내역</b>
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
								<tr>
									<th scope="row">
										<b>기간</b>
									</th>
									<td colspan="7">
										<div class="mm_form-select T=xs">
											<label>
												<select data-select>
													<option>2022년 3분기</option>
													<option>2022년 2분기</option>
													<option>2022년 1분기</option>
													<option>2021년 4분기</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="mm_note">
							<ul>
								<li>최대 1년의 로그가 저장되어 있어, 1년 이전의 로그는 검색할 수 없습니다.</li>
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

					<!-- 월별 내역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>월별 내역</b>
								</h3>
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
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														기간
													</div>
												</th>
												<th scope="col" colspan="2">
													<div class="mm_table-item">
														과세/면세 구분
													</div>
												</th>
												<th scope="col" colspan="4">
													<div class="mm_table-item">
														상세 내역
													</div>
												</th>
											</tr>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														과세 매출금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														면세 매출금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														현금 외 결제수단
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														현금영수증(소득공제)
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														현금영수증(지출증빙)
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														적립금
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														<a href="/calc/tax/detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>2022-03</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000000</span>원
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														<a href="/calc/tax/detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>2022-03</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000000</span>원
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														<a href="/calc/tax/detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>2022-03</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000000</span>원
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														<a href="/calc/tax/detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>2022-03</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000000</span>원
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
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000000</span>원
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

							<!-- 유의사항 -->
							<div class="mm_note">
								<ul>
									<li>과세/면세 구분 내 금액 = 상세 내역 내 금액(적립금은 하기 안내 확인)</li>
									<li>부가세 신고 대상 금액 내 <strong>적립금</strong> 금액 합산 여부에 따라 계산식이 상이합니다.</li>
									<li>진행중인 월의 대상 금액은 전일 기준으로 계산되어 노출됩니다.</li>
								</ul>
							</div>
							<!-- // 유의사항 -->
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>월별 내역</b>
								</h3>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>검색된 결과가 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 월별 내역 -->
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