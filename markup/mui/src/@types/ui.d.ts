declare class BaseUI {
	/** UI 생성자에 연결된 요소 */
	public readonly $element: HTMLElement;
	/** constructor name toLowerCase */
	public readonly _name: string;
	/** 블록에서 실행 여부 */
	public readonly _isBlock: boolean;
	/** UI 클래스 프리픽스 */
	public readonly _prefix: `mui_` | `mm_`;
	/** 아이콘 클래스 프리픽스 */
	public readonly _prefixIco: `uico_` | `ico_`;
	/**
	 * UI 생성자
	 * @param { HTMLElement } __$element
	 * @param { string } __name
	 */
	constructor(__$element: HTMLElement, __name: string);
}

declare interface UISyncData {
	/** `default: undefined` - 연결할 요소 */
	syncer?: ElementSelector | null;
	/** `default: true` - 연결 후 업데이트 */
	_isSync?: boolean;
	/** `default: undefined` - 해제할 요소 */
	desyncer?: ElementSelector | null;
	/** `default: true` - 해제 후 업데이트 */
	_isDesync?: boolean;
}

declare interface UIError<T> {
	/** 이미 만들어진 UI 생성자 */
	ui?: T;
	/** 연결할 요소 */
	$element?: HTMLElement;
	/** 메시지 */
	message: string;
}

/**
 * @file lazyload.ts
 */
declare interface LazyloadData {
	/** `defualt: 0px 0px 0px 0px` - intersection observer 영역의 rootMargin */
	_rootMargin?: string;
	/** `default: null` - 이미지 경로 */
	_src?: string | null;
	/** `default: null` - _src가 없을 때 추가로 불러올 이미지 경로 */
	_src2?: string | null;
	/** `default: true` - 오류 이미지 노출 */
	_isErrorImage?: boolean;
	/** `default: false` - 로드 완료 시 비율에 따라 클래스 추가(landscape, portrait, square) */
	_isRatio?: boolean;
	/** `default: false` - 로드 업데이트에서 제외 */
	_isPass?: boolean;
	/** `default: false` - _isIntersecting, _isPass를 무시하고 강제 로드(프리로드) */
	_isForce?: boolean;
	/** `default: null` */
	onBefore?: UtilApplyFunction<[...[__package: { ui: Lazyload }], ...Required<LazyloadData>[`onBeforeParams`]], void>;
	/** `default: []` */
	onBeforeParams?: unknown[];
	/** `default: null` */
	onComplete?: UtilApplyFunction<[...[__package: { ui: Lazyload, _is: boolean }], ...Required<LazyloadData>[`onCompleteParams`]], void>;
	/** `default: []` */
	onCompleteParams?: unknown[];
	/** `default: null` */
	onError?: UtilApplyFunction<[...[__package: { ui: Lazyload, _is: boolean }], ...Required<LazyloadData>[`onErrorParams`]], void>;
	/** `default: []` */
	onErrorParams?: unknown[];
}

/**
 * @file buttons.ts
 */
declare interface SwitchData extends UISyncData {
	/** `default: S=switch-on */
	_classOn?: string;
	/** `default: 선택됨` - on일 때 적용할 title */
	_title?: string;
	/** `default: null` - 기본 title */
	_defaultTitle?: string | null;
	/** `default: false` - 부모 요소에 _classOn 적용 */
	_isParent?: boolean;
	/** `default: false` - 부모 요소가 on되면 내부 ui 업데이트 실행 */
	_isParentUpdate?: boolean;
	/** `default: null` - _classOn을 적용할 closest 요소 */
	_parentSelector?: HTMLElement | DOMSelector | null;
	onChange?: UtilApplyFunction<[...[__package: { ui: Switch }], ...Required<SwitchData>[`onChangeParams`]], void>;
	/** 1번째 이후 아규먼트로 전달 */
	onChangeParams?: unknown[];
}

declare interface TabData {
	/** `default: S=tab-on` */
	_classOn?: string;
	/** `default: .btn_tab` - 탭버튼 셀렉터 */
	_selectorBtn?: string;
	/** `default: 선택됨` - on일 때 적용할 title */
	_title?: string;
	/** `default: false` - 열려있는 요소 닫기 가능 */
	_isToggle?: boolean;
	/** `default: null` */
	onChange?: UtilApplyFunction<[...[__package: { ui: BaseUI }], ...Required<TabData>[`onChangeParams`]], void>;
	/** `default: []` - onChange의 1번째 이후 아규먼트로 전달 */
	onChangeParams?: unknown[];
}

declare interface DropdownData {
	/** `default: S=on` */
	_classOn?: string;
	/** `default: 0` - 변경 시간(초)으로 0은 모션없이 바로 적용, -1은 자동으로 Times.fast와 같음. 드롭다운 요소가 table 요소이면 _time 값이 0으로 적용 */
	_time?: number;
	/** `default: null` - 아코디언 연결과 연결할 셀렉터 */
	_group?: string | null;
	/** `default: true` - 아코디언에서 열려있는 요소 닫기 가능 */
	_isGroupToggle?: boolean;
	/** `default: null` */
	onChange?: UtilApplyFunction<[...[__package: { ui: BaseUI }], ...Required<DropdownData>[`onChangeParams`]], void>;
	/** `default: []` - onChange의 1번째 이후 아규먼트로 전달 */
	onChangeParams?: unknown[];
}

declare interface ToastData {
	_classOn?: string;
	/** `default: null` */
	onChange?: UtilApplyFunction<[...[__package: { ui: BaseUI }], ...Required<ToastData>[`onChangeParams`]], void>;
	/** `default: []` - onChange의 1번째 이후 아규먼트로 전달 */
	onChangeParams?: unknown[];
}

declare interface StepperData {
	/** `default: 1` - 최소 수량 */
	_min?: number;
	/** `default: 99` - 최대 수량 */
	_max?: number;
	/** `default: null` */
	onChange?: UtilApplyFunction<[...[__package: { ui: BaseUI }], ...Required<StepperData>[`onChangeParams`]], void>;
	/** `default: []` -  onChange의 1번째 이후 아규먼트로 전달 */
	onChangeParams?: unknown[];
}

/**
 * @file sliders.ts
 */
/** 캐러셀 방향 */
type CarouselOrientation = `horizontal` | `vertical`;
/** 캐러셀 전환 모션 */
type CarouselEffect = `slide` | `fade` | `cover` | `strip` | `none`;

declare interface CarouselData {
	/** `default: 0` - 초기값 */
	_index?: number;
	/** `default: horizontal` - 방향 */
	_orientation?: CarouselOrientation;
	/** `default: slide` - 모션 효과, 값이 none이면 직접 제어 */
	_effect?: CarouselEffect;
	/** `default: 0.2` - 모션 시간(초) */
	_time?: number;
	/** `default: 0` - 자동 롤링 간격(초), 값이 0이면 수동 */
	_autoDelay?: number;
	/** `default: 0.2` - 민감도, 짧게 움직였을 때 반응할 시간(초) */
	_sensitiveTime?: number;
	/** `default: false` - 높이 자동 */
	_isAutoHeight?: boolean;
	/** `default: false` - 좌/우 요소 같이 모션 */
	_isMoreSide?: boolean;
	/** `default: false` - 이미지가 없으면 item 요소 삭제 */
	_isErrorRemove?: boolean;
	/** `default: S=on` */
	_classOn?: string;
	/** `default: S=clone` - 복제 요소 클래스 */
	_classClone?: string;
	pagination?: {
		/** `default: true` - 요소를 내부에서 검색 */
		_isInner?: boolean;
		/** `default: .btn_carousel-page` */
		_selector?: string,
	};
	control?: {
		/** `default: true` - 요소를 내부에서 검색 */
		_isInner?: boolean;
		/** `default: .btn_carousel-prev` */
		_selectorPrev?: string;
		/** `default: .btn_carousel-next` */
		_selectorNext?: string;
	};
	count?: {
		/** `default: true` - 요소를 내부에서 검색 */
		_isInner?: boolean;
		/** `default: '0'` - 노출할 자리 수 문자 스타일, 100단위 전체 노출은 `000`으로 적용 */
		_padStyle?: string;
		/** `default: ${'.mm_' | '.mui_'}carousel-count` */
		_selector?: string;
	};
	/** `default: null` - 준비 콜백 */
	onReady?: UtilApplyFunction<[...[__package: { ui: BaseUI }], ...Required<CarouselData>[`onReadyParams`]], void>;
	/** `default: []` */
	onReadyParams?: unknown[];
	/** `default: null` - 모션 중 콜백 */
	onUpdate?: UtilApplyFunction<[...[__package: { ui: BaseUI }], ...Required<CarouselData>[`onUpdateParams`]], void>;
	/** `default: []` */
	onUpdateParams?: unknown[];
	/** `default: null` - 모션 시작 콜백 */
	onStart?: UtilApplyFunction<[...[__package: { ui: BaseUI, _isBack?: boolean }], ...Required<CarouselData>[`onStartParams`]], void>;
	/** `default: []` */
	onStartParams?: unknown[];
	/** `default: null` - 모션 종료 콜백 */
	onComplete?: UtilApplyFunction<[...[__package: { ui: BaseUI, _isBack?: boolean }], ...Required<CarouselData>[`onCompleteParams`]], void>;
	/** `default: []` */
	onCompleteParams?: unknown[];
}

type CarouselEffectChangeParams = [__$items: HTMLElement[], __isNext: boolean, __activeIndex: number, __beforeIndex: number];
type CarouselEffectRepositionParams = [__$item: HTMLElement, __index: number, __total: number];
type CarouselEffectMap = Record<CarouselEffect, (...rest: CarouselEffectChangeParams | CarouselEffectRepositionParams) => void>;
declare type CarouselDirectionMap = Record<CarouselOrientation, CarouselDirectionEffectMap>;

declare interface SliderData {
	/** `default: 0` - 초기값 */
	_index?: number;
	/** `default: horizontal` - 방향 */
	_orientation?: `horizontal` | `vertical`;
	/** `default: 0.2` - 모션 시간(초) */
	_time?: number;
	/** `default: 0` - 자동 롤링 간격(초), 값이 0이면 수동 */
	_autoDelay?: number;
	/** `default: 0.2` - 민감도, 짧게 움직였을 때 반응할 시간(초) */
	_sensitiveTime?: number;
	/** `default: 10px 1px` - intersection observer의 rootMargin 값 */
	_rootMargin?: string;
	/** `default: true` - 슬라이더 반복 */
	_isLoop?: boolean;
	/** `default: false` - 이미지가 없으면 item 요소 삭제 */
	_isErrorRemove?: boolean;
	/** `default: S=on` */
	_classOn?: string;
	/** `default: S=clone` - 복제 요소 클래스 */
	_classClone?: string;
	/** `default: S=intersecting` - 영역 내 intersecting 된 요소 클래스 */
	_classIntersecting?: string;
	pagination?: {
		/** `default: true` - 요소를 내부에서 검색 */
		_isInner?: boolean;
		/** `default: .btn_slider-page` */
		_selector?: string;
	};
	control?: {
		/** `default: true` - 요소를 내부에서 검색 */
		_isInner?: boolean;
		/** `default: .btn_slider-prev` */
		_selectorPrev?: string;
		/** `default: .btn_slider-next` */
		_selectorNext?: string;
	};
	/** `default: null` - 준비 콜백 */
	onReady?: UtilApplyFunction<[...[__package: { ui: BaseUI }], ...Required<SliderData>[`onReadyParams`]], void>;
	/** `default: []` */
	onReadyParams?: unknown[];
	/** `default: null` - 모션 중 콜백 */
	onUpdate?: UtilApplyFunction<[...[__package: { ui: BaseUI }], ...Required<SliderData>[`onUpdateParams`]], void>;
	/** `default: []` */
	onUpdateParams?: unknown[];
	/** `default: null` - 모션 시작 콜백 */
	onStart?: UtilApplyFunction<[...[__package: { ui: BaseUI }], ...Required<SliderData>[`onStartParams`]], void>;
	/** `default: []` */
	onStartParams?: unknown[];
	/** `default: null` - 모션 종료 콜백 */
	onComplete?: UtilApplyFunction<[...[__package: { ui: BaseUI }], ...Required<SliderData>[`onCompleteParams`]], void>;
	/** `default: []` */
	onCompleteParams?: unknown[];
	/** `default: null` - 모션 종료 후 intersection 이벤트 발생 콜백 */
	onIntersecting?: UtilApplyFunction<[...[__package: { ui: BaseUI }], ...Required<SliderData>[`onIntersectingParams`]], void>;
	/** `default: []` */
	onIntersectingParams?: unknown[];
}

/**
 * @file picker.ts
 */
declare interface DatepickerItem extends HTMLElement {
	dataset: {
		datepickerDate: string;
	}
}

declare interface DatepickerData {
	/** `default: [일, 월, 화, 수, 목, 금, 토]` - 표시할 요일 순서 */
	weekdays?: string[];
	/** `default: 0` - weekdays 기준 시작 요일(0~6) */
	_firstDay?: number;
	/** `default: YYYY-MM-DD` - 날짜 형식 */
	_format?: string;
	/** `default: 1` - 노출할 달력 개수 */
	_multiple?: number;
	/** `default: false` - 월만 사용 */
	_isMonth?: boolean;
	/** `default: false` - 인라인 달력 */
	_isInline?: boolean;
	/** `default: null` - 설정한 이전 날짜 비활성(날짜 형식은 _format과 동일) */
	_disableBeforeDate?: string | null;
	/** `default: null` - 설정한 이후 날짜 비활성(날짜 형식은 _format과 동일) */
	_disableAfterDate?: string | null;
	/** `default: null` */
	onSelect?: UtilApplyFunction<[...[__package: { ui: BaseUI, date: Date, _value: string }], ...Required<DatepickerData>[`onSelectParams`]], void>;
	/** `default: []` */
	onSelectParams?: unknown[];
}

declare interface DatepickerDisabledOption {
	/** 이전 날짜 비활성 */
	beforeDate?: string;
	/** 이후 날짜 비활성 */
	afterDate?: string;
}

declare interface FormTextData {
	/** `default: ''` - 내용이 없을 때 적용할 기본 값 */
	_default?: string;
	/** `default: S=text-on` - value 값이 있을 때 클래스 */
	_classOn?: string;
	/** `default: S=text-off` - value 값이 있고, readonly, desabled 상태일 때 클래스 */
	_classOff?: string;
	/** `default: ''` - 날짜, 시간에 사용(보여지는 포멧 형식으로 input과 다름, YYYY년 MM월) */
	_format?: string;
	/** `default: false` - textarea 내용에 따라 높이 자동 조절 */
	_isResize?: boolean;
	/** `default: 0` - textarea 최소 높이 라인 수 */
	_resizeMin?: number;
	/** `default: 0` - textarea 최대 높이 라인 수(설정한 값보다 라인이 많으면 스크롤) */
	_resizeMax?: number;
	/** `default: 0` - 바이트 표시로 0보다 크면 자동 생성 */
	_byte?: number;
	/** `default: false` - value 값을 입력할 때 연관검색어 자동완성 */
	_isAutoComplete?: boolean;
}