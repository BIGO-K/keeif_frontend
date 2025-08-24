<template>
	<div class="m_overlay-address">
		<h6 class="mm_text-label">
			<b>받는 사람</b>
		</h6>
		<form-text
			placeholder="받는 사람을 입력하세요(필수입력)"
		></form-text>
		<h6 class="mm_text-label">
			<b>휴대폰 번호</b>
		</h6>
		<form-text
			type="tel"
			placeholder="휴대폰 번호를 입력하세요(필수·숫자만입력)"
		></form-text>
		<div class="mm_form_mix-address">
			<h6 class="mm_text-label">
				<b>주소</b>
			</h6>
			<div class="mm_form_mix-linked">
				<form-text
					placeholder="우편번호"
					label-on-blind
				></form-text>
				<mm-link
					class="mm_btn T=dark"
					:to="{}"
					@click.prevent="overlayAddressPostcode"
				>
					<b>우편번호 찾기</b>
				</mm-link>
			</div>
			<div class="mm_form-text">
				<label>
					<span class="textfield text_readonly">검색주소</span>
					<i class="bg_text"></i>
				</label>
			</div>
			<form-text
				placeholder="상세 주소를 입력하세요(필수입력)"
			></form-text>
		</div>
		<!-- 하단 버튼 -->
		<div class="mm_foot">
			<div class="mm_btn_box">
				<button
					type="button"
					class="mm_btn T=primary"
				>
					<b>등록하기</b>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import FormText from '@/component/form/FormText.vue';

	const layerContextStore = useLayerContextStore();

	function overlayAddressPostcode() {
		const component = defineAsyncComponent(() => import('@/page/address/postcode/AddressPostcode.vue'));

		return layerContextStore.openOverlay(component);
	}

	defineExpose<OverlayComponentExpose>({
		title: `배송지 변경`,
	});
</script>