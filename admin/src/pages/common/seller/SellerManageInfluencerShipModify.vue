<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>배송 정책 수정[선택한 인플루언서명]</b>
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

					<!-- 배송 정책 수정 영역 -->
					<div class="mm_form_box">
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송 정책명<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text="{ '_byte': 100 }"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">최대 100자 입력</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송처 구분<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<p>업체 배송</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>브랜드 셀러<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<p>브랜드 셀러A</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송 정책<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<span class="text_linked">배송 정책 A</span>
												<!-- (D) 배송 정책, 배송지를 선택한 후 배송 정책 확인 버튼이 노출됩니다. -->
												<a class="mm_btn T=line T=light" href="/seller/manage/ship-policy" data-href="{ '_type': 'popup' }"><b>배송 정책 확인</b></a>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>무료 배송 여부<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-delivery-charge" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">무료배송</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-delivery-charge" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">미사용</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-delivery-charge" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">조건부 무료배송</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>출고 관련 안내 설정</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<div class="mm_form-text T=xs">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text><i class="bg_text"></i>
														<span class="text_placeholder mm_ir-blind">최대 10자 입력</span>
													</label>
												</div>
												<p class="text_linked">
													시 이전 결제 시 당일 출고됩니다.
												</p>
											</div>
											<div class="mm_note">
												<p>입력 시 해당 배송 정책을 사용하는 상품의 상세 페이지 내 상기 문구가 노출됩니다.</p>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송비<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td>
											<div class="mm_form-text T=sm">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder">숫자만 입력</span>
												</label>
											</div>
										</td>
										<th scope="row">
											<b>반품 배송비<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td>
											<div class="mm_form-text T=sm">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder">숫자만 입력</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>교환 배송비<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td>
											<div class="mm_form-text T=sm">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder">숫자만 입력</span>
												</label>
											</div>
											<div class="mm_note">
												<p>왕복 교환 배송비 기입</p>
											</div>
										</td>
										<th scope="row">
											<b>도서산간<br>추가 배송비<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td>
											<div class="mm_form-text T=sm">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder">숫자만 입력</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>조건무 무료 배송</b>
										</th>
										<td>
											<div class="mm_form-text T=sm">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder">숫자만 입력</span>
												</label>
											</div>
										</td>
										<th scope="row">
											<b>묶음 배송 사용 여부<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td>
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-delivery-bundle" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">사용</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-delivery-bundle" data-radio>
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

						<!-- 유의사항 -->
						<div class="mm_note">
							<ul>
								<li>셀러 공구로 사용할 배송정책일 경우 배송처 <strong>'업체 배송'</strong>을 선택해주세요</li>
								<li>키잎 공구로 사용할 배송정책일 경우 배송처 <strong>'물류 배송(WMS)'</strong>를 선택해주세요</li>
								<li>배송비 관련 정보 외 나머지 정보(택배사, 배송지, 반송지)는 원 상품의 배송정책이 적용됩니다.</li>
							</ul>
						</div>
					<!-- // 유의사항 -->
					</div>
					<!-- // 배송 정책 수정 영역 -->

					<!-- 배송지 설정 영역 -->
					<!-- (D) 배송정책 등록 후 공구상품에 한번이라도 매칭이 되었을 경우 노출됩니다. -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>배송지 설정</b>
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
											<b>배송지 1<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<b>배송지명<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td><p>서이천 물류 센터</p></td>
														</tr>
														<tr>
															<th scope="row">
																<b>굿스플로 코드<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td><p></p></td>
														</tr>
														<tr>
															<th scope="row">
																<b>배송지 주소<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td><p>[12345] 경기도 성남시 판교로 242</p></td>
														</tr>
														<tr>
															<th scope="row">
																<b>배송지 연락처<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td><p></p></td>
														</tr>
														<tr>
															<th scope="row">
																<b>반품/교환지 주소<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td><p>[12345] 경기도 성남시 판교로 242</p></td>
														</tr>
														<tr>
															<th scope="row">
																<b>반품/교환지 연락처<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td><p></p></td>
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
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>