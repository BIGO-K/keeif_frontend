<template>
	<div class="mm_loading">
		<div class="mm_loading-inner">
			<i class="ico_loading S=ani-spin"></i>
			<p>본인인증 결과를 수신중입니다.</p>
		</div>
	</div>
</template>
<script setup lang='ts'>
	import { computed, onMounted } from 'vue';
	import { useAuthStore } from '$/stores/useAuthStore';
	import { useInAppBrowserContextStore } from '$/stores/useInAppBrowserContextStore';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useIdentityVerification } from '$/composables/useIdentityVerification';
	import { useRouteQueryCast } from '$/composables/useRouteQueryCast';

	const { queryToBoolean, queryToString } = useRouteQueryCast();

	const inAppBrowserContextStore = useInAppBrowserContextStore();
	const generatedToken = computed(() => inAppBrowserContextStore.generatedToken);
	const contextPosition = computed(() => inAppBrowserContextStore.historyPositionContext);
	const { router, bom, loading } = useGlobalPageContext();
	const authStore = useAuthStore();
	const { setProcessToken, result, hasMember, confirmForMember } = useIdentityVerification();

	const needVerify = queryToBoolean('need_verify', false);
	const redirectPath = queryToString('redirect', '/');
	if (generatedToken.value) {
		setProcessToken(generatedToken.value);
	}

	onMounted(async () => {

		if (!generatedToken.value) {
			if (!contextPosition.value) {
				return router.push('/');
			}

			// 그외 히스토리 이동수만큼 뒤로가기 처리
			return router.go(-contextPosition.value.diff);
		}

		try {
			loading.show();
			if (needVerify) {
				await confirmForMember();
				await authStore.refresh();

				return router.push(`${redirectPath}` || '/');
			}

			const profile = await result();
			const existMember = await hasMember();
			if (existMember) {
				return bom.alert('이미 가입한 회원입니다.\n로그인 페이지로 이동합니다.', () => {
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
				return bom.alert(`만14세 미만은 서비스 이용이 불가합니다.`);
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
			loading.hide();
		}

	});
</script>