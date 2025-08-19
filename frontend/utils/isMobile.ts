export function isMobile(type: string) {
	const deviceType = {
		iphone: 'iphone',
		ipad: 'ipad',
		ipod: 'ipod',
		ios: 'iphone|ipad|ipod',
		android: 'android|app_android',
		blackberry: 'blackberry|bb10|playbook',
		window: 'iemobile|windows phone|windows mobile',
		opera: 'opera mini',
		mobile: 'iphone|ipad|ipod|app_ios|android|app_android',
		app: 'app_ios|app_android',
        // 앱에 userAgent 코드 추가 필요
		app_ios: 'app_ios',
		app_android: 'app_android',
		app_kitkat: 'android 4.4',
		app_first: 'app_first', // 앱 최초실행
	} as Record<string, string>;

	return new RegExp(deviceType[type], 'i').test(navigator.userAgent);
}

export default isMobile;