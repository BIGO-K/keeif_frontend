<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>정산 상세 내역</b>
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

					<!-- 유의사항 -->
					<div class="mm_note">
						<ul>
							<li>판매분 정산은 <strong>상세 페이지에서 데이터 보정</strong>이 가능합니다.</li>
							<li><strong>임시 마감이 되지 않은 상태에서만 데이터 보정</strong>이 가능합니다.</li>
							<li>임시 마감된 상태에서 마감 확정을 진행 할 경우 마감 해제가 불가합니다.</li>
							<li>마감 확정 이후 [세금 계산서 양식 다운로드] 버튼 클릭 시 세금 계산서 양식 엑셀 파일 다운로드가 가능합니다.</li>
						</ul>
					</div>
					<!-- // 유의사항 -->

					<!-- 최종 정산 금액 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h3 class="mm_heading">
								<b>최종 정산 금액</b>
							</h3>
							<div class="mm_rside">
								<a class="mm_btn T=line btn_help" href="../calc/state" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>도움말</b><i class="ico_help"></i></a>
							</div>
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
													정산 월
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													총 마진 제외 금액
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													총 셀러 부담 할인 금액
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													총 패널티
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													총 배송비
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													최종 정산 금액
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													2022-03
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td class="T=highlight">
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->
					</div>
					<!-- // 최종 정산 금액 -->

					<!-- 판매분 정산집계 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h3 class="mm_heading">
								<b>판매분 정산집계</b>
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
													판매 수량
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													판매 금액
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													사용 적립금
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													마진금액
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													마진 제외 금액
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													자사 부담 할인 금액
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													셀러 부담 할인 금액
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													판매분 정산 금액
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													판매수수료
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													공급가액
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													세액
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
													<span class="text_num">12</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">0</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a class="mm_btn T=sm T=line" href="detail/sell" target="_blank" title="새 창 열림"><b>상세</b></a>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->
					</div>
					<!-- // 판매분 정산집계 -->

					<!-- 패널티 집계 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h3 class="mm_heading">
								<b>패널티 집계</b>
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
													주문 미 접수
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													배송 지연
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													품절
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													가송장
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													반품 미처리
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													교환 미처리
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													합계
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
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a class="mm_btn T=sm T=line" href="detail/penalty" target="_blank" title="새 창 열림"><b>상세</b></a>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->
					</div>
					<!-- // 패널티 집계 -->

					<!-- 배송비 정산집계 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h3 class="mm_heading">
								<b>배송비 정산집계</b>
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
													정상 배송비
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													면제 배송비
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													반품 배송비
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													교환 배송비
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													합계
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
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1000000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a class="mm_btn T=sm T=line" href="detail/ship" target="_blank" title="새 창 열림"><b>상세</b></a>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->
					</div>
					<!-- // 배송비 정산집계 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>