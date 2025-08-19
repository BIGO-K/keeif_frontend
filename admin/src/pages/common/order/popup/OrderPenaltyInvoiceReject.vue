<template>
	<layout-popup>
		<template #title>
			<h1><b>반려 사유 입력</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-invoice-return">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_form-textarea">
						<button type="button" class="btn_text-clear">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<textarea class="textfield" data-text="{ '_resizeMin': 6, '_byte': 50 }"></textarea><i class="bg_text"></i>
							<span class="text_placeholder">반려 사유를 입력하세요.</span>
						</label>
					</div>
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>처리하기</b>
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