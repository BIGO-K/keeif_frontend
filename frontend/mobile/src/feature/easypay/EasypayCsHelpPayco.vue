<template>
	<layout
		title="간편결제 - 페이코"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_popup-cs">
			<div class="mm_accordion">
				<ul>
					<li>
						<dropdown
							tag="dl"
							group="help-pay"
						>
							<template #button>
								<p><b>첫 결제 고객</b></p>
							</template>
							<template #content>
								<p>페이코는 NHN 엔터테인먼트가 만든 안전한 간편결제 서비스입니다</p>
								<ul>
									<li><span class="text_indent">1.</span><p>페이코 결제 선택</p></li>
									<li><span class="text_indent">2.</span><p>본인인증(휴대폰/아이핀) 및 회원가입</p></li>
									<li>
										<dl>
											<dt><span class="text_indent">3.</span><p>아이핀 회원가입 시 휴대폰 인증</p></dt>
											<dd><p>휴대폰 인증 가입 시 해당 단계 생략</p></dd>
										</dl>
									</li>
									<li><span class="text_indent">4.</span><p>신용카드 정보 등록</p></li>
									<li><span class="text_indent">5.</span><p>결제 비밀번호 등록</p></li>
									<li><span class="text_indent">6.</span><p>등록 및 결제 완료</p></li>
								</ul>
							</template>
						</dropdown>
					</li>
					<li>
						<dropdown
							tag="dl"
							group="help-pay"
						>
							<template #button>
								<p><b>재 결제 고객</b></p>
							</template>
							<template #content>
								<ul>
									<li><span class="text_indent">1.</span><p>페이코 결제선택</p></li>
									<li><span class="text_indent">2.</span><p>로그인</p></li>
									<li><span class="text_indent">3.</span><p>할인 및 결제수단 선택</p></li>
									<li><span class="text_indent">4.</span><p>결제 비밀번호 등록</p></li>
									<li><span class="text_indent">5.</span><p>결제 완료</p></li>
								</ul>
							</template>
						</dropdown>
					</li>
				</ul>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
</script>