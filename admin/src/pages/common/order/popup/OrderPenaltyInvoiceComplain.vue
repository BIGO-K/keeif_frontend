<template>
	<layout-popup>
		<template #title>
			<h1><b>이의 제기</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>주문번호-순번</b>
									</th>
									<td><p>123123123-1</p></td>
									<th scope="row">
										<b>셀러</b>
									</th>
									<td><p>셀러A</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>패널티 항목</b>
									</th>
									<td><p>가송장</p></td>
									<th scope="row">
										<b>가송장 적용일</b>
									</th>
									<td><p>2022-05-05</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>부과 수수료</b>
									</th>
									<td colspan="3">
										<p class="text_price">
											3000
										</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>택배사</b>
									</th>
									<td colspan="3">
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option>택배사를 선택하세요.</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>송장번호</b>
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
										<b>실 발송 처리일</b>
									</th>
									<td colspan="3">
										<div class="mm_form-text T=xs T=calendar">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
												<span class="text_placeholder">날짜선택</span>
												<i class="ico_datepicker-calendar"></i>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>이의 제기 금액</b>
									</th>
									<td colspan="3">
										<p class="text_price">
											3000
										</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>이의 제기 내용</b>
									</th>
									<td colspan="3">
										<div class="mm_form-textarea">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<textarea class="textfield" data-text="{ '_resizeMin': 6, '_byte': 100 }"></textarea><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">100자 입력 가능</span>
											</label>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>등록하기</b>
								</button>
							</div>
						</div>
					</div>
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