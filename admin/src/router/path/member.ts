const routes = [
	{
		path: '/member',
		redirect: { name: 'MemberManage' },
		children: [
			{
				path: 'manage',
				children: [
					{
						path: '',
						name: 'MemberManage',
						component: () => import('@/pages/common/member/MemberManage.vue'),
					},
					{
						path: 'sms',
						name: 'MemberManageSms',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/member/popup/MemberManageSms.vue'),
					},
					{
						path: 'mail',
						name: 'MemberManageMail',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/member/popup/MemberManageMail.vue'),
					},
					{
						path: 'point',
						name: 'MemberManagePoint',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/member/popup/MemberManagePoint.vue'),
					},
					{
						path: 'detail',
						children: [
							{
								path: '',
								name: 'MemberManageDetail',
								component: () => import('@/pages/common/member/MemberManageDetail.vue'),
							},
							{
								path: 'sms',
								name: 'MemberManageDetailSms',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/member/popup/MemberManageDetailSms.vue'),
							},
							{
								path: 'mail',
								name: 'MemberManageDetailMail',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/member/popup/MemberManageDetailMail.vue'),
							},
							{
								path: 'history',
								name: 'MemberManageDetailHistory',
								meta: {
									isPopup: true,
								},
								component: () => import('@/pages/common/member/popup/MemberManageDetailHistory.vue'),
							},
							{
								path: 'refund',
								meta: {
									isPopup: true,
								},
								children: [
									{
										path: 'register',
										name: 'MemberManageDetailRefundRegister',
										component: () => import('@/pages/common/member/popup/MemberManageDetailRefundRegister.vue'),
									},
									{
										path: 'modify',
										name: 'MemberManageDetailRefundModify',
										component: () => import('@/pages/common/member/popup/MemberManageDetailRefundModify.vue'),
									},
								],
							},
						],
					},
				],
			},
			{
				path: 'staff',
				children: [
					{
						path: '',
						name: 'MemberStaff',
						component: () => import('@/pages/common/member/MemberStaff.vue'),
					},
					{
						path: 'register',
						name: 'MemberStaffRegister',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/member/popup/MemberStaffRegister.vue'),
					},
				],
			},
			{
				path: 'push',
				children: [
					{
						path: '',
						name: 'MemberPush',
						component: () => import('@/pages/common/member/MemberPush.vue'),
					},
					{
						path: 'detail',
						name: 'MemberPushDetail',
						component: () => import('@/pages/common/member/MemberPushDetail.vue'),
					},
					{
						path: 'register',
						name: 'MemberPushRegister',
						component: () => import('@/pages/common/member/MemberPushRegister.vue'),
					},
					{
						path: 'modify',
						name: 'MemberPushModify',
						component: () => import('@/pages/common/member/MemberPushModify.vue'),
					},
					{
						path: 'tester',
						name: 'MemberPushTester',
						component: () => import('@/pages/common/member/MemberPushTester.vue'),
					},
				],
			},
			{
				path: 'dormant',
				name: 'MemberDormant',
				component: () => import('@/pages/common/member/MemberDormant.vue'),
			},
			{
				path: 'grade',
				children: [
					{
						path: '',
						name: 'MemberGrade',
						component: () => import('@/pages/common/member/MemberGrade.vue'),
					},
					{
						path: 'modify',
						children: [
							{
								path: '',
								name: 'MemberModify',
								component: () => import('@/pages/common/member/MemberModify.vue'),
							},
							{
								path: 'coupon',
								meta: {
									isPopup: true,
								},
								name: 'MemberModifyCoupon',
								component: () => import('@/pages/common/member/popup/MemberModifyCoupon.vue'),
							},
						],
					},
				],
			},
			{
				path: 'point',
				redirect: { name: 'MemberPointAll' },
				children: [
					{
						path: 'all',
						name: 'MemberPointAll',
						component: () => import('@/pages/common/member/MemberPointAll.vue'),
					},
					{
						path: 'personal',
						children: [
							{
								path: '',
								name: 'MemberPointPersonal',
								component: () => import('@/pages/common/member/MemberPointPersonal.vue'),
							},
							{
								path: 'state',
								meta: {
									isPopup: true,
								},
								name: 'MemberPointPersonalState',
								component: () => import('@/pages/common/member/popup/MemberPointPersonalState.vue'),
							},
						],
					},
					{
						path: 'set',
						name: 'MemberPointSet',
						component: () => import('@/pages/common/member/MemberPointSet.vue'),
					},
				],
			},
			{
				path: 'inform',
				redirect: { name: 'MemberInformTemplate' },
				children: [
					{
						path: 'template',
						children: [
							{
								path: '',
								name: 'MemberInformTemplate',
								component: () => import('@/pages/common/member/MemberInformTemplate.vue'),
							},
							{
								path: 'detail',
								meta: {
									isPopup: true,
								},
								children: [
									{
										path: 'sms',
										name: 'MemberInformTemplateDetailSms',
										component: () => import('@/pages/common/member/popup/MemberInformTemplateDetailSms.vue'),
									},
									{
										path: 'mail',
										name: 'MemberInformTemplateDetailMail',
										component: () => import('@/pages/common/member/popup/MemberInformTemplateDetailMail.vue'),
									},
								],
							},
							{
								path: 'mail',
								children: [
									{
										path: 'register',
										name: 'MemberInformTemplateMailRegister',
										component: () => import('@/pages/common/member/MemberInformTemplateMailRegister.vue'),
									},
									{
										path: 'modify',
										name: 'MemberInformTemplateMailModify',
										component: () => import('@/pages/common/member/MemberInformTemplateMailModify.vue'),
									},
								],
							},
							{
								path: 'sms',
								children: [
									{
										path: 'register',
										name: 'MemberInformTemplateSmsRegister',
										component: () => import('@/pages/common/member/MemberInformTemplateSmsRegister.vue'),
									},
									{
										path: 'modify',
										name: 'MemberInformTemplateSmsModify',
										component: () => import('@/pages/common/member/MemberInformTemplateSmsModify.vue'),
									},
								],
							},
						],
					},
					{
						path: 'send',
						children: [
							{
								path: '',
								name: 'MemberInformSend',
								component: () => import('@/pages/common/member/MemberInformSend.vue'),
							},
							{
								path: 'mail',
								name: 'MemberInformSendMail',
								component: () => import('@/pages/common/member/MemberInformSendMail.vue'),
							},
							{
								path: 'sms',
								name: 'MemberInfromSendSms',
								component: () => import('@/pages/common/member/MemberInformSendSms.vue'),
							},
							{
								path: 'receive',
								meta: {
									isPopup: true,
								},
								name: 'MemberInfromSendReceive',
								component: () => import('@/pages/common/member/popup/MemberInfromSendReceive.vue'),
							},
						],
					},
					{
						path: 'history',
						children: [
							{
								path: '',
								name: 'MemberInformHistory',
								component: () => import('@/pages/common/member/MemberInformHistory.vue'),
							},
							{
								path: 'mail',
								children: [
									{
										path: 'modify',
										name: 'MemberInformHistoryMailModify',
										component: () => import('@/pages/common/member/MemberInformHistoryMailModify.vue'),
									},
								],
							},
							{
								path: 'sms',
								children: [
									{
										path: 'modify',
										name: 'MemberInformHistorySmsModify',
										component: () => import('@/pages/common/member/MemberInformHistorySmsModify.vue'),
									},
								],
							},
							{
								path: 'detail',
								meta: {
									isPopup: true,
								},
								children: [
									{
										path: 'sms',
										name: 'MemberInformHistoryDetailSms',
										component: () => import('@/pages/common/member/popup/MemberInformHistoryDetailSms.vue'),
									},
									{
										path: 'mail',
										name: 'MemberInformHistoryDetailMail',
										component: () => import('@/pages/common/member/popup/MemberInformHistoryDetailMail.vue'),
									},
								],
							},
						],
					},
				],
			},
		],
	},
];

export default routes;