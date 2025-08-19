const routes = [
	{
		path: '/cs',
		redirect: { name: 'CsNotice' },
		children: [
			{
				path: 'transfer-reason',
				name: 'CsTransferReason',
				meta: {
					isPopup: true,
				},
				component: () => import('@/pages/common/cs/popup/CsTransferReason.vue'),
			},
			{
				path: 'transfer-detail',
				name: 'CsTransferDetail',
				meta: {
					isPopup: true,
				},
				component: () => import('@/pages/common/cs/popup/CsTransferDetail.vue'),
			},
			{
				path: 'inquiry-detail',
				name: 'CsInquiryDetail',
				meta: {
					isPopup: true,
				},
				component: () => import('@/pages/common/cs/popup/CsInquiryDetail.vue'),
			},
			{
				path: 'notice',
				children: [
					{
						path: '',
						name: 'CsNotice',
						component: () => import('@/pages/common/cs/CsNotice.vue'),
					},
					{
						path: 'detail',
						name: 'CsNoticeDetail',
						component: () => import('@/pages/common/cs/CsNoticeDetail.vue'),
					},
					{
						path: 'register',
						name: 'CsNoticeRegister',
						component: () => import('@/pages/common/cs/CsNoticeRegister.vue'),
					},
					{
						path: 'modify',
						name: 'CsNoticeModify',
						component: () => import('@/pages/common/cs/CsNoticeModify.vue'),
					},
				],
			},
			{
				path: 'faq',
				children: [
					{
						path: '',
						name: 'CsFaq',
						component: () => import('@/pages/common/cs/CsFaq.vue'),
					},
					{
						path: 'register',
						name: 'CsFaqRegister',
						component: () => import('@/pages/common/cs/CsFaqRegister.vue'),
					},
					{
						path: 'modify',
						name: 'CsFaqModify',
						component: () => import('@/pages/common/cs/CsFaqModify.vue'),
					},
				],
			},
			{
				path: 'faq-category',
				children: [
					{
						path: '',
						name: 'CsFaqCate',
						component: () => import('@/pages/common/cs/CsFaqCate.vue'),
					},
					{
						path: 'register',
						name: 'CsFaqCateRegister',
						component: () => import('@/pages/common/cs/CsFaqCateRegister.vue'),
					},
					{
						path: 'modify',
						name: 'CsFaqCateModify',
						component: () => import('@/pages/common/cs/CsFaqCateModify.vue'),
					},
				],
			},
			{
				path: 'review',
				children: [
					{
						path: '',
						name: 'CsReview',
						component: () => import('@/pages/common/cs/CsReview.vue'),
					},
					{
						path: 'detail',
						name: 'CsReviewDetail',
						component: () => import('@/pages/common/cs/CsReviewDetail.vue'),
					},
					{
						path: 'personal',
						children: [
							{
								path: 'detail',
								name: 'CsReviewDetailPersonal',
								component: () => import('@/pages/common/cs/CsReviewDetailPersonal.vue'),
							},
						],
					},
				],
			},
			{
				path: 'reviewer',
				children: [
					{
						path: '',
						name: 'CsReviewer',
						component: () => import('@/pages/common/cs/CsReviewer.vue'),
					},
					{
						path: 'detail',
						name: 'CsReviewerDetail',
						component: () => import('@/pages/common/cs/CsReviewerDetail.vue'),
					},
				],
			},
			{
				path: 'inquiry-seller',
				children: [
					{
						path: '',
						name: 'CsInquirySeller',
						component: () => import('@/pages/common/cs/CsInquirySeller.vue'),
					},
					{
						path: 'api',
						name: 'CsInquirySellerApi',
						component: () => import('@/pages/common/cs/CsInquirySellerApi.vue'),
					},
					{
						path: 'answer',
						name: 'CsInquirySellerAnswer',
						component: () => import('@/pages/common/cs/CsInquirySellerAnswer.vue'),
					},
				],
			},
			{
				path: 'inquiry-personal',
				children: [
					{
						path: '',
						name: 'CsInquiryPersonal',
						component: () => import('@/pages/common/cs/CsInquiryPersonal.vue'),
					},
					{
						path: 'api',
						name: 'CsInquiryPersonalApi',
						component: () => import('@/pages/common/cs/CsInquiryPersonalApi.vue'),
					},
					{
						path: 'answer',
						name: 'CsInquiryPersonalAnswer',
						component: () => import('@/pages/common/cs/CsInquiryPersonalAnswer.vue'),
					},
					{
						path: 'modify',
						name: 'CsInquiryPersonalModify',
						component: () => import('@/pages/common/cs/CsInquiryPersonalModify.vue'),
					},
				],
			},
			{
				path: 'inquiry-template',
				children: [
					{
						path: '',
						name: 'CsInquiryTemplate',
						component: () => import('@/pages/common/cs/CsInquiryTemplate.vue'),
					},
					{
						path: 'register',
						name: 'CsInquiryTemplateRegister',
						component: () => import('@/pages/common/cs/CsInquiryTemplateRegister.vue'),
					},
					{
						path: 'modify',
						name: 'CsInquiryTemplateModify',
						component: () => import('@/pages/common/cs/CsInquiryTemplateModify.vue'),
					},
				],
			},
			{
				path: 'notify',
				children: [
					{
						path: '',
						name: 'CsNotify',
						component: () => import('@/pages/common/cs/CsNotify.vue'),
					},
					{
						path: 'detail',
						name: 'CsNotifyDetail',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/cs/popup/CsNotifyDetail.vue'),
					},
					{
						path: 'register',
						name: 'CsNotifyRegister',
						meta: {
							isPopup: true,
						},
						component: () => import('@/pages/common/cs/popup/CsNotifyRegister.vue'),
					},
				],
			},
			{
				path: 'delay',
				name: 'CsDelay',
				component: () => import('@/pages/common/cs/CsDelay.vue'),
			},
			{
				path: 'cancel',
				name: 'CsCancel',
				component: () => import('@/pages/common/cs/CsCancel.vue'),
			},
		],
	},
];

export default routes;