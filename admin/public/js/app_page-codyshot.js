'use strict';

//**
//** 코디샷 이미지 링크 설정
//**

function imageLinkSet() {

	var $container = this.closest('.m_display-codyshot');
	var fileData = mm.data.get(mm.find('[data-file]', $container)[0]).file;

	if (!$container) return;

	var $pointerTable = mm.find('.mm_table_box', $container)[0];
	var $btnAdd = mm.find('.btn_pointer-add', $container);
	var $preview = mm.find('.m_display-codyshot-preview', $container)[0];
	var $previewImage = mm.find('.m\\.\\.\\.preview-image', $preview)[0];
	var $pointerBox = mm.find('.m\\.\\.\\.preview-pointer', $preview)[0];

	var _classOn = 'S=point-on';
	var _classLoad = 'S=image-load';

	// 이미지 로드
	mm.element.remove(mm.find('.mm_bg-cover', $previewImage));

	if (fileData.file.result) {
		mm.element.append($previewImage, mm.string.template('<i class="mm_bg-cover" style="background-image:url(${FILE})"></i>', { FILE: fileData.file.result }));
		mm.class.add($previewImage, _classLoad);
		mm.element.attribute($btnAdd, { 'disabled': false });
	}
	else {
		mm.class.remove($pointerTable, _classOn);
		mm.class.remove($previewImage, _classLoad);
		mm.element.attribute($btnAdd, { 'disabled': true });

		$pointerBox.innerHTML = '';
		mm.find('tbody', $pointerTable)[0].innerHTML = '';
	}

	// 드래그 이벤트
	var drag = {
		update: function (__$container) {

			var $groups = mm.find('.btn_pointer', $pointerBox);
			var $tableRows = mm.find('tbody > tr', $container);

			if (!$groups[0]) return;

			_.forEach($groups, function (__$btnPointer, __index) {

				var $btnPointer = __$btnPointer;
				var $tableRow = mm.find('#dev_point_' + Number(__index + 1));

				// 링크 박스 위치 이동
				mm.event.on($btnPointer, 'mousedown', function(__e) {

					var $pointer = this;
					var $groups = mm.find('.btn_pointer', $pointerBox);

					var _pointerX = $pointer.offsetLeft;
					var _pointerY = $pointer.offsetTop;
					var _mouseStartX = __e.pageX;
					var _mouseStartY = __e.pageY;

					mm.class.remove($groups, _classOn);
					mm.class.add($pointer, _classOn);

					mm.class.remove($tableRows, _classOn);
					mm.class.add($tableRow, _classOn);

					mm.event.on($pointerBox, 'mousemove', function pointerPositionChange(__e) {

						var _top = Math.max(Math.min(__e.pageY - _mouseStartY + _pointerY, $pointerBox.offsetHeight), 0);
						var _left = Math.max(Math.min(__e.pageX - _mouseStartX + _pointerX, $pointerBox.offsetWidth), 0);

						mm.element.style($pointer, { 'top': mm.number.unit(_top), 'left': mm.number.unit(_left) });

						drag.result($pointer, $tableRow);

					});

					mm.event.on(document, 'mouseup mouseleave', function (__e) {

						mm.event.off($pointerBox, 'mousemove', 'pointerPositionChange');

					}, { _isOnce: true });

				});

				// 링크 박스 입력폼
				mm.delegate.on($tableRow, '.text_editable[class*="S=position"]', 'focusout', function (__e) {

					var $editables = this;
					var _value = Number($editables.innerText);

					if (_value > 100) $editables.innerText = 100;
					else if (_value < 0) $editables.innerText = 0;

					var _top = Number(mm.find('.text_editable.S=positionY', $tableRow)[0].innerText);
					var _left = Number(mm.find('.text_editable.S=positionX', $tableRow)[0].innerText);

					mm.element.style($btnPointer, {
						'top': mm.number.unit(_top, '%'),
						'left': mm.number.unit(_left, '%')
					});

				});

				drag.result($btnPointer, $tableRow);

			});
		},
		result: function (__$pointer, __$tableRow) {

			if (!__$pointer) return;

			var $pointer = __$pointer;

			var _top = Number(Math.max(0, ($pointer.offsetTop / $preview.offsetHeight) * 100));
			var _left = Number(Math.max(0, ($pointer.offsetLeft / $preview.offsetWidth) * 100));

			mm.find('.text_editable.S=positionY', __$tableRow)[0].innerText = _top.toFixed(2);
			mm.find('.text_editable.S=positionX', __$tableRow)[0].innerText = _left.toFixed(2);

			mm.element.style($pointer, {
				'top': mm.number.unit(_top, '%'),
				'left': mm.number.unit(_left, '%')
			});

		}
	};
	drag.update($container);

	// 링크영역 추가
	mm.event.off($btnAdd, 'click'); // 이벤트 중첩 대응
	mm.event.on($btnAdd, 'click', function () {

		var $tableList = mm.find('tbody', $pointerTable);
		var $tableRow = mm.find('tr', $tableList);
		var $pointer = mm.find('.btn_pointer', $pointerBox);

		var _index = $tableRow.length + 1;

		if (!mm.is.empty($pointer)) mm.class.remove($pointer, _classOn)

		// 포인터 추가
		mm.element.append($pointerBox, mm.string.template([
			'<button type="button" class="btn_pointer S=point-on"><b class="mm_ir-blind">포인터</b></button>'
		]));

		// 좌표 입력 영역 추가
		var $pointTr = mm.element.create(mm.string.template([
			'<tr id="${ID}" class="${CLASSON}">',
				'<td>',
					'<div class="mm_table-item">${INDEX}</div>',
				'</td>',
				'<td data-editable>',
					'<div class="mm_table-item">',
						'<p class="text_editable S=positionX" contenteditable></p>',
						'<span class="text_placeholder">X좌표</span>',
					'</div>',
				'</td>',
				'<td data-editable>',
					'<div class="mm_table-item">',
						'<p class="text_editable S=positionY" contenteditable></p>',
						'<span class="text_placeholder">Y좌표</span>',
					'</div>',
				'</td>',
				'<td>',
					'<div class="mm_table-item">',
						'<div class="mm_selected">',
							'<a class="mm_btn T=line T=secondary" href="../search/product" data-href="{ \'_type\': \'popup\' }" title="새 창 열림"><b>상품 추가</b></a>',
						'</div>',
					'</div>',
				'</td>',
				'<td>',
					'<div class="mm_table-item">',
						'<div class="mm_btn_box">',
							'<div class="mm_inline">',
								'<button type="button" class="mm_btn btn_pointer-remove"><b>삭제</b></button>',
							'</div>',
						'</div>',
					'</div>',
				'</td>',
			'</tr>'
		], { INDEX: _index, ID: 'dev_point_' + _index, CLASSON: _classOn }));

		if (!$pointerTable.classList.contains(_classOn)) mm.class.add($pointerTable, _classOn);

		mm.element.append(mm.find('tbody', $pointerTable), $pointTr);
		mm.class.remove(mm.find('tr', $tableList), _classOn);
		mm.find('tr', $tableList)[_index - 1].classList.add(_classOn);

		if (_index === 1) mm.table.update(mm.find('.mm_table', $pointerTable));
		drag.update($container);

	});
}