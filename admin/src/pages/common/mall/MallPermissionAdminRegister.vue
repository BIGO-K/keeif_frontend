<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>관리자 등록</b>
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

					<!-- 관리자 등록 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>이름<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-linked">
											<div class="mm_form-text T=sm">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">사용자 이름 입력</span>
												</label>
											</div>
											<label class="mm_form-check">
												<input type="checkbox" data-check>
												<b class="mm_block">
													<i class="ico_form-check"></i>
													<span class="text_label">MD</span>
												</b>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>부서<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td>
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option>부서 선택</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
									<th scope="row">
										<b>접근 권한<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td>
										<div class="mm_form-select">
											<label>
												<select data-select>
													<option>접근 권한 선택</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>이메일<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
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
										<b>휴대폰 번호<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text T=sm">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text maxlength="12"><i class="bg_text"></i>
												<span class="text_placeholder">-없이 숫자만 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>아이디<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-linked">
											<div class="mm_form-text T=lg">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text minlength="4" maxlength="16"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">사용자 아이디 입력</span>
												</label>
											</div>
											<button type="button" class="mm_btn">
												<b>중복체크</b>
											</button>
											<p class="text_valid">
												사용가능
											</p>
										</div>
										<div class="mm_note">
											<p>영문/특수문자/숫자 4~16자 이하, 특수문자는 _ 만 가능합니다.</p>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>비밀번호<i class="ico_required" title="필수입력"></i></b>
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
												<input type="password" class="textfield" data-text minlength="8" maxlength="16"><i class="bg_text"></i>
												<span class="text_placeholder">비밀번호 입력</span>
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
												<input type="password" class="textfield" data-text minlength="8" maxlength="16"><i class="bg_text"></i>
												<span class="text_placeholder">비밀번호 한번 더 입력</span>
											</label>
										</div>
										<div class="mm_note">
											<p>영문/특수문자/숫자 2가지 혼합 사용 시 10~16자 이하, 3가지 이상 혼합 사용 시 8~16자 이하, 대·소문자를 구분합니다.</p>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 관리자 등록 -->

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
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>