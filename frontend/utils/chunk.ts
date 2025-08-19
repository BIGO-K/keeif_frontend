/**
 * 배열 N개씩 묶음 처리
 * @param array
 * @param size
 * @returns
 */
export function chunk(array: T[], size: number = 1): T[][] {
	const result = [];
	if (size >= array.length) {
		return [array];
	}

	for (let i = 0; i < array.length; i += size) {
		const chunk = array.slice(i, i + size);
		result.push(chunk);
	}

	return result;
}