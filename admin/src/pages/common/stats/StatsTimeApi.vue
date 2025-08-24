<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>시간대별 매출코드 주문</b>
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
										<b>주문일</b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-period">
											<div class="mm_form-text T=calendar">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
													<span class="text_placeholder">주문일</span>
													<i class="ico_datepicker-calendar"></i>
												</label>
											</div>
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
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h3 class="mm_heading">
								<b>2020년</b>
							</h3>
							<div class="mm_rside">
								<div class="mm_form-select T=list">
									<label>
										<select data-select>
											<option>20개 보기</option>
											<option>40개 보기</option>
											<option>60개 보기</option>
											<option>80개 보기</option>
											<option>100개 보기</option>
										</select>
										<b class="text_selected"></b>
										<i class="ico_form-select"></i>
									</label>
								</div>
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
													0시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													1시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													2시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													3시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													4시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													5시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													6시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													7시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													8시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													9시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													10시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													11시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													12시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													13시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													14시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													15시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													16시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													17시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													18시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													19시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													20시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													21시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													22시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													23시
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
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													code 3
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
										</tr>
										<tr>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													code 4
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
													<span class="text_price">960000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">960000</span>
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

						<!-- 페이지네이션 -->
						<!-- (D) 현재 페이지의 메뉴에 'S=page-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
						<div class="mm_pagination">
							<div class="mm_inline">
								<ol>
									<li><a class="S=page-on" href="#" title="선택됨"><b>1</b></a></li>
									<li><a href="#"><b>2</b></a></li>
									<li><a href="#"><b>3</b></a></li>
									<li><a href="#"><b>4</b></a></li>
									<li><a href="#"><b>5</b></a></li>
								</ol>
								<button type="button" class="btn_control-first" onclick="mm.link('')" disabled>
									<i class="ico_page-first"></i><b class="mm_ir-blind">처음</b>
								</button>
								<button type="button" class="btn_control-prev" onclick="mm.link('')" disabled>
									<i class="ico_page-prev"></i><b class="mm_ir-blind">이전</b>
								</button>
								<button type="button" class="btn_control-next" onclick="mm.link('')">
									<i class="ico_page-next"></i><b class="mm_ir-blind">다음</b>
								</button>
								<button type="button" class="btn_control-last" onclick="mm.link('')">
									<i class="ico_page-last"></i><b class="mm_ir-blind">마지막</b>
								</button>
							</div>
							<div class="mm_pagination-jump">
								<div class="mm_form_mix-linked">
									<div class="mm_form-text">
										<label>
											<input type="text" class="textfield" data-text><i class="bg_text"></i>
											<span class="text_placeholder">숫자</span>
										</label>
									</div>
									<button type="button" class="btn_jump">
										<b class="mm_ir-blind">이동</b><i class="ico_page-jump"></i>
									</button>
									<p class="text_linked">
										of 10<strong>(1,125 items)</strong>
									</p>
								</div>
							</div>
						</div>
						<!-- // 페이지네이션 -->
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