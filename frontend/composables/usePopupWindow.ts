import { type MaybeRef, isRef, ref, watch } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import { useUserAgent } from '$/composables/useUserAgent';

/** 팝업 옵션 관련 타입 */
type PopupWindowOptions = {
    width?: number
    height?: number
    left?: number
    top?: number
    resizable?: boolean
    scrollbars?: boolean
    location?: boolean
}

export const usePopupWindow = (
	target: string = '_blank',
	url: MaybeRef<string|undefined>,
	options?: PopupWindowOptions,
) => {

	const { isMobileUser, isAndroidUser } = useUserAgent();
	options = Object.assign({}, options);

	if (!isMobileUser) {
		options.top = (window.top || window).outerHeight / 2 + (window.top || window).screenY - ((options.height || 0) / 2);
		options.left = (window.top || window).outerWidth / 2 + (window.top || window).screenX - ((options.width || 0) / 2);
	}

	const features = [
		options?.width != undefined ? `width=${options.width}` : '',
		options?.height != undefined ? `height=${options.height}` : '',
		options?.left != undefined ? `left=${options.left}` : '',
		options?.top != undefined ? `top=${options.top}` : '',
		options?.scrollbars ? 'scrollbars=yes' : '',
		options?.resizable ? 'resizable=yes' : '',
		options?.location ? 'location=yes' : '',
	].filter(v => v).join(',');

	const popupWindow = ref<Window | null>(null);
	const popupWindowClosed = ref(false);

	const popupWindowIntervalHandle = useIntervalFn(() => {
		if (popupWindow.value?.closed === true) {
			popupWindowClosed.value = true;
		}
	},
	1000,
	{
		immediate: false,
	},
	);

	function popupOpen(url: string) {
		popupWindow.value = window.open(
			url,
			target,
			features,
		);

		if (!popupWindow.value) {
			return Promise.reject(new Error('팝업 차단 해제 후 다시 시도해주세요.'));
		}
		popupWindowIntervalHandle.resume();

		return new Promise<{ popupWindowClosed: boolean }>((resolve) => {
			watch(popupWindowClosed, closed => {
				if (closed) {
					popupWindowIntervalHandle.pause();
					resolve({
						popupWindowClosed: popupWindowClosed.value,
					});
				}
			});
		});
	}

	return {
		open: () => {
			let targetUrl = '';
			try {
                // 반응형이 아닌 경우
				if (!isRef(url)) {
					if (url === undefined) {
						console.error('이동할 URL이 없습니다\n URL 확인필요');
						throw {
							message: '올바른 요청이 아닙니다.',
						};
					}
					targetUrl = url;
				}
				else {
					targetUrl = url.value
						? url.value
						: isAndroidUser ? '' : '/external';

					const stopWatch = watch(url, (popupUrl) => {
						if (popupUrl && popupWindow.value !== null) {
							stopWatch();
							popupWindow.value.location.href = popupUrl;
							// popupWindow.value.location.replace(popupUrl);
						}
					});
				}

				return popupOpen(targetUrl);

			}
			catch (e) {
				popupWindow.value?.close();
				popupWindowIntervalHandle.pause();
				throw e;
			}
		},
		close: () => {
			popupWindowIntervalHandle.pause();
			if (popupWindow.value) {
				popupWindow.value.close();
			}
		},
	};
};