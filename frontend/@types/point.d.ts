/** 포인트내역 */
type PointHistory = {
    /** 적립여부: 참인경우 지급, 거짓인경우 차감 */
    is_earned: boolean
    /** 적립금액 */
    point_amount: number
    /** 내역(발생사유) */
    description: string
    /** 주문번호 */
    order_id: Nullable<string>
    /** 내역 발생일(지급/차감일) */
    created_at: string
    /** 유효일자: 지급내역에만 존재 */
    expire_at: Nullable<string>
}