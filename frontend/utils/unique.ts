/**
 * unique 배열
 * @param target
 */
export function unique<T>(target: T[]): T[] {
	return target.filter((item, index) => target.indexOf(item) == index);
}