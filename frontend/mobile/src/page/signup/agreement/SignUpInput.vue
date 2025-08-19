<template>
	<h3 class="m_popup-join-title">
		<b>STEP 3</b><strong>정보입력</strong><i class="image_line T=step3"></i>
	</h3>
	<!-- (D) '.mm_process' 영역은 단계별 입력 페이지로 현재 순서에 해당하는 '.mm_process-item' 영역에 'S=process-on' 클래스가 추가됩니다. -->
	<div
		ref="$process"
		class="mm_process"
	>
		<!-- 개인정보 설정 -->
		<div class="mm_process-item">
			<h5 class="mm_text-label">
				<b>이름</b>
			</h5>
			<div class="mm_form-text">
				<label>
					<span class="textfield text_readonly">{{ form.name }}</span>
					<i class="bg_text"></i>
				</label>
			</div>
			<h5 class="mm_text-label">
				<b>생년월일</b><strong class="mm_text-variable">(선택)</strong>
			</h5>
			<div class="mm_form_mix-linked">
				<form-select
					v-model.number="form.birth_year"
					@change="() => {form.birth_day = 0}"
				>
					<option value="0">
						년
					</option>
					<option
						v-for="year of limitEndYear"
						:key="year"
						:value="year + 1899"
					>
						{{ `${year + 1899}년` }}
					</option>
				</form-select>
				<form-select
					v-model.number="form.birth_month"
					@change="() => {form.birth_day = 0}"
				>
					<option value="0">
						월
					</option>
					<option
						v-for="month in 12"
						:key="month"
						:value="month"
					>
						{{ `${month}월` }}
					</option>
				</form-select>
				<form-select v-model.number="form.birth_day">
					<option value="0">
						일
					</option>
					<option
						v-for="day in lastDayOfSelectedMonth"
						:key="day"
						:value="day"
					>
						{{ `${day}일` }}
					</option>
				</form-select>
			</div>
			<h5 class="mm_text-label">
				<b>휴대폰 번호</b>
			</h5>
			<div class="mm_form-text">
				<label>
					<span class="textfield text_readonly">{{ form.phone_number }}</span>
					<i class="bg_text"></i>
				</label>
			</div>
			<h5 class="mm_text-label">
				<b>성별</b>
			</h5>
			<div class="mm_radio-list T=chain">
				<ul>
					<li>
						<form-radio
							v-model="form.gender"
							value="F"
							name="gender"
						>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">여자</span>
							</b>
						</form-radio>
					</li>
					<li>
						<form-radio
							v-model="form.gender"
							value="M"
							name="gender"
						>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">남자</span>
							</b>
						</form-radio>
					</li>
					<li>
						<form-radio
							v-model="form.gender"
							value="E"
							name="gender"
						>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">선택안함</span>
							</b>
						</form-radio>
					</li>
				</ul>
			</div>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<div class="mm_flex T=auto">
						<a
							class="mm_btn T=line T=light btn_back"
							href="#"
							@click.prevent="emit('processChange')"
						>
							<i class="ico_page-prev"></i><b>이전으로</b>
						</a>
						<button
							type="button"
							class="mm_btn T=primary"
							@click="index++"
						>
							<b>다음으로</b>
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- 아이디 설정 -->
		<div class="mm_process-item">
			<h5 class="mm_text-label">
				<b>아이디</b>
			</h5>
			<form-text
				v-model="form.login_id"
				:valid="valid.login_id"
				:regexp="REGEXP.LOGIN_ID"
				maxlength="20"
				placeholder="아이디를 입력하세요"
				@focusout="validateLoginId()"
			></form-text>
			<button
				type="button"
				class="mm_btn T=line T=dark"
				@click="checkDuplicateLoginId()"
			>
				<b>아이디 중복확인</b>
			</button>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<div class="mm_flex T=auto">
						<button
							type="button"
							class="mm_btn T=line T=light btn_back"
							@click="index--"
						>
							<i class="ico_page-prev"></i><b>이전으로</b>
						</button>
						<button
							type="button"
							class="mm_btn T=primary"
							@click="validateLoginIdProcess()"
						>
							<b>다음으로</b>
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- 비밀번호 설정 -->
		<div class="mm_process-item">
			<h5 class="mm_text-label">
				<b>비밀번호</b>
			</h5>
			<form-text
				v-model="form.password"
				type="password"
				maxlength="16"
				placeholder="비밀번호를 입력하세요"
				:valid="valid.password"
				:regexp="REGEXP.PASSWORD"
			></form-text>
			<h5 class="mm_text-label">
				<b>비밀번호 확인</b>
			</h5>
			<form-text
				v-model="form.password_confirm"
				type="password"
				:valid="valid.password_confirm"
				:regexp="REGEXP.PASSWORD"
				maxlength="16"
				placeholder="비밀번호를 한번 더 입력하세요"
			></form-text>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<div class="mm_flex T=auto">
						<button
							type="button"
							class="mm_btn T=line T=light btn_back"
							@click="index--"
						>
							<i class="ico_page-prev"></i><b>이전으로</b>
						</button>
						<button
							type="button"
							class="mm_btn T=primary"
							@click="validateLoginPasswordProcess()"
						>
							<b>다음으로</b>
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- 마케팅 수신동의 -->
		<div class="mm_process-item">
			<div class="mm_check_box">
				<div class="mm_check-list">
					<ul>
						<li>
							<check-box
								v-model="form.is_receive_email"
								optional
								label="이메일"
							>
							</check-box>
						</li>
						<li>
							<check-box
								v-model="form.is_receive_sms"
								optional
								label="SMS"
							>
							</check-box>
						</li>
					</ul>
				</div>
				<check-box
					v-model="receiveAllMarketings"
					label="마케팅 수신 전체 동의"
				>
				</check-box>
			</div>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<div class="mm_flex T=auto">
						<button
							type="button"
							class="mm_btn T=line T=light btn_back"
							@click="index--"
						>
							<i class="ico_page-prev"></i><b>이전으로</b>
						</button>
						<a
							class="mm_btn T=primary"
							href="#"
							@click.prevent="regist"
						>
							<b>다음으로</b>
						</a>
					</div>
				</div>
			</div>
			<div class="mm_note">
				<ul>
					<li>선택 항목에 동의하지 않아도 서비스 이용이 가능합니다.</li>
					<li>구매 정보 관련 이메일/SMS는 수신 동의 여부와 관계없이 발송됩니다.</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, watch, computed } from 'vue';
	import { useRouter } from 'vue-router';
	import { useAuthStore } from '$/stores/useAuthStore';
	import monsDate from '$/utils/date';
	import mons from '$/utils/mons';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { usePasswordValidator } from '$/composables/usePasswordValidator';
	import { useRegist } from '$/composables/useRegist';
	import { REGEXP } from '$/constants/REGEXP';
	import CheckBox from '@/component/form/FormCheck.vue';
	import FormRadio from '@/component/form/FormRadio.vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import FormText from '@/component/form/FormText.vue';
	const props = defineProps<{
		profile: IdentityProfile,
		policies: Policy[]
	}>();
	const router = useRouter();
	const emit = defineEmits<{
		processChange: []
	}>();

	const authStore = useAuthStore();
	const { bom, loading } = mons();
	const { isDuplicateLoginId } = useRegist();
	const $process = ref<HTMLElement>();
	const index = ref(0);

	watch([$process, index], () => {
			if ($process.value == null) return;

			const $items = Object.values($process.value.children);
			for (const [i, $el] of $items.entries()) $el.classList[i === index.value ? 'add' : 'remove']('S=process-on');
		},
		{ immediate: true, flush: 'post' },
	);

	const limitEndYear = monsDate().get('year') - 14 - 1899;
	const lastDayOfSelectedMonth = computed(() => {
		if (form.value.birth_year == 0 || form.value.birth_month == 0) {
			return 0;
		}
		const birthYearMonth = `${form.value.birth_year}-${form.value.birth_month}-01`;

		return Number(monsDate(birthYearMonth).endOf('month').format('DD'));
	});

	const profileBirthday = monsDate(props.profile.birth_date);
	const {
		form,
		valid,
		validate,
	} = useForm<RegistForm>({
		name: props.profile.name,
		login_id: '',
		login_id_duplicate_checked: false,
		password: '',
		password_confirm: '',
		birth_year: profileBirthday.get('year'),
		birth_month: profileBirthday.get('month') + 1,
		birth_day: profileBirthday.get('date'),
		phone_number: props.profile.phone_number,
		gender: 'E',
		is_over_14: true,
		is_receive_sms: false,
		is_receive_email: false,
		policies: props.policies.map(policy => ({
			...policy,
			is_agree: true,
		})),
	}, {
		rule: {
			'policies.*.is_agree(필수 약관)': ['required', 'in:true'],
			'login_id(아이디)': ['required', 'usableLoginId'],
			'login_id_duplicate_checked(아이디 중복체크)': ['required', 'in:true'],
			'password(비밀번호)': ['required', 'usablePassword:login_id,phone_number'],
			'password_confirm(비밀번호 확인)': ['required', 'in:password'],
			'birthYear(생년월일)': ['birthValidate'],
		},
		message: {
			'policies.*.is_agree.in': ':param에 동의해주세요.',
			'login_id_duplicate_checked.in': ':param(을/를) 해주세요.',
			'password_confirm.in': ':$0 정보가 일치하지 않습니다.',
		},
		testers: [
			{
				name: 'birthValidate',
				defaultMessageOnFailure: '생년월일을 선택해주세요.',
				handler: (): boolean => ((
					form.value.birth_year === 0 && form.value.birth_month === 0 && form.value.birth_day === 0
				) || (
					form.value.birth_year !== 0 && form.value.birth_month !== 0 && form.value.birth_day !== 0
				)),
			},
		],
	});

	/** 로그인 아이디 검사 */
	function validateLoginId() {
		const idRegExp = /^[a-zA-Z0-9]{4,16}$/i;
		const isInvalid = form.value.login_id.match(idRegExp) === null;
		valid.value.login_id.show = isInvalid;
		valid.value.login_id.message = isInvalid ? '영문, 숫자를 포함하여 4~16자만 가능합니다' : '';
	}

	async function checkDuplicateLoginId() {
		if (form.value.login_id.length < 1) {
			return bom.alert('아이디를 입력해주세요.');
		}
		if (form.value.login_id.length < 5 || form.value.login_id.length > 20) {
			return bom.alert('사용할 수 없는 아이디입니다.');
		}
		loading.show();
		try {
			const isDuplicated = await isDuplicateLoginId(form.value.login_id);
			bom.alert(isDuplicated ? '이미 사용 중인 아이디입니다.' : '사용 가능한 아이디입니다.');
			form.value.login_id_duplicate_checked = isDuplicated === false;
		}
		catch (error) {
			useErrorAlert(error);
		}
		finally {
			loading.hide();
		}
	}

	watch(() => form.value.login_id, () => {
		form.value.login_id_duplicate_checked = false;
	});

	/** 비밀번호 유효성 검사 */
	watch(() => [
		form.value.password,
		form.value.login_id,
		form.value.phone_number,
	], () => {
		valid.value.password = usePasswordValidator(
			form.value.password,
			form.value.login_id,
			form.value.phone_number,
		).valid.value;
		valid.value.password.show = form.value.password !== '';
	});

	watch(() => [form.value.password, form.value.password_confirm], () => {
		const isConfirmed = form.value.password === form.value.password_confirm;
		valid.value.password_confirm.type = 'valid';
		valid.value.password_confirm.show = !isConfirmed;
		valid.value.password_confirm.state = 'invalid';
		valid.value.password_confirm.message = '비밀번호 정보가 일치하지 않습니다.';
	});

	const receiveAllMarketings = computed({
		get: () => form.value.is_receive_sms && form.value.is_receive_email,
		set: (value) => {
			form.value.is_receive_sms = value;
			form.value.is_receive_email = value;
		},
	});

	const validateLoginIdProcess = () => {
		if (form.value.login_id.length < 1) {
			return bom.alert('아이디를 입력해주세요.');
		}
		if (form.value.login_id.length < 5 || form.value.login_id.length > 20) {
			return bom.alert('사용할 수 없는 아이디입니다.');
		}

		if (!form.value.login_id_duplicate_checked) {
			return bom.alert('아이디 중복확인을 해주세요.');
		}
		index.value++;
	};

	const validateLoginPasswordProcess = () => {
		if (form.value.password.length < 1) {
			return bom.alert('비밀번호를 입력해주세요.');
		}

		if (valid.value.password.state !== 'normal' && valid.value.password.state !== 'valid') {
			return bom.alert(`비밀번호는 ${valid.value.password.message}`);
		}

		if (form.value.password_confirm.length < 1) {
			return bom.alert('비밀번호 확인을 입력해주세요.');
		}

		if (form.value.password !== form.value.password_confirm) {
			return bom.alert(`비밀번호 정보가 일치하지 않습니다.\n 다시 확인 해주세요.`);
		}

		index.value++;
	};

	async function regist() {
		loading.show();
		try {
			await validate();
			await authStore.regist(form.value);

			router.replace({
				name: 'SignupSuccess',
			});
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}
</script>