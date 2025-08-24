import { type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	// 회원가입
	{
		path: '/signup',
		name: 'Signup',
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
			// 약관동의 및 정보입력
			{
				path: ':id(agreement|input)',
				name: 'SignupInput',
				component: () => import('@/page/signup/input/SignupInput.vue'),
			},
			// 추가정보입력
			{
				path: 'sns',
				name: 'SignupInputSns',
				component: () => import('@/page/signup/input/sns/SignupInputSns.vue'),
			},
			// 가입완료
			{
				path: 'success',
				name: 'SignupSuccess',
				component: () => import('@/page/signup/success/SignupSuccess.vue'),
				children: [
					{
						path: 'sns',
						name: 'SignSuccessSns'
					}
				]
			},
			// 중복가입
			{
				path: 'registered',
				name: 'SignupRegistered',
				component: () => import('@/page/signup/registered/SignupRegistered.vue'),
			},
		]
	},
	// 로그인
	{
		path: '/login',
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
			}
		]
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
							tab: '아이디 찾기'
						},
						component: () => import('@/page/find/id/FindId.vue'),
					},
					// 비밀번호찾기
					{
						path: 'password',
						name: 'FindPassword',
						meta: {
							tab: '비밀번호 찾기'
						},
						component: () => import('@/page/find/password/FindPassword.vue'),
					},
				]
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
		]
	},
	// 비밀번호
	{
		path: '/password',
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
		]
	},
	// 인증
	{
		path: '/auth',
		// redirect: {
		// 	name: 'AuthPassword'
		// },
		children: [
			// 간편로그인인증
			{
				path: 'easy',
				name: 'AuthEasy',
				component: () => import('@/page/auth/easy/AuthEasy.vue'),
			},
			// 성인인증
			{
				path: 'adult',
				name: 'AuthAdult',
				component: () => import('@/page/auth/adult/AuthAdult.vue'),
			},
		]
	},
	// 리뉴얼
	{
		path: '/renewal',
		children: [
			// 회원조회
			{
				path: 'verification',
				name: 'RenewalVerification',
				component: () => import('@/page/renewal/verification/RenewalVerification.vue'),
			},
			// 비밀번호설정
			{
				path: 'password',
				name: 'RenewalPassword',
				component: () => import('@/page/renewal/password/RenewalPassword.vue'),
			},
		]
	},
];

export default routes;