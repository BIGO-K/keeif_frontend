<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>쇼케이스 수정</b>
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

					<!-- 쇼케이스 정보 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>쇼케이스 구분<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-select T=lg">
											<label>
												<select data-select>
													<option>선택하세요.</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>제목<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 12 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 12자 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>사용 여부<i class="ico_required" title="필수입력"></i></b>
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
										<b>노출 시작일<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-period">
											<div class="mm_form-text T=calendar">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
													<span class="text_placeholder">시작일</span>
													<i class="ico_datepicker-calendar"></i>
												</label>
											</div>
											<div class="mm_form-select T=time">
												<label>
													<select data-select>
														<option>0</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
											<span class="text_linked">시</span>
											<div class="mm_form-select T=time">
												<label>
													<select data-select>
														<option>0</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
											<span class="text_linked">분</span>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>배너 이미지 (Mobile)<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-image">
											<div class="mm_form-image T=banner">
												<div class="mm_form-image-preview"></div>
												<label>
													<!-- (D) 고정 이미지 사이즈를 data-file의 _imageRatio 값을 width/height 형식으로 넣어주세요(단위px) -->
													<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000, '_imageRatio': '696/696' }">
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
													<li>이미지 사이즈는 W 696px * H 696px 이고, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
													<li>이미지 사이즈가 다르면, 비율에 맞게 크롭되어 저장됩니다.</li>
													<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
												</ul>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>배너 이미지 (PC)<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<label class="mm_form-check">
											<input type="checkbox" data-check="{ 'desyncer': '.mm_desyncer-pc-banner' }" checked>
											<b class="mm_block">
												<i class="ico_form-check"></i>
												<span class="text_label">Mobile 이미지와 동일한 이미지 사용</span>
											</b>
										</label>
										<div class="mm_desyncer-pc-banner">
											<div class="mm_form_mix-image">
												<div class="mm_form-image T=banner">
													<div class="mm_form-image-preview"></div>
													<label>
														<!-- (D) 고정 이미지 사이즈를 data-file의 _imageRatio 값을 width/height 형식으로 넣어주세요(단위px) -->
														<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000, '_imageRatio': '650/650' }">
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
														<li>이미지 사이즈는 W 650px * H 650px 이고, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
														<li>이미지 사이즈가 다르면, 비율에 맞게 크롭되어 저장됩니다.</li>
														<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
													</ul>
												</div>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>메인 문구1<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 15 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 15자 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>메인 문구2<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 15 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 15자 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>상세 내용</b>
									</th>
									<td colspan="3">
										<div class="mm_form-textarea">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<textarea class="textfield" data-text="{ '_resizeMin': 6, '_byte': 68 }"></textarea><i class="bg_text"></i>
												<span class="text_placeholder">쇼케이스 설명을 입력하세요.</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>동영상 등록 여부</b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-video" data-radio="{ 'syncer': '.mm_syncer-video' }">
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">사용</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" data-radio name="dev_radio-video" checked>
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
								<tr class="mm_syncer-video">
									<th scope="row">
										<b>동영상 URL</b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">링크 URL</span>
											</label>
										</div>
										<div class="mm_note">
											<p>유튜브 URL 등록 시, 공유 URL이 아닌 퍼가기 영역의 &#60;iframe 으로 시작하는 URL를 입력해 주세요.<br>예) &#60;iframe width="560" height="315" src="https://www.youtube.com/embed/u2n1EilbJ3w" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&#62;&#60;/iframe&#62;</p>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>브랜드 추가<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-linked">
											<div class="mm_selected">
												<!-- (D) 검색 팝업에서 선택 적용 시 'ul' 영역을 노출합니다. -->
												<a class="mm_btn T=line" href="/search/brand-single" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>브랜드 검색</b></a>
												<ul>
													<li>
														<b>브랜드 A</b>
														<button type="button" class="btn_remove">
															<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
														</button>
													</li>
												</ul>
											</div>
										</div>
										<div class="mm_note T=bottom">
											<p class="mm_text-primary">
												브랜드 추가 시 쇼핑몰에 해당 브랜드 샵으로 이동할 수 있는 버튼이 노출됩니다.
											</p>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 쇼케이스 정보 -->

					<!-- 상품 그룹 목록 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>상품 그룹 목록</b>
							</h3>
						</div>
						<div class="mm_form_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<!-- (D) '상품 그룹 추가' 버튼 클릭 시 상품 그룹 목록 영역을 추가합니다. -->
										<button type="button" class="mm_btn">
											<b>상품 그룹 추가</b>
										</button>
										<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort="{ '_isHideFirst': false }">
											<i class="ico_sortable-edit"></i><b>순서편집</b>
										</button>
									</div>
								</div>
							</div>
						</div>
						<!-- // 폼 상단 -->

						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>상품 그룹 1<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<b>상세 이미지 (Mobile)<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td>
																<div class="mm_form_mix-image">
																	<div class="mm_form-image">
																		<div class="mm_form-image-preview"></div>
																		<label>
																			<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000 }">
																			<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 쇼케이스 수정</span></b>
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
																			<li>권장 사이즈는 W 696px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
																			<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
																		</ul>
																	</div>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>상세 이미지 (PC)<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td>
																<div class="mm_form_mix-image">
																	<div class="mm_form-image">
																		<div class="mm_form-image-preview"></div>
																		<label>
																			<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000 }">
																			<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 쇼케이스 수정</span></b>
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
																			<li>권장 사이즈는 W 1360px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
																			<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
																		</ul>
																	</div>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>노출 여부<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-exposure1" data-radio checked>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">노출</span>
																	</b>
																</label>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>노출 상품<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td>
																<div class="mm_btn_box">
																	<div class="mm_inline">
																		<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
																		<!-- (D) 상품 추가 후 노출합니다. -->
																		<a class="mm_btn T=line" href="/product-list" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>등록 상품 확인 <strong class="mm_text-secondary text_num">1000</strong>개</b></a>
																	</div>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>상품 그룹 2<i class="ico_required" title="필수입력"></i></b>
											<!-- (D) '상품 그룹 추가'로 추가된 상품 그룹에 '삭제' 버튼을 노출하며, 클릭 시 해당 상품 그룹를 삭제합니다. -->
											<button type="button" class="mm_btn T=xs T=line" onclick="mm.bom.confirm('상품 그룹를 삭제하시겠습니까?');">
												<b>삭제</b>
											</button>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<b>상세 이미지 (Mobile)<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td>
																<div class="mm_form_mix-image">
																	<div class="mm_form-image">
																		<div class="mm_form-image-preview"></div>
																		<label>
																			<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000 }">
																			<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 쇼케이스 수정</span></b>
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
																			<li>권장 사이즈는 W 696px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
																			<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
																		</ul>
																	</div>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>상세 이미지 (PC)<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td>
																<div class="mm_form_mix-image">
																	<div class="mm_form-image">
																		<div class="mm_form-image-preview"></div>
																		<label>
																			<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000 }">
																			<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 쇼케이스 수정</span></b>
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
																			<li>권장 사이즈는 W 1360px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
																			<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
																		</ul>
																	</div>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>노출 여부<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td>
																<div class="mm_radio-list">
																	<ul>
																		<li>
																			<label class="mm_form-radio">
																				<input type="radio" name="dev_radio-exposure2" data-radio checked>
																				<b class="mm_block">
																					<i class="ico_form-radio"></i>
																					<span class="text_label">노출</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-radio">
																				<input type="radio" name="dev_radio-exposure2" data-radio>
																				<b class="mm_block">
																					<i class="ico_form-radio"></i>
																					<span class="text_label">미노출</span>
																				</b>
																			</label>
																		</li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>노출 상품<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td>
																<div class="mm_btn_box">
																	<div class="mm_inline">
																		<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
																		<!-- (D) 상품 추가 후 노출합니다. -->
																		<a class="mm_btn T=line" href="/product-list" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>등록 상품 확인 <strong class="mm_text-secondary text_num">1000</strong>개</b></a>
																	</div>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<!-- 폼 하단 -->
						<div class="mm_form_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<!-- (D) '상품 그룹 추가' 버튼 클릭 시 상품 그룹 목록 영역을 추가합니다. -->
										<button type="button" class="mm_btn">
											<b>상품 그룹 추가</b>
										</button>
										<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort="{ '_isHideFirst': false }">
											<i class="ico_sortable-edit"></i><b>순서편집</b>
										</button>
									</div>
								</div>
							</div>
						</div>
						<!-- // 폼 하단 -->
					</div>
					<!-- // 상품 그룹 목록 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<a class="mm_btn T=xl T=line T=tertiary" href="#" data-href="{ '_type': 'link' }"><b>취소하기</b></a>
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>수정하기</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 최하단버튼 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>