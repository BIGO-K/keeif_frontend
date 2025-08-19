<template>
	<layout-popup>
		<template #title>
			<h1><b>2일 출고율</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_note">
						<ul>
							<li>셀러는 필수로 설정해주세요.</li>
							<li>한 달 기준으로 2일 이내 출고율이 95% 이상 일 경우 배송 지연 패널티가 자동 면책됩니다.</li>
							<li>이전 달 출고율 기준입니다.</li>
							<li>반영일: 익월 초</li>
						</ul>
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
										<b>기준월</b>
									</th>
									<td colspan="3">
										<div class="mm_form-text T=xs T=calendar">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text data-datepicker="{ 'config': { '_isMonth': true } }"><i class="bg_text"></i>
												<span class="text_placeholder">월선택</span>
												<i class="ico_datepicker-calendar"></i>
											</label>
										</div>
									</td>
									<th scope="row">
										<b>셀러</b>
									</th>
									<td colspan="3">
										<div class="mm_selected">
											<!-- (D) 검색 팝업에서 선택 적용 시 'ul' 영역을 노출합니다. -->
											<a class="mm_btn T=line" href="/search/seller-single" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 검색</b></a>
											<ul>
												<li>
													<b>셀러 A</b>
													<button type="button" class="btn_remove">
														<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
													</button>
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
									<b>검색</b>
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
													기준월
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													총 출고 수량
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													2일 이내 출고 수량
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													출고율
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													2022-06
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">1000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">2000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													90%
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->
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