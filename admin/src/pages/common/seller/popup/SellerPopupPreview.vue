<template>
	<layout-popup>
		<template #title>
			<h1><b>일반 문의 관련 팝업</b></h1>
		</template>

		<template #content>
			<!-- (D) 셀러 팝업 기본사이즈는 W 600px * H 600px 이며 팝업등록시 입력한 너비값, 높이값을 인라인요소로 넣어줍니다. -->
			<div class="mm_page-content m_popup-preview" style="width:600px;height:600px;">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="m_popup-preview-content">
						<div class="mm_editor-content">
							<p>안녕하세요.</p>
							<br>
							<p>- 가송장 패널티란 : 협력사가 고객에게 상품을 배송출잘 시킨 후 등록한 운송장번호가 다음날까지 추적이 되지 않거나, 미리 등록하여 실제 배송출발일이 다른 경우</p>
							<p>- 협력사는 가송장 처리된 주문건에 대하여 2일 이내 회사에 이의제기를 할 수 있으며, 이의제기를 하지 않은 주문에 대해서 3일째 자동으로 패널티 부과</p>
							<p>- 가송장 패널티 금액 : 운송장 당 3,000원 부과</p>
							<br>
							<p>이 부분에 대하여 이의제기 하는 방법을 몰라 면책을 받지 못하는 업체들이 있어, 간단하게 이의제기 하는 방법에 대해 화면으로 구성하였습니다.</p>
							<p>아래와 같은 방법으로 가송장 이의제기를 하시어 면책받을 수 있도록 업무진행 부탁드립니다.</p>
							<p>감사합니다.</p>
							<br>
							<p><img src="/public/images/_sample/product_1.jpg" alt="팝업이미지1"></p>
							<br>
							<p><img src="/public/images/_sample/product_2.jpg" alt="팝업이미지1"></p>
						</div>
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
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>