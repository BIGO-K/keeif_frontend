declare type UtilApplyFunction<P, R> = ((...rest: P) => R) | string | null;

declare interface UtilQuery {
	/**
	 * 쿼리스트링을 오브젝트로 변환
	 * - location.search 등에 사용
	 * @param { string } __value - foo=1&bar=2&baz[]=3&qux[]=4 형식의 문자열
	 * @returns { Record<string, unknown> } - { foo: 1, bar: [] }
	 */
	parse(__value: string): Record<string, unknown>;
	/**
	 * 오브젝트를 쿼리스트링으로 변환
	 * @param { Record<string, unknown> } __object
	 * @param { boolean } __isUrlSearch `default: false` - location.search 값 처럼 앞에 ? 추가
	 * @returns { string } - ?foo=1&bar[]=2&bar[]=3
	 */
	stringify(__object: Record<string, unknown>, __isUrlSearch: boolean = false): string;
}

declare interface UtilColor {
	/**
	 * rgb/rgba 컬러를 hex로 변환
	 * @param { string } __value - rgb(0, 0, 0) 또는 rgba(0, 0, 0, 1)
	 * @returns { string } - #000000
	 */
	hex(__value: string): string;
	// ~ colorRgb(__value: string): string;
}