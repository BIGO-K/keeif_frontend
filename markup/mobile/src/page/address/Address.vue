<template>
	<div class="mm_address-list">
		<a
			class="mm_btn T=primary btn_register"
			href="#"
			@click.prevent="overlayAddressCreate"
		>
			<b>신규 배송지 등록</b>
		</a>

		<dawn-notice></dawn-notice>

		<p
			v-if="items.length < 1"
			class="mm_text-none"
		>
			<i class="ico_text-none"></i>등록된 배송지가 없습니다
		</p>

		<!-- (D) 최근배송지인 'mm_address-item' 에 'S=on' 클래스를 추가합니다. -->
		<ul v-else>
			<li>
				<a>
					<div
						class="mm_address-item"
						:class="{ 'S=on': true }"
					>
						<i class="ico_form-radio T=circle"></i>
						<dl>
							<dt>
								<b>나의자취방</b>
								<b class="mm_tag T=gray">최근배송지</b>

								<dawn-tag></dawn-tag>
							</dt>
							<dd>홍길동 / 010-1234-1234</dd>
							<dd>06616<br>부산광역시 강서구 녹산산단382로 14번가길 10~29번지(송정동)'<br>302동 101호</dd>
						</dl>
						<dawn-address-info></dawn-address-info>
					</div>
				</a>
				<button
					type="button"
					class="btn_remove"
				>
					<b>삭제</b>
				</button>
			</li>
			<li>
				<a>
					<div class="mm_address-item">
						<i class="ico_form-radio T=circle"></i>
						<dl>
							<dt><b>나의자취방</b></dt>
							<dd>홍길동 / 010-1234-1234</dd>
							<dd>06616<br>서울특별시 도봉구 창2동 647-12<br>가람마을10단지동양엔파트월드메르디앙 302동 101호</dd>
						</dl>
					</div>
				</a>
				<button
					type="button"
					class="btn_remove"
				>
					<b>삭제</b>
				</button>
			</li>
			<li>
				<a>
					<div class="mm_address-item">
						<i class="ico_form-radio T=circle"></i>
						<dl>
							<dt><b>회사</b></dt>
							<dd>홍길동 / 010-1234-1234</dd>
							<dd>06616<br>서울특별시 도봉구 창2동 647-12<br>가람마을10단지동양엔파트월드메르디앙 302동 101호</dd>
						</dl>
					</div>
				</a>
				<button
					type="button"
					class="btn_remove"
				>
					<b>삭제</b>
				</button>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import DawnAddressInfo from '@/custom/dawn/component/DawnAddressInfo.vue';
	import DawnNotice from '@/custom/dawn/component/DawnListNotice.vue';
	import DawnTag from '@/custom/dawn/component/DawnTag.vue';

	const layerContextStore = useLayerContextStore();

	function overlayAddressCreate() {
		const component = defineAsyncComponent(() => import('@/page/address/create/AddressCreate.vue'));

		return layerContextStore.openOverlay(component);
	}

	const items: unknown[] = [''];// 내용없음 확인용 임시 변수

	defineExpose<OverlayComponentExpose>({
		title: `배송지 관리`,
	});
</script>