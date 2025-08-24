type FormInputType = 'text' | 'number' | 'email' | 'password' | 'search' | 'tel'
/** 폼 유효성 상태 */
type FormValid = {
    show: boolean
    type: 'alert' | 'valid'
    message: string
    state?: 'danger' | 'warn' | 'invalid' | 'valid' | 'normal'
}

/** 회원 가입 폼 */
type RegistForm = BaseRegistForm & {
    login_id: string
    login_id_duplicate_checked: boolean
    password: string
    password_confirm: string
}

type ThirdPartyRegistForm = BaseRegistForm & {
    email: string
}

type BaseRegistForm = {
	name: string
	birth_year: number
    birth_month: number
    birth_day: number
    phone_number: string
    gender: 'F' | 'M' | 'E'
    is_over_14: boolean
    is_receive_sms: boolean
    is_receive_email: boolean
    policies: PolicyAgreement[],
}
/** 약관 동의 상태 */
type PolicyAgreement = {
    id: number
    code: string
    is_agree: boolean
}
/** 내 주소 추가 폼 */
type AddMyAddressForm = DawnDeliveryForm & Omit<MyShippingAddressDetail, 'id' | 'is_recent'| 'is_dawn_delivery'|'entrance_description'>

/** 주문서 폼(회원) */
type OrderForm = {
    orderer_info: {
        email: string
        personal_clearance_code: string
		is_remember_personal_clearance_code: boolean
		is_agree_collect_personal_clearance_code: boolean
		is_agree_provide_personal_clearance_code: boolean
		name: string
		phone: string
    }
    receive_address: {
        id?: number
		name: string;
        shipping_name?: string;
        phone: string;
        zip_code: string;
        base_address: string;
        detail_address: string;
        is_extra_area: boolean;
        message: string;
    }
	refund_account: null|{
        owner_name: string;
        bank_code: string;
        account_number: string;
    };
    payment_info: {
		method: number;
		eng_label: string;
        using_point: number
		card_code?: number;
        interest_month?: number;
        is_interest_free: boolean;
        is_partial_interest: boolean;
        bank_code?: number;
        depositor_name: string;
        cash_receipt_apply_type: number;
        cash_receipt_apply_key: string;
		cash_receipt_phone_number: string;
		cash_receipt_business_number: string;
        using_point: number;
        for_payment_price: number;
    }
	packs: PackForOrder[]
	giveaways: OrderSheetSelectedGiveaway[],
    my_pay_virtual_id: string|null;
	// dawn_delivery_info: Nullable<DawnDeliveryForm>
	is_dawn_delivery: boolean
	isOverseasShippingContains: boolean
}


type PackForOrder = {
    charged_shipping_price: number;
    extra_shipping_price: number;
	dawn_delivery_extra_shipping_price: number;
    shipping_rule_id: number;
    items: {
        brand_id: number;
        goods_id: number;
        goods_base_discounted_price: number;
        option_id: number;
        option_extra_amount: number;
		// option_extra_amount_by_marketing: number;
        night_sale_id?: number | null;
        night_sale_amount: number;
        regsit_coupon_id?: number | null | undefined;
        regist_coupon_amount: number;
        immediately_sale_id?: number | null;
        immediately_sale_amount: number;
        goods_applied_all_discounted_price: number;
    }[];
}