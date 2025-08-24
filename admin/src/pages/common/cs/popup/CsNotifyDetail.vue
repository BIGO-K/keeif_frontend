<template>
	<layout-popup>
		<template #title>
			<h1><b>CS 알리미 상세</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- CS 알리미 상세 정보 -->
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
										<p>2020062220041</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>상품</b>
									</th>
									<td colspan="3">
										<div class="mm_table_box">
											<div class="mm_table" data-table>
												<div class="mm_scroller">
													<table>
														<thead>
															<tr>
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
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>판매처</b>
									</th>
									<td><p>자사몰</p></td>
									<th scope="row">
										<b>고객명</b>
									</th>
									<td><p>홍길동</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>등록자</b>
									</th>
									<td><p>관리자A</p></td>
									<th scope="row">
										<b>문의일시</b>
									</th>
									<td><p>2022-03-18 13:28:38</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>문의 유형</b>
									</th>
									<td><p>배송 문의</p></td>
									<th scope="row">
										<b>문의 종료 여부</b>
									</th>
									<td><p>진행 중</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>문의 제목</b>
									</th>
									<td colspan="3">
										<p>배송 문의드립니다.</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>문의 내용</b>
									</th>
									<td colspan="3">
										<div class="text_content">
											<p>
												배송이 안되고 있는데요<br>
												배송 확인 부탁드립니다.
											</p>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>답변 내용</b>
									</th>
									<td colspan="3">
										<p>답변자: 셀러A<br>답변일시: 2020-03-11 12:43:04</p><br>
										<div class="text_content">
											<p>
												답변 드립니다<br>
												답변 드립니다
											</p>
										</div>
									</td>
								</tr>
								<!-- (D) 셀러가 최고관리자에게 문의한 경우/최고 관리자의 문의에 셀러가 답변했을 경우 문의 종료 여부가 진행 중이면 답변 내용 작성 영역을 노출합니다. -->
								<tr>
									<th scope="row">
										<b>답변 내용</b>
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
								<!-- (D) 셀러가 최고관리자에게 문의한 경우/최고 관리자의 문의에 셀러가 답변했을 경우 문의 종료 여부가 진행 중이면 문의 종료 여부 영역을 노출합니다. -->
								<tr>
									<th scope="row">
										<b>문의 종료 여부</b>
									</th>
									<td colspan="3">
										<!-- (D) 문의 종료 여부가 '진행 중'일 경우 -->
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-inquiry-state" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">진행 중</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-inquiry-state" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">종료</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
										<div class="mm_note T=bottom">
											<ul>
												<li>진행 중으로 선택 후 답변시 상대방이 해당 문의에 대하여 답변이 가능합니다.</li>
												<li>종료로 선택 후 답변시 상대방이 해당 문의에 대하여 답변이 불가능합니다.</li>
											</ul>
										</div>
										<!-- (D) 문의 종료 여부가 '종료'일 경우 -->
										<!-- <p>종료</p> -->
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // CS 알리미 상세 정보 -->

					<!-- 최하단버튼 -->
					<!-- (D) 셀러가 최고관리자에게 문의한 경우/최고 관리자의 문의에 셀러가 답변했을 경우 문의 종료 여부가 진행 중이면 버튼 영역을 노출합니다. -->
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
</script>