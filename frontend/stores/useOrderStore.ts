import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';
import { useAuthStore } from '$/stores/useAuthStore';
import mons from '$/utils/mons';
import uuid from '$/utils/uuid';
import { useBackend } from '$/composables/useBackend';
import { useCart } from '$/composables/useCart';
import { useChannelTalk } from '$/composables/useChannelTalk';

export const useOrderStore = defineStore('order', () => {
	const authStore = useAuthStore();
	const router = useRouter();
	const temporarySelected = ref<SelectedForOrder[]>([]);
	const hasDawnDeliveryGoods = computed(() => temporarySelected.value.some(selected => selected.is_dawn_delivery));
	const processes = ref<OrderProcess[]>([]);

	/** 가주문 생성 */
	async function generateOrderId(selected: SelectedForOrder[]) {
		temporarySelected.value = selected;
		const { order_id } = await useBackend().command<{
			order_id: string
		}>('v1/orders', {
			method: 'post',
			data: {
				goods_options: selected,
			},
		});

		processes.value = processes.value
			.filter(process => process.order_id !== order_id)
			.concat({ order_id, selected });

		return order_id;
	}

	/** 주문서 조회 */
	async function getSheet(orderId: string) {
		const sheet = await useBackend().command<OrderSheet>(`v1/orders/${orderId}`);

		sheet.packs = sheet.packs.map(pack => {
			const packUuid = uuid();

			pack.items = pack.items.map(packItem => {
				packItem.uuid = uuid();

				packItem.goods = {
					id: packItem.goods_id,
					headline: packItem.goods_headline,
					brand_name: packItem.brand_name,
					name: packItem.goods_name,
					thumbnail_url: packItem.goods_thumbnail_url,
				};

				packItem.option = {
					id: packItem.option_id,
					name: packItem.option_name.replace('/', ''),
					extra_amount: packItem.option_extra_amount,
				};

				return packItem;
			});

			const groupedItems = pack.items.reduce((grouped: { [key: string]: OrderSheetPackItem[] }, orderItem) => {
				const key = `${orderId}_${packUuid}_${orderItem.seller_id}_${orderItem.goods.id}_${orderItem.option_id}`;
				if (!grouped[key]) {
					grouped[key] = [orderItem];
				}
				else {
					grouped[key].push(orderItem);
				}

				return grouped;
			}, {});

			pack.mergedOrderItems = Object.entries(groupedItems).map(([key, orderItems]) => {
				return {
					key,
					seller_name: orderItems[0].seller_name,
					usable_coupon_regists: [...orderItems[0].usable_coupon_regists],
					goods: orderItems[0].goods,
					option: orderItems[0].option,
					ea: orderItems.length,
					list: orderItems,
				};
			});

			return pack;
		}).sort((prev, next) => next.is_dawn_delivery - prev.is_dawn_delivery);
		/** 채널톡 이벤트  */
		useChannelTalk().startOrder(orderId);

		return sheet;
	}

	async function getPayingUrl(orderId: string, form: OrderPrePareForm, redirectUrl?: string): Promise<string> {
		const { paying_url } = await useBackend().command<{ paying_url: string }>(`v1/orders/payments/${orderId}/prepare`, {
			method: 'post',
			data: {
				orderer_info: form.orderer_info,
				receive_address: form.receive_address,
				payment_info: form.payment_info,
				packs: form.packs,
				refund_account: form.refund_account,
				giveaways: form.giveaways.filter(giveaway => giveaway.giveaway_id != 0 && giveaway.giveaway_id !== null),
				my_pay_virtual_id: null,
				dawn_delivery_info: form.dawn_delivery_info,
				is_dawn_delivery: form.is_dawn_delivery,
				fe_redirect_url: redirectUrl,
			},
		});

		return paying_url;
	}

	async function getResult(orderId: string) {
		const sheet = await useBackend().command<OrderResult>(`v1/orders/${orderId}/result`);
		sheet.packs = sheet.packs.map(pack => {
			const packUuid = uuid();

			pack.items = pack.items.map(packItem => {
				packItem.uuid = uuid();

				packItem.goods = {
					id: packItem.goods_id,
					headline: packItem.goods_headline,
					brand_name: packItem.brand_name,
					name: packItem.goods_name,
					thumbnail_url: packItem.goods_thumbnail_url,
					sell_price: packItem.goods_sell_price,
					base_discounted_price: packItem.goods_base_discounted_price,
				};

				packItem.option = {
					id: packItem.option_id,
					name: packItem.option_name.replace('/', ''),
					extra_amount: packItem.option_extra_amount,
				};

				return packItem;
			});

			const groupedItems = pack.items.reduce((grouped: { [key: string]: OrderSheetPackItem[] }, orderItem) => {
				const key = `${orderId}_${packUuid}_${orderItem.goods.id}_${orderItem.option_id}`;
				if (!grouped[key]) {
					grouped[key] = [orderItem];
				}
				else {
					grouped[key].push(orderItem);
				}

				return grouped;
			}, {});

			pack.mergedOrderItems = Object.entries(groupedItems).map(([key, orderItems]) => {
				return {
					key,
					seller_name: orderItems[0].seller_name,
					goods: orderItems[0].goods,
					option: orderItems[0].option,
					ea: orderItems.length,
					list: orderItems,
				};
			});

			return pack;
		});

		return sheet;
	}

	function moveToOrderPage() {
		mons().loading.show();
		try {
			if (temporarySelected.value.length < 1) {
				return mons().bom.alert('주문정보가 없습니다.\n 메인으로 이동됩니다', () => {
					router.replace({
						name: 'Main',
					});
				});
			}

			if (hasDawnDeliveryGoods.value && !authStore.member) {
				mons().bom.confirm('새벽배송 서비스는 회원만 이용 가능하여\n 일반 배송으로 전환 됩니다.', (_flag) => {
					if (!_flag) return;
					startOrder();
				});

				return;
			}

			startOrder();
		}
		catch (e) {
			console.log(e);
		}
		finally {
			mons().loading.hide();
		}
	}

	const startOrder = async () => {
		if (!authStore.member) {
			authStore.guest = null;
			authStore.guestToken = null;
		}

		const tempOrderId = await generateOrderId(temporarySelected.value);
		router.replace({
			name: authStore.member ? 'Order' : 'OrderGuest',
			params: {
				id: tempOrderId,
			},
		});
	};

	async function orderFinish(orderId: string, isSuccess: boolean) {
		if (isSuccess && processes.value.length > 0) {
			const currentOrder = processes.value.find(process => process.order_id === orderId);

			if (!currentOrder) {
				return;
			}

			const cartIds = currentOrder.selected.filter(selected => selected.cart_id !== undefined).map(item => item.cart_id);
			if (cartIds.length > 0) {
				const cart = useCart();
				cart.removeByIds(cartIds);
			}
		}

		processes.value = processes.value.filter(processes => processes.order_id !== orderId);
	}

	return {
		temporarySelected,
		processes,
		generateOrderId,
		getSheet,
		getPayingUrl,
		getResult,
		moveToOrderPage,
		orderFinish,
	};
}, {
	persist: {
		storage: sessionStorage,
	},
});