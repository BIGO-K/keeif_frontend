<template>
	<layout
		title="간편결제 - 토스페이"
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
								<p><b>간편결제(토스페이) 안내</b></p>
							</template>
							<template #content>
								<p>토스페이는 간편하게 지문 또는 비밀번호만으로 결제할 수 있는 빠르고 편리한 간편 결제 서비스입니다</p>
								<ul>
									<li><p>카카오톡에 탑재되어 별도의 어플을 설치할 필요가 없 습니다</p></li>
									<li><span class="text_indent">1.</span><p>결제수단 선택</p></li>
									<li>
										<dl>
											<dt><span class="text_indent">2.</span><p>휴대폰 번호/생년월일을 입력</p></dt>
											<dd><p>앱 없이 결제 시 [휴대폰 번호/생년월일] 입력</p></dd>
										</dl>
									</li>
									<li><span class="text_indent">3.</span><p>금액 확인 및 결제하기</p></li>
									<li><span class="text_indent">4.</span><p>토스 비밀번호 입력 또는 생체 인증</p></li>
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