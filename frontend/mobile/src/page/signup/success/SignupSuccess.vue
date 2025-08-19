<template>
	<layout
		title="회원가입"
		layout="popup"
		class="L=sign"
		:is-footer="false"
		:is-toolbar="false"
	>
		<canvas
			ref="canvasDom"
			:width="width"
			:height="height"
			style="position: absolute; top: 0; left: 0;"
		></canvas>
		<div
			ref="pageElement"
			class="m_popup-join"
		>
			<h3 class="m_popup-join-title">
				<b>STEP 4</b><strong>가입완료</strong><i class="image_line T=step4"></i>
			</h3>
			<p class="text_complete">
				<strong>회원가입 완료!</strong><span>로그인 후</span>다양한 상품과<br> 혜택을 만나보세요
			</p>
			<div class="mm_btn_box">
				<mm-link
					class="mm_btn T=lg T=primary"
					:to="{ name: 'Login' }"
				>
					<b>로그인</b>
				</mm-link>
				<mm-link
					class="mm_btn T=lg T=line T=primary"
					:to="{ name: 'Main' }"
				>
					<b>메인으로 가기</b>
				</mm-link>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, onMounted, watch, onBeforeUnmount, defineAsyncComponent } from 'vue';
	import { useAuthStore } from '$/stores/useAuthStore';
	import { useExpireStore } from '$/stores/useExpireStore';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import { useCanvasFlake } from '$/composables/useCanvasFlake';
	import { useThirdPartyTracking } from '$/composables/useThirdPartyTracking';
	import Layout from '@/component/layout/Layout.vue';

	const canvasDom = ref<HTMLCanvasElement>();
	const authStore = useAuthStore();
	const pageElement = ref<HTMLElement|null>(null);
	const width = ref(0);
	const height = ref(0);
	const { start } = useCanvasFlake(canvasDom);
	const layerContext = useLayerContextStore();

	const stopWatch = watch([width, height], ([w, h]) => {
		if (!w || !h) {
			return;
		}
		start();
	}, {
		flush: 'post',
	});

	const expireStore = useExpireStore();

	const registEvents = expireStore.get<RegistEvent[]>(`regist_event`, []);

	if (registEvents.length > 0) {
		const component = defineAsyncComponent(() => import('@/page/signup/success/SignupSuccessBenefit.vue'));

		const couponEvent = registEvents.find(registEvent => registEvent.type === 'coupon');
		if (couponEvent) {
			layerContext.openModal(component, {
				props: {
					registEvent: couponEvent,
				},
			});
		}
		const pointEvent = registEvents.find(registEvent => registEvent.type === 'point');
		if (pointEvent) {
			layerContext.openModal(component, {
				props: {
					registEvent: pointEvent,
				},
			});
		}

	}

	useThirdPartyTracking().joinComplete();

	onMounted(() => {
		pageElement.value = document.querySelector<HTMLElement>('.mm_page-content');
		width.value = pageElement.value?.offsetWidth || 0;
		height.value = pageElement.value?.offsetHeight || 0;
		stopWatch();
	});

	onBeforeUnmount(() => {
		authStore.identityVerificationProfile = null;
	});
</script>