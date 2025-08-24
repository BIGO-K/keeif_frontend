<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>카테고리 연동</b>
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

					<!-- 안내문구 -->
					<div class="mm_note">
						<ul>
							<li>상품 분류에 설정된 카테고리와 제휴사 카테고리를 연동하는 페이지입니다. 제휴사 판매를 위해서 필수로 설정이 필요합니다.</li>
							<li>연동 카테고리 선택 후 <strong>연동여부가 연동완료로 변경</strong>되어야 제휴사와 연동이 처리된 상태 입니다.</li>
							<li>이미 등록된 상품이 있는 상태에서 연동 카테고리 등록 및 변경 시, 자동으로 상품이 제휴사에 연동되지 않습니다. (상품 등록, 수정 시 제휴사와 연동 진행)</li>
						</ul>
					</div>
					<!-- // 안내문구 -->

					<!-- 검색 -->
					<div class="mm_search">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td><th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>카테고리 선택</b>
									</th>
									<td colspan="7">
										<div class="mm_form-select T=lg">
											<label>
												<select data-select>
													<option>선택</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="mm_note">
							<ul>
								<li>1 DEPTH 카테고리 선택 후 검색을 진행해야 제휴 카테고리 연동을 진행할 수 있습니다.</li>
							</ul>
						</div>
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
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
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

							<!-- 테이블 -->
							<div class="mm_table" data-table>
								<div class="mm_scroller">
									<table>
										<thead>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														카테고리 코드
													</div>
												</th>
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
														연동유무
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														연동 카테고리
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
														01100451
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														상의
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셔츠
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														체크셔츠
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														연동중
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														여성 &#62; 가디건 &#62; 울가디건
													</div>
												</td>
												<td>
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm T=line T=light" href="api/category" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>연동 카테고리 설정</b></a>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														01100451
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														상의
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셔츠
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														옥스포드셔츠
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm T=line T=light" href="api/category" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>연동 카테고리 설정</b></a>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														01100451
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														상의
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														셔츠
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														데님셔츠
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														연동중
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														WOMEN &#62; PANTS &#62; Shorts
													</div>
												</td>
												<td>
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm T=line T=light" href="api/category" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>연동 카테고리 설정</b></a>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														01100451
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														상의
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														티셔츠
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														긴팔티셔츠
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														연동완료
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														여성 &#62; 티셔츠 &#62; 긴팔티셔츠
													</div>
												</td>
												<td>
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm T=line T=light" href="api/category" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>연동 카테고리 설정</b></a>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														01100451
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														상의
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														티셔츠
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														후드티셔츠
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm T=line T=light" href="api/category" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>연동 카테고리 설정</b></a>
														</div>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<!-- // 테이블 -->

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
								<p>검색된 결과가 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 테이블영역 -->
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