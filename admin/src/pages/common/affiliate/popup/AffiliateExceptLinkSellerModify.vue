<template>
	<layout-popup>
		<template #title>
			<h1><b>제외 항목 수정</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 제외 판매처 -->
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
										<th></th><td></td><th></th><td></td>
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
								<li>기존에 제외 판매처가 설정되어 있어도 새로 체크한 판매처만 제외 판매처로 적용 됩니다.<br>(제외 판매처가 설정된 상품에 제외 판매처를 추가하려면 기존에 제외했던 판매처도 같이 체크하여 일괄적용 진행해 주시기 바랍니다.)</li>
							</ul>
						</div>
						<!-- // 안내문구 -->
					</div>
					<!-- // 제외 판매처 -->

					<!-- 제외 항목 수정 -->
					<div class="mm_table_box">
						<!-- 테이블 -->
						<div class="mm_table" data-table>
							<div class="mm_scroller" style="max-height:300px;">
								<table>
									<thead>
										<tr>
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
											<td data-editable="{ '_byte': 30 }">
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder">최대 30자 입력</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러 A
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													1234143241
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													11번가, 옥션, G마켓
												</div>
											</td>
										</tr>
										<tr>
											<td data-editable="{ '_byte': 30 }">
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder">최대 30자 입력</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러 A
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													1234143241
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													11번가
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->
					</div>
					<!-- // 제외 항목 수정 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
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
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>
