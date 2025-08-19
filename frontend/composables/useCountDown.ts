import { computed, ref } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import monsDate from '$/utils/date';

export const useCountDown = (
	targetDate: string,
	options?: {
		intervalTime?: number;
		startDate?: string;
		dayToHour?: boolean;
	},
) => {
		/** 타겟 일 종료 여부 */
	const isEnded = computed(() => monsDate().isAfter(targetDate));
		/** 시작일이 있는 경우 시작일 이후 여부 체크 // 기본은 false */
	const isBeforeStarted = computed(() => !options?.startDate ? false : monsDate().isBefore(options?.startDate));
		/** 일자를 시간 변환 필요 여부 */
	const needHourAddDay = options?.dayToHour || false;
	const intervalTime = options?.intervalTime || 1000;

	const duration = isEnded.value || isBeforeStarted.value ?
		{
			months: 0,
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		}
		: monsDate().duration(targetDate);


	const timerDuration = ref<{
			day: number;
			hour: number;
			minute: number;
			second: number;
		}>({
			day: Math.abs(duration.months) > 0 ? duration.days : duration.days,
			hour: (needHourAddDay && Math.abs(duration.days) > 0) ? (duration.days * 24) + duration.hours : duration.hours,
			minute: duration.minutes,
			second: duration.seconds,
		});

	const { pause } = useIntervalFn(() => {
		if (isEnded.value || isBeforeStarted.value) {
			timerDuration.value = {
				day: 0,
				hour: 0,
				minute: 0,
				second: 0,
			};
			pause();

			return;
		}

		const duration = monsDate().duration(targetDate);
		timerDuration.value = {
			day: duration.days,
			hour: (needHourAddDay && Math.abs(duration.days) > 0) ? (duration.days * 24) + duration.hours : duration.hours,
			minute: duration.minutes,
			second: duration.seconds,
		};
	}, intervalTime);

	const timer = computed<{
			day: string;
			hour: string;
			minute: string;
			second: string;
		}>(() => {
			return {
				day: timerDuration.value.day,
				hour: `${Math.abs(timerDuration.value.hour)}`.padStart(2, '0'),
				minute: `${Math.abs(timerDuration.value.minute)}`.padStart(2, '0'),
				second: `${Math.abs(timerDuration.value.second)}`.padStart(2, '0'),
			};
		});

	return {
		timer,
		pause,
	};
};