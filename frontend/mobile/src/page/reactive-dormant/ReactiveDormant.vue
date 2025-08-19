<template>
	<div class="m_modal-login-quiescent">
		<h3><b>{{ member?.name }}님!<br> <strong class="mm_text-variable">계정휴면이 해제되었습니다</strong></b></h3>
		<p>회원님의 개인 정보는 ‘개인정보보호법’에 따라<br> 안전하게 분리, 보관되고 있었습니다</p>
		<div
			v-if="coupon"
			class="m...quiescent-coupon"
		>
			<p>
				다시 찾아와주신 고객님께 드리는 감사선물<br>
				<span v-if="coupon.discount_type === 'rate'">{{ coupon.discount_amount }}% 중복할인 쿠폰</span>
				<span v-else>{{ number(coupon.discount_amount) }}원 중복할인 쿠폰</span>
			</p>
			<div class="mm_coupon T=lg">
				<div class="mm_coupon-inner">
					<p
						v-if="coupon.discount_type === 'rate'"
						class="text_percent"
					>
						<strong>{{ coupon.discount_amount }}</strong><sub>%</sub>
					</p>
					<p
						v-else
						class="text_price"
					>
						<strong>{{ number(coupon.discount_amount) }}</strong>
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
					v-if="coupon"
					type="button"
					class="mm_btn T=line T=dark btn_link"
					@click="() => $router.replace({ name: 'MyBenefitCoupon'})"
				>
					<b>받은선물 확인하기</b><i class="ico_link"></i>
				</button>
				<button
					v-else
					type="button"
					class="mm_btn T=line T=dark btn_link"
					@click="$router.replace({ name : 'Main'})"
				>
					<b>쇼핑하러가기</b><i class="ico_link"></i>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';

	defineExpose<OverlayComponentExpose>({
		title: `휴면회원 해제안내`,
	});

	defineProps<{
		coupon: Nullable<RegistedCoupon>
	}>();

	const { member } = useGlobalPageContext();
	const { number } = useFormatter();
</script>