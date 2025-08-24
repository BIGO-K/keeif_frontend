<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>회원등급 수정</b>
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

					<!-- 회원 등급 수정 영역 -->
					<div class="mm_form_box">
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>등급명<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-text T=sm">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">최대 10자 입력</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>등급 이미지<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-image">
												<div class="mm_form-image T=banner">
													<div class="mm_form-image-preview"></div>
													<label>
														<!-- (D) 고정 이미지 사이즈를 data-file의 _imageRatio 값을 width/height 형식으로 넣어주세요(단위px) -->
														<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000, '_imageRatio': '100/100' }">
														<b class="mm_form-image-box mm_btn"><span>이미지 선택</span></b>
													</label>
													<button type="button" class="btn_remove-file">
														<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
													</button>
												</div>
												<div class="mm_form-text">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text><i class="bg_text"></i>
														<span class="text_placeholder">대체 텍스트를 입력하세요.</span>
													</label>
												</div>
												<div class="mm_note T=bottom">
													<ul>
														<li>대체 텍스트는 화면에 노출되지 않으며 이미지를 설명하는 내용을 작성해 주세요.</li>
														<li>이미지 사이즈는 W 100px * H 100px 이고, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
														<li>이미지 사이즈가 다르면, 비율에 맞게 크롭되어 저장됩니다.</li>
														<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
														<li><strong>투명 배경</strong> 이미지만 등록해 주세요.</li>
													</ul>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>등급 색상<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-color" data-colorpicker>
												<input type="text" class="colorfield" value="#FFFFFF" readonly>
												<button type="button" class="btn_picker">
													<i class="bg_color" style="background:#FFF"></i><b class="mm_ir-blind">배경 색상</b>
												</button>
											</div>
											<div class="mm_note">
												<p>선택한 색상으로 프론트 등급 관련 표시 색상이 변경됩니다.</p>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>등급혜택 - 쿠폰</b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<caption>
														<a class="mm_btn T=line T=secondary" href="/member/grade/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>쿠폰 선택</b></a>
													</caption>
													<tbody>
														<!-- (D) 쿠폰 선택 팝업에서 적용된 등급 쿠폰의 설정 영역을 노출합니다. -->
														<tr>
															<th scope="row">
																<b>VVIP 등급쿠폰</b>
																<!-- (D) 삭제 버튼 클릭 시 해당 등급쿠폰 설정 영역을 삭제합니다. -->
																<button type="button" class="mm_btn T=xs T=line T=tertiary">
																	<b>삭제</b>
																</button>
															</th>
															<td>
																<div class="mm_form_mix-linked">
																	<div class="mm_form-text T=xs">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text disabled><i class="bg_text"></i>
																			<span class="text_placeholder mm_ir-blind">쿠폰 발급 매수(숫자만 입력)</span>
																		</label>
																	</div>
																	<p class="text_linked">
																		매 발급
																	</p>
																	<!-- (D) 무제한 발급 체크 시 쿠폰 발급 매수 입력 text input에 disabled를 추가합니다. -->
																	<label class="mm_form-check">
																		<input type="checkbox" data-check checked>
																		<b class="mm_block">
																			<i class="ico_form-check"></i>
																			<span class="text_label">무제한 발급</span>
																		</b>
																	</label>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>VVIP 등급쿠폰2</b>
																<!-- (D) 삭제 버튼 클릭 시 해당 등급쿠폰 설정 영역을 삭제합니다. -->
																<button type="button" class="mm_btn T=xs T=line T=tertiary">
																	<b>삭제</b>
																</button>
															</th>
															<td>
																<div class="mm_form_mix-linked">
																	<div class="mm_form-text T=xs">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text><i class="bg_text"></i>
																			<span class="text_placeholder mm_ir-blind">쿠폰 발급 매수(숫자만 입력)</span>
																		</label>
																	</div>
																	<p class="text_linked">
																		매 발급
																	</p>
																	<!-- (D) 무제한 발급 체크 시 쿠폰 발급 매수 입력 text input에 disabled를 추가합니다. -->
																	<label class="mm_form-check">
																		<input type="checkbox" data-check>
																		<b class="mm_block">
																			<i class="ico_form-check"></i>
																			<span class="text_label">무제한 발급</span>
																		</b>
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
											<b>등급혜택 - 적립금</b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<caption>
														<label class="mm_form-check">
															<input type="checkbox" data-check="{ 'syncer': '.mm_syncer-point' }">
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">사용</span>
															</b>
														</label>
													</caption>
													<tbody class="mm_syncer-point">
														<!-- (D) 기본 등급은 [회원관리 > 적립금설정 > 적립금 설정]에 등록된 조건이 적용되며, input.textfield disabled를 추가합니다. -->
														<tr>
															<th scope="row">
																<b>상품구매</b>
															</th>
															<td>
																<div class="mm_form_mix-linked">
																	<div class="mm_form-text T=xs">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text maxlength="2"><i class="bg_text"></i>
																			<span class="text_placeholder mm_ir-blind">숫자만 입력</span>
																		</label>
																	</div>
																	<p class="text_linked">
																		%
																	</p>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>포토상품평</b>
															</th>
															<td>
																<div class="mm_form_mix-linked">
																	<div class="mm_form-text T=xs">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text maxlength="6"><i class="bg_text"></i>
																			<span class="text_placeholder mm_ir-blind">숫자만 입력</span>
																		</label>
																	</div>
																	<p class="text_linked">
																		원
																	</p>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>일반상품평</b>
															</th>
															<td>
																<div class="mm_form_mix-linked">
																	<div class="mm_form-text T=xs">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text maxlength="6"><i class="bg_text"></i>
																			<span class="text_placeholder mm_ir-blind">숫자만 입력</span>
																		</label>
																	</div>
																	<p class="text_linked">
																		원
																	</p>
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
								<li>등급 내 지정된 쿠폰 변경 시 기존 프론트에서 다운되었던 쿠폰은 제거되며 사용자가 재발급해야 합니다.</li>
								<li>등급 내 쿠폰 변경 시 즉시 반영 처리됩니다.</li>
								<li>등급 혜택 적립금 미설정 시, <strong>[회원관리 &#62; 적립금 설정 &#62; 적립금 설정]</strong> 메뉴에 설정된 조건이 기본 적용됩니다.(등급혜택 적립금은 적립금 설정에서 설정한 값보다 우선 적용됩니다.)</li>
								<li>기본 등급은 <strong>[회원관리 &#62; 적립금 설정 &#62; 적립금 설정]</strong> 메뉴에 설정된 조건이 기본 적용됩니다.</li>
							</ul>
						</div>
						<!-- // 안내문구 -->
					</div>
					<!-- // 회원 등급 수정 영역 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<a class="mm_btn T=xl T=line T=tertiary" href="#" data-href="{ '_type': 'link' }"><b>취소하기</b></a>
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>수정하기</b>
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