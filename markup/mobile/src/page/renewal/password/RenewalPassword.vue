<template>
	<layout
		title="M.Monstar 리뉴얼 오픈"
		layout="popup"
		class="L=sign"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_popup-sign m_popup-renewal">
			<div class="m_popup-sign-title">
				<h3><b><strong class="mm_text-variable">홍길동</strong>님<br> 새로운 비밀번호를 설정해주세요</b></h3>
				<b>기존 아이디와 해당 비밀번호로 쇼핑몰을<br> 이용하실 수 있습니다</b>
			</div>
			<div class="mm_note">
				<ul>
					<li>본인인증이 필요한 회원은 본인인증 후 비밀번호 변경이 가능합니다.</li>
				</ul>
			</div>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<mm-link
						class="mm_btn T=lg T=primary"
						to="http://"
					>
						<b>휴대폰 인증</b>
					</mm-link>
				</div>
			</div>
			<h5 class="mm_text-label">
				<b>새 비밀번호</b>
			</h5>
			<form-text
				type="password"
				maxlength="16"
				placeholder="새 비밀번호를 입력하세요"
			></form-text>
			<h5 class="mm_text-label">
				<b>새 비밀번호 확인</b>
			</h5>
			<form-text
				type="password"
				maxlength="16"
				placeholder="비밀번호를 한번 더 입력하세요"
			></form-text>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
					>
						<b>비밀번호 변경하기</b>
					</button>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/component/layout/Layout.vue';
	import FormText from '@/component/form/FormText.vue';
</script>