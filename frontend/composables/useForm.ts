import { MaybeRef, isRef, ref, unref } from 'vue';
import { validator, Data, RuleDefinition, Tester } from '@owneul/kalidator';
import { usePasswordValidator } from '$/composables/usePasswordValidator';

type FormOption = {
    rule?: RuleDefinition | (() => RuleDefinition)
    message?: { [paramSelector: string]: string }
    testers?: Tester[]
}

const validPhoneNumber: Tester = {
	name: 'validPhoneNumber',
	defaultMessageOnFailure: ':param(은/는) 올바른 휴대전화번호가 아닙니다.',
	handler(value, extras) {
		if (extras.length === 2) {
			if (extras[0].value === 'nullable' && extras[1].value && value === '') {
				return true;
			}
		}
		if (typeof value !== 'string') {
			return false;
		}

		const phoneNumberRegExp = /^010[0-9]{4}[0-9]{4}$/g;

		return value.match(phoneNumberRegExp) !== null;
	},
};

const usableLoginId: Tester = {
	name: 'usableLoginId',
	defaultMessageOnFailure: '사용할 수 없는 아이디입니다.',
	handler(value) {
		const idRegExp = /^[a-zA-Z0-9]{4,16}$/i;

		return typeof value === 'string' && value.match(idRegExp) !== null;
	},
};
const usableEmail: Tester = {
	name: 'usableEmail',
	defaultMessageOnFailure: '사용할 수 없는 메일주소입니다.',
	handler(value) {
		const emailRegExp = /.+@+([a-z+.])+(\.com$|\.co\.kr$|\.net$|\.kr$)/i;

		return typeof value === 'string' && value.match(emailRegExp) !== null;
	},
};
const usablePassword: Tester = {
	name: 'usablePassword',
	defaultMessageOnFailure: '사용할 수 없는 비밀번호입니다.',
	handler(value, extras, nullable, pack) {
		const [loginId, phoneNumber, legacyPassword] = extras;
		if (typeof value !== 'string') {
			return false;
		}

		const { valid, usable } = usePasswordValidator(
			value,
			typeof loginId?.value === 'string' ? loginId.value : '',
			typeof phoneNumber?.value === 'string' ? phoneNumber.value : '',
			typeof legacyPassword?.value === 'string' ? legacyPassword.value : '',
		);

		if (!usable.value) {
			return pack.fail(valid.message);
		}

		return usable.value;
	},
};

const noRepeat: Tester = {
	name: 'noRepeat',
	defaultMessageOnFailure: '동일한 문자 또는 자음/모음은\n4회 이상 연속 입력할 수 없습니다.',
	handler(value) {
		if (value && (/(\w|\W)\1\1\1/.test(value) || /([^가-힣\x20])\1\1\1/i.test(value))) {
			return false;
		}

		return true;
	},
};

const maxLength: Tester = {
	name: 'maxLength',
	defaultMessageOnFailure: ':param(은/는) 최대 :$0자까지 입력할 수 있습니다.',
	handler: (value, extras) => value.length <= extras[0].value,
};

const minLength: Tester = {
	name: 'minLength',
	defaultMessageOnFailure: ':param(은/는) 최소 :$0자 입력해야 합니다.',
	handler: (value, extras) => value.length >= extras[0].value,
};

const betweenLength: Tester = {
	name: 'betweenLength',
	defaultMessageOnFailure: ':param(은/는) :$0자 ~ :$1자 사이로 입력해야 합니다.',
	handler: (value, extras) => value.length >= extras[0].value && value.length <= extras[1].value,
};

const blank: Tester = {
	name: 'blank',
	defaultMessageOnFailure: ':param(을/를) 입력해주세요.',
	handler: (value) => !!(typeof value == 'string' && value.trim().length),
};


/**
 * FORM 형식 생성
 * @returns
 */
export function useForm<D extends { [index: string]: unknown }>(initialData: MaybeRef<D>, options?: FormOption) {
	const form = isRef(initialData) ? initialData : ref<D>(initialData);

	const valid: { [key in keyof D]?: FormValid } = {};
	(Object.keys(unref(initialData)) as (keyof D)[]).forEach(key => valid[key] = {
		type: 'alert',
		message: '',
		state: 'valid',
		show: false,
	});

    /** 검증 */
	async function validate(overrideRule?: RuleDefinition) {
		const rule = overrideRule
			|| (
				typeof options?.rule == 'function'
					? options.rule()
					: options?.rule
			);


		const instance = validator(form.value as Data)
			.rule(rule || {})
			.message({
                /** 글로벌 메세지 처리 */
				...{
					'required': ':param(을/를) 입력해주세요.',
					'requiredIf': ':param(을/를) 입력해주세요.',
					'type.in': ':param(이/가) 유효하지 않습니다.',
				},
				...options?.message,
			});

        /** 공용 테스터 */
		instance.tester(usableEmail.name, usableEmail.defaultMessageOnFailure, usableEmail.handler);
		instance.tester(validPhoneNumber.name, validPhoneNumber.defaultMessageOnFailure, validPhoneNumber.handler);
		instance.tester(usableLoginId.name, usableLoginId.defaultMessageOnFailure, usableLoginId.handler);
		instance.tester(usablePassword.name, usablePassword.defaultMessageOnFailure, usablePassword.handler);
		instance.tester(maxLength.name, maxLength.defaultMessageOnFailure, maxLength.handler);
		instance.tester(minLength.name, minLength.defaultMessageOnFailure, minLength.handler);
		instance.tester(noRepeat.name, noRepeat.defaultMessageOnFailure, noRepeat.handler);
		instance.tester(betweenLength.name, betweenLength.defaultMessageOnFailure, betweenLength.handler);
		instance.tester(blank.name, blank.defaultMessageOnFailure, blank.handler);
		options?.testers?.forEach(tester => {
			instance.tester(tester.name, tester.defaultMessageOnFailure, tester.handler);
		});


		await instance.run();
	}

	return {
		form,
		valid: ref(valid as { [key in keyof D]: FormValid }),
		validate,
	};
}