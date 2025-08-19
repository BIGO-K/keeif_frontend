import { useBackend } from '$/composables/useBackend';

export function usePolicy() {
    /**
     * 현재 노출중인 약관 및 이전약관 조회
     * @param type 약관타입
     */
	async function getNowAndPrev(type: PolicyType) {
		const { prev_policies, now_policy } = await useBackend().command<{
            prev_policies: PrevPolicy[]
            now_policy: Policy
        }>(`v1/policies/${type}`);

		return {
			prev_policies,
			now_policy,
		};
	}

    /**
     * 약관 상세 내용 조회
     * @param type 약관 타입
     * @param id 약관 ID
     */
	async function getContents(type: PolicyType, id: number): Promise<string> {
		const { contents } = await useBackend().command<{
            contents: string
        }>(`v1/policies/${type}/${id}`);

		return contents;
	}

    /**
     * 협력업체 조회
     * @returns
     */
	async function getCompanies() {
		const { middle_users } = await useBackend().command<{
            middle_users: PolicyCompany[]
        }>('v1/middle-users');

		return middle_users;
	}

	/** 가입시 필요약관 조회 */
	async function getRegistPolicies(): Promise<Policy[]> {
		const { policies } = await useBackend().command<{
			policies: Policy[]
		}>('v1/members/policies');

		return policies;
	}

	return {
		getNowAndPrev,
		getContents,
		getCompanies,
		getRegistPolicies,
	};
}