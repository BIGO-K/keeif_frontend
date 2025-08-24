import { RouteRecordRaw } from 'vue-router';
// import { useCategoryStore } from '@/store/category';

const routes: RouteRecordRaw[] = [
	{
		path: '/category',
		children: [
			// 카테고리
			{
				path: ':id(\\d+)?',
				name: 'Category',
				component: () => import('@/page/category/component/CategorySub.vue'),
				// beforeEnter: async (_to, _from, _next) => {

				// 	// TODO 메인, 서브 카테고리 구분
				// 	// 처음 값으로 적용(001000000)
				// 	if (!_to.params.id) _next({ name: _to.name, params: { id: useCategoryStore().categoryItems[0].code } });
				// 	else _next();

				// }
			},
		]
	},
	{
		path: '/product',
		children: [
			// 상품상세
			{
				path: ':id(\\d+)',
				name: 'ProductDetail',
				component: () => import('@/page/product/detail/ProductDetail.vue'),
			}
		]
	},
	// 검색
	{
		path: '/search',
		children: [
			{
				path: '',
				name: 'Search',
				component: () => import('@/page/search/Search.vue'),
			},
			// 검색 결과
			{
				path: 'result',
				name: 'SearchResult',
				component: () => import('@/page/search/result/SearchResult.vue'),
			}
		]
	},
	// 판매자
	{
		path: '/seller',
		children: [
			// 판매자샵
			{
				path: ':id(\\d+)',
				name: 'SellerShop',
				component: () => import('@/page/seller/shop/SellerShop.vue'),
			},
		]
	},
	// 브랜드
	{
		path: '/brand',
		children: [
			// 브랜드맵(pc)
			// {
			// 	path: '',
			// 	name: 'BrandMap',
			// 	component: () => import('@/page/brand/BrandMap.vue'),
			// },
			// 브랜드샵
			{
				path: ':id(\\d+)',
				name: 'BrandShop',
				component: () => import('@/page/brand/shop/BrandShop.vue'),
			},
		]
	},
	// 베스트
	{
		path: '/best',
		name: 'Best',
		component: () => import('@/page/best/Best.vue'),
	},
	// 프로모션
	{
		path: '/promotion',
		children: [
			// 프로모션 상세
			{
				path: ':id(\\d+)',
				name: 'PromotionDetail',
				component: () => import('@/page/promotion/detail/PromotionDetail.vue'),
			},
		]
	}
];

export default routes;