<template>
	<layout-popup>
		<template #title>
			<h1><b>MD 추천상품</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-display-block">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 타이틀 -->
					<div class="mm_form m...block-title">
						<table>
							<colgroup>
								<col>
								<col>
								<col>
								<col style="width:110px;">
							</colgroup>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>타이틀</b>
									</th>
									<td colspan="2">
										<div class="mm_form-table">
											<table>
												<tbody>
													<tr>
														<th scope="row">
															<b>Mobile</b>
														</th>
														<td><b>테스트 타이틀 Mobile</b></td>
													</tr>
													<tr>
														<th scope="row">
															<b>PC</b>
														</th>
														<td>
															<label class="mm_form-check">
																<input type="checkbox" data-check="{ 'desyncer': '.mm_desyncer-pc-title' }" disabled>
																<b class="mm_block">
																	<i class="ico_form-check"></i>
																	<span class="text_label">Mobile에 입력한 텍스트와 동일하게 사용</span>
																</b>
															</label>
															<div class="mm_form-table mm_desyncer-pc-title">
																<table>
																	<tbody>
																		<tr>
																			<td><b>테스트 타이틀 PC</b></td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</td>
									<td>
										<div class="mm_btn_box">
											<div class="mm_inline">
												<button type="button" class="mm_btn">
													<b>수정</b>
												</button>
											</div>
										</div>
										<!--
											<div class="mm_btn_box">
											<div class="mm_inline">
											<button type="button" class="mm_btn T=line"><b>취소</b></button>
											<button type="button" class="mm_btn"><b>적용</b></button>
											</div>
											</div>
										-->
									</td>
								</tr>
							</tbody>

							<!-- (D) PC의 [ Mobile에 입력한 내용 동일하게 사용 ] 체크 후 적용하였을 때 노출되는 형태입니다. -->
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>타이틀</b>
									</th>
									<td colspan="2">
										<div class="mm_form-table">
											<table>
												<tbody>
													<tr>
														<th scope="row">
															<b>Mobile</b>
														</th>
														<td><b>테스트 타이틀 Mobile</b></td>
													</tr>
													<tr>
														<th scope="row">
															<b>PC</b>
														</th>
														<td>
															<label class="mm_form-check">
																<input type="checkbox" data-check="{ 'desyncer': '.mm_desyncer-pc-title' }" disabled>
																<b class="mm_block">
																	<i class="ico_form-check"></i>
																	<span class="text_label">Mobile에 입력한 텍스트와 동일하게 사용</span>
																</b>
															</label>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</td>
									<td>
										<div class="mm_btn_box">
											<div class="mm_inline">
												<button type="button" class="mm_btn">
													<b>수정</b>
												</button>
											</div>
										</div>
										<!--
											<div class="mm_btn_box">
											<div class="mm_inline">
											<button type="button" class="mm_btn T=line"><b>취소</b></button>
											<button type="button" class="mm_btn"><b>적용</b></button>
											</div>
											</div>
										-->
									</td>
								</tr>
							</tbody>

							<!-- (D) [수정] 버튼 클릭 시 노출하는 형태입니다. -->
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>타이틀</b>
									</th>
									<td colspan="2">
										<div class="mm_form-table">
											<table>
												<tbody>
													<tr>
														<th scope="row">
															<b>Mobile</b>
														</th>
														<td>
															<div class="mm_form-table">
																<table>
																	<tbody>
																		<tr>
																			<td>
																				<div class="mm_form-text">
																					<button type="button" class="btn_text-clear">
																						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																					</button>
																					<label>
																						<input type="text" class="textfield"><i class="bg_text"></i>
																						<span class="text_placeholder mm_ir-blind">테스트 타이틀 Mobile</span>
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
															<b>PC</b>
														</th>
														<td>
															<label class="mm_form-check">
																<input type="checkbox" data-check="{ 'desyncer': '.mm_desyncer-pc-title2' }" checked>
																<b class="mm_block">
																	<i class="ico_form-check"></i>
																	<span class="text_label">Mobile에 입력한 텍스트와 동일하게 사용</span>
																</b>
															</label>
															<div class="mm_form-table mm_desyncer-pc-title2">
																<table>
																	<tbody>
																		<tr>
																			<td>
																				<div class="mm_form-text">
																					<button type="button" class="btn_text-clear">
																						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																					</button>
																					<label>
																						<input type="text" class="textfield"><i class="bg_text"></i>
																						<span class="text_placeholder mm_ir-blind">테스트 타이틀 PC</span>
																					</label>
																				</div>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</td>
									<td>
										<!--
											<div class="mm_btn_box">
											<div class="mm_inline">
											<button type="button" class="mm_btn"><b>수정</b></button>
											</div>
											</div>
										-->
										<div class="mm_btn_box">
											<div class="mm_inline">
												<button type="button" class="mm_btn T=line">
													<b>취소</b>
												</button>
												<button type="button" class="mm_btn">
													<b>적용</b>
												</button>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 타이틀 -->

					<hr>

					<!-- 콘텐츠 등록 -->
					<h3 class="mm_heading">
						<b>콘텐츠 등록</b>
					</h3>

					<!-- 콘텐츠 상품 -->
					<div class="mm_form_box m...block-prod">
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>콘텐츠 상품<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_btn_box">
												<div class="mm_inline">
													<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
													<!-- (D) 상품 추가 후 노출합니다. -->
													<a class="mm_btn T=line" href="/product-list" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>등록 상품 확인 <strong class="mm_text-secondary text_num">1000</strong>개</b></a>
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- // 콘텐츠 상품 -->
					<!-- 콘텐츠 등록 -->
				</div>
				<!-- // 본문 내용 -->

				<!-- 현재 페이지 스크립트 -->
				<!--
					<script src="../js/app_page-display.js"></template>
					<script>
					// 적용 콜백
					function applyDisplayItem(__id) {

					// ? __id:string - iframe의 id(추가한 영역은 id가 없어 'create'로 리턴)
					// ? this:element - iframe
					// ? $listColums:element - iframe과 같은 뎁스의 리스트 td 요소

					var $listColums = this.closest('tbody').firstElementChild.children;

					// (D) 등록/수정을 적용할 때 $listColums의 내용이 변경되는 부분을 작성해주세요.
					if (__id === 'create') {
					this.dataset.id = 'id부여';
					// mm.find('b', $listColums[0])[0].textContent = '이름변경';
					}
					else {
					//
					}

					console.log('적용 ID:', __id, this);

					}

					// 삭제 콜백
					function removeDisplayItem(__id) {

					// ? __id:string - iframe의 id(추가한 영역은 id가 없어 'create'로 리턴)

					// (D) 모든 항목이 삭제됐을 때 노출방식 확인 필요합니다.
					// if (mm.siblings(this.closest('tbody')).length === 0) mm.event.dispatch('.btn_display-add', 'click');// 항목이 없으면 등록영역 생성

					console.log('삭제 ID:', __id, this);

					}

					// 순서변경 콜백
					function sortDisplayItem() {

					console.log('순서변경 적용', this);

					}
					</script>
				-->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import { loadScript } from 'vue-plugin-load-script';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	loadScript(`${window.env_path ?? ''}/js/app_page-display.js`);
</script>
