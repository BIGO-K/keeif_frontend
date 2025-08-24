<template>
	<component
		:is="componentTag"
		ref="$ui"
		data-lazyload
		:class="componentClasses"
		v-bind="componentAttr"
	></component>
</template>

<script setup lang="ts">
	import { ref, watch, computed } from 'vue';
	import { useEventListener, useIntersectionObserver } from '@vueuse/core';

	interface LazyloadProp {
		/** @prop { string } `default: null` - 이미지 경로 */
		src?: string | null;
		/** @prop `default: null` - src가 없을 때 추가로 불러올 이미지 경로 */
		src2?: string | null;
		/** @prop `default: i` - 생성할 태그로 i는 background로 적용 */
		tag?: 'i' | 'img';
		/** @prop `default: null` - tag가 img 일 때 적용되는 alt로 error 대응을 위해 prop에 추가 */
		alt?: string | null;
		/** @prop `defualt: 0px 0px 0px 0px` - intersection observer 영역의 rootMargin */
		rootMargin?: string;
		/** @prop `default: true` - 오류 이미지 노출 */
		isErrorImage?: boolean;
		/** @prop `default: false` - 로드 완료 시 비율에 따라 클래스 추가(landscape, portrait, square) */
		isRatio?: boolean;
		/** @prop `default: false` - 로드 업데이트에서 제외 */
		isPass?: boolean;
		/** @prop `default: false` - isIntersecting, isPass를 무시하고 강제 로드(프리로드) */
		isForce?: boolean;
	}

	const prop = withDefaults(defineProps<LazyloadProp>(),
		{
			src: null,
			src2: null,
			tag: 'i',
			alt: null,
			rootMargin: '0px 0px 0px 0px',
			isErrorImage: true,
			isRatio: false,
			isPass: false,
			isForce: false,
		},
	);

	const emit = defineEmits<{
		'before': [$ui: HTMLElement];
		'complete': [natural: Record<'width' | 'height', number>, $ui: HTMLElement];
		'error': [$ui: HTMLElement];
	}>();

	const loadingClass = 'S=loading';
	const completeClass = 'S=complete';
	const errorClass = 'S=error';

	const componentTag = ref<typeof prop.tag>(prop.tag);
	const componentClasses = computed(() => {
		const classes = [];
		if (isError.value) classes.push(...[errorClass, errorIconClass.value]);
		else classes.push(stateClass.value);

		return classes;
	});
	const componentAttr = computed(() => {
		const attr: {
			src?: string;
			alt?: string | null;
			['data-ir']?: string | null;
		} = {};
		if (componentTag.value === 'img') {
			attr.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
			attr.alt = prop.alt;
		}
		else {
			attr['data-ir'] = dataIr.value;
		}

		return attr;
	});
	const isBlock = computed(() => $ui.value?.closest('[data-mui]') != null);
	const isError = ref(false);
	const errorParentClass = computed(() => !prop.isErrorImage || !isError.value ? undefined : `${isBlock.value ? 'mui_' : 'mm_'}image-none`);
	const errorIconClass = computed(() => !prop.isErrorImage || !isError.value ? undefined : `${isBlock.value ? 'uico_' : 'ico_'}none`);
	const stateClass = ref<typeof loadingClass | typeof completeClass | typeof errorClass | null>(null);
	const dataIr = ref<string | null>();
	const src = ref(prop.src);
	const loadSrc = computed(() => {
		if (src.value === null || src.value.length === 0) {
			return null;
		}

		return src.value.startsWith('https') ? src.value : `${import.meta.env.MM_BASE_PATH ?? ''}${src.value}`;
	});
	const $ui = ref<HTMLElement>();

	// 요소 로드
	const load = () => {
		if ($ui.value == null || stateClass.value != null) return;

		let $event = $ui.value;// 이벤트를 연결할 요소
		if (prop.tag === 'i') $event = document.createElement('img');// 배경

		// 로드 전
		stateClass.value = loadingClass;
		emit('before', $ui.value);

		const eventLoadHandler = (_e: Event): void => {

			if ($ui.value == null) return;
			removeEvent();

			switch (_e.type) {
				// 로드 완료
				case 'load':
					stateClass.value = completeClass;
					const $target = $event as HTMLImageElement;
					if (prop.isRatio) {
						const ratio = $target.naturalWidth / $target.naturalHeight;
						let ratioClass = 'S=image-square';
						if (ratio > 1) ratioClass = (ratio > 8) ? 'S=image-landscape-4x' : (ratio > 4) ? 'S=image-landscape-3x' : (ratio > 2) ? 'S=image-landscape-2x' : 'S=image-landscape';
						else if (ratio < 1) ratioClass = (ratio < 0.25) ? 'S=image-portrait-3x' : (ratio < 0.5) ? 'S=image-portrait-2x' : 'S=image-portrait';

						$ui.value.classList.add(ratioClass);
					}

					// 배경
					if (prop.tag === 'i') {
						$ui.value.style.backgroundImage = `url('${$target.getAttribute('src')}')`;
						$target.remove();

						if ($ui.value.clientHeight === 0) $ui.value.style.paddingTop = `${$target.naturalHeight / $target.naturalWidth * 100}%`;// 높이가 없으면 비율로 적용
					}

					watchOff();
					emit('complete', { width: $target.naturalWidth, height: $target.naturalHeight }, $ui.value);
					break;
				// 로드 에러
				case 'error':
					stateClass.value = null;

					// 보조 경로가 있으면 다시 로드
					if (prop.src2 != null) {
						if ($ui.value !== $event) $event.remove();// 임시로 생성된 이미지 요소 삭제
						src.value = prop.src2;
					}
					else {
						stateClass.value = errorClass;
						console.log(`error src: ${$event.getAttribute('src')}`);

						// 이미지 없음
						if (prop.isErrorImage) {
							isError.value = true;
							if (prop.tag === 'img') {
								dataIr.value = $ui.value?.getAttribute('alt');
								componentTag.value = 'i';
							}

							$ui.value.parentElement?.classList.add(errorParentClass.value ?? '');
						}

						watchOff();
						emit('error', $ui.value);
					}
					break;
			}

		};
		const removeEvent = useEventListener($event, ['load', 'error'], eventLoadHandler);

		if (loadSrc.value === null) eventLoadHandler(new Event('error'));
		else $event.setAttribute('src', loadSrc.value);
	};

	const watchOff = watch([$ui, src], () => {
		if (prop.isForce) load();
		else {
			const removeIntersection = useIntersectionObserver($ui, _entries => {
					for (const entry of _entries) {
						if (!entry.isIntersecting || stateClass.value != null) return;

						removeIntersection.stop();
						load();
					}
				},
				{
					rootMargin: prop.rootMargin,
					threshold: [0, 1],
				},
			);
		}
	});

	// class loading 중인 요소에 대해 remove 필요 시 onBeforeUnmount 시점에 처리
</script>