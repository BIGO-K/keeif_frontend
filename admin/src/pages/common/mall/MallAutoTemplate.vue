<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>템플릿명</b>
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
							<li>사용으로 설정한 템플릿만 발송 조건이 되었을 때 고객에게 발송됩니다.</li>
							<li>사용 여부 설정 및 템플릿 설정 완료 후 <strong>저장 버튼을 클릭하셔야 저장 및 적용</strong>됩니다.(저장 버튼 미 클릭 시 설정된 내용은 저장 및 적용되지 않습니다.)</li>
						</ul>
					</div>
					<!-- // 유의사항 -->

					<!-- 자동발송 사용 여부 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>템플릿</b>
									</th>
									<td colspan="3">
										<div class="mm_form-select T=lg">
											<label>
												<select data-select>
													<option>주문완료_결제완료_단일상품</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>메일 자동발송 사용 여부</b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-mail" data-radio="{ 'syncer': '.mm_syncer-account-mail' }">
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">사용</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-mail" data-radio checked>
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
										<b>SMS/알림톡 자동발송 사용 여부</b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-sms" data-radio="{ 'syncer': '.mm_syncer-account-sms' }">
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">사용</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-sms" data-radio checked>
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
							</tbody>
						</table>
					</div>
					<!-- // 자동발송 사용 여부 -->

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

					<!-- 메일 내용 -->
					<div class="mm_syncer-account-mail">
						<div class="mm_form_box">
							<!-- 폼 상단 -->
							<div class="mm_form_box-caption">
								<h3 class="mm_heading">
									<b>메일 자동발송</b>
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
												<b>메일 제목</b>
											</th>
											<td colspan="3">
												<div class="mm_form-text">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text><i class="bg_text"></i>
														<span class="text_placeholder mm_ir-blind">메일 제목</span>
													</label>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>메일 미리보기</b>
											</th>
											<td colspan="3">
												<div class="m_mall-mail-frame">
													<iframe src="https://publish.mmonstar.co.kr/solution/ver2/pc/html/_mail_orderComplete.html" title="템플릿 샘플 명"></iframe>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<!-- 메일 내용 -->

					<!-- sms, 알림톡 템플릿 -->
					<div class="mm_syncer-account-sms">
						<div class="mm_form_box">
							<!-- 폼 상단 -->
							<div class="mm_form_box-caption">
								<h3 class="mm_heading">
									<b>SMS/알림톡 자동발송</b>
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
												<b>SMS 템플릿</b>
											</th>
											<td colspan="3">
												<div class="mm_desyncer-pc-banner">
													<div class="mm_form-table">
														<table>
															<tbody>
																<tr>
																	<th scope="row">
																		<b>발송표시 번호</b>
																	</th>
																	<td><p>42346234234234234</p></td>
																</tr>
																<tr>
																	<td colspan="2">
																		<div class="mm_form-textarea">
																			<button type="button" class="btn_text-clear">
																				<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																			</button>
																			<label>
																				<textarea class="textfield" data-text="{ '_isResize': true, '_resizeMax': 17 }">
                                                                                고객님 안녕하세요.
                                                                                입금하실 계좌번호를 안내해드리겠습니다.

                                                                                ▶ 주문번호: #{주문번호}
                                                                                ▶ 은행명: #{가상계좌은행}
                                                                                ▶ 계좌번호: #{가상계좌번호}
                                                                                ▶ 예금주: #{예금주}
                                                                                ▶ 입금액: #{가상입금액}원
                                                                                ▶ 입금기한: #{가상기한일}까지

                                                                                * 기한 내 미 입금 시 주문은 자동취소됩니다.
                                                                                * 입금자와 주문자명이 일치하지 않아도 입금 가능합니다.
                                                                                * 입금 전 은행별 입금 가능한 이용시간을 확인 후 입금해주세요.

                                                                                항상 엔스테이션을 이용해주셔서 감사합니다.

                                                                                [주문정보 확인하기]
                                                                                </textarea><i class="bg_text"></i>
																				<span class="text_placeholder mm_ir-blind">SMS 템플릿</span>
																			</label>
																		</div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>알림톡 템플릿</b>
											</th>
											<td colspan="3">
												<div class="text_content">
													<p>
														고객님 안녕하세요.<br>
														입금하실 계좌번호를 안내해드리겠습니다.<br>
														<br>
														▶ 주문번호: #{주문번호}<br>
														▶ 은행명: #{가상계좌은행}<br>
														▶ 계좌번호: #{가상계좌번호}<br>
														▶ 예금주: #{예금주}<br>
														▶ 입금액: #{가상입금액}원<br>
														▶ 입금기한: #{가상기한일}까지<br>
														<br>
														* 기한 내 미 입금 시 주문은 자동취소됩니다.<br>
														* 입금자와 주문자명이 일치하지 않아도 입금 가능합니다.<br>
														* 입금 전 은행별 입금 가능한 이용시간을 확인 후 입금해주세요.<br>
														<br>
														항상 엔스테이션을 이용해주셔서 감사합니다.<br>
														<br>
														[주문정보 확인하기]
													</p>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="mm_note">
								<ul>
									<li>알림톡 템플릿 내용은 수정할 수 없습니다. 알림톡 템플릿의 내용 수정이 필요할 시 알림톡 관리업체를 통하여 수정하시기 바랍니다.</li>
									<li>SMS는 알림톡 발송이 실패할 시에만 발송됩니다.</li>
								</ul>
							</div>
						</div>
					</div>
					<!-- // sms, 알림톡 템플릿 -->
				</div>
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>
