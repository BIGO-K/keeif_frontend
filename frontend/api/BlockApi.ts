import { useBackend } from '$/composables/useBackend';

export const BlockApi = {
	async getPage(pageName: string): Promise<Container[]> {
		const { containers } = await useBackend().command<{
            containers: Container[]
        }>(`v1/exhibit/lego/${pageName}`);

		return containers;
	},
};