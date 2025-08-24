<template>
	<div class="m_modal-join-benefit">
		<!-- 쿠폰지급 -->
		<h3><b>회원가입 완료<br> 쿠폰이 지급되었습니다!</b></h3>
		<div class="m...benefit-content">
			<p>{{ korean(`${shop.name}(이/가)`) }} 드리는 {{ eventLabel }}으로<br> 즐거운 쇼핑하세요</p>

			<template v-if="registEventType === 'coupon'">
				<dl class="m...benefit-content-coupon">
					<dt>쿠폰</dt>
					<dd>
						<strong v-if="registEvent.amount_type === 'rate'">{{ registEvent.amount }}%</strong>
						<strong v-else>{{ number(registEvent.amount) }}</strong>
					</dd>
				</dl>
			</template>
			<template v-else>
				<dl class="m...benefit-content-point">
					<dt>적립금</dt>
					<dd><strong>{{ number(registEvent.point) }}</strong></dd>
				</dl>
			</template>
		</div>
		<div class="mm_foot">
			<div class="mm_btn_box">
				<mm-link
					v-if="registEventType === 'coupon'"
					class="mm_btn T=primary btn_link"
					:to="{ name: 'MyBenefitCoupon' }"
					replace
				>
					<b>쿠폰 확인하기</b><i class="ico_link"></i>
				</mm-link>

				<mm-link
					v-else
					:to="{ name: 'MyBenefitPoint'}"
					class="mm_btn T=primary btn_link"
					replace
				>
					<b>적립금 확인하기</b><i class="ico_link"></i>
				</mm-link>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import config from '$/utils/config';
	import { useFormatter } from '$/composables/useFormatter';

	const props = defineProps<{
		registEvent: RegistEvent
	}>();

	const registEventType = computed(() => {
		if (props.registEvent.type === 'coupon') {
			return 'coupon';
		}

		return 'point';
	});

	const eventLabel = computed(() => registEventType.value === 'coupon' ? '쿠폰' : '적립금');
	const { korean, number } = useFormatter();
	const shop = config('shop');
</script>