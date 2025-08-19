<template>
	<layout-popup>
		<template #title>
			<h1><b>할인 내역</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-stats-discount">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 테이블 영역 -->
					<div class="mm_table_box">
						<!-- 테이블 -->
						<div class="mm_table" data-table>
							<div class="mm_scroller">
								<table>
									<thead>
										<tr>
											<th scope="col">
												<div class="mm_table-item">
													No.
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													주문번호
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
													1차 쿠폰 할인율
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													1차 쿠폰 할인금액
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													자사 부담금액
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													셀러 부담금액
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
											<td>
												<div class="mm_table-item">
													<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>2929192922</b></a>
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
														<b>메일러 다운 파카 white</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													FREE / 100
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">10</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													10%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">2600</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">0</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">2600</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													2
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>2929192922</b></a>
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
														<b>[라이] LIE 자수 스모크 디테일 셔츠 원피스 블랙</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													FREE / 100
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">10</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													10%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">2600</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">0</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">2600</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													3
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>2929192922</b></a>
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
														<b>팀버랜드 남성 Supaway 페브릭 스니커즈 블랙_TB0A2KQA0011</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													FREE / 100
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">10</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													10%
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">2600</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">0</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">2600</span>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->

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

						<!-- 안내문구 -->
						<div class="mm_note">
							<ul>
								<li>결제 완료된 주문내역만 노출됩니다.</li>
							</ul>
						</div>
						<!-- // 안내문구 -->
					</div>
					<!-- // 테이블 영역 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>