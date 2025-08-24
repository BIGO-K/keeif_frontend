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
								:to="{ name: 'MyInquirySingleCreate' }"
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
						<li>
							<mm-link :to="{ name: 'CsFaq' }">
								<b>배송</b>
							</mm-link>
						</li>
						<li>
							<mm-link :to="{ name: 'CsFaq' }">
								<b>주문/결제</b>
							</mm-link>
						</li>
						<li>
							<mm-link :to="{ name: 'CsFaq' }">
								<b>취소/교환/반품</b>
							</mm-link>
						</li>
						<li>
							<mm-link :to="{ name: 'CsFaq' }">
								<b>쿠폰</b>
							</mm-link>
						</li>
						<li>
							<mm-link :to="{ name: 'CsFaq' }">
								<b>적립금</b>
							</mm-link>
						</li>
						<li>
							<mm-link :to="{ name: 'CsFaq' }">
								<b>회원/멤버십</b>
							</mm-link>
						</li>
						<li>
							<mm-link :to="{ name: 'CsFaq' }">
								<b>기타</b>
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
				<div class="mm_accordion">
					<ul>
						<li>
							<dropdown
								tag="dl"
								group="cs-notice"
							>
								<template #button>
									<p><b class="text_important">중요</b><b>[공지] M.Mon solution 온라인 쇼핑몰 OPEN</b></p>
								</template>
								<template #content>
									<p>
										<lazyload
											tag="img"
											src="/image/_sample/notice_1.png"
										></lazyload>
									</p><br>
									<p>안녕하세요.<br>코로나 바이러스와 관련하여 택배사별 일부상품 입고 및 배송지연 안내 드립니다.</p>
								</template>
							</dropdown>
						</li>
						<li>
							<dropdown
								tag="dl"
								group="cs-notice"
							>
								<template #button>
									<p><b>[공지] 1월 쿠폰 공지사항입니다</b></p>
								</template>
								<template #content>
									<p>M.Mon solution의 다양한 행사소식과 다채로운 혜택을 받으실 수 있으며, 국내외 유명 브랜드 상품을 쇼핑할 수 있는 온오프라인 통합앱입니다.</p>
								</template>
							</dropdown>
						</li>
						<li>
							<dropdown
								tag="dl"
								group="cs-notice"
							>
								<template #button>
									<p><b>[공지] 6월 신용카드 무이자할부</b></p>
								</template>
								<template #content>
									<p>M.Mon solution의 다양한 행사소식과 다채로운 혜택을 받으실 수 있으며, 국내외 유명 브랜드 상품을 쇼핑할 수 있는 온오프라인 통합앱입니다.</p>
								</template>
							</dropdown>
						</li>
						<li>
							<dropdown
								tag="dl"
								group="cs-notice"
							>
								<template #button>
									<p><b>[공지] 6월 신용카드 무이자할부</b></p>
								</template>
								<template #content>
									<p>M.Mon solution의 다양한 행사소식과 다채로운 혜택을 받으실 수 있으며, 국내외 유명 브랜드 상품을 쇼핑할 수 있는 온오프라인 통합앱입니다.</p>
								</template>
							</dropdown>
						</li>
						<li>
							<dropdown
								tag="dl"
								group="cs-notice"
							>
								<template #button>
									<p><b>[공지] 6월 신용카드 무이자할부</b></p>
								</template>
								<template #content>
									<p>M.Mon solution의 다양한 행사소식과 다채로운 혜택을 받으실 수 있으며, 국내외 유명 브랜드 상품을 쇼핑할 수 있는 온오프라인 통합앱입니다.</p>
								</template>
							</dropdown>
						</li>
					</ul>
				</div>
				<!-- (D) 공지사항이 5개 이하인 경우 더보기 버튼을 노출하지 않습니다 -->
				<mm-link
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
					<li>
						<mm-link :to="{ name: 'CsHelpLevel' }">
							<b>회원등급 및 혜택</b><i class="ico_link"></i>
						</mm-link>
					</li>
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
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import EasypayCsHelpMenu from '@/feature/easypay/component/EasypayCsHelpMenu.vue';
</script>