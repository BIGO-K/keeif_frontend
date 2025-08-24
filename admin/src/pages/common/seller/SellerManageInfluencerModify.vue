<template>
	<layout>
		<template #content>
			<!-- 본문 -->
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>인플루언서 수정</b>
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
					<!-- 인플루언서 수정 영역 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr><th></th><td></td><th></th><td></td></tr>
								<tr>
									<th scope="row">
										<b>거래처 유형<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td>
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option>유형을 선택하세요.</option>
													<option>법인 사업자</option>
													<option>개인 사업자</option>
													<option>간이 과세자</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
									<th scope="row">
										<b>구분<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td>
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-division" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">업체배송</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-division" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">위탁</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-division" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">사입</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>패널티 적용 여부<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-penalty" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">적용</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-penalty" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">미적용</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>매출/통계용 카테고리<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-select T=lg">
											<label>
												<select data-select>
													<option>분류를 선택하세요.</option>
													<option>여성패션</option>
													<option>남성패션</option>
													<option>스포츠</option>
													<option>유니섹스</option>
													<option>키즈</option>
													<option>언더웨어</option>
													<option>슈즈</option>
													<option>잡화</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>상품속성<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-product" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">공용</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-product" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">남성</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-product" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">여성</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>사용자 아이디<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-linked">
											<div class="mm_form-text T=lg">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="16"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">사용자 아이디 입력</span>
												</label>
											</div>
											<button type="button" class="mm_btn">
												<b>중복체크</b>
											</button>
										</div>
										<div class="mm_note">
											<p>영문/특수문자/숫자 4~16자 이하, 특수문자는 _ 만 가능합니다.</p>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>사용자 비밀번호<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text T=lg">
											<button type="button" class="btn_text-pw">
												<i class="ico_hide"></i><b class="mm_ir-blind">비밀번호 보기</b>
											</button>
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="password" class="textfield" data-text maxlength="16"><i class="bg_text"></i>
												<span class="text_placeholder">비밀번호를 입력하세요.</span>
											</label>
										</div>
										<div class="mm_form-text T=lg">
											<button type="button" class="btn_text-pw">
												<i class="ico_hide"></i><b class="mm_ir-blind">비밀번호 보기</b>
											</button>
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="password" class="textfield" data-text maxlength="16"><i class="bg_text"></i>
												<span class="text_placeholder">비밀번호를 한번 더 입력하세요.</span>
											</label>
										</div>
										<div class="mm_note">
											<p>영문/특수문자/숫자 2가지 혼합 사용 시 10~16자 이하, 3가지 이상 혼합 사용 시 8~16자 이하, 대·소문자를 구분합니다.</p>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>인플루언서명<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text S=byte">
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
										<b>대표자명<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text S=byte">
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
										<b>사업자 번호<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td>
										<div class="mm_form-text T=sm">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
												<span class="text_placeholder">숫자만 입력</span>
											</label>
										</div>
									</td>
									<th scope="row">
										<b>법인 등록번호<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td>
										<div class="mm_form-text T=sm">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text maxlength="13"><i class="bg_text"></i>
												<span class="text_placeholder">숫자만 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>업종</b>
									</th>
									<td colspan="3">
										<div class="mm_form-text S=byte">
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
										<b>업태</b>
									</th>
									<td colspan="3">
										<div class="mm_form-text S=byte">
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
										<b>대표 이메일<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text S=byte">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">@포함 최대 50자 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>대표 연락처<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td>
										<div class="mm_form-text T=sm">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text maxlength="12"><i class="bg_text"></i>
												<span class="text_placeholder">숫자만 입력</span>
											</label>
										</div>
									</td>
									<th scope="row">
										<b>통신 판매업 신고번호</b>
									</th>
									<td>
										<div class="mm_form-text T=sm">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder">숫자만 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>사업자 주소</b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-address">
											<div class="mm_form_mix-linked">
												<div class="mm_form-text T=xs">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text readonly><i class="bg_text"></i>
														<span class="text_placeholder mm_ir-blind">우편번호</span>
													</label>
												</div>
												<a href="_popup_postcode.html" class="mm_btn T=line btn_postcode" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>우편번호 찾기</b></a>
											</div>
											<div class="mm_form-text T=lg">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text readonly><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">검색주소</span>
												</label>
											</div>
											<div class="mm_form-text T=lg">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text><i class="bg_text"></i>
													<span class="text_placeholder">상세 주소를 입력하세요.</span>
												</label>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>사업자 등록증 첨부</b>
									</th>
									<td colspan="3">
										<div class="mm_form-image">
											<div class="mm_form-image-preview"></div>
											<label>
												<input type="file" accept="image/*" data-file>
												<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
											</label>
											<button type="button" class="btn_remove-file">
												<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>통신 판매업 신고증 첨부</b>
									</th>
									<td colspan="3">
										<div class="mm_form-image">
											<div class="mm_form-image-preview"></div>
											<label>
												<input type="file" accept="image/*" data-file>
												<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
											</label>
											<button type="button" class="btn_remove-file">
												<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>정산 계좌 정보<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option>은행을 선택하세요.</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
												<span class="text_placeholder">예금주를 입력하세요.</span>
											</label>
										</div>
										<div class="mm_form-text T=lg">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text maxlength="20"><i class="bg_text"></i>
												<span class="text_placeholder">계좌번호를 입력하세요.(숫자만 입력)</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>통장 사본 첨부<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-image">
											<div class="mm_form-image-preview"></div>
											<label>
												<input type="file" accept="image/*" data-file>
												<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
											</label>
											<button type="button" class="btn_remove-file">
												<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>담당 MD 설정<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_selected">
											<!-- (D) 검색 팝업에서 선택 적용 시 'ul' 영역을 노출합니다. -->
											<a class="mm_btn T=line" href="_popup_mdSearch.html" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>담당 MD 검색</b></a>
											<!--
												<ul>
												<li>
												<b>담당 MD A</b>
												<button type="button" class="btn_remove"><i class="ico_remove"></i><b class="mm_ir-blind">삭제</b></button>
												</li>
												</ul>
											-->
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>정산 기준<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td><p>판매분 정산</p></td>
									<th scope="row">
										<b>마진율(%)<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td>
										<div class="mm_form-text T=xs">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder">최대 100.0</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>결제 예정일<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-table">
											<table>
												<tbody>
													<tr>
														<th scope="row">
															<b>결제 월</b>
														</th>
														<td>
															<div class="mm_radio-list">
																<ul>
																	<li>
																		<label class="mm_form-radio">
																			<input type="radio" name="dev_radio-month" data-radio checked>
																			<b class="mm_block">
																				<i class="ico_form-radio"></i>
																				<span class="text_label">당월</span>
																			</b>
																		</label>
																	</li>
																	<li>
																		<label class="mm_form-radio">
																			<input type="radio" name="dev_radio-month" data-radio>
																			<b class="mm_block">
																				<i class="ico_form-radio"></i>
																				<span class="text_label">익월</span>
																			</b>
																		</label>
																	</li>
																</ul>
															</div>
														</td>
													</tr>
													<tr>
														<th scope="row">
															<b>결제 일</b>
														</th>
														<td>
															<div class="mm_form-select T=xs">
																<label>
																	<select data-select>
																		<option>1일</option>
																	</select>
																	<b class="text_selected"></b>
																	<i class="ico_form-select"></i>
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
					<!-- // 인플루언서 수정 영역 -->

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

				<!-- 현재 페이지 스크립트 -->
			</div>
			<!-- // 본문 -->
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';

    // 내용없음
	// const _isNone = false;
</script>