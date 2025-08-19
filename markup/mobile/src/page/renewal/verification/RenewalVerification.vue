<template>
	<layout
		title="M.Monstar 리뉴얼 오픈"
		layout="popup"
		class="L=sign"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_popup-sign m_popup-renewal">
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
			<h5 class="mm_text-label">
				<b>휴대폰 번호</b>
			</h5>
			<form-text
				type="tel"
				placeholder="휴대폰 번호를 입력하세요"
			></form-text>
			<h5 class="mm_text-label">
				<b>생년월일</b>
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
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
					>
						<b>조회하기</b>
					</button>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import Layout from '@/component/layout/Layout.vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import FormText from '@/component/form/FormText.vue';

	const sortYear = ref('');
	const sortMonth = ref('');
	const sortDay = ref('');
</script>