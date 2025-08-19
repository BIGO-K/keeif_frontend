<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>목표 대비 실적(MD)</b>
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
										<b>주문 기간</b>
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
														<option>최근 3개월</option>
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
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														구분
													</div>
												</th>
												<th scope="col" colspan="11">
													<div class="mm_table-item">
														기간설정
													</div>
												</th>
												<th scope="col" colspan="2">
													<div class="mm_table-item">
														전년실적
													</div>
												</th>
											</tr>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														목표
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														총 결제가
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														총 판매가
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														달성율
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														1차 쿠폰 할인금액<br>(자사 부담)
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														1차 쿠폰 할인율
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														수수료율
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														차감이익 목표
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														차감이익금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														차감이익율
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														차감이익 달성율
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														전년실적(총 결제가)
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														전년대비 신장률
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														여성패션
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">875858540</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">875858540</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">875858540</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														28.5%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">54012000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2.3%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2.3%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">54012000</span>
													</div>
												</td>
												<!-- (D) 차감이익율이 4% 미만인 경우 차감이익금액, 차감이익율의 'td' 요소에 T=highlight 클래스를 추가합니다 -->
												<td class="T=highlight">
													<div class="mm_table-item">
														<span class="text_price">54012000</span>
													</div>
												</td>
												<td class="T=highlight">
													<div class="mm_table-item">
														2.3%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2.3%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">54012000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														4.5%
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														남성패션
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">875858540</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">875858540</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">875858540</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														28.5%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">54012000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2.3%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2.3%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">54012000</span>
													</div>
												</td>
												<!-- (D) 차감이익율이 4% 미만인 경우 차감이익금액, 차감이익율의 'td' 요소에 T=highlight 클래스를 추가합니다 -->
												<td>
													<div class="mm_table-item">
														<span class="text_price">54012000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														4.3%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2.3%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">54012000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														4.5%
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														라이프스타일
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">875858540</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">875858540</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">875858540</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														28.5%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">54012000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2.3%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2.3%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">54012000</span>
													</div>
												</td>
												<!-- (D) 차감이익율이 4% 미만인 경우 차감이익금액, 차감이익율의 'td' 요소에 T=highlight 클래스를 추가합니다 -->
												<td class="T=highlight">
													<div class="mm_table-item">
														<span class="text_price">54012000</span>
													</div>
												</td>
												<td class="T=highlight">
													<div class="mm_table-item">
														2.3%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2.3%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">54012000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														4.5%
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