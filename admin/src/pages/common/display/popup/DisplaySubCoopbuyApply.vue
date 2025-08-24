<template>
	<layout-popup>
		<template #title>
			<h1><b>공동구매 신청 회원</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 공동구매 정보 -->
					<div class="mm_table_box">
						<!-- 목록 -->
						<div class="mm_table" data-table>
							<div class="mm_scroller">
								<table>
									<thead>
										<tr>
											<th scope="col">
												<div class="mm_table-item">
													상품 코드
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													상품명
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													쿠폰정보
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													진행 상태
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													공동구매 기간
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													202123123123
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>[밸리걸] 레터링 티셔츠 120670</b>
													</p>
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<a href="/promotion/coupon/download/detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>2022 새해맞이 쿠폰</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													진행 예정
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-01-01 ~ 2022-01-01
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 목록 -->
					</div>
					<!-- // 공동구매 정보 -->

					<!-- 공동구매 신청 회원 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h3 class="mm_heading">
								<b>공동구매 신청 회원</b>
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
													No.
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													회원명
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													회원 아이디
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													옵션
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													신청일시
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													20
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													**휘
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													hwihwi10**
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													BK / 55
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2021-03-22 12:33:23
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													20
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													**휘
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													hwihwi10**
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													BK / 55
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2021-03-22 12:33:23
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													20
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													**휘
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													hwihwi10**
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													BK / 55
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2021-03-22 12:33:23
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													20
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													**휘
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													hwihwi10**
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													BK / 55
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2021-03-22 12:33:23
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- 테이블 -->

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
					<!-- // 공동구매 신청 회원 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>