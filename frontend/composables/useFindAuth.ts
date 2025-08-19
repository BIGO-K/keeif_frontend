import { computed } from 'vue';
import { useExpireStore } from '$/stores/useExpireStore';
import monsDate from '$/utils/date';
import { useBackend } from '$/composables/useBackend';

type IdFindData = Pick<ExpireToken, 'access_token'> & IdFindResult

export function useFindAuth() {
	const FIND_TYPE: { [key: string]: LoginInfoFindType} = {
		phone: '_phone',
		email: '_email',
		_phone: 'phone',
		_email: 'email',
	};
	const idFindKey = 'idFind';
	const passwordFindKey = 'passwordFind';
    // 만료 data store
	const { get: getExpireStore, set: setExpireStore, expire } = useExpireStore();

	const idFindData = computed(() => getExpireStore<Nullable<IdFindData>>(idFindKey, null));
	const passwordFindData = computed(() => getExpireStore(passwordFindKey, { access_token: '', login_id: '' }));

    /**
     * 아이디 찾기
     * @param form
     * @returns
     */
	async function findId(form: IdFindForm) {
		const { find_type, ...findForm } = form;
		const {
			find_results,
			user_name,
			access_token,
			expire_at,
		} = await useBackend().command<ExpireToken & IdFindResult>('v1/members/find-login-id', {
			method: 'post',
			data: {
				find_type: FIND_TYPE[find_type],
				...findForm,
			},
		});

		if (find_results.length < 1) {
			throw new Error('입력하신 정보와 일치하는 회원정보가 없습니다.');
		}

		setExpireStore(idFindKey, {
			find_results,
			user_name,
			find_type: form.find_type,
			phone: form.phone,
			email: form.email,
			access_token,
		}, {
			expired_at: monsDate(expire_at).toDate(),
		});
	}

    /**
     * 마스킹 해제된 아이디 전송
     */
	async function sendUnmaskedId() {
		if (idFindData.value == null) {
			throw new Error('세션이 만료되었습니다.');
		}

		await useBackend().command(`v1/members/find-login-id/send-results-to-${FIND_TYPE[idFindData.value.find_type]}`, {
			method: 'post',
			data: {
				phone: idFindData.value.phone,
				email: idFindData.value.email,
				access_token: idFindData.value.access_token,
			},
		});
	}

    /**
     * 비밀번호 변경 인증번호 전송
     * @param form
     */
	async function sendPasswordFindVerificationCode(form: PasswordVerificationCodeForm) {
		const { find_type, ...verificationCodeForm } = form;
		const { access_token, expire_at } = await useBackend().command<ExpireToken>(`v1/members/find-password/send-authcode-to-${FIND_TYPE[find_type]}`, {
			method: 'post',
			data: verificationCodeForm,
		});

		setExpireStore(passwordFindKey, {
			access_token,
			login_id: verificationCodeForm.login_id,
		}, {
			expired_at: monsDate(expire_at).toDate(),
		});
	}

    /**
     * 비밀번호 변경 인증번호 확인
     * @param code
     */
	async function verifyPasswordCode(code: number) {
		if (!passwordFindData.value.access_token) {
			throw new Error('세션이 만료되었습니다.');
		}

		await useBackend().command('v1/members/find-password/verify-authcode', {
			method: 'post',
			data: {
				verification_code: code,
				access_token: passwordFindData.value.access_token,
			},
		});
	}

    /**
     * 비밀번호 찾기
     * @param form
     */
	async function findPassword(form: PasswordFindForm) {
		if (!passwordFindData.value.access_token) {
			throw new Error('세션이 만료되었습니다.');
		}

		const data = form.find_type === FIND_TYPE.email
			? {
				access_token: passwordFindData.value.access_token,
				find_type: FIND_TYPE[form.find_type],
				login_id: form.login_id,
				name: form.name,
				email: form.email,
				verification_code: form.verification_code,
			}
			: {
				access_token: passwordFindData.value.access_token,
				find_type: FIND_TYPE[form.find_type],
				login_id: form.login_id,
				name: form.name,
				phone: form.phone,
				verification_code: form.verification_code,
			};

		await useBackend().command('v1/members/find-password/prepare-for-new-password', {
			method: 'post',
			data,
		});
	}

    /**
     * 비밀번호 찾기 토큰으로 비밀번호 변경
     * @param newPassword
     */
	async function updatePassword(newPassword: string) {
		if (!passwordFindData.value.access_token) {
			throw new Error('세션이 만료되었습니다.');
		}
		await useBackend().command('v1/members/find-password/set-new-password', {
			method: 'post',
			data: {
				password: newPassword,
				access_token: passwordFindData.value.access_token,
			},
		});
	}


	return {
		FIND_TYPE,
		idFindData,
		passwordFindData,
		findId,
		sendUnmaskedId,
		sendPasswordFindVerificationCode,
		verifyPasswordCode,
		findPassword,
		updatePassword,
		expirePasswordFind: () => expire(passwordFindKey),
		expireIdFind: () => expire(idFindKey),
	};
}