<template>
	<layout-popup>
		<template #title>
			<h1><b>연동 카테고리 설정</b></h1>
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
										<b>검색</b>
									</th>
									<td colspan="7">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">검색어를 입력해 주세요.</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>카테고리</b>
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
						<div class="mm_note">
							<ul>
								<li>제휴사 카테고리를 검색할 수 있습니다. 검색 후 연동할 카테고리를 선택해 주세요.</li>
								<li>검색어로 검색 시, 검색한 내용과 <strong>동일 문구를 가진 카테고리 리스트</strong>가 검색되어 노출됩니다.</li>
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

					<!-- 검색결과 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<div class="mm_table" data-table>
								<div class="mm_scroller">
									<table>
										<thead>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														1DEPTH
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														2DEPTH
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														3DEPTH
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
														가디건
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														기본 원피스
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														기본 원피스
													</div>
												</td>
												<td>
													<div class="mm_btn_box">
														<div class="mm_inline">
															<button type="button" class="mm_btn T=line T=secondary">
																<b>선택</b>
															</button>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														가디건
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														프린트 원피스
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														프린트 원피스
													</div>
												</td>
												<td>
													<div class="mm_btn_box">
														<div class="mm_inline">
															<button type="button" class="mm_btn T=line T=secondary">
																<b>선택</b>
															</button>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														가디건
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														데님 원피스
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														데님 원피스
													</div>
												</td>
												<td>
													<div class="mm_btn_box">
														<div class="mm_inline">
															<button type="button" class="mm_btn T=line T=secondary">
																<b>선택</b>
															</button>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														가디건
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														모직/울 원피스
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														모직/울 원피스
													</div>
												</td>
												<td>
													<div class="mm_btn_box">
														<div class="mm_inline">
															<button type="button" class="mm_btn T=line T=secondary">
																<b>선택</b>
															</button>
														</div>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<div class="mm_table-none">
								<p>검색된 결과가 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 검색결과 -->
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
