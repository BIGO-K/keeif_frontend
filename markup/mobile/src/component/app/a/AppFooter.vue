<template>
	<!-- 푸터 -->
	<footer
		id="mm_footer"
		class="mm_footer T=fa"
	>
		<!-- 푸터-메뉴 -->
		<div class="mm_footer-menu">
			<ul class="mm_flex T=equal">
				<li>
					<mm-link :to="'http://'">
						<b>서비스 소개</b>
					</mm-link>
				</li>
				<li>
					<mm-link :to="'http://'">
						<b>입점문의</b>
					</mm-link>
				</li>
				<li>
					<mm-link :to="'http://xn4pp.channel.io/support-bots/80625'">
						<b>고객문의</b>
					</mm-link>
				</li>
			</ul>
		</div>

		<!-- 푸터-정보 -->
		<div class="mm_footer-info">
			<dropdown icon-class="T=sm">
				<b>(주)트리즈커머스</b>
				<template #button>
					<b>사업자 정보</b>
				</template>
				<template #content>
					<address>
						<p>대표: 김정훈</p>
						<p>서울 강남구 봉은사로 47길 19-3(논현동, 트리즈빌딩)</p>
						<p>
							사업자등록번호: 844-86-00705
							<mm-link to="http://">
								<b>사업자정보 확인</b>
							</mm-link>
						</p>
						<p>통신판매업 신고번호: 제2019-서울강남-05553호</p>
						<p>개인정보관리자: 김정훈</p>
						<p class="text_cs">
							대표전화:
							<a
								href="tel:1522-7839"
								title="전화연결"
							>
								<b>1522-7839</b>
							</a> / AM 09:30 ~ PM 18:30 (월-금)
						</p>
						<p>점심시간 12:30~13:30 / 주말 및 공휴일 휴무</p>
						<p class="text_email">
							이메일:
							<a
								href="mailto:platform@triz-group.com"
								title="새 창 열림"
							>
								<b>platform@triz-group.com</b>
							</a>
						</p>
					</address>
				</template>
			</dropdown>
			<ul class="mm_footer-info-terms">
				<li>
					<mm-link :to="{ name: 'Policy', params: { policyType: 'service' } }">
						<b>서비스이용약관</b>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'Policy', params: { policyType: 'privacy' } }">
						<strong>개인정보처리방침</strong>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'Policy', params: { policyType: 'teenager' } }">
						<b>청소년보호방침</b>
					</mm-link>
				</li>
				<li>
					<mm-link to="http://">
						<b>구매안전서비스 가입사실확인</b>
					</mm-link>
				</li>
			</ul>
			<p class="text_copyright">
				&#169;Triz-group. All rights reserved.
			</p>
		</div>
	</footer>
</template>

<script setup lang="ts">
	import Dropdown from '@/component/Dropdown.vue';
</script>