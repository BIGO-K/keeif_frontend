<template>
	<div class="m_mybenefit">
		<div class="m_mybenefit-head">
			<h3><b>사용 가능한 쿠폰</b><strong class="mm_text-variable">{{ usableCouponCount }}<sub>장</sub></strong></h3>
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
			v-if="!paginator || paginator.total < 1"
			class="mm_text-none"
		>
			<i class="ico_text-none"></i>보유 쿠폰이 없습니다
		</p>

		<template v-else>
			<div class="m_mybenefit-coupon">
				<ul>
					<li
						v-for="couponRegist in paginator.data"
						:key="couponRegist.id"
					>
						<p :class="['text_status', { 'T=disabled': !couponRegist.is_usable }]">
							사용 {{ couponRegist.is_usable ? '가능' : '불가' }}
						</p>
						<div class="mm_coupon T=2xl">
							<div class="mm_coupon-inner">
								<p
									v-if="couponRegist.coupon.discount_type == 'rate'"
									class="text_percent"
								>
									<strong>{{ couponRegist.coupon.discount_amount }}</strong><sub>%</sub>
								</p>
								<p
									v-else
									class="text_price"
								>
									<strong>{{ number(couponRegist.coupon.discount_amount) }}</strong>
								</p>
								<p class="text_coupon">
									{{ couponRegist.coupon.title }}
								</p>
								<p class="text_condition">
									{{ couponRegist.coupon.apply_range_description }}
								</p>
								<p class="text_quantity">
									<span>{{ couponRegist.coupon.is_unlimited ? '무제한 발급' : '1장' }}</span>
								</p>
							</div>
						</div>
						<div class="m_mybenefit-coupon-using">
							<a
								href="#"
								@click.prevent="overlayMyBenefitCouponGuideline(couponRegist.coupon.id)"
							>
								<b>사용 조건</b><i class="ico_link"></i>
							</a>
							<p class="text_period">
								{{ couponRegist.remain_time_text }}
							</p>
							<p class="text_date">
								발급일자: {{ date(couponRegist.use_start_at, 'YYYY.MM.DD HH:ss') }}
							</p>
							<p class="text_date">
								취득일자: {{ date(couponRegist.expire_at, 'YYYY.MM.DD HH:ss') }}
							</p>
						</div>
					</li>
				</ul>
			</div>

			<pagination
				v-bind="{
					currentPage: paginator?.current_page,
					itemsPerPage: paginator?.per_page,
					totalCount: paginator?.total
				}"
				@move:page="fetch"
			></pagination>

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
	import { defineAsyncComponent, ref } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useMyCoupon } from '$/composables/useMyCoupon';
	import { useMyShopping } from '$/composables/useMyShopping';
	import Dropdown from '@/component/Dropdown.vue';
	import Pagination from '@/component/Pagination.vue';

	const { bom, openOverlay } = useGlobalPageContext();

	const { getRegistPaginator, addMyCoupon } = useMyCoupon();

	const { getBenefitStates } = useMyShopping();

	const { date, number } = useFormatter();

	const paginator = ref<Paginator<CouponRegistDetail>>();
	const usableCouponCount = ref(0);

	const { form, validate } = useForm<{ coupon_code: string }>(
		{
			coupon_code: '',
		},
		{
			rule: {
				'coupon_code(쿠폰 인증번호)': ['required', 'betweenLength:8,12'],
			},
		},
	);

	function bomCreateCoupon() {
		bom.prompt(
			'쿠폰 인증 번호를 입력해주세요<br> (8자리~최대 12자리)',
			async (_is: boolean, _values: Record<string, string>) => {
				if (!_is) {
					return;
				}
				form.value.coupon_code = _values.coupon_code;

				try {
					await validate();
					await addMyCoupon(form.value.coupon_code);
					bom.alert('쿠폰이 등록되었습니다.', () => { fetch(); });
				}
				catch (e) {
					useErrorAlert(e, undefined, bomCreateCoupon);
				}
			},
			{
				title: '쿠폰 등록',
				forms: [
					{ type: 'text', name: 'coupon_code', maxLength: 12, placeholder: '쿠폰번호를 입력하세요', value: '' },
				],
			},
		);
	}

	function overlayMyBenefitCouponGuideline(couponId: number) {
		const component = defineAsyncComponent(() => import('@/page/mypage/benefit/coupon/guideline/MyBenefitCouponGuideline.vue'));

		return openOverlay(component, {
			props: {
				couponId,
			},
		});
	}

	/**
	 * 쿠폰 발급내역 조회
	 * @param page
	 */
	async function fetch(page: number = 1) {
		try {
			paginator.value = await getRegistPaginator(page);
			usableCouponCount.value = (await getBenefitStates()).coupon_count;
		}
		catch (e) {
			useErrorAlert(e);
		}
	}

	await fetch();
</script>