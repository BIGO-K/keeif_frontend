<template>
	<layout-popup>
		<template #title>
			<h1><b>송장 수정</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-invoice-modify">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 송장 정보 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>택배사</b>
									</th>
									<td colspan="3">
										<p>CJ 대한통운</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>송장번호</b>
									</th>
									<td colspan="3">
										<p>416841157013</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 송장 정보 -->

					<!-- 수정 배송 정보 -->
					<div class="mm_form_box">
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>택배사<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-select T=sm">
												<label>
													<select data-select>
														<option>택배사를 선택하세요.</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>송장번호<i class="ico_required" title="필수입력"></i></b>
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
								</tbody>
							</table>
						</div>
					</div>
					<!-- // 수정 배송 정보 -->
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
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>