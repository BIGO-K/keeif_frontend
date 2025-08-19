<template>
	<div class="m_overlay-certify">
		<h2 class="mm_title">
			<b>서비스 이용을 위해<br> <strong class="mm_text-variable">본인인증</strong>이 필요합니다</b>
		</h2>
		<div class="mm_foot">
			<div class="mm_btn_box">
				<a
					class="mm_btn T=lg T=primary"
					href="#"
					@click.prevent="startCertificate"
				>
					<b>휴대폰 인증</b>
				</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useAuthStore } from '$/stores/useAuthStore';
	import mons from '$/utils/mons';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useIdentityVerification } from '$/composables/useIdentityVerification';
	import { useUserAgent } from '$/composables/useUserAgent';

	defineExpose<OverlayComponentExpose>({
		title: `본인인증`,
	});

	const props = withDefaults(defineProps<{
		needVerify?: boolean
		redirectPath?: string;
		closer: CloseHandler<void>
	}>(), {
		redirectPath: '',
		needVerify: false,
	});

	const { bom, loading } = mons();
	const authStore = useAuthStore();
	const { isInappBrowser } = useUserAgent();
	const { open, result, confirmForMember, currentContextOpen } = useIdentityVerification();

	async function startCertificate() {
		loading.show();
		try {
			// 인앱인 경우 redirect path 처리
			if (isInappBrowser.value) {
				return currentContextOpen(props.needVerify, props.redirectPath);
			}
			await open();
			const profile = await result();

			if (!profile) {
				throw ({
					message: `본인 인증에 실패하였습니다.\n 다시 시도해 주세요.`,
				});
			}

			/** 연령제한 */
			if (
				((new Date).getFullYear()
					- (new Date(profile.birth_date)).getFullYear()) < 14
			) {
				return bom.alert(`만14세 미만은 서비스 이용이 불가합니다.`);
			}
			/** 본인인증 처리 **/
			await confirmForMember();

			/** 회원정보 갱신 처리 **/
			await authStore.refresh();
			props.closer();

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
	}
</script>