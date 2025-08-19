import { useBackend } from '$/composables/useBackend'

export function useCategoryShop() {
    // async function filters() {
    //         const { filters: filterableResource } = await useBackend().command<{
    //             filters: CategoryShopGoodsFilterable
    //         }>(
    //             'v1/goods/filters-of-common', 
    //             {
    //                 params: {
    //                     category_code: categoryCode
    //                 },
    //             }
    //         )

    //         return filterableResource
    // }
    
    // async function getList() {
    //     const { paginator: { data } } = await useBackend().command<{
    //         paginator: SimplePaginator<Goods>
    //     }>(
    //         'v1/goods/common', 
    //         {
    //             params: {
    //                 ...paramsForCommand,
    //                 category_code: categoryCode,
    //             },
    //         }
    //     )

    //     return data
    // }

    // async function getTotalCountGoods() {
    //     const { total_count } = await useBackend().command<{
    //         total_count: number
    //     }>(
    //         'v1/goods/total-count-of-common', 
    //         {
    //             params: {
    //                 ...paramsForCommand,
    //                 category_code: categoryCode,
    //             },
    //         }
    //     )

    //     return total_count
    // }

    return {
        // getTotalCountGoods
    }
}