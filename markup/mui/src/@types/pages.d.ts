declare interface PageUI {
	/**
	 * UI 생성자 저장
	 * @param { BaseUI } __newUI - UI 생성자
	 * @param { PageUIOption } [__option]
	 */
	set(__newUI: BaseUI, __option?: PageUIOption): void;
	/**
	 * UI 생성자 확인
	 * __name 값이 없으면 전체 클래스 생성자 리턴
	 * @param { ElementSelector } __element - 단일 요소
	 * @param { string } __name - data-x 속성 이름 또는 클래스 이름
	 * @returns { T | null | Record<string, BaseUI> }
	 */
	get<T extends BaseUI>(__element: ElementSelector, __name: string): T | null;
	get(__element: ElementSelector): Record<string, BaseUI>;
	/**
	 * UI 생성자 삭제
	 * @param { BaseUI | ElementSelector } __target - UI 생성자 또는 단일 요소
	 * @param { string } [__name] - data-x 속성 이름 또는 클래스 이름(__target 이 단일 요소 일 때 사용)
	 */
	remove(__target: BaseUI, __name?: string): void;
	remove(__target: ElementSelector, __name: string): void;
}

declare interface PageUIOption {
	/** `default: false` - 값이 true 일 때 internalUI[_name] 값이 있으면 병합하고, 없거나 false면 새로 저장 */
	_isOverwrite?: boolean;
}

declare interface PageFrameResizeOption {
	/** `default: false` - 페이지 ready, load로 실행 */
	_isLoad?: boolean;
	/** `default: false` - 높이를 짝수로 적용 */
	_isEven?: boolean;
	/** `default: 0` - 높이에 추가로 계산할 값 */
	_extraHeight?: number;
}

declare interface PageSyncOption {
	/** `default: null` - 싱크 콜백 */
	onSync?: (__$element: HTMLElement, __is: boolean) => void;
	/** `default: null` - 디싱크 콜백 */
	onDesync?: (__$element: HTMLElement, __is: boolean) => void;
}

declare interface PageLoading {
	/**
	 * 로딩 노출
	 * - ios에서 링크가 바뀔 때 css keyframes로 적용된 모션 중 ::before, ::after 가상 요소는 움직이지 않는 이슈
	 * @param { ElementSelector } __element `default: '.mm_app'` - 로딩을 노출할 부모 단일 요소
	 * @param { PageLoadingOption } [__option]
	 * @returns { HTMLElement | undefined }
	 */
	show(__element: ElementSelector = `.mm_app`, __option?: PageLoadingOption): HTMLElement | undefined;
	/**
	 * 로딩 숨김
	 * @param { ElementSelector } __elements `default: '.mm_app'` - 로딩의 부모 요소
	 * @param { number } __delay `default: 0` - 숨김 딜레이 시간(초)
	 */
	hide(__elements: ElementSelector = `.mm_app`, __delay: number = 0): void;
}

declare interface PageLoadingOption {
	/** `default: 0` - 로딩이 노출되는 동안 적용할 부모 요소의 높이 */
	_minHeight?: number;
	/** `default: 0` - 로딩 아이콘 top 위치 */
	_top?: number;
	/** `default ''` - background-color 스타일 값 */
	_background?: string;
	/** `default: 0` - 로딩 아이콘 폰트 사이즈 */
	_size?: number;
	/** `default ''` - 로딩 아이콘 하단에 노출할 텍스트 */
	_text?: string;
}

declare interface PageSocialTag {
	/**
	 * 소셜태그 추가/변경
	 * @param { PageSocialTagOption } __option
	 */
	set(__option: PageSocialTagOption): void;
	/**
	 * 소셜태그 가져오기
	 * @param { keyof PageSocialTagOption } [__key] - 값이 있으면 해당 내용만 없으면 전체를 리턴
	 * @returns { PageSocialTagOption | string | undefined }
	 */
	get(__key?: keyof PageSocialTagOption): PageSocialTagOption | string | undefined;
	/**
	 * 소셜태그 삭제
	 * @param { keyof PageSocialTagOption } [__key] - 값이 없으면 전체 삭제
	 */
	remove(__key?: keyof PageSocialTagOption | Array<keyof PageSocialTagOption>): void;
}

declare interface PageSocialTagOption {
	/** og:title */
	title?: string;
	/** og:type */
	type?: `article` | `book` | `profile` | `website` | `video.movie` | `video.episode` | `video.tv_show` | `video.other` | `music.song` | `music.album` | `music.playlist` | `music.radio_station`;
	/** og:image */
	image?: string;
	/** og:url */
	url?: string;
	/** og:description */
	description?: string;
	/** og:site_name */
	siteName?: string;
	/** twitter:card */
	card?: string;
	/** twitter:image:alt */
	imageAlt?: string;
}

/** 소셜태그 타입 별 property, name 값 */
declare interface PageSocialTagMap {
	title: `og:title`;
	type: `og:type`;
	image: `og:image`;
	url: `og:url`;
	description: `og:description`;
	siteName: `og:site_name`;
	card: `twitter:card`;
	imageAlt: `twitter:image:alt`;
}

type PageLinkType = `anchor` | `modal` | `popup` | `link` | `home` | `reload` | `back` | `forward`;

declare interface PageLinkOption extends DomScrollToOption, PageModalOption, PagePopupOption {
	/** `default: 'link'` - 링크 타입 */
	_type?: PageLinkType;
	/** `default: 1` - 히스토리 이동 단계 */
	_step?: number;
}

declare interface PageModal {
	/** 모달을 열 때 클릭한 요소 */
	get $openEl(): Window | HTMLElement | null;
	/** 오프너 */
	get $opener(): Window | null;
	/**
	 * 모달 열기
	 * @param { string } __url
	 * @param { PageModalOption } [__option]
	 * @returns
	 */
	open(__url: string, __option?: PageModalOption): HTMLElement;
	/**
	 * 모달 닫기
	 * @param { (() => void) | string } [__callback]
	 */
	close(__callback?: (() => void) | string): void;
	/**
	 * 모달 리사이즈
	 * @param { PageModalResizeOption } [__option]
	 */
	resize(__option?: PageModalResizeOption): void;
}

declare interface PageModalItem {
	/** 모달 아이템 요소 */
	$item: HTMLElement;
	/** modal.openEl로 리턴할 요소 */
	$openEl: HTMLElement | null;
}

declare interface PageModalOption {
	/** `default: null` - modal.openEl로 리턴할 요소 */
	$openEl?: HTMLElement | null;
	/** `default: ''` - 아이프레임 id 속성 값 */
	_frameId?: string;
	/** `default: ''` - 아이프레임 name 속성 값 */
	_frameName?: string;
	/** `default: ''` - 아이프레임 title 속성 값 */
	_frameTitle?: string;
	/** `default: false` - 화면에 꽉차게 노출 */
	_isFull?: boolean;
	/** `default: true` - 헤더 노출 */
	_isHeader?: boolean;
	/** `default: false` - dim 요소를 클랙해서 닫기 */
	_isCloseOutside?: boolean;
	/** `default: []` - 생성된 modal-item 요소에 추가할 클래스 */
	classes?: string[];
	onReady?: UtilApplyFunction<[...[$element: HTMLElement], ...Required<PageModalOption>[`onReadyParams`]], void>;
	onReadyParams?: unknown[];
	onLoad?: UtilApplyFunction<[...[$element: HTMLElement], ...Required<PageModalOption>[`onLoadParams`]], void>;
	onLoadParams?: unknown[];
}

type PageModalResizeOption = PageFrameResizeOption;

declare interface PagePopup {
	/** 팝업을 열 때 클릭한 요소 */
	get $openEl(): Window | HTMLElement | null;
	/** 오프너 */
	get $opener(): Window | null;
	/**
	 * 팝업 열기
	 * @param { string } __url
	 * @param { PagePopupOption } [__option]
	 * @returns { Window | null }
	 */
	open(__url: string, __option?: PagePopupOption): Window | null;
	/**
	 * 팝업 닫기
	 * @param { (() => void) | string } [__callback]
	 */
	close(__callback?: (() => void) | string): void;
	/**
	 * 팝업 리사이즈
	 */
	resize(): void;
}

declare interface PagePopupOption {
	/** popup.openEl로 리턴할 요소 */
	$openEl?: HTMLElement | null;
	/** target 또는 window 이름(_black | _parent | _self | _top | name) */
	_name?: string;
	specs?: {
		_top: number;
		_left: number;
		_width: number;
		_height: number;
		_isTitlebar: boolean;
		_isMenubar: boolean;
		_isStatus: boolean;
		/** IE, Safari, Opera Only */
		_isScrollbars: boolean;
		/** IE, Firefox Only */
		_isToolbar: boolean;
		/** Opara Only */
		_isLocation: boolean;
		/** IE Only */
		_isResizable: boolean;
	};
}