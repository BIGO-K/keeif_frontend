<template>
	<layout-popup>
		<template #title>
			<h1><b>배송지 정보 수정</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-ship-modify">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>수취인<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder">수취인을 입력하세요.</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>수취인 전화번호</b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder">전화번호를 입력하세요.</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>수취인 휴대폰 번호<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder">휴대폰 번호를 입력하세요.</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>배송지 주소<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-address">
											<div class="mm_form_mix-linked">
												<div class="mm_form-text T=xs">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text readonly><i class="bg_text"></i>
														<span class="text_placeholder mm_ir-blind">우편번호</span>
													</label>
												</div>
												<a href="/postcode" class="mm_btn T=line btn_postcode" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>우편번호 찾기</b></a>
											</div>
											<div class="mm_form-text T=lg">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text readonly><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">검색주소</span>
												</label>
											</div>
											<div class="mm_form-text T=lg">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text><i class="bg_text"></i>
													<span class="text_placeholder">상세 주소를 입력하세요.</span>
												</label>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>배송 메시지</b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder">배송 메시지를 입력하세요.</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>새벽배송 정보 입력</b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-info" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">자유 출입 가능</span>
														</b>
													</label>
												</li>
												<li>
													<div class="mm_form_mix-linked">
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-info" data-radio="{ 'syncer': '.mm_syncer-dawn-access' }">
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">공동현관 비밀번호</span>
															</b>
														</label>
														<div class="mm_syncer-dawn-access">
															<div class="mm_form-text">
																<button type="button" class="btn_text-clear">
																	<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																</button>
																<label>
																	<input type="text" class="textfield" data-text><i class="bg_text"></i>
																	<span class="text_placeholder">공동현관 비밀번호를 입력해주세요</span>
																</label>
															</div>
														</div>
													</div>
												</li>
												<li>
													<div class="mm_form_mix-linked">
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-info" data-radio="{ 'syncer': '.mm_syncer-dawn-etc' }">
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">기타</span>
															</b>
														</label>
														<div class="mm_syncer-dawn-etc">
															<div class="mm_form-text">
																<button type="button" class="btn_text-clear">
																	<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																</button>
																<label>
																	<input type="text" class="textfield" data-text><i class="bg_text"></i>
																	<span class="text_placeholder">기타 정보를 입력해주세요</span>
																</label>
															</div>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>수정하기</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 최하단버튼 -->
				</div>
				<!-- // 본문 내용 -->

				<!-- 현재 페이지 스크립트 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>