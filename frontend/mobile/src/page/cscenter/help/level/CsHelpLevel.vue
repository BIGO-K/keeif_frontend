<template>
	<layout
		title="회원등급 및 혜택"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_popup-cs-benefit">
			<div class="mm_grade">
				<h3><b>등급별 혜택 안내</b></h3>
				<p>최근 3개월간 실 결제금액을 기준으로 매월 1일<br>구매등급에 반영됩니다</p>
				<div class="mm_accordion">
					<ul>
						<li
							v-for="grade in gradBenefits"
							:key="grade.id"
						>
							<dropdown
								tag="dl"
								group="help-level"
							>
								<template #button>
									<p class="text_grade">
										<strong>
											<lazyload
												class="mm_bg-cover image_grade"
												:src="grade.image_url"
												is-force
											></lazyload>
											{{ grade.name }}
										</strong><span>{{ getGradeUpConditionLabel(grade.grade_up_sell_price_condition, grade.grade_up_sell_amount_condition) }}</span>
									</p>
								</template>
								<template #content>
									<dl v-if="grade.coupons.length > 0">
										<dt>등급별 쿠폰</dt>
										<dd
											v-for="gradeCoupon in grade.coupons"
											:key="gradeCoupon.id"
										>
											<p>{{ gradeCoupon.discount_type === 'KRW' ? `${number(gradeCoupon.discount_amount)}원` : `${gradeCoupon.discount_amount}%` }} 할인</p>
											<div class="mm_coupon">
												<div class="mm_coupon-inner">
													<p
														v-if="gradeCoupon.discount_type === 'rate'"
														class="text_percent"
													>
														<strong>{{ gradeCoupon.discount_amount }}</strong><sub>%</sub>
													</p>
													<p
														v-if="gradeCoupon.discount_type === 'KRW'"
														class="text_price"
													>
														<strong>{{ number(gradeCoupon.discount_amount) }}</strong>
													</p>
													<p class="text_coupon">
														등급할인 쿠폰
													</p>
												</div>
											</div>
											<span class="text_amount">
												{{ `x${gradeCoupon.is_unlimited ? '무제한 발급' : gradeCoupon.download_limit}` }}
												<sub v-if="!gradeCoupon.is_unlimited">장</sub>
											</span>
										</dd>
									</dl>
									<dl>
										<dt>등급 적립율</dt>
										<dd>{{ grade.purchase_benefit_rate }}%</dd>
									</dl>
								</template>
							</dropdown>
						</li>
					</ul>
				</div>
			</div>
			<div class="mm_note">
				<ul class="mm_inner">
					<li>회원 등급은 산정 기준에 따라 매월 1일에 확정됩니다.</li>
					<li>등급별 쿠폰은 매월 1일 다운로드 가능하며, 해당 월에 한하여 사용 가능합니다.</li>
					<li>받으신 쿠폰은 <strong>마이페이지 &#62; 혜택관리 &#62; 보유 쿠폰</strong> 페이지에서 확인 가능합니다.</li>
					<li>기간 내 사용하지 않은 쿠폰은 이월되지 않으며, 타 쿠폰과 중복 사용 불가합니다.</li>
				</ul>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { useFormatter } from '$/composables/useFormatter';
	import { useMyShopping } from '$/composables/useMyShopping';
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';

	const { getGradeBenefitInfo } = useMyShopping();
	const gradBenefits = await getGradeBenefitInfo();
	const { number } = useFormatter();

	const getGradeUpConditionLabel = (buyPrice: number, buyAmount: number) => {
		let label = '';

		// 구매금액 등급업 조건 존재하는 경우
		if (buyPrice > 0) {
			label += `${Math.round(buyPrice / 10000)}만원 이상`;
		}

		// 구매횟수 등급업 조건 존재하는 경우
		if (buyAmount > 0) {
			label += `${label !== '' ? ', ' : ''} ${buyAmount}건 이상`;
		}

		if (label === '') {
			return label = `신규 회원 및 미구매`;
		}

		return label;
	};
</script>