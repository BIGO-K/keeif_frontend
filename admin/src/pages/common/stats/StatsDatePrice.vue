<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>매출코드 주문금액</b>
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
										<b>주문 상태</b>
									</th>
									<td colspan="7">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-state" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">집계</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-state" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">주문</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-state" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">취소</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-state" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">반품</span>
														</b>
													</label>
												</li>
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
					<template v-if="_isNone === false">
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
												<th class="S=table-fixed" scope="col">
													<div class="mm_table-item">
														매출코드
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														합계
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														1일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														2일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														3일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														4일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														5일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														6일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														7일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														8일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														9일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														10일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														11일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														12일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														13일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														14일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														15일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														16일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														17일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														18일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														19일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														20일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														21일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														22일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														23일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														24일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														25일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														26일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														27일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														28일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														29일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														30일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														31일
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														code 1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">240000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
											</tr>
											<tr>
												<td class="S=table-fixed">
													<div class="mm_table-item">
														code 2
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">240000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000</span>
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
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">20000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">40000</span>
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