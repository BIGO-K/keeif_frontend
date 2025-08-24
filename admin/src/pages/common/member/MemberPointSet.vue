<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>적립금 설정</b>
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

					<!-- 안내문구 -->
					<div class="mm_note">
						<ul>
							<li>리뷰 작성에 대해 지급된 적립금은 <strong>반품 시 회수 처리</strong>되며, 교환 시에는 회수되지 않습니다.</li>
							<li>교환 완료된 상품에 대한 리뷰 작성 시 적립금은 지급되지 않습니다.</li>
							<li>상품 구매 적립금은 구매확정 시 지급됩니다.</li>
							<li>적립금 지급 비율 변경 시, 변경 후 구매되는 상품 및 작성되는 리뷰부터 적용됩니다.</li>
						</ul>
					</div>
					<!-- // 안내문구 -->

					<!-- 적립금 설정 영역 -->
					<div class="mm_table_box">
						<!-- 테이블 -->
						<div class="mm_table" data-table>
							<div class="mm_scroller">
								<table>
									<thead>
										<tr>
											<th scope="col">
												<div class="mm_table-item">
													적립금 구분
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													사용 유무 설정
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													적립금 설정
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													상품평 작성 적립금
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_radio-list">
														<ul>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-review" data-radio checked>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">사용</span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-review" data-radio>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">미사용</span>
																	</b>
																</label>
															</li>
														</ul>
													</div>
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<div class="mm_form_mix-linked">
														<span class="text_linked">상품평 작성 완료 즉시,</span>
														<div class="mm_form-text">
															<button type="button" class="btn_text-clear">
																<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
															</button>
															<label>
																<input type="text" class="textfield" data-text maxlength="6"><i class="bg_text"></i>
																<span class="text_placeholder">숫자만 입력</span>
															</label>
														</div>
														<span class="text_linked">원 적립금 지급</span>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													포토 상품평 작성 적립금
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_radio-list">
														<ul>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-photoreview" data-radio checked>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">사용</span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-photoreview" data-radio>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">미사용</span>
																	</b>
																</label>
															</li>
														</ul>
													</div>
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<div class="mm_form_mix-linked">
														<span class="text_linked">포토상품평 작성 완료 즉시,</span>
														<div class="mm_form-text">
															<button type="button" class="btn_text-clear">
																<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
															</button>
															<label>
																<input type="text" class="textfield" data-text maxlength="6"><i class="bg_text"></i>
																<span class="text_placeholder">숫자만 입력</span>
															</label>
														</div>
														<span class="text_linked">원 적립금 지급</span>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													상품 구매 적립금
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_radio-list">
														<ul>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-buy" data-radio checked>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">사용</span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-buy" data-radio>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">미사용</span>
																	</b>
																</label>
															</li>
														</ul>
													</div>
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<div class="mm_form_mix-linked">
														<span class="text_linked">배송완료 상태에서 15일 경과 후 최종결제금액 대비</span>
														<div class="mm_form-text">
															<button type="button" class="btn_text-clear">
																<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
															</button>
															<label>
																<input type="text" class="textfield" data-text maxlength="2"><i class="bg_text"></i>
																<span class="text_placeholder">숫자만 입력</span>
															</label>
														</div>
														<span class="text_linked">% 적립금 지급</span>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->
					</div>
					<!-- // 적립금 설정 영역 -->

					<!-- 결제 시 사용 가능 적립금 설정 영역 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>결제 시 사용 가능 적립금 설정</b>
							</h3>
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
											<b>적립금 설정</b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<b>최소 보유 조건</b>
															</th>
															<td>
																<div class="mm_form_mix-linked">
																	<div class="mm_form-text T=xs">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
																			<span class="text_placeholder">숫자만 입력</span>
																		</label>
																	</div>
																	<span class="text_linked">원 보유 필수</span>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>최대 사용 조건</b>
															</th>
															<td>
																<div class="mm_form_mix-linked">
																	<!-- (D) radio 체크 시 mm_form-text의 disabled를 삭제하며, 체크 해제시 disabled를 설정합니다 -->
																	<label class="mm_form-radio">
																		<input type="radio" name="dev_radio-terms" data-radio checked>
																		<b class="mm_block">
																			<i class="ico_form-radio"></i>
																			<span class="text_label mm_ir-blind">선택</span>
																		</b>
																	</label>
																	<span class="text_linked">최종 결제 금액 대비 최대</span>
																	<div class="mm_form-text T=xs">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text><i class="bg_text"></i>
																			<span class="text_placeholder">숫자만 입력</span>
																		</label>
																	</div>
																	<span class="text_linked">% 사용 가능</span>
																</div>
																<br>
																<div class="mm_form_mix-linked">
																	<!-- (D) radio 체크 시 mm_form-text의 disabled를 삭제하며, 체크 해제시 disabled를 설정합니다 -->
																	<label class="mm_form-radio">
																		<input type="radio" name="dev_radio-terms" data-radio>
																		<b class="mm_block">
																			<i class="ico_form-radio"></i>
																			<span class="text_label mm_ir-blind">선택</span>
																		</b>
																	</label>
																	<span class="text_linked">최대</span>
																	<div class="mm_form-text T=xs">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text disabled maxlength="10"><i class="bg_text"></i>
																			<span class="text_placeholder">숫자만 입력</span>
																		</label>
																	</div>
																	<span class="text_linked">원 사용 가능</span>
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

						<!-- 안내문구 -->
						<div class="mm_note">
							<ul>
								<li>최소 보유 조건은 적립금 사용 가능한 최소 보유 금액에 대해 설정합니다. (모든 회원에게 적용)</li>
								<li>최대 사용 조건은 결제 시 최대로 사용 가능한 금액에 대해 설정합니다. 쿠폰까지 모두 적용된 <strong>최종 결제 금액 대비 퍼센트율 입력, 단순 금액 입력</strong> 2가지 중 택하여 입력합니다.</li>
								<li>사용 제한이 없을 경우 0원으로 입력해 주세요.</li>
							</ul>
						</div>
						<!-- // 안내문구 -->
					</div>
					<!-- // 결제 시 사용 가능 적립금 설정 영역 -->

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