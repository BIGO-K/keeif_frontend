import { useBackend } from '$/composables/useBackend';

export function useMyAddress() {
    /**
     * 회원 배송지 리스트 조회
     * @returns
     */
	async function all(needDawnDelivery: boolean = false) {
		const { receive_addresses } = await useBackend().command<{
            receive_addresses: MyShippingAddressDetail[]
        }>('v1/shopping/receive-addresses', {
        	isForce: true,
        	params: {
        		need_dawn_delivery: needDawnDelivery,
        	},
        });

		return receive_addresses;
	}

    /**
     * 회원 배송지 등록
     * @param form
     */
	async function add(form: MyShippingAddressStoreForm) {
		await useBackend().command('v1/shopping/receive-addresses', {
			method: 'post',
			data: form,
		});
	}

    /**
     * 회원 배송지 삭제
     * @param id
     */
	async function remove(id: number) {
		await useBackend().command(`v1/shopping/receive-addresses/${id}/destroy`, {
			method: 'post',
		});
	}

	return {
		all,
		add,
		remove,
	};
}