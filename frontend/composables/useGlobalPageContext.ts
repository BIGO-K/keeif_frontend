import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '$/stores/useAuthStore';
import { useLayerContextStore } from '$/stores/useLayerContextStore';
import { usePageContextStore } from '$/stores/usePageContextStore';
import config from '$/utils/config';
import mons from '$/utils/mons';
import { useUserAgent } from '$/composables/useUserAgent';

/** 페이지내 전역적으로 사용되는 항목들 */
export function useGlobalPageContext() {
	const authStore = useAuthStore();
	const { clearErrorWithHistoryBack } = usePageContextStore();
	const { isMobileUser } = useUserAgent();
	const member = computed(() => authStore.member);
	const isMember = computed<boolean>(() => member.value !== null);

	/** 라우트 */
	const route = useRoute();
	const router = useRouter();

	/** 레이어 모달 composable */
	const { openOverlay, openModal } = useLayerContextStore();
	const { bom, loading } = mons();

	return {
		isMember,
		member,
		route,
		router,
		bom,
		loading,
		openOverlay,
		openModal,
		clearErrorWithHistoryBack,
		initSeo: () => {
			// seo meta tag
			const titleElement: HTMLTitleElement | null = document.querySelector('title');
			const keywordElement: HTMLMetaElement | null = document.querySelector('meta[name=keywords');
			const descriptionElement: HTMLMetaElement | null = document.querySelector('meta[name=description]');
			const seoTitleElement: HTMLMetaElement | null = document.querySelector('meta[property=og\\:title]');
			const seoDescElement: HTMLMetaElement | null = document.querySelector('meta[property=og\\:description]');
			const seoUrlElement: HTMLMetaElement | null = document.querySelector('meta[property=og\\:url]');
			const seoSiteNameElement: HTMLMetaElement | null = document.querySelector('meta[property=og\\:site_name]');
			const seoNaverSiteVerificationElement: HTMLMetaElement | null = document.querySelector('meta[name=naver-site-verification]');

			const seo = config('seo');
			const shop = config('shop');

			if (shop && seoSiteNameElement) {
				seoSiteNameElement.content = shop.name;
			}

			if (!seo) return;

			if (titleElement) {
				titleElement.innerText = seo?.title;
			}

			if (keywordElement) {
				keywordElement.content = seo?.keywords;
			}

			if (seoTitleElement) {
				seoTitleElement.content = seo?.title;
			}

			if (descriptionElement) {
				descriptionElement.content = seo?.description;
			}

			if (seoDescElement) {
				seoDescElement.content = seo?.description;
			}

			if (seoUrlElement) {
				seoUrlElement.content = isMobileUser ? 'https://m.keeif.kr' : 'https://www.keeif.kr';
			}

			if (seoNaverSiteVerificationElement) {
				seoNaverSiteVerificationElement.content = seo?.site_verification_key.naver;
			}

		},
	};
}