import monsDate from '$/utils/date';
import isMobile from '$/utils/isMobile';


export function useFormatter() {

	function pad(value: string, length: number, padString: string, direction: 'right'|'left') {
		padString = padString || '';
		if (isNaN(length) || length < 1) {
		// throw new Error('패딩 길이가 유효하지 않습니다.');
			return;
		}
		else if (padString === '') {
			throw new Error('패딩 문자가 지정되지 않았습니다.');
		}
		else if (direction !== 'left' && direction !== 'right') {
			throw new Error('패딩 방향이 유효하지 않습니다.');
		}

		if (value.length < length) {
			return pad(direction === 'right' ? value + padString : padString + value, length, padString, direction) || '';
		}
		else {
			return value || '';
		}
	}

	return {
        /** xxxxxx => xxx,xxx 처리 */
		number: (source: string | number | undefined | null): string => {
			if (source === undefined || source === null) {
				return '';
			}

			const regexp = /\B(?=(\d{3})+(?!\d))/g;

			return source.toString().replace(regexp, ',');
		},
		/** 전화번호 처리 */
		phone: (source: string): string => {
			if (source.length === 11) {
				return source.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
			}

			if (source.startsWith('02') && source.length === 10) {
				return source.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
			}

			return source;
		},
        /** \n 개행 문자 BR로 치환 */
		newLineToBr: (source: string): string => {
			if (source === undefined || source === null) {
				return '';
			}

			return source.replace(/\n/g, '<br>');
		},
		date: (source: string, format: string, isKo = true): string => {
			if (!source) {
				return '';
			}

			return monsDate(source).format(format, isKo);
		},
		url: (url: string): string => {
			if (!url || url.startsWith('/') || url.startsWith('http')) {
				return url || '';
			}

			if (url.startsWith('www.')) {
				return `//${url}`;
			}

			return `/${url}`;
		},
		optionText: (optionName: string): string => {
			const optionNames = (optionName || '').split('/');

			return optionNames.filter(o => o.trim() !== '-').join(optionNames.length > 2 ? '/' : '').trim();

		},
		korean: (text: string): string => {
			let result = text;
			// 확인할 조사 목록
			const checkpoints = [
				'(은/는)',
				'(이/가)',
				'(을/를)',
				'(과/와)',
				'(아/야)',
				'(이여/여)',
				'(이랑/랑)',
				'(으로/로)',
				'(으로서/로서)',
				'(으로써/로써)',
				'(으로부터/로부터)',
			];

			// 거꾸로 입력한 거 보정
			for (let index = 0; index < checkpoints.length; index++) {
				const checkpoint = checkpoints[index];
				const fir = checkpoint.split('/')[0].replace('(', '');
				const sec = checkpoint.split('/')[1].replace(')', '');
				result = result.replace(new RegExp(`\\(${sec}/${fir}\\)`, 'g'), checkpoint);
			}

			// 체크포인트 순회
			for (let index = 0; index < checkpoints.length; index++) {
				const checkpoint = checkpoints[index];

				if (!result.includes(checkpoint)) {
					continue;
				}
				const code = result.charCodeAt(result.indexOf(checkpoint) - 1) - 44032;

				if (code >= 0 || code <= 11171) {
					result = result.replace(
						checkpoint,
						code % 28 !== 0
							? checkpoint.split('/')[0].replace('(', '')
							: checkpoint.split('/')[1].replace(')', ''),
					);
				}
			}

			return result;
		},
		pad,
		externalLink(path?: string): string {
			if (!path) {
				return '';
			}

			if (!isMobile('app_android')) {
				return path;
			}

			const hasQueryParamInPath = path.indexOf('?') > -1;

			return hasQueryParamInPath ? path + `&is_out_intent=Y` : path + `?is_out_intent=Y`;

		},
	};
}