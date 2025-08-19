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
			<b>이름</b>
		</h5>
		<form-text
			v-model="form.name"
			placeholder="이름을 입력하세요"
		></form-text>
		<h5 class="mm_text-label">
			<b>이메일</b>
		</h5>
		<form-text
			v-model="form.email"
			placeholder="이메일을 입력하세요"
		></form-text>
	</div>

	<!-- 휴대폰 번호로 찾기 -->
	<div
		v-if="form.find_type == FIND_TYPE.phone"
		class="mm_syncer-sign-phone S=radio-use"
	>
		<h5 class="mm_text-label">
			<b>이름</b>
		</h5>
		<form-text
			v-model="form.name"
			placeholder="이름을 입력하세요"
		></form-text>
		<h5 class="mm_text-label">
			<b>휴대폰 번호</b>
		</h5>
		<form-text
			v-model="form.phone"
			type="tel"
			placeholder="휴대폰 번호를 입력하세요"
		></form-text>
	</div>

	<!-- 하단버튼 -->
	<div class="mm_foot">
		<div class="mm_btn_box">
			<button
				:disabled="!idFindable"
				type="button"
				class="mm_btn T=primary"
				@click="find"
			>
				<b>아이디 찾기</b>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed, watch } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFindAuth } from '$/composables/useFindAuth';
	import { useForm } from '$/composables/useForm';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import FormRadio from '@/component/form/FormRadio.vue';
	import FormText from '@/component/form/FormText.vue';
	import router from '@/router';

	const { FIND_TYPE, findId } = useFindAuth();
	const { loading } = useGlobalPageContext();
	const { form, validate } = useForm<IdFindForm>(
		{
			name: '',
			find_type: FIND_TYPE.email,
			phone: '',
			email: '',
		},
		{
			rule: {
				'name(이름)': ['required'],
				'email(이메일)': [`requiredIf:find_type,${FIND_TYPE.email}`, 'usableEmailNullable'],
				'phone(휴대폰 번호)': [`requiredIf:find_type,${FIND_TYPE.phone}`, 'nullableMinLength:10', 'validPhoneNumberNullable'],
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

	const idFindable = computed<boolean>(() => {
		const validEmail = /^.+@.+(.com|.net|.co.kr)$/.test(form.value.email || '');

		return form.value.name !== '' && (validEmail || form.value.phone !== '');
	});

	async function find() {
		loading.show();
		try {
			await validate();
			await findId(form.value);
			router.push({
				name: 'FindIdSuccess',
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
		form.value.name = '';
		form.value.phone = '';
		form.value.email = '';
	});
</script>