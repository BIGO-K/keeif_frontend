type BenefitStates = { point: number, coupon_count: number }

type OrderStateAndCount = {
    count: number
    status_code: number
}

type OrderStates = {
    pay_ready: OrderStateAndCount
    paid: OrderStateAndCount
    delivery_ready: OrderStateAndCount
    delivery_ing: OrderStateAndCount
    delivery_complete: OrderStateAndCount
    purchase_confirmed: OrderStateAndCount
    cancel_count: number
    return_count: number
    exchange_count: number
    refund_count: number
}

type AuthorizeMember = Member & {
    name: string;
    login_type: string;
    is_verify_age: boolean
    is_certificated: boolean
}

/** 회원 */
type Member = {
    /** 회원번호 */
    id?: number
    /** 로그인 아이디 */
    login_id: string
    /** 마스킹 처리 성명 */
    // masked_name: string
    /** 등급정보 */
    grade: Pick<MemberGrade, 'id' | 'image_url' | 'name'>
}

type MemberGrade = {
    id: number
    name: string
    image_url: string
    is_default: boolean
    order_seq: number
    grade_up_sell_price_condition: number
    grade_up_sell_amount_condition: number
    purchase_benefit_rate: number
    coupons: MemberGradeCoupon[]
}

type MemberGradeCoupon = Coupon & {
    is_unlimited: boolean
    download_limit: number
}

/** 등급업 조건 정보 */
type MemberGradeUpCondition = {
    /** 회원 주문액수 */
    order_amount: number
    /** 회원 주문건수 */
    order_count: number
    /** 승급조건: 주문액수 */
    grade_up_order_amount_condition: number
    /** 승급조건: 주문건수 */
    grade_up_order_count_condition: number
    /** 다음 등급명 */
    next_grade_name: string
    /** (현재 등급)최상위등급 여부 */
    is_top_level: boolean
    /** 등급업 산출기간(월단위) */
    grade_up_calculation_period_month: number
}

type LoginResult = MemberToken & {
    is_awaked: boolean
    is_certificated: boolean
    is_need_update_password: boolean
    is_verify_age: boolean
    published_awake_coupon_id: number|null
    published_comeback_coupon_id: number|null
    user: {
        login_id: string
        name: string,
        grade: {
            id: number
            image_url: string
            name: string
        }
    }
}

type MemberToken = {
    token: string;
    refresh_token: string;
    expiry_at: string;
}

/** 서드파티 인증 프로필 */
type ThirdPartyProfile = {
    platform: string
    platform_label: string
    token: string
    is_registered_user: boolean
    email: string
    name: string
}

type ThirdPartyDuplicateInfo = {
    platform_type: ThirdPartyPlatforms;
    masking_id: string;
}

type ThirdPartyPlatforms = 'kakao'|'naver'|'apple'|'facebook'|'payco'|'kakao_sync';

/** 회원 개인 정보 */
type PersonalInformation = {
    login_id: string
    name: string
    phone: string
    regist_type: ThirdPartyPlatforms | 'shop'
    birthday: string
    email: string
    is_email_receive: boolean
    is_sms_receive: boolean
}

type PersonalInformationForm = Omit<PersonalInformation, 'login_id'|'regist_type'>

type WithdrawReason = TypeCodeLabel & {
    detail_reason_required: boolean
}

type LoginInfoFindType = '_email'|'_phone'|'email'|'phone'

type IdFindForm = {
    name: string
    find_type: LoginInfoFindType
    phone?: string
    email?: string
}

type IdFindResult = {
    find_results: {
        masking_login_id: string
        regist_type: ThirdPartyPlatforms | 'shop'
    }[]
    user_name: string
    find_type: LoginInfoFindType
    phone?: string
    email?: string
}

type PasswordVerificationCodeForm = {
    login_id: string
    name: string
    find_type: string
    email?: string
    phone?: string
}

type PasswordFindForm = {
    name: string
    login_id: string
    find_type: LoginInfoFindType
    phone?: string
    email?: string
    verification_code: Nullable<number>
}

type ExpireToken = {
    access_token: string
    expire_at: string
}

type RegistEvent = {
    type: string;
    name?: string;
    amount_type?: string;
    amount?: number;
    point?: number
}