<template>
	<div
		class="m_modal-prod-coupon"
		:class="`T=coupon-${pcsId}`"
	>
		<h3>
			<i class="image_logo">
				<lazyload
					tag="img"
					:src="`/image/content/logo_${pcsId}.png`"
					:alt="`${couponKeyword}`"
				></lazyload>
			</i>
			<b>전용</b>
		</h3>
		<div class="m...coupon-sale">
			<p class="text_percent">
				<strong>20</strong><sub>%</sub>
			</p>

			<!-- (D) 금액 쿠폰인 경우 -->
			<!--
				<p class="text_price">
				<strong>2,500</strong>
				</p>
			-->
			<p>중복할인쿠폰</p>
		</div>
		<p>발급 후 당일사용/일부 상품 브랜드 제외</p>
		<div class="mm_btn_box">
			<button
				type="button"
				class="mm_btn T=dark"
			>
				<b>지금 다운받기</b><i class="ico_coupon-download"></i>
			</button>
			<button
				type="button"
				class="btn_today"
			>
				<b>오늘하루 그만보기</b><i class="ico_modal-close"></i>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import Lazyload from '@/component/Lazyload.vue';

	const pcsId = 'naver';
	const couponKeyword = computed(() => pcsId === 'naver' ? '네이버' : '다음');

	defineExpose<OverlayComponentExpose>({
		title: `${couponKeyword.value} 전용 쿠폰`,
	});

	// 오늘하루 그만보기 샘플
	// function closeCouponCookie() {

	// 	var prodId = 'PROD_123456';// 전용쿠폰을 상품마다 노출할 경우 고유 id 지정
	// 	mm.cookie.set('IS_NAVER_COUPON_HIDE_' + prodId, true, 1, true); // 1일 자정 리셋

	// }
</script>