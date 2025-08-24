<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>해외배송 셀러</b>
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
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option>셀러명</option>
													<option selected>셀러 코드</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
										<div class="mm_form-textarea">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<textarea class="textfield" data-text></textarea><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">검색어를 입력해 주세요.</span>
											</label>
										</div>
										<div class="mm_note">
											<ul>
												<li><strong>줄바꿈</strong>으로 구분하여 다중 검색 가능 (최대 100줄)</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>등록 상태</b>
									</th>
									<td colspan="7">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-register" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-register" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">등록</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-register" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">미등록</span>
														</b>
													</label>
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
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<div class="mm_lside">
									<ul class="mm_table-status">
										<li>셀러 수<b class="mm_text-secondary"><strong class="text_num">1234</strong>명</b></li>
									</ul>
								</div>
								<div class="mm_rside">
									<div class="mm_form-select T=list">
										<label>
											<select data-select>
												<option>20개 보기</option>
												<option>40개 보기</option>
												<option>60개 보기</option>
												<option>80개 보기</option>
												<option>100개 보기</option>
											</select>
											<b class="text_selected"></b>
											<i class="ico_form-select"></i>
										</label>
									</div>
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
														셀러 코드
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														셀러명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														평균 배송일
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														수정일시
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														20
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123456789
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														브랜드 20
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_form_mix-linked">
															<div class="mm_form-select T=xs">
																<label>
																	<select data-select>
																		<option>선택</option>
																	</select>
																	<b class="text_selected"></b>
																	<i class="ico_form-select"></i>
																</label>
															</div>
															<span class="text_linked">~</span>
															<div class="mm_form-select T=xs">
																<label>
																	<select data-select>
																		<option>선택</option>
																	</select>
																	<b class="text_selected"></b>
																	<i class="ico_form-select"></i>
																</label>
															</div>
														</div>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-01 14:00:00
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														19
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123456789
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														브랜드 19
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_form_mix-linked">
															<div class="mm_form-select T=xs">
																<label>
																	<select data-select>
																		<option>선택</option>
																	</select>
																	<b class="text_selected"></b>
																	<i class="ico_form-select"></i>
																</label>
															</div>
															<span class="text_linked">~</span>
															<div class="mm_form-select T=xs">
																<label>
																	<select data-select>
																		<option>선택</option>
																	</select>
																	<b class="text_selected"></b>
																	<i class="ico_form-select"></i>
																</label>
															</div>
														</div>
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														18
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123456789
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														브랜드 18
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_form_mix-linked">
															<div class="mm_form-select T=xs">
																<label>
																	<select data-select>
																		<option>선택</option>
																	</select>
																	<b class="text_selected"></b>
																	<i class="ico_form-select"></i>
																</label>
															</div>
															<span class="text_linked">~</span>
															<div class="mm_form-select T=xs">
																<label>
																	<select data-select>
																		<option>선택</option>
																	</select>
																	<b class="text_selected"></b>
																	<i class="ico_form-select"></i>
																</label>
															</div>
														</div>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-01 14:00:00
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														17
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123456789
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														브랜드 17
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_form_mix-linked">
															<div class="mm_form-select T=xs">
																<label>
																	<select data-select>
																		<option>선택</option>
																	</select>
																	<b class="text_selected"></b>
																	<i class="ico_form-select"></i>
																</label>
															</div>
															<span class="text_linked">~</span>
															<div class="mm_form-select T=xs">
																<label>
																	<select data-select>
																		<option>선택</option>
																	</select>
																	<b class="text_selected"></b>
																	<i class="ico_form-select"></i>
																</label>
															</div>
														</div>
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														16
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123456789
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														브랜드 16
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_form_mix-linked">
															<div class="mm_form-select T=xs">
																<label>
																	<select data-select>
																		<option>선택</option>
																	</select>
																	<b class="text_selected"></b>
																	<i class="ico_form-select"></i>
																</label>
															</div>
															<span class="text_linked">~</span>
															<div class="mm_form-select T=xs">
																<label>
																	<select data-select>
																		<option>선택</option>
																	</select>
																	<b class="text_selected"></b>
																	<i class="ico_form-select"></i>
																</label>
															</div>
														</div>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-01 14:00:00
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														15
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														123456789
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														브랜드 15
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<div class="mm_form_mix-linked">
															<div class="mm_form-select T=xs">
																<label>
																	<select data-select>
																		<option>선택</option>
																	</select>
																	<b class="text_selected"></b>
																	<i class="ico_form-select"></i>
																</label>
															</div>
															<span class="text_linked">~</span>
															<div class="mm_form-select T=xs">
																<label>
																	<select data-select>
																		<option>선택</option>
																	</select>
																	<b class="text_selected"></b>
																	<i class="ico_form-select"></i>
																</label>
															</div>
														</div>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														2022-03-01 14:00:00
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
								<div class="mm_pagination-jump">
									<div class="mm_form_mix-linked">
										<div class="mm_form-text">
											<label>
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder">숫자</span>
											</label>
										</div>
										<button type="button" class="btn_jump">
											<b class="mm_ir-blind">이동</b><i class="ico_page-jump"></i>
										</button>
										<p class="text_linked">
											of 10<strong>(1,125 items)</strong>
										</p>
									</div>
								</div>
							</div>
							<!-- // 페이지네이션 -->

							<!-- 안내문구 -->
							<div class="mm_note">
								<ul>
									<li>목록 하단 <strong>[저장하기] 버튼을 클릭해야 설정한 내용이 저장 및 적용</strong>됩니다.</li>
									<li>셀러 등록 시 해당 목록에 자동 추가되어 노출됩니다.</li>
									<li>셀러 상품 등록 시 설정한 배송 정책 유형이 [해외 배송]일 경우 해당 메뉴에서 설정한 평균 배송일이 자동 설정되어 노출됩니다. (수정 가능)</li>
									<li>설정한 평균 배송일이 쇼핑몰 상품 상세 페이지에 노출됩니다.</li>
								</ul>
							</div>
							<!-- // 안내문구 -->
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<div class="mm_lside">
									<ul class="mm_table-status">
										<li>셀러 수<b class="mm_text-secondary"><strong class="text_num">0</strong>명</b></li>
									</ul>
								</div>
								<div class="mm_rside">
									<div class="mm_form-select T=list">
										<label>
											<select data-select>
												<option>20개 보기</option>
												<option>40개 보기</option>
												<option>60개 보기</option>
												<option>80개 보기</option>
												<option>100개 보기</option>
											</select>
											<b class="text_selected"></b>
											<i class="ico_form-select"></i>
										</label>
									</div>
								</div>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>검색된 결과가 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 테이블영역 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>저장하기</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 최하단버튼 -->
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