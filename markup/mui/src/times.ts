/**
 * @class 시간
 * @static
 */

import Datas from './datas';
import Utils from './utils';

export default class Times {

	/**
	 * 기본 시간(초)
	 */
	public static readonly FASTER = 0.1;
	public static readonly FAST = 0.2;
	public static readonly BASE = 0.4;
	public static readonly SLOW = 0.7;
	public static readonly SLOWER = 1;

	/**
	 * 시간 간격
	 * @public @static
	*/
	public static readonly stamp: TimeStamp = {
		on: Times.stampOn,
		off: Times.stampOff,
	};

	/** 시간 간격 목록 */
	private static stamper: TimeStampList = {};

	/**
	 * 시간 간격 저장
	 * @param { string } __key - 구분 고유 값
	 * @returns { number } - 시간 간격 밀리세컨드
	 */
	private static stampOn(__key: string): number {

		const stamps: number[] | undefined = Times.stamper[__key];
		let _timeGap = 0;

		if (stamps == null) Times.stamper[__key] = [window.performance.now()];
		else {
			stamps.push(window.performance.now());
			_timeGap = stamps[stamps.length - 1] - stamps[stamps.length - 2];
		}

		return _timeGap;

	}

	/**
	 * 시간 저장 종료
	 * @param { string } __key - 구분 고유 값
	 * @returns { number } 시간 간격 밀리세컨드
	 */
	private static stampOff(__key: string): number {

		const stamps: number[] | undefined = Times.stamper[__key];
		if (stamps == null) return 0;

		const _timeGap = window.performance.now() - stamps[stamps.length - 1];
		delete Times.stamper[__key];

		return _timeGap;

	}

	/**
	 * 지연 함수
	 * @public @static
	 */
	public static readonly delay: TimeDelay = {
		on: Times.delayOn,
		off: Times.delayOff,
	};

	/** 실행 중인 딜레이 목록 */
	private static delayer: TimeDelayList = {};
	/** _name이 없을 때 이름 중복을 피하기 위해 넘버링 이름으로 사용 */
	private static _delayCount = 0;

	/**
	 * 지연 함수 실행
	 * @param { T | string | unknown } __callback
	 * @param { TimeDelayOption } [__option]
	 * @returns { ReturnType<T> | T | unknown }
	 */
	public static delayOn<T extends (...rest: Parameters<T>) => ReturnType<T>>(__callback: T, __option?: TimeDelayOption): ReturnType<T>;
	public static delayOn<T>(__callback: string, __option?: TimeDelayOption): T;
	public static delayOn(__callback: unknown, __option?: TimeDelayOption): unknown;
	public static delayOn(__callback: unknown, __option?: TimeDelayOption): void {

		const option: Required<TimeDelayOption> = Datas.clone({
			_time: 1,
			_isSec: false,
			_name: ``,
			_isOverwrite: false,
			params: [],
		}, __option);
		const _time = option._time * ((option._isSec) ? 1000 : 1);
		const _name = (option._name.length > 0) ? option._name : `DELAY_${Times._delayCount++}`;
		let _is = false;

		const delayItem = Times.delayer[_name];
		if (delayItem) {
			if (option._isOverwrite) {
				clearTimeout(delayItem);
				delete Times.delayer[_name];
			}
			else _is = true;
		}

		if (_is) return;

		Times.delayer[_name] = setTimeout((): void => {

			Times.delayOff(_name);
			Utils.apply(__callback, option.params);

		}, _time);

	}

	/**
	 * 지연 함수 종료
	 * @param __name 구분 고유 값
	 */
	private static delayOff(__name: string): void {

		const delayItem = Times.delayer[__name];
		if (delayItem) {
			clearTimeout(delayItem);
			delete Times.delayer[__name];
		}

	}

}