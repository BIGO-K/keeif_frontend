
<template>
	<div class="m_overlay-coupon">
		<div class="m_overlay-coupon-head">
			<h3><b>받기 가능한 쿠폰</b><strong>{{ number(coupons.length) }}<sub>장</sub></strong></h3>
			<button
				type="button"
				class="mm_btn T=sm T=primary btn_download"
				@click="downloadAll"
			>
				<b>전체 쿠폰받기</b>
			</button>
		</div>

		<!-- 쿠폰 리스트 -->
		<ul class="m_overlay-coupon-list">
			<li
				v-for="coupon in coupons"
				:key="coupon.id"
			>
				<p class="text_coupon">
					{{ coupon.name }}
				</p>
				<p class="text_period">
					{{ coupon.expiration_date_message }}
				</p>
				<p
					v-if="!isDownloadableDevice(coupon.usable_device_labels)"
					class="text_condition"
				>
					<i class="ico_info"></i>{{ getDeviceLabel(coupon.usable_device_labels) }}
				</p>
				<button
					v-if="coupon.downloadable"
					type="button"
					class="mm_btn T=sm T=line T=primary btn_download"
					@click="downLoadCoupons([coupon.id])"
				>
					<b>쿠폰받기</b>
				</button>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { defineProps, computed } from 'vue';
	import mons from '$/utils/mons';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGoodsAdditional } from '$/composables/useGoodsAdditional';
	import { useUserAgent } from '$/composables/useUserAgent';
	defineExpose<OverlayComponentExpose>({
		title: `쿠폰 다운받기`,
	});

	const props = defineProps<{
		coupons: DownloadableCoupon[]
	}>();
	const { number } = useFormatter();
	const { isAppUser } = useUserAgent();
	const { downloadCoupon } = useGoodsAdditional();
	const coupons = computed(() => props.coupons);
	const { bom, loading } = mons();

	function isDownloadableDevice(deviceLabels: string[]) {
		if (isAppUser) {
			return deviceLabels.length === 3 || deviceLabels.includes('모바일앱');
		}
		else {
			return deviceLabels.length === 3 || deviceLabels.includes('모바일웹');
		}
	}

	/**
	 * 다운로드 가능한 디바이스 라벨 목록 반환
	 *
	 * @param {string[]} deviceLabels
	*/
	function getDeviceLabel(deviceLabels: string[]) {
		const devicesLabel = deviceLabels.filter(deviceLabel => {
			if (isAppUser) {
				return deviceLabel !== '모바일앱';
			}
			else {
				return deviceLabel !== '모바일웹';
			}
		}).join(', ');

		return `${devicesLabel}에서만 쿠폰 다운로드 가능`;
	}

	async function downloadAll() {
		await downLoadCoupons(coupons.value.filter(coupon => coupon.downloadable).map(coupon => coupon.id));
	}
	/**
	 * 쿠폰 다운로드 처리
	 * @param {number[]} couponId: 쿠폰 ID
	*/
	async function downLoadCoupons(couponIds: number[]) {
		if (couponIds.length < 1) {
			return bom.alert('다운받을 쿠폰이 없습니다.');
		}
		loading.show();
		try {
			await downloadCoupon(couponIds);
			bom.alert('쿠폰이 발급되었습니다.');
		}
		catch (error) {
			useErrorAlert(error);
		}
		finally {
			loading.hide();
		}
	}
</script>