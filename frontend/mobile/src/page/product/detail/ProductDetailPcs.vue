<template>
	<div
		class="m_modal-prod-coupon"
		:class="`T=coupon-${pcsType}`"
	>
		<h3>
			<i class="image_logo">
				<lazyload
					tag="img"
					:src="`/image/content/logo_${pcsType}.png`"
					:alt="`${couponKeyword}`"
				></lazyload>
			</i>
			<b>전용</b>
		</h3>
		<div class="m...coupon-sale">
			<template v-if="epCoupon.discount_type === 'rate'">
				<p class="text_percent">
					<strong>{{ epCoupon.discount_amount }}</strong><sub>%</sub>
				</p>
			</template>
			<template v-else>
				<p class="text_price">
					<strong>{{ number(epCoupon.discounted_price ) }}</strong>
				</p>
			</template>
			<p>중복할인쿠폰</p>
		</div>
		<p>발급 후 당일사용/일부 상품 브랜드 제외</p>
		<div class="mm_btn_box">
			<button
				type="button"
				class="mm_btn T=dark"
				@click="download"
			>
				<b>지금 다운받기</b><i class="ico_coupon-download"></i>
			</button>
			<button
				type="button"
				class="btn_today"
				@click="closeToday"
			>
				<b>오늘하루 그만보기</b><i class="ico_modal-close"></i>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import { usePopupStore } from '$/stores/usePopupStore';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useGoodsAdditional } from '$/composables/useGoodsAdditional';
	import Lazyload from '@/component/Lazyload.vue';

	const props = defineProps<{
		epCoupon: EPCoupon,
		goodsId: number,
		closer: OverlayCloseHandler<void>
	}>();

	const pcsType = computed(() => props.epCoupon.site_code);
	const { member, router, bom, loading } = useGlobalPageContext();
	const couponKeyword = computed(() => pcsType.value === 'naver' ? '네이버' : '다음');
	const { number } = useFormatter();
	defineExpose<OverlayComponentExpose>({
		title: `${couponKeyword.value} 전용 쿠폰`,
	});

	const { downloadCoupon } = useGoodsAdditional();
	const popupStore = usePopupStore();
	const download = async () => {
		if (!member.value) {
			return bom.confirm('로그인이 필요합니다 \n로그인 페이지로 이동하시겠습니까', (flag: boolean) => {
				if (flag) {
					router.push({
						name: 'Login',
						query: {
							redirect_to_after: router.currentRoute.value.path,
						},
					});
				}
			});
		}

		if (!props.epCoupon.id) {
			return;
		}

		loading.show();
		try {
			await downloadCoupon([props.epCoupon.id]);
			bom.alert('쿠폰이 발급 되었습니다.');
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	};

	const closeToday = () => {
		popupStore.hide(`${props.epCoupon.site_code}_${props.goodsId}`);
		props.closer();
	};
</script>