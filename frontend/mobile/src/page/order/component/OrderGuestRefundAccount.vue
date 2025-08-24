<template>
	<section>
		<h6 class="mm_strapline">
			<b>환불 계좌 입력</b>
		</h6>
		<form-text
			v-model="ownerName"
			placeholder="예금주명을 입력하세요"
		></form-text>
		<form-select v-model="bankCode">
			<option>은행을 선택하세요</option>
			<option
				v-for="bank in bankCodes"
				:key="bank.code"
				:value="bank.code"
			>
				{{ bank.label }}
			</option>
		</form-select>
		<form-text
			v-model="accountNumber"
			placeholder="계좌번호를 입력하세요(숫자만 입력)"
		></form-text>
	</section>
</template>

<script setup lang='ts'>
	import { ref, computed } from 'vue';
	import { useMyRefundAccount } from '$/composables/useMyRefundAccount';
	import FormSelect from '@/component/form/FormSelect.vue';

	const props = defineProps<{
		ownerName: string
		bankCode: Nullable<number>
		accountNumber: string
	}>();

	/** 환불계좌 composable */
	const { getBankCodes } = useMyRefundAccount();
	/** 은행코드 리스트 */
	const bankCodes = ref<BankCode[]>([]);

	await getBankCodes().then(pBankCode => bankCodes.value = pBankCode);

	/** form composable */
	const emit = defineEmits<{
		(e: 'update:ownerName', value: string): void
		(e: 'update:bankCode', value: number|null): void
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