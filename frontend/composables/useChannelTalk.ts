import { computed } from 'vue';
import * as ChannelService from '@channel.io/channel-web-sdk-loader';
import { parsePhoneNumber } from 'libphonenumber-js';
import { useAuthStore } from '$/stores/useAuthStore';
import { useBackend } from '$/composables/useBackend';
import { useFormatter } from '$/composables/useFormatter';

type UserBootInfo = {
    member_id: string;
	member_hash: string;
    name: string;
    email: string;
    phone_number: string;
    join_at: string;
    point_amount: number;
    coupon_count: number;
    wished_count: number;
    last_ordered_at: string;
    ordered_count: number;
    ordered_amount: number;
    claim_count: number;
    gender: Nullable<string>;
    birth: null;
    address: Nullable<{
        zip_code: string,
        address: string
    }>;
    grade_label: string;
    review_count: number;
    qna_count: number;
    is_receive_email: boolean;
    is_receive_sms: boolean;
}

type ChannelTrackingGoodsInfo = {
	id: number;
	name: string;
	price: number;
}


/** 채널톡 SDK 이벤트  */
export function useChannelTalk() {
	const { date } = useFormatter();
	const isDevMode = /dev|local|mmonstar.co.kr/.test(location.host)
		? true
		: false;

	const authStore = useAuthStore();
	const member = computed(() => authStore.member);

	function customEventTracking(eventName: string, property?: object) {
		ChannelService.track(eventName, property);
	}

	return {
		userBoot: async () => {
			if (isDevMode || !member.value) {
				ChannelService.boot({
					pluginKey: '2c62eba4-6700-4701-a238-92079420dd4b', // fill your plugin key
					zIndex: 1100,
				});

				return;
			}

			try {
				const userBoot = await useBackend().command<UserBootInfo>(`v1/members/tracking`, {
					method: 'post',
				});
				const phoneNumberCast = userBoot.phone_number ? parsePhoneNumber(userBoot.phone_number, 'KR') : null;
				const castingPhoneNumber = phoneNumberCast && phoneNumberCast.isValid() ? phoneNumberCast.number : null;
				/** 회원정보 재 BOOT */
				ChannelService.boot({
					pluginKey: '2c62eba4-6700-4701-a238-92079420dd4b', // fill your plugin key
					zIndex: 1100,
					memberHash: userBoot.member_hash,
					memberId: userBoot.member_id,
					profile: {
						name: userBoot.name,
						email: userBoot.email,
						mobileNumber: castingPhoneNumber,
						joinTime: date(userBoot.join_at, 'YYYY-MM-DD HH:mm:ss'),
						pointAmount: userBoot.point_amount,
						couponCount: userBoot.coupon_count,
						wishCount: userBoot.wished_count,
						lastCheckoutCompletedAt: userBoot.last_ordered_at ? date(userBoot.last_ordered_at, 'YYYY-MM-DD HH:mm:ss') : null,
						purchasedCount: userBoot.ordered_count,
						purchasedAmount: userBoot.ordered_amount,
						returnCount: userBoot.claim_count,
						gender: userBoot.gender,
						birth: userBoot.birth,
						address: userBoot.address?.address ?? null,
						zipCode: userBoot.address?.zip_code ?? null,
						group: userBoot.grade_label,
						reviewCount: userBoot.review_count,
						qnaCount: userBoot.qna_count,
					},
					unsubscribeEmail: userBoot.is_receive_email,
					unsubscribeTexting: userBoot.is_receive_sms,
				});
			}
			catch (e) {
				console.log(e);
				ChannelService.boot({
					pluginKey: '2c62eba4-6700-4701-a238-92079420dd4b', // fill your plugin key
					zIndex: 1100,
				});
			}
		},
		/** 회원가입 */
		signIn: (registType: string) => {
			if (isDevMode) {

				return;
			}
			customEventTracking('SignUp', {
				regist_type: registType === 'shop' ? 'direct_login' : 'social_login',
				login_type: registType === 'shop' ? 'direct' : registType,
			});
		},
		productView: (goods: ChannelTrackingGoodsInfo) => {
			if (isDevMode) {
				// console.log(goods, '채널톡 상품 디버깅');

				return;
			}
			customEventTracking('ProductView', {
				productId: goods.id,
				productName: goods.name,
				productPrice: goods.price,
				currency: 'KRW',
			});
		},
		addWishGoods: (goods: ChannelTrackingGoodsInfo) => {
			if (isDevMode) {
				// console.log(goods, '채널톡 찜하기 디버깅');

				return;
			}

			customEventTracking('AddToWish', {
				productId: goods.id,
				productName: goods.name,
				productPrice: goods.price,
				currency: 'KRW',
			});
		},
		addCart: (goods: {
			id: number;
			ea: number;
			price: number;
		}) => {
			if (isDevMode) {
				// console.log(goods, '채널톡 장바구니 담기 디버깅');

				return;
			}

			customEventTracking('AddToCart', {
				id: goods.id,
				itemCount: goods.ea,
				itemPrice: goods.price * goods.ea,
				currency: 'KRW',
			});
		},
		startOrder: (orderId: string) => {
			if (isDevMode) {
				// console.log(orderId, '채널톡 주문시작  디버깅');

				return;
			}

			customEventTracking('CheckoutBegin', {
				order_no: orderId,
			});
		},
		orderComplete: (orderResult: {
			orderId: string;
			paymentPrice: number;
			totalGoodsEa: number;
			products: {
				productId: number;
				productName: string;
				quantity: number;
				productPrice: number;
			}[]
		}) => {
			if (isDevMode) {
				// console.log(orderResult, '채널톡 주문완료  디버깅');

				return;
			}
			customEventTracking('CheckoutComplete', {
				order_no: orderResult.orderId,
				totalQuantity: orderResult.totalGoodsEa,
				totalPrice: orderResult.paymentPrice,
				products: orderResult.products,
				currency: 'KRW',
			});
		},
		reviewComplete: (reviewForm: {
			orderId: string;
			goods: {
				id: number;
				name: string;
			}
		}) => {
			if (isDevMode) {
				// console.log(reviewForm);

				return false;
			}
			customEventTracking('ReviewSubmit', {
				order_no: reviewForm.orderId,
				productId: reviewForm.goods.id,
				productName: reviewForm.goods.name,
				// productPrice: '정가',
				currency: 'KRW',
			});
		},
	};
}