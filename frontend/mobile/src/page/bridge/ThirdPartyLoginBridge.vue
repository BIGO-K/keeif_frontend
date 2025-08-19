<template>
	<div class="mm_loading">
		<div class="mm_loading-inner">
			<i class="ico_loading S=ani-spin"></i>
			<p class="">
				결과 처리 중입니다. 잠시만 기다려주세요.
			</p>
		</div>
	</div>
</template>

<script setup lang='ts'>
	import { computed, defineAsyncComponent, onMounted } from 'vue';
	import { useAuthStore } from '$/stores/useAuthStore';
	import { useInAppBrowserContextStore } from '$/stores/useInAppBrowserContextStore';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import { useOrderStore } from '$/stores/useOrderStore';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useMemberInformation } from '$/composables/useMemberInformation';
	import { useThirdPartyAuth } from '$/composables/useThirdPartyAuth';
	import { THIRD_PARTY_TYPES } from '$/constants/THIRDPARTY';

	const props = defineProps<{
		platform: ThirdPartyPlatforms,
		processType: 'connect'|'login'|'verify'
	}>();

	const authStore = useAuthStore();
	const orderStore = useOrderStore();
	const { reverifyByThirdParty } = useMemberInformation();

	const layerContextStore = useLayerContextStore();
	const member = computed(() => authStore.member);
	/*** third party 프로세스 타입  */
	const processType = computed<'connect'|'login'|'verify'>(() => {
		return ['connect', 'login', 'verify'].includes(props.processType) ? props.processType : 'login';
	});

	const { setAccessToken, getAuthResultByToken, getDuplicatesByEmail, registWithToken } = useThirdPartyAuth(props.platform);
	const inAppBrowserContextStore = useInAppBrowserContextStore();

	const generatedToken = computed(() => inAppBrowserContextStore.generatedToken);
	const contextPosition = computed(() => inAppBrowserContextStore.historyPositionContext);

	if (generatedToken.value) {
		setAccessToken(generatedToken.value);
	}

	const { router, route, bom } = useGlobalPageContext();

	onMounted(async () => {
		/** 발급된 토큰이 없는 경우 히스토리 이동. */
		if (!generatedToken.value) {
			/** 저장된 정보가 없는 경우 돌아갈수 있게, 메인으로 돌려준다 */
			if (!contextPosition.value) {
				return router.push('/');
			}

			// 그외 히스토리 이동수만큼 뒤로가기 처리
			return router.go(-contextPosition.value.diff);
		}

		try {
			inAppBrowserContextStore.applyHistoryPosition(route.path);
			const socialUser = await getAuthResultByToken();
			// 연동인 경우 처리
			if (processType.value === 'connect') {
				let message = `${socialUser.platform_label} 계정 연동 되었습니다.`;
				if (socialUser.is_registered_user) {
					message = `이미 연동된 ${socialUser.platform_label} 계정입니다.\n 다른 ${socialUser.platform_label} 계정을 이용해주세요.`;
				}
				else {
					// await connectSocial();
				}

				return bom.alert(message, () => {
					router.push({
						name: 'Setting',
					});
				});
			}
			else if (processType.value === 'verify') {
				await reverifyByThirdParty(socialUser.platform, socialUser.token);

				return router.push({
					name: 'MyInfoUpdate',
				});
			}

			/** 로그인의 경우 이미 등록된 유저면 소셜 정보 불러온다 **/
			if (socialUser.is_registered_user && generatedToken.value) {
				const loginResult = await authStore.loginByThirdParty(props.platform, generatedToken.value);

				return pageMoveAfterLogin(loginResult);
			}

			// 소셜회원 이메일로 중복여부 검사
			const duplicateUsers = await getDuplicatesByEmail(socialUser.email);

			// 중복회원인 경우 처리
			if (duplicateUsers.length > 0) {
				return router.push({
					name: 'SignupRegistered',
				});
			}

			authStore.thirdPartyProfile = socialUser;

			/** 카카오 싱크의 경우 회원가입까지 처리 후 때문에 바로 가입 완료로 이동 **/
			if (socialUser.platform === THIRD_PARTY_TYPES.kakaoSync) {
				await registWithToken(socialUser);

				return router.push({
					name: 'SignupSuccess',
				});
			}


			return router.replace({
				name: 'SignupSns',
			});

		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			inAppBrowserContextStore.clearToken();
		}
	});

	function pageMoveAfterLogin(loginResult: LoginResult) {
		if (!member.value) {
			return bom.alert('로그인을 다시 시도해주세요.', () => {
				router.push({
					name: 'Login',
				});
			});
		}

		if (!contextPosition.value || !contextPosition.value.options) {
			return bom.alert('이미 가입한 회원 입니다.\n 메인 페이지로 이동 됩니다.', () => {
				return router.push({
					name: 'Main',
				});
			});
		}

		const options = contextPosition.value.options;

		if (options.needAdultCertification && loginResult.is_verify_age === false) {
			return router.replace({
				name: 'AuthAdult',
				query: {
					redirect_to_after: options.redirectPath || '/',
				},
			});
		}

		if (options.needRedirectToOrder && member.value) {
			if (!member.value.is_certificated) {
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

		// 로그인 처리 후 로그인 페이지로 돌아오지 않게 replace 처리
		return router.replace(options.redirectPath || '/');

	}
</script>