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
				v-model="form.newPassword"
				type="password"
				maxlength="16"
				placeholder="비밀번호를 입력하세요"
				:valid="passwordFormValid.newPassword"
				:regexp="REGEXP.PASSWORD"
			></form-text>
			<h5 class="mm_text-label">
				<b>새 비밀번호 확인</b>
			</h5>
			<form-text
				v-model="form.newPasswordConfirm"
				type="password"
				maxlength="16"
				placeholder="비밀번호를 한번 더 입력하세요"
				:valid="passwordFormValid.newPasswordConfirm"
				:regexp="REGEXP.PASSWORD"
			></form-text>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						:disabled="!updateAvailable"
						type="button"
						class="mm_btn T=primary"
						@click="changePassword"
					>
						<b>비밀번호 재설정</b>
					</button>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, computed, watch } from 'vue';
	import { onBeforeRouteLeave } from 'vue-router';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFindAuth } from '$/composables/useFindAuth';
	import { useForm } from '$/composables/useForm';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { usePasswordValidator } from '$/composables/usePasswordValidator';
	import { REGEXP } from '$/constants/REGEXP';
	import Layout from '@/component/layout/Layout.vue';
	import FormText from '@/component/form/FormText.vue';

	const { loading, bom, router } = useGlobalPageContext();
	const { passwordFindData, updatePassword, expirePasswordFind } = useFindAuth();

	if (passwordFindData.value == null || !passwordFindData.value.access_token) {
		bom.alert('세션이 만료되었습니다.', () => {
			router.replace({
				name: 'FindPassword',
			});
		});
	}

	const { form, validate } = useForm<{
		loginId: string
		newPassword: string
		newPasswordConfirm: string
	}>(
		{
			loginId: passwordFindData.value.login_id,
			newPassword: '',
			newPasswordConfirm: '',
		},
		{
			rule: {
				'newPassword(새 비밀번호)': ['required', 'usablePassword:loginId'],
				'newPasswordConfirm(새 비밀번호 확인)': ['required', 'in:newPassword'],
			},
			message: {
				'newPasswordConfirm.in': '새 비밀번호 확인이 일치하지 않습니다.',
			},
		},
	);


	const passwordFormValid = ref<{
		[key: string]: FormValid
	}>({
		newPassword: {
			show: false,
			type: 'valid',
			message: '',
			state: 'normal',
		},
		newPasswordConfirm: {
			show: false,
			type: 'valid',
			message: '새 비밀번호와 일치하지 않습니다.',
			state: 'invalid',
		},
	});

	const updateAvailable = computed(() => {
		const states = [
			passwordFormValid.value.newPassword.state,
			passwordFormValid.value.newPasswordConfirm.state,
		];

		return !(states.includes('invalid') || states.includes('danger'));
	});

	watch([
		() => form.value.newPassword,
		() => form.value.newPasswordConfirm,
	], async ([newPassword, newConfirm]) => {
		// new
		passwordFormValid.value.newPassword = usePasswordValidator(
			newPassword,
			passwordFindData.value.login_id,
		).valid.value;
		passwordFormValid.value.newPassword.show = newPassword !== '';

		// confirm
		const confirmed = form.value.newPassword == newConfirm;
		passwordFormValid.value.newPasswordConfirm.show = !confirmed && newConfirm !== '';
		passwordFormValid.value.newPasswordConfirm.state = confirmed ? 'valid' : 'invalid';
	});

	async function changePassword() {
		loading.show();
		try {
			await validate();
			await updatePassword(form.value.newPassword);
			bom.alert('비밀번호가 재설정되었습니다.\n로그인 페이지로 이동합니다.', () => {
				router.replace({ name: 'Login' });
			});
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}

	onBeforeRouteLeave(expirePasswordFind);
</script>