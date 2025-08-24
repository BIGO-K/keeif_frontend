<template>
	<layout
		title="아이디 찾기 완료"
		layout="popup"
		class="L=sign"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div
			v-if="idFindData"
			class="m_popup-sign-find"
		>
			<div class="m_popup-sign-title">
				<h3><b><strong class="mm_text-variable">{{ idFindData.user_name }}</strong> 님<br> 아이디 찾기가 완료되었습니다</b></h3>
			</div>
			<ul class="m...find-id">
				<li
					v-for="result in idFindData.find_results"
					:key="result.masking_login_id"
				>
					<i
						v-if="result.regist_type === 'shop'"
						class="ico_member"
						title="shop 아이디"
					></i>
					<i
						v-if="result.regist_type === THIRD_PARTY_TYPES.naver "
						class="ico_sns-naver"
						title="네이버 아이디"
					></i>
					<i
						v-if="result.regist_type === THIRD_PARTY_TYPES.kakao || result.regist_type === THIRD_PARTY_TYPES.kakaoSync"
						class="ico_sns-kakao"
						title="카카오톡 아이디"
					></i>
					<i
						v-if="result.regist_type === THIRD_PARTY_TYPES.apple"
						class="ico_sns-apple"
						title="애플 아이디"
					></i>
					<p>{{ result.masking_login_id }}</p>
				</li>
			</ul>
			<div class="m...find-verify">
				<p>가려진 정보가 궁금하신가요?</p>
				<!-- (D) 이메일로 아이디를 찾았을 경우 '이메일 주소로 전송' 버튼을 노출합니다 -->
				<!-- (D) 휴대폰 번호로 아이디를 찾았을 경우 '휴대폰 번호로 전송' 버튼을 노출합니다 -->
				<button
					type="button"
					class="mm_btn T=xs T=line"
					@click="send"
				>
					<b>{{ idFindData.find_type == FIND_TYPE.email ? '이메일 주소' : '휴대폰 번호' }}로 전송</b>
				</button>
			</div>
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
						:to="{ name: 'FindPassword' }"
						replace
					>
						<b>비밀번호 찾기</b>
					</mm-link>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { onBeforeRouteLeave } from 'vue-router';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFindAuth } from '$/composables/useFindAuth';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { THIRD_PARTY_TYPES } from '$/constants/THIRDPARTY';
	import Layout from '@/component/layout/Layout.vue';

	const { loading, bom, router } = useGlobalPageContext();
	const { idFindData, sendUnmaskedId, expireIdFind, FIND_TYPE } = useFindAuth();

	if (idFindData.value == null) {
		bom.alert('세션이 만료되었습니다.', () => {
			router.replace({
				name: 'FindId',
			});
		});
	}

	async function send() {
		loading.show();
		try {
			await sendUnmaskedId();
			bom.alert(`입력하신 ${idFindData.value?.find_type == FIND_TYPE.email ? '이메일 주소' : '휴대폰 번호'}로 전송되었습니다.`);
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}

	onBeforeRouteLeave(expireIdFind);
</script>