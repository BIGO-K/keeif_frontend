<template>
	<layout
		title="회원가입"
		layout="popup"
		class="L=sign"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_popup-join">
			<h3 class="m_popup-join-title">
				<b>STEP 2</b><strong>약관동의</strong><i class="image_line T=step2"></i>
			</h3>
			<div class="mm_check_box">
				<div class="mm_check-list">
					<ul>
						<li>
							<form-check
								v-model="policyAgree"
								:value="policyItems[0]"
								label="만 14세 이상 확인"
							>
							</form-check>
						</li>
						<li>
							<div class="mm_flex">
								<form-check
									v-model="policyAgree"
									:value="policyItems[1]"
									label="이용약관"
								>
								</form-check>
								<a
									class="btn_detail"
									href="#"
									@click.prevent="overlayPolicy('service')"
								>
									<b>자세히</b>
								</a>
							</div>
						</li>
						<li>
							<div class="mm_flex">
								<form-check
									v-model="policyAgree"
									:value="policyItems[2]"
									label="개인정보 처리방침"
								>
								</form-check>
								<a
									class="btn_detail"
									href="#"
									@click.prevent="overlayPolicy('privacy')"
								>
									<b>자세히</b>
								</a>
							</div>
						</li>
					</ul>
				</div>
				<form-check
					v-model="checkedAll"
					label="전체 동의"
				></form-check>
			</div>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<a
						class="mm_btn T=primary"
						href="#"
						@click.prevent="$router.push({ name: 'SignupInput' })"
					>
						<b>다음으로</b>
					</a>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref, computed } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import Layout from '@/component/layout/Layout.vue';
	import FormCheck from '@/component/form/FormCheck.vue';

	const layerContextStore = useLayerContextStore();

	function overlayPolicy(_id: 'service' | 'privacy') {
		const component = defineAsyncComponent(() => import('@/page/policy/Policy.vue'));

		return layerContextStore.openOverlay(component, { props: { overlayId: _id } });
	}

	const checkedAll = computed({
		get: () => policyAgree.value.length === policyItems.value.length,
		set: _value => {
			policyAgree.value = _value ? [...policyItems.value] : [];
		}
	});

	const policyItems = ref<test[]>([
		{ name: 'youth' },
		{ name: 'use' },
		{ name: 'privacy' }
	]);
	const policyAgree = ref<test[]>(policyItems.value.filter(_item => !_item.name));
</script>