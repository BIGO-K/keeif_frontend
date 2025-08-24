import { useBackend } from '$/composables/useBackend';

export function usePersonalization() {
    /**
     * 신발사이즈 리스트 조회
     * @returns
     */
	async function getShoesSizes() {
		const { shoes_sizes } = await useBackend().command<{
            shoes_sizes: ShoesSize[]
        }>('v1/informations/shoes-sizes');

		return shoes_sizes;
	}

    /**
     * 신발 카테고리 리스트 조회
     * @returns
     */
	async function getShoesCategories() {
		const { shoes_categories } = await useBackend().command<{
            shoes_categories: ShoesCategory[]
        }>('v1/informations/shoes-genders');

		return shoes_categories;
	}

    /**
     * My핏 리스트
     * @returns
     */
	async function getFits() {
		const { fit_list } = await useBackend().command<{
            fit_list: Fit[]
        }>('v1/informations/fits');

		return fit_list;
	}


    /**
     * MY사이즈 조회
     * @returns
     */
	async function getMySize() {
		const { my_size } = await useBackend().command<{
            my_size: MySize
        }>('v1/my/personalization');

		return my_size;
	}

    /**
     * MY사이즈 수정
     * @param form
     */
	async function updateMySize(form: MySize) {
		await useBackend().command('v1/my/personalization', {
			method: 'post',
			data: form,
		});
	}

	return {
		getShoesSizes,
		getShoesCategories,
		getFits,
		getMySize,
		updateMySize,
	};
}