<template>
	<layout-popup>
		<template #title>
			<h1><b>결제수단 (신용/체크 카드) 매출내역</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 테이블영역 -->
					<div class="mm_table_box">
						<!-- 테이블 -->
						<div class="mm_table" data-table>
							<div class="mm_scroller">
								<table>
									<thead>
										<tr>
											<th scope="col">
												<div class="mm_table-item">
													주문번호
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													주문일시
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>123456489744</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-04-01 10:48:25
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>2000541502221</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-04-01 10:48:25
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>1158540550002</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-04-01 10:48:25
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>8415048480221</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-04-01 10:48:25
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>000012155512002</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-04-01 10:48:25
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>012584800202121</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-04-01 10:48:25
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													<a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>518415105020210</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-04-01 10:48:25
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
					</div>
					<!-- // 테이블영역 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>