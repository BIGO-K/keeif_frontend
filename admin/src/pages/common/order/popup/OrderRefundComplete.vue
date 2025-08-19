<template>
	<layout-popup>
		<template #title>
			<h1><b>수동 환불 완료 처리</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 주문 정보 -->
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
									<td><a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>202205070001</b></a></td>
									<th scope="row">
										<b>주문일시</b>
									</th>
									<td><p>2022-05-07 09:09:10</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>반품 주문번호</b>
									</th>
									<td><a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>202205070001</b></a></td>
									<th scope="row">
										<b>거래번호</b>
									</th>
									<td><p>3456789</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>환불 요청일시</b>
									</th>
									<td><p>2022-05-07 09:09:10</p></td>
									<th scope="row">
										<b>환불 실패일시</b>
									</th>
									<td><p>2022-05-07 09:09:10</p></td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 주문 정보 -->

					<!-- 환불 계좌 정보 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>환불 계좌 정보</b>
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
											<b>예금주<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text="{ '_byte': 30 }"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">최대 30자 입력</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>환불 계좌 정보<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked T=fit">
												<div class="mm_form-select T=xs">
													<label>
														<select data-select>
															<option>은행을 선택하세요.</option>
														</select>
														<b class="text_selected"></b>
														<i class="ico_form-select"></i>
													</label>
												</div>
												<div class="mm_form-text">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text maxlength="20"><i class="bg_text"></i>
														<span class="text_placeholder">계좌번호를 입력하세요.(숫자만 입력)</span>
													</label>
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="mm_note">
							<ul>
								<li>환불 계좌 정보를 입력 후 변경하기 버튼 클릭 시 <strong>환불 완료</strong> 상태로 변경됩니다.</li>
								<li>환불 계좌로 수동 환불 처리를 진행해 주셔야 합니다.</li>
							</ul>
						</div>
					</div>
					<!-- // 환불 계좌 정보 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>변경하기</b>
								</button>
							</div>
						</div>
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