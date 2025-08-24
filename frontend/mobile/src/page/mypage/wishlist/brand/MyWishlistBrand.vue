<template>
	<p
		v-if="brands.length < 1"
		class="mm_text-none"
	>
		<i class="ico_text-none"></i>찜한 브랜드가 없습니다
	</p>

	<div
		v-else
		class="m_mylike-brand"
	>
		<ul>
			<li
				v-for="brand in brands"
				:key="brand.id"
			>
				<mm-link :to="{ name: 'BrandShop', params: { id: brand.id } }">
					<figure>
						<lazyload
							class="mm_bg-contain image_brand"

							:src="brand.logo_image_url"
							is-ratio
							:is-error-image="false"
							:title="brand.name"
						></lazyload>
						<figcaption>{{ brand.name }}</figcaption>
					</figure>
				</mm-link>
				<button
					type="button"
					class="btn_remove"
					@click="unwishBrand(brand.id)"
				>
					<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
				</button>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useWishedBrand } from '$/composables/useWishedBrand';
	import Lazyload from '@/component/Lazyload.vue';

	/** 전역 페이지 composable */
	const { bom, loading } = useGlobalPageContext();
	/** 브랜드 찜 composable */
	const { all, remove } = useWishedBrand();

	/** 찜한 브랜드 리스트 */
	const brands = ref(await all());

	/** 브랜드 찜 취소 */
	async function unwishBrand(id: number) {
		bom.confirm('찜한 브랜드를 삭제하시겠습니까?', async (flag) => {
			if (!flag) {
				return;
			}

			loading.show();
			try {
				await remove(id);
				bom.alert('찜한 브랜드가 삭제되었습니다.', async () => {
					brands.value = await all();
				});
			}
			catch (e) {
				useErrorAlert(e);
			}
			finally {
				loading.hide();
			}
		});
	}
</script>