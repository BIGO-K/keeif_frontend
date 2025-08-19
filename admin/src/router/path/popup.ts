const routes = [
	{
		path: '/excel-download',
		name: 'ExcelDownload',
		meta: {
			isPopup: true,
		},
		component: () => import('@/components/popup/ExcelDownload.vue'),
	},
	{
		path: '/manual',
		name: 'Manual',
		meta: {
			isPopup: true,
		},
		component: () => import('@/components/popup/Manual.vue'),
	},
	{
		path: '/seller-info',
		name: 'SellerInfo',
		meta: {
			isPopup: true,
		},
		component: () => import('/src/components/popup/SellerInfo.vue'),
	},
	{
		path: '/image-preview',
		name: 'ImagePreview',
		meta: {
			isPopup: true,
		},
		component: () => import('/src/components/popup/ImagePreview.vue'),
	},
	{
		path: '/postcode',
		name: 'Postcode',
		meta: {
			isPopup: true,
		},
		component: () => import('/src/components/popup/Postcode.vue'),
	},
	{
		path: '/postcode-result',
		name: 'PostcodeResult',
		meta: {
			isPopup: true,
		},
		component: () => import('/src/components/popup/PostcodeResult.vue'),
	},
	{
		path: '/search',
		meta: {
			isPopup: true,
		},
		children: [
			{
				path: 'middle-single',
				name: 'PopupSearchMiddleSingle',
				component: () => import('/src/components/popup/SearchMiddleSingle.vue'),
			},
			{
				path: 'middle-multi',
				name: 'PopupSearchMiddleMulti',
				component: () => import('/src/components/popup/SearchMiddleMulti.vue'),
			},
			{
				path: 'seller-single',
				name: 'PopupSearchSellerSingle',
				component: () => import('/src/components/popup/SearchSellerSingle.vue'),
			},
			{
				path: 'seller-multi',
				name: 'PopupSearchSellerMulti',
				component: () => import('/src/components/popup/SearchSellerMulti.vue'),
			},
			{
				path: 'brand-single',
				name: 'PopupSearchBrandSingle',
				component: () => import('/src/components/popup/SearchBrandSingle.vue'),
			},
			{
				path: 'brand-multi',
				name: 'PopupSearchBrandMulti',
				component: () => import('/src/components/popup/SearchBrandMulti.vue'),
			},
			{
				path: 'md',
				name: 'PopupSearchMd',
				component: () => import('/src/components/popup/SearchMd.vue'),
			},
			{
				path: 'product',
				name: 'PopupSearchProduct',
				component: () => import('/src/components/popup/SearchProduct.vue'),
			},
			{
				path: 'category',
				name: 'PopupSearchCategory',
				component: () => import('/src/components/popup/SearchCategory.vue'),
			},
			{
				path: 'influencer',
				name: 'PopupSearchInfluencer',
				component: () => import('/src/components/popup/SearchInfluencer.vue'),
			},
		],
	},
	{
		path: '/product-list',
		meta: {
			isPopup: true,
		},
		children: [
			{
				path: '',
				name: 'PopupSearchProductList',
				component: () => import('/src/components/popup/SearchProductList.vue'),
			},
			{
				path: 'coop',
				name: 'PopupSearchProductListCoop',
				component: () => import('/src/components/popup/SearchProductListCoop.vue'),
			},
		],
	},
	{
		path: '/content-detail',
		name: 'PopupSearchContentDetail',
		meta: {
			isPopup: true,
		},
		component: () => import('/src/components/popup/SearchContentDetail.vue'),
	},
];

export default routes;