<template>
	<layout-popup>
		<template #title>
			<h1><b>인증번호 등록/관리</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 인증번호 등록 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>쿠폰명</b>
									</th>
									<td colspan="3">
										<p>어린이날 15% 쿠폰</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>등록 방법</b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-register" data-radio="{ 'syncer': '.mm_syncer-register-auto' }" checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">자동생성</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-register" data-radio="{ 'syncer': '.mm_syncer-register-excel' }">
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">엑셀 업로드</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr class="mm_syncer-register-auto">
									<th scope="row">
										<b>등록 수량</b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-linked">
											<div class="mm_form-text T=xs">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="4"><i class="bg_text"></i>
													<span class="text_placeholder">숫자만 입력</span>
												</label>
											</div>
											<p class="text_linked">
												장
											</p>
										</div>
										<div class="mm_note">
											<p>1회 최대 등록 가능한 수량은 1,000장입니다.</p>
										</div>
									</td>
								</tr>
								<tr class="mm_syncer-register-excel">
									<th scope="row">
										<b>엑셀 업로드</b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-linked">
											<div class="mm_form-file">
												<button type="button" class="btn_remove-file">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">파일삭제</b>
												</button>
												<label>
													<input type="file" accept=".zip" data-file="{ '_fileName': 'coupon_paper_number' }">
													<span class="text_path"></span>
													<span class="mm_btn T=line T=light text_label">파일첨부</span>
												</label>
											</div>
											<a class="btn_sample" href="#" download><b>샘플다운받기</b></a>
											<button type="button" class="mm_btn T=line T=xload btn_excel">
												<b>엑셀 업로드</b><i class="ico_upload"></i>
											</button>
										</div>
										<div class="mm_note T=bottom">
											<ul>
												<li>1회 최대 등록 가능한 수량은 5,000장입니다. (쿠폰 인증번호는 영문/숫자로 최소 8자 최대 12자까지 입력 가능)</li>
												<li><strong>coupon_paper_number 파일명만 업로드가 가능</strong>합니다. (xls/xlsx 확장자를 제외한 파일 및 이미지는 업로드 불가)</li>
												<li>파일 지정 후 업로드 버튼 클릭 시 하단 목록에 적용되어 노출됩니다.</li>
											</ul>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 인증번호 등록 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>등록하기</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 최하단버튼 -->

					<!-- 인증번호 등록 목록 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>인증번호 목록</b>
								</h3>
							</div>
							<div class="mm_table_box-unit">
								<div class="mm_lside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<button type="button" class="mm_btn T=line">
												<b>선택 삭제</b>
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
							<!-- // 테이블상단 -->

							<!-- 테이블 -->
							<div class="mm_table" data-table>
								<div class="mm_scroller">
									<table>
										<thead>
											<tr>
												<th class="col_check" scope="col">
													<div class="mm_table-item">
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-table" data-check="{ '_type': 'check_all' }">
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label mm_ir-blind">전체선택</span>
															</b>
														</label>
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														No.
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														인증번호
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등록일자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등록자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														발급상태
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-table" data-check>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label mm_ir-blind">항목선택</span>
															</b>
														</label>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														3
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														3000FQAFF
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-01-22
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														최고관리자
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														미발급
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														<span class="text_check-none">-</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														3000FQAFF
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-01-22
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														최고관리자
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														발급
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														<span class="text_check-none">-</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														3000FQAFF
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-01-22
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														최고관리자
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														발급
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
											<button type="button" class="mm_btn T=line">
												<b>선택 삭제</b>
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
							<!-- // 테이블하단 -->

							<!-- 페이지네이션 -->
							<!-- (D) 현재 페이지의 메뉴에 'S=page-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
							<div class="mm_pagination">
								<div class="mm_inline">
									<ol>
										<li><a class="S=page-on" href="#" title="선택됨"><b>1</b></a></li>
										<li><a href="#"><b>2</b></a></li>
										<li><a href="#"><b>3</b></a></li>
										<li><a href="#"><b>4</b></a></li>
										<li><a href="#"><b>5</b></a></li>
									</ol>
									<button type="button" class="btn_control-first" onclick="mm.link('')" disabled>
										<i class="ico_page-first"></i><b class="mm_ir-blind">처음</b>
									</button>
									<button type="button" class="btn_control-prev" onclick="mm.link('')" disabled>
										<i class="ico_page-prev"></i><b class="mm_ir-blind">이전</b>
									</button>
									<button type="button" class="btn_control-next" onclick="mm.link('')">
										<i class="ico_page-next"></i><b class="mm_ir-blind">다음</b>
									</button>
									<button type="button" class="btn_control-last" onclick="mm.link('')">
										<i class="ico_page-last"></i><b class="mm_ir-blind">마지막</b>
									</button>
								</div>
							</div>
							<!-- // 페이지네이션 -->
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>인증번호 목록</b>
								</h3>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>등록된 내용이 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 인증번호 등록 목록 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	// 내용없음
	const _isNone = false;
</script>