<template>
	<h6 class="mm_text-label">
		<b>문의 제목</b>
	</h6>
	<form-text
		placeholder="문의 제목을 입력하세요"
	></form-text>
	<h6 class="mm_text-label">
		<b>문의 내용</b>
	</h6>
	<form-textarea
		placeholder="최소 10자 이상 입력하세요"
		:byte="2000"
	></form-textarea>
</template>

<script setup lang="ts">
	import FormText from '@/component/form/FormText.vue';
	import FormTextarea from '@/component/form/FormTextarea.vue';
</script>