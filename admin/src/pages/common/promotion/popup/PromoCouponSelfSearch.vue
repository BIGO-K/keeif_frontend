<template>
	<layout-popup>
		<template #title>
			<h1><b>쿠폰 조회</b></h1>
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
													<option>쿠폰명</option>
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
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder">검색어를 입력해주세요.</span>
											</label>
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

					<!-- 검색결과 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<div class="mm_table" data-table>
								<div class="mm_scroller">
									<table>
										<thead>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														쿠폰 유형
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														쿠폰명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														쿠폰 코드
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														할인율/할인금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														사용 여부
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														고객 사용 가능 여부
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
														다음 EP 쿠폰
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a href="/promotion/coupon/daum/detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>2022 새해맞이 쿠폰</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1234143241
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														20%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														사용
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														사용 가능
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=line T=secondary">
																	<b>적용</b>
																</button>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														일반 상품 쿠폰
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a href="/promotion/coupon/download/detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>2022 새해맞이 쿠폰</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1234143241
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">42312</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														사용
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														사용 가능
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=line T=secondary">
																	<b>적용</b>
																</button>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														일반 상품 쿠폰
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a href="/promotion/coupon/download/detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>2022 새해맞이 쿠폰</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1234143241
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">42312</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														사용
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														사용 가능
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=line T=secondary">
																	<b>적용</b>
																</button>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														일반 상품 쿠폰
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<a href="/promotion/coupon/download/detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>2022 새해맞이 쿠폰</b></a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1234143241
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">42312</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														사용
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														사용 가능
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=line T=secondary">
																	<b>적용</b>
																</button>
															</div>
														</div>
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

							<!-- 유의사항 -->
							<div class="mm_note">
								<ul>
									<li>쿠폰 수동 발급 시 <strong>기존 쿠폰 정보와 동일하게 발급</strong> 처리됩니다. (사용 여부 및 발행 기간, 유효 기간 제외)</li>
									<li>발행 기간이 <strong>종료된 쿠폰이라도 수동 발급 처리 가능</strong>합니다.</li>
									<li>사용 여부는 현 정보와 관계 없이 사용 가능한 상태로 발급됩니다.</li>
									<li><strong>유효 기간의 경우 쿠폰 선택 후 재설정</strong>할 수 있습니다.</li>
									<li>쿠폰명 클릭 시 해당 쿠폰의 상세 정보를 확인할 수 있습니다.</li>
								</ul>
							</div>
							<!-- // 유의사항 -->
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<div class="mm_table-none">
								<p>검색된 결과가 없습니다.</p>
							</div>

							<!-- 유의사항 -->
							<div class="mm_note">
								<ul>
									<li>쿠폰 수동 발급 시 <strong>기존 쿠폰 정보와 동일하게 발급</strong> 처리됩니다. (사용 여부 및 발행 기간, 유효 기간 제외)</li>
									<li>발행 기간이 <strong>종료된 쿠폰이라도 수동 발급 처리 가능</strong>합니다.</li>
									<li>사용 여부는 현 정보와 관계 없이 사용 가능한 상태로 발급됩니다.</li>
									<li><strong>유효 기간의 경우 쿠폰 선택 후 재설정</strong>할 수 있습니다.</li>
									<li>쿠폰명 클릭 시 해당 쿠폰의 상세 정보를 확인할 수 있습니다.</li>
								</ul>
							</div>
							<!-- // 유의사항 -->
						</div>
					</template>
					<!-- // 검색결과 -->
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