<template>
	<layout
		title="로그인"
		layout="popup"
		class="L=sign"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_popup-sign m_popup-login">
			<!-- (D) 성인인증이 필요한 로그인의 경우에만 .text_adult를 노출합니다. -->
			<strong class="text_adult"><i class="ico_adult T=lg"></i><b>본 상품은 19세 미만의 청소년이<br> 이용할 수 없습니다</b></strong>
			<h5 class="mm_text-label">
				<b>아이디</b>
			</h5>
			<form-text
				class="T=lg"
				placeholder="아이디를 입력하세요"
			></form-text>
			<h5 class="mm_text-label">
				<b>비밀번호</b>
			</h5>
			<form-text
				type="password"
				class="T=lg"
				placeholder="비밀번호를 입력하세요"
			></form-text>

			<!-- 보안문자입력 -->
			<!-- (D) 로그인 5회 실패 시 .m_popup-login-security 영역을 노출합니다. -->
			<div class="m_popup-login-security">
				<p class="mm_text-negative">
					로그인을 5회 실패하셨습니다<br>보안 문자를 입력하여 로그인하세요
				</p>
				<div class="m...security-info">
					<i class="image_security">
						<img
							src="/image/_sample/login_fail.png"
							alt="보안문자"
						>
					</i>
					<button
						type="button"
						class="mm_btn T=xs T=line T=light btn_refresh"
					>
						<i class="ico_reload"></i><b>새로고침</b>
					</button>
					<form-text
						placeholder="최보안문자 입력"
					></form-text>
				</div>
			</div>

			<form-check
				v-model="saveId"
				label="아이디 저장하기"
			></form-check>
			<mm-link
				class="m_popup-login-customer"
				:to="{ name: 'RenewalPassword' }"
			>
				<b><strong>기존 가입고객</strong>은 최초 1회 비밀번호 변경 후 사용합니다.</b><small>GO <i class="ico_link T=bold"></i></small>
			</mm-link>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=lg T=primary"
					>
						<b>로그인</b>
					</button>
					<mm-link
						class="mm_btn T=lg T=line"
						:to="{ name: 'SignupVerification' }"
					>
						<b>회원가입</b>
					</mm-link>
				</div>
				<div class="mm_btn_box">
					<div class="mm_flex T=auto">
						<mm-link :to="{ name: 'FindId' }">
							<b>아이디 찾기</b>
						</mm-link>
						<mm-link :to="{ name: 'FindPassword' }">
							<b>비밀번호 찾기</b>
						</mm-link>
						<a
							href="#"
							@click.prevent="overlayLoginGuestOrder"
						>
							<b>비회원 주문조회</b>
						</a>
					</div>
				</div>
			</div>

			<!-- 간편로그인 -->
			<div class="m_popup-login-sns">
				<h6><b>SNS 계정으로 로그인</b></h6>
				<ul>
					<li>
						<mm-link
							class="btn_naver"
							to="http://"
						>
							<i class="ico_sns-naver"></i><b class="mm_ir-blind">네이버</b>
						</mm-link>
						<!-- (D) 최근 로그인한 SNS 채널에 text_recent 요소를 노출합니다 -->
						<span class="text_recent">최근 로그인</span>
					</li>
					<li>
						<mm-link
							class="btn_kakaotalk"
							to="http://"
						>
							<i class="ico_sns-kakao"></i><b class="mm_ir-blind">카카오톡</b>
						</mm-link>
					</li>
					<!-- (D) 모바일 ios app에서만 애플ID로그인 기능이 노출됩니다. -->
					<li>
						<mm-link
							class="btn_apple"
							to="http://"
						>
							<i class="ico_sns-apple"></i><b class="mm_ir-blind">애플</b>
						</mm-link>
					</li>
				</ul>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, defineAsyncComponent } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import Layout from '@/component/layout/Layout.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import FormText from '@/component/form/FormText.vue';

	const layerContextStore = useLayerContextStore();

	function overlayLoginGuestOrder() {
		const component = defineAsyncComponent(() => import('@/page/login/guest-order/LoginGuestOrder.vue'));

		return layerContextStore.openOverlay(component);
	}

	const saveId = ref(false);
</script>