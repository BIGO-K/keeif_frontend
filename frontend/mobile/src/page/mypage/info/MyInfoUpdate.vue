<template>
	<layout
		title="회원정보 수정"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="mm_inner m_popup-myinfo">
			<password-confirm v-if="needCertificate"></password-confirm>

			<template v-if="!needCertificate && memberInformation">
				<h6 class="mm_text-label">
					<b>아이디</b>
				</h6>
				<div class="mm_form-text">
					<label>
						<span class="textfield text_readonly">{{ memberInformation.login_id }}</span>
						<i class="bg_text"></i>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>휴대폰 번호</b>
				</h6>
				<div class="mm_form-text">
					<label>
						<span class="textfield text_readonly">{{ form.phone }}</span>
						<i class="bg_text"></i>
					</label>
				</div>
				<a
					class="mm_btn T=line T=dark"
					@click.prevent="changePhoneNumber"
				>
					<b>휴대폰 번호 {{ memberInformation.phone ? '변경' : '등록' }}</b>
				</a>
				<h6 class="mm_text-label">
					<b>이름</b>
				</h6>
				<div class="mm_form-text">
					<label>
						<span class="textfield text_readonly">{{ form.name }}</span>
						<i class="bg_text"></i>
					</label>
				</div>
				<a
					class="mm_btn T=line T=dark"
					@click.prevent="changeName"
				>
					<b>이름 변경</b>
				</a>
				<template v-if="memberInformation.regist_type === 'shop'">
					<h6 class="mm_text-label">
						<b>비밀번호</b>
					</h6>
					<div class="mm_form-text">
						<label>
							<span class="textfield text_readonly">• • • • • • • •</span>
							<i class="bg_text"></i>
						</label>
					</div>
					<mm-link
						class="mm_btn T=line T=dark"
						:to="{ name: 'PasswordUpdate' }"
					>
						<b>비밀번호 변경</b>
					</mm-link>
				</template>

				<h6 class="mm_text-label">
					<b>이메일</b>
				</h6>
				<form-text
					v-model="form.email"
					placeholder="이메일을 입력하세요"
				></form-text>
				<!--
					<button
					type="button"
					class="mm_btn T=line T=dark"
					>
					<b>중복 확인</b>
					</button>
				-->
				<h6 class="mm_text-label">
					<b>생일</b>
				</h6>
				<div
					v-if="memberInformation.birthday"
					class="mm_form_mix-linked"
				>
					<div class="mm_form-select">
						<label>
							<span class="text_readonly">{{ date(form.birthday, 'M') }}</span>
							<i class="ico_form-select"></i>
						</label>
					</div>
					<div class="mm_form-select">
						<label>
							<span class="text_readonly">{{ date(form.birthday, 'D') }}</span>
							<i class="ico_form-select"></i>
						</label>
					</div>
				</div>
				<div
					v-else
					class="mm_form_mix-linked"
				>
					<form-select v-model.number="birthdayForm.year">
						<option>연</option>
						<option
							v-for="year of limitEndYear"
							:key="year"
							:value="thisYear - year - minAge"
						>
							{{ `${thisYear - year - minAge}년` }}
						</option>
					</form-select>
					<form-select v-model.number="birthdayForm.month">
						<option>월</option>
						<option
							v-for="month in 12"
							:key="month"
							:value="month"
						>
							{{ `${month}월` }}
						</option>
					</form-select>
					<form-select v-model.number="birthdayForm.day">
						<option>일</option>
						<option
							v-for="month in lastDayOfSelectedMonth"
							:key="month"
							:value="month"
						>
							{{ `${month}일` }}
						</option>
					</form-select>
				</div>
				<h6 class="mm_text-label">
					<b>마케팅 수신 동의</b>
				</h6>
				<div class="mm_check-list">
					<ul>
						<li>
							<form-check v-model="form.is_email_receive">
								<span class="text_label"><strong class="mm_text-variable">(선택)</strong>이메일</span>
							</form-check>
						</li>
						<li>
							<form-check v-model="form.is_sms_receive">
								<span class="text_label"><strong class="mm_text-variable">(선택)</strong>SMS</span>
							</form-check>
						</li>
					</ul>
				</div>
				<div class="mm_note">
					<ul>
						<li>선택 항목에 동의하지 않아도 서비스 이용이 가능합니다.</li>
						<li>구매 정보 관련 이메일/SMS는 수신 동의 여부와 관계없이 발송됩니다.</li>
					</ul>
				</div>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=primary"
							@click="updateUser"
						>
							<b>수정 완료</b>
						</button>
						<mm-link
							class="btn_withdraw"
							:to="{ name: 'MyWithdraw' }"
						>
							<b>회원탈퇴</b>
						</mm-link>
					</div>
				</div>
			</template>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, computed, watch } from 'vue';
	import { onBeforeRouteLeave } from 'vue-router';
	import monsDate from '$/utils/date';
	import mons from '$/utils/mons';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useFormatter } from '$/composables/useFormatter';
	import { useIdentityVerification } from '$/composables/useIdentityVerification';
	import { useMemberInformation } from '$/composables/useMemberInformation';
	import Layout from '@/component/layout/Layout.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import PasswordConfirm from '@/page/mypage/info/component/MyInfoPasswordConfirm.vue';

	const { accessToken, removeToken, get, update } = useMemberInformation();
	const needCertificate = computed(() => {
		return accessToken.value === '';
	});

	const { bom, loading } = mons();
	const { open, result } = useIdentityVerification();
	const { date } = useFormatter();
	const memberInformation = ref<PersonalInformation|undefined>(undefined);

	const minAge = 14;
	const limitEndYear = monsDate().get('year') - minAge - 1900;
	const thisYear = monsDate().get('year');
	const lastDayOfSelectedMonth = computed(() => {
		if (!birthdayForm.value.year || !birthdayForm.value.month) {
			return 0;
		}
		const startOfBirthMonth = `${birthdayForm.value.year}-${birthdayForm.value.month}-01`;

		return Number(monsDate(startOfBirthMonth).endOf('month').format('DD'));
	});


	/** form composable */
	const { form, validate } = useForm<PersonalInformationForm>(
		{
			name: '',
			phone: '',
			email: '',
			birthday: '',
			is_email_receive: false,
			is_sms_receive: false,
		},
		{
			rule: {
				'phone(휴대폰 번호)': ['required'],
				'email(이메일)': ['required', 'usableEmail'],
			},
		},
	);

	const { form: birthdayForm, validate: validateBirthday } = useForm<{
		year: number|null
		month: number|null
		day: number|null
	}>(
		{
			year: null,
			month: null,
			day: null,
		},
		{
			rule: {
				'year(태어난 연도)': ['required'],
				'month(태어난 달)': ['required'],
				'day(태어난 날)': ['required'],
			},
		},
	);

	watch(accessToken, async (to) => {
		if (to) {
			fetchUser();
		}
	}, {
		immediate: true,
	});

	// 본인인증 통해 핸드폰 변경
	async function changePhoneNumber() {
		try {
			loading.show();
			await open();
			const profile = await result();
			form.value.phone = profile.phone_number;
			bom.alert('유효한 휴대폰 번호입니다.\n 수정 완료 버튼을 클릭하면 수정사항이 적용됩니다.');
		}
		catch (e) {
			useErrorAlert(e, {
				httpCatcher: {
					401: `본인 인증에 실패하였습니다.\n 다시 시도해 주세요.`,
				},
			});
		}
		finally {
			loading.hide();
		}
	}

	async function changeName() {
		try {
			loading.show();
			await open();
			const profile = await result();
			form.value.name = profile.name;
			bom.alert('유효한 이름입니다.\n 수정 완료 버튼을 클릭하면 수정사항이 적용됩니다.');
		}
		catch (e) {
			useErrorAlert(e, {
				httpCatcher: {
					401: `본인 인증에 실패하였습니다.\n 다시 시도해 주세요.`,
				},
			});
		}
		finally {
			loading.hide();
		}
	}

	async function updateUser() {
		loading.show();
		try {
			await validate();
			if (birthdayForm.value.year || birthdayForm.value.month || birthdayForm.value.day) {
				await validateBirthday();
				const birthday = monsDate(`${birthdayForm.value.year}-${birthdayForm.value.month}-${birthdayForm.value.day}`);
				if (!birthday.isValid()) {
					return bom.alert('생일이 유효하지 않은 날짜입니다.');
				}
				form.value.birthday = birthday.format('YYYYMMDD');
			}
			await update(form.value);
			bom.alert('회원정보가 수정되었습니다.', fetchUser);
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}

	async function fetchUser() {
		try {
			memberInformation.value = await get();
			form.value.name = memberInformation.value.name;
			form.value.phone = memberInformation.value.phone;
			form.value.email = memberInformation.value.email;
			form.value.birthday = memberInformation.value.birthday;
			form.value.is_email_receive = memberInformation.value.is_email_receive;
			form.value.is_sms_receive = memberInformation.value.is_sms_receive;
		}
		catch (e) {
			useErrorAlert(e);
		}
	}

	onBeforeRouteLeave((to, from, next) => {
		if (to.name !== 'MyWithdraw' && to.name !== 'PasswordUpdate') {
			setTimeout(() => {
				removeToken();
			}, 1000);
		}

		return next();
	});
</script>