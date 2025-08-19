<template>
	<layout
		title="설정"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_myset">
			<!-- 로그인정보 -->
			<div class="m_myset-login">
				<p>로그인해 주세요</p>
				<mm-link
					class="mm_btn T=sm T=line T=primary"
					:to="{ name: 'Login' }"
				>
					<b>로그인</b>
				</mm-link>
			</div>

			<!-- 앱 전용 -->
			<!-- (D) 모바일 app에서만 앱관련정보가 노출됩니다. -->
			<div class="m_myset-app">
				<!-- 푸시 -->
				<div class="mm_check-list">
					<ul>
						<li>
							<form-check
								v-model="adPush"
								label="광고성(PUSH) 알림 수신"
							></form-check>
							<p>본 설정은 해당 기기에서만 유효하며, 수신 거절 시 정보성 알림도 발송되지 않습니다</p>
						</li>
						<li>
							<form-check
								v-model="adPushNight"
								label="광고성(PUSH) 야간 광고성(PUSH) 알림 수신"
							></form-check>
							<p>야간(오후9시 ~ 익일 오전8시)에도 알림 수신을 허용합니다</p>
						</li>
					</ul>
				</div>

				<!-- 버전 정보 -->
				<section>
					<h3 class="mm_strapline">
						<b>버전 정보</b>
					</h3>
					<dl class="mm_flex">
						<dt>설치된 버전</dt>
						<dd>V5.0.7</dd>
					</dl>
					<dl class="mm_flex">
						<dt>최신 버전</dt>
						<dd>
							V5.0.8
							<mm-link
								class="mm_btn T=2xs T=line T=variable"
								to="http://"
							>
								<b>업데이트</b>
							</mm-link>
						</dd>
					</dl>
				</section>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import Layout from '@/component/layout/Layout.vue';
	import FormCheck from '@/component/form/FormCheck.vue';

	const adPush = ref(false);
	const adPushNight = ref(false);
</script>