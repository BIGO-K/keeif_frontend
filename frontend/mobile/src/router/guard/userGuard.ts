import { computed } from 'vue';
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '$/stores/useAuthStore';

export const userGuard = (
	to: RouteLocationNormalized,
	from: RouteLocationNormalized,
	next: NavigationGuardNext,
) => {
	const authStore = useAuthStore();
    /** 회원인 경우 처리 */
	const member = computed(() => authStore.member);

	if (member.value === null) {
		return next({
			name: 'Login',
			query: {
				redirect_to_after: to.path,
			},
		});
	}

	return next();
};