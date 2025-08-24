type SetupConfig = {
    shop: ShopConfig
    point: PointConfig
    paid_features: PaidFeatureConfig
    grade_colors: MemberGradeColorSetting[]
    seo: SeoConfig
    marketing: MarketingConfig
    gnb: GnbConfig
    design: DesignConfig
}

type ShopConfig = {
    name: string
    eng_name: string
	name_in_business: string
    business_number: string
    sell_account: string
    ceo_name: string
    tel: string
    privacy_manager
    base_address: string
    detail_address: string
    homepage_url: string
    payment_service_info_url: string
    copyright_text: string
    business_service_info_url: string
    bank_owner_name: string
    cs_tel: string
    cs_email: string
    cs_time: string
    cs_weekday: string
    cs_lunch_time: string
    cs_fax_number: string
    kakao_cs_time: string
    kakao_cs_weekday: string
    instagram_link: string
    facebook_link: string
    youtube_link: string
    naver_blog_link: string
    kakao_channel_link: string|null
    kakao_friend_name: string
    use_renewal: boolean
}

type PointConfig = {
    label_name: string
    suffix: string
    max_usable_amount: number
    max_usable_amount_type: DiscountType
    min_usable_balance: number
    photo_review_point: number
    review_point: number
    usable_month: number
    grade_rules: MemberGradePointRule[]
}

type MemberGradePointRule = {
    grade_id: number
    grade_name: string
    text_review_point: number
    photo_review_point: number
    use_grade_rule: boolean
}

type PaidFeatureConfig = {
    reward: boolean
    personalization: boolean
    review_template: boolean
    ranking: boolean
    time_deal: boolean
    cody_shot: boolean
    showcase: boolean
    raffle: boolean
    joint_purchase: boolean
    special_event: boolean
    experience_review: boolean
    social_login: boolean
    usable_social_logins: ThirdPartyPlatforms[]
    active_easypays: string[] /** MAYBE : 명시타입 */
    reward_policies: {
        delivery_delay_reward_policies: DeliveryDelayRewardPolicyUnit[]
        soldout_cancel_reward_policies: CancelBySoldoutRewardPolicyUnit[]
        maximum_reward_price: number
    }
    my_pay: boolean
}

type DeliveryDelayRewardPolicyUnit = {
    day: number
    reward_rate: number
}

type CancelBySoldoutRewardPolicyUnit = {
    day: number
    reward_rate: number
}

type MemberGradeColorSetting = {
    color_code: string
    grade_order: number
}

type SeoConfig = {
    title: string
    description: string
    keywords: string[]
}

type MarketingConfig = {
    gtm: {
        id: string
    },
    facebook_pixel: {
        id: string
    }
    kakao_pixel: {
        id: string
    }
    criteo: {
        id: string
    }
}

type GnbConfig = {
    raffle: boolean
    joint_purchase: boolean
    spot_themes?: {
        id: number;
        name: string;
        is_use_url: boolean;
        url?: string
    }[]
}

type DesignConfig = {
    header_type: string
    footer_type: string
    toolbar_type: string
    main_color: string
    sub_color: string
    support_color: string
    color_version: string
    use_header_color: boolean
    pc_main_popup_type: string
    pc_main_popup_version: string
    mobile_main_popup_type: string
    mobile_main_popup_version: string
}

type ConfigValue<Path> = Path extends undefined
    ? SetupConfig
    : Path extends string
        ? ValueOf<SetupConfig, Split<Path>>
        : undefined


// type CustomValueOf<Obj> = Obj[keyof Obj];
// type SetupConfigValue = CustomValueOf<SetupConfig>