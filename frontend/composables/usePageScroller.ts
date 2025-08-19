import { ref } from 'vue';
import { useAnimation } from '$/composables/useAnimation';

export function usePageScroller() {
    // 모션 composable
	const animation = useAnimation();
    // elements
	const scroller = ref<HTMLElement|Window|null>(null);
	const header = ref<HTMLElement|null>(null);
	const gnb = ref<HTMLElement|null>(null);

    /**
     * 스크롤러 탐색
     * @param element
     * @param isClosest
     * @returns
    */
	function getScroller(element?: HTMLElement): HTMLElement|Window|null {
		if (scroller.value) {
			return scroller.value;
		}

		if (!element) {
			return scroller.value = document.querySelector<HTMLElement>(`[data-path="${location.pathname}"] #mm_body > .mm_scroller`);
		}

		if (element.classList.contains('mm_scroller')) {
			return scroller.value = element;
		}

		return scroller.value = element.querySelector<HTMLElement>('.mm_scroller') || window;
	}

    /**
     * 헤더 HTMLElement 탐색
     * @returns
     */
	function getHeader(): HTMLElement|null {
		if (!header.value) {
			header.value = document.querySelector<HTMLElement>(`.mm_header`);
		}

		return header.value;
	}

    /**
     * GNB HTMLElement 탐색
     * @returns
     */
	function getGnb(gnbSelector: string = `.mm_gnb`): HTMLElement|null {
		if (!gnb.value) {
			gnb.value = document.querySelector<HTMLElement>(`${gnbSelector}`);
		}

		return gnb.value;
	}


    /**
     * 스크롤러 내 타켓 element 위치
     * @param target
     * @returns
     */
	function getPositionInScroller(target: HTMLElement): {top: number; left: number} {
		const targetScroller = scroller.value || getScroller(target);
		if (!targetScroller) {
			return {
				top: 0,
				left: 0,
			};
		}

		const targetRect = target.getBoundingClientRect();
		const scrollerRect = (targetScroller instanceof Window)
			? { top: 0, left: 0 }
			: targetScroller.getBoundingClientRect();
		const scrollerOffset = (targetScroller instanceof Window)
			? { top: targetScroller.scrollY, left: scrollX }
			: { top: targetScroller.scrollTop, left: targetScroller.scrollLeft };

		return {
			top: scrollerOffset.top + targetRect.top - scrollerRect.top,
			left: scrollerOffset.left + targetRect.left - scrollerRect.left,
		};
	}

    /**
     * 타켓의 위치로 스크롤
     * @param target
     * @param option
     * @returns
     */
	function scrollTo(
		target: HTMLElement,
		option: {
            margin: number;
            direction?: 'vertical'|'horizontal',
            time?: number
        }
	) {
		const targetScroller = scroller.value || getScroller();
		if (!targetScroller) {
			return;
		}
        // 스크롤 내 타겟 element 위치
		const targetPosition = getPositionInScroller(target);

        // 스크롤 옵션
		const scrollOption: AnimationOption = {
			duration: option.time || 0.2,
			ease: 'sine.out',
		};

		scrollOption[(option.direction === 'horizontal') ? 'scrollLeft' : 'scrollTop'] = option.direction === 'horizontal'
			? (targetPosition.left - option.margin)
			: (targetPosition.top - option.margin);

        // 스크롤 모션
		animation.to(targetScroller instanceof Window ? document.documentElement : targetScroller, scrollOption);
	}

	return {
		getGnb,
		getHeader,
		getScroller,
		getPositionInScroller,
		scrollTo,
	};
}