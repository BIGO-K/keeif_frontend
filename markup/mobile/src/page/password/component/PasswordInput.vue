<template>
	<h5 class="mm_text-label">
		<b>현재 비밀번호</b>
	</h5>
	<form-text
		type="password"
		placeholder="현재 비밀번호를 입력하세요"
	></form-text>
	<h5 class="mm_text-label">
		<b>새 비밀번호</b>
	</h5>
	<form-text
		type="password"
		maxlength="16"
		placeholder="새 비밀번호를 입력하세요"
	></form-text>
	<h5 class="mm_text-label">
		<b>새 비밀번호 확인</b>
	</h5>
	<form-text
		type="password"
		maxlength="16"
		placeholder="비밀번호를 한번 더 입력하세요"
	></form-text>
</template>

<script setup lang="ts">
	import FormText from '@/component/form/FormText.vue';
</script>