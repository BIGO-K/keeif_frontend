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
			v-if="addressList.length < 1"
			class="mm_text-none"
		>
			<i class="ico_text-none"></i>등록된 배송지가 없습니다
		</p>

		<!-- (D) 최근배송지인 'mm_address-item' 에 'S=on' 클래스를 추가합니다. -->
		<ul v-else>
			<li
				v-for="address in addressList"
				:key="address.id"
			>
				<a @click="closer({ newAddress: address })">
					<div
						:class="['mm_address-item', { 'S=on': address.is_recent }]"
					>
						<i class="ico_form-radio T=circle"></i>
						<dl>
							<dt>
								<b>{{ address.shipping_name }}</b>
								<b
									v-if="address.is_recent"
									class="mm_tag T=gray"
								>최근배송지</b>
								<dawn-tag v-if="needDawnDeliveryCheck && address.is_dawn_delivery"></dawn-tag>
							</dt>
							<dd>{{ address.name }} / {{ address.tel }}</dd>
							<dd>{{ address.zip_code }}<br>{{ address.base_address }}<br>{{ address.detail_address }}</dd>
						</dl>
						<dawn-address-info
							v-if="address.entrance_description"
							:entrance-description="address.entrance_description"
						></dawn-address-info>
					</div>
				</a>
				<button
					v-if="!address.is_recent"
					type="button"
					class="btn_remove"
					@click="removeAddress(address.id)"
				>
					<b>삭제</b>
				</button>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useMyAddress } from '$/composables/useMyAddress';
	import DawnAddressInfo from '@/custom/dawn/component/DawnAddressInfo.vue';
	import DawnNotice from '@/custom/dawn/component/DawnListNotice.vue';
	import DawnTag from '@/custom/dawn/component/DawnTag.vue';

	const { bom, loading, openOverlay } = useGlobalPageContext();
	const { all, remove } = useMyAddress();

	defineExpose<OverlayComponentExpose>({
		title: `배송지 관리`,
	});

	const props = withDefaults(defineProps<{
		needDawnDeliveryCheck?: boolean
		closer: CloseHandler<{ newAddress: MyShippingAddressDetail }>
	}>(), {
		needDawnDeliveryCheck: false,
	});

	const addressList = ref<MyShippingAddressDetail[]>([]);

	function overlayAddressCreate() {
		if (addressList.value.length > 4) {
			return bom.alert('배송지는 5개까지 등록가능합니다.\n 미사용 배송지 삭제 후 이용 부탁드립니다.');
		}

		const component = defineAsyncComponent(() => import('@/page/address/create/AddressCreate.vue'));

		return openOverlay(component, {
			props: {
				needDawnDeliveryCheck: props.needDawnDeliveryCheck,
			},
			onClose: async (needFetch) => {
				if (needFetch) {
					fetch();
				}
			},
		});
	}

	function removeAddress(id: number) {
		bom.confirm('배송지를 삭제하시겠습니까?', async (flag) => {
			if (!flag) {
				return;
			}
			loading.show();
			try {
				await remove(id);
				await fetch();
			}
			catch (e) {
				useErrorAlert(e);
			}
			finally {
				loading.hide();
			}
		});
	}

	async function fetch() {
		try {
			addressList.value = await all(props.needDawnDeliveryCheck);
		}
		catch (e) {
			useErrorAlert(e);

		}
	}

	await fetch();
</script>