<template>
	<h5 class="mm_text-label">
		<b>현재 비밀번호</b>
	</h5>
	<form-text
		v-model="currentPassword"
		type="password"
		placeholder="현재 비밀번호를 입력하세요"
		:valid="passwordFormValid.currentPassword"
		:regexp="REGEXP.PASSWORD"
	></form-text>
	<h5 class="mm_text-label">
		<b>새 비밀번호</b>
	</h5>
	<form-text
		v-model="newPassword"
		type="password"
		maxlength="16"
		placeholder="새 비밀번호를 입력하세요"
		:valid="passwordFormValid.newPassword"
		:regexp="REGEXP.PASSWORD"
	></form-text>
	<h5 class="mm_text-label">
		<b>새 비밀번호 확인</b>
	</h5>
	<form-text
		v-model="newPasswordConfirm"
		type="password"
		maxlength="16"
		placeholder="비밀번호를 한번 더 입력하세요"
		:valid="passwordFormValid.newPasswordConfirm"
		:regexp="REGEXP.PASSWORD"
	></form-text>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import { REGEXP } from '$/constants/REGEXP';
	import FormText from '@/component/form/FormText.vue';

	const props = withDefaults(defineProps<{
		currentPassword: string
		newPassword: string
		newPasswordConfirm: string
		passwordFormValid: {
			[key: string]: FormValid
		}
	}>(), {
		password: '',
		newPassword: '',
		newPasswordConfirm: '',
		passwordFormValid: () => {
			return {
				currentPassword: {
					type: 'valid',
					message: '',
					state: 'normal',
					show: false,
				},
				newPassword: {
					type: 'valid',
					message: '',
					state: 'normal',
					show: false,
				},
				newPasswordConfirm: {
					type: 'valid',
					message: '',
					state: 'normal',
					show: false,
				},
			};
		},
	});

	const emit = defineEmits<{
		(e: 'update:currentPassword', value: string): void
		(e: 'update:newPassword', value: string): void
		(e: 'update:newPasswordConfirm', value: string): void
	}>();

	const currentPassword = computed({
		get: () => props.currentPassword,
		set: (value) => emit('update:currentPassword', value),
	});

	const newPassword = computed({
		get: () => props.newPassword,
		set: (value) => emit('update:newPassword', value),
	});

	const newPasswordConfirm = computed({
		get: () => props.newPasswordConfirm,
		set: (value) => emit('update:newPasswordConfirm', value),
	});
</script>