<template>
	<dd class="m...info-dawn">
		<dawn-tag></dawn-tag>

		<strong>20시까지 결제 시 <span>내일 아침 7시 전 도착</span></strong>
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
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import DawnTag from '@/custom/dawn/component/DawnTag.vue';

	const layerContextStore = useLayerContextStore();

	function overlayAddress() {
		const component = defineAsyncComponent(() => import('@/page/address/Address.vue'));

		return layerContextStore.openOverlay(component);
	}
</script>