<template>
	<template v-if="true">
		<h3 class="mm_title">
			<b>개인정보 보호를 위해<br> <strong>비밀번호를 입력해주세요</strong></b>
		</h3>
		<h6 class="mm_text-label">
			<b>비밀번호</b>
		</h6>
		<form-text
			type="password"
			placeholder="비밀번호를 입력하세요"
		></form-text>
		<div class="mm_foot">
			<div class="mm_btn_box">
				<button
					type="button"
					class="mm_btn T=primary"
				>
					<b>확인하기</b>
				</button>
			</div>
		</div>
	</template>

	<template v-else>
		<h3 class="mm_title">
			<b>소중한 개인정보 보호를 위해<br> <strong>한번 더 로그인해주세요</strong></b>
		</h3>
		<p>로그인하셔야 회원정보 수정이 가능합니다</p>
		<ul class="m_my-sns">
			<li>
				<mm-link
					class="btn_sns"
					to="http://"
				>
					<i class="ico_sns-naver"></i><b>네이버</b>
				</mm-link>
			</li>
			<li>
				<mm-link
					class="btn_sns"
					to="http://"
				>
					<i class="ico_sns-kakao"></i><b>카카오톡</b>
				</mm-link>
			</li>
			<li>
				<mm-link
					class="btn_sns"
					to="http://"
				>
					<i class="ico_sns-apple"></i><b>애플</b>
				</mm-link>
			</li>
		</ul>
	</template>
</template>

<script setup lang="ts">
	import FormText from '@/component/form/FormText.vue';
</script>