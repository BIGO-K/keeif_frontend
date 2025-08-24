<template>
	<layout-popup>
		<template #title>
			<h1><b>셀러 검색</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 검색 -->
					<div class="mm_search">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td><th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>검색</b>
									</th>
									<td colspan="7">
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option>셀러</option>
													<option>셀러 코드</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
										<div class="mm_form-textarea">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<textarea class="textfield" data-text></textarea><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">검색어를 입력해 주세요.</span>
											</label>
										</div>
										<div class="mm_note">
											<ul>
												<li><strong>줄바꿈</strong>으로 구분하여 다중 검색 가능 (최대 100줄)</li>
											</ul>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=lg T=tertiary btn_search">
									<b>검색</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 검색 -->

					<!-- 제외 판매처 -->
					<!-- (D) 제휴 연동 제외에서 상품 추가했을 때 노출합니다. -->
					<div class="mm_form_box">
						<div class="mm_form">
							<table>
								<colgroup>
									<col>
									<col>
									<col>
									<col style="width:88px;">
								</colgroup>
								<tbody>
									<tr>
										<th></th>
										<td></td>
										<th></th>
										<td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>제외 사유</b>
										</th>
										<td colspan="2">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="30"><i class="bg_text"></i>
													<span class="text_placeholder">최대 30자 입력</span>
												</label>
											</div>
										</td>
										<td>
											<button type="button" class="mm_btn T=line T=secondary">
												<b>일괄적용</b>
											</button>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>제외 판매처</b>
										</th>
										<td colspan="2">
											<div class="mm_check-list">
												<ul>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-seller" data-check>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">11번가</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-seller" data-check>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">옥션</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-seller" data-check>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">G마켓</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-seller" data-check>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">쿠팡</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
										<td>
											<button type="button" class="mm_btn T=line T=secondary">
												<b>일괄적용</b>
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<!-- 안내문구 -->
						<div class="mm_note">
							<ul>
								<li>제외 판매처 체크 후 일괄적용 진행 시, 목록에 노출되는 상품에 일괄적으로 체크한 판매처가 제외 판매처로 적용 됩니다.</li>
								<li>
									기존에 제외 판매처가 설정되어 있어도 새로 체크한 판매처만 제외 판매처로 적용 됩니다.<br>(제외 판매처가 설정된 상품에 제외 판매처를 추가하려면 기존에 제외했던 판매처도 같이 체크하여
									일괄적용 진행해 주시기 바랍니다.)
								</li>
							</ul>
						</div>
						<!-- // 안내문구 -->
					</div>
					<!-- // 제외 판매처 -->

					<!-- 검색결과 -->
					<div class="mm_table_box">
						<div class="mm_table" data-table>
							<div class="mm_scroller" style="max-height:300px;">
								<table>
									<thead>
										<tr>
											<th class="col_check" scope="col">
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-option" data-check="{ '_type': 'check_all' }">
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
													제외 사유
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													셀러
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													셀러 코드
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													제외 판매처
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-option" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													31
												</div>
											</td>
											<td data-editable="{ '_byte': 30 }">
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder">최대 30자 입력</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러 21
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													123123123
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													11번가
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-option" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													30
												</div>
											</td>
											<td data-editable="{ '_byte': 30 }">
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder">최대 30자 입력</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러 21
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													123123123
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													11번가, 쿠팡
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-option" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													29
												</div>
											</td>
											<td data-editable="{ '_byte': 30 }">
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder">최대 30자 입력</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러 21
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													123123123
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													옥션, 지마켓, 쿠팡
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<!-- // 검색결과 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>추가하기</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 최하단버튼 -->
				</div>
				<!-- // 본문 내용 -->

				<!-- 현재 페이지 스크립트 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>
