<template>
	<layout
		title="회원가입"
		layout="popup"
		class="L=sign"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_popup-sign-find">
			<div class="m_popup-sign-title">
				<h3><b>이미 가입된 아이디 정보입니다</b></h3>
				<b>카카오톡, 네이버, 애플 회원은<br> 이메일 주소를 아이디로 사용하게 됩니다</b>
			</div>
			<ul class="m...find-id">
				<li
					v-for="duplicateUser in duplicateUsers"
					:key="duplicateUser.platform_type"
				>
					<i
						:class="`ico_sns-${duplicateUser.platform_type === 'kakao_sync' ? 'kakao' : duplicateUser.platform_type}`"
						:title="`${duplicateUser.platform_type}아이디`"
					></i><p>{{ duplicateUser.masking_id }}</p>
				</li>
			</ul>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<mm-link
						class="mm_btn T=lg T=primary"
						:to="{ name: 'Login' }"
						replace
					>
						<b>로그인</b>
					</mm-link>
					<mm-link
						class="mm_btn T=lg T=line T=primary"
						:to="{ name: 'FindId' }"
						replace
					>
						<b>아이디 찾기</b>
					</mm-link>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { onBeforeUnmount } from 'vue';
	import { useExpireStore } from '$/stores/useExpireStore';
	import Layout from '@/component/layout/Layout.vue';

	const { get, expire } = useExpireStore();

	const duplicateUsers = get<ThirdPartyDuplicateInfo[]>(`duplicate-social-users`);

	// 페이지 이동시 정보 날려주기
	onBeforeUnmount(() => {
		expire(`duplicate-social-users`);
	});
</script>