// FIXME 리턴 boolean 부분에 args is Type 형식으로 변경이 필요한지 확인


/**
 * @class 상태 확인
 * @static
 */

import Doms from './doms';

export default class Is {

	/**
     * 모바일
	 * - __type 값이 없으면 단순 모바일 여부 확인
	 * @public @static
     * @param { string } [__type] - 모바일 디바이스/앱 상태 값(keyof IsTypeMobile, custom string)
     * @returns { boolean }
     */
	public static mobile(__type?: string): boolean {

		const type: IsTypeMobile = {
			iphone: `iphone`,
			ipad: `ipad`,
			ipod: `ipod`,
			get ios(): string { return `${[this.iphone, this.ipad, this.ipod].join(`|`)}`; },
			android: `android`,
			blackberry: `blackberry|bb10|playbook`,
			window: `iemobile|windows phone|windows mobile`,
			opera: `opera mini`,
			// 앱에 userAgent 코드 추가 필요
			app_kitkat: `app_kitkat`,
			app_first: `app_first`, // 앱 최초실행
			app_ios: `app_ios`,
			app_android: `app_android`,
			get app(): string { return `${[this.app_ios, this.app_android].join(`|`)}`; },
		};
		const _type = (__type == null) ? `${[type.ios, type.android, type.blackberry, type.window, type.opera].join(`|`)}|webos|bada|zunewp7|nokia` : (__type in type) ? type[__type as keyof IsTypeMobile] : `${__type}`;

		return new RegExp(_type, `i`).test(navigator.userAgent);

	}

	/**
     * 익스플로러, 구 엣지
	 * - __type 값이 없으면 IE/구 엣지 여부 확인
	 * @public @static
     * @param { string } [__type] - 익스플로러/구 엣지 브라우저 값(keyof IsTypeIE, custom string)
     * @returns { boolean }
     */
	public static ie(__type?: string): boolean {

		const type: IsTypeIE = {
			ie6: `msie 6`,
			ie7: `msie 7`,
			ie8: `msie 8`,
			ie9: `msie 9`,
			ie10: `msie 10`,
			ie11: `rv:11`,
			edge: `edge`, // 구 엣지(현재 크로미움 버전은 edg로 적용)
			get ie(): string { return `${[`msie`, this.ie11].join(`|`)}`; },
			get ie9over(): string { return `${[this.ie9, this.ie10, this.ie11, this.edge].join(`|`)}`; },
			get ie10over(): string { return `${[this.ie10, this.ie11, this.edge].join(`|`)}`; },
		};
		const _type = (__type == null) ? `${[type.ie, type.edge].join(`|`)}` : (__type in type) ? type[__type as keyof IsTypeIE] : `${__type}`;

		return new RegExp(_type, `i`).test(navigator.userAgent);

	}

	/**
     * 홀수
	 * @public @static
     * @param { number } __value
     * @returns { boolean }
     */
	public static odd(__value: number): boolean {

		return Number.isFinite(__value) ? __value % 2 === 1 : false;

	}

	/**
     * 짝수
	 * @public @static
     * @param { number } __value
     * @returns { boolean }
     */
	public static even(__value: number): boolean {

		return Number.isFinite(__value) ? __value % 2 === 0 : false;

	}

	/**
     * 빈 값
     * - 실제로 빈 값인지 확인하고, 0 값이라도 있으면 true로 리턴
	 * @public @static
     * @param { unknown } __value
     * @param { unknown[] } __excepts `default: []` - 빈 값 예외 항목 [0, null, undefined, ...]
     * @returns { boolean }
     */
	public static empty(__value: unknown, __excepts: unknown[] = []): boolean {

		let _is = !__value;

		switch (typeof __value) {
			case `number`:
				_is = !isFinite(__value);// NaN, Infinity 포함, 0 제외
				break;
			case `string`:
				if (__value.trim().length === 0 || [`undefined`, `null`, `NaN`, `Infinity`].includes(__value)) _is = true;
				break;
			case `object`:
				if (__value == null || Object.keys(__value).length === 0) _is = true;// null 포함
				break;
		}

		// 예외
		if (_is) _is = !__excepts.includes(__value);

		return _is;

	}


	/**
     * 순수 오브젝트 {}
	 * typeof object가 아닌 DOM 요소와 Array를 제외한 {} 오브젝트 구분
	 * @public @static
     * @param { unknown } __value
     * @returns { boolean }
     */
	public static object(__value: unknown): __value is object {

		return __value != null && Object.prototype.isPrototypeOf.call(Object.getPrototypeOf(__value), Object);

	}

	/**
	 * 오브젝트 등 객체 비교 또는 포함'
	 * @public @static
	 * @param { unknown } __origin - 원본
	 * @param { unknown } __target - 비교 대상
	 * @returns { boolean }
	 */
	public static match(__origin: unknown, __target: unknown): boolean {

		if (typeof __origin !== typeof __target) return false;

		// object, array
		if (__origin != null && (Is.object(__origin) || Array.isArray(__origin)) && __target != null && (Is.object(__target) || Array.isArray(__target))) {
			let _is = true;

			for (const _key in __target) {
				const value = __origin[_key as keyof typeof __target];
				const targetValue = __target[_key as keyof typeof __target];
				_is = (typeof value === `object`) ? Is.match(value, targetValue) : value === targetValue;

				if (!_is) break;
			}

			return _is;
		}
		else return __origin === __target;

	}

	/**
     * 이터러블
	 * @public @static
     * @param { unknown } __value
     * @returns { boolean }
     */
	public static iterable(__value: unknown): boolean {

		return Symbol.iterator in Object(__value);

	}

	/**
     * 순수 단일 엘리먼트
     * - jQuery 엘리먼트 제외
	 * - 기본 엘리먼트는 instanceof HTMLElement로 사용하고, Document/Window를 같이 확인할 때 사용
	 * @public @static
     * @param { unknown } __value
     * @param { (Document | Window)[] } __excepts `default: []` - document 또는 window 포함
     * @returns { boolean }
     */
	public static element(__value: unknown, __excepts: (Document | Window)[] = []): boolean {

		let _is = __value instanceof HTMLElement;
		if (!_is) _is = __excepts.some(__except => __value instanceof __except.constructor);

		return _is;

	}

	/**
     * 요소의 화면 노출 여부
     * - display: none, append 전 상태 등
	 * @public @static
     * @param { ElementSelector } __elements
     * @returns { boolean }
     */
	public static display(__elements: ElementSelector): boolean {

		const $elements = Doms.find(__elements);
		if ($elements.length === 0) return false;

		return $elements.every(__$el => __$el.offsetParent != null || __$el.offsetWidth > 0);// Doms.style(__$el, `display`) === `none`;

	}

	/**
     * 요소의 화면 노출 상태가 visibility 일 때
	 * @public @static
     * @param { ElementSelector } __elements
     * @returns { boolean }
     */
	public static visible(__elements: ElementSelector): boolean {

		const $elements = Doms.find(__elements);
		if ($elements.length === 0) return false;

		return $elements.every(__$el => Doms.style(__$el, `visibility`) === `visible`);

	}

	/**
     * 요소에 포커스 여부
	 * @public @static
     * @param { ElementSelector } __element - 단일 요소, 복수의 요소는 첫 번째 요소만 확인
     * @returns { boolean }
     */
	public static focus(__element: ElementSelector): boolean {

		return document.activeElement === Doms.find(__element)[0];

	}

	/**
     * 페이지 레이아웃
	 * @public @static
     * @param { string } __type - 페이지 타입(main, modal, popup, frame, error, detail, print, review, ...)
     * @returns { boolean }
     */
	public static layout(__type: string): boolean {

		return document.documentElement.classList.contains(`L=${__type}`);

	}

	/**
	 * 터치(마우스다운)이벤트 상태
	 */
	public static get touch(): boolean { return (frameElement == null) ? Is._isTouch : (top as Window & { Is: typeof Is }).Is.touch; }
	public static set touch(__is: boolean) {

		if (frameElement == null) Is._isTouch = __is;
		else (top as Window & { Is: typeof Is }).Is.touch = __is;

	}

	private static _isTouch = false;

}