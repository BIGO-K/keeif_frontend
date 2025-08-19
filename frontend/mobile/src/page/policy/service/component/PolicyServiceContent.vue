<template>
	<div class="mm_term">
		<!-- 약관 내용 -->
		<div
			class="mm_term-inner"
			v-html="nowPolicyContent"
		>
		</div>

		<!-- 약관 정보 -->
		<div class="mm_term-info">
			<ul v-if="policy.code === 'privacy'">
				<li>개인정보처리방침 버전번호: {{ policyVersion }}</li>
				<!-- TODO 서비스 오픈일로 변경 필요 -->
				<li>개인정보처리방침 시행일자: 2023-10-18</li>
				<li>개인정보처리방침 변경일자: {{ date(privacyChangeDate, 'YYYY-MM-DD') }}</li>
			</ul>

			<template v-if="prev_policies.length > 0">
				<form-select
					v-model="selectedPolicyId"
					@change="changeDisplayPolicy"
				>
					<option value="-1">
						현재 {{ policy.label }} 보기
					</option>
					<option
						v-for="prevPolicy in prev_policies"
						:key="prevPolicy.id"
						:value="prevPolicy.id"
					>
						{{ prevPolicy.title }}
					</option>
				</form-select>
			</template>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, defineProps, computed } from 'vue';
	import mons from '$/utils/mons';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { usePolicy } from '$/composables/usePolicy';
	import FormSelect from '@/component/form/FormSelect.vue';

	const props = defineProps<{
		policy: Policy
	}>();

	defineExpose<OverlayComponentExpose>({
		title: `${props.policy.label}`,
	});

	const { getNowAndPrev, getContents } = usePolicy();
	const { date } = useFormatter();
	const { prev_policies, now_policy } = await getNowAndPrev(props.policy.code);
	/** 현재 선택된 약관 ID **/
	const selectedPolicyId = ref<number>(0);
	/** 현재 노출중인 약관 컨텐츠  **/
	const nowPolicyContent = ref<string>(props.policy.contents);
	/** 개인정보 처리방치 변경일자 **/
	const privacyChangeDate = now_policy.display_date;

	const policyVersion = computed(() => {
		if (props.policy.code === 'privacy') {
			const version = 1.0;

			if (prev_policies.length > 0) {
				return `v${(version + (prev_policies.length * 0.1)).toFixed(1)}`;
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
			nowPolicyContent.value = props.policy.contents;

			return;
		}
		mons().loading.show();
		try {
			nowPolicyContent.value = await getContents(props.policy.code, selectedPolicyId.value);
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			mons().loading.hide();
		}
	}
</script>