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
				<h3><b>정보 보호를 위해 6개월마다<br> <strong class="mm_text-variable">비밀번호를 변경해주세요</strong></b></h3>
				<b>‘다음에 변경’ 시 1개월간 안내를 받지않습니다</b>
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
					<button
						type="button"
						class="mm_btn T=line"
					>
						<b>다음에 변경하기</b>
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