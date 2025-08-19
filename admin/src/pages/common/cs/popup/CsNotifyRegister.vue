<template>
	<layout-popup>
		<template #title>
			<h1><b>CS 알리미 등록</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 폼 영역 -->
					<div class="mm_form_box">
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>주문번호</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<div class="mm_form-text T=sm">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text><i class="bg_text"></i>
														<span class="text_placeholder">주문번호</span>
													</label>
												</div>
												<button type="button" class="mm_btn T=line">
													<b>주문번호 조회</b>
												</button>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<!-- // 폼 영역 -->

						<!-- 유의사항 -->
						<div class="mm_note">
							<ul>
								<li>주문번호 조회 후 CS 알리미 등록이 가능합니다.</li>
								<li>주문번호 조회 후 노출되는 주문 內 상품 중 체크박스에 체크한 상품의 셀러에게만 CS 알리미가 발송됩니다.<br>(선택한 여러 상품이 모두 1개의 셀러일 경우 선택한 상품의 수만큼 CS 알리미가 셀러에게 발송됩니다.)</li>
							</ul>
						</div>
						<!-- // 유의사항 -->
					</div>

					<!-- 상품 리스트 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<div class="mm_table" data-table>
								<div class="mm_scroller">
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
														순번
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														상품명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														상품 옵션
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														수량
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러명
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
														1
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>상품 A</b>
														</p>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														BK / 55
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러 A
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
														2
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>상품 A</b>
														</p>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														RED / 55
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셀러 A
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<div class="mm_table-none">
								<p>검색된 결과가 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 상품 리스트 -->

					<!-- 폼 영역 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>판매처</b>
									</th>
									<td>-</td>
									<th scope="row">
										<b>고객명</b>
									</th>
									<td>-</td>
								</tr>
								<tr>
									<th scope="row">
										<b>문의 유형</b>
									</th>
									<td colspan="3">
										<div class="mm_form-select">
											<label>
												<select data-select>
													<option>문의 유형을 설정해 주세요.</option>
													<option>배송 문의</option>
													<option>반품 가능 여부 문의</option>
													<option>반품 입고 여부 문의</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>문의 제목</b>
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
										<b>문의 내용</b>
									</th>
									<td colspan="3">
										<div class="mm_form-textarea">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<textarea class="textfield" data-text="{ '_resizeMin': 6, '_byte': 5000 }"></textarea><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 5,000자 입력</span>
											</label>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 폼 영역 -->

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