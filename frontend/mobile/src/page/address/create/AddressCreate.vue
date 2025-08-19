<template>
	<div class="m_overlay-address">
		<h6 class="mm_text-label">
			<b>배송지명</b>
		</h6>
		<form-text
			v-model="form.shipping_name"
			maxlength="5"
			placeholder="배송지명을 입력하세요(필수입력)"
		></form-text>
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
			input-mode="number"
			placeholder="휴대폰 번호를 입력하세요(필수·숫자만입력)"
		></form-text>
		<div class="mm_form_mix-address">
			<h6 class="mm_text-label">
				<b>주소</b>
			</h6>
			<div class="mm_form_mix-linked">
				<form-text
					v-model="form.zip_code"
					readonly
					placeholder="우편번호"
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

			<dawn-confirm v-if="isDawnDelivery && needDawnDeliveryCheck"></dawn-confirm>
		</div>

		<dawn-delivery-info
			v-model:entrance-password="form.entrance_password"
			v-model:etc="form.etc"
			v-model:entrance-type="form.entrance_type"
		></dawn-delivery-info>

		<dawn-notice></dawn-notice>

		<!-- 하단 버튼 -->
		<div class="mm_foot">
			<div class="mm_btn_box">
				<button
					type="button"
					class="mm_btn T=primary"
					@click="add()"
				>
					<b>등록하기</b>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, defineProps, ref, computed } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import mons from '$/utils/mons';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useMyAddress } from '$/composables/useMyAddress';
	import { DAWN_DELIVERY_ENTRANCE_TYPE } from '$/constants/index';
	import FormText from '@/component/form/FormText.vue';
	import DawnConfirm from '@/custom/dawn/component/DawnConfirm.vue';
	import DawnDeliveryInfo from '@/custom/dawn/component/DawnDeliveryInfo.vue';
	import DawnNotice from '@/custom/dawn/component/DawnNotice.vue';
	defineExpose<OverlayComponentExpose>({
		title: `신규 배송지 등록`,
	});
	const props = withDefaults(defineProps<{
		needDawnDeliveryCheck?: boolean
		closer: CloseHandler<boolean>
	}>(), {
		needDawnDeliveryCheck: false,
	});
	const { bom, loading } = mons();
	const layerContextStore = useLayerContextStore();

	const { form, validate } = useForm<AddMyAddressForm>({
		shipping_name: '',
		name: '',
		tel: '',
		zip_code: '',
		base_address: '',
		detail_address: '',
		entrance_type: props.needDawnDeliveryCheck ? DAWN_DELIVERY_ENTRANCE_TYPE.password : DAWN_DELIVERY_ENTRANCE_TYPE.none,
		entrance_password: '',
		etc: '',
	}, {
		rule: {
			'shipping_name(배송지명)': ['required'],
			'name(받는사람)': ['required'],
			'tel(휴대폰 번호)': ['required', 'validPhoneNumber'],
			'zip_code(우편번호)': ['required'],
			'base_address(기본 주소)': ['required'],
			'detail_address(상세 주소)': ['required'],
			'entrance_password(공동현관 비밀번호)': [`requiredIf:entrance_type,${DAWN_DELIVERY_ENTRANCE_TYPE.password}`],
			'etc(기타)': [`requiredIf:entrance_type,${DAWN_DELIVERY_ENTRANCE_TYPE.etc}`],
		},
	});

	const shippingAddressEntranceDescription = computed(() => {
		if (form.value.entrance_type === DAWN_DELIVERY_ENTRANCE_TYPE.none || form.value.entrance_type === DAWN_DELIVERY_ENTRANCE_TYPE.nonePassword) {
			return '';
		}

		return form.value.entrance_type === DAWN_DELIVERY_ENTRANCE_TYPE.password ? form.value.entrance_password : form.value.etc;
	});

	async function add() {
		loading.show();
		try {
			await validate();
			await useMyAddress().add({
				name: form.value.name,
				shipping_name: form.value.shipping_name,
				entrance_type: form.value.entrance_type,
				description: shippingAddressEntranceDescription.value,
				tel: form.value.tel,
				zip_code: form.value.zip_code,
				base_address: form.value.base_address,
				detail_address: form.value.detail_address,
			});

			bom.alert('배송지가 등록 되었습니다.', () => {
				props.closer(true);
			});
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}

	const component = defineAsyncComponent(() => import('@/page/address/postcode/AddressPostcode.vue'));
	const isDawnDelivery = ref<boolean>(false);

	function overlayAddressPostcode() {
		return layerContextStore.openOverlay(component, {
			props: {
				needDawnDeliveryCheck: props.needDawnDeliveryCheck,
			},
			onClose: (address: SearchAddress) => {
				isDawnDelivery.value = address.is_dawn_delivery || false;
				form.value.zip_code = address.zip_code;
				form.value.base_address = address.road_address;
			},
		},
		);
	}
</script>