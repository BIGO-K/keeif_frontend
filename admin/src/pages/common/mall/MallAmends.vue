<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>고객 보상</b>
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
							<li>고객 보상 미사용시 <strong>보상 비율을 0으로 입력</strong>합니다.</li>
							<li>고객 보상에 적용되는 일수는 영업일 기준으로 적용됩니다.(주말, 공휴일 제외)</li>
							<li>비회원/해외배송/주문제작/주문 후 오프라인 매장을 통한 취소 및 반품은 기준에서 제외됩니다.</li>
							<li>보상 신청은 결제일부터 최대 30일 이내에 가능합니다.</li>
						</ul>
					</div>
					<!-- // 유의사항 -->

					<!-- 최대 보상 가능 금액 설정 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>최대 보상 가능 금액 설정</b>
							</h3>
							<div class="mm_rside">
								<a class="mm_btn T=line btn_help" href="/mall/amends/help/price" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>도움말</b><i class="ico_help"></i></a>
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
											<b>신청 건당 최대 보상 가능 금액</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<div class="mm_form-text T=xs">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text><i class="bg_text"></i>
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
					<!-- // 최대 보상 가능 금액 설정 -->

					<!-- 배송지연 고객 보상 설정 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>배송지연 고객 보상 설정</b>
							</h3>
							<div class="mm_rside">
								<a class="mm_btn T=line btn_help" href="/mall/amends/help/delay" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>도움말</b><i class="ico_help"></i></a>
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
											<b>배송지연 고객 보상</b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<td>
																<div class="mm_form_mix-linked">
																	<span class="text_linked">결제일 기준 + 3일 지연</span>
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
																	<span class="text_linked">결제일 기준 + 4일 지연</span>
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
																	<span class="text_linked">결제일 기준 + 5일 지연</span>
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
																	<span class="text_linked">결제일 기준 + 6일 지연</span>
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
																	<span class="text_linked">결제일 기준 + 7일 이상 지연</span>
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
					</div>
					<!-- // 배송지연 고객 보상 설정 -->

					<!-- 품절취소 고객 보상 설정 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>품절취소 고객 보상 설정</b>
							</h3>
							<div class="mm_rside">
								<a class="mm_btn T=line btn_help" href="/mall/amends/help/soldout" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>도움말</b><i class="ico_help"></i></a>
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
											<b>품절취소 고객 보상</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<span class="text_linked">결제일 기준 + 3일 이후 품절취소 진행</span>
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
					<!-- // 품절취소 고객 보상 설정 -->

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
				</div>
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>