<template>
	<div
		ref="$ui"
		:class="`${prefix}carousel`"
	>
		<div
			ref="$inner"
			:class="`${prefix}carousel-inner`"
		>
			<ul
				ref="$list"
				:class="`${prefix}carousel-list`"
			>
				<li
					v-for="(item, _i) in datas"
					:key="`${_i}_carousel`"
					:ref="$el => $items[_i] = $el as HTMLElement"
					:class="[`${prefix}carousel-item`, { [prop.cloneClass]: useClone && _i >= realTotal }]"
					:tabindex="useClone && _i >= realTotal ? -1 : undefined"
					:data-carousel-index="`${useClone ? _i % realTotal : _i}`"
				>
					<template v-if="prop.groupSize < 2">
						<slot
							:item="(item as T)"
							:index="_i"
						></slot>
					</template>
					<template v-else>
						<div :class="`${prefix}carousel-item-group`">
							<template
								v-for="(entry, _k) in (item as T[])"
								:key="_k"
							>
								<slot
									:item="entry"
									:index="_i * prop.groupSize + _k"
								></slot>
							</template>
						</div>
					</template>
				</li>
			</ul>
		</div>
		<div
			v-if="prop.useCount && realTotal > 1"
			:class="`${prefix}carousel-count`"
		>
			<slot
				name="count"
				:index="formatCountPad(realIndex + 1)"
				:total="formatCountPad(realTotal)"
			>
				<strong class="text_carousel-index">
					{{ formatCountPad(realIndex + 1) }}
				</strong><i>/</i><span class="text_carousel-total">
					{{ formatCountPad(realTotal) }}
				</span>
			</slot>
		</div>
		<slot name="afterInner"></slot>

		<div
			v-if="prop.usePagination && realTotal > 1"
			:class="`${prefix}carousel-pagination`"
		>
			<slot
				name="pagination"
				:active-index="activeIndex"
				:real-index="realIndex"
				:change="change"
			>
				<ol>
					<li
						v-for="_i in realTotal"
						:key="_i"
					>
						<button
							:ref="$el => $pages[_i - 1] = $el as HTMLElement"
							type="button"
							class="btn_carousel-page"
							:class="{ [prop.activeClass]: _i - 1 === realIndex }"
							@click="change((_i - 1), (_i - 1) > activeIndex ? 'next' : 'prev')"
						>
							<b class="mm_ir-blind">{{ _i }}</b>
						</button>
					</li>
				</ol>
			</slot>
		</div>

		<div
			v-if="prop.useControl && realTotal > 1"
			:class="`${prefix}carousel-control`"
		>
			<button
				ref="$btnPrev"
				type="button"
				class="btn_carousel-prev"
				@click="change(activeIndex === 0 ? realTotal - 1 : activeIndex - 1, 'prev')"
			>
				<i
					class="ico_control-prev"
					:class="prop.controlIconClass"
				></i><b class="mm_ir-blind">이전</b>
			</button>
			<button
				ref="$btnNext"
				type="button"
				class="btn_carousel-next"
				@click="change(activeIndex === realTotal - 1 ? 0 : activeIndex + 1, 'next')"
			>
				<i
					class="ico_control-next"
					:class="prop.controlIconClass"
				></i><b class="mm_ir-blind">다음</b>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts" generic="T extends {}">
	import { computed, ref, watch, toRefs } from 'vue';
	import { useEventListener, useIntersectionObserver, useTimeoutFn } from '@vueuse/core';
	import { gsap } from 'gsap';

	// isErrorRemove - 이미지가 없을 때 삭제 처리하는 부분은 lazyload @error emit으로 items를 객체를 삭제하면 반응형으로 적용
	const prop = withDefaults(defineProps<{
		/** @prop { T[] } @requires - 슬라이더 내용 slot scope을 위한 배열값   */
		items: T[];
		/** @prop { number } `default: 1` - 1보다 크면 slot scope을 개수대로 묶어 배열로 전달 */
		groupSize?: number;
		/** @prop { number } `default: 0` - 초기값 */
		activeIndex?: number;
		/** @prop { number } `default: 0.2` - 모션 시간(초) */
		time?: number;
		/** @prop { 'slide' | 'fade' | 'cover' | 'strip' | 'none' } `default: 'slide'` - 전환 효과 */
		effect?: 'slide' | 'fade' | 'cover' | 'strip' | 'none';
		/** @prop { number } `default: 0` - 자동 롤링 간격(초), 값이 0이면 수동 */
		autoDelay?: number;
		/** @prop { number } `default: 0.2` - 민감도, 짧게 움직였을 때 반응할 시간(초) */
		sensitiveTime?: number;
		/** @prop { boolean } `default: false` - 높이 자동 */
		isAutoHeight?: boolean;
		/** @prop { boolean } `default: false` - 좌/우 요소 같이 이동 */
		isMoreSide?: boolean;
		/** @prop { string } `default: 'S=on'` */
		activeClass?: string;
		/** @prop { string } `default: 'S=clone'` - 복제 요소 클래스 */
		cloneClass?: string;
		/** @prop { boolean } `default: false` - 내부 페이지네이션 사용 */
		usePagination?: boolean;
		/** @prop { boolean } `default: false` - 내부 컨트롤 버튼 사용 */
		useControl?: boolean;
		/** @prop { string | null } `default: null` - ico_control-prev/next 추가 클래스 */
		controlIconClass?: string | null;
		/** @prop { boolean } `default: false` - 내부 카운터 사용 */
		useCount?: boolean;
		/** @prop { string } `default: '0'` - 카운터의 자릿수가 부족할 때 표시할 내용 */
		countPad?: string;
	}>(), {
		groupSize: 1,
		activeIndex: 0,
		time: 0.2,
		effect: 'slide',
		autoDelay: 0,
		sensitiveTime: 0.2,
		isAutoHeight: false,
		isMoreSide: false,
		activeClass: 'S=on',
		cloneClass: 'S=clone',
		usePagination: false,
		useControl: false,
		controlIconClass: null,
		useCount: false,
		countPad: '0',
	});

	type EmitBaseParameter = {
		activeIndex: number;
		realIndex: number;
		isBack?: boolean;
	}
	type EmitReadyParameter = Omit<EmitBaseParameter, 'isBack'>;

	const emit = defineEmits<{
		'ready': [param: EmitReadyParameter, $ui: HTMLElement];
		'update': [$ui: HTMLElement];
		'start': [param: EmitBaseParameter, $ui: HTMLElement];
		'complete': [param: EmitBaseParameter, $ui: HTMLElement];
	}>();

	const $ui = ref<HTMLElement>();
	const $inner = ref<HTMLElement>();
	const $list = ref<HTMLElement>();
	const $items = ref<HTMLElement[]>([]);

	// 외부 제어가 필요할 경우 v-model:active-index, emit 사용
	const $pages = ref<HTMLElement[]>([]);
	const $btnPrev = ref<HTMLElement>();
	const $btnNext = ref<HTMLElement>();

	const { autoDelay } = toRefs(prop);

	const datas = computed(() => {
		const returnDatas = (prop.groupSize < 2)
			? prop.items
			: prop.items.reduce((_results: T[][], _item, _index) => {
				if (_index % prop.groupSize === 0) _results.push([]);
				_results[_results.length - 1].push(_item);

				return _results;
			}, []);

		// 부족한 개수 복제
		return (useClone.value) ? returnDatas.concat(returnDatas) : returnDatas;
	});
	const useClone = computed(() => realTotal.value === 2 || (prop.effect === 'slide' && realTotal.value === 3));

	const isBlock = computed(() => $ui.value?.closest('[data-mui]') != null);// XXX prop으로 포함하여 처리?
	const prefix = computed(() => isBlock.value ? 'mui_' : 'mm_');

	const activeIndex = ref(prop.activeIndex);
	const realTotal = computed(() => prop.groupSize > 1 ? Math.ceil(prop.items.length / prop.groupSize) : prop.items.length);
	const realIndex = computed(() => parseFloat($items.value[activeIndex.value]?.dataset.carouselIndex ?? ''));
	const oldIndex = ref(prop.activeIndex);
	const updateValue = ref(0);
	const direction = ref<'next' | 'prev'>('next');
	const isDirection = ref<boolean | null>(null);
	// const isTouch = ref(false);// 페이지네이션이 드래그 중 변경되는 것을 방지할 때 사용

	// XXX isMobile 공통 함수 또는 config store로 변경
	const isMobile = ((_type?: string): boolean => {
		const typeMap = {
			iphone: 'iphone',
			ipad: 'ipad',
			ipod: 'ipod',
			get ios() { return `${[this.iphone, this.ipad, this.ipod].join('|')}`; },
			android: 'android',
			blackberry: 'blackberry|bb10|playbook',
			window: 'iemobile|windows phone|windows mobile',
			opera: 'opera mini',
			// 앱에 userAgent 코드 추가 필요
			app_kitkat: 'app_kitkat',
			app_first: 'app_first', // 앱 최초실행
			app_ios: 'app_ios',
			app_android: 'app_android',
			get app() { return `${[this.app_ios, this.app_android].join('|')}`; },
		};
		const targetType = _type == null ? `${[typeMap.ios, typeMap.android, typeMap.blackberry, typeMap.window, typeMap.opera].join(' | ')}|webos|bada|zunewp7|nokia` : _type in typeMap ? typeMap[_type as keyof typeof typeMap] : _type;

		return new RegExp(targetType, 'i').test(navigator.userAgent);
	})();

	// 카운터 숫자에 패드 적용
	const formatCountPad = (_value: number) => `${_value}`.padStart(prop.countPad.length, prop.countPad);

	// 노출
	const visibility = (_$el: HTMLElement, _isShow: boolean) => {
		_$el.style.visibility = _isShow ? '' : 'hidden';
		_$el.style.pointerEvents = _isShow ? '' : 'none';
	};

	// 모션 업데이트
	const changeUpdateEffectMap = {
		slide: (_$els: HTMLElement[], _isNext: boolean, _index: number, _beforeIndex: number) => {
			const _value = -updateValue.value * 100;
			_$els[0].style.transform = `translateX(${_value}%)`;
			_$els[1].style.zIndex = '2';
			_$els[1].style.transform = `translateX(${_value + (_isNext ? 100 : -100)}%)`;

			if (datas.value.length > 2) {
				const $side = $items.value.at(_isNext ? _beforeIndex - 1 : _beforeIndex + 1 - datas.value.length);
				if ($side != null) {
					$side.style.zIndex = '2';
					$side.style.transform = `translateX(${_value + (_isNext ? -100 : 100)}%)`;
				}

				if (prop.isMoreSide) {
					const $more = $items.value.at(_isNext ? _index + 1 - datas.value.length : _index - 1);
					if ($more != null) {
						visibility($more, true);
						$more.style.transform = `translateX(${_value + (_isNext ? 200 : -200)}%)`;
					}
				}
			}
		},
		fade: (_$els: HTMLElement[], _isNext: boolean) => {
			_$els[0].style.opacity = '1';
			_$els[1].style.zIndex = '2';
			_$els[1].style.opacity = `${updateValue.value + (_isNext ? 0 : 1)}`;
		},
		cover: (_$els: HTMLElement[], _isNext: boolean, _index: number) => {
			_$els[0].style.transform = 'translateX(0%)';
			_$els[1].style.zIndex = '2';
			_$els[1].style.transform = `translateX(${-updateValue.value * 100 + (_isNext ? 100 : 0)}%)`;

			if (_isNext && prop.isMoreSide) {
				const $more = $items.value.at(_index + 1 - datas.value.length);
				if ($more != null) visibility($more, true);
			}
		},
		strip: (_$els: HTMLElement[], _isNext: boolean) => {
			_$els[0].style.zIndex = '2';
			_$els[0].style.transform = `translateX(${-updateValue.value * 100 - (_isNext ? 0 : 100)}%)`;
			_$els[1].style.transform = 'translateX(0%)';
		},
		// 모션 없음
		none: () => {},
	};
	const changeUpdate = (_index: number, _beforeIndex: number) => {
		const isNext = direction.value === 'next';
		const $item1 = $items.value[(prop.effect === 'slide' || isNext) ? _beforeIndex : _index];
		const $item2 = $items.value[(prop.effect === 'slide' || isNext) ? _index : _beforeIndex];
		if ($item1 == null) return;

		for (const $el of $items.value) $el.style.zIndex = '';
		visibility($item1, true);
		visibility($item2, true);

		changeUpdateEffectMap[prop.effect]([$item1, $item2], isNext, _index, _beforeIndex);

		emit('update', $ui.value!);
	};

	// 변경
	const change = (_index: number, _direction?: typeof direction.value, _isBack?: boolean) => {
		if (_index === activeIndex.value || gsap.isTweening(updateValue)) return;// _index가 같거나 모션 중에는 리턴

		direction.value = (_direction != null) ? _direction : (activeIndex.value > oldIndex.value) ? 'next' : 'prev';
		if (Math.abs(updateValue.value) === 1) updateValue.value = 0;// 드래그가 아닐 때는 초기화 후 변경

		gsap.to(updateValue, {
			value: _isBack ? 0 : direction.value === 'next' ? 1 : -1,
			duration: prop.time,
			ease: (typeof _isBack === 'boolean') ? 'cubic.out' : (prop.effect === 'fade') ? 'sine.out' : 'sine.inOut',
			onUpdate: () => {
				const params: Parameters<typeof changeUpdate> = _isBack ? [_index, activeIndex.value] : [activeIndex.value, oldIndex.value];
				changeUpdate(...params);
			},
			onStart: () => {
				if ($items.value[0] == null) return;

				if (!_isBack) {
					oldIndex.value = activeIndex.value;
					activeIndex.value = _index;

					for (const [_i, $el] of $items.value.entries()) {
						if (_i !== oldIndex.value && _i !== activeIndex.value) visibility($el, false);
					}
					visibility($items.value[activeIndex.value], true);

					resize();
				}
				stop();
				emit('start', {
					activeIndex: activeIndex.value,
					realIndex: realIndex.value,
					isBack: _isBack,
				}, $ui.value!);
			},
			onComplete: () => {
				reposition();
				start();
				emit('complete', {
					activeIndex: activeIndex.value,
					realIndex: realIndex.value,
					isBack: _isBack,
				}, $ui.value!);
			},
		});
	};

	// 리사이즈
	let resizeRepeat = 0;// 무한 방지
	const resize = (_isReset?: boolean) => {
		if (!prop.isAutoHeight) return;

		const $activeItem = $items.value[activeIndex.value];
		if (resizeRepeat < 10 && $activeItem.offsetHeight <= parseFloat(getComputedStyle($activeItem).lineHeight)) {
			resizeRepeat++;
			setTimeout(resize, 1);

			return;
		}
		resizeRepeat = 0;

		gsap.to($list.value!, {
			height: $activeItem.offsetHeight,
			duration: _isReset ? 0 : prop.time,
			ease: 'cubic.out',
		});
	};

	// 정렬
	const repositionEffectMap = {
		slide: (_$el: HTMLElement, _index: number, _total: number) => {
			_$el.style.transform = `translateX(${_index === 0 ? 0 : _index === 1 ? - 100 : 100}%)`;
			if (_index < 2 || _index === _total) visibility(_$el, true);
		},
		fade: (_$el: HTMLElement, _index: number, _total: number) => {
			_$el.style.zIndex = '';
			_$el.style.opacity = `${_index === 0 ? 1 : 0}`;
			if (_index < 2 || _index === _total) visibility(_$el, true);
		},
		cover: (_$el: HTMLElement, _index: number, _total: number) => {
			_$el.style.transform = `translateX(${_index === 0 ? 0 : 100}%)`;
			if (_index === 0 || _index === _total) visibility(_$el, true);
		},
		strip: (_$el: HTMLElement, _index: number) => {
			_$el.style.transform = `translateX(${_index === 0 ? 0 : -100}%)`;
			if (_index < 2) visibility(_$el, true);
		},
		// 모션 없음
		none: () => {},
	};
	const reposition = () => {
		for (const $el of $items.value) {
			if ($el) {
				$el.classList.remove(prop.activeClass);
				visibility($el, false);
			}

		}

		for (let _i = 0; _i < datas.value.length; _i++) {
			// 0 현재, 1 이전, length - 1 다음
			const $el = $items.value.at(activeIndex.value - _i);
			if ($el == null) continue;

			if (_i === 0) $el.classList.add(prop.activeClass);
			repositionEffectMap[prop.effect]($el, _i, datas.value.length - 1);
			// XXX 이전, 다음 이미 로드 >> force 적용 예정으로 제거
		}
	};

	// 실행
	watch([datas, $ui], () => {
		if ($ui.value == null) return;

		// 내부 스크롤 요소에서는 드래그 방지(단, 페이지로 사용하기 위해 item 자식 스크롤 요소는 제외)
		// XXX iframe 사용하지 않아 필요없는 기능으로 삭제(검색 캐러셀에서 scroll체크하면 이동 안됨)
		// 필요 시 재확인

		emit('ready', {
			activeIndex: activeIndex.value,
			realIndex: realIndex.value,
		}, $ui.value);
	});

	// 반응형 리셋
	watch($items, () => {
		reposition();
		resize(true);
	}, {
		deep: true,
		flush: 'post',
	});

	watch($list, () => {
		reposition();
		resize(true);
	}, {
		deep: true,
		flush: 'post',
	});

	// 드래그
	useEventListener($inner, isMobile ? 'touchstart' : 'mousedown', _e => {
		if (realTotal.value < 2) return;// 1개일 때 사용안함

		isDirection.value = null;
		if (gsap.isTweening(updateValue)) return;// 모션 중에는 리턴
		if (_e instanceof MouseEvent) _e.preventDefault();

		const startTime = window.performance.now();
		const startTouch: Record<'screenX' | 'screenY', number> = _e instanceof MouseEvent ? { screenX: _e.clientX, screenY: _e.clientY } : _e.touches[0];
		let touchCount = 0;// 터치 이벤트 감도(순간 터치 시 이동 방지)

		const touchEventOff = useEventListener(document, isMobile ? ['touchmove', 'touchend'] : ['mousemove', 'mouseup'], _e => {
			if (_e instanceof MouseEvent) _e.preventDefault();

			const touch: typeof startTouch = _e instanceof MouseEvent ? { screenX: _e.clientX, screenY: _e.clientY } : _e.type === 'touchend' ? _e.changedTouches[0] : _e.touches[0];

			if (isDirection.value == null) {
				const x = Math.abs(touch.screenX - startTouch.screenX);
				const y = Math.abs(touch.screenY - startTouch.screenY);
				const limit = 1.6;

				if (x / y > limit) {
					if (_e.cancelable) _e.preventDefault();
					isDirection.value = true;
				}
				else touchEventOff();
			}
			else if (isDirection.value) {
				if (_e.cancelable) _e.preventDefault();

				updateValue.value = (startTouch.screenX - touch.screenX) / $inner.value!.offsetWidth;

				let index = updateValue.value > 0 ? activeIndex.value + 1 : activeIndex.value - 1;
				direction.value = index > activeIndex.value ? 'next' : 'prev';
				index = index < 0 ? datas.value.length - 1 : index > datas.value.length - 1 ? 0 : index;

				switch (_e.type) {
					case 'touchmove':
					case 'mousemove':
						changeUpdate(index, activeIndex.value);
						break;
					case 'touchend':
					case 'mouseup':
						const touchTime = (window.performance.now() - startTime) / 1000;// 빠른 드래그 확인
						const threshold = (touchCount > 1 && touchTime < prop.sensitiveTime) ? 0.005 : 0.5;// 화면의 0.5% : 50%
						change(index, direction.value, Math.abs(updateValue.value) < threshold);
						break;
				}

				touchCount++;
			}

			if (['touchend', 'mouseup'].includes(_e.type)) touchEventOff();
		}, {
			passive: false,
		});
	}, {
		passive: isMobile,
	});

	// 이동 중 클릭 이벤트 실행 방지
	useEventListener($inner, 'click', _e => {
		if (realTotal.value > 1 && isDirection.value) {
			_e.preventDefault();
			_e.stopPropagation();
		}
	}, {
		capture: true,
	});

	// 자동롤링
	const { start, stop } = useTimeoutFn(() => {
		if (autoDelay.value <= 0 || realTotal.value < 2) return;

		let index = activeIndex.value + 1;
		if (index > datas.value.length - 1) index = 0;

		change(index, 'next');
	}, autoDelay.value * 1000);

	useEventListener($ui, isMobile ? ['touchstart', 'touchend'] : ['mouseover', 'mouseleave'], _e => {
		if (autoDelay.value <= 0 || realTotal.value < 2) return;

		switch (_e.type) {
			case 'touchstart':
			case 'mouseover':
				stop();
				break;
			case 'touchend':
			case 'mouseleave':
				start();
				break;
		}
	}, {
		passive: true,
	});

	// 자동롤링 노출제어
	useIntersectionObserver($ui, _entries => {
		if (autoDelay.value <= 0 || realTotal.value < 2) return;

		for (const entry of _entries) {
			if (entry.isIntersecting) start();
			else stop();
		}
	}, {
		threshold: [0, 1],
	});

	// 자동롤링 외부제어
	watch(autoDelay, _value => {
		if (_value > 0) start();
		else stop();
	});

	defineExpose({ change });
</script>