<template>
	<layout title="고객센터">
		<div class="m_cs-main">
			<div class="mm_inner">
				<!-- 고객센터 퀵메뉴 -->
				<div class="m_cs-main-menu">
					<ul>
						<li>
							<mm-link
								:to="{ name: 'MyInquirySingleCreate' }"
							>
								<i class="ico_cs-inquiry"></i>
								<b>1:1 고객 상담</b>
							</mm-link>
						</li>
						<li>
							<mm-link
								:to="{ name: 'MyInquirySingle' }"
							>
								<i class="ico_cs-answer"></i>
								<b>상담/답변확인</b>
							</mm-link>
						</li>
						<li>
							<mm-link
								:to="{ name: 'MyOrder' }"
							>
								<i class="ico_cs-order"></i>
								<b>주문 배송조회</b>
							</mm-link>
						</li>
						<li>
							<mm-link
								:to="{ name: 'MyBenefitCoupon' }"
							>
								<i class="ico_cs-coupon"></i>
								<b>쿠폰/적립금</b>
							</mm-link>
						</li>
					</ul>
				</div>

				<!-- 자주하는 질문 -->
				<div class="m_cs-faq-menu">
					<h3 class="mm_heading">
						<b>FAQ 바로가기</b>
					</h3>
					<ul>
						<li
							v-for="faqType in faqTypes"
							:key="faqType.id"
						>
							<mm-link :to="{ name: 'CsFaq', query: { type: faqType.id } }">
								<b>{{ faqType.name }}</b>
							</mm-link>
						</li>
					</ul>
				</div>
			</div>

			<!-- 공지사항 -->
			<section class="m_cs-main-notice">
				<h3 class="mm_strapline">
					<b>공지사항</b>
				</h3>
				<p
					v-if="recentNotices.length < 1"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>공지사항 내역이 없습니다.
				</p>
				<div
					v-else
					class="mm_accordion"
				>
					<ul>
						<li
							v-for="notice in recentNotices"
							:key="notice.id"
						>
							<dropdown
								tag="dl"
								group="cs-notice"
							>
								<template #button>
									<p>
										<b
											v-if="notice.is_important"
											class="text_important"
										>중요</b>
										<b>{{ notice.title }}</b>
									</p>
								</template>
								<template #content>
									<div v-html="notice.contents"></div>
								</template>
							</dropdown>
						</li>
					</ul>
				</div>
				<!-- (D) 공지사항이 5개 이하인 경우 더보기 버튼을 노출하지 않습니다 -->
				<mm-link
					v-if="recentNotices.length >= 5"
					class="btn_more"
					:to="{ name: 'CsNotice' }"
				>
					<b>더보기</b><i class="ico_link"></i>
				</mm-link>
			</section>

			<!-- 이용안내 -->
			<section class="m_cs-main-info">
				<h3 class="mm_strapline">
					<b>이용안내</b>
				</h3>
				<ul>
					<li>
						<mm-link :to="{ name: 'CsHelpTracking' }">
							<b>주문/반품 배송조회</b><i class="ico_link"></i>
						</mm-link>
					</li>
					<li>
						<mm-link :to="{ name: 'CsHelpReturn' }">
							<b>반품/환불 안내</b><i class="ico_link"></i>
						</mm-link>
					</li>
					<!--
						<li>
						<mm-link :to="{ name: 'CsHelpLevel' }">
						<b>회원등급 및 혜택</b><i class="ico_link"></i>
						</mm-link>
						</li>
					-->
					<li>
						<mm-link :to="{ name: 'CsHelpBenefit' }">
							<b>쿠폰/적립금</b><i class="ico_link"></i>
						</mm-link>
					</li>

					<easypay-cs-help-menu v-if="true"></easypay-cs-help-menu>
				</ul>
			</section>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useFaq } from '$/composables/useFaq';
	import { useNotice } from '$/composables/useNotice';
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import EasypayCsHelpMenu from '@/feature/easypay/component/EasypayCsHelpMenu.vue';

	const { getRecents } = useNotice();
	const { getTypes } = useFaq();

	const [pRecentNotices, pFaqTypes] = await Promise.all([
		getRecents(),
		getTypes(),
	]);
	const recentNotices = ref<NoticeDetail[]>(pRecentNotices);
	const faqTypes = ref<FaqType[]>(pFaqTypes);
</script>