//import { useRouter } from 'vue-router';
import { useAuthStore } from '$/stores/useAuthStore';
import mons from '$/utils/mons';

export function useConfirmLogin(redirectToAfter: string, message?: string) {
	// const router = useRouter();
	const authStore = useAuthStore();
	const { confirm } = mons();

	// (() => {

	// 	if (!authStore.member) {
	// 		confirm(message || '로그인이 필요합니다 \n로그인 페이지로 이동하시겠습니까?', flag => {
	// 			if (!flag) {
	// 				return;
	// 			}

	// 			router.push({
	// 				name: 'Login',
	// 				query: {
	// 					redirect_to_after: redirectToAfter,
	// 				}
	// 			});
	// 		});
	// 	}

	// })();

	return {

	};

}