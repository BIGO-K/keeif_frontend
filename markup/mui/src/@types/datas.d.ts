declare interface DataCookie {
	/**
	 * 쿠키 저장
	 * @param { string } __key
	 * @param { string | number } __value `default: 'true'`
	 * @param { number } __day `default: 365` - 유지 기간
	 * @param { boolean } __isMidnight `default: false` - 자정(0시)를 기준으로 설정
	 */
	set(__key: string, __value: string | number = `true`, __day = 365, __isMidnight = false): void;
	/**
	 * 쿠키 가져오기
	 * @param { string } __key
	 * @returns { string | undefined }
	 */
	get(__key: string): string | undefined;
	/**
	 * 쿠키 삭제
	 * @param { string } __key
	 */
	remove(__key: string): void;
}

declare interface DataLocal {
	/**
	 * 로컬 쿠키 저장
	 * @param { string } __key
	 * @param { unknown } __value `default: 'true'`
	 * @param { number } __day `default: 365` - 유지 기간
	 * @param { boolean } __isMidnight `default: false` - 자정(0시)를 기준으로 설정
	 */
	set(__key: string, __value: unknown = `true`, __day = 365, __isMidnight = false): void;

	/**
	 * 로컬 쿠키 가져오기
	 * @param { string } __key
	 * @returns { T | undefined | unknown }
	 */
	get<T>(__key: string): T | undefined;
	get(__key: string): unknown;
	/**
	 * 로컬 쿠키 삭제
	 * @param { string } __key
	 */
	remove(__key: string): void;
}

declare interface DataLocalItem {
	/** 저장할 값 */
	value: unknown;
	/** 폐기 날짜 UTCString */
	_expire: string;
}

declare interface DataStorage {
	/**
	 * 스토리지 저장
	 * @param { DataStorageType } __type
	 * @param { string } __key
	 * @param { unknown } __value
	 */
	set(__type: DataStorageType, __key: string, __value: unknown): void;
	/**
	 * 스토리지 가져오기
	 * @param { DataStorageType } __type
	 * @param { string } __key
	 * @returns { T | undefined | unknown }
	 */
	get<T>(__type: DataStorageType, __key: string): T | undefined;
	get(__type: DataStorageType, __key: string): unknown;
	/**
	 * 스토리지 삭제
	 * @param { DataStorageType } __type
	 * @param { string } __key
	 */
	remove(__type: DataStorageType, __key: string): void;
	/**
	 * 스토리지 전체 삭제
	 * @param { DataStorageType } __type
	 */
	clear(__type: DataStorageType): void;
}

type DataStorageType = `session` | `local`;
declare interface DataStorageItem {
	/** 저장하는 값의 type */
	_type: string;
	/** 저장할 값 */
	value: unknown;
}

declare interface DataHistory {
	/**
	 * 히스토리 저장
	 * - history.state에 object가 아닌 값이 있으면 저장 안됨
	 * @param { string } __key
	 * @param { unknown } __value
	 * @param { Window } __window - history를 가져올 window 요소
	 */
	set(__key: string, __value: unknown, __window: Window = window): void;
	/**
	 * 히스토리 가져오기
	 * @param { string } __key
	 * @param { Window } __window `default: window` - history를 가져올 window 요소
	 * @returns
	 */
	get<T>(__key: string, __window: Window = window): T | undefined;
	get(__key: string, __window: Window = window): unknown;
	/**
	 * 히스토리 삭제
	 * @param { string } __key
	 * @param { Window } __window `default: window` - history를 가져올 window 요소
	 */
	remove(__key: string, __window: Window = window): void;
}