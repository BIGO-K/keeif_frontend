<template>
	<layout-popup>
		<template #title>
			<h1><b>SMS 발송</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
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
										<b>주문번호</b>
									</th>
									<td><p>2022050511554812</p></td>
									<th scope="row">
										<b>주문자(아이디)</b>
									</th>
									<td><p>홍길동(abc_abc)</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>휴대폰 번호</b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-phone" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">주문자 (010-1234-1234)</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-phone" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">수취인 (010-5678-5678)</span>
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
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>발송 표시 번호</b>
									</th>
									<td><p>1566-2671</p></td>
									<th scope="row">
										<b>수신 번호</b>
									</th>
									<td><p>01033335555</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>내용<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-textarea">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<textarea class="textfield" data-text="{ '_resizeMin': 6, '_byte': 45 }"></textarea><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">SMS 내용</span>
											</label>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>발송하기</b>
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