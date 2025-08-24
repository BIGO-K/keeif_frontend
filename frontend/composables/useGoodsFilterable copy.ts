import { ref, type MaybeRef, computed, watch } from 'vue';
import * as Hangul from 'hangul-js';
import { useFormatter } from './useFormatter';

type BrandFilterCharGroup = string & '전체' | 'ㄱ' | 'ㄴ' | 'ㄷ' | 'ㄹ' | 'ㅁ' | 'ㅂ' | 'ㅅ' | 'ㅇ' | 'ㅈ' | 'ㅊ' | 'ㅋ' | 'ㅌ' | 'ㅍ' | 'ㅎ' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' | 'ABC' | '123'

const brandFilterCharGroups = {
	pc: [
		'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
		'123',
		'전체',
	] as BrandFilterCharGroup[],
	mobile: [
		'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
		'ABC',
		'123',
		'전체',
	] as BrandFilterCharGroup[],
};

export const useGoodsFilterable = (filterable: MaybeRef<GoodsFilterable>) => {
    /** [시작] 카테고리 */
	const activeCategory1 = ref<CategoryForFilter>();
	const activeCategory2 = ref<CategoryForFilter>();

	const selectableCategoriesDepth1 = computed(() => {
		const categories = ref(filterable).value.categories || [];

		return categories;
	});

    /** [종료] 카테고리 */

    /** [시작] 브랜드 */
	const brandCharGroup = ref<BrandFilterCharGroup | null>('전체');
	const brandKeyword = ref('');

	watch(brandKeyword, (n) => {
		if (n) {
			brandCharGroup.value = null;
		}
		else {
			brandCharGroup.value = '전체';
		}
	});

	const selectableBrands = computed(() => {
		const brands = ref(filterable).value.brands || [];

		if (brandCharGroup.value) {
			if (brandCharGroup.value === '전체') {
				return brands;
			}
			else if (brandCharGroup.value === 'ABC') {
				return brands.filter(b => b.name.match(/^[a-zA-Z]/));
			}
			else if (brandCharGroup.value === '123') {
				return brands.filter(b => b.name.match(/^[^a-zA-Zㄱ-ㅎ가-힣]/));
			}
			else if (brandCharGroup.value.match('[A-Z]')) {
				const alphaRegex = new RegExp(`^${brandCharGroup.value}`);

				return brands.filter(b => b.name.match(alphaRegex));
			}
			else if (brandCharGroup.value.match('[ㄱ-ㅎ]')) {
				return brands.filter(b => brandCharGroup.value === Hangul.d(b.name)[0]);
			}
		}

		if (brandKeyword.value) {
			const searcher = new Hangul.Searcher(brandKeyword.value);

			return brands.filter(
				b => b.name.replace(/\s/g, '').toLowerCase().match(new RegExp(brandKeyword.value.toLowerCase()))
                    || searcher.search(b.name) !== -1
			);
		}

		return brands;
	});
    /** [종료] 브랜드 */

    /** [시작] 가격범위 */
	const selectablePriceRanges = computed(() => {
		const priceRanges = ref(filterable).value.price_ranges || [];

		return priceRanges;
	});
    /** [종료] 가격범위 */

    /** [시작] 별점 */
	const selectableReviewRates = computed(() => {
		const reviewRates = ref(filterable).value.review_rates || [];

		return reviewRates;
	});
    /** [중료] 별점 */

    /** [시작] 혜택 */
	const selectableBenefits = computed(() => {
		const benefits = ref(filterable).value.benefits || [];

		return benefits.filter((benefit) => benefit.selected).map(benefit => benefit.value);
	});
    /** [종료] 혜택 */

    /** [시작] 색상 */
	const selectableColors = computed(() => {
		const colors = ref(filterable).value.colors || [];

		return colors;
	});
    /** [종료] 색상 */

    /** [시작] FIT */
	const selectableFitSizes = computed(() => {
		const fitSizes = ref(filterable).value.fit_sizes || [];

		return fitSizes;
	});
    /** [종료] FIT */

    /** [시작] 신발 사이즈 */
	const selectableShoesSizes = computed(() => {
		const shoesSizes = ref(filterable).value.shoes_sizes || [];

		return shoesSizes;
	});
    /** [종료] 신발 사이즈 */

	/** 선택상태 - 가격범위 유틸성 */
	const { number } = useFormatter();
	const textPriceRange = (priceRange: PriceRangeForFilter) => {
		const fromText = priceRange.min % 10000 === 0 ? `${priceRange.min / 10000}만원 ` : `${number(priceRange.min)}원 `;
		const toText = priceRange.max % 10000 === 0 ? ` ${priceRange.max / 10000}만원` : ` ${number(priceRange.max)}원`;

		return `${priceRange.min === 0 ? '' : fromText}~${priceRange.max === 0 ? '' : toText}`;
	};

	return {
		activeCategory1,
		activeCategory2,

		selectableCategoriesDepth1,


		brandCharGroup,
		brandKeyword,
		brandFilterCharGroups,
		selectableBrands,

		selectablePriceRanges,

		selectableReviewRates,

		selectableBenefits,

		selectableColors,

		selectableFitSizes,

		selectableShoesSizes,
		textPriceRange
	};
};