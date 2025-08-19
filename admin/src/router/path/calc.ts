const routes = [
	{
		path: '/calc',
		redirect: { name: 'ProCalcState' },
		children: [
			{
				path: 'help',
				name: 'CalcHelp',
				meta: {
					isPopup: true,
				},
				component: () => import('@/pages/common/calc/popup/CalcHelp.vue'),
			},
			{
				path: 'state',
				children: [
					{
						path: 'detail',
						children: [
							{
								path: 'sell',
								children: [
									{
										path: 'history',
										name: 'CalcStateDetailSellHistory',
										meta: {
											isPopup: true,
										},
										component: () => import('@/pages/common/calc/popup/CalcStateDetailSellHistory.vue'),
									},
								],
							},
							{
								path: 'penalty',
								children: [
									{
										path: 'history',
										name: 'CalcStateDetailPenaltyHistory',
										meta: {
											isPopup: true,
										},
										component: () => import('@/pages/common/calc/popup/CalcStateDetailPenaltyHistory.vue'),
									},
								],
							},
						],
					},
				],
			},
			{
				path: 'tax',
				children: [
					{
						path: 'detail',
						name: 'CalcTaxDetail',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/calc/popup/CalcTaxDetail.vue'),
					},
				],
			},
			{
				path: 'data',
				children: [
					{
						path: 'deadline',
						name: 'CalcDataDeadline',
						component: () => import('@/pages/common/calc/CalcDataDeadline.vue'),
					},
					{
						path: 'all',
						name: 'CalcDataAll',
						component: () => import('@/pages/common/calc/CalcDataAll.vue'),
					},
					{
						path: 'modify',
						name: 'CalcDataModify',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/calc/popup/CalcDataModify.vue'),
					},
				],
			},
		],
	},
	{
		path: '/pro/calc',
		meta: {
			version: 'pro',
		},
		redirect: { name: 'ProCalcState' },
		children: [
			{
				path: 'state',
				children: [
					{
						path: '',
						name: 'ProCalcState',
						component: () => import('@/pages/pro/calc/CalcState.vue'),
					},
					{
						path: 'detail',
						children: [
							{
								path: '',
								name: 'ProCalcStateDetail',
								component: () => import('@/pages/pro/calc/CalcStateDetail.vue'),
							},
							{
								path: 'sell',
								children: [
									{
										path: '',
										name: 'ProCalcStateDetailSell',
										component: () => import('@/pages/pro/calc/CalcStateDetailSell.vue'),
									},
								],
							},
							{
								path: 'penalty',
								children: [
									{
										path: '',
										name: 'ProCalcStateDetailPenalty',
										component: () => import('@/pages/pro/calc/CalcStateDetailPenalty.vue'),
									},
								],
							},
							{
								path: 'ship',
								name: 'ProCalcStateDetailShip',
								component: () => import('@/pages/pro/calc/CalcStateDetailShip.vue'),
							},
						],
					},
				],
			},
			{
				path: 'total',
				children: [
					{
						path: '',
						name: 'ProCalcTotal',
						component: () => import('@/pages/pro/calc/CalcTotal.vue'),
					},
					{
						path: 'sell',
						name: 'ProCalcTotalSell',
						component: () => import('@/pages/pro/calc/CalcTotalSell.vue'),
					},
					{
						path: 'penalty',
						name: 'ProCalcTotalPenalty',
						component: () => import('@/pages/pro/calc/CalcTotalPenalty.vue'),
					},
					{
						path: 'ship',
						name: 'ProCalcTotalShip',
						component: () => import('@/pages/pro/calc/CalcTotalShip.vue'),
					},
				],
			},
			{
				path: 'tax',
				children: [
					{
						path: '',
						name: 'ProCalcTax',
						component: () => import('@/pages/pro/calc/CalcTax.vue'),
					},
				],
			},
		],
	},
];

export default routes;