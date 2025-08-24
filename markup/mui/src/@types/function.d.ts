/**
 * 키와 값 위치를 바꿈
 * - value: key
 * - const 타입은 SwapKeyValue<typeof Type> 형식으로 Type 앞에 typeof를 추가하여 사용
 * - interface가 아닌 const, type 형식만 가능
 */
declare type SwapKeyValue<T> = {
	[K in keyof T as T[K]]: K;
}

/**
 * readonly 제거
 */
declare type MutableType<T> = {
	-readonly [K in keyof T]: T[K];
}

/**
 * 설정한 자식 항목을 포함하여 필수 항목으로 변경
 * 기본 Required는 기준 뎁스만 변경 됨
 */
declare type RequiredWith<T, C> = {
	[K in keyof T]-?: K extends C ? RequiredWith<T[K], C> : T[K];
}

// 타입 유틸(테스트 필요)
// type OptionalKeys<T> = {
// 	[K in keyof T]-?: Record<string, never> extends Pick<T, K> ? K : never;
// }[keyof T];
// type RequiredKeys<T> = {
// 	[K in keyof T]-?: Record<string, never> extends Pick<T, K> ? never : K;
// }[keyof T];

declare type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
declare type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
// type PickBy<T, V> = Pick<T, {[K in keyof T]: T[K] extends V ? K : never}[keyof T]>;
// type Without<T, U> = {[P in Exclude<keyof T, keyof U>]?: never};

// type DeepReadonly<T> = {
// 	readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
// };

// type DeepRequired<T> = {
// 	[K in keyof T]-?: T[K] extends object ? DeepRequired<T[K]> : T[K];
// };

// type DeepPartial<T> = {
// 	[K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
// };

// type DeepExclude<T, U> = T extends U ? never : (T extends object ? DeepExcludeObject<T, U> : T);
// type DeepExcludeObject<T, U> = {[K in keyof T]: DeepExclude<T[K], U>} & Record<string, never>;

// type MyType<T> = {
// 	[K in OptionalKeys<T>]: T[K] | undefined;
// } & {
// 	[K in RequiredKeys<T>]: T[K];
// };


/**
 * 비교
 * @param T1 - 비교 대상 1
 * @param T2 - 비교 대상 2
 * @param R1 - T1과 T2가 같을 때 리턴 값
 * @param R2 - T1과 T2가 다를 때 리턴 값
 */
declare type IfEquals<T1, T2, R1=T1, R2=never> = (<T>() => T extends T1 ? 1 : 2) extends (<T>() => T extends T2 ? 1 : 2) ? R1 : R2;

/**
 * readonly가 아닌 key 타입
 * ```
 * interface Model {
 *   x: string;
 *   y: string;
 *   readonly z: string;
 * }
 * MutableKeys<Model>;// return "x" | "y"
 * ```
 */
declare type MutableKeys<T> = {
    [K in keyof T]-?: IfEquals<{ [X in K]: T[K] }, { -readonly [X in K]: T[K] }, K>
}[keyof T];

/**
 * readonly key 타입
 * ```
 * interface Model {
 *   x: string;
 *   y: string;
 *   readonly z: string;
 * }
 * ReadonlyKeys<Model>;// return "z"
 * ```
 */
declare type ReadonlyKeys<T> = {
    [K in keyof T]-?: IfEquals<{ [X in K]: T[K] }, { -readonly [X in K]: T[K] }, never, K>
}[keyof T];