import { useToNumber } from '@vueuse/core';
import { useRouteQuery } from '@vueuse/router';

export function useRouteQueryCast() {

	const queryToArray = (keyName: string, defaultValue: string[]): string[] => {
		const originQuery = useRouteQuery<string[]|string>(keyName, defaultValue);
		if (originQuery.value === '') {
			return defaultValue;
		}

		if (!Array.isArray(originQuery.value)) {
			return [originQuery.value];
		}

		return originQuery.value;
	};

	return {
		queryToBoolean: (keyName: string, defaultValue: boolean): boolean => {
			return useRouteQuery<string>(keyName, `${defaultValue}`).value === 'true' ? true : false;
		},
		queryToNumber: (keyName: string, defaultValue: number): number => {
			return useToNumber(useRouteQuery<string>(keyName, `${defaultValue}`).value).value;
		},
		queryToArray: queryToArray,
		queryToNumberArray: (keyName: string, defaultValue: string[]): number[] => {
			return queryToArray(keyName, defaultValue).map((query) => {
				return useToNumber(query).value;
			});
		},
		queryToString: (keyName: string, defaultValue: string): string => {
			return `${ useRouteQuery<string>(keyName, defaultValue).value }`;
		},
	};
}