<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>이메일 발송 수정</b>
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
					<div class="mm_form_box">
						<!-- 폼 영역 -->
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>발신자 이메일<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text value="customer@company.com"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">발신자 이메일</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>수신자</b>
										</th>
										<td colspan="3">
											<!-- (D) 선택 이메일 발송, 검색 이메일 발송 시 노출 형태 -->
											<div class="mm_selected">
												<a class="mm_btn T=line" href="/member/inform/send/receive" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>수신 회원 <strong class="mm_text-secondary text_num">100</strong>명</b></a>
											</div>

											<!-- (D) 전체 회원 이메일 발송 시 노출 형태 -->
											<!-- <p>전체 회원</p> -->
											<div class="mm_note T=bottom">
												<ul>
													<li>수정 페이지에서는 수신자를 변경할 수 없습니다. 수신자를 변경하시려면 새로 등록해 주시기 바랍니다.</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>예약 발송</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<div class="mm_form-text T=calendar">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
														<span class="text_placeholder">발송일</span>
														<i class="ico_datepicker-calendar"></i>
													</label>
												</div>
												<div class="mm_form-select">
													<label>
														<select data-select>
															<option>00</option>
														</select>
														<b class="text_selected"></b>
														<i class="ico_form-select"></i>
													</label>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>템플릿 선택</b>
										</th>
										<td colspan="3">
											<div class="mm_form-select">
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
									<tr>
										<th scope="row">
											<b>이메일 제목<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="255"><i class="bg_text"></i>
													<span class="text_placeholder">최대 255자 입력</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>이메일 내용<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_editor"></div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<!-- // 폼 영역 -->

						<!-- 안내문구 -->
						<div class="mm_note">
							<ul>
								<li>템플릿 선택 시, 템플릿에 등록된 제목, 내용이 이메일 내용 항목에 자동으로 노출됩니다. (필수 선택 아님)</li>
							</ul>
						</div>
						<!-- // 안내문구 -->
					</div>
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>치환코드</b>
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
											<b>고객명</b>
										</th>
										<td><p>#{고객명}</p></td>
										<th scope="row">
											<b>등급</b>
										</th>
										<td><p>#{등급명}</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>쇼핑몰명</b>
										</th>
										<td colspan="3">
											<p>#{쇼핑몰 한글명}</p>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<!-- 안내문구 -->
						<div class="mm_note">
							<ul>
								<li>고객명, 등급, 쇼핑몰명을 이메일 템플릿에 적용하고 싶으시면 #으로 시작하는 치환코드를 내용에 입력해주시기 바랍니다.</li>
							</ul>
						</div>
						<!-- // 안내문구 -->
					</div>

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=line T=tertiary">
									<b>취소하기</b>
								</button>
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