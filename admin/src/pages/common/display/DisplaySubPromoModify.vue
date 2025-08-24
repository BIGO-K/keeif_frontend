<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>기획전 수정</b>
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

					<!-- 기획전 정보 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
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
										<b>상품 노출 형식<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-prod-type" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">파일 생성</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-prod-type" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">즉시 반영</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>댓글 설정</b>
									</th>
									<td colspan="3">
										<label class="mm_form-check">
											<input type="checkbox" data-check>
											<b class="mm_block">
												<i class="ico_form-check"></i>
												<span class="text_label">사용</span>
											</b>
										</label>
										<div class="mm_note">
											<p>사용 체크 시 회원이 해당 기획전에 댓글을 작성할 수 있습니다.</p>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 기획전 정보 -->

					<!-- 상세 컨텐츠 등록 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>상세 컨텐츠 등록</b>
							</h3>
						</div>
						<div class="mm_form_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<!-- (D) '컨텐츠 추가' 버튼 클릭 시 상세 컨텐츠 등록 영역을 추가합니다. -->
										<button type="button" class="mm_btn">
											<b>컨텐츠 추가</b>
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
											<b>상세 컨텐츠 1<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<b>Mobile</b>
															</th>
															<td>
																<div class="mm_editor"></div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>PC</b>
															</th>
															<td>
																<div class="mm_editor"></div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>상품 등록</b>
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
											<b>상세 컨텐츠 2<i class="ico_required" title="필수입력"></i></b>
											<!-- (D) '컨텐츠 추가'로 추가된 상세 컨텐츠에 '삭제' 버튼을 노출하며, 클릭 시 해당 상세 컨텐츠를 삭제합니다. -->
											<button type="button" class="mm_btn T=xs T=line" onclick="mm.bom.confirm('상세 컨텐츠를 삭제하시겠습니까?');">
												<b>삭제</b>
											</button>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<b>Mobile</b>
															</th>
															<td>
																<div class="mm_editor"></div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>PC</b>
															</th>
															<td>
																<div class="mm_editor"></div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>상품 등록</b>
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
										<!-- (D) '컨텐츠 추가' 버튼 클릭 시 상세 컨텐츠 등록 영역을 추가합니다. -->
										<button type="button" class="mm_btn">
											<b>컨텐츠 추가</b>
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
					<!-- // 상세 컨텐츠 등록 -->

					<!-- 상품 그룹 목록 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h4 class="mm_heading">
								<b>상품 그룹 목록</b>
							</h4>
						</div>
						<div class="mm_table_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<!-- (D) '상품 그룹 추가' 버튼 클릭 시 상품 그룹을 추가합니다. -->
										<button type="button" class="mm_btn">
											<b>상품 그룹 추가</b>
										</button>
										<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
											<i class="ico_sortable-edit"></i><b>순서편집</b>
										</button>
									</div>
								</div>
							</div>
						</div>
						<!-- // 테이블상단 -->

						<!-- 테이블 -->
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
													상품 그룹명<i class="ico_required" title="필수입력"></i>
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													그룹 이미지
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													노출 여부<i class="ico_required" title="필수입력"></i>
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													노출 상품<i class="ico_required" title="필수입력"></i>
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													상품 추가
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
										<tr>
											<td>
												<div class="mm_table-item">
													1
												</div>
											</td>
											<td data-editable="{ '_byte': 20 }">
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder">최대 20자 입력</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm T=line T=secondary" href="/display/sub/promotion/image/register" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>이미지 등록</b></a>
														</div>
													</div>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_radio-list">
														<ul>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-exposure1" data-radio checked>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">노출</span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-exposure1" data-radio>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">미노출</span>
																	</b>
																</label>
															</li>
														</ul>
													</div>
												</div>
											</td>
											<td><div class="mm_table-item"></div></td>
											<td>
												<div class="mm_table-item">
													<a class="mm_btn T=sm T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<button type="button" class="mm_btn T=sm T=line">
																<b>삭제</b>
															</button>
														</div>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													2
												</div>
											</td>
											<td data-editable="{ '_byte': 20 }">
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder">최대 20자 입력</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm" href="/display/sub/promotion/image/modify" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>이미지 수정</b></a>
															<!-- (D) 제거 버튼 클릭 시 '이미지 등록' 버튼을 노출하고, '이미지 수정, 제거' 버튼은 비노출합니다. -->
															<button type="button" class="mm_btn T=sm T=line" onclick="mm.bom.confirm('등록된 그룹 이미지를 제거하시겠습니까?');">
																<b>제거</b>
															</button>
															<!-- <a class="mm_btn T=sm T=line T=secondary" href="/display/sub/promotion/image/register" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>이미지 등록</b></a> -->
														</div>
													</div>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
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
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a class="mm_btn T=sm T=line" href="/product-list" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>등록 상품 확인 <strong class="mm_text-secondary text_num">1000</strong>개</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a class="mm_btn T=sm T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<button type="button" class="mm_btn T=sm T=line">
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
						<!-- // 테이블 -->

						<!-- 테이블하단 -->
						<div class="mm_table_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<!-- (D) '상품 그룹 추가' 버튼 클릭 시 상품 그룹을 추가합니다. -->
										<button type="button" class="mm_btn">
											<b>상품 그룹 추가</b>
										</button>
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
								<li>상품 그룹명과 그룹 이미지 둘 다 등록된 경우, <strong>그룹 이미지만 프론트에 노출</strong>됩니다.</li>
							</ul>
						</div>
						<!-- // 유의사항 -->
					</div>

					<!-- 내용없음 -->
					<!--
						<div class="mm_table_box">
						<div class="mm_table_box-caption">
						<h4 class="mm_heading"><b>상품 그룹 목록</b></h4>
						</div>
						<div class="mm_table_box-unit">
						<div class="mm_lside">
						<div class="mm_btn_box">
						<div class="mm_inline">
						<button type="button" class="mm_btn"><b>상품 그룹 추가</b></button>
						</div>
						</div>
						</div>
						</div>

						<div class="mm_table-none">
						<p>등록된 내용이 없습니다.</p>
						</div>

						<div class="mm_table_box-unit">
						<div class="mm_lside">
						<div class="mm_btn_box">
						<div class="mm_inline">
						<button type="button" class="mm_btn"><b>상품 그룹 추가</b></button>
						</div>
						</div>
						</div>
						</div>
						</div>
					-->
					<!-- // 내용없음 -->
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