<template>
	<li>
		<form-radio
			v-model="paymentMethod"
			class="T=payment-naverpay"
			name="dev_radio-payment"
			value="naverpay"
		>
			<b class="mm_block">
				<i class="ico_naverpay"></i>
				<span class="text_label">네이버페이</span>
			</b>
		</form-radio>
	</li>
	<li>
		<form-radio
			class="T=payment-kakaopay"
			name="dev_radio-payment"
		>
			<b class="mm_block">
				<i class="ico_kakaopay"></i>
				<span class="text_label">카카오페이</span>
			</b>
		</form-radio>
	</li>
	<li>
		<form-radio
			v-model="paymentMethod"
			class="T=payment-payco"
			name="dev_radio-payment"
			value="payco"
		>
			<b class="mm_block">
				<i class="ico_payco"></i>
				<span class="text_label">페이코</span>
			</b>
		</form-radio>
	</li>
	<li>
		<form-radio
			class="T=payment-toss"
			name="dev_radio-payment"
		>
			<b class="mm_block">
				<i class="ico_toss"></i>
				<span class="text_label">토스페이</span>
			</b>
		</form-radio>
	</li>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import FormRadio from '@/component/form/FormRadio.vue';

	const paymentMethod = ref('');
</script>

<style lang="scss">
	@use '../../../asset/scss/helper/mixin';
	@use '../../../asset/scss/helper/function';

	.m_order-payment {
		// 결제 수단
		&-method {
			.mm_form-radio {
				// 결제수단 아이콘 클래스명은 개발팀 요청으로 지정된 클래스이며, 주문결제 페이지에서만 사용합니다.
				$payments: (naverpay, 55px, 22px, #00c73c, 31px, 'ico_naverpay.svg'), (kakaopay, 54px, 18px, #47292b, 34px, 'ico_kakaopay.svg'),
					(payco, 56px, 14px, #fa1414, 35px, 'ico_payco.svg'), (toss, 83px, 16px, #0064ff, 34px, 'ico_toss.png');
				@each $payment, $width, $height, $color, $top, $url in $payments {
					.ico_#{$payment} {
						top: $top;

						&::before {
							width: $width;
							height: $height;
							@if $payment == toss {
								@include mixin.svg(none);
								@include mixin.background(transparent url('/image/common/#{$url}') no-repeat '0 0/cover');
							}
							@else {
								@include mixin.svg(#888 url('/image/common/#{$url}'));
							}
						}
					}

					&#{function.escape('.T=payment-#{$payment}')} {
						input[type='radio'] {
							&:checked + .mm_block {
								&::before {
									border-color: $color;

									@if $payment == kakaopay {
										border-color: #ffcd00;
									}
								}

								i::before {
									@if $payment == naverpay {
										@include mixin.svg(none);
										@include mixin.background(transparent url('/image/common/#{$url}') '100% 0/contain' no-repeat);
									}
									@else if $payment == toss {
										@include mixin.background(transparent '0 100%');
									}
									@else {
										background-color: $color;
									}
								}

								.text_label {
									color: $color;
								}
							}
						}
					}
				}
			}
		}
	}
</style>