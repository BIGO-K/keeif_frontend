/**
 * 날짜값으로 들어올수 있는 TYPE
*/
type DateInput = Date | string | number;

/**
 * 시간단위별 날짜 비교 결과
 */
type Duration = {
    [unit in Exclude<UnitTypeLongPlural, 'dates'>]: number
};

/**
 * 시간단위
*/
type UnitTypeShort = 'd' | 'D' | 'M' | 'y' | 'h' | 'm' | 's' | 'ms'
type UnitTypeLong = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year' | 'date'
type UnitTypeLongPlural = 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'months' | 'years' | 'dates'
type UnitType = UnitTypeLong | UnitTypeLongPlural | UnitTypeShort;
type OpUnitType = UnitType | 'week' | 'weeks' | 'w';
type QUnitType = UnitType | 'quarter' | 'quarters' | 'Q';
type ManipulateType = Exclude<OpUnitType, 'date' | 'dates'>;

/**
 * 날짜 Helper 인터페이스
 */
type DateHelper = {
    toDate(): Date
    /**
     * 날짜 유효 여부 검사
     * @returns 날짜 유효 여부
     */
    isValid(): boolean
    /**
     * 날짜 format
     * @param format format 형태
     * @returns format된 날짜 string
     */
    format(format: string, isKo?: boolean): string
    /**
     * 날짜 비교: 비교대상(targetDate)이 비교기준보다 이전인지 여부를 계산
     * @param compare 비교기준
     * @param unit 비교단위 (기본값 millisecond)
     * @returns 비교대상이 비교기준보다 이전인지 여부
     */
    isBefore(compare: DateInput, unit?: OpUnitType): boolean
    /**
     * 날짜 비교: 비교대상(targetDate)이 비교기준보다 이후인지 여부를 계산
     * @param compare 비교기준
     * @param unit 비교단위 (기본값 millisecond)
     * @returns 비교대상이 비교기준보다 이후인지 여부
     */
    isAfter(compare: DateInput, unit?: OpUnitType): boolean
    /**
     * 날짜 비교: 비교대상(targetDate)이 비교기준과 동일한지 여부를 계산
     * @param compare 비교대상
     * @param unit 비교단위 (기본값 millisecond)
     * @returns 비교대상이 비교기준과 동일한지 여부
     */
    isSame(compare: DateInput, unit?: OpUnitType): boolean
    /**
     * 날짜 비교: 비교대상(targetDate)이 비교기준보다 이전이거나 같은지 여부를 계산
     * @param compare 비교기준
     * @param unit 비교단위 (기본값 millisecond)
     * @returns 비교대상이 비교기준보다 이전이거나 같은지 여부를 계산
     */
    isSameOrBefore(compare: DateInput, unit?: OpUnitType): boolean
    /**
     * 날짜 비교: 비교대상(targetDate)이 비교기준보다 이후거나 같은지 여부를 계산
     * @param compare 비교기준
     * @param unit 비교단위 (기본값 millisecond)
     * @returns 비교대상이 비교기준보다 이후거나 같은지 여부
     */
    isSameOrAfter(compare: DateInput, unit?: OpUnitType): boolean
    /**
     * 날짜 비교: 비교대상(targetDate)와 비교기준의 시간차 계산
     * @param compare 비교기준
     * @param unit 단위 (기본값 millisecond)
     * @returns 비교대상(targetDate)와 비교기준의 시간차
     */
    diff(compare: DateInput, unit?: QUnitType | OpUnitType): number
    /**
     * 주어진 날짜(targetDate)의 시간단위에 해당하는 값을 리턴
     * month의 경우 0~11의 값을 리턴
     * @param unit 시간단위
     * @example dateHelper('2023-08-18').get('D') // 18
     * @returns
     */
    get(unit: UnitType): number
    /**
     * 날짜 계산: 주어진 날짜(targetDate)에 주어진 값만큼 미래의 날짜 계산
     * @param amount 더할 값
     * @param unit 더할 단위
     * @example dateHelper('2023-08-18').add(1, 'day')
     * @returns
     */
    add(amount: number, unit?: ManipulateType): DateHelper
    /**
     * 날짜 계산: 주어진 날짜(targetDate)에 주어진 값만큼 과거의 날짜 계산
     * @param amount 뺄 값
     * @param unit 뺄 단위
     * @example dateHelper('2023-08-18').subtract(1, 'day')
     * @returns
     */
    subtract(amount: number, unit: ManipulateType): DateHelper
    /**
     * 날짜 계산: 주어진 날짜에서 주어진 단위의 시작 날짜 계산
     * @param unit 시간단위
     * @example dateHelper('2023-08-18').startOf('month') // 2023-08-01
     * @returns
     */
    startOf(unit: OpUnitType): DateHelper
    /**
    * 날짜 계산: 주어진 날짜에서 주어진 단위의 마지막 날짜 계산
    * @param unit 시간단위
    * @example dateHelper('2023-08-18').endOf('month') // 2023-08-31
    * @returns
    */
    endOf(unit: OpUnitType): DateHelper
    /**
     * 날짜 비교: 비교대상(targetDate)와 비교기준의 시간차를 단위별로 리턴
     * @param compare 비교기준
     * @returns
     */
    duration(compare: DateInput): Duration
}

