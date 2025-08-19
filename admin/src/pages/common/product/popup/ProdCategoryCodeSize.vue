<template>
	<layout-popup>
		<template #title>
			<h1><b>카테고리 코드 확인</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 검색 -->
					<div class="mm_search">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td><th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>카테고리 설정</b>
									</th>
									<td colspan="7">
										<div class="mm_select-list T=fit">
											<ul>
												<li>
													<div class="mm_form-select">
														<label>
															<select data-select>
																<option>1 DEPTH</option>
															</select>
															<b class="text_selected"></b>
															<i class="ico_form-select"></i>
														</label>
													</div>
												</li>
												<li>
													<div class="mm_form-select">
														<label>
															<select data-select>
																<option>2 DEPTH</option>
															</select>
															<b class="text_selected"></b>
															<i class="ico_form-select"></i>
														</label>
													</div>
												</li>
												<li>
													<div class="mm_form-select">
														<label>
															<select data-select>
																<option>3 DEPTH</option>
															</select>
															<b class="text_selected"></b>
															<i class="ico_form-select"></i>
														</label>
													</div>
												</li>
											</ul>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=lg T=tertiary btn_search">
									<b>조회</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 검색 -->

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
													1 DEPTH
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													2 DEPTH
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													3 DEPTH
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													카테고리 코드
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													상품정보고시 유형
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													FIT 필터 사용 여부
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													슈즈 필터 사용 여부
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													1 DEPTH A
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2 DEPTH 1
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													3 DEPTH 1
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													001001
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="/product/manage/info-check" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>의류</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													사용
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													미사용
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													1 DEPTH B
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2 DEPTH 2
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													3 DEPTH 2
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													001002
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="/product/manage/info-check" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>의류</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													사용
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													미사용
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													1 DEPTH C
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2 DEPTH 3
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													3 DEPTH 3
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													001003
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="/product/manage/info-check" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>의류</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													사용
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													미사용
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													1 DEPTH D
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2 DEPTH 4
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													3 DEPTH 4
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													001004
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="/product/manage/info-check" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>의류</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													사용
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													미사용
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													1 DEPTH E
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2 DEPTH 5
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													3 DEPTH 5
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													001005
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="/product/manage/info-check" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>의류</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													사용
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													미사용
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													1 DEPTH F
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2 DEPTH 6
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													3 DEPTH 6
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													001006
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="/product/manage/info-check" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>의류</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													사용
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													미사용
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