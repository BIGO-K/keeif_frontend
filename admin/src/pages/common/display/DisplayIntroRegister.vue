<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>앱인트로 이미지 등록</b>
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

					<!-- 앱인트로 이미지 등록 영역 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>노출 여부<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-exposure" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">노출</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-exposure" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">미노출</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>배너 이미지 (Mobile App)<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-image">
											<div class="mm_form-image">
												<div class="mm_form-image-preview"></div>
												<label>
													<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 1000 }">
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
													<li>권장 사이즈는 W 750px * H 1334px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
													<li>이미지 최대 용량은 1MB를 초과할 수 없습니다.</li>
												</ul>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 앱인트로 이미지 등록 영역 -->

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