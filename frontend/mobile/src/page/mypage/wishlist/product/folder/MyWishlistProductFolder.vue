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
					@click="addWishedItem(folder)"
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
	import { useWishedStore } from '$/stores/useWishedStore';
	import mons from '$/utils/mons';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useWishedGoods } from '$/composables/useWishedGoods';
	import Lazyload from '@/component/Lazyload.vue';

	defineExpose<OverlayComponentExpose>({
		title: `폴더 선택`,
	});

	const prop = defineProps<{
		goodsId: number,
		closer: CloseHandler<void>
	}>();

	/** form composable */
	const { form, validate } = useForm<{
		name: string
	}>(
		{
			name: '',
		},
		{
			rule: {
				'name(폴더명)': ['required', 'maxLength:10'],
			},
		},
	);
	const wished = useWishedGoods();
	const wishedStore = useWishedStore();
	const folders = ref<GoodsWishFolder[]>([]);
	await getFolders();

	async function getFolders() {
		folders.value = await wished.getFolders();
	}

	const bomCreateWishlistFolder = () => {
		mons().bom.prompt(
			'추가할 폴더 이름을 입력하세요',
			async (_is: boolean, _values: Record<string, string>) => {

				if (!_is) {
					form.value.name = '';

					return;
				}
				form.value.name = _values.folder;
				mons().loading.show();
				try {
					await validate();
					await wished.addFolder(form.value.name);
					form.value.name = '';
					getFolders();
				}
				catch (e) {
					useErrorAlert(e, {
						alertCallback: bomCreateWishlistFolder,
					});
				}
				finally {
					mons().loading.hide();
				}
			},
			{
				title: '새 폴더 추가하기',
				forms: [
					{ type: 'text', name: 'folder', maxLength: 10, placeholder: '최대 10자 입력', value: form.value.name },
				],
			},
		);
	};

	const addWishedItem = async (folder: GoodsWishFolder) => {
		await wishedStore.addToFolder({
			goods_id: prop.goodsId,
			folder_id: folder.id,
		});

		mons().bom.alert(`${folder.name} 폴더에 추가 되었습니다.`, () => {
			prop.closer();
		});
	};
</script>