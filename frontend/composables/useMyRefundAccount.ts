import { useBackend } from '$/composables/useBackend';

export function useMyRefundAccount() {
    /** 환불계좌 조회 */
	async function get() {
		try {
			const { refund_account } = await useBackend().command<{
				refund_account: RefundAccount
			}>('v1/my/refund-account');

			return refund_account;
		}
		catch (e) {
			console.log(e);

			return null;
		}
	}

    /**
     * 환불계좌 변경
     * @param form
     */
	async function addOrUpdate(form: RefundAccountForm) {
		await useBackend().command('v1/my/refund-account', {
			method: 'post',
			data: form,
		});
	}

    /** 환불계좌 삭제 */
	async function remove() {
		await useBackend().command('v1/my/unset-refund-account', {
			method: 'post',
		});
	}

	/** 은행코드 조회 */
	async function getBankCodes() {
		try {
			const { bank_codes } = await useBackend().command<{
				bank_codes: BankCode[]
			}>('v1/informations/banks');

			return bank_codes;
		}
		catch (e) {
			console.log(e);

			return [];
		}
	}

	return {
		get,
		addOrUpdate,
		remove,
		getBankCodes,
	};
}