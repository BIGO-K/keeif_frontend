<template>
	<layout-popup>
		<template #title>
			<h1><b>적립금 관리</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-point">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_form_box">
						<!-- 폼 영역 -->
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>아이디</b>
										</th>
										<td><p>choi1114</p></td>
										<th scope="row">
											<b>회원명</b>
										</th>
										<td><p>최길동</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>보유 적립금</b>
										</th>
										<td colspan="3">
											<p><span class="text_price">1123</span></p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>적립금 관리</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<div class="mm_form-select T=xs">
													<label>
														<select data-select>
															<option>차감</option>
															<option>적립</option>
														</select>
														<b class="text_selected"></b>
														<i class="ico_form-select"></i>
													</label>
												</div>
												<div class="mm_form-text T=xs">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text><i class="bg_text"></i>
														<span class="text_placeholder">숫자만 입력</span>
													</label>
												</div>
											</div>
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text="{ '_byte': 30 }"><i class="bg_text"></i>
													<span class="text_placeholder">사유를 입력하세요.</span>
												</label>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<!-- // 폼 영역 -->

						<!-- 안내문구 -->
						<div class="mm_note">
							<ul>
								<li>지급된 적립금은 지급일로부터 1년 후 소멸됩니다.</li>
							</ul>
						</div>
						<!-- // 안내문구 -->
					</div>

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>적용하기</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 최하단버튼 -->

					<!-- 테이블 영역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>개별 적립금 확인</b>
								</h3>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table" data-table>
								<div class="mm_scroller">
									<table>
										<thead>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														일자
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														적립금 정보
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														사유
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-04-01
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														-<span class="text_num">500</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														상품 구매 사용
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-03-01
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														+<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														일반 상품평 작성 적립
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-02-01
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														-<span class="text_num">1500</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														상품 구매 사용
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
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>개별 적립금 확인</b>
								</h3>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>등록된 내용이 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 테이블 영역 -->
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