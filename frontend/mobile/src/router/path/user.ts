import { RouteRecordRaw } from 'vue-router';

const popupBaseTransition = {
	pageType: 'popup',
	transition: 'slide-up',
};
const routes: RouteRecordRaw[] = [
	// 회원가입
	{
		path: '/signup',
		name: 'Signup',
		meta: popupBaseTransition,
		redirect: {
			name: 'SignupVerification',
		},
		children: [
			// 본인인증
			{
				path: 'verification',
				name: 'SignupVerification',
				component: () => import('@/page/signup/verification/SignupVerification.vue'),
			},
			{
				path: 'input',
				name: 'SignupInput',
				component: () => import('@/page/signup/agreement/SignupAgreement.vue'),
			},
			// 약관동의 및 정보입력
			// {
			// 	path: ':id(agreement|input)',
			// 	name: 'SignupInput',
			// 	component: () => import('@/page/signup/input/SignupInput.vue'),
			// },
			// 추가정보입력
			{
				path: 'sns',
				name: 'SignupSns',
				component: () => import('@/page/signup/SnsPolicy.vue'),
			},
			// 가입완료
			{
				path: 'success',
				name: 'SignupSuccess',
				component: () => import('@/page/signup/success/SignupSuccess.vue'),
			},
			// 중복가입
			{
				path: 'registered',
				name: 'SignupRegistered',
				component: () => import('@/page/signup/registered/SignupRegistered.vue'),
			},
		],
	},
	// 로그인
	{
		path: '/login',
		meta: popupBaseTransition,
		children: [
			{
				path: '',
				name: 'Login',
				component: () => import('@/page/login/Login.vue'),
			},
			// 애플로그인 실패
			{
				path: 'failed-apple',
				name: 'LoginFailedApple',
				component: () => import('@/page/login/failed/LoginFailedApple.vue'),
			},
		],
	},
	// 아이디/비밀번호 찾기
	{
		path: '/find',
		children: [
			{
				path: '',
				name: 'Find',
				component: () => import('@/page/find/Find.vue'),
				redirect: {
					name: 'FindId',
				},
				children: [
					// 아이디찾기
					{
						path: 'id',
						name: 'FindId',
						meta: {
							tab: '아이디 찾기',
						},
						component: () => import('@/page/find/id/FindId.vue'),
					},
					// 비밀번호찾기
					{
						path: 'password',
						name: 'FindPassword',
						meta: {
							tab: '비밀번호 찾기',
						},
						component: () => import('@/page/find/password/FindPassword.vue'),
					},
				],
			},
			// 아이디찾기 완료
			{
				path: 'id/success',
				name: 'FindIdSuccess',
				component: () => import('@/page/find/id/success/FindIdSuccess.vue'),
			},
			// 비밀번호 재설정
			{
				path: 'password/update',
				name: 'FindPasswordUpdate',
				component: () => import('@/page/find/password/update/FindPasswordUpdate.vue'),
			},
		],
	},
	// 비밀번호
	{
		path: '/password',
		meta: popupBaseTransition,
		children: [
			// 비밀번호 변경
			{
				path: 'update',
				name: 'PasswordUpdate',
				component: () => import('@/page/password/update/PasswordUpdate.vue'),
			},
			// 비밀번호 6개월
			{
				path: 'security',
				name: 'PasswordSecurity',
				component: () => import('@/page/password/security/PasswordSecurity.vue'),
			},
		],
	},
	// 인증
	{
		path: '/auth',
		children: [
			// 성인인증
			{
				path: 'adult',
				name: 'AuthAdult',
				meta: {
					pageType: 'popup',
					transition: 'slide-up',
				},
				component: () => import('@/page/auth/adult/AuthAdult.vue'),
			},
		],
	},
];

export default routes;