<template>
	<layout-popup>
		<template #title>
			<h1><b>팝업 미리보기</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-preview T=preview-popup">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="m_popup-preview-content">
						<i class="image_popup"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt="팝업이미지1"></i>
					</div>

					<!-- (D) 미리보기에서는 스크립트를 연동하지 않습니다. -->
					<div class="m_popup-preview-today">
						<label class="mm_form-check">
							<input type="checkbox" data-check>
							<b class="mm_block">
								<i class="ico_form-check"></i>
								<span class="text_label">오늘 하루 그만보기</span>
							</b>
						</label>
					</div>
				</div>
				<!-- // 본문 내용 -->

				<!-- 현재 페이지 스크립트 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>