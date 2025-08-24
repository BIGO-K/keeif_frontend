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
				<b>다음부터는 {{ loginInfo === 'easy' ? '간편로그인' : '카카오톡' }}으로 빠르게 로그인할 수 있어요</b>
			</div>

			<template v-if="loginInfo === 'easy'">
				<h5 class="mm_text-label">
					<b>이름</b>
				</h5>
				<form-text
					placeholder="이름을 입력하세요"
				></form-text>
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
			</template>

			<div class="mm_check_box">
				<div class="mm_check-list">
					<ul>
						<li>
							<label class="mm_form-check">
								<input
									type="checkbox"
									data-check="{ '_group': 'agree_check' }"
								>
								<b class="mm_block">
									<i class="ico_form-check"></i>
									<span class="text_label">만 14세 이상 확인</span>
								</b>
							</label>
						</li>
						<li>
							<div class="mm_flex">
								<label class="mm_form-check">
									<input
										type="checkbox"
										data-check="{ '_group': 'agree_check' }"
									>
									<b class="mm_block">
										<i class="ico_form-check"></i>
										<span class="text_label">이용약관</span>
									</b>
								</label>
								<mm-link
									class="btn_detail"
									:to="{ name: 'Policy', params: { policyType: 'Service' } }"
								>
									<b>자세히</b>
								</mm-link>
							</div>
						</li>
						<li>
							<div class="mm_flex">
								<label class="mm_form-check">
									<input
										type="checkbox"
										data-check="{ '_group': 'agree_check' }"
									>
									<b class="mm_block">
										<i class="ico_form-check"></i>
										<span class="text_label">개인정보 처리방침</span>
									</b>
								</label>
								<mm-link
									class="btn_detail"
									:to="{ name: 'Policy', params: { policyType: 'Privacy' } }"
								>
									<b>자세히</b>
								</mm-link>
							</div>
						</li>
						<li>
							<label class="mm_form-check">
								<input
									type="checkbox"
									data-check="{ '_type': 'check_all', '_group': 'agree_check agree_marketing' }"
								>
								<b class="mm_block">
									<i class="ico_form-check"></i>
									<span class="text_label">마케팅 수신 전체 동의</span>
								</b>
							</label>
							<ul>
								<li>
									<label class="mm_form-check">
										<input
											type="checkbox"
											data-check="{ '_group': 'agree_check agree_marketing' }"
										>
										<b class="mm_block">
											<i class="ico_form-check"></i>
											<span class="text_label"><strong class="mm_text-variable">(선택)</strong>이메일</span>
										</b>
									</label>
								</li>
								<li>
									<label class="mm_form-check">
										<input
											type="checkbox"
											data-check="{ '_group': 'agree_check agree_marketing' }"
										>
										<b class="mm_block">
											<i class="ico_form-check"></i>
											<span class="text_label"><strong class="mm_text-variable">(선택)</strong>SMS</span>
										</b>
									</label>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<label class="mm_form-check">
					<input
						type="checkbox"
						data-check="{ '_type': 'check_all', '_group': 'agree_check' }"
					>
					<b class="mm_block">
						<i class="ico_form-check"></i>
						<span class="text_label">전체 동의</span>
					</b>
				</label>
			</div>

			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
						@click.prevent="$router.push({ name: 'SignupSuccess' })"
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
	import { ref } from 'vue';
	import Layout from '@/component/layout/Layout.vue';
	import FormRadio from '@/component/form/FormRadio.vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import FormText from '@/component/form/FormText.vue';

	const sortYear = ref('');
	const sortMonth = ref('');
	const sortDay = ref('');

	const loginInfo = 'easy';
</script>