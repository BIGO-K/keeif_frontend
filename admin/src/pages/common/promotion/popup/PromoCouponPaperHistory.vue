<template>
	<layout-popup>
		<template #title>
			<h1><b>쿠폰 발급 이력</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 쿠폰 정보 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>쿠폰명<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td><p>쿠폰 A</p></td>
									<th scope="row">
										<b>발행 기간<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td><p>2020-04-04 12:22:31 ~ 2020-04-04 12:22:31</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>쿠폰 인증번호<br>발급 유형<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<p>1개의 인증번호 사용</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>사용 여부<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td><p>사용</p></td>
									<th scope="row">
										<b>고객 사용 가능 여부<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td>
										<!-- <p>사용 가능</p> -->
										<p>사용 불가</p>
										<br>
										<p>사유: 오발급</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>할인율/할인금액<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<p>15%</p>
									</td>
									<!-- <td><p><span class="text_price">60,000</span></p></td> -->
								</tr>
								<tr>
									<th scope="row">
										<b>쿠폰 발급 건수</b>
									</th>
									<td><p><span class="text_num">10000</span></p></td>
									<th scope="row">
										<b>쿠폰 사용 건수</b>
									</th>
									<td><p><span class="text_num">10000</span></p></td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 쿠폰 정보 -->

					<!-- 쿠폰 상세 내역 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h3 class="mm_heading">
								<b>쿠폰 상세 내역</b>
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
													발급일자
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													사용일자
												</div>
											</th>
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
													판매가
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													할인금액
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													발급자
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													홍길동
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													mmonstar1004
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-04-17
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-04-17
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>상품A</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													123123123
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1560000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">45000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													관리자 A
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													홍길동
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													mmonstar1004
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-04-17
												</div>
											</td>
											<td><div class="mm_table-item"></div></td>
											<td class="T=table-left">
												<div class="mm_table-item"></div>
											</td>
											<td><div class="mm_table-item"></div></td>
											<td><div class="mm_table-item"></div></td>
											<td><div class="mm_table-item"></div></td>
											<td><div class="mm_table-item"></div></td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													홍길동
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													mmonstar1004
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-04-17
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2022-04-17
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<a class="T=linebreak" href="#" target="_blank" title="새 창 열림"><b>상품A</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													123123123
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">1560000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">45000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													관리자 A
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->
					</div>
					<!-- // 쿠폰 상세 내역 -->
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