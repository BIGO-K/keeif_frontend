<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>코디샷 수정</b>
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

					<!-- 코디샷 정보 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>카테고리 설정<i class="ico_required" title="필수입력"></i></b>
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
										<b>사용 여부<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td>
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
									<th scope="row">
										<b>노출 기간<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td>
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
											<b class="text_tilde">~</b>
											<div class="mm_form-text T=calendar">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
													<span class="text_placeholder">종료일</span>
													<i class="ico_datepicker-calendar"></i>
												</label>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>브랜드명<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 50자 입력</span>
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
												<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 50자 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>서브 문구<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 50자 입력</span>
											</label>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 코디샷 정보 -->

					<!-- 코디샷 이미지 및 포인트 설정 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>코디샷 이미지 및 포인트 설정</b>
							</h3>
						</div>
						<!-- // 폼 상단 -->

						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr class="m_display-codyshot">
										<th scope="row">
											<b>이미지 등록/포인트 관리<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-image">
												<div class="mm_form-image">
													<div class="mm_form-image-preview"></div>
													<label>
														<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000, 'onChange': 'imageLinkSet', '_default': '/public/images/_sample/product_1.jpg' }">
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
														<li>권장 사이즈는 W 000px * H 000px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
														<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
														<li>이미지 등록 후 포인트 설정이 가능합니다.</li>
													</ul>
												</div>
											</div>

											<!-- 이미지 미리보기 영역 -->
											<div class="m_display-codyshot-preview">
												<div class="m...preview-image">
													<p>이미지 미리보기</p>
												</div>
												<div class="m...preview-pointer">
													<button type="button" class="btn_pointer" style="top: 50%; left: 50%;">
														<b class="mm_ir-blind">포인터</b>
													</button>
													<button type="button" class="btn_pointer" style="top: 27%; left: 24.13%;">
														<b class="mm_ir-blind">포인터</b>
													</button>
												</div>
											</div>
											<!-- // 이미지 미리보기 영역 -->

											<!-- 이미지 포인트 좌표 설정 영역 -->
											<div class="mm_table_box S=point-on">
												<!-- 테이블상단 -->
												<div class="mm_table_box-caption">
													<div class="mm_lside">
														<!--
															(D) '포인트 추가' 버튼 클릭 시,
															1. 포인트 좌표영역을 지정하는 button 요소(btn_pointer)가 'm__pointer-preview-btngroup'에 추가됩니다.
															2. 포인트 좌표영역 관련 tr 영역이 하단의 'mm_table > tbody' 영역에 추가됩니다.
														-->
														<button type="button" class="mm_btn btn_pointer-add T=line T=secondary">
															<b>포인트 추가</b>
														</button>
														<div class="mm_note">
															<p>포인트는 <strong>6개 추가를 권장</strong>합니다. 6개 포인트를 초과할 시 상품리스트가 길어져 이미지 노출 영역에 빈 영역이 발생합니다.</p>
														</div>
													</div>
												</div>
												<div class="mm_table_box-unit">
													<div class="mm_lside">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
																	<i class="ico_sortable-edit"></i><b>순서편집</b>
																</button>
															</div>
														</div>
													</div>
												</div>
												<!-- // 테이블상단 -->

												<div class="mm_table" data-table>
													<div class="mm_scroller">
														<table>
															<thead>
																<tr>
																	<th scope="col">
																		<div class="mm_table-item">
																			No.
																		</div>
																	</th>
																	<th scope="col">
																		<div class="mm_table-item">
																			X좌표(%)
																		</div>
																	</th>
																	<th scope="col">
																		<div class="mm_table-item">
																			Y좌표(%)
																		</div>
																	</th>
																	<th scope="col">
																		<div class="mm_table-item">
																			상품
																		</div>
																	</th>
																	<th scope="col">
																		<div class="mm_table-item">
																			관리
																		</div>
																	</th>
																</tr>
															</thead>
															<tbody>
																<tr id="dev_point_1">
																	<td>
																		<div class="mm_table-item">
																			1
																		</div>
																	</td>
																	<td data-editable>
																		<div class="mm_table-item">
																			<p class="text_editable S=positionX" contenteditable>
																				50.00
																			</p>
																			<span class="text_placeholder">X좌표</span>
																		</div>
																	</td>
																	<td data-editable>
																		<div class="mm_table-item">
																			<p class="text_editable S=positionY" contenteditable>
																				50.00
																			</p>
																			<span class="text_placeholder">Y좌표</span>
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			<div>
																			</div>
																			<div class="mm_selected">
																				<!-- (D) 상품 추가 팝업에서 상품 추가 시 'ul' 영역을 노출하고, 상품 추가 버튼은 비노출합니다. -->
																				<!-- <a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a> -->
																				<ul>
																					<li>
																						<b>일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십</b>
																						<button type="button" class="btn_remove">
																							<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
																						</button>
																					</li>
																				</ul>
																			</div>
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			<div class="mm_btn_box">
																				<div class="mm_inline">
																					<button type="button" class="mm_btn btn_pointer-remove">
																						<b>삭제</b>
																					</button>
																				</div>
																			</div>
																		</div>
																	</td>
																</tr>
																<tr id="dev_point_2">
																	<td>
																		<div class="mm_table-item">
																			2
																		</div>
																	</td>
																	<td data-editable>
																		<div class="mm_table-item">
																			<p class="text_editable S=positionX" contenteditable>
																				27.00
																			</p>
																			<span class="text_placeholder">X좌표</span>
																		</div>
																	</td>
																	<td data-editable>
																		<div class="mm_table-item">
																			<p class="text_editable S=positionY" contenteditable>
																				24.13
																			</p>
																			<span class="text_placeholder">Y좌표</span>
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			<div class="mm_selected">
																				<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
																			</div>
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			<div class="mm_btn_box">
																				<div class="mm_inline">
																					<button type="button" class="mm_btn btn_pointer-remove">
																						<b>삭제</b>
																					</button>
																				</div>
																			</div>
																		</div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>

												<!-- 테이블하단 -->
												<div class="mm_table_box-unit">
													<div class="mm_lside">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
																	<i class="ico_sortable-edit"></i><b>순서편집</b>
																</button>
															</div>
														</div>
													</div>
												</div>
												<!-- // 테이블하단 -->

												<!-- 유의사항 -->
												<div class="mm_note">
													<ul>
														<li>코디샷의 좌표는 %로 등록이 가능하며 최대 100% 까지 입력이 가능합니다.(소수점 2자리까지 입력 가능)</li>
													</ul>
												</div>
												<!-- // 유의사항 -->
											</div>
											<!-- // 이미지 포인트 좌표 설정 영역 -->
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- // 코디샷 이미지 및 포인트 설정 -->

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

				<!-- 현재 페이지 스크립트 -->
				<!-- <script src="../js/app_page-codyshot.js"></script> -->
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import { loadScript } from 'vue-plugin-load-script';
	import Layout from '@/components/layout/Layout.vue';

	loadScript(`${window.env_path ?? ''}/js/app_page-codyshot.js`);
</script>