<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>브랜드 수정</b>
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

					<!-- 브랜드 수정 영역 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>브랜드명 [한글]<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 50자 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>브랜드명 [영문]<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 50자 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>프론트 노출 브랜드명 설정</b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-brandname" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">브랜드명 [한글]</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-brandname" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">브랜드명 [영문]</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
										<div class="mm_note">
											<p>설정한 명칭으로 프론트에 노출됩니다.</p>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>브랜드 로고</b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-image">
											<div class="mm_form-image">
												<div class="mm_form-image-preview"></div>
												<label>
													<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000 }">
													<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
												</label>
												<button type="button" class="btn_remove-file">
													<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
												</button>
											</div>
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text><i class="bg_text"></i>
													<span class="text_placeholder">대체 텍스트를 입력하세요.</span>
												</label>
											</div>
											<div class="mm_note T=bottom">
												<ul>
													<li>대체 텍스트는 화면에 노출되지 않으며 이미지를 설명하는 내용을 작성해 주세요.</li>
													<li>브랜드 로고 규격은 우측 상단 매뉴얼 버튼 클릭 후 브랜드 로고 가이드 문서를 확인해 주세요.</li>
													<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
												</ul>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>브랜드 상단 이미지 (Mobile)</b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-image">
											<div class="mm_form-image">
												<div class="mm_form-image-preview"></div>
												<label>
													<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000 }">
													<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
												</label>
												<button type="button" class="btn_remove-file">
													<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
												</button>
											</div>
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text><i class="bg_text"></i>
													<span class="text_placeholder">대체 텍스트를 입력하세요.</span>
												</label>
											</div>
											<div class="mm_note T=bottom">
												<ul>
													<li>대체 텍스트는 화면에 노출되지 않으며 이미지를 설명하는 내용을 작성해 주세요.</li>
													<li>권장 사이즈는 W 000px * H 000px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
													<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
												</ul>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>브랜드 상단 이미지 (PC)</b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-image">
											<div class="mm_form-image">
												<div class="mm_form-image-preview"></div>
												<label>
													<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000 }">
													<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
												</label>
												<button type="button" class="btn_remove-file">
													<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
												</button>
											</div>
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text><i class="bg_text"></i>
													<span class="text_placeholder">대체 텍스트를 입력하세요.</span>
												</label>
											</div>
											<div class="mm_note T=bottom">
												<ul>
													<li>대체 텍스트는 화면에 노출되지 않으며 이미지를 설명하는 내용을 작성해 주세요.</li>
													<li>권장 사이즈는 W 000px * H 000px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
													<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
												</ul>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>브랜드 소개</b>
									</th>
									<td colspan="3">
										<div class="mm_form-table">
											<table>
												<tbody>
													<tr>
														<th scope="row">
															<b>메인 문구</b>
														</th>
														<td>
															<div class="mm_form-text">
																<button type="button" class="btn_text-clear">
																	<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																</button>
																<label>
																	<input type="text" class="textfield" data-text="{ '_byte': 200 }"><i class="bg_text"></i>
																	<span class="text_placeholder mm_ir-blind">최대 200자 입력</span>
																</label>
															</div>
														</td>
													</tr>
													<tr>
														<th scope="row">
															<b>서브 문구</b>
														</th>
														<td>
															<div class="mm_form-textarea">
																<button type="button" class="btn_text-clear">
																	<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																</button>
																<label>
																	<input type="text" class="textfield" data-text="{ '_byte': 200 }"><i class="bg_text"></i>
																	<span class="text_placeholder mm_ir-blind">최대 200자 입력</span>
																</label>
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
										<b>쇼케이스 설정</b>
									</th>
									<td colspan="3">
										<div class="mm_form-table">
											<table>
												<caption>
													<a class="mm_btn T=line T=secondary" href="/seller/brand/webzine/search" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>쇼케이스 설정</b></a>
												</caption>
												<!-- (D) 쇼케이스 추가 시 tr 영역을 추가합니다. -->
												<tbody>
													<tr>
														<th scope="row">
															<b>쇼케이스 SEASON</b>
														</th>
														<td>
															<div class="mm_form_mix-linked">
																<div class="mm_form-text T=xs">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text><i class="bg_text"></i>
																		<span class="text_placeholder mm_ir-blind">쇼케이스 노출 순서</span>
																	</label>
																</div>
																<button type="button" class="mm_btn T=line T=light">
																	<b>삭제</b>
																</button>
															</div>
														</td>
													</tr>
													<tr>
														<th scope="row">
															<b>쇼케이스 SEASON</b>
														</th>
														<td>
															<div class="mm_form_mix-linked">
																<div class="mm_form-text T=xs">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text><i class="bg_text"></i>
																		<span class="text_placeholder mm_ir-blind">쇼케이스 노출 순서</span>
																	</label>
																</div>
																<button type="button" class="mm_btn T=line T=light">
																	<b>삭제</b>
																</button>
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
										<b>카카오 채널 URL</b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 50자 입력</span>
											</label>
										</div>
										<div class="mm_note">
											<p>프론트 페이지에 카카오 채널 바로가기 버튼이 노출됩니다.</p>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>브랜드 구분 설정<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_check-list">
											<ul>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-attribute" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">Fashion</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-attribute" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">Life</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-attribute" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">Beauty</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
										<div class="mm_note">
											<p>설정한 구분에 속하여 프론트에 노출됩니다.</p>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 브랜드 수정 영역 -->

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
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>