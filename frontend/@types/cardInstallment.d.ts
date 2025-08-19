/** 카드 할부 */
type CardInstallment = {
    title: string
    /** 무이자 할부 정보 리스트 */
    interest_free_list: InterestFreeCardInfo[]
    /** 부분 무이자 할부 정보 리스트 */
    partial_interest_list: InterestFreeCardInfo[]
    display_start_at: string
    display_end_at: string
}

/** 무이자 할부 카드 정보 */
type InterestFreeCardInfo = {
    card_code: number
    image_url: string
    image_alt: string
    info: string
}

type InterestCard = {
	card_code: number;
	interest_free_months: number[];
	partial_interest_free_months: number[]
}


type UsableInstallMentInfo = {
    value: number;
    label: string;
    isInterestFree: boolean;
    isPartialInterestFree: boolean;
    disabled: boolean;
}
