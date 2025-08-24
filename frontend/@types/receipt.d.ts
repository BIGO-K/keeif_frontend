type Receipts = {
    all: BaseReceipt
    approve: BaseReceipt
    cancels: BaseReceipt[]
    payment_company_info: {
        address: string
        business_number: string
        ceo: string
        homepage_url: string
        name: string
        phone: string
    }
}

type BaseReceipt = {
	type: 'all'|'approve'|'cancel'
    card: Nullable<{
        /** 카드사명 */
        name: string
        /** 카드번호(마스킹) */
        masked_number: string
        /** 할부기간 */
        installment: string
        /** 승인번호 */
        tid: string
    }>
    paid_at: string
    /** 결제수단 */
    pay_method_name: string
    /** 승인금액 */
    payment_price: number
    /** 거래상태 */
    status: string
    /** 부가세 */
    surtax_price: number
    /** 면세금액 */
    tax_free_price: number
    /** 과세금액 */
    tax_price: number
    virtual_bank: Nullable<{
        bank_name: string
        virtual_account_number: string
    }>
} & (
	/** [전체] 영수증 */
	{
		type: 'all'
		/** 잔액 */
		balance_price: number
		/** 기취소금액 */
		canceled_price: number
	} |
	/** [승인] 영수증 */
	{
		type: 'approve'
		cash_receipt: Nullable<CashReceipt>
	} |
	{
		/** [취소] 영수증 */
		type: 'cancel'
		/** 잔액 */
		balance_price: number
		/** 기취소금액 */
		canceled_price: number
		/** 취소금액 */
		cancel_price: number
		/** 취소일시 */
		canceled_at: string
		/** 취소영수증 */
		cash_receipt: Nullable<CashReceipt>
		/** 환불 ID(취소영수증 식별용) */
		refund_id: string
	}
)

/** 현금영수증 */
type CashReceipt = {
    status: string
    /** 용도 */
    use_type: string
    /** 신청번호(마스킹) */
    masked_request_number: string
    /** 승인번호 */
    auth_code: string
};