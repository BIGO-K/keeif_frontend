<template>
	<layout-popup>
		<template #title>
			<h1><b>금지어 등록</b></h1>
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
											<b>금지어 입력</b>
										</th>
										<td colspan="3">
											<div class="mm_form-textarea">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<textarea class="textfield" data-text="{ '_resizeMin': 20 }"></textarea><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">금지어 입력</span>
												</label>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<!-- 유의사항 -->
						<div class="mm_note">
							<ul>
								<li><strong>줄바꿈</strong>으로 구분하여 다중 등록 가능합니다. (최대 100줄)</li>
								<li>영문으로 입력할 경우 <strong>대/소문자 구분 없이</strong> 적용됩니다.</li>
								<li>금지어 해제 시, 선택한 셀러의 이후 <strong>모든 상품 등록 건</strong>에 대해 적용되므로 주의하시기 바랍니다.</li>
							</ul>
						</div>
						<!-- // 유의사항 -->
					</div>

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
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
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>