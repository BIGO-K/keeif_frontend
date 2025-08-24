<template>
	<layout
		title="회원가입"
		layout="popup"
		class="L=sign"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_popup-join">
			<template v-if="$route.params.id === 'agreement'">
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
						v-model="policyCheckedAll"
						label="전체 동의"
					></form-check>
				</div>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<a
							class="mm_btn T=primary"
							href="#"
							@click.prevent="$router.replace({ params: { id: 'input' } })"
						>
							<b>다음으로</b>
						</a>
					</div>
				</div>
			</template>
			<template v-else>
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
								<span class="textfield text_readonly">홍길동</span>
								<i class="bg_text"></i>
							</label>
						</div>
						<h5 class="mm_text-label">
							<b>생년월일</b><strong class="mm_text-variable">(선택)</strong>
						</h5>
						<div class="mm_form_mix-linked">
							<form-select :v-model="sortYear">
								<option>년</option>
							</form-select>
							<form-select :v-model="sortMonth">
								<option>월</option>
							</form-select>
							<form-select :v-model="sortDay">
								<option>일</option>
							</form-select>
						</div>
						<h5 class="mm_text-label">
							<b>휴대폰 번호</b>
						</h5>
						<div class="mm_form-text">
							<label>
								<span class="textfield text_readonly">01012341234</span>
								<i class="bg_text"></i>
							</label>
						</div>
						<h5 class="mm_text-label">
							<b>성별</b>
						</h5>
						<div class="mm_radio-list T=chain">
							<ul>
								<li>
									<form-radio name="dev_radio-gender">
										<b class="mm_block">
											<i class="ico_form-radio"></i>
											<span class="text_label">여자</span>
										</b>
									</form-radio>
								</li>
								<li>
									<form-radio name="dev_radio-gender">
										<b class="mm_block">
											<i class="ico_form-radio"></i>
											<span class="text_label">남자</span>
										</b>
									</form-radio>
								</li>
								<li>
									<form-radio name="dev_radio-gender">
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
										@click.prevent="$router.replace({ params: { id: 'agreement' } })"
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
							maxlength="20"
							placeholder="아이디를 입력하세요"
						></form-text>
						<button
							type="button"
							class="mm_btn T=line T=dark"
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
										@click="index++"
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
							type="password"
							maxlength="16"
							placeholder="비밀번호를 입력하세요"
						></form-text>
						<h5 class="mm_text-label">
							<b>비밀번호 확인</b>
						</h5>
						<form-text
							type="password"
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
										@click="index++"
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
										<form-check
											v-model="marketingAgree"
											:value="merketingItems[0]"
										>
											<span class="text_label"><strong class="mm_text-variable">(선택)</strong>이메일</span>
										</form-check>
									</li>
									<li>
										<form-check
											v-model="marketingAgree"
											:value="merketingItems[1]"
										>
											<span class="text_label"><strong class="mm_text-variable">(선택)</strong>SMS</span>
										</form-check>
									</li>
								</ul>
							</div>
							<form-check
								v-model="marketingCheckedAll"
								label="마케팅 수신 전체 동의"
							></form-check>
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
										@click.prevent="$router.replace({ name: 'SignupSuccess' })"
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
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, watch, defineAsyncComponent, computed } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import Layout from '@/component/layout/Layout.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import FormRadio from '@/component/form/FormRadio.vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import FormText from '@/component/form/FormText.vue';

	const layerContextStore = useLayerContextStore();

	function overlayPolicy(_id: 'service' | 'privacy') {
		const component = defineAsyncComponent(() => import('@/page/policy/Policy.vue'));

		return layerContextStore.openOverlay(component, { props: { overlayId: _id } });
	}

	const $process = ref<HTMLElement>();
	const index = ref(0);

	watch([$process, index], () => {
			if ($process.value == null) return;

			const $items = Object.values($process.value.children);
			for (const [i, $el] of $items.entries()) $el.classList[i === index.value ? 'add' : 'remove']('S=process-on');
		},
		{ immediate: true, flush: 'post' }
	);

	const sortYear = ref('');
	const sortMonth = ref('');
	const sortDay = ref('');

	// XXX 임시 인터페이스
	interface test {
		name: string;
	}
	const policyItems = ref<test[]>([
		{ name: 'youth' },
		{ name: 'use' },
		{ name: 'privacy' }
	]);
	const policyAgree = ref<test[]>(policyItems.value.filter(_item => !_item.name));
	const policyCheckedAll = computed({
		get: () => policyAgree.value.length === policyItems.value.length,
		set: _value => {
			policyAgree.value = _value ? [...policyItems.value] : [];
		}
	});

	const merketingItems = ref<test[]>([
		{ name: 'mail' },
		{ name: 'sms' }
	]);
	const marketingAgree = ref<test[]>(merketingItems.value.filter(_item => !_item.name));
	const marketingCheckedAll = computed({
		get: () => marketingAgree.value.length === merketingItems.value.length,
		set: _value => {
			marketingAgree.value = _value ? [...merketingItems.value] : [];
		}
	});
</script>