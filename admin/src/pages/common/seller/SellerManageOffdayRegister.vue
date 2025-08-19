<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>배송 휴무일 등록[셀러A]</b>
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

					<!-- 배송 휴무일 등록 영역 -->
					<div class="mm_form_box">
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>셀러 검색<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_selected">
												<!-- (D) 검색 팝업에서 선택 적용 시 'ul' 영역을 노출합니다. -->
												<a class="mm_btn T=line" href="/search/seller-single" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 검색</b></a>
												<!--
													<ul>
													<li>
													<b>셀러 A</b>
													<button type="button" class="btn_remove"><i class="ico_remove"></i><b class="mm_ir-blind">삭제</b></button>
													</li>
													</ul>
												-->
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>휴무일 관련 안내 문구</b>
										</th>
										<td colspan="3">
											<!-- (D) 사유, 출고 불가 기간, 출고 시작일 영역에 설정된 값을 노출합니다. -->
											<p><span class="mm_text-secondary">배송지연</span> (으)로 인해 <span class="mm_text-secondary">2020-11-22 ~ 2020-11-22</span> 주문한 상품은 <span class="mm_text-secondary">2020-11-22</span> 부터 순차적으로 배송됩니다.</p>
											<!-- <p><span class="mm_text-secondary">-</span> (으)로 인해 <span class="mm_text-secondary">-</span> 주문한 상품은 <span class="mm_text-secondary">-</span> 부터 순차적으로 배송됩니다.</p> -->
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>사유<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<div class="mm_form-select T=sm">
													<label>
														<select data-select>
															<option>사유를 선택하세요.</option>
															<option>휴무일</option>
															<option>휴가</option>
															<option>재고 정리</option>
															<option>회사 이전</option>
															<option>물류센터</option>
															<option>출고지 이슈</option>
															<option data-option="{ 'syncer': '.mm_syncer-holiday-reason' }">기타(직접입력)</option>
														</select>
														<b class="text_selected"></b>
														<i class="ico_form-select"></i>
													</label>
												</div>
												<div class="mm_syncer-holiday-reason">
													<div class="mm_form-text">
														<button type="button" class="btn_text-clear">
															<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
														</button>
														<label>
															<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
															<span class="text_placeholder mm_ir-blind">최대 50자 입력</span>
														</label>
													</div>
												</div>
											</div>
											<div class="mm_note">
												<p>직접 입력 시 프론트에 노출되지 않으며, '협력사 사정'으로 문구 대체됩니다.</p>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>출고 불가 기간<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
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
											<b>출고 시작일<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-text T=calendar">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<!-- (D) 출고 불가 기간 설정 시 'disabled' 속성을 제거합니다. -->
													<input type="text" class="textfield" data-text data-datepicker disabled><i class="bg_text"></i>
													<span class="text_placeholder">출고 시작일</span>
													<i class="ico_datepicker-calendar"></i>
												</label>
											</div>
											<div class="mm_note">
												<p>출고 불가 종료일부터 3영업일 이내로 설정 가능합니다.</p>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>공지 노출 기간<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-period">
												<div class="mm_form-text T=calendar">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<!-- (D) 출고 불가 기간 설정 시 'disabled' 속성을 제거합니다. -->
														<input type="text" class="textfield" data-text data-datepicker disabled><i class="bg_text"></i>
														<span class="text_placeholder">시작일</span>
														<i class="ico_datepicker-calendar"></i>
													</label>
												</div>
												<b class="text_tilde">~</b>
												<p class="text_linked">
													출고 불가 기간 설정 시 노출
												</p>
												<!-- <p class="text_linked">2022-04-04</p> -->
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송 출발 준수일<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											-
										</td>
										<!-- <td><p>2022-04-04</p></td> -->
									</tr>
								</tbody>
							</table>
						</div>

						<!-- 안내 문구 -->
						<div class="mm_note">
							<ul>
								<li>배송 출발 준수일은 출고 불가 기간 종료일로부터 + 3영업일로 자동 적용됩니다.</li>
							</ul>
						</div>
						<!-- // 안내 문구 -->
					</div>
					<!-- // 배송 휴무일 등록 영역 -->

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
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>