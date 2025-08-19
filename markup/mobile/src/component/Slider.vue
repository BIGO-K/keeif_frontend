<template>
	<div
		ref="$ui"
		:class="`${prefix}slider`"
	>
		<div
			ref="$inner"
			:class="`${prefix}slider-inner`"
		>
			<ul
				ref="$list"
				:class="`${prefix}slider-list`"
			>
				<li
					v-for="(item, _i) in datas"
					:key="JSON.stringify(item)"
					:ref="$el => $items[_i] = $el as HTMLElement"
					:class="[`${prefix}slider-item`, { [prop.cloneClass]: prop.isLoop && Math.floor(_i / realTotal) === 1 }]"
					:tabindex="prop.isLoop && _i >= realTotal ? -1 : undefined"
					:data-slider-index="`${prop.isLoop ? _i % realTotal : _i}`"
				>
					<template v-if="prop.groupSize < 2">
						<slot
							:item="(item as T)"
							:index="_i"
						></slot>
					</template>
					<template v-else>
						<div :class="`${prefix}slider-item-group`">
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
		<slot name="afterInner"></slot>

		<div
			v-if="prop.usePagination && !isShort"
			:class="`${prefix}slider-pagination`"
		>
			<slot
				name="pagination"
				:active-index="activeIndex"
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
							class="btn_slider-page"
							:class="{ [prop.activeClass]: _i - 1 === realIndex }"
							@click="change(_i, _i > activeIndex ? 'next' : 'prev')"
						>
							<b class="mm_ir-blind">{{ _i }}</b>
						</button>
					</li>
				</ol>
			</slot>
		</div>

		<div
			v-if="prop.useControl && !isShort"
			:class="`${prefix}slider-control`"
		>
			<button
				ref="$btnPrev"
				type="button"
				class="btn_slider-prev"
				:disabled="!prop.isLoop && $items[0].classList.contains(prop.activeClass)"
				@click="change(realIndex === 0 ? realTotal - 1 : realIndex - 1, 'prev');"
			>
				<i
					class="ico_control-prev"
					:class="prop.controlIconClass"
				></i><b class="mm_ir-blind">이전</b>
			</button>
			<button
				ref="$btnNext"
				type="button"
				class="btn_slider-next"
				:disabled="!prop.isLoop && $items[$items.length - 1].classList.contains(prop.activeClass)"
				@click="change(realIndex === realTotal - 1 ? 0 : realIndex + 1, 'next');"
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
		/** @prop { number } `default: 0` - 자동 롤링 간격(초), 값이 0이면 수동 */
		autoDelay?: number;
		/** @prop { number } `default: 0.2` - 민감도, 짧게 움직였을 때 반응할 시간(초) */
		sensitiveTime?: number;
		/** @prop { string } `default: '10px 1px'` - intersection observer의 rootMargin 값 */
		rootMargin?: string;
		/** @prop { boolean } `default: false` - 슬라이더 반복 */
		isLoop?: boolean;
		/** @prop { string } `default: 'S=on'` */
		activeClass?: string;
		/** @prop { string } `default: 'S=clone'` - 복제 요소 클래스 */
		cloneClass?: string;
		/** @prop { string } `default: 'S=intersecting'` - 영역 내 intersecting 된 요소 클래스 */
		intersectingClass?: string;
		/** @prop { boolean } `default: false` - 내부 페이지네이션 사용 */
		usePagination?: boolean;
		/** @prop { boolean } `default: false` - 내부 컨트롤 버튼 사용 */
		useControl?: boolean;
		/** @prop { string | null } `default: null` - ico_control-prev/next 추가 클래스 */
		controlIconClass?: string | null;
	}>(), {
		groupSize: 1,
		activeIndex: 0,
		time: 0.2,
		autoDelay: 0,
		sensitiveTime: 0.2,
		rootMargin: '10px 1px',
		isLoop: false,
		activeClass: 'S=on',
		cloneClass: 'S=clone',
		intersectingClass: 'S=intersecting',
		usePagination: false,
		useControl: false,
		controlIconClass: null,
	});

	const emit = defineEmits<{
		'ready': [$ui: HTMLElement];
		'update': [$ui: HTMLElement];
		'start': [$ui: HTMLElement];
		'complete': [$ui: HTMLElement];
		'intersecting': [$ui: HTMLElement];
	}>();

	const $ui = ref<HTMLElement>();
	const $inner = ref<HTMLElement>();
	const $list = ref<HTMLElement>();
	const $items = ref<HTMLElement[]>([]);
	const $activeItem = ref<HTMLElement>();

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
		return (prop.isLoop) ? returnDatas.concat(returnDatas, returnDatas) : returnDatas;
	});

	const isBlock = computed(() => $ui.value?.closest('[data-mui]') != null);// XXX prop으로 포함하여 처리?
	const prefix = computed(() => isBlock.value ? 'mui_' : 'mm_');

	const activeIndex = ref(prop.activeIndex);
	const realTotal = computed(() => prop.groupSize > 1 ? Math.ceil(prop.items.length / prop.groupSize) : prop.items.length);
	const realIndex = computed(() => parseFloat($activeItem.value?.dataset.sliderIndex ?? ''));
	const updateValue = ref(0);
	const direction = ref<'next' | 'prev'>('next');
	const isDirection = ref<boolean | null>(null);
	const innerPadding = computed(() => {
		const style = $inner.value != null ? getComputedStyle($inner.value) : { paddingLeft: '0', paddingRight: '0' };

		return {
			left: parseFloat(style.paddingLeft),
			right: parseFloat(style.paddingRight),
		};
	});
	// const isTouch = ref(false);// 페이지네이션이 드래그 중 변경되는 것을 방지할 때 사용
	const isShort = ref(false);

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

	// 모션 업데이트
	const changeUpdate = () => {
		$list.value!.style.transform = `translateX(${-updateValue.value}px)`;
		emit('update', $ui.value!);
	};

	// 변경
	const change = (_index: number, _direction?: typeof direction.value, _isDrag?: boolean) => {
		if (_index === activeIndex.value || gsap.isTweening(updateValue)) return;

		direction.value = _direction == null
			? ((): typeof direction.value => {
				if (_index > activeIndex.value) return (_index - activeIndex.value < activeIndex.value + realTotal.value - _index) ? 'next' : 'prev';
				else return (_index - activeIndex.value < _index + realTotal.value - activeIndex.value) ? 'prev' : 'next';
			})()
			: _direction;

		const innerRect = $inner.value!.getBoundingClientRect();
		let value = 0;

		// 직접이동(빠른이동)
		if (Number.isFinite(_index)) {
			const $filteredItems = direction.value === 'next' ? $items.value.slice(activeIndex.value) : $items.value.slice(0, activeIndex.value).reverse();
			const $targetItem = $filteredItems.find($el => $el.dataset.sliderIndex === `${_index}`);
			if ($targetItem == null) return;

			const activeRect = $activeItem.value?.getBoundingClientRect();
			if (activeRect != null) value = $targetItem.getBoundingClientRect().left - activeRect.left - (innerRect.left + innerPadding.value.left - activeRect.left);
		}
		// 가까운쪽으로 이동(드래그)
		else {
			let $firstItem = $items.value.find($el => $el.classList.contains(prop.intersectingClass));
			if ($firstItem == null) $firstItem = direction.value === 'next' ? $items.value.at(-1)! : $items.value[0];
			const x = innerRect.left + innerPadding.value.left - $firstItem.getBoundingClientRect().left;

			value = (x > $firstItem.offsetWidth / 2) ? $firstItem.offsetWidth - x : -x;
		}

		value = updateValue.value + value;
		if (!prop.isLoop) value = Math.min(Math.max(0, value), $list.value!.offsetWidth - $inner.value!.offsetWidth + innerPadding.value.left + innerPadding.value.right);

		gsap.to(updateValue, {
			value: value,
			duration: prop.time,
			ease: _isDrag ? 'cubid.out' : 'sine.inOut',
			onUpdate: () => changeUpdate(),
			onStart: () => {
				stop();
				emit('start', $ui.value!);
			},
			onComplete: () => {
				start();
				emit('complete', $ui.value!);
			},
		});
	};

	// 정렬
	const reposition = () => {
		if (!prop.isLoop) return;

		const $onItems = $items.value.filter($el => $el.classList.contains(prop.activeClass));
		if ($onItems.length < 1) return;

		const beforeTotal = $items.value.findIndex($el => $el === $onItems[0]);
		const afterTotal = datas.value.length - $onItems.length - beforeTotal;
		const appendTotal = Math.floor(Math.abs(beforeTotal - afterTotal) / 2);

		let $item = $list.value!.children[0];
		let _margin = 0;
		let _count = 0;

		while (_count < appendTotal) {
			if (beforeTotal > afterTotal) {
				$item = $list.value!.children[0];
				_margin += ($item as HTMLElement).offsetWidth;
				$item.parentElement!.append($item);
			}
			else {
				$item = $list.value!.children[datas.value.length - 1];
				_margin -= ($item as HTMLElement).offsetWidth;
				$item.parentElement!.prepend($item);
			}

			// XXX 이전, 다음 요소 미리 로드 >> 레이지를 전부 force로 처리?
			// Lazyload.force(Doms.find(`[data-lazyload]`, $item));
			_count++;
		}
		$items.value = Object.values($list.value!.children) as HTMLElement[];

		$list.value!.style.marginLeft = `${parseFloat($list.value!.style.marginLeft) + _margin}px`;
	};

	// 실행
	watch([datas, $ui], () => {
		if ($ui.value == null) return;

		// 내부 스크롤 요소에서는 드래그 방지(단, 페이지로 사용하기 위해 item 자식 스크롤 요소는 제외)
		// XXX iframe 사용하지 않아 필요없는 기능으로 삭제(검색 캐러셀에서 scroll체크하면 이동 안됨)
		// 필요 시 재확인

		emit('ready', $ui.value);
	});

	// 반응형 리셋
	watch($items, () => {
		// 리스트의 width가 영역보다 작음
		isShort.value = $list.value!.offsetWidth <= $inner.value!.offsetWidth - innerPadding.value.left - innerPadding.value.right + 0.5;// 여백으로 인한 소수점 처리(+0.5)
		if (isShort.value) {
			for (const $el of $items.value) $el.classList.add(prop.intersectingClass, prop.activeClass);
			$inner.value!.style.textAlign = 'center';

			return;
		}

		// 기본위치 중앙으로 이동
		if (prop.isLoop) $list.value!.style.marginLeft = `${-$list.value!.offsetWidth}px`;

		// 초기위치
		updateValue.value = $items.value[prop.isLoop ? activeIndex.value + realTotal.value : activeIndex.value].getBoundingClientRect().left - $inner.value!.getBoundingClientRect().left - innerPadding.value.left;
		if (!prop.isLoop) updateValue.value = Math.min(Math.max(0, updateValue.value), $list.value!.offsetWidth - $inner.value!.offsetWidth + innerPadding.value.left + innerPadding.value.right);
		$list.value!.style.transform = `translateX(${-updateValue.value}px)`;
	}, {
		deep: true,
	});

	// intersection
	useIntersectionObserver($items, _entries => {
		for (const entry of _entries) {
			const target = entry.target;
			if (entry.isIntersecting) {
				target.classList.add(prop.intersectingClass);
				if (entry.intersectionRatio === 1) {
					const oldIndex = activeIndex.value;

					target.classList.add(prop.activeClass);
					$activeItem.value = target as HTMLElement;
					activeIndex.value = $items.value.findIndex($el => $el === $activeItem.value);
					if (oldIndex === activeIndex.value) continue;

					reposition();
					emit('intersecting', $ui.value!);
				}
				else target.classList.remove(prop.activeClass);
			}
			else target.classList.remove(prop.intersectingClass, prop.activeClass);
		}
	}, {
		root: $inner,
		rootMargin: prop.rootMargin,
		threshold: [0, 1],
	});

	// 드래그
	useEventListener($inner, isMobile ? 'touchstart' : 'mousedown', _e => {
		isDirection.value = null;
		if (gsap.isTweening(updateValue)) return;// 모션 중에는 리턴
		if (_e instanceof MouseEvent) _e.preventDefault();

		const startTime = window.performance.now();
		const startTouch: Record<'screenX' | 'screenY', number> = _e instanceof MouseEvent ? { screenX: _e.clientX, screenY: _e.clientY } : _e.touches[0];
		const startValue = updateValue.value ?? 0;
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
				if (_e.type !== 'touchmove') _e.preventDefault();

				updateValue.value = startTouch.screenX - touch.screenX + startValue;
				const moveDirection: typeof direction.value = updateValue.value > startValue ? 'next' : 'prev';

				switch (_e.type) {
					case 'touchmove':
					case 'mousemove':
						// isTouch.value = true;
						changeUpdate();
						break;
					case 'touchend':
					case 'mouseup':
						// isTouch.value = false;
						const touchTime = (window.performance.now() - startTime) / 1000;// 빠른 드래그 확인
						let index = NaN;
						if (touchCount > 1 && touchTime < prop.sensitiveTime) {
							const $targetItem = moveDirection === 'next' ? $activeItem.value?.nextElementSibling : $activeItem.value?.previousElementSibling;
							if ($targetItem != null) index = parseFloat(($targetItem as HTMLElement).dataset.sliderIndex!);
						}
						change(index, moveDirection, true);
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
		if (isDirection.value) {
			_e.preventDefault();
			_e.stopPropagation();
		}
	}, {
		capture: true,
	});

	// 자동롤링
	const { start, stop } = useTimeoutFn(() => {
		if (autoDelay.value <= 0 || !isShort.value) return;

		let playDirection: typeof direction.value = 'next';
		let index = realIndex.value + 1;
		if (index > realTotal.value - 1 || $items.value.at(-1)!.classList.contains(prop.activeClass)) {
			index = 0;
			if (prop.isLoop) playDirection = 'prev';
		}

		change(index, playDirection);
	}, autoDelay.value * 1000);

	useEventListener($ui, isMobile ? ['touchstart', 'touchend'] : ['mouseover', 'mouseleave'], _e => {
		if (autoDelay.value <= 0 || !isShort.value) return;

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
		if (autoDelay.value <= 0 || !isShort.value) return;

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
</script>