<template>
	<layout-popup>
		<template #title>
			<h1><b>주문 취소</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 주문 정보 -->
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
									<td><a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>202205070001</b></a></td>
									<th scope="row">
										<b>주문일시</b>
									</th>
									<td><p>2022-05-07 09:09:10</p></td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 주문 정보 -->

					<!-- 상품 정보 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h3 class="mm_heading">
								<b>상품 정보</b>
							</h3>
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
													상품명
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													상품 코드
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
													셀러
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>[밸리걸] 레터링 티셔츠 120670</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													123
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
													셀러A
												</div>
											</td>
										</tr>
										<tr>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>[밸리걸] 레터링 티셔츠 120670</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													456
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													BK / 66
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													1
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러B
												</div>
											</td>
										</tr>
										<tr>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>[밸리걸] 레터링 티셔츠 120670</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													789
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													WH / 55
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													1
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러C
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->

						<div class="mm_note">
							<ul>
								<li>물류 배송(새벽 배송) 상품은 <strong>주문 상태를 일괄로 변경</strong>해야 합니다. 일부만 주문 상태를 변경하여도 WMS에 물류 배송(새벽 배송) 전 상품이 연동됩니다.</li>
							</ul>
						</div>
					</div>
					<!-- // 상품 정보 -->

					<!-- 취소 사유 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>취소 사유<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-select">
											<label>
												<select data-select>
													<option>취소 사유를 선택해주세요.</option>
													<option data-option="{ 'syncer': '.mm_syncer-cancel-etc' }">기타</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
										<div class="mm_syncer-cancel-etc">
											<div class="mm_form-textarea">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<textarea class="textfield" data-text="{ '_resizeMin': 6, '_byte': 50 }"></textarea><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">최대 50자 입력</span>
												</label>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>예금주<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 30 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 30자 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>환불 계좌 정보<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-linked T=fit">
											<div class="mm_form-select T=xs">
												<label>
													<select data-select>
														<option>은행을 선택하세요.</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="20"><i class="bg_text"></i>
													<span class="text_placeholder">계좌번호를 입력하세요.(숫자만 입력)</span>
												</label>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 취소 사유 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>변경하기</b>
								</button>
							</div>
						</div>
					</div>
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>