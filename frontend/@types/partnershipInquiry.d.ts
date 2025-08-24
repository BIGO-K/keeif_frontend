/** 제휴문의 구분 */
type PartnershipInquiryType = TypeCodeLabel & {
    /** 설명 */
    description: string
    /** 제휴문의 카테고리 선택 필수 여부 */
    category_required: boolean
}

/** 제휴문의 카테고리 */
type PartnershipInquiryCategory = TypeCodeName;

/** 제휴문의 */
type PartnershipInquiry = {
    /** 문의 구분 */
    inquiry_type: number
    /** 카테고리 */
    categories: number[]
    /** 업체명 */
    company_name: string
    /** 브랜드명 */
    brand_name: string
    /** [담당자]명 */
    name: string
    /** [담당자] 이메일 */
    email: string
    /** [담당자] 휴대폰 번호 */
    phone: string
    /** 제휴 내용 */
    contents: string
}
