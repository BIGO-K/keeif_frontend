/**
 * xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx 형태의 난수 생성
 * @returns {xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx} 16자리 난수
 */
function uuid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);

		return v.toString(16);
	});
}

export default uuid;