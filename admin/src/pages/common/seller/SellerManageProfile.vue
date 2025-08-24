<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>내 프로필</b>
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

					<!-- 내 프로필 등록 영역 -->
					<div class="mm_form_box">
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>아이디</b>
										</th>
										<td colspan="3">
											<p>KIM BERRY</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>인플루언서 미니샵 URL<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked T=fit">
												<span class="text_linked">https://m.keeif.kr/</span>
												<div class="mm_form-text">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text><i class="bg_text"></i>
														<span class="text_placeholder mm_ir-blind">인플루언서 미니샵 URL</span>
													</label>
												</div>
											</div>
											<div class="mm_note">
												<p>마침표와 하이픈(. -)을 제외한 특수문자는 허용되지 않습니다.</p>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>프로필 이미지<i class="ico_required" title="필수입력"></i></b>
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
											<b>커버 이미지</b>
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
											<div class="mm_note T=bottom">
												<ul>
													<li>미등록 시 프론트 커버 이미지 영역에 등록한 '프로필 이미지'가 확장되어 노출됩니다.</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>이름<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">이름</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>한 줄 소개</b>
										</th>
										<td colspan="3">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">한 줄 소개</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>소개</b>
										</th>
										<td colspan="3">
											<div class="mm_form-textarea">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<textarea class="textfield" data-text></textarea><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">소개</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>인스타그램 URL</b>
										</th>
										<td colspan="3">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">인스타그램 URL</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>카카오톡 URL</b>
										</th>
										<td colspan="3">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">카카오톡 URL</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>공유 URL</b>
										</th>
										<td colspan="3">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">공유 URL</span>
												</label>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- // 내 프로필 등록 영역 -->

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
</script>