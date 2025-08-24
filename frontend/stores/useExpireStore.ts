import { reactive } from 'vue';
import { defineStore } from 'pinia';
import monsDate from '$/utils/date';

type ExpireWrap<DataType> = {
    expire_at: Date
    data: DataType
}
/** 특정 시간에 만료되어야 하는 경우 해당 스토리지 사용 */
export const useExpireStore = defineStore('expire', () => {
	const dataBag = reactive<Record<string, ExpireWrap<unknown> | undefined>>({});

	function set<T>(
		key: string,
		data: T,
		options?: {
            expired_at?: Date
            seconds?: number
        },
	) {
		const defaultExpiredTime = options?.expired_at
			? options.expired_at
			: monsDate().add((options?.seconds || 600), 's').toDate();

		dataBag[key] = {
			expire_at: defaultExpiredTime,
			data,
		};
	}

	function get<T>(key: string, defaultValue?: T) {
		const wrapData = dataBag[key];
		if (!wrapData) {
			return defaultValue as T;
		}

		if (monsDate().isAfter(wrapData.expire_at)) {
			expire(key);

			return defaultValue as T;
		}

		return wrapData.data as T;
	}

	function expire(key: string) {
		dataBag[key] = undefined;
	}

	return {
		dataBag,
		set,
		get,
		expire,
	};
}, {
	persist: {
		storage: sessionStorage,
	},
});
