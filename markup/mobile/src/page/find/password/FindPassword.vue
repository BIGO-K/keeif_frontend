<template>
	<!-- 아이디/비밀번호 찾기 방식 -->
	<div class="mm_radio-list">
		<ul>
			<li>
				<form-radio
					v-model="findId"
					name="dev_radio-vertical"
					value="email"
				>
					<b class="mm_block">
						<i class="ico_email"></i>
						<span class="text_label">이메일로 찾기</span>
					</b>
				</form-radio>
			</li>
			<li>
				<form-radio
					v-model="findId"
					name="dev_radio-vertical"
					value="phone"
				>
					<b class="mm_block">
						<i class="ico_phone"></i>
						<span class="text_label">휴대폰 번호로 찾기</span>
					</b>
				</form-radio>
			</li>
		</ul>
	</div>

	<!-- 이메일로 찾기 -->
	<div
		class="mm_syncer-sign-email"
		:class="{ 'S=radio-use': findId === 'email' }"
	>
		<h5 class="mm_text-label">
			<b>아이디</b>
		</h5>
		<form-text
			placeholder="아이디를 입력하세요"
		></form-text>
		<h5 class="mm_text-label">
			<b>이름</b>
		</h5>
		<form-text
			placeholder="이름을 입력하세요"
		></form-text>
		<h5 class="mm_text-label">
			<b>이메일</b>
		</h5>
		<form-text
			placeholder="이메일을 입력하세요"
		></form-text>
		<button
			type="button"
			class="mm_btn T=line T=dark"
		>
			<b>인증번호 발송</b>
		</button>
		<h5 class="mm_text-label">
			<b>인증번호</b>
		</h5>
		<form-text
			placeholder="10분 이내로 입력하세요"
		></form-text>
		<button
			type="button"
			class="mm_btn T=line T=dark"
		>
			<b>인증번호 확인</b>
		</button>
	</div>

	<!-- 휴대폰 번호로 찾기 -->
	<div
		class="mm_syncer-sign-phone"
		:class="{ 'S=radio-use': findId === 'phone' }"
	>
		<h5 class="mm_text-label">
			<b>아이디</b>
		</h5>
		<form-text
			placeholder="아이디를 입력하세요"
		></form-text>
		<h5 class="mm_text-label">
			<b>이름</b>
		</h5>
		<form-text
			placeholder="이름을 입력하세요"
		></form-text>
		<h5 class="mm_text-label">
			<b>휴대폰 번호</b>
		</h5>
		<form-text
			type="tel"
			placeholder="휴대폰 번호를 입력하세요"
		></form-text>
		<button
			type="button"
			class="mm_btn T=line T=dark"
		>
			<b>인증번호 발송</b>
		</button>
		<h5 class="mm_text-label">
			<b>인증번호</b>
		</h5>
		<form-text
			placeholder="10분 이내로 입력하세요"
		></form-text>
		<button
			type="button"
			class="mm_btn T=line T=dark"
		>
			<b>인증번호 확인</b>
		</button>
	</div>

	<!-- 하단버튼 -->
	<div class="mm_foot">
		<div class="mm_btn_box">
			<button
				type="button"
				class="mm_btn T=primary"
			>
				<b>비밀번호 찾기</b>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import FormRadio from '@/component/form/FormRadio.vue';
	import FormText from '@/component/form/FormText.vue';

	const findId = ref();
</script>