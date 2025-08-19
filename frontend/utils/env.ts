/**
 * env 변수를 조회
 * @param key env 변수명
 * @param defaultValue env 값이 없을 때 사용할 기본값
 * @example
 * env('MM_APP_NAME', 'DEFAULT APP NAME!')
 * @returns env 변수값 또는 전달된 기본값
 */
const env = (key: string, defaultValue?: string): string => {
	if (import.meta.env[key]) {
		return import.meta.env[key];
	}

	return defaultValue;
};


export default env;