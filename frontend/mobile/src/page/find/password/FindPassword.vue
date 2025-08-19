<template>
	<!-- 아이디/비밀번호 찾기 방식 -->
	<div class="mm_radio-list">
		<ul>
			<li>
				<form-radio
					v-model="form.find_type"
					name="find_type"
					:value="FIND_TYPE.email"
				>
					<b class="mm_block">
						<i class="ico_email"></i>
						<span class="text_label">이메일로 찾기</span>
					</b>
				</form-radio>
			</li>
			<li>
				<form-radio
					v-model="form.find_type"
					name="find_type"
					:value="FIND_TYPE.phone"
				>
					<b class="mm_block">
						<i class="ico_phone"></i>
						<span class="text_label">휴대폰 번호로 찾기</span>
					</b>
				</form-radio>
			</li>
		</ul>
	</div>

	<!-- 이메일로 찾기 -->
	<div
		v-if="form.find_type == FIND_TYPE.email"
		class="mm_syncer-sign-email S=radio-use"
	>
		<h5 class="mm_text-label">
			<b>아이디</b>
		</h5>
		<form-text
			v-model="form.login_id"
			placeholder="아이디를 입력하세요"
			maxlength="50"
			:readonly="verifyCodeSent"
		></form-text>
		<h5 class="mm_text-label">
			<b>이름</b>
		</h5>
		<form-text
			v-model="form.name"
			placeholder="이름을 입력하세요"
			maxlength="50"
			:readonly="verifyCodeSent"
		></form-text>
		<h5 class="mm_text-label">
			<b>이메일</b>
		</h5>
		<form-text
			v-model="form.email"
			placeholder="이메일을 입력하세요"
			maxlength="50"
			:readonly="verifyCodeSent"
		></form-text>
		<button
			type="button"
			class="mm_btn T=line T=dark"
			@click="sendVerificationCode"
		>
			<b>인증번호 발송</b>
		</button>
		<h5 class="mm_text-label">
			<b>인증번호</b>
		</h5>
		<form-text
			v-model.number="form.verification_code"
			placeholder="10분 이내로 입력하세요"
			input-mode="number"
		></form-text>
		<button
			type="button"
			class="mm_btn T=line T=dark"
			@click="verifyCode"
		>
			<b>인증번호 확인</b>
		</button>
	</div>

	<!-- 휴대폰 번호로 찾기 -->
	<div
		v-if="form.find_type == FIND_TYPE.phone"
		class="mm_syncer-sign-phone S=radio-use"
	>
		<h5 class="mm_text-label">
			<b>아이디</b>
		</h5>
		<form-text
			v-model="form.login_id"
			placeholder="아이디를 입력하세요"
			maxlength="50"
			:readonly="verifyCodeSent"
		></form-text>
		<h5 class="mm_text-label">
			<b>이름</b>
		</h5>
		<form-text
			v-model="form.name"
			placeholder="이름을 입력하세요"
			maxlength="50"
			:readonly="verifyCodeSent"
		></form-text>
		<h5 class="mm_text-label">
			<b>휴대폰 번호</b>
		</h5>
		<form-text
			v-model="form.phone"
			type="tel"
			placeholder="휴대폰 번호를 입력하세요"
			:readonly="verifyCodeSent"
			maxlength="12"
		></form-text>
		<button
			type="button"
			class="mm_btn T=line T=dark"
			@click="sendVerificationCode"
		>
			<b>인증번호 발송</b>
		</button>
		<h5 class="mm_text-label">
			<b>인증번호</b>
		</h5>
		<form-text
			v-model="form.verification_code"
			placeholder="10분 이내로 입력하세요"
		></form-text>
		<button
			type="button"
			class="mm_btn T=line T=dark"
			@click="verifyCode"
		>
			<b>인증번호 확인</b>
		</button>
	</div>

	<!-- 하단버튼 -->
	<div class="mm_foot">
		<div class="mm_btn_box">
			<button
				:disabled="!passwordFindable"
				type="button"
				class="mm_btn T=primary"
				@click="find"
			>
				<b>비밀번호 찾기</b>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed, watch } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFindAuth } from '$/composables/useFindAuth';
	import { useForm } from '$/composables/useForm';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import FormRadio from '@/component/form/FormRadio.vue';
	import FormText from '@/component/form/FormText.vue';

	const { loading, bom, router } = useGlobalPageContext();

	const {
		FIND_TYPE,
		sendPasswordFindVerificationCode,
		verifyPasswordCode,
		findPassword,
	} = useFindAuth();
	const { form, validate } = useForm<PasswordFindForm>(
		{
			login_id: '',
			name: '',
			find_type: FIND_TYPE.email,
			phone: '',
			email: '',
			verification_code: null,
		},
		{
			rule: () => {
				const rule = {
					'login_id(아이디)': ['required'],
					'name(이름)': ['required'],
					'email(이메일)': [`requiredIf:find_type,${FIND_TYPE.email}`, 'usableEmailNullable'],
					'phone(휴대폰 번호)': [`requiredIf:find_type,${FIND_TYPE.phone}`, 'nullableMinLength:10', 'validPhoneNumberNullable'],
				};

				return verifyCodeSent.value
					? Object.assign({}, rule, { 'verification_code(인증번호)': ['required'] })
					: rule;
			},
			testers: [
				{
					name: 'usableEmailNullable',
					defaultMessageOnFailure: '사용할 수 없는 메일주소입니다.',
					handler(value) {
						if (value == '' || value == null) {
							return true;
						}
						const emailRegExp = /.+@+([a-z+.])+(\.com$|\.co\.kr$|\.net$|\.kr$)/i;

						return typeof value === 'string' && value.match(emailRegExp) !== null;
					},
				},
				{
					name: 'nullableMinLength',
					defaultMessageOnFailure: ':param(은/는) 최소 :$0자 입력해야 합니다.',
					handler: (value, extras) => {
						if (value == '' || value == null) {
							return true;
						}

						return typeof value === 'string' && value.length >= Number(extras[0]);
					},
				},
				{
					name: 'validPhoneNumberNullable',
					defaultMessageOnFailure: ':param(은/는) 올바른 휴대전화번호가 아닙니다.',
					handler(value) {
						if (value == '' || value == null) {
							return true;
						}

						const phoneNumberRegExp = /^010[0-9]{4}[0-9]{4}$/g;

						return typeof value === 'string' && value.match(phoneNumberRegExp) !== null;
					},
				},
			],
		},
	);

	const verified = ref(false);
	const verifyCodeSent = ref(false);

	const passwordFindable = computed<boolean>(() => {
		return verified.value
			&& form.value.name !== ''
			&& (form.value.email !== '' || form.value.phone !== '')
			&& form.value.verification_code != null;
	});

	async function sendVerificationCode() {
		loading.show();
		try {
			await validate();
			await sendPasswordFindVerificationCode(form.value);
			bom.alert(`입력하신 ${form.value.find_type == FIND_TYPE.email ? '이메일 주소' : '휴대폰 번호'}로 인증번호가 발송되었습니다.`, () => {
				verifyCodeSent.value = true;
			});
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}

	async function verifyCode() {
		if (!verifyCodeSent.value) {
			return bom.alert('인증번호를 발송해주세요.');
		}

		if (form.value.verification_code == null) {
			return bom.alert('인증번호를 입력해주세요.');
		}

		loading.show();
		try {
			await validate();
			await verifyPasswordCode(form.value.verification_code);
			verified.value = true;
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}

	async function find() {
		if (!verified.value) {
			return bom.alert(`${form.value.find_type == FIND_TYPE.email ? '이메일 주소' : '휴대폰 번호'} 인증을 해주세요.`);
		}

		loading.show();
		try {
			await findPassword(form.value);
			router.push({
				name: 'FindPasswordUpdate',
			});
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}


	watch(() => form.value.find_type, () => {
		form.value.login_id = '';
		form.value.name = '';
		form.value.phone = '';
		form.value.email = '';
		form.value.verification_code = null;
	});
</script>