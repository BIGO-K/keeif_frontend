import mons from '$/utils/mons';
import { useBackend } from '$/composables/useBackend';
export function useRegist() {
	const { bom, loading } = mons();

	async function isDuplicateLoginId(loginId: string) {
		const { is_exist } = await useBackend().command<{
			is_exist: boolean
		}>('v1/members/id-duplicate-check', {
			method: 'post',
			data: {
				login_id: loginId,
			}
		});

		return is_exist;
	}

	return {
		isDuplicateLoginId
	};
}