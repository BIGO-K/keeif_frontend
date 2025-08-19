<template>
	<!-- 비회원 주문조회 -->
	<div class="m_popup-sign">
		<h5 class="mm_text-label">
			<b>이름</b>
		</h5>
		<form-text
			class="T=lg"
			placeholder="이름을 입력하세요"
		></form-text>
		<h5 class="mm_text-label">
			<b>주문번호</b>
		</h5>
		<form-text
			class="T=lg"
			placeholder="주문번호를 입력하세요"
		></form-text>
		<div class="mm_foot">
			<div class="mm_btn_box">
				<button
					type="button"
					class="mm_btn T=lg T=primary"
				>
					<b>비회원 주문조회</b>
				</button>
			</div>
		</div>
	</div>

	<!-- 고객센터 운영시간 -->
	<div class="m_popup-sign-order">
		<div class="m...order-inner">
			<i class="ico_cs"></i>
			<p><strong>1588 - 0000</strong>월~금 10:00~17:00 (점심시간 12:00~13:30)<br> 토, 일, 공휴일 휴무</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	import FormText from '@/component/form/FormText.vue';

	defineExpose<OverlayComponentExpose>({
		title: `비회원 주문조회`,
	});
</script>