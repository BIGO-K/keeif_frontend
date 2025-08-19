import config from '$/utils/config';
import { THIRD_PARTY_TYPES } from '$/constants/THIRDPARTY';

type ThirdPartyAuthPlatform = {
    code: ThirdPartyPlatforms
    buttonClass: string
    iconClass: string
    label: string
}

const thirdPartyConfig = {
	getLabel: getPlatformLabel,
    // 소셜 사용 가능여부 체크
	isUsablePlatform: (platform: ThirdPartyPlatforms): boolean => {
		return config('paid_features.usable_social_logins').includes(platform);
	},
	usablePlatforms: () => {
		const usable = config('paid_features.usable_social_logins');
		const platforms: ThirdPartyAuthPlatform[] = [];
		if (usable.includes('naver')) {
			platforms.push({
				code: 'naver',
				buttonClass: 'btn_naver',
				iconClass: 'ico_sns-naver',
				label: '네이버'
			});
		}
		if (usable.includes('kakao')) {
			platforms.push({
				code: 'kakao',
				buttonClass: 'btn_kakaotalk',
				iconClass: 'ico_sns-kakao',
				label: '카카오톡'
			});
		}

		if (usable.includes('kakao_sync')) {
			platforms.push({
				code: 'kakao_sync',
				buttonClass: 'btn_kakaotalk',
				iconClass: 'ico_sns-kakao',
				label: '카카오톡'
			});
		}
		if (usable.includes('apple')) {
			platforms.push({
				code: 'apple',
				buttonClass: 'btn_apple',
				iconClass: 'ico_sns-apple',
				label: '애플'
			});
		}

		return platforms;
	}
};

/** 서드파티 라벨 처리 */
function getPlatformLabel(platform: ThirdPartyPlatforms): string {
	if (platform === THIRD_PARTY_TYPES.kakao || platform === THIRD_PARTY_TYPES.kakaoSync) {
		return '카카오';
	}
	else if (platform === THIRD_PARTY_TYPES.apple) {
		return '애플';
	}
	else if (platform === THIRD_PARTY_TYPES.naver) {
		return '네이버';
	}
	else return '';

}

export default thirdPartyConfig;