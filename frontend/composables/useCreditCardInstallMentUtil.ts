import { ref, computed } from 'vue';
import { useBackend } from '$/composables/useBackend';


export function useCreditCardInstallMentUtil(isInterestDisabled: ComputedRef<boolean>) {
	/** 카드별 무이자 할부 정보 */
	const interests = ref<InterestCard[]>([]);
	getUtilCardInstallMents();

	const defaultUsableInstallMents = computed<UsableInstallMentInfo[]>(() => {
		return [
			{ value: 0, label: '일시불', isInterestFree: false, isPartialInterestFree: false, disabled: false },
			{ value: 2, label: '2개월', isInterestFree: false, isPartialInterestFree: false, disabled: isInterestDisabled.value },
			{ value: 3, label: '3개월', isInterestFree: false, isPartialInterestFree: false, disabled: isInterestDisabled.value },
			{ value: 4, label: '4개월', isInterestFree: false, isPartialInterestFree: false, disabled: isInterestDisabled.value },
			{ value: 5, label: '5개월', isInterestFree: false, isPartialInterestFree: false, disabled: isInterestDisabled.value },
			{ value: 6, label: '6개월', isInterestFree: false, isPartialInterestFree: false, disabled: isInterestDisabled.value },
			{ value: 7, label: '7개월', isInterestFree: false, isPartialInterestFree: false, disabled: isInterestDisabled.value },
			{ value: 8, label: '8개월', isInterestFree: false, isPartialInterestFree: false, disabled: isInterestDisabled.value },
			{ value: 9, label: '9개월', isInterestFree: false, isPartialInterestFree: false, disabled: isInterestDisabled.value },
			{ value: 10, label: '10개월', isInterestFree: false, isPartialInterestFree: false, disabled: isInterestDisabled.value },
			{ value: 11, label: '11개월', isInterestFree: false, isPartialInterestFree: false, disabled: isInterestDisabled.value },
			{ value: 12, label: '12개월', isInterestFree: false, isPartialInterestFree: false, disabled: isInterestDisabled.value },
		];
	});

	function getUsableInstallMents(creditCardCode?: number): UsableInstallMentInfo[] {
		if (creditCardCode == 0 || !creditCardCode) {
			return [
				{ value: 0, label: '일시불', isInterestFree: false, isPartialInterestFree: false, disabled: false },
			];
		}

		const cardInterest = interests.value.find((interest) => {
			return interest.cardCode == creditCardCode;
		});


		if (!cardInterest) {
			return defaultUsableInstallMents.value;
		}

		return defaultUsableInstallMents.value.map((base) => {
			const interestFree = cardInterest.interest_free_months.includes(base.value);
			const isPartialInterestFree = cardInterest.partial_interest_free_months.includes(base.value);

			return {
				value: base.value,
				isInterestFree: interestFree,
				isPartialInterestFree: isPartialInterestFree,
				label: base.label + (interestFree || isPartialInterestFree ? (interestFree ? '(무이자)' : '(부분무이자)') : ''),
				disabled: base.disabled,
			};
		});
	}


	async function getUtilCardInstallMents() {
		const { interests: pInterests } = await useBackend().command<{
            interests: InterestCard[]
        }>('v1/orders/utilities/credit-card-installments');

		interests.value = pInterests;
	}


	return {
		getUtilCardInstallMents,
		interests,
		getUsableInstallMents,
	};
}