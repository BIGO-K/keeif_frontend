<template>
	<!-- 스킵 -->
	<nav class="mm_skip">
		<ul>
			<li>
				<a
					href="#mm_body"
					data-href="{ '_type': 'anchor' }"
				>
					본문바로가기
				</a>
			</li>
		</ul>
	</nav>

	<router-view></router-view>

	<!-- 앱전용화면 -->
	<div
		v-if="isApp"
		class="m_main-app"
	>
		<div class="m_main-app-dim"></div>
		<!-- (D) 해당하는 앱 전용화면 노출 시 'm_main-app-item' 요소에 'S=on' 클래스를 추가합니다 -->
		<!-- 앱이용권한안내 -->
		<div class="m_main-app-item m_main-app-access S=on">
			<div class="mm_scroller">
				<h3><b>엠몬스타 쇼핑몰<br> 접근 권한이 필요합니다</b></h3>
				<ul>
					<li><i class="ico_phone T=bold"></i><p>기기 및 앱 기록<small>앱 오류 확인 및 사용성 개선</small></p></li>
					<li><i class="ico_call"></i><p>전화(선택)<small>고객센터 전화연결</small></p></li>
					<li><i class="ico_photo"></i><p>저장공간·사진(선택)<small>포토 상품평 작성</small></p></li>
				</ul>
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=lg T=primary"
					>
						<b>확인</b>
					</button>
				</div>
			</div>
		</div>

		<!-- 푸시알림 -->
		<div class="m_main-app-item m_main-app-push">
			<div class="mm_scroller">
				<h3><b>푸시 알림을<br> 설정하시겠습니까?</b></h3>
				<ul>
					<li><i class="ico_noti"></i><p>쇼핑 정보를 알려드립니다.</p></li>
					<li><i class="ico_phone T=bold"></i><p>알림 수신 동의는 해당 기기에서만 설정됩니다.</p></li>
					<li><i class="ico_setup"></i><p>전체메뉴 &#62; 설정에서 변경이 가능합니다.</p></li>
				</ul>
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=lg T=primary"
					>
						<b>알림 ON</b>
					</button>
					<button
						type="button"
						class="btn_cancel"
					>
						<b>아니요. 괜찮습니다</b>
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- 오버레이 모달 -->
	<transition name="overlay-up">
		<div
			v-if="overLayers.length > 0"
			class="mm_overlay"
		>
			<div class="mm_overlay-dim"></div>
			<transition-group
				name="overlay-item"
				tag="div"
				class="mm_overlay-list"
				appear
				@before-leave="onBeforeLeaveOverlay"
				@enter="onEnterOverlay"
			>
				<layout-overlay
					v-for="item in overLayers"
					:key="item.uuid"
					:layer="item"
				>
				</layout-overlay>
			</transition-group>
		</div>
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

	<!-- BOM 영역 -->
	<template v-if="hasBomContext">
		<div class="mm_bom">
			<layout-bom
				v-for="bom in bomContexts"
				:key="bom.uuid"
				:bom="bom"
			></layout-bom>
		</div>
	</template>

	<!-- Loading -->
	<template v-if="needLoading">
		<loading></loading>
	</template>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import { useStyleTag } from '@vueuse/core';
	import { useBomStore } from '$/stores/useBomStore';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import mons from '$/utils/mons';
	import LayoutBom from '@/component/layout/LayoutBom.vue';
	import LayoutModal from '@/component/layout/LayoutModal.vue';
	import LayoutOverlay from '@/component/layout/LayoutOverlay.vue';
	import Loading from '@/component/Loading.vue';

	const bomStore = useBomStore();
	/** bom contexts 정보 **/
	const bomContexts = computed(() => bomStore.bomContexts);
	const needLoading = computed(() => bomStore.loading);
	/** bom context 존재 여부 **/
	const hasBomContext = computed(() => bomContexts.value.length > 0);
	const color = {
		main: null ?? '#1f1f1f',
		sub: null ?? '#e63e20',
		support: null ?? '#4457a7',
	};
	const gradeColors = [
		{ grade_order: 0, color_code: '#4e8e71' },
		{ grade_order: 1, color_code: '#e68362' },
		{ grade_order: 2, color_code: '#7cbacb' },
		{ grade_order: 3, color_code: '#e19c03' },
		{ grade_order: 4, color_code: '#9b3da1' },
	];

	useStyleTag(`
		:root {
			/* 클라이언트 컬러 */
			--color_main: ${color.main};
			--color_sub: ${color.sub};
			--color_support: ${color.support};
			--color_variable: var(--color_sub);
			--color_header: #fff;
			--color_text_base: #010101;

			/* 등급 컬러 */
			${gradeColors.map(grade => `--color_level${grade.grade_order + 1}: ${grade.color_code};`).join('')}

			/* 상품 비율 */
			--prod_ratio_base: 1;

			/* 높이 */
			--header_height_base: 45px;
			--header_height_main: 56px;
			--gnb_height_base: 47px;
			--toolbar_height_base: 51px;
		}
		`.replace(/\/\*(.*)\*\/|\s/g, ''),
		{ id: 'style_root' },
	);

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

	const overlayBackClass = 'S=back';
	const onBeforeLeaveOverlay = (_$el: Element) => _$el.previousElementSibling?.classList.add(overlayBackClass);
	const onEnterOverlay = (_$el: Element) => _$el.previousElementSibling?.classList.remove(overlayBackClass);

	// mons().loading.show();
	// mons().bom.alert('알럿')

	const isApp = false;
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
</style>