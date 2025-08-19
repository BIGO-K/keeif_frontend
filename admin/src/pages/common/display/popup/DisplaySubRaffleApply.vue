<template>
	<layout-popup>
		<template #title>
			<h1><b>응모회원 관리</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-raffle-manage">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 유의사항 -->
					<div class="mm_note">
						<ul>
							<li><strong>확정하기 버튼 클릭 시 추첨이 완료</strong>되며, 응모 회원에게 알림톡이 발송됩니다.</li>
							<li>확정하기 버튼 클릭 전에 재추첨이 가능합니다.</li>
						</ul>
					</div>
					<!-- // 유의사항 -->

					<!-- 래플정보 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>래플 상품명</b>
									</th>
									<td><p>래플 상품명 A</p></td>
									<th scope="row">
										<b>당첨자 수</b>
									</th>
									<td><p><span class="text_num">1000</span>명</p></td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 래플정보 -->

					<!-- 응모회원 관리 -->
					<div class="m...manage-list">
						<!-- 누적 응모자 목록 -->
						<template v-if="_isNone === false">
							<div class="mm_table_box">
								<!-- 테이블상단 -->
								<div class="mm_table_box-caption">
									<div class="mm_lside">
										<ul class="mm_table-status">
											<li>누적 응모자 수<b class="mm_text-secondary"><strong class="text_num">1234</strong>명</b></li>
										</ul>
									</div>
									<!-- (D) 누적 응모자 수가 100명 이상일 경우 노출합니다. -->
									<div class="mm_rside">
										<a class="mm_btn T=line" href="/display/sub/raffle/apply/member" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>전체보기</b></a>
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
															이름
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															아이디
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															응모일시
														</div>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<!-- 테이블 -->

								<!-- (D) 누적 응모자 수가 100명 이상일 경우 노출합니다. -->
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
									<div class="mm_lside">
										<ul class="mm_table-status">
											<li>누적 응모자 수<b class="mm_text-secondary"><strong class="text_num">0</strong>명</b></li>
										</ul>
									</div>
								</div>
								<!-- // 테이블상단 -->

								<div class="mm_table-none">
									<p>등록된 내용이 없습니다.</p>
								</div>
							</div>
						</template>
						<!-- // 누적 응모자 목록 -->

						<!-- 추첨하기 버튼 -->
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=line T=secondary">
									<b>추첨하기</b><i class="ico_raffle"></i>
								</button>
							</div>
						</div>
						<!-- // 추첨하기 버튼 -->

						<!-- 당첨자 목록 -->
						<template v-if="_isNone === false">
							<div class="mm_table_box">
								<!-- 테이블상단 -->
								<div class="mm_table_box-caption">
									<h4 class="mm_heading">
										<b>당첨자 목록</b>
									</h4>
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
															이름
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															아이디
														</div>
													</th>
													<th scope="col">
														<div class="mm_table-item">
															응모일시
														</div>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
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
															2021-03-22 12:33:23
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<!-- 테이블 -->
							</div>
						</template>

						<template v-else>
							<div class="mm_table_box">
								<!-- 테이블상단 -->
								<div class="mm_table_box-caption">
									<h4 class="mm_heading">
										<b>당첨자 목록</b>
									</h4>
								</div>
								<!-- // 테이블상단 -->

								<div class="mm_table-none">
									<p>등록된 내용이 없습니다.</p>
								</div>
							</div>
						</template>
						<!-- // 당첨자 목록 -->
					</div>
					<!-- // 응모회원 관리 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>확정하기</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 최하단버튼 -->
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
