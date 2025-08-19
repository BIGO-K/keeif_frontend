<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="m_login">
					<div class="m_login-inner">
						<h1><b class="mm_ir-blind">M.Mon solution ADMIN</b></h1>

						<!-- 로그인 정보 입력 -->
						<div class="m_login-form">
							<section>
								<h3><b>아이디</b></h3>
								<div class="mm_form-text T=wide">
									<button type="button" class="btn_text-clear">
										<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
									</button>
									<label>
										<input type="text" class="textfield" data-text><i class="bg_text"></i>
										<span class="text_placeholder mm_ir-blind">아이디</span>
									</label>
								</div>
							</section>
							<section>
								<h3><b>비밀번호</b></h3>
								<div class="mm_form-text T=wide">
									<button type="button" class="btn_text-pw">
										<i class="ico_hide"></i><b class="mm_ir-blind">비밀번호 보기</b>
									</button>
									<button type="button" class="btn_text-clear">
										<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
									</button>
									<label>
										<input type="password" class="textfield" data-text maxlength="50"><i class="bg_text"></i>
										<span class="text_placeholder mm_ir-blind">비밀번호</span>
									</label>
								</div>
							</section>

							<!-- (D) 5회 이상 로그인에 실패했을시 m_login-form-fail을 노출합니다. -->
							<div class="m_login-form-fail">
								<p>5회 이상 로그인에 실패하셨습니다.<br> 정보 보호를 위해 자동 입력 방지 문자를 함께 입력해주세요.</p>
								<i class="image_security"><img src="/public/images/_sample/login_security.png" alt="자동입력 방지문자"></i>
								<button type="button" class="mm_btn T=line T=lighter">
									<i class="ico_refresh T=dark"></i><b>새로고침</b>
								</button>
								<div class="mm_form-text T=wide">
									<button type="button" class="btn_text-clear">
										<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
									</button>
									<label>
										<input type="text" class="textfield" data-text maxlength="6"><i class="bg_text"></i>
										<span class="text_placeholder mm_ir-blind">자동입력 방지문자</span>
									</label>
								</div>
							</div>

							<label class="mm_form-check">
								<input type="checkbox" data-check>
								<b class="mm_block">
									<i class="ico_form-check"></i>
									<span class="text_label">아이디 저장</span>
								</b>
							</label>
							<div class="mm_btn_box">
								<button type="button" class="mm_btn T=xl T=variable">
									<b>로그인</b>
								</button>
							</div>

							<!-- 인증번호확인 -->
							<!-- (D) 로그인 성공 시 인증번호 확인 영역을 노출합니다. -->
							<div class="m_login-form-confirm">
								<div class="mm_form_mix-linked T=fit">
									<div class="mm_form-text T=wide">
										<button type="button" class="btn_text-clear">
											<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
										</button>
										<label>
											<input type="text" class="textfield" data-text maxlength="6"><i class="bg_text"></i>
											<span class="text_placeholder">인증번호를 입력해주세요.</span>
										</label>
										<p class="text_time">
											<span>03</span>:<span>00</span>
										</p>
									</div>
									<button type="button" class="mm_btn T=line btn_resend">
										<b>재발송</b>
									</button>
								</div>
								<div class="mm_btn_box">
									<button type="button" class="mm_btn T=xl">
										<b>인증번호 확인</b>
									</button>
								</div>
								<div class="mm_note">
									<ul>
										<li>해당 계정에 등록되어 있는 휴대폰 번호로 인증 번호가 발송되었습니다.</li>
									</ul>
								</div>
							</div>
							<!-- // 인증번호확인 -->
						</div>
						<!-- // 로그인 정보 입력 -->
					</div>
				</div>
				<!-- // 본문 내용 -->

				<!-- 현재 페이지 스크립트 -->
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>