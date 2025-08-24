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
			<strong
				v-if="needAdultCertification"
				class="text_adult"
			><i class="ico_adult T=lg"></i><b>본 상품은 19세 미만의 청소년이<br> 이용할 수 없습니다</b></strong>
			<h5 class="mm_text-label">
				<b>아이디</b>
			</h5>
			<form-text
				v-model="form.login_id"
				class="T=lg"
				placeholder="아이디를 입력하세요"
				maxlength="20"
				@keydown.enter.prevent="login()"
			></form-text>
			<h5 class="mm_text-label">
				<b>비밀번호</b>
			</h5>
			<form-text
				v-model="form.password"
				class="T=lg"
				type="password"
				placeholder="비밀번호 영문/특수문자/숫자 8~16자"
				maxlength="16"
				@keydown.enter.prevent="login()"
			></form-text>
			<!-- 보안문자입력 -->
			<!-- (D) 로그인 5회 실패 시 .m_popup-login-security 영역을 노출합니다. -->
			<div
				v-if="needCaptcha"
				class="m_popup-login-security"
			>
				<p class="mm_text-negative">
					로그인을 5회 실패하셨습니다<br>보안 문자를 입력하여 로그인하세요
				</p>
				<div class="m...security-info">
					<i class="image_security">
						<img
							:src="imageUrl"
							alt="보안문자"
						>
					</i>
					<button
						type="button"
						class="mm_btn T=xs T=line T=light btn_refresh"
						@click="generate"
					>
						<i class="ico_reload"></i><b>새로고침</b>
					</button>
					<form-text
						v-model="form.captchaCode"
						placeholder="보안문자 입력"
					></form-text>
				</div>
			</div>
			<form-check
				v-model="form.remember"
				label="아이디 저장하기"
			></form-check>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=lg T=primary"
						@click="login"
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
							v-if="isRedirectToOrder"
							href="#"
							@click.prevent="guestOrderStart()"
						>
							<b>비회원 주문하기</b>
						</a>
						<a
							v-else

							href="#"
							@click.prevent="loginGuestOrder()"
						>
							<b>비회원 주문조회</b>
						</a>
					</div>
				</div>
			</div>

			<!-- 간편로그인 -->
			<div
				v-if="thirdPartyPlatforms.length > 0"
				class="m_popup-login-sns"
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
						<span
							v-if="thirdPartyPlatform.code === recentLoginType"
							class="text_recent"
						>최근 로그인</span>
					</li>
				</ul>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, computed, ref, watchEffect } from 'vue';
	import { useRouter } from 'vue-router';
	import { useRouteQuery } from '@vueuse/router';
	import { useAuthStore } from '$/stores/useAuthStore';
	import { useInAppBrowserContextStore } from '$/stores/useInAppBrowserContextStore';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import { useOrderStore } from '$/stores/useOrderStore';
	import ios from '$/utils/ios';
	import thirdPartyConfig from '$/utils/thirdPartyPlatformLabel';
	import { useAirbridge } from '$/composables/useAirbridge';
	import { useCaptcha } from '$/composables/useCaptcha';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useMyCoupon } from '$/composables/useMyCoupon';
	import { usePopupWindow } from '$/composables/usePopupWindow';
	import { useThirdPartyAuth } from '$/composables/useThirdPartyAuth';
	import { useUserAgent } from '$/composables/useUserAgent';
	import { THIRD_PARTY_TYPES } from '$/constants/THIRDPARTY';
	import Layout from '@/component/layout/Layout.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import ReactiveDormant from '@/page/reactive-dormant/ReactiveDormant.vue';

	const layerContextStore = useLayerContextStore();
	function loginGuestOrder() {
		return layerContextStore.openOverlay(
			defineAsyncComponent(() => import('@/page/login/guest-order/LoginGuestOrder.vue')),
			{
				onClose: () => {
					// 비회원 로그인 처리 후 프로세스 수행!
				},
			},
		);
	}
	const { getMyCoupon } = useMyCoupon();
	const { imageUrl, generate, match } = useCaptcha();
	/** 서드파티 인증 플랫폼 */
	const authStore = useAuthStore();
	const { member, bom, loading, openModal } = useGlobalPageContext();
	const router = useRouter();
	const { usablePlatforms } = thirdPartyConfig;
	const thirdPartyPlatforms = usablePlatforms();
	const recentLoginType = computed(() => authStore.latestThirdPartyPlatformType);
	/** 로그인 후 이동경로 */
	const redirectToAfter = useRouteQuery('redirect_to_after', '/');
	const isRedirectToOrder = computed(() => redirectToAfter.value !== '/' && redirectToAfter.value === 'order');
	const needAdultCertification = useRouteQuery<string>('is_need_adult_certification', '').value.toLowerCase() === 'y' ? true : false;
	const { isAppUser, isIosApp, isInappBrowser } = useUserAgent();
	const needCaptcha = computed(() => authStore.loginFailCount >= 5);

	watchEffect(async () => {
		if (needCaptcha.value) {
			await generate();
		}
	});
	const { form, validate } = useForm<LoginForm & { needCaptcha: number, captchaCode: string }>(
		{
			login_id: authStore.rememberedId,
			password: '',
			remember: authStore.rememberedId === '' ? false : true,
			captchaCode: '',
			needCaptcha: needCaptcha.value ? 1 : 0,
		},
		{
			rule: {
				'login_id(아이디)': ['required'],
				'password(비밀번호)': ['required'],
				'captchaCode(보안문자)': ['requiredIf:needCaptcha,1'],
			},
			message: {
				'login_id.required': ':param(을/를) 입력해주세요.',
				'password.required': ':param(을/를) 입력해주세요.',
				'captchaCode.requiredIf': ':param(을/를) 입력해주세요.',
			},
		},
	);

	async function login() {
		loading.show();
		try {
			await validate();
			if (needCaptcha.value) {
				await match(form.value.captchaCode);
			}
			const loginResult = await authStore.login(form.value);
			pageMoveAfterLogin(loginResult);
		}
		catch (e) {
			authStore.loginFailCount++;
			if (needCaptcha.value) {
				generate();
			}
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}

	const { Android } = window;

	async function nativeCallbackNaverLogin(accessToken: string) {
		loading.show();
		const thirdPartyAuth = useThirdPartyAuth('naver');
		try {
			const loginResult = await thirdPartyAuth.nativeCallbackNaverLogin(accessToken);
			if (loginResult.isLoginComplete && loginResult.result) {
				return pageMoveAfterLogin(loginResult.result);
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
		finally {
			loading.hide();
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
					needAdultCertification: needAdultCertification,
					needRedirectToOrder: isRedirectToOrder.value,
					redirectPath: redirectToAfter.value,
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
				const loginResult = await authStore.loginByThirdParty(platform, enterContext.token);

				return pageMoveAfterLogin(loginResult);
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

	const orderStore = useOrderStore();

	/** 로그인 이후 페이지 이동 처리 **/
	function pageMoveAfterLogin(loginResult: LoginResult) {
		useAirbridge().signIn(loginResult.user.login_id, member.value?.login_type || 'shop');
		// 성인인증 필요한 경우 라우트 이동
		if (needAdultCertification && loginResult.is_verify_age === false) {
			router.replace({
				name: 'AuthAdult',
				query: {
					redirect_to_after: redirectToAfter.value,
				},
			});

			return;
		}

		// 휴먼회원 모달 노출
		if (loginResult.is_awaked) {
			return openModal(ReactiveDormant, {
				props: async () => {
					const coupon = loginResult.published_awake_coupon_id ? await getMyCoupon(loginResult.published_awake_coupon_id) : null;

					return {
						coupon,
					};
				},
				onCancelClose: () => {
					if (member.value === null) {
						return bom.alert('로그인을 다시 시도해주세요.');
					}
					loginResult.is_awaked = false;
					pageMoveAfterLogin(loginResult);

					return;
				},
			});
		}

		// 비밀번호 변경 권유
		if (loginResult.is_need_update_password) {
			router.replace({
				name: 'PasswordSecurity',
				query: {
					redirect_to_after: redirectToAfter.value,
				},
			});

			return;
		}

		// 주문서 이동
		if (isRedirectToOrder.value) {
			if (member.value && !member.value.is_certificated) {
				const component = defineAsyncComponent(() => import('@/page/auth/certificate/AuthCertificate.vue'));

				return layerContextStore.openOverlay(component, {
					onClose: async () => {
						return orderStore.moveToOrderPage();
					},
					onCancelClose: () => {
						bom.alert('본인인증을 취소 하셨습니다.\n 본인인증 후 상품구매가 가능합니다.\n 메인 페이지로 이동 됩니다.', () => {
							router.replace({
								name: 'Main',
							});
						});
					},
				});
			}

			return orderStore.moveToOrderPage();
		}

		return router.replace(redirectToAfter.value);
	}

	async function guestOrderStart() {
		return orderStore.moveToOrderPage();
	}
</script>
