<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>셀러 공지 등록</b>
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

					<!-- 공지사항 등록 영역 -->
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
												<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 50자 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>공지 분류<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-list" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">일반</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-list" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">정산</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-list" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">시스템</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>노출일</b>
									</th>
									<td colspan="3">
										<div class="mm_form-text T=calendar">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
												<span class="text_placeholder">노출일</span>
												<i class="ico_datepicker-calendar"></i>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>중요 공지</b>
									</th>
									<td colspan="3">
										<label class="mm_form-check">
											<input type="checkbox" data-check>
											<b class="mm_block">
												<i class="ico_form-check"></i>
												<span class="text_label">중요</span>
											</b>
										</label>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>공지내용<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_editor"></div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>첨부파일</b>
										<!-- (D) 추가 버튼 클릭 시 파일첨부 영역을 추가합니다. -->
										<button type="button" class="mm_btn T=xs T=line T=tertiary">
											<b>추가</b>
										</button>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-linked">
											<div class="mm_form-file">
												<button type="button" class="btn_remove-file">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">파일삭제</b>
												</button>
												<label>
													<input type="file" data-file="{ 'onChange': 'fileSize', '_fileSize': 5000 }">
													<span class="text_path"></span>
													<span class="mm_btn T=line T=light text_label">파일첨부</span>
												</label>
											</div>
										</div>
										<div class="mm_note T=bottom">
											<ul>
												<li>파일첨부는 최대 5개까지 가능합니다.</li>
												<li>파일 당 용량은 5MB를 초과할 수 없습니다.</li>
											</ul>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 공지사항 등록 영역 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<a class="mm_btn T=xl T=line T=tertiary" href="#" data-href="{ '_type': 'link' }"><b>취소하기</b></a>
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>등록하기</b>
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