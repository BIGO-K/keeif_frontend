<template>
	<layout
		title="비밀번호 재설정"
		layout="popup"
		class="L=sign"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_popup-sign-find">
			<div class="m_popup-sign-title">
				<h3><b>인증이 완료되었습니다</b></h3>
				<p>변경하실 <strong class="mm_text-variable">새 비밀번호</strong>를 입력해주세요</p>
			</div>
			<h5 class="mm_text-label">
				<b>새 비밀번호</b>
			</h5>
			<form-text
				type="password"
				maxlength="16"
				placeholder="비밀번호를 입력하세요"
			></form-text>
			<h5 class="mm_text-label">
				<b>새 비밀번호 확인</b>
			</h5>
			<form-text
				type="password"
				maxlength="16"
				placeholder="비밀번호를 한번 더 입력하세요"
			></form-text>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
					>
						<b>비밀번호 재설정</b>
					</button>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/component/layout/Layout.vue';
	import FormText from '@/component/form/FormText.vue';
</script>