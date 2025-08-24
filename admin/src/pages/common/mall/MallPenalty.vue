<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>패널티</b>
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

					<!-- 유의사항 -->
					<div class="mm_note">
						<ul>
							<li>패널티 일수는 영업일 기준으로 적용됩니다.(주말, 공휴일 제외)</li>
							<li>변경한 패널티 사용 여부 및 패널티 %의 설정은 변경 이후에 발생된 패널티 주문부터 적용됩니다.</li>
						</ul>
					</div>
					<!-- // 유의사항 -->

					<!-- 주문 미 접수 패널티 설정 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>주문 미 접수 패널티 설정</b>
							</h3>
							<div class="mm_rside">
								<a class="mm_btn T=line btn_help" href="/mall/penalty/help/receipt" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>도움말</b><i class="ico_help"></i></a>
							</div>
						</div>
						<!-- // 폼 상단 -->

						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>사용 여부</b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-miss-using" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">사용</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-miss-using" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">미사용</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>주문 미 접수 패널티<br>(18시 이전 주문건)</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<span class="text_linked">결제완료일 기준 + 3일 적용 패널티</span>
												<div class="mm_form-text T=xs">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text maxlength="2"><i class="bg_text"></i>
														<span class="text_placeholder">숫자만 입력</span>
													</label>
												</div>
												<span class="text_linked">%</span>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>주문 미 접수 패널티<br>(18시 이후 주문건)</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<span class="text_linked">결제완료일 기준 + 4일 적용 패널티</span>
												<div class="mm_form-text T=xs">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text maxlength="2"><i class="bg_text"></i>
														<span class="text_placeholder">숫자만 입력</span>
													</label>
												</div>
												<span class="text_linked">%</span>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<!-- 유의사항 -->
						<div class="mm_note">
							<ul>
								<li>주문 미 접수 패널티 사용 시, 패널티가 적용된 주문은 자동 품절 완료 처리 및 취소/환불 처리되며 상품은 품절 상태로 변경됩니다.</li>
							</ul>
						</div>
						<!-- // 유의사항 -->
					</div>
					<!-- // 주문 미 접수 패널티 설정 -->

					<!-- 주문 배송지연 패널티 설정 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>주문 배송지연 패널티 설정</b>
							</h3>
							<div class="mm_rside">
								<a class="mm_btn T=line btn_help" href="/mall/penalty/help/delay" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>도움말</b><i class="ico_help"></i></a>
							</div>
						</div>
						<!-- // 폼 상단 -->

						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>사용 여부</b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-delay-using" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">사용</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-delay-using" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">미사용</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송지연 패널티</b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<td>
																<div class="mm_form_mix-linked">
																	<span class="text_linked">배송준비중 기준 + 3일 적용 패널티</span>
																	<div class="mm_form-text T=xs">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text maxlength="2"><i class="bg_text"></i>
																			<span class="text_placeholder">숫자만 입력</span>
																		</label>
																	</div>
																	<span class="text_linked">%</span>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="mm_form_mix-linked">
																	<span class="text_linked">배송준비중 기준 + 4일 적용 패널티</span>
																	<div class="mm_form-text T=xs">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text maxlength="2"><i class="bg_text"></i>
																			<span class="text_placeholder">숫자만 입력</span>
																		</label>
																	</div>
																	<span class="text_linked">%</span>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="mm_form_mix-linked">
																	<span class="text_linked">배송준비중 기준 + 5일 적용 패널티</span>
																	<div class="mm_form-text T=xs">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text maxlength="2"><i class="bg_text"></i>
																			<span class="text_placeholder">숫자만 입력</span>
																		</label>
																	</div>
																	<span class="text_linked">%</span>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="mm_form_mix-linked">
																	<span class="text_linked">배송준비중 기준 + 6일 적용 패널티</span>
																	<div class="mm_form-text T=xs">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text maxlength="2"><i class="bg_text"></i>
																			<span class="text_placeholder">숫자만 입력</span>
																		</label>
																	</div>
																	<span class="text_linked">%</span>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="mm_form_mix-linked">
																	<span class="text_linked">배송준비중 기준 + 2일 이내 예약배송 미 처리 시 적용 패널티</span>
																	<div class="mm_form-text T=xs">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text maxlength="2"><i class="bg_text"></i>
																			<span class="text_placeholder">숫자만 입력</span>
																		</label>
																	</div>
																	<span class="text_linked">%</span>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송지연 패널티<br>(해외배송/주문제작)</b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<td>
																<div class="mm_form_mix-linked">
																	<span class="text_linked">배송준비중 기준 + 18일 적용 패널티</span>
																	<div class="mm_form-text T=xs">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text maxlength="2"><i class="bg_text"></i>
																			<span class="text_placeholder">숫자만 입력</span>
																		</label>
																	</div>
																	<span class="text_linked">%</span>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="mm_form_mix-linked">
																	<span class="text_linked">배송준비중 기준 + 19일 적용 패널티</span>
																	<div class="mm_form-text T=xs">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text maxlength="2"><i class="bg_text"></i>
																			<span class="text_placeholder">숫자만 입력</span>
																		</label>
																	</div>
																	<span class="text_linked">%</span>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="mm_form_mix-linked">
																	<span class="text_linked">배송준비중 기준 + 20일 적용 패널티</span>
																	<div class="mm_form-text T=xs">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text maxlength="2"><i class="bg_text"></i>
																			<span class="text_placeholder">숫자만 입력</span>
																		</label>
																	</div>
																	<span class="text_linked">%</span>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="mm_form_mix-linked">
																	<span class="text_linked">배송준비중 기준 + 21일 적용 패널티</span>
																	<div class="mm_form-text T=xs">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text maxlength="2"><i class="bg_text"></i>
																			<span class="text_placeholder">숫자만 입력</span>
																		</label>
																	</div>
																	<span class="text_linked">%</span>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="mm_form_mix-linked">
																	<span class="text_linked">배송준비중 기준 + 2일 이내 예약배송 미 처리 시 적용 패널티</span>
																	<div class="mm_form-text T=xs">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text maxlength="2"><i class="bg_text"></i>
																			<span class="text_placeholder">숫자만 입력</span>
																		</label>
																	</div>
																	<span class="text_linked">%</span>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<!-- 유의사항 -->
						<div class="mm_note">
							<ul>
								<li>배송지연 패널티 사용 시, D+6일 / D+21일 패널티가 적용된 주문은 자동 취소 및 환불 처리되고 상품은 미진열 상태로 변경됩니다.</li>
							</ul>
						</div>
						<!-- // 유의사항 -->
					</div>
					<!-- // 주문 배송지연 패널티 설정 -->

					<!-- 품절 패널티 설정 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>품절 패널티 설정</b>
							</h3>
							<div class="mm_rside">
								<a class="mm_btn T=line btn_help" href="/mall/penalty/help/soldout" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>도움말</b><i class="ico_help"></i></a>
							</div>
						</div>
						<!-- // 폼 상단 -->

						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>사용 여부</b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-soldout-using" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">사용</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-soldout-using" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">미사용</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>품절 패널티</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<span class="text_linked">결제완료일 기준 + 3일 적용 패널티</span>
												<div class="mm_form-text T=xs">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text maxlength="2"><i class="bg_text"></i>
														<span class="text_placeholder">숫자만 입력</span>
													</label>
												</div>
												<span class="text_linked">%</span>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- // 품절 패널티 설정 -->

					<!-- 가송장 패널티 설정 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>가송장 패널티 설정</b>
							</h3>
							<div class="mm_rside">
								<a class="mm_btn T=line btn_help" href="/mall/penalty/help/invoice" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>도움말</b><i class="ico_help"></i></a>
							</div>
						</div>
						<!-- // 폼 상단 -->

						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>사용 여부</b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-proforma-using" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">사용</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-proforma-using" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">미사용</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>가송장 패널티</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<span class="text_linked">운송장 등록일 기준 + 2일 적용 패널티 (운송장 흐름이 없을 시 패널티)</span>
												<div class="mm_form-text T=xs">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text maxlength="6"><i class="bg_text"></i>
														<span class="text_placeholder">숫자만 입력</span>
													</label>
												</div>
												<span class="text_linked">원</span>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- // 가송장 패널티 설정 -->

					<!-- 반품 미처리 패널티 설정 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>반품 미처리 패널티 설정</b>
							</h3>
							<div class="mm_rside">
								<a class="mm_btn T=line btn_help" href="/mall/penalty/help/return" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>도움말</b><i class="ico_help"></i></a>
							</div>
						</div>
						<!-- // 폼 상단 -->

						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>사용 여부</b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-return-using" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">사용</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-return-using" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">미사용</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>반품 미처리 패널티</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<span class="text_linked">반품수거 완료일 기준 + 3일 적용 패널티</span>
												<div class="mm_form-text T=xs">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text maxlength="2"><i class="bg_text"></i>
														<span class="text_placeholder">숫자만 입력</span>
													</label>
												</div>
												<span class="text_linked">%</span>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<!-- 유의사항 -->
						<div class="mm_note">
							<ul>
								<li>반품 미처리 패널티 사용 시, 패널티가 적용된 주문은 자동 반품완료 및 환불처리가 진행됩니다.</li>
							</ul>
						</div>
						<!-- // 유의사항 -->
					</div>
					<!-- // 반품 미처리 패널티 설정 -->

					<!-- 교환 미처리 패널티 설정 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>교환 미처리 패널티 설정</b>
							</h3>
							<div class="mm_rside">
								<a class="mm_btn T=line btn_help" href="/mall/penalty/help/exchange" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>도움말</b><i class="ico_help"></i></a>
							</div>
						</div>
						<!-- // 폼 상단 -->

						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>사용 여부</b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-exchange-using" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">사용</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-exchange-using" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">미사용</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>교환 미처리 패널티</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<span class="text_linked">교환수거 완료일 기준 + 3일 적용 패널티</span>
												<div class="mm_form-text T=xs">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text maxlength="2"><i class="bg_text"></i>
														<span class="text_placeholder">숫자만 입력</span>
													</label>
												</div>
												<span class="text_linked">%</span>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<!-- 유의사항 -->
						<div class="mm_note">
							<ul>
								<li>교환 미처리 패널티 사용 시, 패널티가 적용된 주문은 자동 교환회수 완료 상태로 변경됩니다.</li>
							</ul>
						</div>
						<!-- // 유의사항 -->
					</div>
					<!-- // 교환 미처리 패널티 설정 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>저장하기</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 최하단버튼 -->

					<!-- 현재 패널티 면제 셀러 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h3 class="mm_heading">
								<b>현재 패널티 면제 셀러</b>
							</h3>
						</div>
						<!-- // 테이블상단 -->

						<!-- 테이블 -->
						<div class="mm_table" data-table>
							<div class="mm_scroller">
								<table>
									<thead>
										<tr>
											<th scope="col">
												<div class="mm_table-item">
													셀러 코드
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													셀러명
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													123123132
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러 A
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													123123132
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러 A
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->
					</div>
					<!-- // 현재 패널티 면제 셀러 -->

					<!-- 다음달 패널티 면제 예정 셀러 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h3 class="mm_heading">
								<b>다음달 패널티 면제 예정 셀러</b>
							</h3>
						</div>
						<!-- // 테이블상단 -->

						<!-- 테이블 -->
						<div class="mm_table" data-table>
							<div class="mm_scroller">
								<table>
									<thead>
										<tr>
											<th scope="col">
												<div class="mm_table-item">
													셀러 코드
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													셀러명
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													123123132
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러 A
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													123123132
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러 A
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->

						<!-- 유의사항 -->
						<div class="mm_note">
							<ul>
								<li>패널티 면제는 <strong>셀러관리 &#62; 셀러 &#62; 셀러 관리자</strong> 메뉴에서 설정 가능합니다.</li>
								<li>이번 달에 설정한 패널티 면제 여부는 다음 달에 반영됩니다. 예) 4월에 셀러의 패널티 적용 여부를 [적용 안함] 으로 설정 시, 5월부터 패널티가 면제되며 4월에는 패널티 적용됨</li>
							</ul>
						</div>
						<!-- // 유의사항 -->
					</div>
					<!-- // 다음달 패널티 면제 예정 셀러 -->
				</div>
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>
