import { MaybeRef } from '@vueuse/core';
import { gsap } from 'gsap';

export const useAnimation = () => {
	return {
		set(element: Element | Element[] | NodeListOf<Element>, options?: AnimationOption) {
			gsap.set(
				element,
				options ? options : {}
			);
		},
		to(element: Element | Element[] | NodeListOf<Element>, options?: AnimationOption) {
			const tween = gsap.to(
				element,
				options ? options : {}
			);

			return () => {
				tween.kill();
			};
		},

		fromTo(element: Element, fromOptions?: AnimationOption, toOptions?: AnimationOption) {

			const tween = gsap.fromTo(
				element,
				fromOptions ? fromOptions : {},
				toOptions ? toOptions : {},
			);

			return () => {
				tween.kill();
			};
		},
		kill(element: Element | MaybeRef<Element[]>) {
			gsap.killTweensOf(element);
		},

		isAnimated(element: Element): boolean {
			return gsap.isTweening(element);
		},

		timeLine(options?: gsap.TimelineVars): gsap.core.Timeline {
			return gsap.timeline(options);
		}

	};
};