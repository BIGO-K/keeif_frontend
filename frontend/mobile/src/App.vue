<template>
	<the-error
		v-if="hasError"
		:error="pageContextStore.applicationError!"
	></the-error>
	<template v-else>
		<!-- 스킵 -->
		<nav class="mm_skip">
			<ul>
				<li>
					<a href="#mm_body">
						본문바로가기
					</a>
				</li>
			</ul>
		</nav>

		<RouterView
			v-slot="{ Component }"
			:data-path="route.path"
		>
			<template v-if="Component">
				<!-- BOM 영역 -->
				<template v-if="needErrorHandle && hasBomContext">
					<div class="mm_bom">
						<layout-bom
							v-for="bom in bomContexts"
							:key="bom.uuid"
							:bom="bom"
						></layout-bom>
					</div>
				</template>
				<Suspense v-else>
					<Transition
						mode="in-out"
						:name="$route.meta.hideTransition ? 'mm_layout none' : `mm_layout ${$route.meta.transition}`"
						@before-leave="beforeLeaveTransition"
					>
						<component
							:is="Component"
							:data-path="$route.path"
						></component>
					</Transition>
					<template #fallback>
						<i
							class="image_stage"
							style="background-image:url('/image/common/logo_keeif.svg');"
						></i>
					</template>
				</Suspense>
			</template>
		</RouterView>

		<app-popup v-if="isAppFirstUser && $route.name === 'Main'"></app-popup>
		<!-- 오버레이 모달 -->
		<transition name="overlay-up">
			<Suspense>
				<div
					v-if="overLayers.length > 0"
					class="mm_overlay"
				>
					<div class="mm_overlay-dim"></div>
					<transition-group
						name="overlay-item"
						tag="div"
						class="mm_overlay-list"
					>
						<layout-overlay
							v-for="item in overLayers"
							:key="item.uuid"
							:layer="item"
						>
						</layout-overlay>
					</transition-group>
				</div>
			</Suspense>
		</transition>

		<template v-if="hasModal">
			<div :class="{ 'mm_modal' : hasModal }">
				<div class="mm_modal-items">
					<layout-modal
						v-for="layer in modalLayers"
						:key="layer.uuid"
						:layer="layer"
					>
					</layout-modal>
				</div>
			</div>
		</template>


		<!-- Loading -->
		<template v-if="needLoading">
			<loading></loading>
		</template>
	</template>

	<!-- BOM 영역 -->
	<template v-if="hasBomContext && !needErrorHandle">
		<div class="mm_bom">
			<layout-bom
				v-for="bom in bomContexts"
				:key="bom.uuid"
				:bom="bom"
			></layout-bom>
		</div>
	</template>
</template>

<script setup lang="ts">
	import { computed, onMounted, onErrorCaptured, ref, watch } from 'vue';
	import { useRoute, useRouter } from 'vue-router';
	import * as ChannelService from '@channel.io/channel-web-sdk-loader';
	import { useStyleTag } from '@vueuse/core';
	import { AxiosError } from 'axios';
	import { useAffiliateStore } from '$/stores/useAffiliateStore';
	import { useBomStore } from '$/stores/useBomStore';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import { usePageContextStore } from '$/stores/usePageContextStore';
	import { useScrollPositionStore } from '$/stores/useScrollPositionStore';
	import config from '$/utils/config';
	import { useChannelTalk } from '$/composables/useChannelTalk';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useThirdPartyTracking } from '$/composables/useThirdPartyTracking';
	import { useUserAgent } from '$/composables/useUserAgent';
	import LayoutBom from '@/component/layout/LayoutBom.vue';
	import LayoutModal from '@/component/layout/LayoutModal.vue';
	import LayoutOverlay from '@/component/layout/LayoutOverlay.vue';
	import AppPopup from '@/component/AppPopup.vue';
	import Loading from '@/component/Loading.vue';
	import TheError from '@/page/error/TheError.vue';


	ChannelService.loadScript();
	const { design, grade_colors } = config();
	const pageContextStore = usePageContextStore();
	const scrollPositionStore = useScrollPositionStore();

	const bomStore = useBomStore();
	const route = useRoute();
	const router = useRouter();
	const needErrorHandle = ref<boolean>(false);
	onErrorCaptured((e) => {
		if (e instanceof AxiosError) {
			// console.log(e instanceof NotFoundError, 'on ErrorCaptured', needErrorHandle.value);
			pageContextStore.applicationError = e;

			return false;
		}

		return false;

	});

	const colors = {
		main: design.main_color || '#1f1f1f',
		sub: design.sub_color || '#e63e20',
		support: design.support_color || '#4457a7',
	};

	useStyleTag(
		`
			:root {
				/* 상품 비율 */
				--prod_ratio_base: 1;
				/* 높이 */
				--header_height_base: 45px;
				--header_height_main: 56px;
				--gnb_height_base: 47px;
				--toolbar_height_base: 51px;
				--color_text_base: #010101;
				--color_main: ${colors.main};
				--color_sub: ${colors.sub};
				--color_variable: ${design.color_version === 'color' ? 'var(--color_main)' : 'var(--color_sub)'};
				--color_support: ${colors.support};
				--color_header: ${design.use_header_color ? '--color_header: var(--color_main)' : '#fff'};
				${grade_colors.map(gradeColor => `--color_level${gradeColor.grade_order + 1} : ${gradeColor.color_code};`).join('')}
			}
		`.replace(/\s/g, ''),
		{
			id: 'style_root',
		},
	);

	const affiliateStore = useAffiliateStore();
	const hasError = computed(() => pageContextStore.applicationError !== null);

	/** bom contexts 정보 **/
	const bomContexts = computed(() => bomStore.bomContexts);
	/** bom context 존재 여부 **/
	const hasBomContext = computed(() => bomContexts.value.length > 0);
	const needLoading = computed(() => bomStore.loading);
	// 오버레이/모달
	const layerContextStore = useLayerContextStore();
	const layerContexts = computed(() => layerContextStore.layerContexts);
	const overLayers = computed(() => layerContexts.value.filter(context => context.type === 'overlay'));
	const modalLayers = computed(() => layerContexts.value.filter(context => context.type === 'modal'));
	const hasModal = computed(() => {
		if (modalLayers.value.length < 1) {
			return false;
		}

		return modalLayers.value.find(layer => layer.isActive) !== undefined;
	});

	/** IOS에서 뒤로가기 제스처 적용할때 여기서 스크롤 처리 필요 **/
	function beforeLeaveTransition() {
		if (route.meta.isForward) {
			return;
		}

		const scroller = document.querySelector(`[data-path="${route.path}"] #mm_body > .mm_scroller`);
		if (scroller) {
			scroller.scrollTop = scrollPositionStore.getCurrentPageContext(route.path)?.scrollTop || 0;
		}
	}

	router.beforeEach(async (to, from, next) => {
		scrollPositionStore.applyPageContext({
			key: from.path,
			scrollTop: document.querySelector(`[data-path="${from.path}"] #mm_body > .mm_scroller`)?.scrollTop || 0,
		});

		return next();
	});

	const { isAppUser, isAppFirstUser } = useUserAgent();

	const isChannelMessengerOpen = ref<boolean>(false);

	const thirdPartyTracking = useThirdPartyTracking();
	thirdPartyTracking.initialize();

	const { initSeo } = useGlobalPageContext();


	initSeo();
	onMounted(() => {
		if (isAppUser) {
			document.documentElement.classList.add('S=app');
		}

		ChannelService.loadScript();
		useChannelTalk().userBoot();

		ChannelService.onShowMessenger(() => {
			isChannelMessengerOpen.value = true;
		});



	});

	ChannelService.onHideMessenger(() => {
		isChannelMessengerOpen.value = false;
	});

	watch(route, (to) => {
		/** 매출코드 처리 */
		if (to.query.affiliate) {
			affiliateStore.set(`${to.query.affiliate}`, to.query);
		}

		if (isChannelMessengerOpen.value) {
			ChannelService.hideMessenger();
		}
	});
</script>

<style lang="scss">
	$transition_time: 0.3s;

	// 오버레이 모션
	.overlay-up-enter-active,
	.overlay-up-leave-active {
		transition: $transition_time;

		.mm_overlay-dim {
			transition: opacity $transition_time;
		}
	}

	.overlay-up-enter-from,
	.overlay-up-leave-to {
		pointer-events: none;

		.mm_overlay-dim {
			opacity: 0;
		}

		// 마지막 overlay가 닫힐 때
		.mm_overlay-item {
			transform: translateY(100%);
		}
	}

	.mm_overlay-item {
		filter: drop-shadow(0 0 15px rgb(0 0 0 / 0.2));
		transition: transform $transition_time ease-out;
	}

	.overlay-item-enter-from,
	.overlay-item-leave-to,
	.mm_overlay-item:not(:last-child, .S\=back) {
		// .S=back 클래스로 현재 요소를 닫을 때 이전 요소 노출 제어
		transform: translateY(100%);
		pointer-events: none;
	}

	.mm_layout {
		transition: transform 200ms ease 100ms;

		&.slide-up-enter-active,
		&.slide-left-enter-active,
		&.slide-right-enter-active,
		&[class*='reverse-leave-active']
		{
			position: fixed;
			z-index: 20000;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
		}

		&[class*='leave-active']
		{
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
		}

		&[class*='slide-right-reverse-enter'] {
			z-index: -500;
		}
		// 메인페이지로 갈때 레이아웃 깨지는 현상 처리 필요
		&.slide-up-enter-from,
		&.slide-up-reverse-leave-to {
			transform: translateY(100%);
		}

		&.slide-right-enter-from,
		&.slide-right-reverse-leave-to {
			transform: translateX(100%);
		}

		&.slide-left-enter-from,
		&.slide-left-reverse-leave-to {
			transform: translateX(-100%);
		}

		&.bf-custom-enter-active  {
			position: fixed;
			z-index: 20000;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			opacity: 1;
			transition: opacity  0s;
		}

		&.bf-custom-leave-active  {
			display: none;
		}
	}

	.m_product-clone {
		background: linear-gradient(#fff, #fff, rgb(255 255 255 / 0.7));
	}
</style>