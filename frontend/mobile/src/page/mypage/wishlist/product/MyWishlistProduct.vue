<template>
	<div
		class="m_mylike-folder"
		data-sortable
		:class="{ 'S=sortable': isSorting }"
	>
		<!-- 상단영역 -->
		<div class="m_mylike-folder-head">
			<div class="mm_lside">
				<button
					type="button"
					class="btn_add-folder"
					@click="bomCreateWishlistFolder"
				>
					<i class="ico_add"></i><b>새 폴더 추가하기</b>
				</button>
				<p class="text_sortable-note">
					<i class="ico_sortable-handle"><span class="mm_ir-blind">순서이동 버튼</span></i>을 눌러 순서를 편집하세요
				</p>
			</div>
			<div class="mm_rside">
				<button
					type="button"
					class="mm_btn T=sm T=line T=light btn_sort-edit"
					@click="startSort"
				>
					<i class="ico_sortable"></i><b>순서편집</b>
				</button>
				<button
					type="button"
					class="mm_btn T=sm T=line T=light btn_sort-cancel"
					@click="resetSort"
				>
					<b>취소</b>
				</button>
				<button
					type="button"
					class="mm_btn T=sm T=primary btn_sort-complete"
					@click="updateSort"
				>
					<b>저장</b>
				</button>
			</div>
		</div>
		<draggable
			tag="ul"
			:list="folders"
			:move="onMove"
			handle=".btn_sort-handler"
			item-key="id"
		>
			<template #item="{ element : folder }">
				<li>
					<mm-link :to="{ name: 'MyWishlistProductDetail', params: { id: folder.id }}">
						<lazyload
							class="mm_bg-contain image_product"
							:src="folder.recent_goods_thumbnail_url"
						></lazyload>
						<b>{{ folder.name }}<small>{{ folder.records_count }}</small></b>
					</mm-link>
					<div class="mm_btn_box">
						<div class="mm_inline">
							<template v-if="folder.id != 0">
								<button
									type="button"
									class="mm_btn T=2xs T=line T=lighter btn_modify"
									@click="bomUpdateWishlistFolder(folder)"
								>
									<b>수정</b>
								</button>
								<button
									type="button"
									class="btn_remove"
									@click="removeWishGoodsFolder(folder.id)"
								>
									<i class="ico_remove"></i><b class="mm_ir-blind">폴더 삭제</b>
								</button>
								<button
									type="button"
									class="btn_sort-handler"
								>
									<i class="ico_sortable-handle"></i><b class="mm_ir-blind">순서이동</b>
								</button>
							</template>
						</div>
					</div>
				</li>
			</template>
		</draggable>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import draggable from 'vuedraggable';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useWishedGoods } from '$/composables/useWishedGoods';
	import Lazyload from '@/component/Lazyload.vue';
	/** 전역 페이지 composable */
	const { bom, loading } = useGlobalPageContext();
	/** 찜 composable */
	const { getFolders, addFolder, updateFolder, removeFolder, updateFolderSort } = useWishedGoods();
	/** 찜 폴더 리스트 */
	const folders = ref(await getFolders());
	/** 순서 변경하기전 찜폴더 임시 변수  */
	const legacySortFolders = ref<GoodsWishFolder[]>([]);
	/** 순서변경중 여부 */
	const isSorting = ref<boolean>(false);
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

	/** 폴더 추가 */
	function bomCreateWishlistFolder() {
		bom.prompt(
			'추가할 폴더 이름을 입력하세요',
			async (_is: boolean, _values: Record<string, string>) => {
				if (!_is) {
					form.value.name = '';

					return;
				}

				form.value.name = _values.folder_name;

				try {
					loading.show();
					await validate();
					await addFolder(form.value.name);
					bom.alert('새 폴더가 추가되었습니다.', async () => {
						try {
							form.value.name = '';
							folders.value = await getFolders();
						}
						catch (e) {
							useErrorAlert(e);
						}
					});
				}
				catch (e) {
					useErrorAlert(e, {
						alertCallback: bomCreateWishlistFolder,
					});
				}
				finally {
					loading.hide();
				}

			},
			{
				title: '새 폴더 추가하기',
				forms: [
					{ type: 'text', name: 'folder_name', maxLength: 10, placeholder: '최대 10자 입력', value: form.value.name },
				],
			},
		);
	}

	/**
	 * 폴더명 수정
	 * @param folder
	 */
	function bomUpdateWishlistFolder(folder: GoodsWishFolder) {
		form.value.name = folder.name;
		bom.prompt(
			'변경할 폴더 이름을 입력하세요',
			async (_is: boolean, _values: Record<string, string>) => {
				if (!_is) {
					form.value.name = '';

					return;
				}

				form.value.name = _values.folder_name;

				try {
					loading.show();
					await validate();
					await updateFolder(folder.id, form.value.name);
					bom.alert('폴더명이 수정되었습니다.', async () => {
						try {
							form.value.name = '';
							folders.value = await getFolders();
						}
						catch (e) {
							useErrorAlert(e);
						}
					});
				}
				catch (e) {
					useErrorAlert(e, {
						alertCallback: () => {
							bomUpdateWishlistFolder(folder);
						},
					});
				}
				finally {
					loading.hide();
				}
			},
			{
				title: '폴더 이름 변경하기',
				forms: [
					{ type: 'text', name: 'folder_name', maxLength: 10, placeholder: '최대 10자 입력', value: form.value.name },
				],
			},
		);
	}

	/**
	 * 폴더 삭제
	 * @param id
	 */
	async function removeWishGoodsFolder(id: number) {
		bom.confirm('폴더를 삭제하시겠습니까?<br>삭제된 폴더는 복구할 수 없습니다.', async (flag) => {
			if (!flag) {
				return;
			}

			loading.show();
			try {
				await removeFolder(id);
				bom.alert('폴더가 삭제되었습니다.', async () => {
					try {
						folders.value = await getFolders();
					}
					catch (e) {
						useErrorAlert(e);
					}
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

	/** 폴더 순서 변경 */
	async function updateSort() {
		const sorts = folders.value.map((folder, index) => ({ id: folder.id, order_seq: index }));
		sorts.shift();

		if (sorts.length < 2) {
			isSorting.value = false;

			return;
		}

		loading.show();
		try {
			await updateFolderSort(sorts);
		}
		catch (e) {
			useErrorAlert(e);
			resetSort();
		}
		finally {
			loading.hide();
		}


		isSorting.value = false;
	}

	/** vue draggableComponent 컴포넌트에서 사용되는 함수  */
	function onMove(e) {
		if (e.relatedContext.index === 0 || e.draggedContext.futureIndex === 0) {
			// 기본폴더 다음으로 넣어준다
			// false 는 동작 취소
			// -1 : 타겟 이전으로
			return 1;
		}

		return;
	}

	// 순서 편집 시작
	function startSort() {
		if (folders.value.length <= 2) {
			return bom.alert('기본 폴더는 순서 편집이 불가 합니다.');
		}
		isSorting.value = true;
		legacySortFolders.value = [...folders.value];
	}

	// 순서편집 취소
	function resetSort() {
		isSorting.value = false;
		// 총 폴더 개수가 2개 이하인경우
		if (folders.value.length < 2) {
			return;
		}

		folders.value = legacySortFolders.value;
	}
</script>