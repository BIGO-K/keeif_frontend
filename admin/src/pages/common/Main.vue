<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<!-- 고객 상담 현황 -->
					<article class="m_main-cs">
						<div class="m_main-head">
							<h3><b>고객 상담 현황</b></h3>
							<button type="button" class="btn_refresh">
								<b>새로고침</b><i class="ico_refresh"></i>
							</button>
						</div>
						<div class="mm_flex T=equal">
							<dl>
								<dt>CS알리미<i class="ico_new"></i></dt>
								<dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd>
							</dl>
							<dl>
								<dt>고객 문의<i class="ico_new"></i></dt>
								<!-- <dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd> -->
								<dd><a class="text_loading"><i class="ico_loading T=dotted S=ani-gradation"></i><b>조회 중</b></a></dd>
							</dl>
							<dl>
								<dt>이관된 문의<i class="ico_new"></i></dt>
								<dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd>
							</dl>
							<dl>
								<dt>배송 지연 신고<i class="ico_new"></i></dt>
								<dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd>
							</dl>
							<dl>
								<dt>품절 취소 신고<i class="ico_new"></i></dt>
								<dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd>
							</dl>
						</div>
					</article>
					<!-- // 고객 상담 현황 -->

					<div class="mm_flex m_main-inner">
						<!-- 주문 현황 -->
						<article class="m_main-order">
							<div class="m_main-head">
								<h3><b>주문 현황</b></h3>
							</div>
							<div class="mm_lside">
								<!-- 주문/배송관련현황 -->
								<section>
									<h4 class="mm_ir-blind">
										<b>주문/배송관련현황</b>
									</h4>
									<button type="button" class="btn_refresh">
										<b>새로고침</b><i class="ico_refresh"></i>
									</button>
									<dl>
										<dt>결제 완료</dt>
										<dd><a class="text_loading"><i class="ico_loading T=dotted S=ani-gradation"></i><b>조회 중</b></a></dd>
										<dt>배송 준비 중</dt>
										<dd><a class="text_loading"><i class="ico_loading T=dotted S=ani-gradation"></i><b>조회 중</b></a></dd>
										<dt>배송 중</dt>
										<dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd>
										<dt>배송 완료</dt>
										<dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd>
										<dt>구매 확정</dt>
										<dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd>
										<dt>출발 준수일 초과</dt>
										<dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd>
										<dt>배송 지연</dt>
										<dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd>
									</dl>
								</section>
								<!-- // 주문/배송관련현황 -->

								<!-- 품절관련현황 -->
								<section>
									<h4 class="mm_ir-blind">
										<b>품절관련현황</b>
									</h4>
									<button type="button" class="btn_refresh">
										<b>새로고침</b><i class="ico_refresh"></i>
									</button>
									<dl>
										<dt>품절 처리</dt>
										<dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd>
										<dt>가송장</dt>
										<dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd>
									</dl>
								</section>
								<!-- // 품절관련현황 -->

								<!-- 유의사항 -->
								<div class="mm_note">
									<ul>
										<li>최근 1주일 기준으로 누적 집계된 데이터가 노출됩니다.</li>
										<li>출발 준수일 초과 주문, 배송 지연 주문은 누적 데이터가 노출됩니다.</li>
									</ul>
								</div>
								<!-- // 유의사항 -->
							</div>
							<div class="mm_rside">
								<!-- 취소관련현황 -->
								<section>
									<h4 class="mm_ir-blind">
										<b>취소관련현황</b>
									</h4>
									<button type="button" class="btn_refresh">
										<b>새로고침</b><i class="ico_refresh"></i>
									</button>
									<dl>
										<dt>취소 요청</dt>
										<dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd>
										<dt>취소 완료</dt>
										<dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd>
									</dl>
								</section>
								<!-- // 취소관련현황 -->

								<!-- 반품관련현황 -->
								<section>
									<h4 class="mm_ir-blind">
										<b>반품관련현황</b>
									</h4>
									<button type="button" class="btn_refresh">
										<b>새로고침</b><i class="ico_refresh"></i>
									</button>
									<dl>
										<dt>반품 신청</dt>
										<dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd>
										<dt>반품 회수 완료</dt>
										<dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd>
										<dt>반품 보류</dt>
										<dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd>
										<dt>반품 완료 미처리</dt>
										<dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd>
									</dl>
								</section>
								<!-- // 반품관련현황 -->

								<!-- 교환관련현황 -->
								<section>
									<h4 class="mm_ir-blind">
										<b>교환관련현황</b>
									</h4>
									<button type="button" class="btn_refresh">
										<b>새로고침</b><i class="ico_refresh"></i>
									</button>
									<dl>
										<dt>교환 신청</dt>
										<dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd>
										<dt>교환 회수 완료</dt>
										<dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd>
										<dt>교환 보류</dt>
										<dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd>
										<dt>교환 완료 미처리</dt>
										<dd><a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a></dd>
									</dl>
								</section>
								<!-- // 교환관련현황 -->
							</div>
						</article>
						<!-- // 주문 현황 -->

						<div class="mm_rside">
							<!-- 매출 현황 -->
							<article class="m_main-sales">
								<div class="m_main-head">
									<h3><b>매출 현황</b></h3>
									<button type="button" class="btn_refresh">
										<b>새로고침</b><i class="ico_refresh"></i>
									</button>
								</div>
								<div class="mm_tab" data-tab>
									<!-- 탭메뉴 -->
									<div class="mm_tab_menu T=box">
										<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
										<ul class="mm_flex T=equal">
											<li>
												<button type="button" class="btn_tab S=tab-on" title="선택됨">
													<b>12/15</b>
												</button>
											</li>
											<li>
												<button type="button" class="btn_tab">
													<b>12/16</b>
												</button>
											</li>
											<li>
												<button type="button" class="btn_tab">
													<b>12/17</b>
												</button>
											</li>
											<li>
												<button type="button" class="btn_tab">
													<b>12/18</b>
												</button>
											</li>
											<li>
												<button type="button" class="btn_tab">
													<b>12/19</b>
												</button>
											</li>
											<li>
												<button type="button" class="btn_tab">
													<b>12/20</b>
												</button>
											</li>
											<li>
												<button type="button" class="btn_tab">
													<b>12/21</b>
												</button>
											</li>
											<li>
												<button type="button" class="btn_tab">
													<b>12/22</b>
												</button>
											</li>
										</ul>
									</div>
									<!-- // 탭메뉴 -->

									<div class="mm_tab-item S=tab-on">
										<!-- 테이블 -->
										<div class="mm_table_box">
											<div class="mm_table" data-table>
												<div class="mm_scroller">
													<table>
														<thead>
															<tr>
																<th scope="col">
																	<div class="mm_table-item">
																		셀러
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제건 수
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제자 수
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제 금액
																	</div>
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>
																	<div class="mm_table-item">
																		<p class="text_loading">
																			<i class="ico_loading T=dotted S=ani-gradation"></i><b>조회 중</b>
																		</p>
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a class="text_loading"><i class="ico_loading T=dotted S=ani-gradation"></i><b>조회 중</b></a>
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a class="text_loading"><i class="ico_loading T=dotted S=ani-gradation"></i><b>조회 중</b></a>
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a class="text_loading"><i class="ico_loading T=dotted S=ani-gradation"></i><b>조회 중</b></a>
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
										<!-- // 테이블 -->
									</div>
									<div class="mm_tab-item">
										<!-- 테이블 -->
										<div class="mm_table_box">
											<div class="mm_table" data-table>
												<div class="mm_scroller">
													<table>
														<thead>
															<tr>
																<th scope="col">
																	<div class="mm_table-item">
																		셀러
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제건 수
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제자 수
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제 금액
																	</div>
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>
																	<div class="mm_table-item">
																		ALL
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a>
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>명</sub></a>
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a href="#" data-href="{ '_type': 'link' }"><span class="text_price">999999990</span></a>
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
										<!-- // 테이블 -->
									</div>
									<div class="mm_tab-item">
										<!-- 테이블 -->
										<div class="mm_table_box">
											<div class="mm_table" data-table>
												<div class="mm_scroller">
													<table>
														<thead>
															<tr>
																<th scope="col">
																	<div class="mm_table-item">
																		셀러
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제건 수
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제자 수
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제 금액
																	</div>
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>
																	<div class="mm_table-item">
																		ALL
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a>
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>명</sub></a>
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a href="#" data-href="{ '_type': 'link' }"><span class="text_price">999999990</span></a>
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
										<!-- // 테이블 -->
									</div>
									<div class="mm_tab-item">
										<!-- 테이블 -->
										<div class="mm_table_box">
											<div class="mm_table" data-table>
												<div class="mm_scroller">
													<table>
														<thead>
															<tr>
																<th scope="col">
																	<div class="mm_table-item">
																		셀러
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제건 수
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제자 수
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제 금액
																	</div>
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>
																	<div class="mm_table-item">
																		ALL
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a>
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>명</sub></a>
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a href="#" data-href="{ '_type': 'link' }"><span class="text_price">999999990</span></a>
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
										<!-- // 테이블 -->
									</div>
									<div class="mm_tab-item">
										<!-- 테이블 -->
										<div class="mm_table_box">
											<div class="mm_table" data-table>
												<div class="mm_scroller">
													<table>
														<thead>
															<tr>
																<th scope="col">
																	<div class="mm_table-item">
																		셀러
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제건 수
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제자 수
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제 금액
																	</div>
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>
																	<div class="mm_table-item">
																		ALL
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a>
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>명</sub></a>
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a href="#" data-href="{ '_type': 'link' }"><span class="text_price">999999990</span></a>
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
										<!-- // 테이블 -->
									</div>
									<div class="mm_tab-item">
										<!-- 테이블 -->
										<div class="mm_table_box">
											<div class="mm_table" data-table>
												<div class="mm_scroller">
													<table>
														<thead>
															<tr>
																<th scope="col">
																	<div class="mm_table-item">
																		셀러
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제건 수
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제자 수
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제 금액
																	</div>
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>
																	<div class="mm_table-item">
																		ALL
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a>
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>명</sub></a>
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a href="#" data-href="{ '_type': 'link' }"><span class="text_price">999999990</span></a>
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
										<!-- // 테이블 -->
									</div>
									<div class="mm_tab-item">
										<!-- 테이블 -->
										<div class="mm_table_box">
											<div class="mm_table" data-table>
												<div class="mm_scroller">
													<table>
														<thead>
															<tr>
																<th scope="col">
																	<div class="mm_table-item">
																		셀러
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제건 수
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제자 수
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제 금액
																	</div>
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>
																	<div class="mm_table-item">
																		ALL
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a>
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>명</sub></a>
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a href="#" data-href="{ '_type': 'link' }"><span class="text_price">999999990</span></a>
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
										<!-- // 테이블 -->
									</div>
									<div class="mm_tab-item">
										<!-- 테이블 -->
										<div class="mm_table_box">
											<div class="mm_table" data-table>
												<div class="mm_scroller">
													<table>
														<thead>
															<tr>
																<th scope="col">
																	<div class="mm_table-item">
																		셀러
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제건 수
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제자 수
																	</div>
																</th>
																<th scope="col">
																	<div class="mm_table-item">
																		결제 금액
																	</div>
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>
																	<div class="mm_table-item">
																		ALL
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>건</sub></a>
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a href="#" data-href="{ '_type': 'link' }"><span class="text_num">999990</span><sub>명</sub></a>
																	</div>
																</td>
																<td>
																	<div class="mm_table-item">
																		<a href="#" data-href="{ '_type': 'link' }"><span class="text_price">999999990</span></a>
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
										<!-- // 테이블 -->
									</div>
								</div>
								<!-- 유의사항 -->
								<div class="mm_note">
									<ul>
										<li>선택한 날짜에 결제완료 상태로 변경된 주문의 데이터가 노출됩니다.</li>
										<li>취소/반품 진행된 데이터는 반영되지 않습니다.</li>
									</ul>
								</div>
								<!-- // 유의사항 -->
							</article>
							<!-- // 매출 현황 -->

							<!-- 공지사항 -->
							<article class="m_main-notice">
								<div class="m_main-head">
									<h3><b>공지사항</b></h3>
									<a class="btn_more" href="#" data-href="{ '_type': 'link' }"><b>더보기</b><i class="ico_link T=sm"></i></a>
								</div>
								<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
								<div class="mm_tab" data-tab>
									<!-- 탭메뉴 -->
									<div class="mm_tab_menu">
										<ul>
											<li><a class="btn_tab S=tab-on" href="#" title="선택됨"><b>전체</b></a></li>
											<li><a class="btn_tab" href="#"><b>일반</b></a></li>
											<li><a class="btn_tab" href="#"><b>정산</b></a></li>
											<li><a class="btn_tab" href="#"><b>시스템</b></a></li>
										</ul>
									</div>
									<!-- // 탭메뉴 -->

									<!-- 공지사항 전체 -->
									<div class="mm_tab-item S=tab-on">
										<table>
											<tbody>
												<tr>
													<td>일반</td>
													<td><p><a href="#" data-href="{ '_type': 'link' }"><b>일반 문의 관련 공지사항 입니다.<i class="ico_new"></i></b></a></p></td>
													<td><b class="text_date">2020-06-17</b></td>
												</tr>
												<tr>
													<td>정산</td>
													<td><p><a href="#" data-href="{ '_type': 'link' }"><b>공지사항 제목 B<i class="ico_new"></i></b></a></p></td>
													<td><b class="text_date">2020-05-20</b></td>
												</tr>
												<tr>
													<td>시스템</td>
													<td><p><a href="#" data-href="{ '_type': 'link' }"><b>공지사항 제목 C</b></a></p></td>
													<td><b class="text_date">2020-05-12</b></td>
												</tr>
												<tr>
													<td>일반</td>
													<td><p><a href="#" data-href="{ '_type': 'link' }"><b>공지사항 제목 D</b></a></p></td>
													<td><b class="text_date">2020-04-27</b></td>
												</tr>
												<tr>
													<td>정산</td>
													<td><p><a href="#" data-href="{ '_type': 'link' }"><b>공지사항 제목 D</b></a></p></td>
													<td><b class="text_date">2020-04-17</b></td>
												</tr>
											</tbody>
										</table>
									</div>
									<!-- // 공지사항 전체 -->

									<!-- 공지사항 일반 -->
									<div class="mm_tab-item">
										<!-- (D) 등록된 내용이 없을 때 노출되는 형태입니다. -->
										<p class="mm_text-none">
											등록된 내용이 없습니다.
										</p>
									</div>
									<!-- // 공지사항 일반 -->

									<!-- 공지사항 정산 -->
									<div class="mm_tab-item">
										<table>
											<tbody>
												<tr>
													<td>정산</td>
													<td><p><a href="#" data-href="{ '_type': 'link' }"><b>정산 문의 관련 공지사항 입니다.<i class="ico_new"></i></b></a></p></td>
													<td><span class="text_date">2020-06-17</span></td>
												</tr>
												<tr>
													<td>정산</td>
													<td><p><a href="#" data-href="{ '_type': 'link' }"><b>공지사항 제목 B<i class="ico_new"></i></b></a></p></td>
													<td><span class="text_date">2020-05-20</span></td>
												</tr>
												<tr>
													<td>정산</td>
													<td><p><a href="#" data-href="{ '_type': 'link' }"><b>공지사항 제목 C</b></a></p></td>
													<td><span class="text_date">2020-05-12</span></td>
												</tr>
												<tr>
													<td>정산</td>
													<td><p><a href="#" data-href="{ '_type': 'link' }"><b>공지사항 제목 D</b></a></p></td>
													<td><span class="text_date">2020-04-27</span></td>
												</tr>
												<tr>
													<td>정산</td>
													<td><p><a href="#" data-href="{ '_type': 'link' }"><b>공지사항 제목 D</b></a></p></td>
													<td><span class="text_date">2020-04-17</span></td>
												</tr>
											</tbody>
										</table>
									</div>
									<!-- // 공지사항 정산 -->

									<!-- 공지사항 시스템 -->
									<div class="mm_tab-item">
										<table>
											<tbody>
												<tr>
													<td>시스템</td>
													<td><p><a href="#" data-href="{ '_type': 'link' }"><b>시스템 문의 관련 공지사항 입니다.<i class="ico_new"></i></b></a></p></td>
													<td><span class="text_date">2020-06-17</span></td>
												</tr>
												<tr>
													<td>시스템</td>
													<td><p><a href="#" data-href="{ '_type': 'link' }"><b>공지사항 제목 B<i class="ico_new"></i></b></a></p></td>
													<td><span class="text_date">2020-05-20</span></td>
												</tr>
												<tr>
													<td>시스템</td>
													<td><p><a href="#" data-href="{ '_type': 'link' }"><b>공지사항 제목 C</b></a></p></td>
													<td><span class="text_date">2020-05-12</span></td>
												</tr>
												<tr>
													<td>시스템</td>
													<td><p><a href="#" data-href="{ '_type': 'link' }"><b>공지사항 제목 D</b></a></p></td>
													<td><span class="text_date">2020-04-27</span></td>
												</tr>
												<tr>
													<td>시스템</td>
													<td><p><a href="#" data-href="{ '_type': 'link' }"><b>공지사항 제목 D</b></a></p></td>
													<td><span class="text_date">2020-04-17</span></td>
												</tr>
											</tbody>
										</table>
									</div>
									<!-- // 공지사항 시스템 -->
								</div>
							</article>
							<!-- // 공지사항 -->
						</div>
					</div>
				</div>
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>