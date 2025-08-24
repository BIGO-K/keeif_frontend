<template>
	<layout>
		<template #content>
			<div class="mm_container">
				<div class="mm_head">
					<h2 class="mm_title">
						<b>연도별 회원수</b>
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

				<!-- 테이블영역 -->
				<template v-if="_isNone === false">
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<div class="mm_rside">
								<span class="text_unit">(단위: 명)</span>
							</div>
						</div>
						<div class="mm_table_box-unit">
							<div class="mm_rside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<a class="mm_btn T=line T=xload btn_excel" href="/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
									</div>
								</div>
							</div>
						</div>
						<!-- // 테이블상단 -->

						<div class="mm_table" data-table>
							<div class="mm_scroller">
								<!-- (D) 좌측고정 영역에는 colspan, rowspan을 사용할 수 없으며 th, td에 'S=table-fixed' 클래스를 추가합니다. -->
								<table>
									<thead>
										<tr>
											<th scope="col">
												<div class="mm_table-item">
													연도
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													회원수
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													탈퇴 회원수
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													휴면 회원수
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													2022
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">48651</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">0</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">0</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													2021
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">31564</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">120</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">6100</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													2020
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">6320</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">2</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">0</span>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<!-- 테이블하단 -->
						<div class="mm_table_box-unit">
							<div class="mm_rside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<a class="mm_btn T=line T=xload btn_excel" href="/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
									</div>
								</div>
							</div>
						</div>
						<!-- // 테이블하단 -->
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
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';

	// 내용없음
	const _isNone = false;
</script>