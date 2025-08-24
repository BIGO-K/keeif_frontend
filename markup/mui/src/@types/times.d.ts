declare interface TimeTable {
	/** `default: 0.1` - 초 */
	_faster: number;
	/** `default: 0.2` - 초 */
	_fast: number;
	/** `default: 0.4` - 초 */
	_base: number;
	/** `default: 0.7` - 초 */
	_slow: number;
	/** `default: 1` - 초 */
	_slower: number;
}

declare interface TimeStamp {
	/**
	 * 시간 간격 저장
	 * @param { string } __key - 구분 고유 값
	 * @returns { number } - 시간 간격 밀리세컨드
	 */
	on(__key: string): number;
	/**
	 * 시간 저장 종료
	 * @param { string } __key - 구분 고유 값
	 * @returns { number } 시간 간격 밀리세컨드
	 */
	off(__key: string): number;
}

declare interface TimeStampList {
	[key: string]: number[];
}

declare interface TimeDelay {
	/**
	 * 지연 함수 실행
	 * @param { T | string | unknown } __callback
	 * @param { TimeDelayOption } [__option]
	 * @returns { ReturnType<T> | T | unknown }
	 */
	on<T extends (...rest: Parameters<T>) => ReturnType<T>>(__callback: T, __option?: TimeDelayOption): ReturnType<T>;
	on<T>(__callback: string, __option?: TimeDelayOption): T;
	on(__callback: unknown, __option?: TimeDelayOption): unknown;
	/**
	 * 지연 함수 종료
	 * @param __name 구분 고유 값
	 */
	off(__name: string): void;
}

declare interface TimeDelayList {
	[key: string]: number;
}

declare interface TimeDelayOption {
	/** `default: 1` - 딜레이 시간(ms) */
	_time?: number;
	/** `default: false` - 시간 단위를 초로 적용 */
	_isSec?: boolean;
	/** `default: ''` 값이 있으면 중복 실행 안됨 */
	_name?: string;
	/** `default: false` - 중복 적용일 때 덮어쓰기(_name과 같이 사용) */
	_isOverwrite?: boolean;
	/** `default: []` - 콜백 파라미터 */
	params?: unknown[];
}