
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useUserAgent } from '$/composables/useUserAgent';

/** 자체 */
const affiliateShop = [
	'app_push', 	// 앱푸시
	'web_email', 		// EMAIL 발송
	'sms', 			// SMS 발송
	'web_pc', // 자체 PC
	'web_mo', // 자체 mo
	'app_aos', // 안드로이드 앱
	'app_ios', // IOS 앱
	'chtalk', // 자체 채널톡
	'favorites',
];

const shortcutLink = [
	'google_pc',
	'google_mo',
];

/** [네이버] */
const affiliateNaver = [
	/** [네이버] EP */
	'naver_ep_p', 	// 네이버 EP
	'naver_ep_m', 	// 네이버 M EP
	'naver_sm', // 네이버 스마트 스토어
	'naver_logo', // 네이버 몰명
	'naver_ss', 	// 네이버 쇼핑몰
	'naver_cafe', // 네이버 카페
	'naver_blog', // 네이버 블로그
	'naver_sa_p', // 네이버 키워드 검색
	'naver_sa_m', // 네이커 키워드 모바일
	'naver_ssa', // 네이버 쇼핑 검색
	'naver_bs_p', // 네이버 브랜드 검색 PC,
	'naver_bs_m', // 네이버 브랜드 검색 M,
	'naver_gfa', 	// 네이버 GFA 성과형
	/** [네이버] 바로가기 */
	'naver_pc', 	// 네이버 PC
	'naver_mo', 	// 네이버 MO
	/** [네이버] 쇼핑박스 */
	'naver_box1',
	'naver_box2',
	'naver_box3',
	'naver_box4',
	'naver_box5',
	/** [네이버] 맨즈 */
	'naver_man1',
	'naver_man2',
	'naver_man3',
	'naver_man4',
	'naver_man5',
	/** [네이버] 트랜드몰 A형 */
	'naver_t_am',
	'naver_t_a1',
	'naver_t_a2',
	'naver_t_a3',
	'naver_t_a4',
	'naver_t_a5',
	'naver_t_a6',
	'naver_t_a7',
	'naver_t_a8',
	/** [네이버] 트랜드몰 B형 */
	'naver_t_bm',
	'naver_t_b1',
	'naver_t_b2',
	'naver_t_b3',
];

/** [다음] */
const affiliateDaum = [
	'daum_ep', 		// 다음 EP
	'daum_logo', 	// 다음 몰명
	'daum_cafe', 		// 다음 카페, 블로그
	'daum_blog', // 다음블로그
	/** [다음] 바로가기 */
	'daum_mo', 		// 다음 M
	'daum_pc', 		// 다음 PC
	'daum_sa_p', // 다음 키워드 PC
	'daum_sa_m', // 다음 키워드 M
];

/** [카카오] */
const affiliateKakao = [
	'kakao_kw', 	// 카카오 키워드
	'kakao_biz', 	// 카카오 비즈보드
	'kakao_da', 	// 카카오 디스플레이
	'kakao_pf', 	// 카카오 플친
	'kakao_ch', 	// 카카 채널
	/** [카카오] 쇼핑박스 */
	'kakao_spc1',
	'kakao_spc2',
	'kakao_spc3',
	'kakao_spc4',
	'kakao_spc5',
	/** [카카오] 쇼핑박스 M */
	'kakao_smo1',
	'kakao_smo2',
	'kakao_smo3',
	'kakao_smo4',
	'kakao_smo5',
	// 카카오 디스플레이
	'kakao_da_p',
	'kakao_da_m',
];

/** 소셜 */
const affiliateSns = [
	'youtube',
	'facebook',
	'Instagram',
	'instagram',
	'wmp_wd', // 위메프
];

/** 리타겟팅 */
const affiliateRetargeting = [
	'mobion', 	// 모비온
	'doyouad', 	// 두유애드
	'gg_gdn', 	// GDN
	'targetgt', // 타겟팅게이츠
	'criteo', 	// 크리테오
	'wmp_wd', // 위메프
];

// PC >> M 제휴코드
const pcToMobileAffiliates: {[key: string]: string} = {
	'naver_ep_m': 'naver_ep_p',
	// 'naver_mkw': 'naver_kw',
	// 'naver_Mbr': 'naver_Pbr',
	'daum_mo': 'daum_pc',
	'naver_mo': 'naver_pc',
	'google_mo': 'google_pc',
};

// M >> PC 제휴코드
const mobileToPcAffiliates: {[key: string]: string} = {
	'naver_ep_p': 'naver_ep_m',
	// 'naver_kw': 'naver_mkw',
	// 'naver_Pbr': 'naver_Mbr',
	'daum_pc': 'daum_mo',
	'naver_pc': 'naver_mo',
	'google_pc': 'google_mo',
};

const snsAffiliates = [
	'Instagram',
	'instagram',
	'facebook',
	'youtube',
	'tiktok',
	'twitter',
];


const etcAffiiates = [
	'store_aos',
	'store_ios',
	'appier_aos',
	'appier_ios',
	'cauly_aos',
	'cauly_ios',
	'nswi_aos',
	'nswi_ios',
	'npos_aos',
	'npos_ios',
	'Jungx_aos',
	'Jungx_ios',
	'uac_aos',
	'uac_ios',
	'asa_ios',
	'TNK_aos',
	'TNK_ios',
	'ohc_aos',
	'ohc_ios',
	'ohc_web',
	'adison_aos',
	'adison_ios',
	'adison_web',
	'cawalk_aos',
	'cawalk_ios',
	'cawalk_web',
	'buzz_aos',
	'buzz_ios',
	'buzz_web',
	'caslide_a',
	'caslide_i',
	'caslide_w',
	'Kapage_aos',
	'Kapage_ios',
	'Kapage_web',
	'co_aos',
	'co_ios',
	'co_web',
	'manplus_pc',
	'manplus_mo',
	'ace_pc',
	'ace_mo',
];

const affiliateCodes = [...affiliateShop, ...affiliateNaver, ...affiliateDaum, ...affiliateKakao, ...affiliateSns, ...affiliateRetargeting, ...shortcutLink, ...snsAffiliates, ...etcAffiiates];

export const useAffiliateStore = defineStore('affiliate', () => {

	const { isMobileUser, isAndroidApp, isAppUser } = useUserAgent();

	const defaultAffiliateCode = computed(() => {
		if (isMobileUser) {
			if (isAppUser) {
				return isAndroidApp ? 'app_aos' : 'app_ios';
			}

			return 'web_mo';
		}

		return 'web_pc';
	});

	const currentCode = ref<string>(defaultAffiliateCode.value);

	function set(code?: string, query?: LocationQuery) {
		if (!code || code === '') {
			return;
		}
        // affiliate 코드 확인
		if (!affiliateCodes.includes(code)) {
			currentCode.value = defaultAffiliateCode.value;

			return;
		}

        // 매출 코드 포함된 경우
		currentCode.value = code;
        // mobile 코드로 넘어왔을 경우 pc 코드로 변환
		if (isMobileUser && mobileToPcAffiliates[code]) {
			currentCode.value = mobileToPcAffiliates[code];
		}
        // PC에 모바일 코드 넘어오는 경우 치환
		if (!isMobileUser && pcToMobileAffiliates[code]) {
			currentCode.value = pcToMobileAffiliates[code];
		}
        // 네이버 쇼핑 광고 검색 관련 처리 추가
		// if (currentCode.value === 'naver_Pep' || currentCode.value === 'naver_Mep' && query) {
		// 	if (query.nv_ad && query.nv_ad.includes('pla')) {
		// 		currentCode.value = `naver_pa`;
		// 	}
		// }
	}

	return {
		currentCode,
		set,
	};
}, {
	persist: {
		storage: sessionStorage,
	},
});