import { AxiosError } from 'axios';
import mons from '$/utils/mons';

type HttpCatcher = {
    [key: number]: string;
}
/** 에러 알럿 처리 */
export function useErrorAlert(
	error: unknown,
	options?: {
		httpCatcher?: HttpCatcher,
		alertCallback?: () => void,
		defaultMessage?: string
	},
) {
	let message = '';
	if (error instanceof AxiosError) {
		message = error.response?.data.message || message;

		if (options?.httpCatcher && error.response) {
			message = options.httpCatcher[error.response.status] || message;
		}
	}
	else if (error instanceof Error) {
		message = error.message;
	}
	else if (typeof error === 'string') {
		message = error;
	}

	if (message === '' && options?.defaultMessage) {
		message = options.defaultMessage;
	}

	mons().bom.alert(message, typeof options?.alertCallback === 'function' ? options?.alertCallback : () => {});
}