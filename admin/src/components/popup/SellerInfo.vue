<template>
	<layout-popup>
		<template #title>
			<h1><b>셀러 정보</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 셀러 정보 -->
					<div class="mm_form_box">
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송 정책명</b>
										</th>
										<td><p>일반 배송 정책</p></td>
										<th scope="row">
											<b>택배사</b>
										</th>
										<td><p>CJ 대한통운</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송 정책 유형</b>
										</th>
										<td><p>일반 배송</p></td>
										<th scope="row">
											<b>일반 배송비</b>
										</th>
										<td>
											<p class="text_price">
												2500
											</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>반품 배송비</b>
										</th>
										<td>
											<p class="text_price">
												2500
											</p>
										</td>
										<th scope="row">
											<b>교환 배송비</b>
										</th>
										<td>
											<p class="text_price">
												5000
											</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>도서산간 추가 배송비</b>
										</th>
										<td>
											<p class="text_price">
												2500
											</p>
										</td>
										<th scope="row">
											<b>조건부 무료배송</b>
										</th>
										<td><p>-</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>무료배송 여부</b>
										</th>
										<td><p>무료배송</p></td>
										<th scope="row">
											<b>묶음배송 사용 여부</b>
										</th>
										<td><p>사용</p></td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="mm_note">
							<ul>
								<li>현재 배송 정책에 설정된 데이터가 기본 노출됩니다.</li>
							</ul>
						</div>
					</div>
					<!-- // 셀러 정보 -->

					<!-- 배송지A 정보 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>배송지A</b>
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
											<b>배송지 연락처</b>
										</th>
										<td><p>0123456789</p></td>
										<th scope="row">
											<b>반품/교환지 연락처</b>
										</th>
										<td><p>0123456789</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송지 주소</b>
										</th>
										<td colspan="3">
											<p>경기도 성남시 분당구 판교로 242</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>반품/교환지 주소</b>
										</th>
										<td colspan="3">
											<p>경기도 성남시 분당구 판교로 242</p>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- // 배송지A 정보 -->

					<!-- 배송지B 정보 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>배송지B</b>
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
											<b>배송지 연락처</b>
										</th>
										<td><p>0123456789</p></td>
										<th scope="row">
											<b>반품/교환지 연락처</b>
										</th>
										<td><p>0123456789</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송지 주소</b>
										</th>
										<td colspan="3">
											<p>경기도 성남시 분당구 판교로 242</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>반품/교환지 주소</b>
										</th>
										<td colspan="3">
											<p>경기도 성남시 분당구 판교로 242</p>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- // 배송지B 정보 -->

					<!-- CS 메모 등록 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>CS 메모</b>
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
											<b>CS 메모</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<button type="button" class="mm_btn">
													<b>저장</b>
												</button>
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
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- // CS 메모 등록 -->

					<!-- CS 메모 목록 -->
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
														CS 메모
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등록자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														등록일시
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
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>CS 메모 입니다.</b>
														</p>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														honm1(홍길동)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-05-18 19:00:10
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>CS 메모 입니다.</b>
														</p>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														honm1(홍길동)
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-05-18 19:00:10
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
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
							<!-- // 테이블 -->
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<div class="mm_table-none">
								<p>등록된 내용이 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // CS 메모 목록 -->
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