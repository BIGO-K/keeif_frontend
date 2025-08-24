<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>다운로드 쿠폰 수정</b>
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

					<!-- 다운로드 쿠폰 수정 설정 -->
					<div class="mm_form_box">
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>쿠폰명<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<p>다운로드 쿠폰</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>쿠폰 유형<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<p>공동구매 전용 쿠폰</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>쿠폰 설명</b>
										</th>
										<td colspan="3">
											<p>15% 할인 쿠폰</p>
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
											<b>고객 사용 가능 여부<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-custom" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">사용 가능</span>
															</b>
														</label>
													</li>
													<li>
														<div class="mm_form_mix-linked">
															<label class="mm_form-radio">
																<input type="radio" name="dev_radio-custom" data-radio="{ 'syncer': '.mm_syncer-using-custom' }">
																<b class="mm_block">
																	<i class="ico_form-radio"></i>
																	<span class="text_label">사용 불가</span>
																</b>
															</label>
															<div class="mm_syncer-using-custom">
																<div class="mm_form-text">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text="{ '_byte': 30 }"><i class="bg_text"></i>
																		<span class="text_placeholder mm_ir-blind">최대 30자 입력</span>
																	</label>
																</div>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>디바이스 설정<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<p>PC, M WEB, M APP</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>발행 기간<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<p>2022-03-22 12:33:34 ~ 2022-04-01 20:22:22</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>할인율/할인금액<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<p>10%</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>업체 부담률<br>/부담금액<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td><p>5%</p></td>
										<th scope="row">
											<b>할인금액 중<br>업체 부담률</b>
										</th>
										<td><p>50%</p></td>
									</tr>
									<!-- (D) 할인율/할인금액 항목에서 할인금액으로 설정 할 경우 최대할인 금액 영역을 비노출합니다. -->
									<tr>
										<th scope="row">
											<b>최대 할인 금액</b>
										</th>
										<td colspan="3">
											<p><span class="text_price">60,000</span></p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>최저 금액 조건</b>
										</th>
										<td><p><span class="text_price">1,500</span></p></td>
										<th scope="row">
											<b>최저 마진 조건</b>
										</th>
										<td><p>10%</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>유효 기간<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<p>2022-03-22 12:33:34 ~ 2022-04-01 20:22:22</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>쿠폰 적용 범위<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<p>상품</p>
										</td>
									</tr>
									<!-- (D) 쿠폰 유형이 공동구매 전용 쿠폰일 경우 쿠폰 적용 제외 범위 영역을 비노출합니다. -->
									<!--
										<tr>
										<th scope="row"><b>쿠폰 적용 제외 범위</b></th>
										<td colspan="3"><p>셀러</p></td>
										</tr>
									-->
								</tbody>
							</table>
						</div>
					</div>
					<!-- // 다운로드 쿠폰 수정 설정 -->

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