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
			<password-input
				v-model:current-password="form.currentPassword"
				v-model:new-password="form.newPassword"
				v-model:new-password-confirm="form.newPasswordConfirm"
				:password-form-valid="passwordFormValid"
			></password-input>

			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
						:disabled="!updateAvailable"
						@click="update"
					>
						<b>비밀번호 변경하기</b>
					</button>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, computed, watch } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useMemberInformation } from '$/composables/useMemberInformation';
	import { usePasswordValidator } from '$/composables/usePasswordValidator';
	import Layout from '@/component/layout/Layout.vue';
	import PasswordInput from '@/page/password/component/PasswordInput.vue';

	const { bom, loading, router } = useGlobalPageContext();
	const { accessToken, memberInfo, updatePassword } = useMemberInformation();

	if (!accessToken.value || !memberInfo.value) {
		router.replace({
			name: 'MyInfoUpdate',
		});
	}

	const { form, validate } = useForm<{
		currentPassword: string
		newPassword: string
		newPasswordConfirm: string
	}>(
		{
			currentPassword: '',
			newPassword: '',
			newPasswordConfirm: '',
		},
		{
			rule: {
				'currentPassword(현재 비밀번호)': ['required'],
				'newPassword(새 비밀번호)': ['required', 'usablePassword:login_id,phone_number,currentPassword'],
				'newPasswordConfirm(새 비밀번호 확인)': ['required', 'in:newPassword'],
			},
			message: {
				'newPasswordConfirm.in': '새 비밀번호 확인이 일치하지 않습니다.',
			},
		},
	);

	const { checkCurrentPassword } = useMemberInformation();

	const updateAvailable = computed(() => {
		const states = [
			passwordFormValid.value.currentPassword.state,
			passwordFormValid.value.newPassword.state,
			passwordFormValid.value.newPasswordConfirm.state,
		];

		return !(states.includes('invalid') || states.includes('danger'));
	});

	const passwordFormValid = ref<{
		[key: string]: FormValid
	}>({
		currentPassword: {
			show: false,
			type: 'valid',
			message: '비밀번호가 일치하지 않습니다.',
			state: 'invalid',
		},
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

	watch([
		() => form.value.currentPassword,
		() => form.value.newPassword,
		() => form.value.newPasswordConfirm,
	], async ([current, newPassword, newConfirm]) => {
		// current
		if (!current) {
			passwordFormValid.value.currentPassword.state = 'invalid';
			passwordFormValid.value.currentPassword.show = false;
		}
		else {
			const isMatch = await checkCurrentPassword(current);
			passwordFormValid.value.currentPassword.show = !isMatch;
			passwordFormValid.value.currentPassword.state = isMatch ? 'valid' : 'invalid';
		}

		// new
		passwordFormValid.value.newPassword = usePasswordValidator(
			newPassword,
			memberInfo.value.login_id,
			memberInfo.value.phone,
			form.value.currentPassword,
		).valid.value;
		passwordFormValid.value.newPassword.show = newPassword !== '';

		// confirm
		const confirmed = form.value.newPassword == newConfirm;
		passwordFormValid.value.newPasswordConfirm.show = !confirmed && newConfirm !== '';
		passwordFormValid.value.newPasswordConfirm.state = confirmed ? 'valid' : 'invalid';
	});

	async function update() {
		try {
			await validate();
		}
		catch (e) {
			useErrorAlert(e);

			return;
		}

		bom.confirm('비밀번호를 변경하시겠습니까?', async (flag) => {
			if (!flag) {
				return;
			}

			loading.show();
			try {
				await updatePassword(form.value.newPassword);
				bom.alert('비밀번호 변경이 완료되었습니다.', () => {
					router.go(-1);
				});
			}
			catch (e) {
				useErrorAlert(e);
			}
			finally {
				loading.hide();
			}
		});
	}
</script>