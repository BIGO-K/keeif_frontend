<template>
	<div class="mm_inner m_myaccount">
		<my-refund-input></my-refund-input>
		<div class="mm_foot">
			<div class="mm_btn_box">
				<button
					type="button"
					class="mm_btn T=primary"
				>
					<b>변경하기</b>
				</button>
			</div>
		</div>
		<div class="mm_note">
			<ul>
				<li>환불 계좌를 등록하시면 추후 이용 시에도 별도의 입력없이 이용 하실 수 있습니다.</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
	import MyRefundInput from '@/page/mypage/refund/component/MyRefundInput.vue';

	defineExpose<OverlayComponentExpose>({
		title: `환불 계좌 변경`,
	});
</script>