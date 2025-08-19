import { onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import isMobile from '$/utils/isMobile';

const setting = {
	kakaoPixel: {
		id: '7505253707330309006',
	},
	gtm: {
		id: 'GTM-5PC79K89',
	},
	mobion: {
		id: 'keeif',
	},
	ga: {
		id: 'G-CKE57LG7TM',
	},
};

declare global {
    interface Window {
        dataLayer: Record<string, unknown>[]
        criteo_q: any[]
        kakaoPixel: any
        ENP_VAR: object,
        DOYOUAD_DATA: object
    }
}
const isMobileUser = isMobile('mobile');
const needMarketingScript = location.hostname.includes('dev') || location.hostname.includes('local') || location.protocol === 'http:'
	? false
	: true;

function pageView() {
	if (!needMarketingScript) {
		return;
	}
    // 카카오 픽셀
	if (window.kakaoPixel && setting.kakaoPixel.id) {
		window.kakaoPixel(`${setting.kakaoPixel.id}`).pageView();
	}
}

const doActive = {
	kakaoPixel: () => {
		const pixelScript = window.document.createElement('script');
		pixelScript.async = true;
		pixelScript.defer = true;
		pixelScript.src = '//t1.daumcdn.net/adfit/static/kp.js';
		insertElement(pixelScript, '카카오 픽셀');
	},
	mobion: () => {
		const mobionScript = window.document.createElement('script');
		mobionScript.async = true;
		mobionScript.defer = true;
		mobionScript.src = `//cdn.megadata.co.kr/dist/prod/v2/mtm.js?adverId=${setting.mobion.id}&device=${isMobileUser ? 'M' : 'W'}`;
		insertElement(mobionScript, '<!-- Enliple Tracker -->');
	},
	gtm: () => {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'gtm.start': new Date().getTime(),
			event: 'gtm.js',
		});

		const gtmId = setting.gtm.id;

		const googleTagScript = window.document.createElement('script');
		googleTagScript.async = true;
		googleTagScript.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;

		const googleTagNoscript = window.document.createElement('noscript');
		googleTagNoscript.innerHTML = `
			<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
				height="0" width="0" style="display:none;visibility:hidden"></iframe>
		`;

		insertElement(googleTagScript, 'Google Tag Manager');
		insertElement(
			googleTagNoscript,
			'Google Tag Manager(noscript)',
			'bodystart',
		);
	},
	ga: () => {
		if (!window.dataLayer) {
			window.dataLayer = window.dataLayer || [];
		}
		const gaId = setting.ga.id;
		const googleTagScript = window.document.createElement('script');
		googleTagScript.async = true;
		googleTagScript.src = `https://www.googletagmanager.com/gtag.js?id=${gaId}`;

		insertElement(googleTagScript, 'Google Gtag');
		function gtag() { dataLayer.push(arguments); }
		gtag('js', new Date());
		gtag('config', `${gaId}`);
	},
};
/**
 * 헤더 내 엘리먼트 삽입처리
 * @param window
 * @param element
 * @param comment
 * @param position
 */
function insertElement(
	element: HTMLElement|HTMLElement[],
	comment?: string,
	position: 'headend' | 'headstart' | 'bodyend' | 'bodystart' = 'headend',
) {
	const args: Array<Comment|HTMLElement> = [
		window.document.createComment(`${comment}`),
	];

	(Array.isArray(element) ? element : [element]).forEach(el => args.push(el));

	args.push(
		window.document.createComment(`// ${comment}`),
	);

	if (position === 'headend') {
		window.document.head.append(...args);
	}
	else if (position === 'headstart') {
		const firstChild = window.document.head.children[0];
		args.forEach((arg) => {
			window.document.head.insertBefore(arg, firstChild);
		});
	}
	else if (position === 'bodyend') {
		window.document.body.append(...args);
	}
	else if (position === 'bodystart') {
		const firstChild = window.document.body.children[0];
		args.forEach((arg) => {
			window.document.body.insertBefore(arg, firstChild);
		});
	}

	return args;
}

export function useThirdPartyTracking() {

	function initialize() {
		if (!needMarketingScript) {
			return;
		}
		const router = useRouter();
		if (setting.kakaoPixel.id) {
			doActive.kakaoPixel();
		}

		if (setting.mobion.id) {
			doActive.mobion();
		}

		if (setting.gtm.id) {
			doActive.gtm();
		}

		if (setting.ga.id) {
			doActive.ga();
		}

		router.afterEach((to, from) => {
			if (to.path === from.path) {
				return;
			}
			pageView({
				path: to.path,
				uri: location.href,
				title: document.querySelector('title')?.innerText || '',
			});
		});
	}

	function viewGoods(resource: ViewGoodsActionResource) {
		if (!needMarketingScript) {
			return;
		}

		const activateScripts = [];
		const categoryLabel = resource.categoryFullPath.split('>');

		// GTM 이벤트
		if (window.dataLayer) {
			window.dataLayer.push({
				event: 'view_goods',
				resource: {
					viewGoods: resource,
				},
			});
		}

		if (window.kakaoPixel && setting.kakaoPixel.id) {
			window.kakaoPixel(`${setting.kakaoPixel.id}`).viewContent({
				id: `${resource.goodsId}`,
			});
		}

		if (setting.mobion.id) {
			window.ENP_VAR = {};
			window.ENP_VAR = {
				collect: {
					productCode: `${resource.goodsId}`,
					productName: `${resource.goodsName}`,
					price: `${resource.listPrice}`,
					dcPrice: `${resource.discountedPrice}`,
					soldOut: `${resource.isSoldout ? 'Y' : 'N'}`,
					imageUrl: `${resource.imageUrls[0]}`,
					secondImageUrl: `${resource.imageUrls[1] || ''}`,
					topCategory: `${categoryLabel[0].trim() ?? ''}`,
					firstSubCategory: `${categoryLabel[0].trim() ?? ''}`,
					secondSubCategory: `${categoryLabel[1].trim() ?? ''}`,
					thirdSubCategory: `${categoryLabel[2].trim() ?? ''}`,
				},
			};
			window.CallMtm = window.CallMtm || function() { (window.CallMtm.q = window.CallMtm.q || []).push(arguments); };
			CallMtm();

		}

		onBeforeUnmount(() => {
			if (activateScripts.length > 0) {
				activateScripts.forEach((el) => {
					if (Array.isArray(el)) {
						el.forEach((tag) => tag.remove());
					}
					else {
						el.remove();
					}
				});
			}
		});
	}

	function viewCart(resource: ViewCartActionResource) {
		if (!needMarketingScript) {
			return;
		}

		const activateScripts = [];

		// GTM 이벤트
		if (setting.gtm.id && window.dataLayer) {
			window.dataLayer.push({
				event: 'add_to_cart',
				resource: {
					addToCart: resource,
				},
			});
		}

		// 카카오 픽셀
		if (setting.kakaoPixel.id && window.kakaoPixel) {
			resource.cartItems.forEach(cartItem => {
				window.kakaoPixel(`${setting.kakaoPixel.id}`).addToCart({
					id: cartItem.goodsId,
				});
			});
		}

		if (setting.mobion.id) {
			window.ENP_VAR = {};
			window.ENP_VAR = {
				conversion: {
					product: resource.cartItems.map(cartItem => {
						return {
							productCode: `${cartItem.goodsId}`,
							productName: `${cartItem.goodsName}`,
							price: `${cartItem.price}`,
							dcPrice: `${cartItem.discountedPrice}`,
							qty: `${cartItem.quantity}`,
						};
					}),
					totalPrice: `${resource.cartItems.reduce((p, c) => p + (c.price * c.quantity), 0)}`, // 없는 경우 단일 상품의 정보를 이용해 계산
					totalQty: `${resource.cartItems.reduce((p, c) => p + c.quantity, 0)}`, // 없는 경우 단일 상품의 정보를 이용해 계산
				},
			};
			window.CallMtm = window.CallMtm || function() { (window.CallMtm.q = window.CallMtm.q || []).push(arguments); };
			CallMtm();

		}

		onBeforeUnmount(() => {
			if (activateScripts.length > 0) {
				activateScripts.forEach((el) => {
					if (Array.isArray(el)) {
						el.forEach((tag) => tag.remove());
					}
					else {
						el.remove();
					}
				});
			}
		});
	}

	function orderReceipted(resource: OrderReceiptedActionResource) {
		if (!needMarketingScript) {
			return;
		}
		const activateScripts = [];
		// 카카오 픽셀
		if (window.kakaoPixel && setting.kakaoPixel.id) {
			window.kakaoPixel(`${setting.kakaoPixel.id}`).purchase({
				total_quantity: resource.orderedItems.reduce((p, c) => p + c.quantity, 0),
				total_price: resource.paymentPrice,
				currency: 'KRW',
				products: resource.orderedItems.map(orderedItem => {
					return {
						id: orderedItem.goodsId,
						name: orderedItem.goodsName,
						price: orderedItem.price,
					};
				}),
			});
		}


		if (setting.mobion.id) {
			window.ENP_VAR = {};
			window.ENP_VAR = {
				conversion: {
					product: resource.orderedItems.map(orderedItem => {
						return {
							productCode: `${orderedItem.goodsId}`,
							productName: `${orderedItem.goodsName}`,
							price: `${orderedItem.price}`,
							dcPrice: `${orderedItem.paidPrice }`,
							qty: `${orderedItem.quantity}`,
						};
					}),
					ordCode: `${resource.orderId}`,
					totalPrice: resource.paymentPrice, // 없는 경우 단일 상품의 정보를 이용해 계산
					totalQty: `${resource.orderedItems.reduce((p, c) => p + c.quantity, 0)}`, // 없는 경우 단일 상품의 정보를 이용해 계산
				},
			};

			window.CallMtm = window.CallMtm || function() { (window.CallMtm.q = window.CallMtm.q || []).push(arguments); };
			CallMtm();
		}

		onBeforeUnmount(() => {
			if (activateScripts.length > 0) {
				activateScripts.forEach((el) => {
					if (Array.isArray(el)) {
						el.forEach((tag) => tag.remove());
					}
					else {
						el.remove();
					}
				});
			}
		});
	}

	function joinComplete() {
		if (!needMarketingScript) {
			return;
		}
		const activateScripts = [];
		// 카카오 픽셀
		if (window.kakaoPixel && setting.kakaoPixel.id) {
			window.kakaoPixel(`${setting.kakaoPixel.id}`).completeRegistration();
		}

		onBeforeUnmount(() => {
			if (activateScripts.length > 0) {
				activateScripts.forEach((el) => {
					if (Array.isArray(el)) {
						el.forEach((tag) => tag.remove());
					}
					else {
						el.remove();
					}
				});
			}
		});
	}

	function searchKeyword(keyword: string) {
		if (!needMarketingScript || !keyword) {
			return;
		}
		// 카카오 픽셀(검색어 존재시만)
		if (window.kakaoPixel && setting.kakaoPixel.id) {
			window.kakaoPixel(`${setting.kakaoPixel.id}`).search({
				keyword: keyword,
			});
		}
	}

	return {
		initialize,
		viewGoods,
		viewCart,
		orderReceipted,
		joinComplete,
		searchKeyword,
	};
}