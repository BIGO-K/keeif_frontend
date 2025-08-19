<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>셀러 팝업 등록</b>
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

					<!-- 셀러 팝업 등록 영역 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>제목<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 50자 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>사용 여부<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-using" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">사용</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-using" data-radio>
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
										<b>노출 기간<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
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
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>팝업 위치</b>
									</th>
									<td colspan="3">
										<div class="mm_form-table">
											<table>
												<caption>
													<div class="mm_note">
														<p><i class="ico_note"></i><strong class="mm_text-warning">팝업 노출 위치를 기입해주세요.</strong> 좌측 최상단 꼭지점 (W 0px * H 0px)이 기준입니다. 미설정 시, W 0px * H 0px 으로 기본 설정됩니다.</p>
													</div>
												</caption>
												<tbody>
													<tr>
														<th scope="row">
															<b>너비</b>
														</th>
														<td>
															<div class="mm_form_mix-linked">
																<div class="mm_form-text T=xs">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text maxlength="4"><i class="bg_text"></i>
																		<span class="text_placeholder mm_ir-blind">최대 4자 입력</span>
																	</label>
																</div>
																<span class="text_linked">PX</span>
															</div>
														</td>
													</tr>
													<tr>
														<th scope="row">
															<b>높이</b>
														</th>
														<td>
															<div class="mm_form_mix-linked">
																<div class="mm_form-text T=xs">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text maxlength="4"><i class="bg_text"></i>
																		<span class="text_placeholder mm_ir-blind">최대 4자 입력</span>
																	</label>
																</div>
																<span class="text_linked">PX</span>
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
										<b>팝업 크기</b>
									</th>
									<td colspan="3">
										<div class="mm_form-table">
											<table>
												<caption>
													<div class="mm_note">
														<p><i class="ico_note"></i><strong class="mm_text-warning">팝업 크기 사이즈를 기입해주세요.</strong> 미설정 시, W 600px * H 600px 으로 기본 설정됩니다.</p>
													</div>
												</caption>
												<tbody>
													<tr>
														<th scope="row">
															<b>너비</b>
														</th>
														<td>
															<div class="mm_form_mix-linked">
																<div class="mm_form-text T=xs">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text maxlength="4"><i class="bg_text"></i>
																		<span class="text_placeholder mm_ir-blind">최대 4자 입력</span>
																	</label>
																</div>
																<span class="text_linked">PX</span>
															</div>
														</td>
													</tr>
													<tr>
														<th scope="row">
															<b>높이</b>
														</th>
														<td>
															<div class="mm_form_mix-linked">
																<div class="mm_form-text T=xs">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text maxlength="4"><i class="bg_text"></i>
																		<span class="text_placeholder mm_ir-blind">최대 4자 입력</span>
																	</label>
																</div>
																<span class="text_linked">PX</span>
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
										<b>팝업내용<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_editor"></div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 셀러 팝업 등록 영역 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<a class="mm_btn T=xl T=line T=tertiary" href="#" data-href="{ '_type': 'link' }"><b>취소하기</b></a>
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>등록하기</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 최하단버튼 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>