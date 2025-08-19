<template>
	<layout
		title="애플 ID 로그인"
		layout="popup"
		class="L=sign"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_popup-login-apple">
			<div class="m...apple-inner">
				<p>애플 로그인에 실패했습니다<br>다시 시도 할까요?</p>
				<div class="mm_btn_box">
					<div class="mm_inline">
						<mm-link
							class="mm_btn T=line T=dark btn_link"
							:to="{ name: 'Login' }"
						>
							<b>로그인 페이지 이동</b><i class="ico_link"></i>
						</mm-link>
					</div>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/component/layout/Layout.vue';
</script>