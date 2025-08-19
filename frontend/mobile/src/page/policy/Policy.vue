<template>
	<layout
		:title="pageTitle"
		:layout="overlayId == null ? 'popup' : 'none'"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="mm_term">
			<!-- 약관 내용 -->
			<div
				class="mm_term-inner"
				v-html="nowPolicyContent"
			>
			</div>

			<!-- 약관 정보 -->
			<div class="mm_term-info">
				<ul v-if="policyCode === 'privacy'">
					<li>개인정보처리방침 버전번호: {{ policyVersion }}</li>
					<!-- TODO 서비스 오픈일로 변경 필요 -->
					<li>개인정보처리방침 시행일자: 2023-10-18</li>
					<li>개인정보처리방침 변경일자: {{ date(privacyChangeDate, 'YYYY-MM-DD') }}</li>
				</ul>

				<template v-if="prevPolicies.length > 0 && nowPolicy">
					<form-select
						v-model="selectedPolicyId"
						@change="changeDisplayPolicy"
					>
						<option value="-1">
							현재 {{ nowPolicy.label }} 보기
						</option>
						<option
							v-for="prevPolicy in prevPolicies"
							:key="prevPolicy.id"
							:value="prevPolicy.id"
						>
							{{ prevPolicy.title }}
						</option>
					</form-select>
				</template>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { useRoute } from 'vue-router';
	import mons from '$/utils/mons';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { usePolicy } from '$/composables/usePolicy';
	import ApplicationError from '$/errors/ApplicationError';
	import Layout from '@/component/layout/Layout.vue';
	import FormSelect from '@/component/form/FormSelect.vue';

	defineOptions({
		inheritAttrs: false,
	});

	const prop = defineProps<{
		overlayId?: 'privacy' | 'agreement' | 'teen'
	}>();

	defineExpose<OverlayComponentExpose>({
		title: `약관`,
	});

	const { getNowAndPrev, getContents } = usePolicy();
	const route = useRoute();
	const policyCode: PolicyType = `${route.params.policyType as PolicyType}`;

	const prevPolicies = ref<PrevPolicy[]>([]);
	const nowPolicy = ref<Policy|null>(null);


	try {
		const { prev_policies, now_policy } = await getNowAndPrev(policyCode);
		prevPolicies.value = prev_policies;
		nowPolicy.value = now_policy;
	}
	catch (e) {
		throw new ApplicationError();
	}


	// const displayPolicy = computed(() => nowPolicy.value?.contents || '');
	const { date } = useFormatter();

	const pageTitle = computed(() => {
		return prop.overlayId === 'privacy' || route.params.policyType === 'privacy'
			? '개인정보처리방침'
			: prop.overlayId === 'agreement' || route.params.policyType === 'agreement' ? '이용약관' : '청소년보호방침';
	});

	/** 현재 선택된 약관 ID **/
	const selectedPolicyId = ref<number>(0);
	/** 현재 노출중인 약관 컨텐츠  **/
	const nowPolicyContent = ref<string>(nowPolicy.value?.contents || '');
	/** 개인정보 처리방치 변경일자 **/
	const privacyChangeDate = nowPolicy.value?.display_date;

	const policyVersion = computed(() => {
		if (policyCode === 'privacy') {
			const version = 1.0;

			if (prevPolicies.value.length > 0) {
				return `v${(version + (prevPolicies.value.length * 0.1)).toFixed(1)}`;
			}
			else {
				return `v${version.toFixed(1)}`;
			}
		}

		return '';
	});

	/** 노출 약관 변경 처리 **/
	async function changeDisplayPolicy() {
		if (selectedPolicyId.value == -1) {
			nowPolicyContent.value = nowPolicy.value?.contents || '';

			return;
		}
		mons().loading.show();
		try {
			nowPolicyContent.value = await getContents(policyCode, selectedPolicyId.value);
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			mons().loading.hide();
		}
	}
</script>