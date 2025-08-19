<template>
	<dd class="m...info-dawn">
		<dawn-tag></dawn-tag>

		<strong>17시 30분까지 결제 시 <span>내일 아침 7시 전 도착</span>(토요일 제외)</strong>
		<p>새벽배송 가능 지역이 아닐 경우 일반 배송됩니다.</p>
		<a
			class="mm_btn T=2xs T=line T=light"
			href="#"
			@click.prevent="overlayAddress"
		>
			<b>서비스 가능 지역 보기</b><i class="ico_link T=sm"></i>
		</a>
	</dd>
</template>

<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import DawnTag from '@/custom/dawn/component/DawnTag.vue';

	const { openOverlay, member, bom, router } = useGlobalPageContext();
	const component = defineAsyncComponent(() => import('@/page/address/Address.vue'));
	function overlayAddress() {

		if (!member.value) {
			return bom.confirm('로그인이 필요합니다 \n로그인 페이지로 이동하시겠습니까?', (flag) => {
				if (flag) {
					router.push({
						name: 'Login',
						query: {
							redirect_to_after: router.currentRoute.value.fullPath,
						},
					});
				}
			});
		}


		return openOverlay(component, {
			props: {
				needDawnDeliveryCheck: true,
			},
		});
	}
</script>