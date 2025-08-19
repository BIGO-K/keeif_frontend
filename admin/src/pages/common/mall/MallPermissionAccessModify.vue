<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>접근 권한 수정</b>
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

					<!-- 접근 권한명 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>접근 권한명<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 100 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 100자 입력</span>
											</label>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 접근 권한명 -->

					<!-- 메뉴별 권한 설정 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>메뉴별 권한 설정</b>
							</h3>
						</div>
						<!-- // 폼 상단 -->

						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>DEPTH 1</b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-list-a" data-check="{ '_type': 'check_all', '_min': 1 }">
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label">DEPTH 2</span>
																	</b>
																</label>
															</th>
															<td>
																<div class="mm_check-list">
																	<ul>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-list-a" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">DEPTH 3</span>
																				</b>
																			</label>
																		</li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-list-b" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label">DEPTH 2</span>
																	</b>
																</label>
															</th>
															<td><span>&#160;</span></td>
														</tr>
														<tr>
															<th scope="row">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-list-c" data-check="{ '_type': 'check_all', '_min': 1 }">
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label">DEPTH 2</span>
																	</b>
																</label>
															</th>
															<td>
																<div class="mm_check-list">
																	<ul>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-list-c" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">DEPTH 3</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-list-c" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">DEPTH 3</span>
																				</b>
																			</label>
																		</li>
																	</ul>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>DEPTH 1</b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-list-d" data-check="{ '_type': 'check_all', '_min': 1 }">
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label">DEPTH 2</span>
																	</b>
																</label>
															</th>
															<td>
																<div class="mm_check-list">
																	<ul>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-list-d" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">DEPTH 3</span>
																				</b>
																			</label>
																		</li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-list-e" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label">DEPTH 2</span>
																	</b>
																</label>
															</th>
															<td>
																<div class="mm_check-list">
																	<ul>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-list-e" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">DEPTH 3</span>
																				</b>
																			</label>
																		</li>
																	</ul>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>DEPTH 1</b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-list-f" data-check="{ '_type': 'check_all', '_min': 1 }">
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label">DEPTH 2</span>
																	</b>
																</label>
															</th>
															<td><span>&#160;</span></td>
														</tr>
														<tr>
															<th scope="row">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-list-g" data-check="{ '_type': 'check_all', '_min': 1 }">
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label">DEPTH 2</span>
																	</b>
																</label>
															</th>
															<td>
																<div class="mm_check-list">
																	<ul>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-list-g" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">DEPTH 3</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-list-g" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">DEPTH 3</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-list-g" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">DEPTH 3</span>
																				</b>
																			</label>
																		</li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-list-h" data-check="{ '_type': 'check_all', '_min': 1 }">
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label">DEPTH 2</span>
																	</b>
																</label>
															</th>
															<td><span>&#160;</span></td>
														</tr>
													</tbody>
												</table>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>DEPTH 1</b>
										</th>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-list-i" data-check="{ '_type': 'check_all', '_min': 1 }">
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label">DEPTH 2</span>
																	</b>
																</label>
															</th>
															<td>
																<div class="mm_check-list">
																	<ul>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-list-i" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">DEPTH 3</span>
																				</b>
																			</label>
																		</li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-list-j" data-check="{ '_type': 'check_all', '_min': 1 }">
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label">DEPTH 2</span>
																	</b>
																</label>
															</th>
															<td>
																<div class="mm_check-list">
																	<ul>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-list-j" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">DEPTH 3</span>
																				</b>
																			</label>
																		</li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-list-k" data-check="{ '_type': 'check_all', '_min': 1 }">
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label">DEPTH 2</span>
																	</b>
																</label>
															</th>
															<td><span>&#160;</span></td>
														</tr>
														<tr>
															<th scope="row">
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-list-l" data-check="{ '_type': 'check_all', '_min': 1 }">
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label">DEPTH 2</span>
																	</b>
																</label>
															</th>
															<td><span>&#160;</span></td>
														</tr>
													</tbody>
												</table>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- // 메뉴별 권한 설정 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<a class="mm_btn T=xl T=line T=tertiary" href="#" data-href="{ '_type': 'link' }"><b>취소하기</b></a>
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>수정하기</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 최하단버튼 -->
				</div>
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>