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
						@click="change"
					>
						<b>비밀번호 변경하기</b>
					</button>
					<button
						type="button"
						class="mm_btn T=line"
						@click="changeLater"
					>
						<b>다음에 변경하기</b>
					</button>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, watch, computed } from 'vue';
	import { useRouteQuery } from '@vueuse/router';
	import { useAuthStore } from '$/stores/useAuthStore';
	import { useOrderStore } from '$/stores/useOrderStore';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { usePasswordValidator } from '$/composables/usePasswordValidator';
	import Layout from '@/component/layout/Layout.vue';
	import PasswordInput from '@/page/password/component/PasswordInput.vue';

	const passwordFormValid = ref<{
		[key: string]: FormValid
	}>({
		currentPassword: {
			show: false,
			type: 'valid',
			message: '비밀번호를 입력 해주세요.',
			state: 'invalid',
		},
		newPassword: {
			show: false,
			type: 'valid',
			message: '비밀번호가 일치하지 않습니다.',
			state: 'normal',
		},
		newPasswordConfirm: {
			show: false,
			type: 'valid',
			message: '새 비밀번호와 일치하지 않습니다.',
			state: 'invalid',
		},
	});

	const redirectToAfter = useRouteQuery('redirect_to_after', '/');
	const isRedirectToOrder = computed(() => redirectToAfter.value !== '/' && redirectToAfter.value === 'order');
	const { member, bom, loading, router } = useGlobalPageContext();
	const orderStore = useOrderStore();
	const authStore = useAuthStore();

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
	watch([
		() => form.value.currentPassword,
		() => form.value.newPassword,
		() => form.value.newPasswordConfirm,
	], async ([current, newPassword, newConfirm]) => {
		if (!member.value) {
			return;
		}
		// current
		if (!current) {
			passwordFormValid.value.currentPassword.state = 'invalid';
			passwordFormValid.value.currentPassword.show = true;
		}
		else {
			passwordFormValid.value.currentPassword = usePasswordValidator(current).valid.value;
			passwordFormValid.value.currentPassword.show = passwordFormValid.value.currentPassword.state === 'invalid';
		}

		passwordFormValid.value.newPassword = usePasswordValidator(
			newPassword,
			member.value.login_id,
			'',
			current,
		).valid.value;
		passwordFormValid.value.newPassword.show = newPassword !== '';
		// confirm
		const confirmed = form.value.newPassword == newConfirm;
		passwordFormValid.value.newPasswordConfirm.show = !confirmed && newConfirm !== '';
		passwordFormValid.value.newPasswordConfirm.state = confirmed ? 'valid' : 'invalid';
	});

	function changeLater() {
		bom.confirm('비밀번호 변경을 1개월 후에 진행하시겠습니까?', async (_flag) => {
			if (!_flag) return;
			loading.show();
			try {
				await authStore.passwordChangeWarningConfirm('', '', true);
				if (isRedirectToOrder.value) {
					return orderStore.moveToOrderPage();
				}

				return router.replace(redirectToAfter.value);
			}
			catch (e) {
				useErrorAlert(e);
			}
			finally {
				loading.hide();
			}
		});
	}

	async function change() {
		loading.show();
		try {
			await validate();
			await authStore.passwordChangeWarningConfirm(form.value.currentPassword, form.value.newPassword);
			if (isRedirectToOrder.value) {
				return orderStore.moveToOrderPage();
			}

			return router.replace(redirectToAfter.value);
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}
</script>