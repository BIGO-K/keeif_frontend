/**
 * @class 이미지
 * @static
 */

import Doms from './doms';

export default class Images {

    /**
     * 투명 1px gif
     * @public @static
     */
	public static readonly EMPTY = `data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==`;

    /**
     * 없음 이미지
     * @public @static
     * @param { HTMLElement } __$element - 단일 요소
     * @param { string } [__classNone] `default: ico_none` - 없음 아이콘 클래스
     */
	public static none(__$element: HTMLElement, __classNone?: string): void {

		const _isBlock = __$element.closest(`[data-mui]`) != null;
		const _classNone = __classNone ?? `${(_isBlock) ? `uico_` : `ico_`}none`;
		const $none = Doms.create(`<i class="${_classNone}"></i>`)[0];
		let $parent = __$element.parentElement;

		if ($parent == null) return;

		switch (__$element.tagName) {
			case `I`:
				__$element.classList.add(_classNone);
				break;
			case `IMG`:
				__$element.after($none);
				$parent.setAttribute(`data-ir`, __$element.getAttribute(`alt`) ?? ``);// 이미지 alt를 부모에 전달
				__$element.remove();
				break;
			default:
				__$element.append($none);
				$parent = __$element;
		}

		$parent.classList.add(`${(_isBlock) ? `mui_` : `mm_`}image_none`);

	}

}