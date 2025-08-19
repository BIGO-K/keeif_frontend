<template>
	<template v-if="member && member.login_type === 'shop'">
		<h3 class="mm_title">
			<b>개인정보 보호를 위해<br> <strong>비밀번호를 입력해주세요</strong></b>
		</h3>
		<h6 class="mm_text-label">
			<b>비밀번호</b>
		</h6>
		<form-text
			v-model="passwordForm"
			type="password"
			maxlength="16"
			placeholder="비밀번호를 입력하세요"
			@keydown.enter.prevent="confirmPassword"
		></form-text>
		<div class="mm_foot">
			<div class="mm_btn_box">
				<button
					type="button"
					class="mm_btn T=primary"
					@click="confirmPassword"
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
			<li v-if="memberCurrentUseThirdParty">
				<a
					:class="memberCurrentUseThirdParty.buttonClass"
					href="#"
					target="_blank"
					title="새 창 열림"
					@click.prevent="socialLogin(memberCurrentUseThirdParty.code)"
				>
					<i :class="memberCurrentUseThirdParty.iconClass"></i>
					<b class="mm_ir-blind">{{ memberCurrentUseThirdParty.label }}</b>
				</a>
			</li>
		</ul>
	</template>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { useRouter, useRoute } from 'vue-router';
	import { useAuthStore } from '$/stores/useAuthStore';
	import { useInAppBrowserContextStore } from '$/stores/useInAppBrowserContextStore';
	import ios from '$/utils/ios';
	import mons from '$/utils/mons';
	import thirdPartyConfig from '$/utils/thirdPartyPlatformLabel';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useMemberInformation } from '$/composables/useMemberInformation';
	import { usePopupWindow } from '$/composables/usePopupWindow';
	import { useThirdPartyAuth } from '$/composables/useThirdPartyAuth';
	import { useUserAgent } from '$/composables/useUserAgent';
	import FormText from '@/component/form/FormText.vue';

	const { member } = useAuthStore();
	const router = useRouter();
	const route = useRoute();
	const { isAndroidApp, isIosApp, isAppUser, isInappBrowser } = useUserAgent();
	const { usablePlatforms } = thirdPartyConfig;
	const thirdPartyPlatforms = usablePlatforms();

	const memberCurrentUseThirdParty = computed(() => thirdPartyPlatforms.find(thirdParty => thirdParty.code === member?.login_type));
	const passwordForm = ref<string>('');
	const { reverify, reverifyByThirdParty } = useMemberInformation();
	const { Android } = window;
	const inappBrowserContextStore = useInAppBrowserContextStore();

	async function nativeCallbackNaverLogin(accessToken: string) {
		try {
			await reverifyByThirdParty('naver', accessToken);
		}
		catch (e) {
			useErrorAlert(e);
		}
	}

	async function socialLogin(platform: ThirdPartyPlatforms) {
		if (isAppUser && platform === 'naver') {
			window['nativeCallbackNaverLogin'] = nativeCallbackNaverLogin;
			if (isIosApp) return ios.run('naverLogin');
			else return Android.naverLogin();
		}

		const thirdPartyAuth = useThirdPartyAuth(platform);
		const enterUrl = ref<string|undefined>();

		try {
			if (isInappBrowser.value || new RegExp('FBAN|FBAV|Instagram', 'i').test(navigator.userAgent)) {
				const redirectRoute = router.resolve({
					name: 'ThirdPartyResultBridge',
					params: {
						platform: platform,
						processType: 'verify',
					},
				});
				const enterContext = await thirdPartyAuth.generateEnterContext(redirectRoute);
				inappBrowserContextStore.applyGeneratedToken(enterContext.token, redirectRoute.path, {
					needAdultCertification: false,
					needRedirectToOrder: false,
					redirectPath: `${route.fullPath}`,
				});

				return location.href = enterContext.enter_url;
			}

			const popupPromise = usePopupWindow('thirdParty-login', enterUrl).open();
			const enterContext = await thirdPartyAuth.generateEnterContext();
			enterUrl.value = enterContext.enter_url;

			const { popupWindowClosed } = await popupPromise;

			// 팝업 윈도우가 닫히지 않은 경우 리턴
			if (!popupWindowClosed) {
				return;
			}

			const result = await thirdPartyAuth.getAuthResultByToken();
			await reverifyByThirdParty(platform, result.token);
		}
		catch (e) {
			useErrorAlert(e);
		}
	}

	// 자사가입 회원 비밀번호 확인
	async function confirmPassword() {
		if (passwordForm.value === '') {
			return mons().bom.alert('비밀번호를 입력해주세요.');
		}
		try {
			await reverify(passwordForm.value);
		}
		catch (e) {
			useErrorAlert(e, {
				httpCatcher: {
					401: '비밀번호가 일치하지 않습니다.',
					422: '비밀번호가 일치하지 않습니다.',
				},
			});
		}
	}
</script>