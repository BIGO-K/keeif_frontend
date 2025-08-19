<template>
	<layout-popup>
		<template #title>
			<h1><b>쿠폰 선택</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-search">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 쿠폰 목록 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<div class="mm_table" data-table>
								<div class="mm_scroller">
									<table>
										<thead>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														선택
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														쿠폰명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														할인율/할인금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														최대 할인 금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														최소 사용 금액
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
												<td class="T=table-left">
													<div class="mm_table-item">
														VVIP 등급 쿠폰
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">50000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">100000</span>&nbsp;이상
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
												<td class="T=table-left">
													<div class="mm_table-item">
														VIP 등급 쿠폰
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														제한 없음
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">100000</span>&nbsp;이상
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
												<td class="T=table-left">
													<div class="mm_table-item">
														FRIEND 등급 쿠폰
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">5000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">5000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">30000</span>&nbsp;이상
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
												<td class="T=table-left">
													<div class="mm_table-item">
														STARTER 등급 쿠폰
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														3%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">2500</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														제한 없음
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>

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
							<div class="mm_table-none">
								<p>등록된 내용이 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 쿠폰 목록 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>선택 적용하기</b>
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
