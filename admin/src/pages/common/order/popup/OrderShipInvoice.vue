<template>
	<layout-popup>
		<template #title>
			<h1><b>굿스플로 송장출력</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 굿스플로 송장 출력 가능 항목 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<button type="button" class="mm_btn">
											<b>합배송</b>
										</button>
										<button type="button" class="mm_btn">
											<b>합배송 해제</b>
										</button>
									</div>
								</div>
							</div>
							<div class="mm_rside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<button type="button" class="mm_btn T=line T=light btn_refresh">
											<b>새로고침</b><i class="ico_refresh"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
						<!-- // 테이블상단 -->

						<!-- 테이블 -->
						<div class="mm_table" data-table>
							<div class="mm_scroller">
								<table>
									<thead>
										<tr>
											<th class="col_check" scope="col">
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-option" data-check="{ '_type': 'check_all' }">
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">전체선택</span>
														</b>
													</label>
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													주문번호
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													셀러
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													배송정책
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
													수취인
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													배송지
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<!-- (D) 합배송 묶음 주문 -->
										<tr>
											<td rowspan="3">
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
											<td>
												<div class="mm_table-item">
													20220507
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러A
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													배송정책A
												</div>
											</td>
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
													홍길동
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													배송지A
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													20220507
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러A
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													배송정책A
												</div>
											</td>
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
													홍길동
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													배송지A
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													20220507
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러A
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													배송정책A
												</div>
											</td>
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
													홍길동
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													배송지A
												</div>
											</td>
										</tr>
										<!-- (D) 단일 주문 -->
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
											<td>
												<div class="mm_table-item">
													20220507
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러A
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													배송정책A
												</div>
											</td>
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
													홍길동
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													배송지A
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
											<td>
												<div class="mm_table-item">
													20220507
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러A
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													배송정책A
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>[밸리걸] 레터링 티셔츠 120670</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													4567
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
													홍길동
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													배송지A
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->

						<!-- 테이블하단 -->
						<div class="mm_table_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<button type="button" class="mm_btn">
											<b>합배송</b>
										</button>
										<button type="button" class="mm_btn">
											<b>합배송 해제</b>
										</button>
									</div>
								</div>
							</div>
							<div class="mm_rside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<button type="button" class="mm_btn T=line T=light btn_refresh">
											<b>새로고침</b><i class="ico_refresh"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
						<!-- // 테이블하단 -->
					</div>
					<!-- // 굿스플로 송장 출력 가능 항목 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>송장 출력하기</b>
								</button>
							</div>
						</div>
					</div>
					<!-- 굿스플로 송장 출력 불가 항목 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h3 class="mm_heading">
								<b>굿스플로 송장 출력 불가 항목</b>
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
													주문번호
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													셀러
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													배송정책
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
													수취인
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													배송지
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													20220507
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러A
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													배송정책A
												</div>
											</td>
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
													홍길동
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													배송지A
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													20220507
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러A
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													배송정책A
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>[밸리걸] 레터링 티셔츠 120670</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													4567
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
													홍길동
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													배송지A
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
								<li>굿스플로 서비스를 사용하지 않는 배송 정책일 경우 굿스플로 송장 출력이 불가합니다.</li>
							</ul>
						</div>
					</div>
					<!-- // 굿스플로 송장 출력 불가 항목 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>