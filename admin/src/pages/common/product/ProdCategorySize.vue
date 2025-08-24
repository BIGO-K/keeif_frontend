<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>상품 카테고리</b>
						</h2>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xs T=round">
									<b>즐겨찾기 추가</b><i class="ico_plus"></i>
								</button>
								<a class="mm_btn T=xs T=round" href="" target="_blank" title="새 창 열림"><b>새창보기</b><i class="ico_newtab"></i></a>
							</div>
						</div>
					</div>
					<div class="m_prod-part">
						<!-- 상품 카테고리 목록 -->
						<section class="m_prod-part-category">
							<div class="m...category-head">
								<h4><b>상품 카테고리</b></h4>
								<button type="button" class="mm_btn T=line T=secondary btn_add">
									<b>대카테고리 추가</b>
								</button>
							</div>
							<div class="m...category-list">
								<!-- (D) 선택된 카테고리에 'S=category-on' 클래스와 '선택됨' 타이틀이 추가됩니다. -->
								<ul>
									<li>
										<a class="btn_item" href="#"><i class="ico_category-folder"></i><b>DEPTH1A</b></a>
										<button type="button" class="btn_add-down">
											<i class="ico_category-add"></i><b class="mm_ir-blind">하위 카테고리 추가</b>
										</button>
										<ul>
											<li>
												<a class="btn_item" href="#"><i class="ico_category-folder"></i><b>DEPTH2</b></a>
												<button type="button" class="btn_add-down">
													<i class="ico_category-add"></i><b class="mm_ir-blind">하위 카테고리 추가</b>
												</button>
												<ul>
													<li><a class="btn_item" href="#"><b>DEPTH3</b></a></li>
												</ul>
											</li>
										</ul>
									</li>
									<li>
										<a class="btn_item" href="#"><i class="ico_category-folder"></i><b>DEPTH1B</b></a>
										<button type="button" class="btn_add-down">
											<i class="ico_category-add"></i><b class="mm_ir-blind">하위 카테고리 추가</b>
										</button>
										<ul>
											<li>
												<a class="btn_item" href="#"><i class="ico_category-folder"></i><b>DEPTH2</b></a>
												<button type="button" class="btn_add-down">
													<i class="ico_category-add"></i><b class="mm_ir-blind">하위 카테고리 추가</b>
												</button>
												<ul>
													<li><a class="btn_item" href="#"><b>DEPTH3</b></a></li>
												</ul>
											</li>
										</ul>
									</li>
									<li>
										<a class="btn_item" href="#"><i class="ico_category-folder"></i><span>DEPTH1C</span></a>
										<button type="button" class="btn_add-down">
											<i class="ico_category-add"></i><b class="mm_ir-blind">하위 카테고리 추가</b>
										</button>
										<ul>
											<li>
												<a class="btn_item" href="#"><i class="ico_category-folder"></i><b>DEPTH2</b></a>
												<button type="button" class="btn_add-down">
													<i class="ico_category-add"></i><b class="mm_ir-blind">하위 카테고리 추가</b>
												</button>
											</li>
										</ul>
									</li>
									<li>
										<a class="btn_item" href="#"><b>DEPTH1C</b></a>
										<button type="button" class="btn_add-down">
											<i class="ico_category-add"></i><b class="mm_ir-blind">하위 카테고리 추가</b>
										</button>
									</li>
								</ul>
							</div>
							<div class="m...category-foot">
								<div class="mm_btn_box">
									<div class="mm_rside">
										<button type="button" class="mm_btn T=line T=xload btn_excel">
											<b>엑셀 다운로드</b><i class="ico_download"></i>
										</button>
										<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
											<i class="ico_sortable-edit"></i><b>순서편집</b>
										</button>
										<button type="button" class="mm_btn T=line btn_sort-cancel">
											<i class="ico_sortable-cancel"></i><b>순서편집 취소</b>
										</button>
										<button type="button" class="mm_btn T=secondary btn_sort-complete">
											<i class="ico_sortable-complete"></i><b>순서편집 적용</b>
										</button>
									</div>
								</div>
							</div>
						</section>
						<!-- // 상품 카테고리 목록 -->

						<template v-if="_isNone === false">
							<!-- 상품 카테고리 입력 -->
							<div class="m_prod-part-form">
								<div class="mm_form">
									<table>
										<tbody>
											<tr>
												<th></th><td></td><th></th><td></td>
											</tr>
											<tr>
												<th scope="row">
													<b>포함된 상품 수</b>
												</th>
												<td colspan="3">
													<p><span class="text_num">1234</span></p>
												</td>
											</tr>
											<tr>
												<th scope="row">
													<b>카테고리 명<i class="ico_required" title="필수입력"></i></b>
												</th>
												<td colspan="3">
													<div class="mm_form-text">
														<button type="button" class="btn_text-clear">
															<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
														</button>
														<label>
															<input type="text" class="textfield" data-text="{ '_byte': 20 }"><i class="bg_text"></i>
															<span class="text_placeholder mm_ir-blind">최대 20자 입력</span>
														</label>
													</div>
												</td>
											</tr>
											<tr>
												<th scope="row">
													<b>카테고리 코드</b>
												</th>
												<td colspan="3">
													<p>-</p>
												</td>
											</tr>
											<tr>
												<th scope="row">
													<b>전시 여부</b>
												</th>
												<td colspan="3">
													<div class="mm_radio-list">
														<ul>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-visible" data-radio checked>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">전시</span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-visible" data-radio>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">비전시</span>
																	</b>
																</label>
															</li>
														</ul>
													</div>
												</td>
											</tr>
											<tr>
												<th scope="row">
													<b>사용 여부</b>
												</th>
												<td colspan="3">
													<div class="mm_radio-list">
														<ul>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-using" data-radio checked>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">사용</span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-using" data-radio>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">미사용</span>
																	</b>
																</label>
															</li>
														</ul>
													</div>
												</td>
											</tr>
											<tr>
												<th scope="row">
													<b>카테고리 링크 URL</b>
												</th>
												<td colspan="3">
													<button type="button" class="mm_btn T=sm T=line T=secondary" onclick="mm.bom.alert('URL이 복사되었습니다.')">
														<b>URL 복사</b>
													</button>
													<div class="mm_note">
														<p class="mm_text-primary">
															프론트에 노출되는 해당 카테고리 페이지의 URL이 복사됩니다
														</p>
													</div>
												</td>
											</tr>
											<tr>
												<th scope="row">
													<b>상품정보고시 설정<i class="ico_required" title="필수입력"></i></b>
												</th>
												<td colspan="3">
													<!-- (D) 3depth 카테고리일 경우 비노출 합니다. -->
													<label class="mm_form-check">
														<input type="checkbox" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">하위 카테고리 일괄 적용</span>
														</b>
													</label>
													<div class="mm_form-select">
														<label>
															<select data-select>
																<option>상품정보고시를 선택하세요.</option>
															</select>
															<b class="text_selected"></b>
															<i class="ico_form-select"></i>
														</label>
													</div>
												</td>
											</tr>
											<tr>
												<th scope="row">
													<b>필터 사용 설정</b>
												</th>
												<td colspan="3">
													<!-- (D) 3depth 카테고리일 경우 비노출 합니다. -->
													<label class="mm_form-check">
														<input type="checkbox" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">하위 카테고리 일괄 적용</span>
														</b>
													</label>
													<div class="mm_form_mix-linked T=fit">
														<!-- (D) 1depth 카테고리 설정시 노출합니다. -->
														<div class="mm_check-list">
															<ul>
																<li>
																	<label class="mm_form-check">
																		<input type="checkbox" name="dev_check-filter" data-check>
																		<b class="mm_block">
																			<i class="ico_form-check"></i>
																			<span class="text_label">FIT</span>
																		</b>
																	</label>
																</li>
																<li>
																	<label class="mm_form-check">
																		<input type="checkbox" name="dev_check-filter" data-check>
																		<b class="mm_block">
																			<i class="ico_form-check"></i>
																			<span class="text_label">슈즈</span>
																		</b>
																	</label>
																</li>
															</ul>
														</div>
														<!-- (D) 2depth/3depth 카테고리 설정시 노출합니다. -->
														<!--
															<div class="mm_radio-list">
															<ul>
															<li>
															<label class="mm_form-radio">
															<input type="radio" name="dev_radio-filter" data-radio checked>
															<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">미설정</span>
															</b>
															</label>
															</li>
															<li>
															<label class="mm_form-radio">
															<input type="radio" name="dev_radio-filter" data-radio>
															<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">FIT</span>
															</b>
															</label>
															</li>
															<li>
															<label class="mm_form-radio">
															<input type="radio" name="dev_radio-filter" data-radio>
															<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">슈즈</span>
															</b>
															</label>
															</li>
															</ul>
															</div>
														-->
													</div>
												</td>
											</tr>
											<tr>
												<th scope="row">
													<b>카테고리 이미지 등록<i class="ico_required" title="필수입력"></i></b>
												</th>
												<td colspan="3">
													<div class="mm_form_mix-image">
														<div class="mm_form-image T=banner">
															<div class="mm_form-image-preview"></div>
															<label>
																<!-- (D) 고정 이미지 사이즈를 data-file의 _imageRatio 값을 width/height 형식으로 넣어주세요(단위px) -->
																<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000, '_imageRatio': '1000/500' }">
																<b class="mm_form-image-box mm_btn"><span>이미지 선택</span></b>
															</label>
															<button type="button" class="btn_remove-file">
																<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
															</button>
														</div>
														<div class="mm_form-text">
															<button type="button" class="btn_text-clear">
																<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
															</button>
															<label>
																<input type="text" class="textfield" data-text><i class="bg_text"></i>
																<span class="text_placeholder">대체 텍스트를 입력하세요.</span>
															</label>
														</div>
														<div class="mm_note T=bottom">
															<ul>
																<li>대체 텍스트는 화면에 노출되지 않으며 이미지를 설명하는 내용을 작성해 주세요.</li>
																<li>이미지 사이즈는 W 000px * H 000px 이고, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
																<li>이미지 사이즈가 다르면, 비율에 맞게 크롭되어 저장됩니다.</li>
																<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
															</ul>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<th scope="row">
													<b>모바일 배너 이미지</b>
												</th>
												<td colspan="3">
													<div class="mm_form_mix-image">
														<div class="mm_form-image">
															<div class="mm_form-image-preview"></div>
															<label>
																<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000 }">
																<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
															</label>
															<button type="button" class="btn_remove-file">
																<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
															</button>
														</div>
														<div class="mm_form-text">
															<button type="button" class="btn_text-clear">
																<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
															</button>
															<label>
																<input type="text" class="textfield" data-text><i class="bg_text"></i>
																<span class="text_placeholder">대체 텍스트를 입력하세요.</span>
															</label>
														</div>
														<div class="mm_note T=bottom">
															<ul>
																<li>대체 텍스트는 화면에 노출되지 않으며 이미지를 설명하는 내용을 작성해 주세요.</li>
																<li>권장 사이즈는 W 000px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
																<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
															</ul>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<th scope="row">
													<b>PC 배너 이미지</b>
												</th>
												<td colspan="3">
													<div class="mm_form_mix-image">
														<div class="mm_form-image">
															<div class="mm_form-image-preview"></div>
															<label>
																<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000 }">
																<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
															</label>
															<button type="button" class="btn_remove-file">
																<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
															</button>
														</div>
														<div class="mm_form-text">
															<button type="button" class="btn_text-clear">
																<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
															</button>
															<label>
																<input type="text" class="textfield" data-text><i class="bg_text"></i>
																<span class="text_placeholder">대체 텍스트를 입력하세요.</span>
															</label>
														</div>
														<div class="mm_note T=bottom">
															<ul>
																<li>대체 텍스트는 화면에 노출되지 않으며 이미지를 설명하는 내용을 작성해 주세요.</li>
																<li>권장 사이즈는 W 000px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
																<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
															</ul>
														</div>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>

								<!-- 최하위버튼 -->
								<div class="mm_foot">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<button type="button" class="mm_btn T=xl T=line T=tertiary">
												<b>삭제하기</b>
											</button>
											<button type="button" class="mm_btn T=xl T=tertiary">
												<b>저장하기</b>
											</button>
										</div>
									</div>
								</div>
								<!-- // 최하위버튼 -->
							</div>
							<!-- // 상품 카테고리 입력 -->
						</template>

						<template v-else>
							<div class="m_prod-part-form">
								<p class="mm_text-none">
									등록된 카태고리가 없습니다.
								</p>
							</div>
						</template>
					</div>
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';

	// 내용없음
	const _isNone = false;

	// 페이지 스크립트
	mm.load(function() {

		var $category = mm.find('.m_prod-part-category')[0];
		var $cateTitle = mm.find('h4', $category)[0];
		var $cateFoot = mm.find('.m\\.\\.\\.category-foot', $category)[0];

		// 순서변경
		mm.event.on(mm.find('.mm_btn:not(.btn_excel)', $cateFoot), 'click', function(__e) {

			__e.preventDefault();

			var $cateLists = mm.find('.m\\.\\.\\.category-list ul', $category);
			var data = mm.data.get($category).category || { clone: null, sortables: [] };

			if (this.classList.contains('btn_sort-edit')) {
				$category.classList.add('S=category-sortable');
				$cateTitle.innerHTML = '<b>순서 변경</b>';

				_.forEach($cateLists, function(__$list, __index) {

					data.sortables[__index] = Sortable.create(__$list, { forceFallback: true });

				});

				data.clone = $cateLists[0].cloneNode(true);// 취소용 복제
				mm.data.get($category).category = data;
			}
			else {
				// 편집취소
				if (this.classList.contains('btn_sort-cancel')) {
					$cateLists[0].replaceWith(data.clone);
				}
				// 편집적용
				else if (this.classList.contains('btn_sort-complete')) {
					//
				}

				$cateTitle.innerHTML = '<b>상품 카테고리</b>';
				$category.classList.remove('S=category-sortable');

				_.forEach(data.sortables, function(__sortable) {

					__sortable.destroy();

				});

				delete mm.data.get($category).category;

			}

		});

		// 순서변경 드래그 확인
		mm.delegate.on(document, '.m\\.\\.\\.category-list > ul > li > .btn_item', 'mousedown', function(__e) {

			__e.preventDefault();

			if (!$category.classList.contains('S=category-sortable')) return;

			mm.event.on(document, 'mousemove mouseup', function mouseInlineHandler(__e) {

				switch (__e.type) {
					case 'mousemove':
						$category.classList.add('S=category-dragging');
						break;
					case 'mouseup':
						$category.classList.remove('S=category-dragging');
						mm.event.off(document, 'mousemove mouseup', mouseInlineHandler);
						break;
				}

			});

		});

		// 카테고리 선택
		mm.delegate.on(document, '.m\\.\\.\\.category-list .btn_item', 'click', function(__e) {

			__e.preventDefault();

			var $items = mm.find('.m\\.\\.\\.category-list .btn_item');
			mm.class.remove($items, 'S=category-on');
			mm.element.attribute($items, { 'title': '' });

			this.classList.add('S=category-on');
			this.setAttribute('title', '선택됨');

			if (mm.siblings(this, '.btn_add-down').length > 0) this.parentElement.classList.toggle('S=category-open');

		});

		// 1 DEPTH 추가
		mm.delegate.on(document, '.m\\.\\.\\.category-head .btn_add', 'click', function() {

			var $cateList = mm.find('.m\\.\\.\\.category-list')[0];
			if (mm.find('> ul', $cateList).length === 0) mm.element.append($cateList, '<ul></ul>');

			mm.element.append(mm.find('> ul', $cateList)[0], mm.string.template([
				'<li>',
				'	<a class="btn_item btn_added" href="#"><b>새 카테고리</b></a>',
				'	<button type="button" class="btn_add-down"><i class="ico_category-add"></i><b class="mm_ir-blind">하위 카테고리 추가</b></button>',
				'</li>',
			]));

			// 강제 클릭 후 클래스 삭제
			var $added = mm.find('.btn_added')[0];
			if ($added) {
				mm.event.dispatch($added, 'click');
				mm.class.remove($added, 'btn_added');
			}

		});

		// 하위 카테고리 추가
		mm.delegate.on(document, '.m\\.\\.\\.category-list .btn_add-down', 'click', function() {

			if (mm.siblings(this, 'ul').length === 0) mm.element.after(this, '<ul></ul>');

			this.parentElement.classList.add('S=category-open');
			mm.element.append(mm.siblings(this, 'ul')[0], mm.string.template([
				'<li>',
				'	<a class="btn_item btn_added" href="#"><b>새 카테고리</b></a>',
				'	<button type="button" class="btn_add-down"><i class="ico_category-add"></i><b class="mm_ir-blind">하위 카테고리 추가</b></button>',
				'</li>',
			]));
			if (mm.find('.ico_category-folder', mm.siblings(this, '.btn_item')[0]).length === 0) mm.element.prepend(mm.siblings(this, '.btn_item')[0], '<i class="ico_category-folder"></i>');

			// 강제 클릭 후 클래스 삭제
			var $added = mm.find('.btn_added')[0];
			if ($added) {
				mm.event.dispatch($added, 'click');
				mm.class.remove($added, 'btn_added');
			}

		});

	});
</script>