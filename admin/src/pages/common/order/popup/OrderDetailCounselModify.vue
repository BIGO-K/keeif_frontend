<template>
	<layout-popup>
		<template #title>
			<h1><b>상담 정보 수정</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<a class="mm_btn" href="/cs/notify/register" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>CS 알리미</b></a>
									</div>
								</div>
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
											<b>주문번호</b>
										</th>
										<td><p>2022050511554812</p></td>
										<th scope="row">
											<b>고객명</b>
										</th>
										<td><p>홍길동</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>관리 상태</b>
										</th>
										<td>
											<div class="mm_form-select">
												<label>
													<select data-select>
														<option>관리 필요 없음</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
										</td>
										<th scope="row">
											<b>관리 사유</b>
										</th>
										<td>
											<div class="mm_form-select">
												<label>
													<select data-select disabled>
														<option>사유를 선택해주세요.</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>관리 일자</b>
										</th>
										<td>
											<div class="mm_form-text T=calendar">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text data-datepicker disabled><i class="bg_text"></i>
													<span class="text_placeholder">날짜선택</span>
													<i class="ico_datepicker-calendar"></i>
												</label>
											</div>
										</td>
										<th scope="row">
											<b>등록자</b>
										</th>
										<td><p>관리자A</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>상담 내용</b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<caption>
														<label class="mm_form-check">
															<input type="checkbox" data-check="{ 'desyncer': '.mm_desyncer-memo-register' }">
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">메모 미등록</span>
															</b>
														</label>
													</caption>
													<tbody class="mm_desyncer-memo-register">
														<tr>
															<td>
																<label class="mm_form-check">
																	<input type="checkbox" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label">중요</span>
																	</b>
																</label>
																<div class="mm_form-textarea">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<textarea class="textfield" data-text="{ '_resizeMin': 6, '_byte': 2000 }"></textarea><i class="bg_text"></i>
																		<span class="text_placeholder mm_ir-blind">상담 내용</span>
																	</label>
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
											<b>문의 유형</b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<caption>
														<label class="mm_form-check">
															<input type="checkbox" data-check="{ 'desyncer': '.mm_desyncer-cs-type' }" checked>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">유형 미선택</span>
															</b>
														</label>
													</caption>
													<tbody class="mm_desyncer-cs-type">
														<tr>
															<td>
																<div class="mm_select-list T=fit">
																	<ul>
																		<li>
																			<div class="mm_form-select">
																				<label>
																					<select data-select>
																						<option>경로 선택</option>
																					</select>
																					<b class="text_selected"></b>
																					<i class="ico_form-select"></i>
																				</label>
																			</div>
																		</li>
																		<li>
																			<div class="mm_form-select">
																				<label>
																					<select data-select>
																						<option>1 DEPTH</option>
																					</select>
																					<b class="text_selected"></b>
																					<i class="ico_form-select"></i>
																				</label>
																			</div>
																		</li>
																		<li>
																			<div class="mm_form-select">
																				<label>
																					<select data-select>
																						<option>2 DEPTH</option>
																					</select>
																					<b class="text_selected"></b>
																					<i class="ico_form-select"></i>
																				</label>
																			</div>
																		</li>
																		<li>
																			<div class="mm_form-select">
																				<label>
																					<select data-select>
																						<option>3 DEPTH</option>
																					</select>
																					<b class="text_selected"></b>
																					<i class="ico_form-select"></i>
																				</label>
																			</div>
																		</li>
																	</ul>
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
						<!-- 폼 하단 -->
						<div class="mm_form_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<a class="mm_btn" href="/cs/notify/register" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>CS 알리미</b></a>
									</div>
								</div>
							</div>
						</div>
						<!-- // 폼 하단 -->
					</div>
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>수정하기</b>
								</button>
							</div>
						</div>
					</div>
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