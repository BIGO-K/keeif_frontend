export function useFormatter() {
	return {
        /** xxxxxx => xxx,xxx 처리 */
		number: (source: string | number | undefined | null): string => {
			if (source === undefined || source === null) {
				return '';
			}

			const regexp = /\B(?=(\d{3})+(?!\d))/g;

			return source.toString().replace(regexp, ',');
		},
        /** \n 개행 문자 BR로 치환 */
		newLineToBr: (source: string): string => {
			return source.replace(/\n/g, '<br>');
		},
	};
}