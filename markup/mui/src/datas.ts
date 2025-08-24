/**
 * @class 데이터
 * @static
 */

import Is from './is';

export default class Datas {

	/**
     * 깊은 병합 복제
	 * - 얕은 복제는 {...foo, ...bar}, [...foo, ...bar] ...스프레드 연산자 사용
     * - array length가 다를 때 결과 값 주의 - [0, 1, 2] + [3, 4] = [3, 4, 2] 원본 개수 유지됨
	 * @public @static
     * @param { object | array } __items - 모든 파라미터는 첫 번째 파라미터와 같은 타입으로 적용
     * @returns { T } - 병합/복제 된 값
     */
	public static clone<T>(...__items: [T, ...unknown[]]): T {

		// __base 값이 있으면 병합, 없으면 복제
		const reproduce: {
			<TX>(__target: unknown, __base?: unknown): TX;
			(__target: unknown, __base?: unknown): unknown;
		} = <TX>(__target: unknown, __base?: unknown): TX | unknown => {

			if (!(Is.object(__target) || Array.isArray(__target)) || !(Is.object(__base) || Array.isArray(__base))) return __target;

			const obj = (__base?.constructor === __target.constructor) ? __base : __target.constructor();
			for (const _key in __target) obj[_key] = reproduce(__target[_key as keyof typeof __target], obj[_key]);

			return obj;

		};

		let clone: T = reproduce(__items[0]);
		let _count = 0;
		while (++_count < __items.length) {
			if (!(Is.object(__items[_count]) || Array.isArray(__items[_count]))) continue;
			clone = reproduce(__items[_count], clone);
		}

		return clone;

	}

	/**
	 * 폐기 날짜
	 * - cookie, local
	 * @param { number } __day `defaul: 365 - 유지 기간
	 * @param { boolean } __isMidnight `default: false` - 자정(0시)를 기준으로 설정
	 * @returns { string } - UTCString
	 */
	private static getExpireDay(__day = 365, __isMidnight = false): string {

		const date = new Date();
		if (__isMidnight) date.setHours(0, 0, 0, 0);
		date.setTime(date.getTime() + (__day * 24 * 60 * 60 * 1000));

		return date.toUTCString();

	}

	/**
	 * 쿠키
	 * - 4kb, 4000자까지 저장 가능
	 * @public @static
	 */
	public static readonly cookie: DataCookie = {
		set: Datas.cookieSet,
		get: Datas.cookieGet,
		remove: Datas.cookieRemove,
	};

	/**
	 * 쿠키 저장
	 * @param { string } __key
	 * @param { string | number } __value `default: 'true'`
	 * @param { number } __day `default: 365` - 유지 기간
	 * @param { boolean } __isMidnight `default: false` - 자정(0시)를 기준으로 설정
	 */
	private static cookieSet(__key: string, __value: string | number = `true`, __day = 365, __isMidnight = false): void {

		document.cookie = `${__key}=${encodeURIComponent(__value)}; expires=${Datas.getExpireDay(__day, __isMidnight)}; path=/; domain=${location.hostname}`;

	}

	/**
	 * 쿠키 가져오기
	 * @param { string } __key
	 * @returns { string | undefined }
	 */
	private static cookieGet(__key: string): string | undefined {

		const cookies = document.cookie.split(`;`);
		const _cookie = cookies.find(__cookie => __cookie.startsWith(`${__key}=`));

		return (_cookie == null) ? undefined : decodeURIComponent(_cookie.split(`=`)[1]);

	}

	/**
	 * 쿠키 삭제
	 * @param { string } __key
	 */
	private static cookieRemove(__key: string): void {

		Datas.cookieSet(__key, ``, -1);

	}

	/**
	 * 로컬 쿠키(스토리지)
	 * - 사용은 쿠키와 같음
	 * - 로컬 스토리지에 저장하여 브라우저를 닫아도 유지
	 * - 개인정보 저장에 주의
	 * @public @static
	 */
	public static readonly local: DataLocal = {
		set: Datas.localSet,
		get: Datas.localGet,
		remove: Datas.localRemove,
	};

	/**
	 * 로컬 쿠키 저장
	 * @param { string } __key
	 * @param { unknown } __value `default: 'true'`
	 * @param { number } __day `default: 365` - 유지 기간
	 * @param { boolean } __isMidnight `default: false` - 자정(0시)를 기준으로 설정
	 */
	private static localSet(__key: string, __value: unknown = `true`, __day = 365, __isMidnight = false): void {

		const item: DataLocalItem = { value: __value, _expire: Datas.getExpireDay(__day, __isMidnight) };
		Datas.storageSet(`local`, __key, item);

	}

	/**
	 * 로컬 쿠키 가져오기
	 * @param { string } __key
	 * @returns { T | undefined | unknown }
	 */
	private static localGet<T>(__key: string): T | undefined;
	private static localGet(__key: string): unknown;
	private static localGet(__key: string): unknown {

		const data = Datas.storageGet<DataLocalItem>(`local`, __key);
		if (data == null) return undefined;

		// 폐기
		if (data._expire < new Date().toUTCString()) {
			Datas.localRemove(__key);

			return undefined;
		}
		else return data.value;

	}

	/**
	 * 로컬 쿠키 삭제
	 * @param { string } __key
	 */
	private static localRemove(__key: string): void {

		Datas.storageRemove(`local`, __key);

	}

	/**
	 * 로컬/세션 스토리지
	 * - 값을 string만 지원하여 JSON으로 변환하여 저장
	 * - 도메인을 기준으로 저장
	 * - session은 브라우저를 닫으면 삭제
	 * - local은 브라우저를 닫아도 유지
	 * - 개인정보 저장에 주의
	 * - 5mb까지 저장 가능
	 * @public @static
	 */
	public static readonly storage: DataStorage = {
		set: Datas.storageSet,
		get: Datas.storageGet,
		remove: Datas.storageRemove,
		clear: Datas.storageClear,
	};

	/**
	 * 스토리지 저장
	 * @param { DataStorageType } __type
	 * @param { string } __key
	 * @param { unknown } __value
	 */
	private static storageSet(__type: DataStorageType, __key: string, __value: unknown): void {

		const item: DataStorageItem = { _type: (Array.isArray(__value)) ? `array` : typeof __value, value: __value };
		window[`${__type}Storage`].setItem(__key, JSON.stringify(item));

	}

	/**
	 * 스토리지 가져오기
	 * @param { DataStorageType } __type
	 * @param { string } __key
	 * @returns { T | undefined | unknown }
	 */
	private static storageGet<T>(__type: DataStorageType, __key: string): T | undefined;
	private static storageGet(__type: DataStorageType, __key: string): unknown;
	private static storageGet(__type: DataStorageType, __key: string): unknown {

		const _value = window[`${__type}Storage`].getItem(__key);
		if (_value == null) return undefined;

		const item: DataStorageItem = JSON.parse(_value);

		return item.value;
	}

	/**
	 * 스토리지 삭제
	 * @param { DataStorageType } __type
	 * @param { string } __key
	 */
	private static storageRemove(__type: DataStorageType, __key: string): void {

		window[`${__type}Storage`].removeItem(__key);

	}

	/**
	 * 스토리지 전체 삭제
	 * @param { DataStorageType } __type
	 */
	private static storageClear(__type: DataStorageType): void {

		window[`${__type}Storage`].clear();

	}

	/**
	 * 히스토리
	 * - url과 history index 기준으로 저장
	 * - url이 같아도 history index가 다르면 별도로 저장
	 * - 브라우저를 닫으면 삭제
	 * - 640k까지 저장 가능
	 * @public @static
	 */
	public static readonly history: DataHistory = {
		set: Datas.historySet,
		get: Datas.historyGet,
		remove: Datas.historyRemove,
	};

	/**
	 * 히스토리 저장
	 * - history.state에 object가 아닌 값이 있으면 저장 안됨
	 * @param { string } __key
	 * @param { unknown } __value
	 * @param { Window } __window - history를 가져올 window 요소
	 */
	private static historySet(__key: string, __value: unknown, __window: Window = window): void {

		const history = __window.history;

		if (history.state == null) history.replaceState({ [__key]: __value }, document.title);
		else if (!Is.object(history.state)) console.error(`history.state is not an object type:`, history.state);
		else __window.history.state[__key] = __value;

	}

	/**
	 * 히스토리 가져오기
	 * @param { string } __key
	 * @param { Window } __window `default: window` - history를 가져올 window 요소
	 * @returns
	 */
	private static historyGet<T>(__key: string, __window: Window): T | undefined;
	private static historyGet(__key: string, __window: Window): unknown;
	private static historyGet(__key: string, __window: Window = window): unknown {

		const state = __window.history.state;

		return (state == null) ? undefined : (!Is.object(state)) ? state : state[__key as keyof typeof state];

	}

	/**
	 * 히스토리 삭제
	 * @param { string } __key
	 * @param { Window } __window `default: window` - history를 가져올 window 요소
	 */
	private static historyRemove(__key: string, __window: Window = window): void {

		const state = __window.history.state;
		if (Is.object(state)) delete state[__key as keyof typeof state];

	}

	/**
	 * blob 변환
	 * @public @static
	 * @param { string } __url
	 * @returns { Promise<Blob> }
	 */
	public static async loadBlob(__url: string): Promise<Blob> {

		const res = await fetch(__url);

		return res.blob();

		// ! Datas.load(__url, { returnType: `blob` }); 으로?

	}

}