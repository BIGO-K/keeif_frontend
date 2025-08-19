<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>내 정보 관리</b>
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

					<!-- 테이블 영역 -->
					<div class="mm_table_box">
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
													관리자명
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													부서
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													아이디
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													접근 권한
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													등록일시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													수정일시
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
											<td>
												<div class="mm_table-item">
													1
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													관리자 A
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													웹디자인팀
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													mmon1004
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b class="mm_text-ellipsis T=2line">웹디자인팀 접근 권한</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2020-03-20 13:22:00
												</div>
											</td>
											<td><div class="mm_table-item"></div></td>
											<td>
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm" href="./my/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
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
					<!-- // 테이블 영역 -->
				</div>
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>