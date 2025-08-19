'use strict';

/**
 * 페이지 공통
* */

mm._isPublish = false;// 퍼블 테스트
mm._isModal = false;// 모달
mm._isPopup = false;// 팝업
mm._isFrame = false;// 컨텐츠 아이프레임(스크롤 없음, 높이 자동)
mm._isError = false;// 에러
// mm._isPrint = mm.is.layout('print');// 프린트
mm._isReview = false;// 리뷰

/** 최초(레디 전) */
(function() {

	/*
	// 우클릭 및 드래그 방지
	function returnHandler(__e) {

		__e.preventDefault();

	}

	window.addEventListener('contextmenu', returnHandler);
	// document.addEventListener('selectstart', returnHandler);// 에디터 입력 이슈
	document.addEventListener('dragstart', returnHandler);
	*/

	// 로딩 제거(크롬 페이지 뒤로가기 시 이전 링크 이동으로 생긴 로딩 제거)
	mm.event.on(window, 'unload', function(__e) {

		mm.loading.hide();

	});

})();
/** 최초(레디 전) */

/** 레디 */
mm.ready(function() {

	mm._isPublish = location.host.startsWith('publish') || location.host.startsWith('127.0.0.1') || location.host.startsWith('localhost');// 퍼블 테스트
	mm._isModal = mm.is.layout('modal');// 모달
	mm._isPopup = mm.is.layout('popup');// 팝업
	mm._isFrame = mm.is.layout('frame');// 컨텐츠 아이프레임(스크롤 없음, 높이 자동)
	mm._isError = mm.is.layout('error');// 에러
	// mm._isPrint = mm.is.layout('print');// 프린트
	mm._isReview = mm.is.layout('review');// 리뷰

	// 아이프레임
	if (frameElement) {
		mm.observer.dispatch(mm.event.type.frame_ready, { data: { this: window } });

		// 컨텐츠 아이프레임 리사이즈
		if (mm._isFrame) mm.frameResize(null, { _isLoad: true });
	}

	// 컴포넌트
	mm.ui.update();

	// autofill 감지
	mm.event.off('[data-text]', 'animationstart');
	mm.event.on('[data-text]', 'animationstart', function(__e) {

		var $text = this.closest('.mm_form-text');
		if (!$text) return;

		switch (__e.animationName) {
			case 'autofill-on':
				$text.classList.add('S=text-on');
				break;
			case 'autofill-cancel':
				if (this.value.trim().length === 0) $text.classList.remove('S=text-on');
				break;
		}

	});

	// 터치이벤트 확인
	mm.event.off(document, 'mousedown mouseup');
	mm.event.on(document, 'mousedown mouseup', function(__e) {

		switch (__e.type) {
			case 'mousedown':
				mm._isTouch = true;
				break;
			case 'mouseup':
				mm._isTouch = false;
				break;
		}

	});

	// a 링크
	mm.delegate.off(document, 'a[data-href]', 'click');
	mm.delegate.on(document, 'a[data-href]', 'click', function(__e) {

		if (this.target.toLowerCase() === 'blank') return;// target blank 제외

		// mm.data에 저장할 기본 값
		var initial = {
			openEl: this, // ? :element - 클릭한 요소
			_type: null, // ? :string - link, popup, modal, anchor, back, forward, reload
			_frameId: null, // ? :string - popup, modal을 iframe으로 노출할 때 id 값
			_frameName: null, // ? :string - popup, modal을 iframe으로 노출할 때 name 값
			// _isCloseBefore: false,// ? :boolean - type 값이 link/popup일 때 현재 팝업 요소를 닫음(교체)
			// _isLinkStage: true,// ? :boolean - type이 link일 때 true(스테이지에서 실행 mm.popup.open), false(현재 창에서 실행 location.href)
			_step: 1, // ? :number - mm.history.back/forward 이동 수
			// * 이 외 mm.link, mm.scroll.to  등에서 사용하는 변수를 추가로 적용하여 사용
		};

		var data = mm.data.get(this, 'data-href', { initial: initial });
		if (mm.is.empty(data)) data = mm.data.set(this, 'data-href', { initial: initial });
		var _attrHref = this.getAttribute('href');
		var _href = this.href;

		if (!data._type) return false;
		if (data._type === 'link') {
			if (_attrHref.replace('#', '').trim().length === 0 || _attrHref.toLowerCase().includes('javascript:')) return false;

			if (_href.split('#')[0] === location.href.split('#')[0]) data._type = 'reload';// 링크가 같으면 reload로 변경
			if (data._type === 'reload' && _href.includes('#')) data._type = 'anchor';// 링크가 같고 #이 있으면 anchor로 변경
		}

		__e.preventDefault();

		// 외부링크
		if (['link', 'popup'].includes(data._type)) {
			if (!_href.includes(location.host)) {
				// 프로토콜이 https 일 때 외부 http 경로의 iframe이 보안상 이유로 연결 안됨
				// mm.popup.open('popup_externalLink.html?url=' + _href);
				window.open(_href);// 새 창 열림

				return false;
			}
		}

		switch (data._type) {
			case 'reload':
				location.reload();// location.reload(true);
				break;
			case 'back':
				mm.history.back(data._step);
				break;
			case 'forward':
				mm.history.forward(data._step);
				break;
			case 'anchor':
				mm.scroll.to(_attrHref, data);
				break;
			case 'modal':
			case 'popup':
				// data.openEl = this;
			case 'link':
			case 'home':
				mm.link(`${window.env_path ?? ''}` + _attrHref, data);
				break;
		}

	});

	// 어드민 사용 추가
	(function() {

		/** gnb */
		var $gnb = mm.find('.mm_gnb')[0];

		mm.event.off(mm.find('.mm_gnb-view-dim', $gnb)[0], 'click');
		mm.event.on(mm.find('.mm_gnb-view-dim', $gnb)[0], 'click', function() {

			if ($gnb.classList.contains('S=switch-on')) $gnb.classList.remove('S=switch-on');
			mm.scroll.on();

		});
		// > gnb

		/** 사이드바 */
		var _classSticky = 'S=sidebar-sticky';
		var $sidebar = mm.find('.mm_sidebar')[0];

		// mm.event.off(window, 'load scroll resize');
		mm.event.on(window, 'load scroll resize', function(__e) {

			if ($sidebar) {
				var $inner = $sidebar.children[0];
				var offset = mm.element.offset($sidebar);
				if (offset.top > 0) {
					$sidebar.classList.remove(_classSticky);
					mm.element.style($inner, { 'margin-left': '', 'width': '' });
				}
				else {
					$sidebar.classList.add(_classSticky);
					mm.element.style($inner, { 'width': mm.number.unit($sidebar.offsetWidth) });

					if (__e.type === 'scroll') mm.element.style($inner, { 'margin-left': mm.number.unit(-window.pageXOffset) });
				}
			}

		});
		// > 사이드바

		/** 순서변경 */
		(function() {

			var initial = {
				_isHideFirst: true, // ? :booean - 첫 번째 요소의 내용 숨김, mm_form_box에서 false로 사용
				onChange: null, // ? :function
				onChangeParams: [], // ? :array
			};
			var _dataName = 'data-sort';
			var _classSort = 'S=sortable';
			var _classExcepted = 'S=sortable-excepted';// 스크립트로 tbody에 생성
			var defaultLists = [];

			mm.delegate.off(document, '[data-sort]', 'click');
			mm.delegate.on(document, '[data-sort]', 'click', function(__e) {

				__e.preventDefault();

				var $ui = this.closest('.mm_table_box, .mm_form_box');
				if (!$ui) return false;

				var $sort = mm.find('.mm_table, .mm_form', $ui)[0];
				var $sortList = mm.find('tbody', $sort)[0];
				var $sortItems = mm.find('> tr', $sortList);
				var $sortExcepts = mm.find('.S=sortable-excepted', $ui);
				var data = mm.data.get(this, _dataName);
				if (mm.is.empty(data)) data = mm.data.set(this, _dataName, { initial: initial });

				$ui.classList.add(_classSort);

				var $checks = mm.find('.S=checked', $ui);
				mm.class.remove($checks, 'S=checked');
				mm.class.add($checks, 'S=checked-temp');

				var $editables = mm.find('.text_editable', $sort);
				mm.element.attribute($editables, { 'contenteditable': false });

				// 순서편집 제외
				if ($sortExcepts.length > 0) {
					var $excepted = mm.element.create(mm.string.template('<tbody class="${CLASS}"></tbody>', { CLASS: _classExcepted }));
					mm.element.after($sortList, $excepted);
					mm.element.append($excepted, $sortExcepts);
				}

				var $firstItems = mm.find('> td:first-child, > th:first-child', $sortItems);
				var _checkHtml = mm.string.template([
					'<label class="mm_form-check S=check-sortable">',
					'	<input type="checkbox" data-check>',
					'	<b class="mm_block">',
					'		<i class="ico_form-check"></i>',
					'		<span class="text_label mm_ir-blind">항목선택</span>',
					'	</b>',
					'</label>',
				]);

				if (data._isHideFirst) {
					mm.class.add(mm.element.wrap(mm.find('> .mm_table-item', $firstItems), 'div'), 'mm_table-hidden');
					mm.element.append($firstItems, _checkHtml);
					mm.class.add(mm.element.wrap(mm.find('.S=check-sortable', $firstItems), 'div'), 'mm_table-item');
				}
				else mm.element.prepend($firstItems, _checkHtml);

				mm.form.update($sortList);

				defaultLists.length = 0;
				_.forEach(mm.find('> tr', $sortList), function(__$tr, __index) {

					defaultLists[__index] = __$tr;
					if (__$tr.offsetHeight < 10) mm.element.remove(mm.find('.S=check-sortable', __$tr.firstElementChild));

				});

				// 버튼 생성
				var $btnEdits = mm.find('[data-sort]', $ui);
				mm.element.after($btnEdits, mm.string.template([
					'<button type="button" class="mm_btn T=line btn_sort-cancel"><i class="ico_sortable-cancel"></i><b>순서편집 취소</b></button>',
					'<button type="button" class="mm_btn T=secondary btn_sort-complete"><i class="ico_sortable-complete"></i><b>순서편집 적용</b></button>',
					'<button type="button" class="mm_btn btn_sort-top"><b>최상단 이동</b></button>',
					'<button type="button" class="mm_btn btn_sort-bottom"><b>최하단 이동</b></button>',
					'<button type="button" class="mm_btn btn_sort-up"><b>위로 1칸 이동</b></button>',
					'<button type="button" class="mm_btn btn_sort-down"><b>아래로 1칸 이동</b></button>',
				]));

				var $buttons = mm.siblings($btnEdits, '[class*="btn_sort-"]');

				mm.event.off($buttons, 'click');
				mm.event.on($buttons, 'click', function() {

					// 초기화
					function resetSortable() {

						mm.event.off($buttons, 'click');
						mm.element.remove($buttons);

						$ui.classList.remove(_classSort);
						mm.class.remove(mm.find('.S=checked', $ui), 'S=checked');

						var $temps = mm.find('.S=checked-temp');
						mm.class.remove($temps, 'S=checked-temp');
						mm.class.add($temps, 'S=checked');

						mm.element.append($sortList, $sortExcepts);
						mm.element.remove(`tbody.${_classExcepted}`, $sort);

						if (data._isHideFirst) {
							mm.element.remove(mm.find('td:first-child > .mm_table-item', $sortList));
							mm.element.unwrap(mm.find('td:first-child .mm_table-hidden', $sortList));
						}
						else mm.element.remove(mm.find('th:first-child .S=check-sortable', $sortList));

						mm.form.update($sortList);

					}

					var $clicked = this;
					var $sortItems = mm.find('> tr', $sortList);

					// 순서편집 취소
					if ($clicked.classList.contains('btn_sort-cancel')) {
						mm.bom.confirm('순서변경을 취소하시겠습니까?', function(__is) {

							if (__is === true) {
								_.forEach(defaultLists, function(__$list) {

									mm.element.append($sortList, __$list);

								});
								resetSortable();
								mm.element.attribute($editables, { 'contenteditable': true });
							}

						});
					}
					// 순서편집 적용
					else if ($clicked.classList.contains('btn_sort-complete')) {
						mm.bom.confirm('순서변경을 적용하시겠습니까?', function(__is) {

							if (__is === true) {
								resetSortable();
								mm.apply(data.onChange, $clicked, data.onChangeParams);
								mm.element.attribute($editables, { 'contenteditable': true });
							}

						});
					}
					// 순서편집 제어
					else {
						var sortables = _.filter($sortItems, function(__$item) {

							var $sortCheck = mm.find('.S=check-sortable [data-check]', __$item)[0];

							return $sortCheck && $sortCheck.checked;

						});
						if ($sortItems.length === sortables.length) return;

						var _isForm = $sort.classList.contains('mm_form');// 첫 번째 tr 요소 샘플 숨김 확인
						var _index;

						// 위로 1칸 이동
						if ($clicked.classList.contains('btn_sort-up')) {
							_index = mm.element.index($sortItems, sortables[0]);
							if (_index === 0 || (_isForm && _index === 1)) return;

							_.forEach(sortables, function(__$item) {

								mm.element.before(__$item.previousElementSibling, __$item);

							});
						}
						// 아래로 1칸 이동
						else if ($clicked.classList.contains('btn_sort-down')) {
							_index = mm.element.index($sortItems, sortables[sortables.length - 1]);
							if (_index === $sortItems.length - 1) return;

							_.forEach(_.reverse(sortables.concat()), function(__$item) {

								mm.element.after(__$item.nextElementSibling, __$item);

							});
						}
						// 최상단 이동
						else if ($clicked.classList.contains('btn_sort-top')) {
							_index = mm.element.index($sortItems, sortables[0]);
							if (sortables.length === 1 && (_index === 0 || _isForm && _index === 1)) return;

							var _targetIndex = (_isForm) ? 1 : 0;
							var $target = mm.find('> tr', $sortList)[_targetIndex];

							if ($target === sortables[0]) {
								$target = sortables.shift();
								mm.element.after($target, sortables);
							}
							else mm.element.before($target, sortables);
						}
						// 최하단 이동
						else {
							_index = mm.element.index($sortItems, sortables[sortables.length - 1]);
							if (sortables.length === 1 && _index === $sortItems.length - 1) return;

							mm.element.append($sortList, sortables);
						}
					}

				});

			});

		})();
		// > 순서변경

		/** 테이블 이미지 미리보기 */
		mm.delegate.off(document, '.btn_preview-toggle', 'click');
		mm.delegate.on(document, '.btn_preview-toggle', 'click', function() {

			var $table = this.closest('.mm_table');
			var $toggleBtn = mm.find('.btn_preview-toggle', $table);
			var $previewIcon = mm.find('i[class*="ico_image-"]', $toggleBtn);

			$table.classList.toggle('S=preview-on');
			mm.class.remove($previewIcon, ['ico_image-show', 'ico_image-hide']);

			if (mm.class.every($table, 'S=preview-on')) {
				mm.element.attribute($toggleBtn, { 'title': '이미지 미리보기 끄기' });
				mm.class.add($previewIcon, 'ico_image-hide');
				mm.preload.destroy($table);
				mm.preload.update($table);
			}
			else {
				mm.element.attribute($toggleBtn, { 'title': '이미지 미리보기 켜기' });
				mm.class.add($previewIcon, 'ico_image-show');
			}

		});
		// > 테이블 이미지 미리보기

	})();

});

/** 로드 */
mm.load(function() {

	// 팝업 리사이즈
	if (mm._isPopup) mm.delay.on(mm.popup.resize);
	else if (mm._isModal) mm.modal.resize({ _isLoad: true });

	// 컨텐츠 아이프레임 리사이즈
	if (mm._isFrame) mm.frameResize(null, { _isLoad: true });

	// 익스/엣지 브라우저에서 새로고침 할 때 라디오/체크박스의 기존 선택을 물고있는거나 날려버리는 이슈가 있어 초기화 후 재연결
	// ! 익스는 제외하고, 엣지 확인
	if (mm.is.ie()) {
		// var $checked = mm.find('[checked]');
		// _.forEach($checked, function (__$check) {

		// 	__$check.checked = true;

		// });

		// mm.form.update($checked);// mm.delay 필요?
	}

	// mm을 수정하지 못하도록 적용
	// Object.freeze(mm);

});

/** 테이블 */
mm.table = (function() {

	var initial = {
		tableMO: null, // table mutation observer(childList, subtree)
		contentMO: null, // contenteditable mutation observer(characterData, caracterDataOldValue)
	};

	// UI 고유 객체
	var base = {
		get _dataName() { return 'data-table'; }, // 데이타 속성 이름
		// 테이블 요소
		getTableElement: function(__element) {

			const $elements = (__element != null) ? mm.find(__element) : mm.find(`[${base._dataName}]`);

			return [...new Set(Object.values($elements).flatMap(($el) => {

				if (`hasAttribute` in $el && $el.hasAttribute(base._dataName)) return $el;
				else return Object.values($el.querySelectorAll(`[${base._dataName}]`));

			}))].filter(($el) => $el != null);

		},
		// 테이블 고정영역 사이즈 지정
		setTableFixed: function(__$table) {

			const $scroller = __$table.children[0];
			if ($scroller.offsetWidth >= $scroller.scrollWidth) return;// 테이블 내용이 스크롤 영역보다 작으면 fixed 해제

			const $theadDatas = Object.values(__$table.querySelectorAll(`thead .S\\=table-fixed`));
			for (const $th of $theadDatas) {
				$th.getElementsByClassName(`mm_table-item`)[0].style.width = ``;
				$th.style.left = ``;
			}

			const styles = [];
			for (const $th of $theadDatas) {
				const style = { width: `${Math.ceil(parseFloat(getComputedStyle($th).width))}px`, left: `${$th.offsetLeft}px` };
				styles.push(style);

				$th.getElementsByClassName(`mm_table-item`)[0].style.width = style.width;
				$th.style.left = style.left;
			}

			const $tbodyDatas = Object.values(__$table.querySelectorAll(`tbody .S\\=table-fixed`));
			for (const [_i, $td] of $tbodyDatas.entries()) {
				const _index = _i % styles.length;
				$td.getElementsByClassName(`mm_table-item`)[0].style.width = styles[_index].width;
				$td.style.left = styles[_index].left;
			}

		},
		// contenteditable 이벤트 연결
		setEditable: function(__$elements, __contentMO) {

			const _classFocus = `S=focus`;
			const _classChanged = `S=changed`;
			const _classToggle = `S=on`;

			for (const $edit of __$elements) {
				const editData = mm.data.get($edit, `data-editable`, true);
				const _byte = editData._byte ?? 0;
				const $text = $edit.getElementsByClassName(`text_editable`)[0];
				let _value = $text.innerText;

				__contentMO.observe($text, { characterData: true, characterDataOldValue: true, subtree: true, childList: true });

				const $btnClear = mm.element.create(`<button type="button" class="btn_text-clear" style="z-index:1;"><i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b></button>`)[0];
				mm.event.on($btnClear, `click`, function editClearHandler(__e) {

					$text.textContent = ``;
					$text.focus();

					mm.event.dispatch($text, `change`);

				});

				// 포커스
				mm.event.on($text, `focusin focusout keydown input change`, function editFocusHandler(__e) {

					switch (__e.type) {
						case `keydown`:
							if (__e.keyCode === 13) __e.preventDefault();// 엔터 방지
							break;
						case `focusin`:
							$edit.classList.add(_classFocus);
							$text.after($btnClear);
							break;
						case `focusout`:
							$text.textContent = $text.innerText;
						case `input`:
						case `change`:
							if ($text.innerText.length > 0) $edit.classList.add(_classToggle);
							else $edit.classList.remove(_classToggle);

							// 초기 값과 다른 부분 표시
							if (_value !== $text.textContent) $edit.classList.add(_classChanged);
							else $edit.classList.remove(_classChanged);
							break;
					}

					// 글자수 제한
					if (_byte > 0 && [`input`, `change`].includes(__e.type)) {
						let _value = $text.innerText;
						if (_value.length > _byte) {
							$text.textContent = _value.substring(0, _byte);

							// caret이 앞으로 맨 앞으로 이동하는 이슈로 뒤로 이동 후 focus 적용
							const range = document.createRange();
							range.selectNodeContents($text);
							range.collapse(false);

							const selection = window.getSelection();
							selection.removeAllRanges();
							selection.addRange(range);
							$text.focus();


						}
					}

				}, { _isOverwrite: true });

				mm.event.on($edit, `focusout`, function editFocusoutHandler(__e) {

					if (!$edit.contains(__e.relatedTarget)) {
						$edit.classList.remove(_classFocus);
						$btnClear.remove();
					}

				});

				mm.event.dispatch($text, `change`);
			}

		},
	};

	// private
	(function() {

		mm.ready(function() {

			mm.ui.add('table');// 컴포넌트 업데이트에 항목 추가
			mm.table.update(document);// 최초 연결

		});

	})();

	// public
	return {
		// - 테이블 업데이트(위치 고정 및 체크박스)
		update: function(__elements) {

			const $elements = Object.values(base.getTableElement(__elements));
			if ($elements.length === 0) return;

			for (const $table of $elements) {
				if (!mm.is.display($table)) return;

				let data = mm.data.get($table, base._dataName);
				if (mm.is.empty(data)) data = mm.data.set($table, base._dataName, { initial: initial });

				// 체크박스 영역 표시
				const $colCheck = $table.getElementsByClassName(`col_check`)[0];
				if ($colCheck != null) {
					const _checkIndex = mm.element.index($colCheck.parentElement.children, $colCheck);

					mm.delegate.off($table, `[type="checkbox"]`, `update change`, `tableCheckHandler`);
					mm.delegate.on($table, `[type="checkbox"]`, `update change`, function tableCheckHandler() {

						const $check = this;
						const $closest = $check.closest(`th, td`);
						if (mm.element.index($closest.parentElement.children, $closest) !== _checkIndex) return;

						const _classChecked = `S=checked`;
						const checkData = mm.data.get($check).check;
						const _checkAll = checkData && checkData._type === `check_all`;
						let $tr = (_checkAll) ? Object.values($table.querySelectorAll(`tbody tr`)).filter(($el) => !$el.contains($el.getElementsByClassName(`text_check-none`)[0])) : $check.closest(`tr`);

						// rowspan 처리
						if (!_checkAll) {
							const _rowspan = $closest.getAttribute(`rowspan`) ?? 1;
							if (_rowspan > 1) {
								$tr = [$tr];
								while ($tr.length < _rowspan) $tr.push($tr[$tr.length - 1].nextElementSibling);
							}
						}

						if ($check.checked) mm.class.add($tr, _classChecked);
						else mm.class.remove($tr, _classChecked);

					});
				}

				mm.form.update($table);

				// 숫자, 가격 콤마
				// const $num = mm.find(`.text_comma, .text_price`, $table);
				// for (const $item of $num) {
				// 	const _text = $item.innerText;
				// 	$item.textContent = (_text.length > 0) ? mm.number.comma(_text) : 0;
				// }

				// 빈 칸
				// * 항목이 많을 때 퍼포먼스 이슈로 css empty로 적용, 공백으로 안나오는 부분은 개발에서 수정
				// const $items = Object.values($table.getElementsByClassName(`mm_table-item`));
				// for (const $el of $items) {
				// 	if ($el.closest(`tfoot`) != null) continue;// tfoot 제외

				// 	const _trim = $el.innerText;
				// 	if (_trim.length === 0 || _trim === `null`) $el.textContent = `-`;

				// }

				// 고정영역 사이즈 지정
				base.setTableFixed($table);

				mm.event.on(window, `resize`, function tableResizeHandler() {
					base.setTableFixed($table);
				}, { _isOverwrite: true });

				// 에디터블 항목
				const $editables = Object.values($table.querySelectorAll(`[data-editable]`));

				if ($editables.length > 0) {
					// 요소 감지
					if (data.tableMO == null) {
						data.tableMO = new MutationObserver((__records) => {

							for (const record of __records) {
								/*
								const _type = (record.addedNodes.length > 0) ? `add` : (record.removedNodes.length > 0) ? `remove` : undefined;
								const $nodes = (_type === `add`) ? record.addedNodes : (_type === `remove`) ? record.removedNodes : [];
								*/
								for (const $el of record.addedNodes) {
									if (!($el instanceof Element)) continue;

									switch ($el.tagName) {
										case `TABLE`:
										case `THEAD`:
										case `TBODY`:
										case `TFOOT`:
											mm.table.update($table);
											break;
										case `TR`:
										case `TD`:
											mm.form.update($el);
											base.setEditable(Object.values($el.querySelectorAll(`[data-editable]`)), data.contentMO);
											break;
									}
								}
							}

						});
						data.tableMO.observe($table, { childList: true, subtree: true });
					}

					// 텍스트 감지
					if (data.contentMO == null) {
						data.contentMO = new MutationObserver((__records) => {

							for (const record of __records) {
								// innerText, textContent로 변경하면 childList, record.target, record.removedNodes(이전 타겟 및 내용), record.addedNodes(현재 타켓 및 내용)
								// 키보드로 변경하면 characterData, record.target.parentElement, oldValue(이전 내용)
								// const $target = (record.type === `childList`) ? record.target : record.target.parentElement;
								if (record.type === `childList`) mm.event.dispatch(record.target, `change`);
							}

						});
					}
				}

				base.setEditable($editables, data.contentMO);

			}

		},
		// - 테이블 리사이즈 고정
		resize: function(__elements) {

			const $elements = Object.values(base.getTableElement(__elements));
			if ($elements.length === 0) return;

			for (const $table of $elements) {
				if (!mm.is.display($table)) return;

				base.setTableFixed($table);
			}

		},
	};

})();
