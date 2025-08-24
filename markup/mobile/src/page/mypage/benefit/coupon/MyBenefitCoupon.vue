<template>
	<div class="m_mybenefit">
		<div class="m_mybenefit-head">
			<h3><b>사용 가능한 쿠폰</b><strong class="mm_text-variable">25<sub>장</sub></strong></h3>
			<div class="mm_btn_box">
				<div class="mm_inline">
					<button
						type="button"
						class="mm_btn T=sm T=lighter"
						@click.prevent="bomCreateCoupon"
					>
						<b>쿠폰 등록하기</b>
					</button>
				</div>
			</div>
		</div>

		<!-- 쿠폰목록 -->
		<p
			v-if="items.length < 1"
			class="mm_text-none"
		>
			<i class="ico_text-none"></i>보유 쿠폰이 없습니다
		</p>

		<template v-else>
			<div class="m_mybenefit-coupon">
				<ul>
					<li>
						<p class="text_status">
							사용 가능
						</p>
						<div class="mm_coupon T=2xl">
							<div class="mm_coupon-inner">
								<p class="text_percent">
									<strong>7</strong><sub>%</sub>
								</p>
								<p class="text_coupon">
									승급할인 쿠폰
								</p>
								<p class="text_condition">
									특정 브랜드 상품 30,000원 이상
								</p>
								<p class="text_quantity">
									<span>1장</span>
								</p>
							</div>
						</div>
						<div class="m_mybenefit-coupon-using">
							<a
								href="#"
								@click.prevent="overlayMyBenefitCouponGuideline"
							>
								<b>사용 조건</b><i class="ico_link"></i>
							</a>
							<p class="text_period">
								23일 남음
							</p>
							<p class="text_date">
								발급일자: 2022.05.26 12:30
							</p>
							<p class="text_date">
								취득일자: 2022.05.26 12:30
							</p>
						</div>
					</li>
					<li>
						<p class="text_status">
							사용 가능
						</p>
						<div class="mm_coupon T=2xl">
							<div class="mm_coupon-inner">
								<p class="text_price">
									<strong>2,500</strong>
								</p>
								<p class="text_coupon">
									승급할인 쿠폰
								</p>
								<p class="text_condition">
									특정 브랜드 상품 사용 가능
								</p>
								<p class="text_quantity">
									<span>무제한 발급</span>
								</p>
							</div>
						</div>
						<div class="m_mybenefit-coupon-using">
							<a
								href="#"
								@click.prevent="overlayMyBenefitCouponGuideline"
							>
								<b>사용 조건</b><i class="ico_link"></i>
							</a>
							<p class="text_period">
								7일 남음
							</p>
						</div>
					</li>
					<li>
						<p class="text_status">
							사용 가능
						</p>
						<div class="mm_coupon T=2xl">
							<div class="mm_coupon-inner">
								<p class="text_percent">
									<strong>7</strong><sub>%</sub>
								</p>
								<p class="text_coupon">
									승급할인 쿠폰
								</p>
								<p class="text_condition">
									특정 브랜드 상품 30,000원 이상
								</p>
								<p class="text_quantity">
									<span>1장</span>
								</p>
							</div>
						</div>
						<div class="m_mybenefit-coupon-using">
							<a
								href="#"
								@click.prevent="overlayMyBenefitCouponGuideline"
							>
								<b>사용 조건</b><i class="ico_link"></i>
							</a>
							<p class="text_period">
								7일 남음
							</p>
						</div>
					</li>
					<li>
						<p class="text_status T=disabled">
							사용 불가
						</p>
						<div class="mm_coupon T=2xl">
							<div class="mm_coupon-inner">
								<p class="text_percent">
									<strong>10</strong><sub>%</sub>
								</p>
								<p class="text_coupon">
									제이앤에이 마운티아 30% 중복 할인 쿠폰_naver_mb
								</p>
								<p class="text_condition">
									특정 브랜드 상품 사용 가능
								</p>
								<p class="text_quantity">
									<span>1장</span>
								</p>
							</div>
						</div>
						<div class="m_mybenefit-coupon-using">
							<a
								href="#"
								@click.prevent="overlayMyBenefitCouponGuideline"
							>
								<b>사용 조건</b><i class="ico_link"></i>
							</a>
							<p class="text_period">
								23일 남음
							</p>
							<p class="text_date">
								발급일자: 2022.05.26 12:30
							</p>
							<p class="text_date">
								취득일자: 2022.05.26 12:30
							</p>
						</div>
					</li>
				</ul>
			</div>

			<pagination></pagination>

			<!-- 유의사항 -->
			<div class="mm_note">
				<dropdown
					:is-active="true"
					icon-class="T=box"
				>
					<template #button>
						<i class="ico_info"></i><b>쿠폰 유의사항</b>
					</template>
					<template #content>
						<ul>
							<li>쿠폰은 회원에 한해 적용되며, 한 품목당 한장의 쿠폰만 사용할 수 있습니다.</li>
							<li>쿠폰 사용 후 잔액은 환불이 불가하며, 자동 소멸됩니다.</li>
							<li>쿠폰에 따라 유효기간/최소 사용금액과 같은 사용 조건이 상이합니다.</li>
							<li>쿠폰에 따라 금액, 브랜드, 상품, 디바이스별로 사용이 제한될 수 있습니다.</li>
							<li>유효기간이 만료된 쿠폰은 사용할 수 없습니다.</li>
						</ul>
					</template>
				</dropdown>
			</div>
		</template>
	</div>
</template>

<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import mons from '$/utils/mons';
	import Dropdown from '@/component/Dropdown.vue';
	import Pagination from '@/component/Pagination.vue';

	const bomCreateCoupon = () => {
		mons().bom.prompt(
			'쿠폰 인증 번호를 입력해주세요<br> (8자리~최대 12자리)',
			(_is: boolean, _values: Record<string, string>) => {
				console.log(_is, _values);
			},
			{
				title: '쿠폰 등록',
				forms: [
					{ type: 'text', name: 'couopn', maxLength: 12, placeholder: '쿠폰번호를 입력하세요' }
				]
			}
		);
	};

	const layerContextStore = useLayerContextStore();
	function overlayMyBenefitCouponGuideline() {
		const component = defineAsyncComponent(() => import('@/page/mypage/benefit/coupon/guideline/MyBenefitCouponGuideline.vue'));

		return layerContextStore.openOverlay(component);
	}

	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
</script>