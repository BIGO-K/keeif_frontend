<template>
	<layout
		:title="pageTitle"
		:layout="overlayId == null ? 'popup' : 'none'"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="mm_term">
			<!-- 약관 내용 -->
			<div class="mm_term-inner">
				<policy-privacy-content v-if="$route.params.policyType === 'privacy' || overlayId === 'privacy'"></policy-privacy-content>
				<policy-service-content v-else-if="$route.params.policyType === 'service' || overlayId === 'service'"></policy-service-content>
				<policy-teenager-content v-else></policy-teenager-content>
			</div>

			<!-- 약관 정보 -->
			<div class="mm_term-info">
				<ul v-if="$route.params.policyType === 'privacy'">
					<li>개인정보처리방침 버전번호: v5.9</li>
					<li>개인정보처리방침 시행일자: 2020-00-00</li>
					<li>개인정보처리방침 변경일자: 2020-00-00</li>
				</ul>
				<selectbox :v-model="sortPrevPolicy">
					<option>이전 {{ $route.params.policyType === 'privacy' ? '개인정보처리방침' : $route.params.policyType === 'service' ? '이용약관' : '청소년보호방침' }} 보기</option>
				</selectbox>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, computed, unref } from 'vue';
	import { useRoute } from 'vue-router';
	import Layout from '@/component/layout/Layout.vue';
	import Selectbox from '@/component/form/FormSelect.vue';
	import PolicyPrivacyContent from '@/page/policy/PolicyPrivacyContent.vue';// XXX 임시
	import PolicyServiceContent from '@/page/policy/PolicyServiceContent.vue';// XXX 임시
	import PolicyTeenagerContent from '@/page/policy/PolicyTeenagerContent.vue';// XXX 임시

	defineOptions({
		inheritAttrs: false,
	});

	const prop = defineProps<{
		overlayId?: 'service' | 'privacy' | 'teenager'
	}>();

	const route = useRoute();
	const pageTitle = computed(() => prop.overlayId === 'privacy' || route.params.policyType === 'privacy' ? '개인정보처리방침' : prop.overlayId === 'service' || route.params.policyType === 'service' ? '이용약관' : '청소년보호방침');
	const sortPrevPolicy = ref('');

	defineExpose<OverlayComponentExpose>({
		title: unref(pageTitle),
	});
</script>