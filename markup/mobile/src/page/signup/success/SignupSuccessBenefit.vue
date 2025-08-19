<template>
	<div class="m_modal-join-benefit">
		<!-- 쿠폰지급 -->
		<h3><b>회원가입 완료<br> 쿠폰이 지급되었습니다!</b></h3>
		<div class="m...benefit-content">
			<p>엠몬스타가 드리는 쿠폰으로<br> 즐거운 쇼핑하세요</p>
			<dl class="m...benefit-content-coupon">
				<dt>쿠폰</dt>
				<dd><strong>15%</strong></dd>
			</dl>
		</div>
		<div class="mm_foot">
			<div class="mm_btn_box">
				<mm-link
					class="mm_btn T=primary btn_link"
					:to="{ name: 'MyBenefitCoupon' }"
				>
					<b>쿠폰 확인하기</b><i class="ico_link"></i>
				</mm-link>
			</div>
		</div>

		<!-- 적립금지급 -->
		<!--
			<h3><b>회원가입 완료<br> 적립금이 지급되었습니다!</b></h3>
			<div class="m...benefit-content">
			<p>엠몬스타가 드리는 적립금으로<br> 즐거운 쇼핑하세요</p>
			<dl class="m...benefit-content-point">
			<dt>적립금</dt>
			<dd><strong>5,000</strong></dd>
			</dl>
			</div>
			<div class="mm_foot">
			<div class="mm_btn_box">
			<mm-link
			class="mm_btn T=primary btn_link"
			:to="{ name: 'MyBenefitPoint' }"
			>
			<b>적립금 확인하기</b><i class="ico_link"></i>
			</mm-link>
			</div>
			</div>
		-->
	</div>
</template>

<script setup lang="ts">
</script>