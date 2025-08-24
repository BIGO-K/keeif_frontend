const routes = [
	{
		path: '/mall',
		redirect: { name: 'MallPolicyUse' },
		children: [
			{
				path: 'policy',
				redirect: { name: 'MallPolicyUse' },
				children: [
					{
						path: 'register',
						name: 'MallPolicRegister',
						component: () => import('@/pages/common/mall/MallPolicyRegister.vue'),
					},
					{
						path: 'modify',
						name: 'MallPolicModify',
						component: () => import('@/pages/common/mall/MallPolicyModify.vue'),
					},
					{
						path: 'use',
						children: [
							{
								path: '',
								name: 'MallPolicyUse',
								component: () => import('@/pages/common/mall/MallPolicyUse.vue'),
							},
							{
								path: 'detail',
								name: 'MallPolicUseDetail',
								component: () => import('@/pages/common/mall/MallPolicyUseDetail.vue'),
							},
						],
					},
					{
						path: 'privacy',
						children: [
							{
								path: '',
								name: 'MallPolicPrivacy',
								component: () => import('@/pages/common/mall/MallPolicyPrivacy.vue'),
							},
							{
								path: 'detail',
								name: 'MallPolicPrivacyDetail',
								component: () => import('@/pages/common/mall/MallPolicyPrivacyDetail.vue'),
							},
						],
					},
					{
						path: 'consent',
						children: [
							{
								path: '',
								name: 'MallPolicConsent',
								component: () => import('@/pages/common/mall/MallPolicyConsent.vue'),
							},
							{
								path: 'detail',
								name: 'MallPolicConsentDetail',
								component: () => import('@/pages/common/mall/MallPolicyConsentDetail.vue'),
							},
						],
					},
					{
						path: 'youth',
						children: [
							{
								path: '',
								name: 'MallPolicYouth',
								component: () => import('@/pages/common/mall/MallPolicyYouth.vue'),
							},
							{
								path: 'detail',
								name: 'MallPolicYouthDetail',
								component: () => import('@/pages/common/mall/MallPolicyYouthDetail.vue'),
							},
						],
					},
				],
			},
			{
				path: 'permission',
				redirect: { name: 'MallPermissionAdmin' },
				children: [
					{
						path: 'admin',
						children: [
							{
								path: '',
								name: 'MallPermissionAdmin',
								component: () => import('@/pages/common/mall/MallPermissionAdmin.vue'),
							},
							{
								path: 'register',
								name: 'MallPermissionAdminRegister',
								component: () => import('@/pages/common/mall/MallPermissionAdminRegister.vue'),
							},
							{
								path: 'modify',
								name: 'MallPermissionAdminModify',
								component: () => import('@/pages/common/mall/MallPermissionAdminModify.vue'),
							},
						],
					},
					{
						path: 'my',
						children: [
							{
								path: '',
								name: 'MallPermissionMy',
								component: () => import('@/pages/common/mall/MallPermissionMy.vue'),
							},
							{
								path: 'Modify',
								name: 'MallPermissionMyModify',
								component: () => import('@/pages/common/mall/MallPermissionMyModify.vue'),
							},
						],
					},
					{
						path: 'part',
						children: [
							{
								path: '',
								name: 'MallPermissionPart',
								component: () => import('@/pages/common/mall/MallPermissionPart.vue'),
							},
							{
								path: 'register',
								name: 'MallPermissionPartRegister',
								component: () => import('@/pages/common/mall/MallPermissionPartRegister.vue'),
							},
							{
								path: 'modify',
								name: 'MallPermissionPartModify',
								component: () => import('@/pages/common/mall/MallPermissionPartModify.vue'),
							},
						],
					},
					{
						path: 'access',
						children: [
							{
								path: '',
								name: 'MallPermissionAccess',
								component: () => import('@/pages/common/mall/MallPermissionAccess.vue'),
							},
							{
								path: 'register',
								name: 'MallPermissionAccessRegister',
								component: () => import('@/pages/common/mall/MallPermissionAccessRegister.vue'),
							},
							{
								path: 'modify',
								name: 'MallPermissionAccessModify',
								component: () => import('@/pages/common/mall/MallPermissionAccessModify.vue'),
							},
						],
					},
				],
			},
			// 로그 정보
			{
				path: 'log',
				redirect: { name: 'MallLogAdmin' },
				children: [
					{
						path: 'admin',
						name: 'MallLogAdmin',
						component: () => import('@/pages/common/mall/MallLogAdmin.vue'),
					},
					{
						path: 'price',
						name: 'MallLogPrice',
						component: () => import('@/pages/common/mall/MallLogPrice.vue'),
					},
					{
						path: 'option',
						name: 'MallLogOption',
						component: () => import('@/pages/common/mall/MallLogOption.vue'),
					},
					{
						path: 'info',
						name: 'MallLogInfo',
						component: () => import('@/pages/common/mall/MallLogInfo.vue'),
					},
					{
						path: 'order',
						name: 'MallLogOrder',
						component: () => import('@/pages/common/mall/MallLogOrder.vue'),
					},
					{
						path: 'member',
						name: 'MallLogMember',
						component: () => import('@/pages/common/mall/MallLogMember.vue'),
					},
					{
						path: 'alarm',
						children: [
							{
								path: '',
								name: 'MallLogAlarm',
								component: () => import('@/pages/common/mall/MallLogAlarm.vue'),
							},
							{
								path: 'template',
								name: 'MallLogAlarmTemplate',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/mall/popup/MallLogAlarmTemplate.vue'),
							},
						],
					},
					{
						path: 'reserve',
						name: 'MallLogReserve',
						component: () => import('@/pages/common/mall/MallLogReserve.vue'),
					},
					{
						path: 'wms',
						name: 'MallLogWms',
						component: () => import('@/pages/common/mall/MallLogWms.vue'),
					},
				],
			},
			{
				path: 'autotemplate',
				name: 'MallAutoTemplate',
				component: () => import('@/pages/common/mall/MallAutoTemplate.vue'),
			},
			{
				path: 'area',
				name: 'MallArea',
				component: () => import('@/pages/common/mall/MallArea.vue'),
			},
			{
				path: 'seo',
				name: 'MallSeo',
				component: () => import('@/pages/common/mall/MallSeo.vue'),
			},
			{
				path: 'penalty',
				children: [
					{
						path: '',
						name: 'MallPenalty',
						component: () => import('@/pages/common/mall/MallPenalty.vue'),
					},
					{
						path: 'help',
						meta: {
							isPopup: true,
						},
						children: [
							{
								path: 'receipt',
								name: 'MallPenaltyHelpReceipt',
								component: () => import('@/pages/common/mall/popup/MallPenaltyHelpReceipt.vue'),
							},
							{
								path: 'delay',
								name: 'MallPenaltyHelpDelay',
								component: () => import('@/pages/common/mall/popup/MallPenaltyHelpDelay.vue'),
							},
							{
								path: 'soldout',
								name: 'MallPenaltyHelpSoldout',
								component: () => import('@/pages/common/mall/popup/MallPenaltyHelpSoldout.vue'),
							},
							{
								path: 'invoice',
								name: 'MallPenaltyHelpInvoice',
								component: () => import('@/pages/common/mall/popup/MallPenaltyHelpInvoice.vue'),
							},
							{
								path: 'return',
								name: 'MallPenaltyHelpReturn',
								component: () => import('@/pages/common/mall/popup/MallPenaltyHelpReturn.vue'),
							},
							{
								path: 'exchange',
								name: 'MallPenaltyHelpExchange',
								component: () => import('@/pages/common/mall/popup/MallPenaltyHelpExchange.vue'),
							},
						],
					},
				],
			},
			{
				path: 'amends',
				children: [
					{
						path: '',
						name: 'MallAmends',
						component: () => import('@/pages/common/mall/MallAmends.vue'),
					},
					{
						path: 'help',
						meta: {
							isPopup: true,
						},
						children: [
							{
								path: 'price',
								name: 'MallAmendsHelpPrice',
								component: () => import('@/pages/common/mall/popup/MallAmendsHelpPrice.vue'),
							},
							{
								path: 'delay',
								name: 'MallAmendsHelpDelay',
								component: () => import('@/pages/common/mall/popup/MallAmendsHelpDelay.vue'),
							},
							{
								path: 'soldout',
								name: 'MallAmendsHelpSoldout',
								component: () => import('@/pages/common/mall/popup/MallAmendsHelpSoldout.vue'),
							},
						],
					},
				],
			},
		],
	},
];

export default routes;