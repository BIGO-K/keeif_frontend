<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>쿠폰 수동발급</b>
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

					<!-- 검색 -->
					<div class="mm_search">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td><th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>회원 검색</b>
									</th>
									<td colspan="7">
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option>회원 아이디</option>
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
												<span class="text_placeholder mm_ir-blind">검색어를 입력해 주세요.</span>
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
							<!-- 테이블 -->
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
														회원 등급
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														휴대폰 번호
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														이메일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														임직원 여부
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-self-member" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label mm_ir-blind">항목선택</span>
															</b>
														</label>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004@naver.com
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														VVIP
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														01011341234
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004@naver.com
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														임직원
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-self-member" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label mm_ir-blind">항목선택</span>
															</b>
														</label>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004@naver.com
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														VVIP
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														01011341234
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004@naver.com
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														일반 회원
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-self-member" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label mm_ir-blind">항목선택</span>
															</b>
														</label>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004@naver.com
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														VVIP
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														01011341234
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														mmonstar1004@naver.com
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														임직원
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<!-- // 테이블 -->
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<div class="mm_table-none">
								<p>검색된 결과가 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 검색결과 -->

					<!-- 쿠폰 설정 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>쿠폰 설정</b>
							</h3>
						</div>
						<!-- // 폼 상단 -->

						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>발급 쿠폰 설정</b>
										</th>
										<td colspan="3">
											<div class="mm_selected">
												<!-- (D) 검색 팝업에서 선택 적용 시 'ul' 영역을 노출합니다. -->
												<a class="mm_btn T=line" href="/promotion/coupon/self/search" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>쿠폰 조회</b></a>
												<ul>
													<li>
														<a href="/promotion/coupon/daum/detail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>쿠폰 A</b></a>
														<button type="button" class="btn_remove">
															<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
														</button>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<!-- (D) 쿠폰 조회 팝업에서 쿠폰 선택시 노출합니다. -->
									<tr>
										<th scope="row">
											<b>쿠폰 유형</b>
										</th>
										<td><p>일반 상품 쿠폰</p></td>
										<th scope="row">
											<b>쿠폰 코드</b>
										</th>
										<td><p>123123123</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>사용 여부</b>
										</th>
										<td colspan="3">
											<p>사용</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>고객 사용 가능 여부</b>
										</th>
										<td colspan="3">
											<!-- <p>사용 가능</p> -->
											<p>사용 불가</p>
											<br>
											<p>사유: 오발급</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>할인율/할인금액</b>
										</th>
										<td colspan="3">
											<p>15%</p>
										</td>
										<!-- <td><p><span class="text_price">60,000</span></p></td> -->
									</tr>
									<tr>
										<th scope="row">
											<b>유효 기간</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked T=fit">
												<p class="text_linked">
													발행일로부터
												</p>
												<div class="mm_form-text T=xs">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text maxlength="3"><i class="bg_text"></i>
														<span class="text_placeholder">숫자만 입력</span>
													</label>
												</div>
												<p class="text_linked">
													일간 사용 가능
												</p>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- // 쿠폰 설정 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>발급하기</b>
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

	// 내용없음
	const _isNone = false;
</script>