<template>
	<layout
		title="아이디/비밀번호 찾기"
		layout="popup"
		class="L=sign"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_popup-sign-find">
			<router-tab :is-keep="false"></router-tab>

			<!-- 유의사항 -->
			<div class="m...find-popover">
				<h6><b>아이디/비밀번호를 찾지 못하셨나요?</b></h6>
				<toggle
					v-model:is-active="showNote"
					class="btn_help"
					active-title="선택됨"
				>
					<i class="ico_login-help"></i>
				</toggle>
				<div class="m...find-popover-item">
					<p>이메일과 휴대폰 번호로도 찾지 못하셨다면,<br> 아래 항목을 이메일로 보내주세요</p>
					<div>
						<p><strong>이름/연락처/생년월일 앞자리</strong></p>
						<p>예) 홍길동/01012345678/96(년생)</p>
					</div>
					<a
						class="btn_email"
						:href="`mailto:${shop.cs_email}`"
						title="새 창 열림"
					>
						<b>{{ shop.cs_email }}</b>
					</a>
					<p>고객센터 {{ shop.cs_tel }}</p>
					<button
						type="button"
						class="btn_close"
						@click="showNote = false"
					>
						<i class="ico_popover-close"></i><b class="mm_ir-blind">닫기</b>
					</button>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import config from '$/utils/config';
	import Layout from '@/component/layout/Layout.vue';
	import RouterTab from '@/component/RouterTab.vue';
	import Toggle from '@/component/Toggle.vue';

	const shop = config('shop');
	const showNote = ref(true);
</script>