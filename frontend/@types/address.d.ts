type SearchAddress = {
    zip_code: string;
    jibun_address: string; // 지번
    road_address: string; // 도로명
	is_dawn_delivery?: boolean
}

type MyShippingAddress = {
    name: string // 받는사람
    tel: string // 휴대폰 번호
    zip_code: string // 우편번호
    base_address: string // 주소
    detail_address: string // 상세주소
	is_dawn_delivery: boolean
    message?: string
	entrance_description?: string // 새벽배송 문구
}

type MyShippingAddressDetail = MyShippingAddress & {
    id: number
    shipping_name: string // 배송지명
    detail_address: string // 상세주소
    is_recent: boolean // 최근배송지 여부
}

type MyShippingAddressStoreForm = Omit<MyShippingAddressDetail, 'id'|'is_recent'|'message'|'is_dawn_delivery'|'entrance_description'> & { entrance_type: number; description: string}
type MyClaimShippingAddressForm = Omit<MyShippingAddress, 'id'|'is_recent'|'message'|'name'|'tel'>