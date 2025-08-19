/** 약관 */
type Policy = {
    id: number
	label: string
    title: string
    contents: string
    display_date: string
	code: PolicyType
	is_required: boolean
}

/** [약관] 협력업체 */
type PolicyCompany = {
    /** 업체명 */
    name: string
    /** 대표명 */
    ceo_name: string
}

type PrevPolicy = Pick<Policy, 'id'|'title'>

type PolicyType = 'agreement'|'privacy'|'offer'|'teen';
