<template>
	<layout
		title="비밀번호 변경"
		layout="popup"
		class="L=sign"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_popup-sign">
			<div class="m_popup-sign-title">
				<h3><b>변경하실 비밀번호를<br> 입력해주세요</b></h3>
			</div>

			<password-input></password-input>

			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
					>
						<b>비밀번호 변경하기</b>
					</button>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/component/layout/Layout.vue';
	import PasswordInput from '@/page/password/component/PasswordInput.vue';
</script>