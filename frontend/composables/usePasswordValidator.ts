import { ref, type MaybeRef, isRef, unref, computed, watch } from 'vue';

export function usePasswordValidator(
	password: MaybeRef<string>,
	loginId?: MaybeRef<string>,
	phoneNumber?: MaybeRef<string>,
	legacyPassword?: MaybeRef<string>,
) {
	const formValid = ref<FormValid>({
		show: false,
		type: 'valid',
		state: 'normal',
		message: '사용하기 적절한 비밀번호입니다.',
	});

	function doValidate() {
		const vPassword = unref(password);
		const vLoginId = unref(loginId || '');
		const vPhoneNumber = unref(phoneNumber || '');
		const vLegacyPassword = unref(legacyPassword || '');

        /** 공백 */
		if (vPassword.match(/\s/)) {
			formValid.value.state = 'invalid';
			formValid.value.message = '공백은 입력할 수 없습니다.';

			return;
		}

        /** 조합 확인 */
		let comboCount = 0;
		if (vPassword.search(/[0-9]/g) > -1) {
			++comboCount;
		}
		if (vPassword.search(/[a-z]/g) > -1) {
			++comboCount;
		}
		if (vPassword.search(/[A-Z]/g) > -1) {
			++comboCount;
		}
		if (
			vPassword.search(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi) > -1
		) {
			++comboCount;
		}
		if (comboCount < 2) {
			formValid.value.state = 'invalid';
			formValid.value.message = '영문, 숫자, 특수문자 중 2가지 이상 조합해주세요.';

			return;
		}

        /** 길이 */
		if (vPassword.length < 8 || vPassword.length > 16) {
			formValid.value.state = 'invalid';
			formValid.value.message = '8자 이상 입력해주세요.';

			return;
		}

        /** 아이디와 동일 내용 제한 => 위험 */
		if (vLoginId !== '' && vPassword.search(vLoginId) > -1) {
			formValid.value.state = 'invalid';
			formValid.value.message = '아이디와 동일 내용을 사용할 수 없어요.';

			return;
		}

        /** 휴대폰 번호와 동일 내용 제한 =>  위험 */
		if (vPhoneNumber !== '' && vPassword.search(vPhoneNumber) > -1) {
			formValid.value.state = 'danger';
			formValid.value.message = '휴대폰 번호와 동일 내용을 사용할 수 없어요.';

			return;
		}

        /** 이전 비밀번호와 동일 내용 제한 =>  위험 */
		if (vLegacyPassword !== '' && vLegacyPassword === vPassword) {
			formValid.value.state = 'danger';
			formValid.value.message = '이전 비밀번호와 동일 내용을 사용할 수 없어요.';

			return;
		}

        /** 동일한 문자/숫자 4자 이상 사용 제한 (문자) => 위험 */
		if (
			/(\w)\1\1\1/.test(vPassword)
            || /([\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"])\1\1\1/.test(vPassword)
		) {
			formValid.value.state = 'danger';
			formValid.value.message = '동일한 내용 4자리 이상은 사용할 수 없어요.';

			return;
		}

        /** 연속된 문자 4자 이상 사용 제한 (asdf, ASDF, 1234 등) */
		let consecutiveCount1 = 0;
		let consecutiveCount2 = 0;
		const consecutiveChar = [];

		for (let i = 0; i < vPassword.length - 3; i++) {
			consecutiveChar[0] = vPassword.charAt(i);
			consecutiveChar[1] = vPassword.charAt(i + 1);
			consecutiveChar[2] = vPassword.charAt(i + 2);
			consecutiveChar[3] = vPassword.charAt(i + 3);

            // 순차 (abcd, 1234 등)
			if (
				consecutiveChar[0].charCodeAt(0) - consecutiveChar[1].charCodeAt(0) == 1
                && consecutiveChar[1].charCodeAt(0) - consecutiveChar[2].charCodeAt(0) == 1
                && consecutiveChar[2].charCodeAt(0) - consecutiveChar[3].charCodeAt(0) == 1
			) {
				consecutiveCount1++;
			}

            // 역순차 (dcba, 4321 등)
			if (
				consecutiveChar[0].charCodeAt(0) - consecutiveChar[1].charCodeAt(0) == -1
                && consecutiveChar[1].charCodeAt(0) - consecutiveChar[2].charCodeAt(0) == -1
                && consecutiveChar[2].charCodeAt(0) - consecutiveChar[3].charCodeAt(0) == -1
			) {
				consecutiveCount2++;
			}
		}

		if (consecutiveCount1 > 0 || consecutiveCount2 > 0) {
			formValid.value.state = 'invalid';
			formValid.value.message = '연속된 숫자 또는 키보드 텍스트 4자는 사용할 수 없어요.';

			return;
		}

        /** 연속된 키보드 문자 */
		const keyboardsWord = [];
        //순차
		keyboardsWord[0] = '`1234567890-=';
		keyboardsWord[1] = '~!@#$%^&*()_+';
		keyboardsWord[2] = 'qwertyuiop[]\\';
		keyboardsWord[3] = 'asdfghjkl;\'';
		keyboardsWord[4] = 'zxcvbnm,./';
		keyboardsWord[5] = 'QWERTYUIOP{}|';
		keyboardsWord[6] = 'ASDFGHJKL:"';
		keyboardsWord[7] = 'ZXCVBNM<>?';
        //역순차
		keyboardsWord[8] = '=-0987654321`';
		keyboardsWord[9] = '+_)(*&^%$#@!~';
		keyboardsWord[10] = '\\][poiuytrewq';
		keyboardsWord[11] = '\';lkjhgfdsa';
		keyboardsWord[12] = '/.,mnbvcxz';
		keyboardsWord[13] = '|}{POIUYTREWQ';
		keyboardsWord[14] = '":LKJHGFDSA"';
		keyboardsWord[15] = '?><MNBVCXZ';

        // 4자 이상 사용 제한
		for (let j = 0; j < keyboardsWord.length; j++) {
			for (let i = 0; i < keyboardsWord[j].length - 3; i++) {
				if (vPassword.indexOf(keyboardsWord[j].substring(i, i + 4)) >= 0) {
					formValid.value.state = 'invalid';
					formValid.value.message = '연속된 숫자 또는 키보드 텍스트 4자는 사용할 수 없어요.';

					return;
				}
			}
		}

        // 조합글자(숫자, 텍스트, 특수문자) 9자 이상 입력 => 안전
		if (comboCount >= 3 && vPassword.length >= 9) {
			formValid.value.state = 'valid';
			formValid.value.message = '예측이 어려운 강력한 비밀번호입니다.';

			return;
		}
	}

	if (isRef(password)) {
		watch(password, doValidate, { immediate: true });
	}
	else {
		doValidate();
	}

	return {
		valid: formValid,
		usable: computed(() => formValid.value.state === 'valid' || formValid.value.state === 'normal'),
	};
}