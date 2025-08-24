<template>
	<h6 class="mm_text-label">
		<b>예금주명</b>
	</h6>
	<form-text
		v-model="ownerName"
		placeholder="예금주명을 입력하세요"
	></form-text>
	<h6 class="mm_text-label">
		<b>은행명</b>
	</h6>
	<form-select v-model.number="bankCode">
		<option>은행을 선택하세요</option>
		<option
			v-for="bank in bankCodes"
			:key="bank.code"
			:value="bank.code"
		>
			{{ bank.label }}
		</option>
	</form-select>
	<h6 class="mm_text-label">
		<b>계좌번호</b>
	</h6>
	<form-text
		v-model="accountNumber"
		input-mode="number"
		placeholder="계좌번호를 입력하세요(숫자만 입력)"
	></form-text>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import FormText from '@/component/form/FormText.vue';

	const props = withDefaults(defineProps<{
		ownerName: string
		bankCode: Nullable<number>
		accountNumber: string
		bankCodes: BankCode[]
	}>(), {
		ownerName: '',
		bankCode: null,
		accountNumber: '',
		bankCodes: () => []
	});

	const emit = defineEmits<{
		(e: 'update:ownerName', value: string): void
		(e: 'update:bankCode', value: string): void
		(e: 'update:accountNumber', value: string): void
	}>();

	/** 예금주 */
	const ownerName = computed({
		get: () => props.ownerName,
		set: (value) => emit('update:ownerName', value)
	});

	/** 은행코드 */
	const bankCode = computed({
		get: () => props.bankCode,
		set: (value) => emit('update:bankCode', value)
	});

	/** 계좌번호 */
	const accountNumber = computed({
		get: () => props.accountNumber,
		set: (value) => emit('update:accountNumber', value)
	});
</script>