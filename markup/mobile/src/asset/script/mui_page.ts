/**
 * 페이지 공통(old)
 * - mm 선언 필요 시 포함
 */

import Datas from '@markup/mui/src/datas';
import Doms from '@markup/mui/src/doms';
import Events from '@markup/mui/src/events';
import Is from '@markup/mui/src/is';
import Pages from '@markup/mui/src/pages';
import { Forms } from '@markup/mui/src/ui/forms';

/** 로딩 제거(크롬 페이지 뒤로가기 시 이전 링크 이동으로 생긴 로딩 제거) */
const windowUnloadHandler = (): void => Pages.loading.hide();
Events.bind.on(window, `unload`, windowUnloadHandler);

/** 폼 요소 */
// value, checked 속성을 변경할 때 change 이벤트가 실행되도록 기본 함수 변경
Forms.changeSetter(HTMLInputElement, [`checked`, `value`]);
Forms.changeSetter(HTMLSelectElement, [`value`, `selectedIndex`]);
Forms.changeSetter(HTMLOptionElement, [`selected`]);

// 포커스(모바일 키패드, 셀렉트 등 노출에 따른 스크롤 이동)
const formFocusHandler = (_e: FocusEvent, _data: unknown, _$el: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): void => {

	if (_$el instanceof HTMLInputElement && ![`text`, `password`, `email`, `number`, `search`, `tel`, `url`, `date`, `month`, `time`, `week`].includes(_$el.type)) return;
	if (Is.mobile(`ios`) && !(_$el instanceof HTMLSelectElement) && (_$el.readOnly || _$el.disabled)) Doms.focus.out(_$el);// ios에서 date 타입일 때 선택되는 이슈가 있어 포커스아웃 적용(접근성 탭이동 문제가 있을 경우 변경 필요)

	const focusClass = `S=focus`;

	switch (_e.type) {
		case `focusin`:
			if (_$el.hasAttribute(`data-text`)) document.documentElement.classList.add(focusClass);
			if (!_$el.hasAttribute(`autocomplete`)) _$el.setAttribute(`autocomplete`, `off`);

			if (Is.mobile()) {
				const $scroll = Doms.scroll.find(focusClass, true);

				// 안드로이드 포커싱 위치 스크롤
				if (Is.mobile(`android`) && !(_$el instanceof HTMLSelectElement) && $scroll.classList.contains(`mm_scroller`)) Doms.scroll.to(_$el, { scroller: $scroll, _margin: 50 + (Doms.find(`.mm_header`)[0]?.offsetHeight ?? 0) });

				// 모바일 화면 스크롤 시 포커스 해제
				const scrollFocusHandler = (): void => {

					const $focus = document.activeElement;
					if ($focus != null && Is.touch) {
						Doms.focus.out($focus);
						Events.bind.off($scroll, `scroll`, scrollFocusHandler);
					}

				};
				Events.bind.on($scroll, `scroll`, scrollFocusHandler);
			}
			break;
		case `focusout`:
			document.documentElement.classList.remove(focusClass);
			break;
	}

};
Events.delegate.on(document, `[data-text], [data-select]`, `focusin focusout`, formFocusHandler);

/** 레디 */
const readyHandler = () => {

	// 아이프레임
	if (frameElement != null) {
		Events.observer.call(Events.type[`frame_ready`], { data: { this: window } });

		// 컨텐츠 아이프레임 리사이즈
		// if (Is.layout(`frame`)) Pages.frameResize(undefined, { _isLoad: true });// ! mm을 사용하지 않을 때 mm.대신 클래스를 직접 호출할 수 있는 방법은?
	}

	// autofill 감지
	const textAutofillHandler = (_e: AnimationEvent): void => {

		const $this = _e.currentTarget as HTMLInputElement;
		const $text = $this.closest(`.mm_form-text`);
		const onClass = `S=text-on`;
		if ($text == null) return;

		switch (_e.animationName) {
			case `autofill-on`:
				$text.classList.add(onClass);
				break;
			case `autofill-cancel`:
				if ($this.value.trim().length === 0) $text.classList.remove(onClass);
				break;
		}

	};
	Events.bind.on(`[data-text]`, `animationstart`, textAutofillHandler);

	// a 링크
	const linkClickHandler = (_e: MouseEvent): void => {

		_e.preventDefault();

		const $this = _e.currentTarget as HTMLAnchorElement;
		if ($this.target.toLowerCase() === `blank`) return;

		const data: PageLinkOption = Datas.clone({
			openEl: $this,
			type: ``,
			frameId: ``,
			frameName: ``,
			step: 1,
			// isCloseBefore: false,
			// isLinkStage: true,
		}, Doms.data.get($this, `data-href`));
		if (data.type!.trim().length === 0) return;

		const attrHref = $this.getAttribute(`href`);
		const href = $this.href;
		if (data.type === `link`) {
			if (attrHref?.replace(`#`, ``).trim().length === 0 || attrHref?.toLowerCase().includes(`javascript:`)) return;

			if (href.split(`#`)[0] === location.href.split(`#`)[0]) data.type = `reload`;// 링크가 같으면 reload로 변경
			if (data.type === `reload` && href.includes(`#`)) data.type = `anchor`;// 링크가 같고 #이 있으면 anchor로 변경
		}

		// 외부링크
		if ([`link`, `popup`].includes(data.type!) && !href.includes(location.host)) {
			window.open(href);// 새 창 열림

			return;
		}

		Pages.link(href, data);

	};
	Events.delegate.on(document, `a[data-href]`, `click`, linkClickHandler);

};
Events.ready(readyHandler);