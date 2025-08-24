<template>
	<div
		v-if="information"
		class="m_prodetail-tab-info"
	>
		<!-- 셀러 휴무일 -->
		<div
			v-if="sellerHolidayMessage"
			class="m...info-seller-off"
		>
			<strong>배송 공지</strong>
			<p>{{ sellerHolidayMessage }}</p>
		</div>

		<!-- 상품 공통배너 -->
		<template
			v-if="information.top_banners.length > 0"
		>
			<div class="m...info-banner">
				<ul>
					<li
						v-for="topBanner, index in information.top_banners"
						:key="`top_banner_${index}`"
					>
						<!-- 에디터 등록 방식 -->
						<div
							v-if="topBanner.is_editor_use"
							class="mm_editor"
							v-html="topBanner.contents"
						></div>
						<!-- 이미지 등록 방식 -->
						<i
							v-else
							class="image_banner"
						>
							<lazyload
								tag="img"

								:src="topBanner.image_url"
							></lazyload>
						</i>
					</li>
				</ul>
			</div>
		</template>

		<div class="mm_inner">
			<!--
				<p class="text_code">
				상품번호<span>{{ goodsId }}</span>
				</p>
			-->
			<!-- 동영상 -->
			<div
				v-if="information.video_url"
				class="m...info-media"
				v-html="information.video_url"
			>
			</div>

			<!-- 상품 상세설명 및 이미지 -->
			<div class="m...info-desc">
				<p
					ref="$textZoomInfo"
					class="text_zoom"
				>
					상세정보를 확대해서 볼 수 있어요
				</p>

				<!-- 상세설명 -->
				<div
					ref="$pinchzoom"
					class="mm_pinchzoom"
					:class="{ 'S=on': isMore }"
				>
					<div
						ref="$pinchzoomContent"
						class="mm_pinchzoom-wrapper"
					>
						<!-- (D) 에디터로 등록 -->
						<div
							class="mm_editor"
							v-html="information.detail_info"
						>
						</div>
					</div>
				</div>
				<div class="mm_btn_box">
					<toggle
						class="mm_btn T=line T=primary btn_more"
						title="상세정보 펼쳐보기"
						active-title="상세정보 접어놓기"
						parent-selector=".m...info-desc"
						@toggle="onTogglePinchzoom"
					>
						<b class="mm_ir-blind">상세정보 더보기</b>
					</toggle>
				</div>
			</div>
		</div>
		<!-- 상품 공통배너 -->
		<template
			v-if="information.bottom_banners.length > 0"
		>
			<div class="m...info-banner">
				<ul>
					<li
						v-for="bottomBanner, index in information.bottom_banners"
						:key="`bottom_banner_${index}`"
					>
						<!-- 에디터 등록 방식 -->
						<div
							v-if="bottomBanner.is_editor_use"
							class="mm_editor"
							v-html="bottomBanner.contents"
						></div>
						<!-- 이미지 등록 방식 -->
						<i
							v-else
							class="image_banner"
						>
							<lazyload
								tag="img"

								:src="bottomBanner.image_url"
							></lazyload>
						</i>
					</li>
				</ul>
			</div>
		</template>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed, defineProps } from 'vue';
	import { useEventListener } from '@vueuse/core';
	import { gsap } from 'gsap';
	import { useFormatter } from '$/composables/useFormatter';
	import { useUserAgent } from '$/composables/useUserAgent';
	import Lazyload from '@/component/Lazyload.vue';
	import Toggle from '@/component/Toggle.vue';

	const props = defineProps<{
		goodsId: number,
		information: GoodsInformation
	}>();

	const { isMobileUser } = useUserAgent();
	const { date, korean } = useFormatter();
	const goodsId = computed(() => props.goodsId);
	const information = computed(() => props.information);

	const sellerHolidayMessage = computed(() => {
		if (!information.value) {
			return '';
		}

		if (information.value.seller_holiday_message) {
			return information.value.seller_holiday_message;
		}

		if (!information.value.seller_holiday) {
			return '';
		}

		return korean(`${information.value.seller_holiday.reason}(으로/로)`)
			+ ' 인해 '
			+ date(information.value.seller_holiday.start_at, 'YYYY-MM-DD')
			+ ' ~ '
			+ date(information.value.seller_holiday.end_at, 'YYYY-MM-DD')
			+ ' 주문한 상품은 '
			+ date(information.value.seller_holiday.release_at, 'YYYY-MM-DD')
			+ '부터 순차적으로 배송합니다.';
	});


	const $textZoomInfo = ref<HTMLElement|null>(null);
	const isMore = ref(false); // 상세정보 더보기 토글
	const onTogglePinchzoom = () => {

		if (!isMobileUser) {
			return;
		}

		isMore.value = !isMore.value;

		// 핀치줌 안내 텍스트 노출
		if (isMore.value && $textZoomInfo) {
			$textZoomInfo.value?.classList.add('S=on');
			gsap.to($textZoomInfo.value, { opacity: 1, duration: 0.3, ease: 'Sine.Out' });

			setTimeout(function() {

				gsap.to($textZoomInfo.value, { opacity: 0, duration: 0.2, ease: 'Sine.In', onComplete: function() { $textZoomInfo.value?.classList.remove('S=on'); } });

			}, 1500);
		}

	};

	// 핀치줌
	const pinchZoomData = ref({
		scale: 1, // ? :number - 초기 scale 값
		scaleMin: 1, // ? :number - 핀치 줌인 가능한 최소 배수
		scaleMax: 3, // ? :number - 핀치 줌인 가능한 최대 배수
		padding: { // :object - 핀치 영역 상, 하단에 fixed 요소가 겹쳐있는 경우 해당 요소의 높이값 만큼 padding 값 추가
			top: 0, // ? :number - 상단 여백
			bottom: 0, // ? :number - 하단 여백
		},
	});

	const $pinchzoom = ref<HTMLElement|null>(null);
	const $pinchzoomContent = ref<HTMLElement|null>(null);
	const $scroller = computed(() => {
		return document.querySelector('.mm_page > .mm_scroller') as HTMLElement;
	});

	const frameTop = computed(() => {
		if ($pinchzoom.value == null) { return 0; }

		return $scroller.value.scrollTop + $pinchzoom.value.getBoundingClientRect().top - $scroller.value.getBoundingClientRect().top;
	});

	const zoom = computed<{ scale: number, beforeScale: number}>(() => {
		return { scale: pinchZoomData.value.scale, beforeScale: pinchZoomData.value.scale };
	});

	let isOnZoom = false;
	let isOnDrag = false;
	let touch = {
		start: { x: 0, y: 0, distance: 0 },
		move: { x: 0, y: 0, distance: 0 },
		between: { x: 0, y: 0 }, // 두 터치점의 중간 값에 대한 x, y 좌표
	};
	let translate = {
		x: 0,
		y: 0,
		minX: 0,
		maxX: 0,
		minY: 0,
		maxY: 0,
		beforeX: 0,
		beforeY: 0,
	};

	if (isMobileUser) {
		useEventListener($pinchzoom, 'touchstart', touchStartEventHandler);
		useEventListener($pinchzoom, 'dblclick', dblclickEventHandler);
	}


	/**
	 * dblclick 이벤트 핸들러
	 *
	 * @param {MouseEvent} event
	 */
	function dblclickEventHandler(event: MouseEvent) {
		if (
			$pinchzoom.value == null
			|| $pinchzoomContent.value == null
			|| $scroller.value == null
		) {
			return;
		}

		const $target = event.target as HTMLElement;

		if (zoom.value.scale > pinchZoomData.value.scaleMin) {
			const offsetTop = frameTop.value;
			const ratio = zoom.value.scale / pinchZoomData.value.scaleMin;
			const changeScroll = (-translate.y / ratio) + offsetTop
				+ (($scroller.value.scrollTop - offsetTop) / ratio)
				- event.screenY;

			// 더블탭 동작시 현재 보고있던 영역으로 스크롤을 이동
			$scroller.value.scrollTop = changeScroll;

			zoom.value.scale = pinchZoomData.value.scaleMin;
			translate.x = -event.offsetX * (pinchZoomData.value.scaleMin - 1);
			translate.y = 0;
		}
		else {
			zoom.value.scale = pinchZoomData.value.scaleMax;
			translate.x = -event.offsetX * (pinchZoomData.value.scaleMax - 1);
			translate.y = -($target.offsetTop + event.offsetY) * (pinchZoomData.value.scaleMax - 1);
		}

		translateMinmax();

		$pinchzoomContent.value.style.transform = `translate(${translate.x}px, ${translate.y}px) scale(${zoom.value.scale}, ${zoom.value.scale})`;
	}

	/**
	 * touchStart 이벤트 핸들러
	 *
	 * @param {TouchEvent} event
	 */
	function touchStartEventHandler(event: TouchEvent) {
		if ($pinchzoom.value == null || $pinchzoomContent.value == null) {
			return;
		}

		if (!event.touches) {
			return;
		}

		if (event.touches.length === 1 && zoom.value.scale === 1) {
			return;
		}

		zoom.value.beforeScale = zoom.value.scale = Number(gsap.getProperty($pinchzoomContent.value, 'scaleX'));

		translate.beforeX = Number(gsap.getProperty($pinchzoomContent.value, 'x'));
		translate.beforeY = Number(gsap.getProperty($pinchzoomContent.value, 'y'));

		$pinchzoom.value.addEventListener('touchmove', touchMoveEventHandler);
		$pinchzoom.value.addEventListener('touchend', touchEndEventHandler);
	}

	/**
	 * touchMove 이벤트 핸들러
	 *
	 * @param {TouchEvent} event
	 */
	function touchMoveEventHandler(event: TouchEvent) {
		if (
			$pinchzoom.value == null
			|| $pinchzoomContent.value == null
			|| $scroller.value == null
		) {
			return;
		}

		const touchData = event.touches;
		const isSingleTouch = (touchData.length === 1) ? true : false;
		const isMultiTouch = (touchData.length > 1) ? true : false;

		// touchstart 시점에서는 핀치 동작인지 구분할 수 없어 touchmove 첫번째 호출 시점에 동작 구분
		if (isMultiTouch && !isOnZoom) {
			touch.start.x = touchData[0].clientX - touchData[1].clientX;
			touch.start.y = touchData[0].clientY - touchData[1]?.clientY;
			touch.start.distance = Math.sqrt(Math.pow(touch.start.x, 2) + Math.pow(touch.start.y, 2));

			// event.touches 좌표값은 화면 기준이기 때문에 mm_pinchzoom 영역이 디바이스 너비보다 작은경우
			// 터치의 좌표값을 보정하기 위해 $pinchzoom.value.getBoundingClientRect()를 이용하여, 터치 위치를 보정
			touch.between.x = ((touchData[0].clientX + touchData[1].clientX) / 2)
				- $pinchzoom.value.getBoundingClientRect().left;
			touch.between.y = ((touchData[0].clientY + touchData[1].clientY) / 2)
				- $pinchzoom.value.getBoundingClientRect().top;

			isOnZoom = true;

		}
		else if (isSingleTouch && !isOnDrag) {

			touch.start.x = touchData[0].clientX;
			touch.start.y = touchData[0].clientY;
			translateMinmax();

			isOnDrag = true;
		}

		if (isOnDrag || isOnZoom) {
			event.preventDefault();
			event.stopPropagation();

			if (isOnZoom) {
				touch.move.x = touchData[0].clientX - touchData[1].clientX;
				touch.move.y = touchData[0].clientY - touchData[1].clientY;

				touch.move.distance = Math.sqrt(Math.pow(touch.move.x, 2) + Math.pow(touch.move.y, 2));

				const changScale = Number((zoom.value.beforeScale * (touch.move.distance / touch.start.distance)).toFixed(5));
				zoom.value.scale = Math.min(Math.max(changScale, pinchZoomData.value.scaleMin), pinchZoomData.value.scaleMax);

				const scaleFactor = (zoom.value.scale / zoom.value.beforeScale) - 1;

				// 두 터치 사이점과 화면 센터(x, y좌표의 0점)간의 거리 비율
				const centerRatioX = (touch.between.x - translate.beforeX) / $pinchzoom.value.offsetWidth;
				const centerRatioY = (touch.between.y - translate.beforeY) / $pinchzoom.value.offsetHeight;

				translate.x = translate.beforeX - ($pinchzoom.value.offsetWidth * scaleFactor) * centerRatioX;
				translate.y = translate.beforeY - ($pinchzoom.value.offsetHeight * scaleFactor) * centerRatioY;

				translateMinmax();
			}
			else {
				touch.move.x = touchData[0].clientX;
				touch.move.y = touchData[0].clientY;

				translate.x = translate.beforeX - (touch.start.x - touch.move.x);
				translate.y = translate.beforeY - (touch.start.y - touch.move.y);
			}

			translate.x = Math.min(Math.max(translate.x, translate.maxX), translate.minX);
			translate.y = Math.min(Math.max(translate.y, translate.maxY), translate.minY);

			gsap.set($pinchzoomContent.value, {
				scale: zoom.value.scale,
				x: translate.x,
				y: translate.y,
			});
		}
	}

	/**
	 * touchEnd 이벤트 핸들러
	 *
	 * @param {TouchEvent} event
	 */
	function touchEndEventHandler(event: TouchEvent) {
		if (
			$pinchzoom.value == null
			|| $pinchzoomContent.value == null
			|| $scroller.value == null
		) {
			return;
		}

		const touchData = event.touches;
		const isSingleTouch = (touchData.length === 1) ? true : false;

		if (isSingleTouch && isOnZoom) {
			// 핀치 동작 중간에 한손가락을 떼는 경우 드래그 이벤트 준비를 위해 현재 translate 값을 저장
			translate.beforeX = translate.x;
			translate.beforeY = translate.y;
		}

		if (zoom.value.scale <= 1) {
			// 줌 아웃 동작으로 scale이 1로 되었을때 drag 했던 Y 위치만큼 스크롤을 이동
			const changeScroll = $scroller.value.scrollTop - Number(gsap.getProperty($pinchzoomContent.value, 'y'));
			$scroller.value.scrollTop = changeScroll;

			translate.x = 0;
			translate.y = 0;
			$pinchzoomContent.value.style.transform = `translate(${translate.x}px, ${translate.y}px)`;
		}

		isOnDrag = false;
		isOnZoom = false;

		$pinchzoom.value.removeEventListener('touchmove', touchMoveEventHandler);
		$pinchzoom.value.removeEventListener('touchend', touchEndEventHandler);
	}

	/**
	 * 최대 최소 translate 계산
	 *
	 */
	function translateMinmax() {
		if (
			$pinchzoom.value == null
			|| $scroller.value == null
			|| $pinchzoomContent.value == null
		) {
			return;
		}

		// pinch-zoom 전, $pinchzoom의 실 높이, 너비
		const pinchWidth = $pinchzoom.value.offsetWidth;
		const pinchHeight = $pinchzoom.value.offsetHeight;

		// Y축 상단영역 끝까지 이동 가능한 translate
		const maxTop = $scroller.value.scrollTop
			- (frameTop.value + $pinchzoomContent.value.offsetTop)
			+ pinchZoomData.value.padding.top;
		// Y축 하단영역 끝까지 이동 가능한 translate
		const maxBottom = maxTop
			+ parent.innerHeight
			- (pinchHeight * zoom.value.scale)
			- pinchZoomData.value.padding.bottom;

		translate.maxX = pinchWidth * (1 - zoom.value.scale);
		translate.minY = Math.max(0, maxTop);
		translate.maxY = Math.min(maxBottom, pinchHeight * (1 - zoom.value.scale));
	}
</script>