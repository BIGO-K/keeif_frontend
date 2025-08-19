import airbridge from 'airbridge-web-sdk-loader';
import { useUserAgent } from '$/composables/useUserAgent';

type SemanticAttributeProduct = {
	productID: string;
	brandName: string;
	name: string;
	price: number;
	currency: string;
	quantity: number;
	position: number
}
/** 에어브릿지 SDK */
export function useAirbridge() {
	const { isAppUser } = useUserAgent();
	const isDevMode = location.hostname.includes('dev') || location.hostname.includes('local') || location.protocol === 'http:' || location.hostname.includes('mmonstar.co.kr')
		? true
		: false;

	const appName = isDevMode ? 'keeifdev' : 'keeif';
	const webToken = isDevMode ? '128bfadaf041441e8fcdfea26de12659' : 'f41fb4c1ec214f8fb04c94309bd5686d';

	return {
		init: () => {
			airbridge.init({
				app: appName,
				webToken: webToken,
				utmParsing: true,
			});
		},
		productView: () => {
			return;
			airbridge.events.send('airbridge.ecommerce.product.viewed', {
				semanticAttributes: {
					products: [{
						// productID: 'coke_zero',
						// name: 'Coke Zero',
						// price: 1.99,
						// currency: 'USD',
						// position: 1,
					}],
				},
			});
		},
		singUp: (registType: string, user: {
			loginId: string;
			email?: string;
			phone?: string
		}) => {
			if (user.email) {
				airbridge.setUserEmail(user.email);
			}

			if (user.phone) {
				airbridge.setUserPhone(user.phone);
			}

			airbridge.events.send('airbridge.user.signup', {
				action: registType === 'shop' ? 'direct' : 'social',
				label: registType === 'shop' ? 'direct' : registType,
			});

			airbridge.clearUser();
		},
		signIn: (userId: string, loginType: string) => {
			airbridge.setUserId(userId);
			airbridge.events.send('airbridge.user.signin', {
				action: loginType === 'shop' ? 'direct_login' : 'social_login',
				label: loginType === 'shop' ? 'direct' : loginType,
			});
		},
		signOut: (loginType: string) => {
			airbridge.events.send('airbridge.user.signout', {
				action: loginType === 'shop' ? 'direct_logout' : 'social_logout',
				label: loginType === 'shop' ? 'direct' : loginType,
			});
			airbridge.clearUser();
		},
		addCart: (
			label: string,
			semanticAttributes: {
				products: SemanticAttributeProduct[],
				cartID: string,
				totalValue: number
			},
		) => {
			airbridge.events.send('airbridge.ecommerce.product.addedToCart', {
				label: label,
				semanticAttributes: semanticAttributes,
			});
		},
		orderComplete: (
			attributes: {
				products: SemanticAttributeProduct[],
				orderId: string,
				totalValue: number
			},
		) => {
			airbridge.events.send('airbridge.ecommerce.order.completed', {
				semanticAttributes: {
					products: attributes.products,
					inAppPurchased: isAppUser ? true : false,
					totalValue: attributes.totalValue,
					currency: 'KRW',
					transactionID: `${attributes.orderId}`,
				},
			});

		},
	};
}