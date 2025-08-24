<template>
	<!-- 비회원 주문조회 -->
	<div class="m_popup-sign">
		<h5 class="mm_text-label">
			<b>이름</b>
		</h5>
		<form-text
			v-model="form.orderer_name"
			class="T=lg"
			placeholder="이름을 입력하세요"
			maxlength="30"
		></form-text>
		<h5 class="mm_text-label">
			<b>주문번호</b>
		</h5>
		<form-text
			v-model="form.order_id"
			input-mode="number"
			class="T=lg"
			placeholder="주문번호를 입력하세요"
			maxlength="30"
		></form-text>
		<div class="mm_foot">
			<div class="mm_btn_box">
				<button
					type="button"
					class="mm_btn T=lg T=primary"
					@click="guestLogin"
				>
					<b>비회원 주문조회</b>
				</button>
			</div>
		</div>
	</div>

	<!-- 고객센터 운영시간 -->
	<div class="m_popup-sign-order">
		<div class="m...order-inner">
			<i class="ico_cs"></i>
			<p><strong>{{ shop.cs_tel }}</strong>{{ shop.cs_time }} <br>점심시간 : {{ shop.cs_lunch_time }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useAuthStore } from '$/stores/useAuthStore';
	import config from '$/utils/config';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import FormText from '@/component/form/FormText.vue';

	defineExpose<OverlayComponentExpose>({
		title: `비회원 주문조회`,
	});

	const props = defineProps<{
		layout: string,
		closer: CloseHandler<void>
	}>();

	const shop = config('shop');

	const { loading, router } = useGlobalPageContext();

	const { form, validate } = useForm<Guest>(
		{
			orderer_name: '',
			order_id: '',
		},
		{
			rule: {
				'orderer_name(이름)': ['required'],
				'order_id(주문번호)': ['required'],
			},
		},
	);

	async function guestLogin() {

		loading.show();
		try {
			await validate();
			await useAuthStore().guestLogin(form.value);
			props.closer();
			router.push({ name: 'GuestOrder' });
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}
</script>