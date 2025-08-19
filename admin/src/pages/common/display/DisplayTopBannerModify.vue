<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>탑배너 수정</b>
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

					<!-- 탑배너 등록 영역 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>제목<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 30 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 30자 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>사용 여부<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td>
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-using" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">사용</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-using" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">미사용</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
									<th scope="row">
										<b>노출 기간<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td>
										<div class="mm_form_mix-period">
											<div class="mm_form-text T=calendar">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
													<span class="text_placeholder">시작일</span>
													<i class="ico_datepicker-calendar"></i>
												</label>
											</div>
											<b class="text_tilde">~</b>
											<div class="mm_form-text T=calendar">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
													<span class="text_placeholder">종료일</span>
													<i class="ico_datepicker-calendar"></i>
												</label>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>링크 URL</b><i class="ico_required" title="필수입력"></i>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">링크 URL</span>
											</label>
										</div>
										<div class="mm_note">
											<p>URL 등록 시, 도메인을 제외한 나머지 부분을 입력해 주세요.<br>예) (X) https://www.naver.com / (O) goods/category/11/115/1053</p>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>탑배너 (Mobile)<i class="ico_required" title="필수입력"></i></b>
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
													<!-- (D) 탑배너 A타입 권장사이즈 입니다 -->
													<li>권장 사이즈는 W 752px * H 120px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
													<!-- (D) 탑배너 B타입 권장사이즈 입니다 -->
													<!-- <li>권장 사이즈는 W 712px * H 120px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li> -->
													<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
													<li>모바일 탑배너를 클릭했을 때 커튼배너가 노출되지 않고 설정하신 링크 URL로 이동합니다.</li>
												</ul>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>탑배너 (PC)<i class="ico_required" title="필수입력"></i></b>
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
													<li>권장 사이즈는 W 1920px * H 90px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
													<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
												</ul>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>클릭 노출 커튼배너 (PC)</b>
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
													<li>권장 사이즈는 W 1360px * H 820px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
													<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
													<li>PC 화면에서 탑배너를 클릭했을 때 커튼배너를 등록하지 않으면 설정하신 링크 URL로 이동하고, 커튼배너를 등록했을 때는 커튼배너가 노출됩니다.</li>
												</ul>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 탑배너 등록 영역 -->

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