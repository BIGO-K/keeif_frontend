const routes = [
	{
		path: '/stats',
		redirect: { name: 'ProStatsOrder' },
		children: [
			{
				path: 'order',
				children: [
					{
						path: 'api',
						children: [
							{
								path: 'affiliate',
								name: 'StatsOrderApiAffiliate',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/stats/popup/StatsOrderApiAffiliate.vue'),
							},
						],
					},
					{
						path: 'date',
						name: 'StatsOrderDate',
						component: () => import('@/pages/common/stats/StatsOrderDate.vue'),
					},
					{
						path: 'prod',
						name: 'StatsOrderProd',
						component: () => import('@/pages/common/stats/StatsOrderProd.vue'),
					},
					{
						path: 'cate',
						name: 'StatsOrderCate',
						component: () => import('@/pages/common/stats/StatsOrderCate.vue'),
					},
					{
						path: 'discount',
						name: 'StatsOrderDiscount',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/stats/popup/StatsOrderDiscount.vue'),
					},
				],
			},
			{
				path: 'time',
				children: [
					{
						path: '',
						name: 'StatsTime',
						component: () => import('@/pages/common/stats/StatsTime.vue'),
					},
					{
						path: 'api',
						name: 'StatsTimeApi',
						component: () => import('@/pages/common/stats/StatsTimeApi.vue'),
					},
				],
			},
			{
				path: 'inflow',
				children: [
					{
						path: 'sheet',
						name: 'StatsInFlowSheet',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/stats/popup/StatsInFlowSheet.vue'),
					},
				],
			},
			{
				path: 'ad',
				name: 'StatsAd',
				component: () => import('@/pages/common/stats/StatsAd.vue'),
			},
			{
				path: 'daum',
				name: 'StatsDaum',
				component: () => import('@/pages/common/stats/StatsDaum.vue'),
			},
			{
				path: 'payment',
				children: [
					{
						path: 'sales-detail',
						name: 'StatsPaymentSalesDetail',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/stats/popup/StatsPaymentSalesDetail.vue'),
					},
				],
			},
			{
				path: 'date',
				children: [
					{
						path: 'price',
						children: [
							{
								path: '',
								name: 'StatsDatePrice',
								component: () => import('@/pages/common/stats/StatsDatePrice.vue'),
							},
							{
								path: 'api',
								name: 'StatsDatePriceApi',
								component: () => import('@/pages/common/stats/StatsDatePriceApi.vue'),
							},
						],
					},
					{
						path: 'prod',
						children: [
							{
								path: '',
								name: 'StatsDateProd',
								component: () => import('@/pages/common/stats/StatsDateProd.vue'),
							},
							{
								path: 'seller',
								name: 'StatsDateProdSeller',
								component: () => import('@/pages/common/stats/StatsDateProdSeller.vue'),
							},
						],
					},
				],
			},
			{
				path: 'week-price',
				name: 'StatsWeekPrice',
				component: () => import('@/pages/common/stats/StatsWeekPrice.vue'),
			},
			{
				path: 'month-price',
				children: [
					{
						path: '',
						name: 'StatsMonthPrice',
						component: () => import('@/pages/common/stats/StatsMonthPrice.vue'),
					},
					{
						path: 'api',
						name: 'StatsMonthPriceApi',
						component: () => import('@/pages/common/stats/StatsMonthPriceApi.vue'),
					},
				],
			},
			{
				path: 'best',
				children: [
					{
						path: 'time',
						name: 'StatsBestTime',
						component: () => import('@/pages/common/stats/StatsBestTime.vue'),
					},
					{
						path: 'week',
						name: 'StatsBestWeek',
						component: () => import('@/pages/common/stats/StatsBestWeek.vue'),
					},
					{
						path: 'store',
						name: 'StatsBestTimeStore',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/stats/popup/StatsBestTimeStore.vue'),
					},
				],
			},
			{
				path: 'member',
				children: [
					{
						path: 'month-join',
						children: [
							{
								path: '',
								name: 'StatsMemberMonthJoin',
								component: () => import('@/pages/common/stats/StatsMemberMonthJoin.vue'),
							},
							{
								path: 'easylogin',
								name: 'StatsMemberMonthJoinEasylogin',
								component: () => import('@/pages/common/stats/StatsMemberMonthJoinEasylogin.vue'),
							},
						],
					},
					{
						path: 'date-join',
						children: [
							{
								path: '',
								name: 'StatsMemberDateJoin',
								component: () => import('@/pages/common/stats/StatsMemberDateJoin.vue'),
							},
							{
								path: 'easylogin',
								name: 'StatsMemberDateJoinEasylogin',
								component: () => import('@/pages/common/stats/StatsMemberDateJoinEasylogin.vue'),
							},
						],
					},
					{
						path: 'grade',
						name: 'StatsMemberGrade',
						component: () => import('@/pages/common/stats/StatsMemberGrade.vue'),
					},
					{
						path: 'year',
						name: 'StatsMemberYear',
						component: () => import('@/pages/common/stats/StatsMemberYear.vue'),
					},
					{
						path: 'month',
						name: 'StatsMemberMonth',
						component: () => import('@/pages/common/stats/StatsMemberMonth.vue'),
					},
					{
						path: 'date',
						name: 'StatsMemberDate',
						component: () => import('@/pages/common/stats/StatsMemberDate.vue'),
					},
					{
						path: 'withdrawal',
						name: 'StatsMemberWithDrawal',
						component: () => import('@/pages/common/stats/StatsMemberWithDrawal.vue'),
					},
					{
						path: 'withdrawal-state',
						name: 'StatsMemberWithDrawalState',
						component: () => import('@/pages/common/stats/StatsMemberWithDrawalState.vue'),
					},
				],
			},
			{
				path: 'save',
				children: [
					{
						path: 'month',
						name: 'StatsSaveMonth',
						component: () => import('@/pages/common/stats/StatsSaveMonth.vue'),
					},
					{
						path: 'date',
						name: 'StatsSaveDate',
						component: () => import('@/pages/common/stats/StatsSaveDate.vue'),
					},
				],
			},
			{
				path: 'goal',
				children: [
					{
						path: '',
						name: 'StatsGoal',
						component: () => import('@/pages/common/stats/StatsGoal.vue'),
					},
					{
						path: 'amount',
						name: 'StatsGoalAmount',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/stats/popup/StatsGoalAmount.vue'),
					},
				],
			},
			{
				path: 'performance',
				name: 'StatsPerformance',
				component: () => import('@/pages/common/stats/StatsPerformance.vue'),
			},
			{
				path: 'db',
				children: [
					{
						path: 'category',
						name: 'StatsDbCategory',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/stats/popup/StatsDbCate.vue'),
					},
				],
			},
			{
				path: 'ep-prod',
				name: 'StatsEpProd',
				component: () => import('@/pages/common/stats/StatsEpProd.vue'),
			},
			{
				path: 'naver-cps',
				name: 'StatsNaverCps',
				component: () => import('@/pages/common/stats/StatsNaverCps.vue'),
			},
		],
	},
	{
		path: '/pro/stats',
		meta: {
			version: 'pro',
		},
		redirect: { name: 'ProStatsOrder' },
		children: [
			{
				path: 'order',
				children: [
					{
						path: '',
						name: 'ProStatsOrder',
						component: () => import('@/pages/pro/stats/StatsOrder.vue'),
					},
					{
						path: 'api',
						children: [
							{
								path: '',
								name: 'ProStatsOrderApi',
								component: () => import('@/pages/pro/stats/StatsOrderApi.vue'),
							},
						],
					},
				],
			},
			{
				path: 'inflow',
				children: [
					{
						path: '',
						name: 'ProStatsInFlow',
						component: () => import('@/pages/pro/stats/StatsInFlow.vue'),
					},
					{
						path: 'api',
						name: 'ProStatsInFlowApi',
						component: () => import('@/pages/pro/stats/StatsInFlowApi.vue'),
					},
				],
			},
			{
				path: 'payment',
				children: [
					{
						path: '',
						name: 'ProStatsPayment',
						component: () => import('@/pages/pro/stats/StatsPayment.vue'),
					},
					{
						path: 'easypay',
						name: 'ProStatsPaymentEasypay',
						component: () => import('@/pages/pro/stats/StatsPaymentEasypay.vue'),
					},
					{
						path: 'api',
						name: 'ProStatsPaymentApi',
						component: () => import('@/pages/pro/stats/StatsPaymentApi.vue'),
					},
				],
			},
			{
				path: 'db',
				children: [
					{
						path: '',
						name: 'ProStatsDb',
						component: () => import('@/pages/pro/stats/StatsDb.vue'),
					},
				],
			},
		],
	},
];

export default routes;