import { useBackend } from '$/composables/useBackend'
import { ref } from 'vue';

export function useGoodsCategory() {
    /**
     * 전체 카테고리 조회 
     * @returns 
    */
    async function all(): Promise<Category[]> {
        const { category_list } = await useBackend().command<{
            category_list: Category[]
        }>('v1/goods-categories')

        return category_list;
    }

    /**
     * 단일 카테고리 정보 조회
     * @param code 카테고리 코드
     * @returns 
    */
    async function find(code: string): Promise<CategoryInformation> {
        const { category_info } = await useBackend().command<{
            category_info: CategoryInformation
        }>('v1/goods/category-information-of-common', {
            params: {
                category_code: code
            }
        })

        return category_info
    }

    /**
     * 카테고리에 속한 아이템 갯수 반환 
     * @param categoryCodes 
     * @returns 
    */
    async function getCategoriesGoodsCount(categoryCodes: string[]): Promise<number[]> {
        const { category_goods_count } = await useBackend().command<{
            category_goods_count : {
                category_code: string,
                goods_count: number
            }[]
        }>('/v1/goods/count-by-category',{
            method: `post`,
            data: {
                category_codes: categoryCodes
            }
        })

        return category_goods_count.map(count => count.goods_count);
    }

    function activeCategories(categoryInformation: CategoryInformation | undefined) {
        const category1 = ref<Category>()
        const category2 = ref<Category>()
        const category3 = ref<Category>()

        const activeCategories = ref([
            category1,
            category2,
            category3
        ])

        async function findActives() {
            if (!categoryInformation) {
                return
            }

            const categories = await all()
            if (categoryInformation.depth === 1) {
                category1.value = categories.find(c => c.code === categoryInformation.depth1_category_code)
            } else if (categoryInformation.depth === 2) {
                category1.value = categories.find(c => c.code === categoryInformation.depth1_category_code)
                category2.value = category1.value?.children.find(c2 => c2.code === categoryInformation.depth2_category_code)
            } else if (categoryInformation.depth === 3) {
                category1.value = categories.find(c => c.code === categoryInformation.depth1_category_code)
                category2.value = category1.value?.children.find(c2 => c2.code === categoryInformation.depth2_category_code)
                category3.value = category2.value?.children.find(c3 => c3.code === categoryInformation.depth3_category_code)
            }
        }

        findActives()

        return activeCategories
    }

    /**
     * 카테고리 1depth 전시 페이지 조회
     * @param categoryCode 
     * @returns 
     */
    async function getExhibitOneDepth(categoryCode: string) {
        const { category_page } = await useBackend().command<{
            category_page: Nullable<CategoryExhibit>
        }>(`v1/exhibit/one-depth/${categoryCode}`)

        return category_page;
    }

    return {
        all,
        find,
        getCategoriesGoodsCount,
        activeCategories,
        getExhibitOneDepth,
    }
}