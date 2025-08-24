<template>
	<layout
		title="회원가입"
		layout="popup"
		class="L=sign"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_popup-join">
			<template v-if="signupProcess === 'policy'">
				<h3 class="m_popup-join-title">
					<b>STEP 2</b><strong>약관동의</strong><i class="image_line T=step2"></i>
				</h3>
				<div class="mm_check_box">
					<div class="mm_check-list">
						<ul>
							<li>
								<form-check
									v-model="form.is_over_14"
									label="만 14세 이상 확인"
								>
								</form-check>
							</li>
							<li
								v-for="policy, index in policies"
								:key="policy.code"
							>
								<div class="mm_flex">
									<form-check
										v-model="form.policies[index].is_agree"
										:label="policy.label"
									>
									</form-check>
									<a
										class="btn_detail"
										href="#"
										@click.prevent="overlayPolicyService(policy)"
									>
										<b>자세히</b>
									</a>
								</div>
							</li>
						</ul>
					</div>
					<form-check
						v-model="agreeAllPolicies"
						label="전체동의"
					>
					</form-check>
				</div>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<a
							class="mm_btn T=primary"
							href="#"
							@click.prevent="moveStep"
						>
							<b>다음으로</b>
						</a>
					</div>
				</div>
			</template>
			<template v-else>
				<signup-input-info
					:profile="profile"
					:policies="policies"
					@process-change="() => signupProcess = 'policy'"
				>
				</signup-input-info>
			</template>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { computed, defineAsyncComponent, ref } from 'vue';
	import { useAuthStore } from '$/stores/useAuthStore';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import mons from '$/utils/mons';
	import { useForm } from '$/composables/useForm';
	import { usePolicy } from '$/composables/usePolicy';
	import Layout from '@/component/layout/Layout.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import SignupInputInfo from '@/page/signup/agreement/SignUpInput.vue';

	const authStore = useAuthStore();
	const layerContextStore = useLayerContextStore();
	const profile = authStore.identityVerificationProfile;
	const signupProcess = ref<'policy'|'info'>('policy');

	if (!profile) {
		throw new Error();
		// throw showError({
		// 	statusCode: 401,
		// 	statusMessage: '',
		// });
	}

	const policies = await usePolicy().getRegistPolicies();
	const { form } = useForm<{ is_over_14: boolean, policies: PolicyAgreement[]}>({
		is_over_14: false,
		policies: policies.map(policy => ({
			...policy,
			is_agree: false,
		})),
	});

	const agreeAllPolicies = computed({
		get: () => form.value.is_over_14 && form.value.policies.every(policy => policy.is_agree),
		set: (value) => {
			form.value.is_over_14 = value;
			form.value.policies = form.value.policies.map(policy => {
				policy.is_agree = value;

				return policy;
			});
		},
	});

	const policyComponent = defineAsyncComponent(() => import('@/page/policy/service/component/PolicyServiceContent.vue'));
	function moveStep() {
		if (!agreeAllPolicies.value) {
			return mons().bom.alert('필수약관을 동의 해주세요.');
		}
		signupProcess.value = 'info';
	}

	function overlayPolicyService(policy: Policy) {
		return layerContextStore.openOverlay(policyComponent, {
			props: {
				policy,
			},
		});
	}
</script>