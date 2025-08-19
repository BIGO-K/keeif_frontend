import dayjs, { Dayjs } from 'dayjs';
import duration from 'dayjs/plugin/duration';
import 'dayjs/locale/ko';

dayjs.extend(duration);

/**
 *
 * @param date
 * @returns
 * ```javascript
 *  monsDate().format('yyyy-mm-dd');
 * ```
 */
function monsDate(date?: DateInput | Dayjs): DateHelper {
	const targetDate = dayjs.isDayjs(date) ? date : dayjs(date);

	return {
		toDate(): Date {
			return targetDate.toDate();
		},
		isValid(): boolean {
			return targetDate.isValid();
		},
		format(format: string, isKo: boolean = false): string {
			if (isKo) {
				return targetDate.locale('ko').format(format);
			}

			return targetDate.format(format);
		},
		isBefore(compare: DateInput, unit?: OpUnitType): boolean {
			return targetDate.isBefore(compare, unit);
		},
		isAfter(compare: DateInput, unit?: OpUnitType): boolean {
			return targetDate.isAfter(compare, unit);
		},
		isSame(compare: DateInput, unit?: OpUnitType): boolean {
			return targetDate.isSame(compare, unit);
		},
		isSameOrBefore(compare: DateInput, unit?: OpUnitType): boolean {
			return targetDate.isSame(compare, unit) || targetDate.isBefore(compare, unit);
		},
		isSameOrAfter(compare: DateInput, unit?: OpUnitType): boolean {
			return targetDate.isSame(compare, unit) || targetDate.isAfter(compare, unit);
		},
		diff(compare: DateInput, unit?: QUnitType | OpUnitType): number {
			return targetDate.diff(compare, unit);
		},
		get(unit: UnitType): number {
			return targetDate.get(unit);
		},
		add(amount: number, unit: ManipulateType): DateHelper {
			return monsDate(targetDate.add(amount, unit));
		},
		subtract(amount: number, unit: ManipulateType): DateHelper {
			return monsDate(targetDate.subtract(amount, unit));
		},
		startOf(unit: OpUnitType): DateHelper {
			return monsDate(targetDate.startOf(unit));
		},
		endOf(unit: OpUnitType): DateHelper {
			return monsDate(targetDate.endOf(unit));
		},
		/** duration 결과값이 개별이기때문에, 달이 넘어가면 값이 상이할 수 있음 days 참고 사용 부분도 확인 꼭 필요! */
		duration(compare: DateInput): Duration {
			const durationResult = dayjs.duration(targetDate.diff(compare));

			return {
				milliseconds: targetDate.diff(compare, 'ms') % 1000,
				seconds: durationResult.seconds(),
				minutes: durationResult.minutes(),
				hours: durationResult.hours(),
				days: Math.floor(Math.abs(durationResult.asDays())),
				months: durationResult.months(),
				years: durationResult.years(),
			};
		},
	};
}

export default monsDate;