import { useBackend } from '$/composables/useBackend';

export function usePartnershipInquiry() {
    /**
     * [제휴문의] 구분 조회
     */
	async function getTypes() {
		const { partnership_inquiry_types } = await useBackend().command<{
            partnership_inquiry_types: PartnershipInquiryType[]
        }>('v1/partners/contacts/types');

		return partnership_inquiry_types;
	}

    /**
     * [제휴문의] 카테고리 조회
     * @param typeCode 제휴문의 구분 코드
     */
	async function getCategories(typeCode: number) {
		const { partnership_inquiry_categories } = await useBackend().command<{
            partnership_inquiry_categories: PartnershipInquiryCategory[]
        }>(`v1/partners/contacts/types/${typeCode}/categories`);

		return partnership_inquiry_categories;
	}

    /**
     * [제휴문의] 메일 발송
     * @param inquiry
     */
	async function sendInquiryMail(inquiry: PartnershipInquiry) {
		await useBackend().command('v1/partners/contacts/mail', {
			method: 'post',
			data: inquiry,
		});
	}

	return {
		getTypes,
		getCategories,
		sendInquiryMail,
	};
}