/**
 * @class 유틸리티(변환) 함수
 * @static
 */

export default class Utils {

	/**
     * 정규식 이스케이프
     * @public @static
     * @param { string } __value
     * @returns { string }
     */
	public static escape(__value: string): string {

		return __value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, `\\$&`);

	}

	/**
     * 셀럭터 이스케이프
     * - querySelector, element.matches에 추가된 클래스 규칙(`=`, `...`)을 적용하기 위해 해당 문자열 앞에 \\ 추가
     * - classList, getElementsByClassName 에서는 \ 없이 그대로 사용
     * @public @static
     * @param { string } __selector - 셀렉터 또는 복수의 셀렉터
     * @returns { string } - .class.S\\=on .class\\.\\.\\.name
     */
	public static selector(__selector: string): string {

		const regex = new RegExp(`[\\${`{}()?/|=`.split(``).join(`\\`)}]`, `g`);// #.[]는 기본 셀렉터에서 사용하여 제외

		return __selector.replace(regex, __word => `\\${__word}`).replace(`...`, `\\.\\.\\.`);

	}

	/**
     * 3자리마다 ,표시
     * @public @static
     * @param { number | string } __value
     * @returns { string } - 1,234,567
     */
	public static comma(__value: number | string): string {

		if (Number.isFinite(__value)) return __value.toLocaleString();// toLocaleString이 속도가 빠름
		else return String(__value).replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1,`);

	}

	/**
     * 쿼리스트링
     * @public @static
     */
	public static readonly query: UtilQuery = {
		parse: Utils.queryParse,
		stringify: Utils.queryStringify,
	};

	/**
	 * 쿼리스트링을 오브젝트로 변환
	 * - location.search 등에 사용
	 * @param { string } __value - foo=1&bar=2&baz[]=3&qux[]=4 형식의 문자열
	 * @returns { Record<string, unknown> } - { foo: 1, bar: [] }
	 */
	private static queryParse(__value: string): Record<string, unknown> {

		if (!__value.includes(`=`)) return {};

		const _queryString = (__value.startsWith(`?`)) ? __value.slice(1) : __value;
		const queries = _queryString.split(`&`);
		const datas: Record<string, unknown> = {};

		for (const _query of queries) {
			const splits = _query.split(`=`);
			const _index = splits[0].indexOf(`[`);// 이름에 []이 있으면 배열로 변경
			const _key = (_index > -1) ? splits[0].slice(0, _index) : splits[0];
			const _value = decodeURIComponent(splits[1]);// 값 디코드

			if (_index > -1 && Array.isArray(datas[_key])) (datas[_key] as unknown[]).push(_value);
			else datas[_key] = _value;
		}

		return datas;

	}

	/**
	 * 오브젝트를 쿼리스트링으로 변환
	 * @param { Record<string, unknown> } __object
	 * @param { boolean } __isUrlSearch `default: false` - location.search 값 처럼 앞에 ? 추가
	 * @returns { string } - ?foo=1&bar[]=2&bar[]=3
	 */
	private static queryStringify(__object: Record<string, unknown>, __isUrlSearch = false): string {

		let _str = (__isUrlSearch) ? `?` : ``;

		for (const _key in __object) {
			const _value = __object[_key];

			if (Array.isArray(_value)) for (const _val of _value) _str += `&${_key}[]=${_val}`;
			else _str += `&${_key}=${encodeURIComponent(String(_value))}`;
		}

		return _str.replace(`&`, ``);// 첫 번째 & 삭제

	}

	/**
     * 컬러
     * @public @static
     */
	public static readonly color: UtilColor = {
		hex: Utils.colorHex,
		// rgb: Utils.colorRgb,
	};

	/**
	 * rgb/rgba 컬러를 hex로 변환
	 * @param { string } __value - rgb(0, 0, 0) 또는 rgba(0, 0, 0, 1)
	 * @returns { string } - #000000
	 */
	private static colorHex(__value: string): string {

		if (__value.startsWith(`rgb`)) {
			const values = __value.replace(/rgb\(|rgba\(|\)/g, ``).split(`,`);
			let _value = `#`;

			for (const [_i, _val] of values.entries()) {
				const _number = (_i < 3) ? parseFloat(_val) : Math.round(parseFloat(_val) * 255);
				const _hex = _number.toString(16);
				_value += _hex.padStart(2, `0`);
			}

			return _value;
		}
		else return __value;

	}

	/**
     * hex 컬러를 rgb로 변환
     * @param { string } __value
     * @param { boolean } __isAlpha (default false) - rgba로 변환
     * @returns { string } rgb(0, 0, 0) rgba(0, 0, 0, 1)
     */
	// private static colorRgb(__value: string, __isAlpha: boolean = false): string {
	// }

	/**
     * 함수 실행
     * @public @static
     * @param { T | string | unknown } __callback - 함수 또는 문자열 함수
     * @param { Parameters<T> | unknown[] } [__params] (default [])
     * @returns { ReturnType<T> | T | void } - 실행되는 함수에 따라 리턴 값 유/무
     */
	public static apply<T extends (...rest: Parameters<T>) => ReturnType<T>>(__callback: T, __params: Parameters<T>): ReturnType<T>;
	public static apply<T>(__callback: string, __params?: unknown[]): T;
	public static apply(__callback: unknown, __params?: unknown[]): void;
	public static apply(__callback: unknown, __params: unknown[] = []): unknown {

		switch (typeof __callback) {
			case `function`:
				return __callback(...__params);
				// break;
			case `string`:
				let callback: unknown = window;
				const chains = __callback.split(`.`);

				for (const _chain of chains) {
					if (callback == null) break;
					else if (typeof callback === `object`) callback = callback[_chain as keyof typeof callback];
				}

				if (typeof callback === `function`) return callback(...__params);
				break;
		}

		return;

	}

	/**
     * 클립보드에 복사
     * - click 등 document에 이벤트가 발생해야 실행
     * @public @static
     * @param { string } __text - 복사할 내용
     * @param { () => void } [__callback] - 복사 실행 후 콜백, 성공 여부 파라미터로 리턴
     */
	public static copy(__text: string, __callback?: () => void): void {

		let _is = false;

		navigator.clipboard.writeText(__text)
			.then(() => { _is = true; })
			.catch(__error => console.error(`Failed to copy:`, __error))
			// finally
			.then(() => Utils.apply(__callback, [_is]));

	}

}