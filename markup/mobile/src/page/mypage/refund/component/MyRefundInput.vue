<template>
	<h6 class="mm_text-label">
		<b>예금주명</b>
	</h6>
	<form-text
		placeholder="예금주명을 입력하세요"
	></form-text>
	<h6 class="mm_text-label">
		<b>은행명</b>
	</h6>
	<form-select :v-model="sortBank">
		<option>은행을 선택하세요</option>
	</form-select>
	<h6 class="mm_text-label">
		<b>계좌번호</b>
	</h6>
	<form-text
		type="number"
		placeholder="계좌번호를 입력하세요(숫자만 입력)"
	></form-text>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import FormText from '@/component/form/FormText.vue';

	const sortBank = ref('');
</script>