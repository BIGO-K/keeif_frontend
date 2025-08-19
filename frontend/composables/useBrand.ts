import { useBackend } from '$/composables/useBackend';


export function useBrand() {
	async function all(): Promise<Brand[]> {
		const { brands } = await useBackend().command<{
            brands: Brand[]
        }>('v1/brand');

		return brands;
	}


	return {
		all,
	};
}