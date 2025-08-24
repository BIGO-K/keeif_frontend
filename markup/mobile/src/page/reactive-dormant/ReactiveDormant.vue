<template>
	<div class="m_modal-login-quiescent">
		<h3><b>홍길동님!<br> <strong class="mm_text-variable">계정휴면이 해제되었습니다</strong></b></h3>
		<p>회원님의 개인 정보는 ‘개인정보보호법’에 따라<br> 안전하게 분리, 보관되고 있었습니다</p>
		<div class="m...quiescent-coupon">
			<p>다시 찾아와주신 고객님께 드리는 감사선물<br> <span>2,500원 중복할인 쿠폰</span></p>
			<div class="mm_coupon T=lg">
				<div class="mm_coupon-inner">
					<!-- (D) %할인 쿠폰 지급 시 text_percent 영역을 노출합니다. -->
					<!-- <p class="text_percent"><strong>2</strong><sub>%</sub></p> -->

					<!-- (D) 정액 할인 쿠폰 지급 시 text_price 영역을 노출합니다. -->
					<p class="text_price">
						<strong>2,500</strong>
					</p>
					<p class="text_coupon">
						중복 할인쿠폰
					</p>
				</div>
			</div>
		</div>
		<div class="mm_btn_box">
			<div class="mm_inline">
				<button
					type="button"
					class="mm_btn T=line T=dark btn_link"
				>
					<b>받은선물 확인하기</b><i class="ico_link"></i>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	defineExpose<OverlayComponentExpose>({
		title: `휴면회원 해제안내`,
	});
</script>