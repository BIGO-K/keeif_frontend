<template>
	<layout
		title="회원가입"
		layout="popup"
		class="L=sign"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_popup-join">
			<h3 class="m_popup-join-title">
				<b>STEP 1</b><strong>본인인증</strong><i class="image_line T=step1"></i>
			</h3>
			<p class="text_welcome">
				<i class="ico_smile"></i><strong>반가워요!</strong><span>안전한 회원가입을 위해</span>고객님의 본인인증이<br> 필요합니다
			</p>
			<div class="mm_btn_box">
				<a
					class="mm_btn T=lg T=primary"
					href="#"
					target="_blank"
					title="새 창 열림"
					@click.prevent="startCertificate"
				>
					<b>휴대폰 인증</b>
				</a>
			</div>
			<div class="mm_note">
				<ul>
					<li>14세 미만 회원은 가입이 불가합니다.</li>
					<li>법인폰 사용자는 휴대폰 인증이 불가합니다.</li>
				</ul>
			</div>
			<div
				v-if="thirdPartyPlatforms.length > 0"
				class="m_popup-join-sns"
			>
				<h6><b>SNS 계정으로 로그인</b></h6>
				<ul>
					<li
						v-for="thirdPartyPlatform in thirdPartyPlatforms"
						:key="thirdPartyPlatform.code"
					>
						<a
							:class="thirdPartyPlatform.buttonClass"
							href="#"
							target="_blank"
							title="새 창 열림"
							@click.prevent="socialLogin(thirdPartyPlatform.code)"
						>
							<i :class="thirdPartyPlatform.iconClass"></i>
							<b class="mm_ir-blind">{{ thirdPartyPlatform.label }}</b>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useAuthStore } from '$/stores/useAuthStore';
	import { useInAppBrowserContextStore } from '$/stores/useInAppBrowserContextStore';
	import ios from '$/utils/ios';
	import mons from '$/utils/mons';
	import thirdPartyConfig from '$/utils/thirdPartyPlatformLabel';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useIdentityVerification } from '$/composables/useIdentityVerification';
	import { usePopupWindow } from '$/composables/usePopupWindow';
	import { useThirdPartyAuth } from '$/composables/useThirdPartyAuth';
	import { useUserAgent } from '$/composables/useUserAgent';
	import { THIRD_PARTY_TYPES } from '$/constants/THIRDPARTY';
	import Layout from '@/component/layout/Layout.vue';

	const { isInappBrowser, isAppUser, isIosApp } = useUserAgent();
	const { Android } = window;
	const { bom, router, loading } = useGlobalPageContext();
	const { open, result, hasMember, currentContextOpen } = useIdentityVerification();
	const authStore = useAuthStore();
	const { usablePlatforms } = thirdPartyConfig;
	const thirdPartyPlatforms = usablePlatforms();


	async function nativeCallbackNaverLogin(accessToken: string) {
		const thirdPartyAuth = useThirdPartyAuth('naver');
		try {
			const loginResult = await thirdPartyAuth.nativeCallbackNaverLogin(accessToken);
			if (loginResult.isLoginComplete && loginResult.result) {
				return bom.alert('이미 가입한 회원 입니다.\n 메인 페이지로 이동 됩니다.', () => {
					router.replace({
						name: 'Main',
					});
				});
			}

			if (loginResult.profile) {
				const duplicateUsers = await thirdPartyAuth.getDuplicatesByEmail(loginResult.profile.email);
				if (duplicateUsers.length > 0) {
					return router.push({
						name: 'SignupRegistered',
					});
				}

				authStore.thirdPartyProfile = loginResult.profile;

				return router.push({
					name: 'SignupSns',
				});
			}
		}
		catch (e) {
			useErrorAlert(e);
		}

	}

	const inappBrowserContextStore = useInAppBrowserContextStore();

	async function socialLogin(platform: ThirdPartyPlatforms) {
		if (isAppUser && platform === 'naver') {
			window['nativeCallbackNaverLogin'] = nativeCallbackNaverLogin;
			if (isIosApp) return ios.run('naverLogin');
			else return Android.naverLogin();
		}

		loading.show();
		const thirdPartyAuth = useThirdPartyAuth(platform);
		const enterUrl = ref<string|undefined>();

		try {
			if (isInappBrowser.value) {
				const redirectRoute = router.resolve({
					name: 'ThirdPartyResultBridge',
					params: {
						platform: platform,
						processType: 'login',
					},
				});
				const enterContext = await thirdPartyAuth.generateEnterContext(redirectRoute);
				inappBrowserContextStore.applyGeneratedToken(enterContext.token, redirectRoute.path, {
					needAdultCertification: false,
					needRedirectToOrder: false,
					redirectPath: '/',
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

			const socialUser = await thirdPartyAuth.getAuthResultByToken();

			// 회원가입한 회원인 경우 로그인 처리 추가
			if (socialUser.is_registered_user) {
				// @TODO 로그인 후 처리 및 예외
				await authStore.loginByThirdParty(platform, enterContext.token);

				return router.replace('/');
			}

			/** 중복회원 체크 **/
			const duplicateUsers = await thirdPartyAuth.getDuplicatesByEmail(socialUser.email);

			if (duplicateUsers.length > 0) {
				return router.push({
					name: 'SignupRegistered',
				});
			}

			authStore.thirdPartyProfile = socialUser;
			/** 카카오 싱크의 경우 회원가입까지 처리 후 때문에 바로 가입 완료로 이동 **/
			if (platform === THIRD_PARTY_TYPES.kakaoSync) {

				await thirdPartyAuth.registWithToken(socialUser);

				return router.push({
					name: 'SignupSuccess',
				});
			}

			return router.push({
				name: 'SignupSns',
			});

		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}

	async function startCertificate() {
		mons().loading.show();
		try {
			// 인앱인 경우 redirect path 처리
			if (isInappBrowser.value) {
				return currentContextOpen();
			}

			await open();
			const profile = await result();

			if (!profile) {
				throw ({
					message: `본인 인증에 실패하였습니다.\n 다시 시도해 주세요.`,
				});
			}

			if (await hasMember()) {
				return mons().bom.alert('이미 가입한 회원입니다.\n로그인 페이지로 이동합니다.', () => {
					router.replace({
						name: 'Login',
					});
				});
			}

			/** 연령제한 */
			if (
				((new Date).getFullYear()
					- (new Date(profile.birth_date)).getFullYear()) < 14
			) {
				return mons().bom.alert(`만14세 미만은 서비스 이용이 불가합니다.`);
			}

			/** 본인인증 프로필 처리 **/
			authStore.identityVerificationProfile = profile;

			// 회원가입 다음 스텝 이동
			router.replace({
				name: 'SignupInput',
			});

		}
		catch (e) {
			useErrorAlert(e, {
				httpCatcher: {
					401: `본인 인증에 실패하였습니다.\n 다시 시도해 주세요.`,
				},
			});
		}
		finally {
			mons().loading.hide();
		}
	}
</script>