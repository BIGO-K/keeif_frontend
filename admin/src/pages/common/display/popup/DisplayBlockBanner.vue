<template>
	<layout-popup>
		<template #title>
			<h1><b>${블록 타이틀} 관리</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-display-block">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 타이틀 -->
					<div class="mm_form m...block-title">
						<table>
							<colgroup>
								<col>
								<col>
								<col>
								<col style="width:110px;">
							</colgroup>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>타이틀</b>
									</th>
									<td colspan="2">
										<div class="mm_form-table">
											<table>
												<tbody>
													<tr>
														<th scope="row">
															<b>Mobile</b>
														</th>
														<td>
															<div class="mm_form-table">
																<table>
																	<tbody>
																		<tr>
																			<th scope="row">
																				<b>메인 타이틀</b>
																			</th>
																			<td><p>메인 타이틀</p></td>
																		</tr>
																		<tr>
																			<th scope="row">
																				<b>서브 타이틀</b>
																			</th>
																			<td><p>서브 타이틀</p></td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</td>
													</tr>
													<tr>
														<th scope="row">
															<b>PC</b>
														</th>
														<td>
															<label class="mm_form-check">
																<input type="checkbox" data-check="{ 'desyncer': '.mm_desyncer-pc-title' }" disabled>
																<b class="mm_block">
																	<i class="ico_form-check"></i>
																	<span class="text_label">Mobile에 입력한 텍스트와 동일하게 사용</span>
																</b>
															</label>
															<div class="mm_form-table mm_desyncer-pc-title">
																<table>
																	<tbody>
																		<tr>
																			<th scope="row">
																				<b>메인 타이틀</b>
																			</th>
																			<td><p>메인 타이틀</p></td>
																		</tr>
																		<tr>
																			<th scope="row">
																				<b>서브 타이틀</b>
																			</th>
																			<td><p>-</p></td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</td>
									<td>
										<div class="mm_btn_box">
											<div class="mm_inline">
												<button type="button" class="mm_btn">
													<b>수정</b>
												</button>
											</div>
										</div>
										<!--
											<div class="mm_btn_box">
											<div class="mm_inline">
											<button type="button" class="mm_btn T=line"><b>취소</b></button>
											<button type="button" class="mm_btn"><b>적용</b></button>
											</div>
											</div>
										-->
									</td>
								</tr>
							</tbody>
							<!-- (D) [수정] 버튼 클릭 시 노출하는 형태입니다. -->
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>타이틀</b>
									</th>
									<td colspan="2">
										<div class="mm_form-table">
											<table>
												<tbody>
													<tr>
														<th scope="row">
															<b>Mobile</b>
														</th>
														<td>
															<div class="mm_form-table">
																<table>
																	<tbody>
																		<tr>
																			<th scope="row">
																				<b>메인 타이틀</b>
																			</th>
																			<td>
																				<div class="mm_form-text">
																					<button type="button" class="btn_text-clear">
																						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																					</button>
																					<label>
																						<input type="text" class="textfield" value="메인 타이틀"><i class="bg_text"></i>
																						<span class="text_placeholder mm_ir-blind">Mobile 메인 타이틀</span>
																					</label>
																				</div>
																			</td>
																		</tr>
																		<tr>
																			<th scope="row">
																				<b>서브 타이틀</b>
																			</th>
																			<td>
																				<div class="mm_form-text">
																					<button type="button" class="btn_text-clear">
																						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																					</button>
																					<label>
																						<input type="text" class="textfield"><i class="bg_text"></i>
																						<span class="text_placeholder mm_ir-blind">Mobile 서브 타이틀</span>
																					</label>
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
															<b>PC</b>
														</th>
														<td>
															<label class="mm_form-check">
																<input type="checkbox" data-check="{ 'desyncer': '.mm_desyncer-pc-title2' }" checked>
																<b class="mm_block">
																	<i class="ico_form-check"></i>
																	<span class="text_label">Mobile에 입력한 텍스트와 동일하게 사용</span>
																</b>
															</label>
															<div class="mm_form-table mm_desyncer-pc-title2">
																<table>
																	<tbody>
																		<tr>
																			<th scope="row">
																				<b>메인 타이틀</b>
																			</th>
																			<td>
																				<div class="mm_form-text">
																					<button type="button" class="btn_text-clear">
																						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																					</button>
																					<label>
																						<input type="text" class="textfield" value="메인 타이틀"><i class="bg_text"></i>
																						<span class="text_placeholder mm_ir-blind">PC 메인 타이틀</span>
																					</label>
																				</div>
																			</td>
																		</tr>
																		<tr>
																			<th scope="row">
																				<b>서브 타이틀</b>
																			</th>
																			<td>
																				<div class="mm_form-text">
																					<button type="button" class="btn_text-clear">
																						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																					</button>
																					<label>
																						<input type="text" class="textfield"><i class="bg_text"></i>
																						<span class="text_placeholder mm_ir-blind">PC 서브 타이틀</span>
																					</label>
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
									</td>
									<td>
										<!--
											<div class="mm_btn_box">
											<div class="mm_inline">
											<button type="button" class="mm_btn"><b>수정</b></button>
											</div>
											</div>
										-->
										<div class="mm_btn_box">
											<div class="mm_inline">
												<button type="button" class="mm_btn T=line">
													<b>취소</b>
												</button>
												<button type="button" class="mm_btn">
													<b>적용</b>
												</button>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
							<!-- (D) 블록에 더보기(전체보기) 링크가 있는 경우 노출합니다. -->
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>더보기(전체보기)<br>링크 URL</b>
									</th>
									<td colspan="2">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">더보기(전체보기) 링크 URL</span>
											</label>
										</div>
									</td>
									<td>
										<div class="mm_btn_box">
											<div class="mm_inline">
												<button type="button" class="mm_btn T=line">
													<b>취소</b>
												</button>
												<button type="button" class="mm_btn">
													<b>적용</b>
												</button>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 타이틀 -->

					<!-- 검색 -->
					<div class="m...block-search">
						<h3 class="mm_heading">
							<b>콘텐츠 검색</b>
						</h3>
						<div class="mm_search">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td><th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>노출 상태</b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-exposure" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">전체</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-exposure" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">예약</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-exposure" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">노출</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-exposure" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">노출 종료</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
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
																<span class="text_label">전체</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-using" data-radio>
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
								</tbody>
							</table>
							<div class="mm_btn_box">
								<div class="mm_inline">
									<button type="button" class="mm_btn T=lg T=line T=tertiary btn_reset">
										<i class="ico_reset"></i><b>초기화</b>
									</button>
									<button type="button" class="mm_btn T=lg T=tertiary btn_search">
										<b>검색</b>
									</button>
								</div>
							</div>
						</div>
					</div>
					<!-- // 검색 -->

					<hr>

					<!-- 콘텐츠 등록 -->
					<h3 class="mm_heading">
						<b>콘텐츠 등록</b>
					</h3>

					<!-- 콘텐츠 상품 -->
					<div class="mm_form_box m...block-prod">
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>콘텐츠 상품<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_btn_box">
												<div class="mm_inline">
													<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
													<!-- (D) 상품 추가 후 노출합니다. -->
													<!-- 일반 상품 -->
													<a class="mm_btn T=line" href="/product-list/coop" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>등록 상품 확인 <strong class="mm_text-secondary text_num">1000</strong>개</b></a>

													<!-- 공구 상품 -->
													<!-- <a class="mm_btn T=line" href="/product-list/coop" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>등록 상품 확인 <strong class="mm_text-secondary text_num">1000</strong>개</b></a> -->
												</div>
											</div>
											<div class="mm_form-table">
												<table>
													<colgroup>
														<col style="width:140px;">
														<col>
														<col>
														<col style="width:110px;">
													</colgroup>
													<!-- (D) "텍스트 사용" 체크 시 .mm_syncer-product-phrases 영역이 노출됩니다. -->
													<!-- 텍스트 미사용 -->
													<tbody>
														<tr>
															<td colspan="3">
																<label class="mm_form-check">
																	<input type="checkbox" data-check="{ 'syncer': '.mm_syncer-product-phrases' }" disabled>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label">텍스트 사용</span>
																	</b>
																</label>
																<!--
																	<div class="mm_syncer-product-phrases">
																	<div class="mm_note">
																	<p><i class="ico_note"></i><strong class="mm_text-warning">텍스트의 순서대로 프론트에 노출됩니다. 예) 텍스트 1 =&#62; 1번째 줄 / 텍스트 2 =&#62; 2번째 줄</strong></p>
																	</div>
																	</div>
																-->
															</td>
															<!-- (D) 텍스트 개수에 따라 rowspan값을 변경해주세요. 미사용: X, 1개: rowspan="2", 2개: rowspan="3", 3개: rowspan="4" -->
															<td>
																<div class="mm_btn_box">
																	<div class="mm_inline">
																		<button type="button" class="mm_btn">
																			<b>수정</b>
																		</button>
																	</div>
																</div>
															</td>
														</tr>
													</tbody>
													<!-- // 텍스트 미사용 -->

													<!-- 텍스트 사용 -->
													<tbody>
														<tr>
															<td colspan="3">
																<label class="mm_form-check">
																	<input type="checkbox" data-check="{ 'syncer': '.mm_syncer-product-phrases' }" checked disabled>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label">텍스트 사용</span>
																	</b>
																</label>
																<div class="mm_syncer-product-phrases">
																	<div class="mm_note">
																		<p><i class="ico_note"></i><strong class="mm_text-warning">텍스트의 순서대로 프론트에 노출됩니다. 예) 텍스트 1 =&#62; 1번째 줄 / 텍스트 2 =&#62; 2번째 줄</strong></p>
																	</div>
																</div>
															</td>
															<!-- (D) 텍스트 개수에 따라 rowspan값을 변경해주세요. 미사용: X, 1개: rowspan="2", 2개: rowspan="3", 3개: rowspan="4" -->
															<td rowspan="2">
																<div class="mm_btn_box">
																	<div class="mm_inline">
																		<button type="button" class="mm_btn">
																			<b>수정</b>
																		</button>
																	</div>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>텍스트 1</b>
															</th>
															<td colspan="2">
																<p>가나다라마바사</p>
															</td>
														</tr>
													</tbody>
													<!-- // 텍스트 사용 -->

													<!-- [수정] 버튼 클릭 시 -->
													<!-- (D) [수정] 버튼 클릭 시 노출하는 형태입니다. -->
													<tbody>
														<tr>
															<td colspan="3">
																<label class="mm_form-check">
																	<input type="checkbox" data-check="{ 'syncer': '.mm_syncer-product-phrases' }" checked>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label">텍스트 사용</span>
																	</b>
																</label>
																<div class="mm_syncer-product-phrases">
																	<div class="mm_note">
																		<p><i class="ico_note"></i><strong class="mm_text-warning">텍스트의 순서대로 프론트에 노출됩니다. 예) 텍스트 1 =&#62; 1번째 줄 / 텍스트 2 =&#62; 2번째 줄</strong></p>
																	</div>
																</div>
															</td>
															<td rowspan="4">
																<div class="mm_btn_box">
																	<div class="mm_inline">
																		<button type="button" class="mm_btn T=line">
																			<b>취소</b>
																		</button>
																		<button type="button" class="mm_btn">
																			<b>적용</b>
																		</button>
																	</div>
																</div>
															</td>
														</tr>
														<tr class="mm_syncer-product-phrases">
															<th scope="row">
																<b>텍스트 1</b>
															</th>
															<td colspan="2">
																<div class="mm_form-text">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text="{ '_byte': 8 }" value="가나다라마바사"><i class="bg_text"></i>
																		<span class="text_placeholder mm_ir-blind">텍스트 1</span>
																	</label>
																</div>
															</td>
														</tr>
														<tr class="mm_syncer-product-phrases">
															<th scope="row">
																<b>텍스트 2</b>
															</th>
															<td colspan="2">
																<div class="mm_form-text">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text="{ '_byte': 8 }"><i class="bg_text"></i>
																		<span class="text_placeholder mm_ir-blind">텍스트 2</span>
																	</label>
																</div>
															</td>
														</tr>
														<tr class="mm_syncer-product-phrases">
															<th scope="row">
																<b>텍스트 3</b>
															</th>
															<td colspan="2">
																<div class="mm_form-text">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text="{ '_byte': 8 }"><i class="bg_text"></i>
																		<span class="text_placeholder mm_ir-blind">텍스트 3</span>
																	</label>
																</div>
															</td>
														</tr>
													</tbody>
													<!-- // [수정] 버튼 클릭 시 -->
												</table>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<!-- (D) 각 조건에 맞는 안내텍스트 내용으로 변경합니다. -->
						<!-- 유의사항 -->
						<div class="mm_note">
							<ul>
								<li>목록 최상단부터 차례대로 10개의 상품이 프론트에 노출됩니다.</li>
							</ul>
						</div>
						<!-- // 유의사항 -->
					</div>
					<!-- // 콘텐츠 상품 -->

					<!-- 콘텐츠 배너 -->
					<!--
						(D) data-display 속성의 _frameSrc에 iframe 공통 경로를 넣어주세요.
						공통 경로를 기준으로 등록 {_frameSrc}/create, 수정 {_frameSrc}/edit/{_id} 형식으로 iframe을 연결합니다.
					-->
					<template v-if="_isNone === false">
						<div class="mm_form_box m_display-table" data-display="{ '_frameSrc': '/frames/_iframe_displayBlockB.html' }">
							<!-- 폼 상단 -->
							<div class="mm_form_box-caption">
								<div class="mm_lside">
									<ul class="mm_table-status">
										<li>전체<b class="mm_text-secondary"><strong class="text_num">1234</strong>개</b></li>
									</ul>
									<div class="mm_note">
										<p><i class="ico_image-show"></i> 아이콘 클릭 시 이미지가 노출됩니다.</p>
									</div>
								</div>
							</div>
							<div class="mm_form_box-unit">
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<button type="button" class="mm_btn btn_display-add">
												<b>등록 영역 추가</b>
											</button>
											<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
												<i class="ico_sortable-edit"></i><b>순서편집</b>
											</button>
											<button type="button" class="btn_preview-toggle" title="이미지 미리보기 켜기">
												<i class="ico_image-show"></i><b>이미지보기</b>
											</button>
										</div>
									</div>
								</div>
								<div class="mm_rside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=xload btn_excel" href="/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
										</div>
									</div>
								</div>
							</div>
							<!-- // 폼 상단 -->

							<div class="m_display-table-list m_block-table-list">
								<table>
									<tbody data-id="1">
										<tr>
											<th scope="row">
												<b>콘텐츠 배너 1</b>
											</th>
											<td>
												<div class="mm_btn_box">
													<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
														<b>Mobile 이미지보기</b>
														<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
													</a>
													<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
														<b>PC 이미지보기</b>
														<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
													</a>
												</div>
											</td>
											<td>사용</td>
											<td>노출</td>
											<td>2021-06-01 ~ 2021-06-30</td>
											<td><a class="mm_btn T=line" href="/product-list" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>등록 상품 확인 <strong class="mm_text-secondary text_num">1000</strong>개</b></a></td>
											<td>
												<div class="mm_btn_box">
													<div class="mm_inline">
														<button type="button" class="mm_btn btn_display-modify">
															<b>수정</b>
														</button>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
									<tbody data-id="2">
										<tr>
											<th scope="row">
												<b>콘텐츠 배너 2</b>
											</th>
											<td>
												<div class="mm_btn_box">
													<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
														<b>Mobile 이미지보기</b>
														<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
													</a>
													<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
														<b>PC 이미지보기</b>
														<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
													</a>
												</div>
											</td>
											<td>사용</td>
											<td>노출</td>
											<td>2021-06-01 ~ 2021-06-30</td>
											<td><a class="mm_btn T=line" href="/product-list" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>등록 상품 확인 <strong class="mm_text-secondary text_num">1000</strong>개</b></a></td>
											<td>
												<div class="mm_btn_box">
													<div class="mm_inline">
														<button type="button" class="mm_btn btn_display-modify">
															<b>수정</b>
														</button>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
									<!-- (D) 키이프 커스텀 - 배너 블록에서 아이콘 사용 할 경우 -->
									<tbody data-id="3">
										<tr>
											<th scope="row">
												<b>콘텐츠 배너 3</b>
											</th>
											<td>
												<div class="mm_btn_box">
													<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
														<b>Mobile 이미지보기</b>
														<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
													</a>
												</div>
											</td>
											<td>
												<div class="m_display-table-icon">
													<b style="background-color: #e63e20;color: #fff;">ICON</b>
												</div>
											</td>
											<td>사용</td>
											<td>노출</td>
											<td>2021-06-01 ~ 2021-06-30</td>
											<td>
												<div class="mm_btn_box">
													<div class="mm_inline">
														<button type="button" class="mm_btn btn_display-modify">
															<b>수정</b>
														</button>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
								<!-- (D) 등록영역 추가를 위한 테이블 내용 기본 구조를 넣어주세요 -->
								<template type="text/codehtml">
									<tbody>
										<tr>
											<th scope="row">
												<b>블록</b>
											</th>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td>
												<div class="mm_btn_box">
													<div class="mm_inline">
														<button type="button" class="mm_btn btn_display-modify">
															<b>수정</b>
														</button>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</template>
							</div>

							<!-- 폼 하단 -->
							<div class="mm_form_box-unit">
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<button type="button" class="mm_btn btn_display-add">
												<b>등록 영역 추가</b>
											</button>
											<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
												<i class="ico_sortable-edit"></i><b>순서편집</b>
											</button>
											<button type="button" class="btn_preview-toggle" title="이미지 미리보기 켜기">
												<i class="ico_image-show"></i><b>이미지보기</b>
											</button>
										</div>
									</div>
								</div>
								<div class="mm_rside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=xload btn_excel" href="/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
										</div>
									</div>
								</div>
							</div>
							<!-- // 폼 하단 -->
						</div>
					</template>

					<template v-else>
						<div class="mm_form_box m_display-table" data-display="{ '_frameSrc': '/frames/_iframe_displayBlockB.html' }">
							<!-- 폼 상단 -->
							<div class="mm_form_box-caption">
								<div class="mm_lside">
									<ul class="mm_table-status">
										<li>전체<b class="mm_text-secondary"><strong class="text_num">0</strong>개</b></li>
									</ul>
								</div>
							</div>
							<div class="mm_form_box-unit">
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<button type="button" class="mm_btn btn_display-add">
												<b>등록 영역 추가</b>
											</button>
										</div>
									</div>
								</div>
							</div>
							<!-- // 폼 상단 -->

							<!-- 내용없음 -->
							<!-- (D) 검색된 내용이 없을 경우 m_display-table-list는 숨기고 mm_form-none 태그를 노출합니다. -->
							<div class="mm_form-none">
								<p>검색된 결과가 없습니다.</p>
							</div>
							<!-- // 내용없음 -->

							<!-- 폼 하단 -->
							<div class="mm_form_box-unit">
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<button type="button" class="mm_btn btn_display-add">
												<b>등록 영역 추가</b>
											</button>
										</div>
									</div>
								</div>
							</div>
							<!-- // 폼 하단 -->
						</div>
					</template>
					<!-- // 콘텐츠 배너 -->
					<!-- // 콘텐츠 등록 -->
				</div>
				<!-- // 본문 내용 -->

				<!-- 현재 페이지 스크립트 -->
				<!-- <script src="/src/assets/js/app_page-display.js"></template> -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import { loadScript } from 'vue-plugin-load-script';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	loadScript(`${window.env_path ?? ''}/js/app_page-display.js`);

	// 내용없음
	const _isNone = false;
</script>