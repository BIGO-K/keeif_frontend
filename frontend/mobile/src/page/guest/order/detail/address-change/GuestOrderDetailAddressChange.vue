<template>
	<div class="m_overlay-address">
		<h6 class="mm_text-label">
			<b>받는 사람</b>
		</h6>
		<form-text
			v-model="form.name"
			placeholder="받는 사람을 입력하세요(필수입력)"
		></form-text>
		<h6 class="mm_text-label">
			<b>휴대폰 번호</b>
		</h6>
		<form-text
			v-model="form.tel"
			type="tel"
			placeholder="휴대폰 번호를 입력하세요(필수·숫자만입력)"
		></form-text>
		<div class="mm_form_mix-address">
			<h6 class="mm_text-label">
				<b>주소</b>
			</h6>
			<div class="mm_form_mix-linked">
				<form-text
					v-model="form.zip_code"
					placeholder="우편번호"
					readonly
					label-on-blind
				></form-text>
				<button
					type="button"
					class="mm_btn T=dark"
					@click="overlayAddressPostcode"
				>
					<b>우편번호 찾기</b>
				</button>
			</div>
			<form-text
				v-model="form.base_address"
				readonly
				label-on-blind
				placeholder="검색주소"
			></form-text>
			<form-text
				v-model="form.detail_address"
				placeholder="상세 주소를 입력하세요(필수입력)"
			></form-text>
		</div>
		<!-- 하단 버튼 -->
		<div class="mm_foot">
			<div class="mm_btn_box">
				<button
					type="button"
					class="mm_btn T=primary"
					@click="change"
				>
					<b>등록하기</b>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import FormText from '@/component/form/FormText.vue';

	defineExpose<OverlayComponentExpose>({
		title: `배송지 변경`,
	});

	const props = defineProps<{
		closer: CloseHandler<{ newAddress: MyShippingAddress}>
	}>();

	const { openOverlay } = useGlobalPageContext();

	const { form, validate } = useForm<MyShippingAddress>({
		name: '',
		tel: '',
		zip_code: '',
		base_address: '',
		detail_address: '',
		is_dawn_delivery: false,
	}, {
		rule: {
			'name(받는사람)': ['required'],
			'tel(휴대폰 번호)': ['required', 'validPhoneNumber'],
			'zip_code(우편번호)': ['required'],
			'base_address(기본 주소)': ['required'],
			'detail_address(상세 주소)': ['required'],
		},
	});

	async function change() {

		try {
			await validate();
			props.closer({ newAddress: form.value });
		}
		catch (e) {
			useErrorAlert(e);
		}
	}

	function overlayAddressPostcode() {
		const component = defineAsyncComponent(() => import('@/page/address/postcode/AddressPostcode.vue'));

		return openOverlay(component, {
			onClose: (address: SearchAddress) => {
				form.value.zip_code = address.zip_code;
				form.value.base_address = address.road_address;
			},
		});
	}
</script>