/** 환불계좌 */
type RefundAccount = {
    /** 예금주명 */
    owner_name: string
    /** 계좌번호 */
    account_number: string
    /** 은행코드 */
    bank_code: Nullable<number>
    /** 은행명 */
    bank_name: string
}

/** 환불계좌 FORM */
type RefundAccountForm = Omit<RefundAccount, 'bank_name'>
/** 은행정보 */
type BankCode = TypeCodeLabel