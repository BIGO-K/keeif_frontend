<template>
	<layout-popup>
		<template #title>
			<h1><b>베스트 브랜드</b></h1>
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
														<td><b>테스트 타이틀 Mobile</b></td>
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
																			<td><b>테스트 타이틀 PC</b></td>
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

							<!-- (D) PC의 [ Mobile에 입력한 내용 동일하게 사용 ] 체크 후 적용하였을 때 노출되는 형태입니다. -->
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
														<td><b>테스트 타이틀 Mobile</b></td>
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
																			<td>
																				<div class="mm_form-text">
																					<button type="button" class="btn_text-clear">
																						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																					</button>
																					<label>
																						<input type="text" class="textfield"><i class="bg_text"></i>
																						<span class="text_placeholder mm_ir-blind">테스트 타이틀 Mobile</span>
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
																			<td>
																				<div class="mm_form-text">
																					<button type="button" class="btn_text-clear">
																						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																					</button>
																					<label>
																						<input type="text" class="textfield"><i class="bg_text"></i>
																						<span class="text_placeholder mm_ir-blind">테스트 타이틀 PC</span>
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
						</table>
					</div>
					<!-- // 타이틀 -->

					<!-- 검색 -->
					<div class="m...block-search">
						<h3 class="mm_heading">
							<b>배너 콘텐츠 검색</b>
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
															<input type="radio" name="dev_radio-exposure" data-radio checked>
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
															<input type="radio" name="dev_radio-exposure" data-radio>
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

					<!-- 콘텐츠 배너 -->
					<!--
						(D) data-display 속성의 _frameSrc에 iframe 공통 경로를 넣어주세요.
						공통 경로를 기준으로 등록 {_frameSrc}/create, 수정 {_frameSrc}/edit/{_id} 형식으로 iframe을 연결합니다.
					-->
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
											<b>배너 1</b>
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
										<td>2023-01-02 ~ 2021-01-11</td>
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
											<b>배너 2</b>
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
										<td>2023-01-02 ~ 2021-01-11</td>
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
					<!-- // 콘텐츠 배너 -->
					<!-- // 콘텐츠 등록 -->
				</div>
				<!-- // 본문 내용 -->

				<!-- 현재 페이지 스크립트 -->
				<!--
					<script src="../js/app_page-display.js"></template>
					<script>
					// 적용 콜백
					function applyDisplayItem(__id) {

					// ? __id:string - iframe의 id(추가한 영역은 id가 없어 'create'로 리턴)
					// ? this:element - iframe
					// ? $listColums:element - iframe과 같은 뎁스의 리스트 td 요소

					var $listColums = this.closest('tbody').firstElementChild.children;

					// (D) 등록/수정을 적용할 때 $listColums의 내용이 변경되는 부분을 작성해주세요.
					if (__id === 'create') {
					this.dataset.id = 'id부여';
					// mm.find('b', $listColums[0])[0].textContent = '이름변경';
					}
					else {
					//
					}

					console.log('적용 ID:', __id, this);

					}

					// 삭제 콜백
					function removeDisplayItem(__id) {

					// ? __id:string - iframe의 id(추가한 영역은 id가 없어 'create'로 리턴)

					// (D) 모든 항목이 삭제됐을 때 노출방식 확인 필요합니다.
					// if (mm.siblings(this.closest('tbody')).length === 0) mm.event.dispatch('.btn_display-add', 'click');// 항목이 없으면 등록영역 생성

					console.log('삭제 ID:', __id, this);

					}

					// 순서변경 콜백
					function sortDisplayItem() {

					console.log('순서변경 적용', this);

					}
					</script>
				-->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import { loadScript } from 'vue-plugin-load-script';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	loadScript(`${window.env_path ?? ''}/js/app_page-display.js`);
</script>
