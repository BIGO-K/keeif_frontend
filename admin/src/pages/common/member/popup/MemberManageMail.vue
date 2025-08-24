<template>
	<layout-popup>
		<template #title>
			<h1><b>메일 발송</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-email">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 폼 영역 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>보내는 사람</b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text value="customer@company.com" readonly><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">보내는 사람</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>받는 사람</b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text value="choi@gmail.com" readonly><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">받는 사람</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>메일 제목</b>
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
										<b>내용</b>
									</th>
									<td colspan="3">
										<div class="mm_editor"></div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 폼 영역 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>메일 발송</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 최하단버튼 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>