<template>
	<layout-popup>
		<template #title>
			<h1><b>메일 발송 내역</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-email">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 테이블영역 -->
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
														발송일시
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														발송 제목
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-02-21 12:07:12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_dropdown" data-dropdown="{ '_group': 'dev_accrodion' }">
															<button type="button" class="btn_dropdown" tabindex="0" title="펼쳐보기">
																<b>일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십</b>
															</button>
															<div class="mm_dropdown-item">
																<div class="mm_dropdown-item-inner">
																	<div class="mm_editor-content">
																		<p>배송문의 관련 알림 메시지 전달 드립니다.</p>
																		<br>
																		<p>우체국 공지사항에 대해 공유드립니다.</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-02-19 12:07:12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_dropdown" data-dropdown="{ '_group': 'dev_accrodion' }">
															<button type="button" class="btn_dropdown" tabindex="0" title="펼쳐보기">
																<b>배송문의 관련 알림 메시지 전달 드립니다.</b>
															</button>
															<div class="mm_dropdown-item">
																<div class="mm_dropdown-item-inner">
																	<div class="mm_editor-content">
																		<p>배송문의 관련 알림 메시지 전달 드립니다.</p>
																		<br>
																		<p>우체국 공지사항에 대해 공유드립니다.</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-01-14 12:07:12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_dropdown" data-dropdown="{ '_group': 'dev_accrodion' }">
															<button type="button" class="btn_dropdown" tabindex="0" title="펼쳐보기">
																<b>배송문의 관련 알림 메시지 전달 드립니다.</b>
															</button>
															<div class="mm_dropdown-item">
																<div class="mm_dropdown-item-inner">
																	<div class="mm_editor-content">
																		<p>배송문의 관련 알림 메시지 전달 드립니다.</p>
																		<br>
																		<p>우체국 공지사항에 대해 공유드립니다.</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2022-01-14 12:07:12
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_dropdown" data-dropdown="{ '_group': 'dev_accrodion' }">
															<button type="button" class="btn_dropdown" tabindex="0" title="펼쳐보기">
																<b>임시 발송 메일입니다.</b>
															</button>
															<div class="mm_dropdown-item">
																<div class="mm_dropdown-item-inner">
																	<div class="mm_editor-content">
																		<p>배송문의 관련 알림 메시지 전달 드립니다.</p>
																		<br>
																		<p>우체국 공지사항에 대해 공유드립니다.</p>
																	</div>
																</div>
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
							<div class="mm_table-none">
								<p>등록된 내용이 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 테이블영역 -->
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