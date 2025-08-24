<template>
	<layout-popup>
		<template #title>
			<h1><b>여성패션</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 테이블 영역 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<div class="mm_rside">
								<div class="mm_form-select T=sm">
									<label>
										<select data-select>
											<option>전체 상품 수량 순</option>
											<option>진열 상품 수량 순</option>
											<option>미진열 상품 수량 순</option>
											<option>품절 상품 수량 순</option>
										</select>
										<b class="text_selected"></b>
										<i class="ico_form-select"></i>
									</label>
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
											<th scope="col">
												<div class="mm_table-item">
													No.
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													셀러
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													전체 상품
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													진열 상품
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													미진열 상품
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													품절 상품
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													1
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러A
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_span">3104</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_span">2004</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_span">1000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_span">100</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													2
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러B
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_span">3104</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_span">2004</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_span">1000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_span">100</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													3
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													셀러C
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_span">3104</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_span">2004</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_span">1000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_span">100</span>
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
					<!-- // 테이블 영역 -->
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