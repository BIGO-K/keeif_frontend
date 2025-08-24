import { ref } from 'vue';
import { useAnimation } from '$/composables/useAnimation';

export function useGoodsZoomLoaderImage() {
	const animate = useAnimation();
	const cloneImageInterval = ref<null|NodeJS.Timeout>(null);

	function getZoomLoaderImage(event: Event) {
		const targetElement = event.target as HTMLElement;
    // 바로 타겟이 I 인경우
		const isTargetImageElement = targetElement.classList.contains('image_product') && targetElement.nodeName === 'I';
		if (isTargetImageElement) {
			return goodsZoomLoad(targetElement.cloneNode() as HTMLElement, targetElement.closest('a'));
		}

		const goodsBoxElement = targetElement.closest('.mm_product-item, .mui_product-item');
		if (!goodsBoxElement) {
			return;
		}
		const imageOriginElement = goodsBoxElement.querySelector('.image_product');

		if (!imageOriginElement) {
			return;
		}

		const iElement = imageOriginElement.cloneNode() as HTMLElement;

		return goodsZoomLoad(iElement, targetElement);

	}

	function goodsZoomLoad(iElement: HTMLElement, targetElement: HTMLElement) {
		if (iElement === null || targetElement === null) {
			return;
		}

		if (document.querySelector('.m_product-clone')) {
			return;
		}
		const wrapElement = document.createElement('div');
		wrapElement.classList.add('m_product-clone');
		iElement.setAttribute('class', 'mm_bg-cover image_product S=loaded');
		iElement.setAttribute(
			'style',
			`${iElement.getAttribute('style')} width: 100%; padding-top: 100%;`,
		);
		iElement.removeAttribute('data-lazyload');

		wrapElement.appendChild(iElement);
		wrapElement.setAttribute(
			'style',
			`position: fixed; background: rgba(#fff, 0.7); z-index:9999`,
		);

		const appElement = document.getElementById('app') as HTMLElement;
		appElement.insertAdjacentElement('afterbegin', wrapElement);

		animate.fromTo(
			wrapElement,
			(() => {
				return {
					top: targetElement.getBoundingClientRect().top,
					left: targetElement.getBoundingClientRect().left,
					width: targetElement.offsetWidth,
					height: targetElement.offsetHeight,
				};
			})(),
			{
				top: 0,
				left: 0,
				paddingTop: 45,
				paddingRight: '2.66666%',
				width: '100%',
				height: '100%',
				duration: 0.2,
				ease: 'cubic.inOut',
			},
		);
	}

	function clearCloneImageInterval() {
		if (!cloneImageInterval.value) {
			return;
		}
		clearInterval(cloneImageInterval.value);
		cloneImageInterval.value = null;
	}

	function removeCloneImage() {
		const cloneImage: HTMLElement|null = document.querySelector('.m_product-clone');

		if (!cloneImage || cloneImageInterval.value) {
			return clearCloneImageInterval();
		}

		let tickCount = 0;
		cloneImageInterval.value = setInterval(() => {
			if (tickCount > 10 || document.querySelector('.mm_carousel i.S\\=complete')) {
                // 썸네일 로딩이 끝났거나 n회 이상 지연되는 경우
				cloneImage.classList.add('hide_auto');
				clearCloneImageInterval();
				setTimeout(() => {
					cloneImage.remove();
				}, 380);
			}

			tickCount++;
		}, 200);
	}
    /** //FUNCTION **/

	return {
		getZoomLoaderImage,
		removeCloneImage,
	};
}