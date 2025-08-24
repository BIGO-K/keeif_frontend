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
				<template v-if="member">
					<p>{{ member.login_id }}</p>
					<button
						type="button"
						class="mm_btn T=sm T=line"
						@click="logout"
					>
						<b>로그아웃</b>
					</button>
				</template>
				<template v-else>
					<p>로그인해 주세요</p>
					<mm-link
						:to="{ name: 'Login' }"
						class="mm_btn T=sm T=line T=primary"
					>
						<b>로그인</b>
					</mm-link>
				</template>
			</div>

			<!-- 간편 로그인 연동관리 -->
			<section
				v-if="member && member.login_type === `shop`"
				class="m_myset-sns"
			>
				<h3 class="mm_strapline">
					<b>간편 로그인 연동관리</b>
				</h3>
				<ul class="m_my-sns">
					<li
						v-for="usablePlatform in usablePlatforms"
						:key="usablePlatform.code"
					>
						<i :class="usablePlatform.iconClass"></i><span>{{ usablePlatform.label }}</span>
						<button
							v-if="usablePlatform.connected"
							type="button"
							class="mm_btn T=sm T=lighter"
							@click="disconnect(usablePlatform.code)"
						>
							<b>연동해제</b>
						</button>
						<a
							v-else
							class="mm_btn T=sm T=line T=primary"
							href="#"
							target="_blank"
							title="새 창 열림"
							@click.prevent="connect(usablePlatform.code)"
						>
							<b>연동하기</b>
						</a>
					</li>
				</ul>
			</section>

			<!-- 앱 전용 -->
			<!-- (D) 모바일 app에서만 앱관련정보가 노출됩니다. -->
			<div class="m_myset-app">
				<!-- <biometric-setting v-if="false"></biometric-setting> -->

				<!-- 푸시 -->
				<div class="mm_check-list">
					<ul>
						<li>
							<form-check
								v-model="adPush"
								type-switch
								label="광고성(PUSH) 알림 수신"
							></form-check>
							<p>본 설정은 해당 기기에서만 유효하며, 수신 거절 시 정보성 알림도 발송되지 않습니다</p>
						</li>
						<li>
							<form-check
								v-model="adPushNight"
								type-switch
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
						<dd>{{ currentAppVersion }}</dd>
					</dl>
					<dl class="mm_flex">
						<dt>최신 버전</dt>
						<dd>
							V1.0.0
							<a
								v-if="appNeedUpdate && appUpdateLink"
								class="mm_btn T=2xs T=line T=variable"
								:href="appUpdateLink"
								target="_blank"
								title="새 창 열림"
							>
								<b>업데이트</b>
							</a>
						</dd>
					</dl>
				</section>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { computed, ref, watch } from 'vue';
	import { useRouter } from 'vue-router';
	import { useAuthStore } from '$/stores/useAuthStore';
	import config from '$/utils/config';
	import ios from '$/utils/ios';
	import mons from '$/utils/mons';
	import { useAirbridge } from '$/composables/useAirbridge';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useMemberInformation } from '$/composables/useMemberInformation';
	import { useNativeApp } from '$/composables/useNativeApp';
	import { usePopupWindow } from '$/composables/usePopupWindow';
	import { useThirdPartyAuth } from '$/composables/useThirdPartyAuth';
	import { useUserAgent } from '$/composables/useUserAgent';
	import { HTTP_STATUS_CODE } from '$/constants/HTTPSTATUSCODE';
	import Layout from '@/component/layout/Layout.vue';
	import FormCheck from '@/component/form/FormCheck.vue';

	type ThirdPartyAuthPlatform = {
		code: ThirdPartyPlatforms
		iconClass: string
		label: string
		connected: boolean
	}

	const authStore = useAuthStore();
	const member = computed(() => authStore.member);
	const router = useRouter();
	const { isAppUser, isIosApp, currentAppVersion } = useUserAgent();
	const { bom, loading } = mons();
	const { getConnectedSocials, disConnectSocial, connectSocial } = useMemberInformation();
	const { getPushAgreement, updatePushAgreement, updateFirebaseMessagingToken, getAppVersionInfo } = useNativeApp();
	const connectedSocial = ref(await getConnectedSocials());
	const usable = config('paid_features.usable_social_logins');
	const appInfo = ref<{ recent_app_version: string, app_update_link: string}|null>(null);
	const adPush = ref(false);
	const adPushNight = ref(false);
	const usablePlatforms = computed(() => {
		const platforms: ThirdPartyAuthPlatform[] = [];

		if (member.value?.login_type !== 'shop') {
			return [];
		}

		if (usable.includes('naver')) {
			platforms.push({
				code: 'naver',
				iconClass: 'ico_sns-naver',
				label: '네이버',
				connected: connectedSocial.value.isNaverConnected,
			});
		}
		if (usable.includes('kakao')) {
			platforms.push({
				code: 'kakao',
				iconClass: 'ico_sns-kakao',
				label: '카카오톡',
				connected: connectedSocial.value.isKakaoConnected,
			});
		}
		if (usable.includes('kakao_sync')) {
			platforms.push({
				code: 'kakao_sync',
				iconClass: 'ico_sns-kakao',
				label: '카카오톡',
				connected: connectedSocial.value.isKakaoConnected,
			});
		}
		if (usable.includes('apple')) {
			platforms.push({
				code: 'apple',
				iconClass: 'ico_sns-apple',
				label: '애플',
				connected: connectedSocial.value.isAppleConnected,
			});
		}

		return platforms;
	});

	function toggleConnectedThirdParty(platform: ThirdPartyPlatforms, toggle: boolean) {
		if (platform === 'naver') {
			connectedSocial.value.isNaverConnected = toggle;
		}
		else if (platform === 'kakao' || platform === 'kakao_sync') {
			connectedSocial.value.isKakaoConnected = toggle;
		}
		else if (platform === 'apple') {
			connectedSocial.value.isAppleConnected = toggle;
		}
		else return;
	}

	if (isAppUser) {
		getPushAgreement().then((data) => {
			adPush.value = data?.is_receive_push || false;
			adPushNight.value = data?.is_receive_night_push || false;
		});

		updateFirebaseMessagingToken();
		watch([adPush, adPushNight], async ([adPushTo, adNightPushTo]) => {
			await updatePushAgreement(adPushTo, adNightPushTo);
		});

		try {
			getAppVersionInfo().then((data) => {
				appInfo.value = {
					recent_app_version: data?.recent_app_version || '',
					app_update_link: '',
				};
			});
		}
		catch (e) {
			console.log(e);
		}

	}

	async function logout() {
		router.push('/').then(async () => {
			useAirbridge().signOut(member.value?.login_type || 'shop');
			await authStore.logout();
		});
	}

	/**
	 * 연동해제 처리
	*/
	async function disconnect(platform: ThirdPartyPlatforms) {
		loading.show();
		try {
			await disConnectSocial(platform);
			toggleConnectedThirdParty(platform, false);
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}

	async function connect(platform: ThirdPartyPlatforms) {
		if (isAppUser && platform === 'naver') {
			window['nativeCallbackNaverLogin'] = nativeCallbackNaverLogin;
			if (isIosApp) return ios.run('naverLogin');
			else return Android.naverLogin();
		}

		try {
			const thirdPartyAuth = useThirdPartyAuth(platform);
			const enterUrl = ref<string|undefined>();
			const popupPromise = usePopupWindow('thirdParty-login', enterUrl).open();
			const enterContext = await thirdPartyAuth.generateEnterContext();
			enterUrl.value = enterContext.enter_url;

			const { popupWindowClosed } = await popupPromise;
			if (!popupWindowClosed) return undefined;

			const socialUser = await thirdPartyAuth.getAuthResultByToken();
			if (socialUser.is_registered_user) return bom.alert(`이미 연동된 ${thirdPartyAuth.platformLabel} 계정입니다.\n 다른 ${thirdPartyAuth.platformLabel} 계정을 이용해주세요.`);
			await connectSocial(platform, socialUser.token);
			toggleConnectedThirdParty(platform, true);
		}
		catch (e) {
			useErrorAlert(e);
		}
	}

	const appNeedUpdate = computed(() => {
		if (!appInfo.value) {
			return false;
		}
		const recentAppVersion = appInfo.value?.recent_app_version.replace(/\./gi, '').replace(/v/gi, '');
		const installedVersion = currentAppVersion.value.replace(/\./gi, '').replace(/v/gi, '');
		if (recentAppVersion > installedVersion) {
			return true;
		}

		return false;
	});

	const appUpdateLink = computed(() => {
		if (isIosApp) {
			return 'itms-apps://itunes.apple.com/kr/app/apple-store/id6470781539';
		}

		return `http://play.google.com/store/apps/details?id=kr.triz.keeif&is_out_intent=Y`;
	});
	const { Android } = window;

	async function nativeCallbackNaverLogin(accessToken: string) {
		const thirdPartyAuth = useThirdPartyAuth('naver');
		try {
			const loginResult = await thirdPartyAuth.nativeCallbackNaverLogin(accessToken);
			if (loginResult.isLoginComplete && loginResult.result) {
				return bom.alert(`이미 연동된 ${thirdPartyAuth.platformLabel} 계정입니다.\n 다른 ${thirdPartyAuth.platformLabel} 계정을 이용해주세요.`);
			}
		}
		catch (e) {
			if (e.response?.stats === HTTP_STATUS_CODE.UNAUTHORIZED) {
				await connectSocial('naver', accessToken);

				return toggleConnectedThirdParty('naver', true);
			}
			useErrorAlert(e);
		}
	}
</script>