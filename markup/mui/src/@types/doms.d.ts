declare interface DomData {
	/**
	 * 데이터 속성 저장 및 확인
	 * @param { HTMLElement } __$element - 단일 요소
	 * @param { string } __name - data-x 속성 이름
	 * @param { Partial<T> } __data - 저장할 값
	 * @param { boolean } __isExtend `default: true` - 기본 속성을 확장하여 저장, 값이 false이면 새로 저장
	 */
	set<T>(__$element: HTMLElement, __name: string, __data: Partial<T>, __isExtend = true): void;
	/**
	 * 데이터 속성 확인
	 * @param { HTMLElement } __$element - 단일 요소
	 * @param { string } __name - data-x 속성 이름
	 * @returns { Partial<T> | string }
	 */
	get<T>(__$element: HTMLElement, __name: string): Partial<T> | string;
}

declare interface DomPosition {
	/** 요소의 y좌표 */
	top: number;
	/** 요소의 x좌표 */
	left: number;
}

declare interface DomScroll {
	/** 페이지 기본 스크롤 요소 */
	element: HTMLElement;
	/**
	 * 내부 스크롤 검색
	 * @param { undefined | Window | Document | HTMLHtmlElement | HTMLBodyElement | DOMSelector} __element - 단일 요소
	 * @param { boolean } [__isClosest] - 검색 방향을 상위 요소로 변경
	 * @returns { HTMLElement | null }
	 */
	find(): HTMLElement;
	find(__element: Window | Document | HTMLHtmlElement | HTMLBodyElement): HTMLElement;
	find(__element: DOMSelector, __isClosest: true): HTMLElement;
	find(__element: DOMSelector, __isClosest?: boolean): HTMLElement | null;
	/**
	 * 스크롤 이동
	 * @param { ElementSelector | number } __target - 단일 요소 또는 스크롤 위치(px)
	 * @param { DomScrollToOption } [__option]
	 */
	to(__target: ElementSelector | number, __option?: DomScrollToOption): void;
	/**
	 * 스크롤 위치
	 * @param { DOMSelector } __element - 단일 요소
	 * @returns { DomPosition | undefined }
	 */
	position(__element: DOMSelector): DomPosition | undefined;
	/**
	 * 스크롤 토글
	 * - pc에서 스크롤이 없어지면서 화면이 흔들리는 이슈로 스크립트에서 위치 조절
	 * - fixed에서는 가로 스크롤 적용 안됨
	 * @param { boolean } [__is] - 허용, 차단 여부
	 */
	toggle(__is?: boolean): void;
	/**
	 * 스크롤 허용
	 */
	on(): void;
	/**
	 * 스크롤 차단
	 */
	off(): void;
}

declare interface DomScrollToOption {
	/** `default: null` - 스크롤 요소 */
	scroller?: DOMElement | null;
	/** `default: 'vertical'` */
	_orientation?: `vertical` | `horizontal`;
	/** `default: 0` - 스크롤 위치 조정(px) */
	_margin?: number;
	/** `default: Times._Fast` - 스크롤 이동 모션 시간(초), 값이 0이면 바로 이동 */
	_time?: number;
	/** `default: false` - __target이 단일 요소일 때 이동 후 __target에 포커스 여부 */
	_isFocus?: boolean;
	/** `default: null` - 스크롤 이동 전 콜백 */
	onStart?: UtilApplyFunction<Required<DomScrollToOption>[`onStartParams`], void>;
	/** `default: []` */
	onStartParams?: unknown[];
	/** `default: null` - 스크롤 이동 후 콜백 */
	onComplete?: UtilApplyFunction<Required<DomScrollToOption>[`onCompleteParams`], void>;
	/** `default: []` */
	onCompleteParams?: unknown[];
}

declare interface DomFocus {
	/**
	 * 포커스 인
	 * - __element가 단일 요소가 아니면 첫 번째 요소에 적용
	 * @param { ElementSelector } __element - 단일 요소
	 * @param { Partial<CSSStyleDeclaration> } [__style]
	 */
	in(__element: ElementSelector, __style?: Partial<CSSStyleDeclaration>): void;
	/**
	 * 포커스 아웃
	 * - __element가 단일 요소가 아니면 첫 번째 요소에 적용
	 * @param { ElementSelector } __element - 단일 요소
	 */
	out(__element: ElementSelector): void;
}

declare interface DomClass {
	/**
	 * 클래스 토글
	 * @param { ElementSelector } __elements
	 * @param { string | string[] } __classes - 단일 또는 복수의 클래스
	 * @param { boolean } [__is] - 강제 적용
	 */
	toggle(__elements: ElementSelector, __classes: string | string[], __is?: boolean): void;
	/**
	 * 클래스 추가
	 * @param { ElementSelector } __elements
	 * @param { string | string[] } __classes - 단일 또는 복수의 클래스
	 */
	add(__elements: ElementSelector, __classes: string | string[]): void;
	/**
	 * 클래스 삭제
	 * @param { ElementSelector } __elements
	 * @param { string | string[] } __classes - 단일 또는 복수의 클래스
	 */
	remove(__elements: ElementSelector, __classes: string | string[]): void;
	/**
	 * 클래스 교체
	 * @param { ElementSelector } __elements
	 * @param { string } __class - 교체할 기존 단일 클래스
	 * @param { string } __newClass - 적용할 새로운 단일 클래스
	 */
	replace(__elements: ElementSelector, __class: string, __newClass: string): void;
	/**
	 * 단일 요소에 모든 클래스 확인
	 * @param { ElementSelector } __element - 단일 요소
	 * @param { string | string[] } __classes - 단일 또는 복수의 클래스
	 * @returns { boolean }
	 */
	every(__element: ElementSelector, __classes: string | string[]): boolean;
	/**
	 * 단일 요소에 일부 클래스 확인
	 * @param { ElementSelector } __element - 단일 요소
	 * @param { string | string[] } __classes - 단일 또는 복수의 클래스
	 * @returns { boolean }
	 */
	some(__element: ElementSelector, __classes: string | string[]): boolean;
}