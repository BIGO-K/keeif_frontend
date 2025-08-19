<template>
	<layout-popup>
		<template #title>
			<h1><b>${블록 타이틀} 관리</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-display-block">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 타이틀 -->
					<div class="mm_form m...block-title">
						<table>
							<colgroup>
								<col>
								<col>
								<col>
								<col style="width:110px;">
							</colgroup>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>타이틀</b>
									</th>
									<td colspan="2">
										<div class="mm_form-table">
											<table>
												<tbody>
													<tr>
														<th scope="row">
															<b>Mobile</b>
														</th>
														<td>
															<div class="mm_form-table">
																<table>
																	<tbody>
																		<tr>
																			<th scope="row">
																				<b>메인 타이틀</b>
																			</th>
																			<td><p>메인 타이틀</p></td>
																		</tr>
																		<tr>
																			<th scope="row">
																				<b>서브 타이틀</b>
																			</th>
																			<td><p>서브 타이틀</p></td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</td>
													</tr>
													<tr>
														<th scope="row">
															<b>PC</b>
														</th>
														<td>
															<label class="mm_form-check">
																<input type="checkbox" data-check="{ 'desyncer': '.mm_desyncer-pc-title' }" disabled>
																<b class="mm_block">
																	<i class="ico_form-check"></i>
																	<span class="text_label">Mobile에 입력한 텍스트와 동일하게 사용</span>
																</b>
															</label>
															<div class="mm_form-table mm_desyncer-pc-title">
																<table>
																	<tbody>
																		<tr>
																			<th scope="row">
																				<b>메인 타이틀</b>
																			</th>
																			<td><p>메인 타이틀</p></td>
																		</tr>
																		<tr>
																			<th scope="row">
																				<b>서브 타이틀</b>
																			</th>
																			<td><p>-</p></td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</td>
									<td>
										<div class="mm_btn_box">
											<div class="mm_inline">
												<button type="button" class="mm_btn">
													<b>수정</b>
												</button>
											</div>
										</div>
										<!--
											<div class="mm_btn_box">
											<div class="mm_inline">
											<button type="button" class="mm_btn T=line"><b>취소</b></button>
											<button type="button" class="mm_btn"><b>적용</b></button>
											</div>
											</div>
										-->
									</td>
								</tr>
							</tbody>
							<!-- (D) [수정] 버튼 클릭 시 노출하는 형태입니다. -->
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>타이틀</b>
									</th>
									<td colspan="2">
										<div class="mm_form-table">
											<table>
												<tbody>
													<tr>
														<th scope="row">
															<b>Mobile</b>
														</th>
														<td>
															<div class="mm_form-table">
																<table>
																	<tbody>
																		<tr>
																			<th scope="row">
																				<b>메인 타이틀</b>
																			</th>
																			<td>
																				<div class="mm_form-text">
																					<button type="button" class="btn_text-clear">
																						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																					</button>
																					<label>
																						<input type="text" class="textfield" value="메인 타이틀"><i class="bg_text"></i>
																						<span class="text_placeholder mm_ir-blind">Mobile 메인 타이틀</span>
																					</label>
																				</div>
																			</td>
																		</tr>
																		<tr>
																			<th scope="row">
																				<b>서브 타이틀</b>
																			</th>
																			<td>
																				<div class="mm_form-text">
																					<button type="button" class="btn_text-clear">
																						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																					</button>
																					<label>
																						<input type="text" class="textfield"><i class="bg_text"></i>
																						<span class="text_placeholder mm_ir-blind">Mobile 서브 타이틀</span>
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
															<b>PC</b>
														</th>
														<td>
															<label class="mm_form-check">
																<input type="checkbox" data-check="{ 'desyncer': '.mm_desyncer-pc-title2' }" checked>
																<b class="mm_block">
																	<i class="ico_form-check"></i>
																	<span class="text_label">Mobile에 입력한 텍스트와 동일하게 사용</span>
																</b>
															</label>
															<div class="mm_form-table mm_desyncer-pc-title2">
																<table>
																	<tbody>
																		<tr>
																			<th scope="row">
																				<b>메인 타이틀</b>
																			</th>
																			<td>
																				<div class="mm_form-text">
																					<button type="button" class="btn_text-clear">
																						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																					</button>
																					<label>
																						<input type="text" class="textfield" value="메인 타이틀"><i class="bg_text"></i>
																						<span class="text_placeholder mm_ir-blind">PC 메인 타이틀</span>
																					</label>
																				</div>
																			</td>
																		</tr>
																		<tr>
																			<th scope="row">
																				<b>서브 타이틀</b>
																			</th>
																			<td>
																				<div class="mm_form-text">
																					<button type="button" class="btn_text-clear">
																						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																					</button>
																					<label>
																						<input type="text" class="textfield"><i class="bg_text"></i>
																						<span class="text_placeholder mm_ir-blind">PC 서브 타이틀</span>
																					</label>
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
									</td>
									<td>
										<!--
											<div class="mm_btn_box">
											<div class="mm_inline">
											<button type="button" class="mm_btn"><b>수정</b></button>
											</div>
											</div>
										-->
										<div class="mm_btn_box">
											<div class="mm_inline">
												<button type="button" class="mm_btn T=line">
													<b>취소</b>
												</button>
												<button type="button" class="mm_btn">
													<b>적용</b>
												</button>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 타이틀 -->
				</div>
				<!-- // 본문 내용 -->

				<!-- 현재 페이지 스크립트 -->
				<!-- <script src="../js/app_page-display.js"></template> -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import { loadScript } from 'vue-plugin-load-script';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	loadScript(`${window.env_path ?? ''}/js/app_page-display.js`);
</script>