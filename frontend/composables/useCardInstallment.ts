import { useBackend } from '$/composables/useBackend';

export function useCardInstallment() {

	return {
		/**
		 * [카드 할부] 조회
		 * @returns { CardInstallment } interest_info
		 */
		get: async () => {
			const { interest_info } = await useBackend().command<{
				interest_info: Nullable<CardInstallment>
			}>('v1/informations/installment');

			return interest_info;
		},
	};
}