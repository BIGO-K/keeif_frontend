/** 래플 */
type Raffle = {
    id: number
    /** 이용가능 디바이스 리스트 */
    available_device_list: ('M_APP'|'M_WEP'|'PC')[]
    /** 응모 시작일 */
    start_at: string
    /** 응모 종료일 */
    end_at: string
    /** 발표일시 */
    notice_at: string
    /** 구매 시작일 */
    buy_start_at: string
    /** 구매 종료일 */
    buy_end_at: string
    /** 총 참여자 수 */
    total_entry_count: number
    /** 래플 참여 여부 */
    is_entry: boolean
    /** 당첨자 추첨 진행 여부 */
    is_confirmed_winner: boolean
    /** 상품 */
    goods: Pick<Goods, 
        'id'|
        'thumbnail_url'|
        'name'|
        'brand_name'|
        'price'|
        'base_discounted_price'|
        'sale_rate'|
        'is_only_adult'
    >
}

/** 래플 상세 */
type RaffleDetail = Pick<
    Raffle, 
    'id'|
    'available_device_list'|
    'buy_start_at'|
    'buy_end_at'|
    'is_confirmed_winner'|
    'is_entry'|
    'notice_at'|
    'start_at'|
    'end_at'
> & {
    /** 상품 ID */
    goods_id: number
    /** 참여 인원 */
    participant_count: number
    /** 목표 당첨자 수 */
    limit_winners: number
}

/** 회원 래플 응모 내역 */
type MyRaffle = {
    id: number
    progress_status: string
    purchase_start_at: string
    purchase_end_at: string
    is_purchase: boolean
    is_winner: boolean
    goods: Pick<Goods, 'id'|'name'|'brand_name'|'thumbnail_url'>
}

/** 래플 당첨자 */
type Winner = {
    /** 유저 아이디 (마스킹) */
    login_id: string
    /** 유저명 (마스킹) */
    name: string
}

/** 래플 응모 정보 */
type EntryInfo = Pick<PersonalInformation, 'name'|'login_id'|'phone'>