<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>다음 쇼핑하우 정산</b>
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
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>경로</b>
									</th>
									<td colspan="7">
										<div class="mm_form-select T=lg">
											<label>
												<select data-select>
													<option>전체</option>
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

					<!-- 주문 상태별 데이터 영역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h4 class="mm_heading">
									<b>주문 상태별 데이터</b>
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
								<div class="mm_scroller">
									<!-- (D) 좌측고정 영역에는 colspan, rowspan을 사용할 수 없으며 th, td에 'S=table-fixed' 클래스를 추가합니다. -->
									<table>
										<thead>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														주문 상태
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														주문 금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														판매 수량
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														실 지불액
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														입금대기
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														입금완료
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">4148000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">69</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">3480960</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														주문취소
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1534000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">20</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1317200</span>
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
														<span class="text_price">5682000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">89</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">4798160</span>
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

							<!-- 안내문구 -->
							<div class="mm_note">
								<ul>
									<li>주문 금액 = 판매가 합계</li>
									<li>주문 취소 = 취소, 반품 포함</li>
									<li>실 지불액 = 판매가 - 1차 쿠폰 할인금액 - 심야 할인 - 즉시 할인 - 중복 쿠폰 - 적립금</li>
									<li>입금 대기 데이터 = 설정된 기간 중 종료일 시점에 입금 대기 상태인 주문 기준으로 집계</li>
								</ul>
							</div>
							<!-- // 안내문구 -->
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h4 class="mm_heading">
									<b>주문 상태별 데이터</b>
								</h4>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>검색된 결과가 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 주문 상태별 데이터 영역 -->

					<!-- 매출 코드별 데이터 영역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h4 class="mm_heading">
									<b>매출 코드별 데이터</b>
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
								<div class="mm_scroller">
									<!-- (D) 좌측고정 영역에는 colspan, rowspan을 사용할 수 없으며 th, td에 'S=table-fixed' 클래스를 추가합니다. -->
									<table>
										<thead>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														경로
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														정상 매출
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														취소
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														반품
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														주문 금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														수수료율
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														공급가액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														부가세
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														daum_mb
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">2575350.00</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">298510.00</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">244600.00</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">2032240.00</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40644.80</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">4064.48</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														daum_mbbox0
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">82600.00</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">0</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">82600.00</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1652.00</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">165.20</span>
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
														<span class="text_price">2657950.00</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">298510.00</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">244600.00</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">2114840.00</span>
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">42296.80</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">4229.68</span>
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

							<!-- 안내문구 -->
							<div class="mm_note">
								<ul>
									<li>정상 매출 = 취소, 반품 제외한 매출(실 지불액 기준)</li>
									<li>주문 금액 = 정상 매출 - 취소 금액 - 반품 금액</li>
								</ul>
							</div>
							<!-- // 안내문구 -->
						</div>
					</template>
					<template v-else>
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h4 class="mm_heading">
									<b>매출 코드별 데이터</b>
								</h4>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>검색된 결과가 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 매출 코드별 데이터 영역 -->
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