<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>스팟성 테마관 등록</b>
						</h2>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xs T=round">
									<i class="ico_plus"></i><b>즐겨찾기 추가</b>
								</button>
								<a class="mm_btn T=xs T=round" href="" target="_blank" title="새 창 열림"><i class="ico_newtab"></i><b>새창보기</b></a>
							</div>
						</div>
					</div>
					<div>
						<!-- 테마관 등록 -->
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>테마관명<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text="{ '_byte': 10 }"><i class="bg_text"></i>
													<span class="text_placeholder">최대 10자 입력</span>
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
											<b>노출 기간<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-period">
												<div class="mm_form-text T=calendar">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b
															class="mm_ir-blind"
														>지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
														<span class="text_placeholder">시작일</span>
														<i class="ico_datepicker-calendar"></i>
													</label>
												</div>
												<span class="text_tilde">~</span>
												<div class="mm_form-text T=calendar">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b
															class="mm_ir-blind"
														>지우기</b>
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
											<b>사용 방식<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-method" data-radio="{ 'syncer': '.mm_syncer-method-template' }" checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">템플릿 등록 방식</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-method" data-radio="{ 'syncer': '.mm_syncer-method-url' }">
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">URL 등록 방식</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr class="mm_syncer-method-template">
										<th scope="row">
											<b>템플릿 추가<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<div class="mm_form-select __select_xxs__">
													<label>
														<select data-select>
															<option>템플릿 A</option>
															<option>템플릿 B</option>
															<option>템플릿 C</option>
														</select>
														<b class="text_selected"></b>
														<i class="ico_form-select"></i>
													</label>
												</div>
												<!--
													(D) 템플릿 추가 시 템플릿 관리 영역(m_display-template)에 tr을 추가하고
													추가한 템플릿 종류(A,B,C)에 맞는 m_display-template-form을 mm_form-hidden 영역에 순서에 맞게 추가합니다.
													tr과 m_display-template-form의 순서는 같아야 합니다.
												-->
												<div class="mm_btnbox">
													<div class="mm_inline">
														<button type="button" class="mm_btn T=line T=secondary">
															<b>추가</b>
														</button>
														<a class="mm_btn T=line" href="/display/sub/spot/template/guide" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>템플릿 안내</b></a>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr class="mm_syncer-method-url">
										<th scope="row">
											<b>URL 등록<i class="ico_required" title="필수입력"></i></b>
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
												<p>URL 등록 시, 도메인을 제외한 나머지 부분을 입력해 주세요.<br>예) (X) https://www.naver.com / (O) goods/category/11/115/1053</p>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<!-- 템플릿 리스트 영역 -->
						<!-- (D) 추가된 템플릿이 1개 이상일 경우에만 "템플릿 관리 영역"을 노출합니다. -->
						<div class="mm_table_box __table_sortable__ mm_syncer-method-template">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>템플릿 리스트</b>
								</h3>
							</div>
							<div class="mm_table_box-unit">
								<div class="mm_lside">
									<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
										<i class="ico_sortable-edit"></i><b>순서 변경</b>
									</button>
								</div>
							</div>
							<!-- // 테이블상단 -->

							<!-- 테이블 -->
							<div class="mm_table" data-table>
								<div class="mm_scroller">
									<table>
										<colgroup>
											<col style="width:5%;">
											<col>
											<col>
											<col>
											<col style="width:10%;">
										</colgroup>
										<thead>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														No.
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														템플릿 종류
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														수정일시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														수정자
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
												<td>
													<div class="mm_table-item">
														템플릿A
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2023-02-01 12:23:34
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														amdin(최고관리자)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<!-- (D) 템플릿 추가시 작성버튼을 노출하고, 해당 템플릿이 작성된 이후에는 수정 버튼을 노출합니다. -->
																<!-- <a class="mm_btn T=sm" href="/display/sub/spot/template/type-a" data-href="{ '_type': 'popup' }"><b>수정</b></a> -->
																<a class="mm_btn T=sm" href="/display/sub/spot/template/type-a" data-href="{ '_type': 'popup' }"><b>작성</b></a>
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
												<td>
													<div class="mm_table-item">
														템플릿B
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2023-02-02 10:13:14
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														amdin(최고관리자)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<!-- (D) 템플릿 추가시 작성버튼을 노출하고, 해당 템플릿이 작성된 이후에는 수정 버튼을 노출합니다. -->
																<!-- <a class="mm_btn T=sm" href="/display/sub/spot/template/type-bc" data-href="{ '_type': 'popup' }"><b>수정</b></a> -->
																<a class="mm_btn T=sm" href="/display/sub/spot/template/type-bc" data-href="{ '_type': 'popup' }"><b>작성</b></a>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														3
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														템플릿C
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2023-02-01 12:23:34
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														amdin(최고관리자)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<!-- (D) 템플릿 추가시 작성버튼을 노출하고, 해당 템플릿이 작성된 이후에는 수정 버튼을 노출합니다. -->
																<!-- <a class="mm_btn T=sm" href="/display/sub/spot/template/type-bc" data-href="{ '_type': 'popup' }"><b>수정</b></a> -->
																<a class="mm_btn T=sm" href="/display/sub/spot/template/type-bc" data-href="{ '_type': 'popup' }"><b>작성</b></a>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														4
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														템플릿B
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2023-02-03 14:23:34
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														amdin(최고관리자)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<!-- (D) 템플릿 추가시 작성버튼을 노출하고, 해당 템플릿이 작성된 이후에는 수정 버튼을 노출합니다. -->
																<!-- <a class="mm_btn T=sm" href="/display/sub/spot/template/type-bc" data-href="{ '_type': 'popup' }"><b>수정</b></a> -->
																<a class="mm_btn T=sm" href="/display/sub/spot/template/type-bc" data-href="{ '_type': 'popup' }"><b>작성</b></a>
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
						</div>
						<!-- // 템플릿 리스트 영역 -->

						<!-- 최하단버튼 -->
						<div class="mm_foot">
							<div class="mm_btn_box">
								<div class="mm_inline">
									<a class="mm_btn T=xl T=line T=tertiary" href="#" data-href="{ '_type': 'link' }"><b>취소하기</b></a>
									<button type="button" class="mm_btn T=xl T=tertiary">
										<b>등록하기</b>
									</button>
								</div>
							</div>
						</div>
						<!-- // 최하단버튼 -->
						<!-- // 테마관 등록 -->
					</div>
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>