declare interface EventCustom {
	/**
	 * 커스텀 이벤트 저장
	 * @param { string } __type
	 */
	set(__type: string): void;
	/**
	 * 커스텀 이벤트 사용
	 * @param { string } __type
	 * @returns { string } - MEVT_${__type.toUpperCase()} 형식
	 */
	get(__type: string): string;
}

declare interface EventTypeList {
	/** 커스컴 이벤트 타입 */
	[key: string]: string;
}

interface EventBaseOption {
	/** `default: {}` - __callback의 2번째 파라미터로 전달 */
	data?: Record<string, unknown>;
	/** `default: false` - 이벤트를 한 번만 실행 */
	_isOnce?: boolean;
}

declare interface EventBind {
	/**
	 * 이벤트 연결
	 * @param { DOMSelector } __elements
	 * @param { string } __type - 띄어쓰기로 여러 타입 연결 가능
	 * @param { EventBindCallback<T> } __callback
	 * @param { EventBindOption } [__option]
	 */
	on(__elements: DOMSelector, __type: string, __callback: EventBindCallback<T>, __option?: EventBindOption): void;
	/**
	 * 이벤트 해제
	 * - __callback 값이 없으면 연결된 전체 이벤트 해제
	 * @param { DOMSelector } __elements
	 * @param { string } __type - 띄어쓰기로 여러 타입 연결 가능
	 * @param { EventBindCallback<T> | string } [__callback] - string 타입이면 function.name 값으로 비교
	 */
	off(__elements: DOMSelector, __type: string, __callback?: EventBindCallback<T> | string): void;
	/**
	 * 이벤트 실행
	 * @param { DOMSelector } __elements
	 * @param { string } __type - 띄어쓰기로 여러 타입 연결 가능
	 * @param { Pick<EventBindOption, `data`> } [__option]
	 */
	call(__elements: DOMSelector, __type: string, __option?: Pick<EventBindOption, `data`>): void;
	/**
	 * 이벤트 연결 확인
	 * - __elements 값이 없으면 전체 이벤트 리턴
	 * @param { DOMSelector } [__elements]
	 * @returns { EventBindItem[] } - __elements의 첫 번째 요소에 연결된 이벤트만 리턴
	 */
	get(__elements?: DOMSelector): EventBindItem[];
}

declare interface EventBindCallback<T extends Event> {
	(__e: T, __data: Record<string, unknown>): void;
}

declare interface EventBindItem {
	/** 이벤트에 연결된 요소 */
	$element: DOMElement;
	/** 이벤트 타입 */
	_type: string;
	/** 이벤트 콜백 */
	callback: EventBindCallback<T>;
	handler(__e: Event): void;
}

declare interface EventBindOption extends EventBaseOption {
	/** `default: false` - 버블링 방향으로 반대로 */
	_isCapture?: boolean;
	/** `default: false` - 스크롤 성능을 위해 true일 때 preventDefault 사용 불가(touchstart, touchmove, wheel, mousewheel 이벤트에서 true로 변경 적용) */
	_isPassive?: boolean;
}

declare interface EventDelegate {
	/**
	 * 이벤트 위임 연결
	 * @param { DOMSelector } __parents
	 * @param { string } __delegator - 위임할 셀렉터
	 * @param { string } __type - 띄어쓰기로 여러 타입 연결 가능
	 * @param { EventDelegateCallback<T> } __callback
	 * @param { EventDelegateOption } [__option]
	 */
	on(__parents: DOMSelector, __delegator: string, __type: string, __callback: EventDelegateCallback<T>, __option?: EventDelegateOption): void;
	/**
	 * 이벤트 위임 해제
	 * - __callback 값이 없으면 연결된 전체 이벤트 해제
	 * @param { DOMSelector } __parents
	 * @param { string } __delegator - 위임할 셀렉터
	 * @param { string } __type - 띄어쓰기로 여러 타입 연결 가능
	 * @param { EventDelegateCallback<T> | string } [__callback] - string 타입이면 function.name 값으로 비교
	 */
	off(__parents: DOMSelector, __delegator: string, __type: string, __callback?: EventDelegateCallback<T> | string): void;
	/**
	 * 이벤트 위임 연결 확인
	 * - 파라미터 값이 없으면 전체 이벤트 리턴
	 * @param { DOMSelector } [__parents]
	 * @returns { EventDelegateItem[] } - __parents의 첫 번째 요소에 연결된 이벤트만 리턴
	 */
	get(__parents?: DOMSelector): EventDelegateItem[];
}

declare interface EventDelegateCallback<T extends Event> {
	(...rest: [...Parameters<EventBindCallback<T>>, ...[$element: HTMLElement]]): void;
}

declare interface EventDelegateItem {
	/** 이벤트를 위임할 부모 요소 */
	$parent: DOMElement;
	/** 이벤트 타입 */
	_type: string;
	targets: EventDelegateItemTarget[];
	handler(__e: Event): void;
}

declare interface EventDelegateItemTarget {
	/** 이벤트를 연결할 셀렉터 */
	_delegator: string;
	/** 이벤트 콜백 */
	callback: EventDelegateCallback<T>;
}

declare type EventDelegateOption = EventBaseOption;

declare interface EventObserver {
	/**
	 * 이벤트 옵저버 연결
	 * @param { DOMSelector } __elements
	 * @param { string } __type - 커스텀 이벤트 단일 타입
	 * @param { EventObserverCallback<T> } __callback
	 * @param { EventObserverOption } [__option]
	 */
	on(__elements: DOMSelector, __type: string, __callback: EventObserverCallback<T>, __option?: EventObserverOption): void;
	/**
	 * 이벤트 옵저버 해제
	 * - __elements 값이 없으면 __type에 연결된 전체 이벤트 해제
	 * - __type 값이 없으면 __elements에 연결된 전체 이벤트 해제
	 * - 해제 시 callback은 확인 안함
	 * @param { DOMSelector } __elements
	 * @param { string } [__type] - 커스텀 이벤트 단일 타입
	 */
	off(__elements: DOMSelector, __type?: string): void;
	/**
	 * 이벤트 옵저버 실행
	 * @param { string } __type - 커스텀 이벤트 단일 타입
	 * @param { EventObserverCallOption } [__option]
	 */
	call(__type: string, __option?: EventObserverCallOption): void;
	/**
	 * 이벤트 옵저버 연결 확인
	 * - __target 값이 없으면 전체 이벤트 리턴
	 * @param { DOMElement | string } [__target] - 단일 요소 또는 커스텀 이벤트 단일 타입
	 * @returns { EventObserverItem[] } - __target에 연결된 이벤트 리턴
	 */
	get(__target?: DOMElement | string): EventObserverItem[];
}

declare interface EventObserverCallback<T extends Event> {
	(...rest: Parameters<EventBindCallback<T>>): void;
}

declare type EventObserverItem = Omit<EventBindItem, `callback`> & { callback: EventObserverCallback<T>; };

declare type EventObserverOption = EventBaseOption;

declare interface EventObserverCallOption {
	/** `default: undefined` - event.detail로 전달할 값 */
	data?: Record<string, unknown>;
	/** `default: false` - 현재 프레임(document) 안에 연결된 이벤트만 실행(지역) */
	_isLocal?: boolean;
	/** `default: undefined` - observerCall을 실행한 iframe의 window */
	$frameWindow?: Window | null;
}

declare interface EventIntersection {
	/**
	 * 이벤트 인터섹션 연결
	 * @param { ElementSelector } __elements
	 * @param { EventIntersectionCallback } __callback `default: { rootMargin: '0px 0px 0px 0px', threshold: [0, 1] }`
	 * @param { IntersectionObserverInit } __config
	 * @param { EventIntersectionItemOption } [__option] - __option.data가 __callback의 3번째 파라미터로 전달
	 */
	on(__elements: ElementSelector, __callback: EventIntersectionCallback, __config: IntersectionObserverInit = { rootMargin: `0px 0px 0px 0px`, threshold: [0, 1] }, __option?: EventIntersectionItemOption): void;
	/**
	 * 이벤트 인터섹션 해제
	 * - __callback, __io 값이 없으면 __elements 전체 해제
	 * @param { ElementSelector } __elements
	 * @param { EventIntersectionCallback | string } [__callback]
	 * @param { IntersectionObserver } [__io]
	 */
	off(__elements: ElementSelector, __callback?: EventIntersectionCallback | string, __io?: IntersectionObserver): void;
	/**
	 * 이벤트 인터섹션 실행
	 * - __io 값이 없으면 __elements 전체 실행
	 * @param { ElementSelector } __elements
	 * @param { IntersectionObserver } [__io]
	 */
	call(__elements: ElementSelector, __io?: IntersectionObserver): void;
	/**
	 * 이벤트 인터섹션 연결 확인
	 * - __elements 값이 없으면 전체 이벤트 리턴
	 * @param { ElementSelector } [__elements] - 단일 요소
	 * @returns { EventIntersectionItem[] } - __elements의 첫 번째 요소가 targets에 포함된 이벤트만 리턴
	 */
	get(__elements?: ElementSelector): EventIntersectionItem[];
}

declare interface EventIntersectionCallback {
	(__entry: IntersectionObserverEntry, __data: Record<string, unknown>, __io: IntersectionObserver): void;
	// (__entry: Partial<MutableType<IntersectionObserverEntry>>, __data: Record<string, unknown>, __io: IntersectionObserver): void;
}

declare interface EventIntersectionItem {
	io: IntersectionObserver;
	targets: EventIntersectionItemTarget[];
}

declare interface EventIntersectionItemTarget {
	/** 인터섹션 옵저버에 연결된 요소 */
	$element: HTMLElement;
	/** 인터섹션 콜백 */
	callback: EventIntersectionCallback;
	option: EventIntersectionItemOption;
}

declare type EventIntersectionItemOption = EventBaseOption;

declare interface EventMutation {
	/**
	 * 이벤트 뮤테이션 연결
	 * - input 요소에는 적용 안됨
	 * - characterData는 contenteditable에서 적용
	 * - characterData를 키보드로 감지(record.target.parentElement > oldValue 이전)
	 * - innerText, textContent등으로 직접 변경하면, characterData가 아닌 childList에서 감지(record.target > record.removedNodes 이전, record.addednodes 현재)
	 * - (record.type === `childList`) ? record.target : record.target.parentElement;
	 * - .observe()는 intersectionObserver와 다르게 추가되지 않고 덮어 씌우게 되어있어 상태별 개별 observer를 만들어 적용
	 * @param { DOMSelector } __elements
	 * @param { EventMutationCallback } __callback
	 * @param { MutationObserverInit } __config
	 * @prop { __config } attributes `default: false` - 속성 변경 감시
	 * @prop { __config } attributeOldValue `default: false` - 속성 변경 이전 값 기록, 값을 true로 하면 attributes의 기본 값이 true로 적용
	 * @prop { __config } attributeFilter `default: []` - 감시할 속성으로 값이 없으면 전체 속성 적용
	 * @prop { __config } characterDatas `default: false` - 키보드 문자 데이터 변경 감시(innerText, textContent로 직접 변경은 감시 안됨 > childList로 적용)
	 * @prop { __config } characterDataOldValue `default: false` - 문자 데이터 변경 이전 값 기록, 값을 true로 하면 characterData의 기본 값이 true로 적용
	 * @prop { __config } childList `default: false` - 자식 노드의 추가/삭제 감시
	 * @prop { __config } subtree `default: false` - 하위 트리를 포함하여 감시영역 확장
	 * @param { EventMutationItemOption } [__option]
	 */
	on(__elements: DOMSelector, __callback: EventMutationCallback, __config: MutationObserverInit, __option?: EventMutationItemOption): void;
	/**
	 * 이벤트 뮤테이션 해제
	 * - __callback, __config 값이 없으면 __elemenrs 전체 해제
	 * @param { DOMSelector } __elements
	 * @param { EventMutationCallback | string } [__callback]
	 * @param { MutationObserverInit } [__config]
	 */
	off(__elements: DOMSelector, __callback?: EventMutationCallback | string, __config?: MutationObserverInit): void;
	/**
	 * 이벤트 뮤테이션 연결 확인
	 * - __elements 값이 없으면 전체 이벤트 리턴
	 * @param { DOMSelector } [__elements] - 단일 요소
	 * @returns { EventMutationItem[] } - __elements의 첫 번째 요소에 연결된 이벤트만 리턴
	 */
	get(__elements?: DOMSelector): EventMutationItem[];
}

declare interface EventMutationCallback {
	(__records: MutationRecord[], __data: Record<string, unknown>): void;
}

declare interface EventMutationItem {
	mo: MutationObserver;
	/** 뮤테이션 옵저버에 연결된 요소 */
	$element: Element | Document;
	config: MutationObserverInit;
	callback: EventMutationCallback;
	option: EventMutationItemOption;
}

declare type EventMutationItemOption = EventBaseOption;