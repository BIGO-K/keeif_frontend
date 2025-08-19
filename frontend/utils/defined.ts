/** array.map Type 레퍼런스 도움용 함수 */
function defined<T>(argument: T | undefined | null): argument is T {
	return argument !== undefined && argument !== null;
}

export default defined;