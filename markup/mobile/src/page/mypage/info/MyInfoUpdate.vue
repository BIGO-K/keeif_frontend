<template>
	<layout
		title="회원정보 수정"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="mm_inner m_popup-myinfo">
			<password-confirm v-if="true"></password-confirm>

			<template v-else>
				<h6 class="mm_text-label">
					<b>아이디</b>
				</h6>
				<div class="mm_form-text">
					<label>
						<span class="textfield text_readonly">abcd1234</span>
						<i class="bg_text"></i>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>휴대폰 번호</b>
				</h6>
				<div class="mm_form-text">
					<label>
						<span class="textfield text_readonly">01012341234</span>
						<i class="bg_text"></i>
					</label>
				</div>
				<mm-link
					class="mm_btn T=line T=dark"
					to="http://"
				>
					<b>휴대폰 번호 변경</b>
				</mm-link>
				<h6 class="mm_text-label">
					<b>이름</b>
				</h6>
				<div class="mm_form-text">
					<label>
						<span class="textfield text_readonly">홍길동</span>
						<i class="bg_text"></i>
					</label>
				</div>
				<mm-link
					class="mm_btn T=line T=dark"
					to="http://"
				>
					<b>이름 변경</b>
				</mm-link>
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
				<h6 class="mm_text-label">
					<b>이메일</b>
				</h6>
				<form-text
					model-value="mmonstar@mmonstar.co.kr"
					placeholder="이메일을 입력하세요"
				></form-text>
				<button
					type="button"
					class="mm_btn T=line T=dark"
				>
					<b>중복 확인</b>
				</button>
				<h6 class="mm_text-label">
					<b>생일</b>
				</h6>
				<div class="mm_form_mix-linked">
					<div class="mm_form-select">
						<label>
							<span class="text_readonly">5</span>
							<i class="ico_form-select"></i>
						</label>
					</div>
					<div class="mm_form-select">
						<label>
							<span class="text_readonly">14</span>
							<i class="ico_form-select"></i>
						</label>
					</div>
				</div>
				<h6 class="mm_text-label">
					<b>마케팅 수신 동의</b>
				</h6>
				<div class="mm_check-list">
					<ul>
						<li>
							<form-check v-model="marketingEmailAgree">
								<span class="text_label"><strong class="mm_text-variable">(선택)</strong>SNS</span>
							</form-check>
						</li>
						<li>
							<form-check v-model="marketingSnsAgree">
								<span class="text_label"><strong class="mm_text-variable">(선택)</strong>SNS</span>
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
	import { ref } from 'vue';
	import Layout from '@/component/layout/Layout.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import PasswordConfirm from '@/page/mypage/info/component/MyInfoPasswordConfirm.vue';

	const marketingEmailAgree = ref(false);
	const marketingSnsAgree = ref(false);
</script>