<template>
	<div class="m_overlay-like-folder">
		<h3><b>상품을 담을 폴더를 선택하세요</b></h3>
		<button
			type="button"
			class="btn_add-folder"
			@click="bomCreateWishlistFolder"
		>
			<i class="ico_add"></i><b>새 폴더 추가하기</b>
		</button>
		<ul>
			<li
				v-for="folder in folders"
				:key="folder.id"
			>
				<button
					type="button"
					@click="moveWished(folder)"
				>
					<lazyload
						v-if="folder.recent_goods_thumbnail_url"
						class="mm_bg-cover image_product"

						:src="folder.recent_goods_thumbnail_url"
					></lazyload>
					<i
						v-else
						class="ico_like"
					></i>
					<b>{{ folder.name }}<small>{{ folder.records_count }}</small></b>
				</button>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useWishedGoods } from '$/composables/useWishedGoods';
	import Lazyload from '@/component/Lazyload.vue';

	const props = defineProps<{
		goodsList: number[]
		closer: CloseHandler<void>
	}>();


	defineExpose<OverlayComponentExpose>({
		title: `폴더 선택`,
	});

	/** 전역 페이지 composable */
	const { bom, loading } = useGlobalPageContext();

	const { getFolders, addFolder, moveToFolder } = useWishedGoods();
	const folders = ref<GoodsWishFolder[]>(await getFolders());

	function bomCreateWishlistFolder() {
		bom.prompt(
			'추가할 폴더 이름을 입력하세요',
			async (_is: boolean, _values: Record<string, string>) => {

				if (!_is) {
					return;
				}

				if (!_values.folder) {
					return bom.alert('폴더명을 입력해주세요.');
				}

				if (_values.folder.length > 10) {
					return bom.alert('폴더명은 최대 10자까지 입력 가능합니다.');
				}

				loading.show();
				try {
					await addFolder(_values.folder);
					folders.value = await getFolders();
				}
				catch (e) {
					useErrorAlert(e, { alertCallback: () => bomCreateWishlistFolder });
				}
				finally {
					loading.hide();
				}
			},
			{
				title: '새 폴더 추가하기',
				forms: [
					{ type: 'text', name: 'folder', maxLength: 10, placeholder: '최대 10자 입력' }
				]
			}
		);
	}

	/** 폴더 이동 */
	async function moveWished(folder: GoodsWishFolder) {
		try {
			await moveToFolder(props.goodsList, folder.id);

			bom.alert(`${folder.name} 폴더로 이동되었습니다.`, () => {
				props.closer();
			});
		}
		catch (e) {
			useErrorAlert(e);
		}
	}
</script>