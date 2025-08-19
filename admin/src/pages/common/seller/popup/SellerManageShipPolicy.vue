<template>
	<layout-popup>
		<template #title>
			<h1><b>배송 정책 123</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_form_box">
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송 유형<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<p>일반 배송</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송처 구분<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<p>물류 배송(WMS)</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>사용 택배사<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td><p>CJ대한통운</p></td>
										<th scope="row">
											<b>무료 배송 사용 여부<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td><p>사용</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>새벽 배송 사용 여부<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td><p>사용</p></td>
										<th scope="row">
											<b>새벽 배송<br>추가 배송비<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td>
											<p class="text_price">
												3000
											</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>온도구분<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											냉동
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송비<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td>
											<p class="text_price">
												3000
											</p>
										</td>
										<th scope="row">
											<b>반품 배송비<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td>
											<p class="text_price">
												3000
											</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>교환 배송비<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td>
											<p class="text_price">
												6000
											</p>
										</td>
										<th scope="row">
											<b>도서산간<br>추가 배송비<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td>
											<p class="text_price">
												3000
											</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>조건부 무료 배송<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td>
											<p class="text_price">
												0
											</p>
										</td>
										<th scope="row">
											<b>묶음 배송 사용 여부<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td><p>사용</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송지A 연락처<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<b>배송지</b>
															</th>
															<td><p>0102341123123</p></td>
														</tr>
														<tr>
															<th scope="row">
																<b>반품/교환지</b>
															</th>
															<td><p>0102341123123</p></td>
														</tr>
													</tbody>
												</table>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송지B 연락처<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<b>배송지</b>
															</th>
															<td><p>0102341123123</p></td>
														</tr>
														<tr>
															<th scope="row">
																<b>반품/교환지</b>
															</th>
															<td><p>0102341123123</p></td>
														</tr>
													</tbody>
												</table>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>냉장 배송비<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<b>배송비</b>
															</th>
															<td>
																<p class="text_price">
																	5000
																</p>
															</td>
															<th scope="row">
																<b>반품 배송비</b>
															</th>
															<td>
																<p class="text_price">
																	0
																</p>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>교환 배송비</b>
															</th>
															<td>
																<p class="text_price">
																	5000
																</p>
															</td>
															<th scope="row">
																<b>도서산간<br>추가 배송비</b>
															</th>
															<td>
																<p class="text_price">
																	0
																</p>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>냉동 배송비<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<b>배송비</b>
															</th>
															<td>
																<p class="text_price">
																	5000
																</p>
															</td>
															<th scope="row">
																<b>반품 배송비</b>
															</th>
															<td>
																<p class="text_price">
																	0
																</p>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>교환 배송비</b>
															</th>
															<td>
																<p class="text_price">
																	5000
																</p>
															</td>
															<th scope="row">
																<b>도서산간<br>추가 배송비</b>
															</th>
															<td>
																<p class="text_price">
																	0
																</p>
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
						<!-- 유의사항 -->
						<div class="mm_note">
							<ul>
								<li>새벽배송 상품은 기존 배송비에 ‘새벽배송 추가 배송비’가 추가 부과됩니다.</li>
							</ul>
						</div>
						<!-- // 유의사항 -->
					</div>
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>