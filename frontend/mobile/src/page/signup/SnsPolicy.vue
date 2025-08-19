<template>
	<layout
		title="추가정보 입력"
		layout="popup"
		class="L=sign"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_popup-join">
			<div class="m_popup-sign-title">
				<h3><b>회원가입 완료까지 한단계 남았어요!</b></h3>
				<b>다음부터는 {{ korean(`${profile.platform_label}(으로/로)`) }} 빠르게 로그인할 수 있어요</b>
			</div>
			<h5 class="mm_text-label">
				<b>이름</b>
			</h5>
			<template v-if="needUserName">
				<form-text
					v-model="form.name"
					maxlength="30"
					:place-holder-text="'이름을 입력하세요'"
				></form-text>
			</template>
			<template v-else>
				<div class="mm_form-text">
					<label>
						<span class="textfield text_readonly">{{ form.name }}</span>
						<i class="bg_text"></i>
					</label>
				</div>
			</template>
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
			<div class="mm_check_box">
				<div class="mm_check-list">
					<ul>
						<li>
							<check-box
								v-model="form.is_over_14"
								label="만 14세 이상 확인"
							>
							</check-box>
						</li>
						<li
							v-for="policy, index in policies"
							:key="policy.code"
						>
							<div class="mm_flex">
								<check-box
									v-model="form.policies[index].is_agree"
									:label="policy.label"
								>
								</check-box>
								<a
									class="btn_detail"
									href="#"
									@click.prevent="overlayPolicyService(policy)"
								>
									<b>자세히</b>
								</a>
							</div>
						</li>
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
					v-model="agreeAllPolicies"
					label="전체동의"
				>
				</check-box>
			</div>

			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
						@click.prevent="regist"
					>
						<b>가입완료</b>
					</button>
				</div>
			</div>
			<div class="mm_note">
				<ul>
					<li>선택 항목에 동의하지 않아도 서비스 이용이 가능합니다.</li>
					<li>구매 정보 관련 이메일/SMS는 수신 동의 여부와 관계없이 발송됩니다.</li>
				</ul>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { computed, defineAsyncComponent } from 'vue';
	import { useRouter } from 'vue-router';
	import { useAuthStore } from '$/stores/useAuthStore';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import monsDate from '$/utils/date';
	import mons from '$/utils/mons';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useFormatter } from '$/composables/useFormatter';
	import { usePolicy } from '$/composables/usePolicy';
	import Layout from '@/component/layout/Layout.vue';
	import CheckBox from '@/component/form/FormCheck.vue';
	import FormRadio from '@/component/form/FormRadio.vue';
	import FormSelect from '@/component/form/FormSelect.vue';


	const authStore = useAuthStore();
	const router = useRouter();
	const layerContextStore = useLayerContextStore();
	const profile = authStore.thirdPartyProfile;
	const { loading } = mons();
	const { korean } = useFormatter();
	if (!profile) {
		throw new Error();
		// throw showError({
		// 	statusCode: 401,
		// 	statusMessage: '',
		// });
	}

	const needUserName = computed(() => profile.name === '');
	const limitEndYear = monsDate().get('year') - 14 - 1899;
	const lastDayOfSelectedMonth = computed(() => {
		if (form.value.birth_year == 0 || form.value.birth_month == 0) {
			return 0;
		}
		const birthYearMonth = `${form.value.birth_year}-${form.value.birth_month}-01`;

		return Number(monsDate(birthYearMonth).endOf('month').format('DD'));
	});

	const policies = await usePolicy().getRegistPolicies();
	const { form, validate } = useForm<ThirdPartyRegistForm>({
		name: profile.name,
		email: profile.email,
		phone_number: '',
		gender: 'E',
		birth_year: 0,
		birth_month: 0,
		birth_day: 0,
		is_over_14: false,
		is_receive_sms: false,
		is_receive_email: false,
		policies: policies.map(policy => ({
			...policy,
			is_agree: false,
		})),
	}, {
		rule: {
			'name(이름)': ['required'],
			'policies.*.is_agree(필수 약관)': ['required', 'in:true'],
			'birthYear(생년월일)': ['birthValidate'],
		},
		message: {
			'name.required': ':param(을/를) 입력해주세요.',
			'policies.*.is_agree.in': ':param에 동의해주세요.',
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

	const agreeAllPolicies = computed({
		get: () => form.value.is_over_14 && form.value.policies.every(policy => policy.is_agree) && form.value.is_receive_email && form.value.is_receive_sms,
		set: (value) => {
			form.value.is_over_14 = value;
			form.value.policies = form.value.policies.map(policy => {
				policy.is_agree = value;

				return policy;
			});

			form.value.is_receive_email = value;
			form.value.is_receive_sms = value;
		},
	});

	const policyComponent = defineAsyncComponent(() => import('@/page/policy/service/component/PolicyServiceContent.vue'));
	async function regist() {
		loading.show();
		try {
			await validate();
			await authStore.thirdPartyRegist(form.value, profile);
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

	function overlayPolicyService(policy: Policy) {
		return layerContextStore.openOverlay(policyComponent, {
			props: {
				policy,
			},
		});
	}
</script>