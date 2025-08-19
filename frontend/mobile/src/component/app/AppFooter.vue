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
					<a
						href="http://keeif.quv.kr?is_out_intent=Y"
						target="_blank"
					>
						<b>서비스 소개</b>
					</a>
				</li>
				<li>
					<a
						href="https://docs.google.com/forms/d/1ohkYNnFZ6jqzJYZBrMLwYu-RJsDf7CjRuUiiO_MwMj4/viewform?edit_requested=true&is_out_intent=Y"
						target="_blank"
					>
						<b>입점문의</b>
					</a>
				</li>
				<li>
					<mm-link :to="'http://xn4pp.channel.io/support-bots/80625?is_out_intent=Y'">
						<b>고객문의</b>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'CsMain' }">
						<b>고객센터</b>
					</mm-link>
				</li>
			</ul>
		</div>

		<!-- 푸터-정보 -->
		<div class="mm_footer-info">
			<dropdown icon-class="T=sm">
				<b>{{ shop.name_in_business }}</b>
				<template #button>
					<b>사업자 정보</b>
				</template>
				<template #content>
					<address>
						<p>대표: {{ shop.ceo_name }}</p>
						<p>{{ shop.base_address }}</p>
						<p>
							사업자등록번호: {{ shop.business_number }}
							<a
								:href="externalLink(shop.business_service_info_url)"
								target="_blank"
								title="새 창 열림"
							>
								<b>사업자정보 확인</b>
							</a>
						</p>
						<p>통신판매업 신고번호: {{ shop.sell_account }}</p>
						<p>개인정보관리자: {{ shop.privacy_manager }}</p>
						<p class="text_cs">
							대표전화:
							<a
								:href="`tel:${shop.cs_tel}`"
								title="전화연결"
							>
								<b>{{ shop.cs_tel }}</b>
							</a> / {{ shop.cs_time }}
						</p>
						<p>점심시간 {{ shop.cs_lunch_time }}</p>
						<p>팩스번호: {{ shop.cs_fax_number }}</p>
						<p class="text_email">
							이메일:
							<a
								:href="`mailto:${shop.cs_email}`"
								title="새 창 열림"
							>
								<b>{{ shop.cs_email }}</b>
							</a>
						</p>
					</address>
				</template>
			</dropdown>
			<ul class="mm_footer-info-terms">
				<li>
					<mm-link :to="{ name: 'Policy', params: { policyType: 'agreement' } }">
						<b>서비스이용약관</b>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'Policy', params: { policyType: 'privacy' } }">
						<strong>개인정보처리방침</strong>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'Policy', params: { policyType: 'teen' } }">
						<b>청소년보호방침</b>
					</mm-link>
				</li>
				<li>
					<a
						:href="shop.payment_service_info_url"
						target="_blank"
						title="새 창 열림"
					>
						<b>구매안전서비스 가입사실확인</b>
					</a>
				</li>
			</ul>
			<p class="text_copyright">
				&#169;{{ shop.copyright_text }}
			</p>
		</div>
	</footer>
</template>

<script setup lang="ts">
	import config from '$/utils/config';
	import { useFormatter } from '$/composables/useFormatter';
	import Dropdown from '@/component/Dropdown.vue';
	const shop = config('shop');
	const { externalLink } = useFormatter();
</script>